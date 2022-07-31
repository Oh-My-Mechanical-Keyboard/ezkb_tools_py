from mpmath import *
from decimal import *

class SCH_JSON:
    sch_template = '''
    {
        "schematics": [
            {
                "docType": 1,
                "title": "Sheet_1",
                "dataStr": {
                    "head": {
                        "docType": "1",
                        "editorVersion": "6.5.8",
                        "newgId": true,
                        "c_para": {
                            "Prefix Start": "1"
                        },
                        "c_spiceCmd": "null",
                        "hasIdFlag": true,
                        "uuid": "1d93c81dd1e54fe0b354b053e45ba870",
                        "x": "0",
                        "y": "0",
                        "portOfADImportHack": "",
                        "importFlag": 0,
                        "transformList": ""
                    },
                    "canvas": "CA~1000~1000~#FFFFFF~yes~#CCCCCC~5~1000~1000~line~5~pixel~5~0~0",
                    "shape": [{{shape_str}}],
                    "BBox": {
                        "x": 0,
                        "y": -807.4,
                        "width": 1149,
                        "height": 808.3
                    },
                    "colors": []
                }
            }
        ],
        "docType": 5,
        "title": "testezeda",
        "name": "testezeda"
    }
    '''
    key_uuid_suffix_counter = 0
    pcb_key_str = []

    def __init__(self):
        # Set up decimal and mpmath
        getcontext().prec = 50
        mp.dps = 50
        mp.pretty = True

    def rotate_point_around_anchor(self, x, y, anchor_x, anchor_y, angle):
        radius_squared = ((x - anchor_x) ** Decimal('2')) + ((y-anchor_y) ** Decimal('2'))
        radius = Decimal.sqrt(radius_squared)
        anglefrac = angle.as_integer_ratio()
        radian_qty = radians(anglefrac[0]/anglefrac[1])
        cos_result = Decimal(str(cos(radian_qty)))
        sin_result = Decimal(str(sin(radian_qty)))
        
        old_x = x - anchor_x
        old_y = y - anchor_y
        
        coord = matrix([float(old_x), float(old_y)])
        transform = matrix([[cos(radian_qty), -sin(radian_qty)], [sin(radian_qty), cos(radian_qty)]])
        result = transform * coord
        
        new_x = Decimal(str(result[0]))
        new_y = Decimal(str(result[1]))
        
        new_x += anchor_x
        new_y += anchor_y
        
        return (new_x, new_y)
    def add_hotswap_key(self, x, y, r, uuid_suffix, key_in_north=False, has_rgb=False):

        diode_x_offset = Decimal("25") # 二极管偏移位置
        diode_y_offset = Decimal("25")

        x_10mil = Decimal('100')*Decimal(str(x))/Decimal('25.4') #圆心位置
        y_10mil = Decimal('100')*Decimal(str(y))/Decimal('25.4')


        x_cor = x_10mil
        y_cor = y_10mil

        x_diode_cor = x_10mil+diode_x_offset
        y_diode_cor = y_10mil+diode_y_offset

        if has_rgb:
            rgb_x_offset = Decimal("0") # RGB偏移
            rgb_y_offset = Decimal("600") # 196.85mil
            x_rgb_cor = x_10mil+rgb_x_offset # RGB中心位置
            y_rgb_cor = y_10mil+rgb_y_offset

        key_pat_str = "\"LIB~{}~{}~~~0~ggea54457f7354c4b{:02x}~954f66c42d5b486694930defadeb9c21~d0c6b547ca454c708c519a606c44d039~0~~yes~yes~~~#@$T~N~{}~{}~0~#000080~Arial~~~~~comment~kailh~1~start~gge14{:02x}~0~#@$E~{}~{}~4~4~#000000~1~0~none~gge15{:02x}~0#@$T~P~{}~{}~0~#000080~Arial~~~~~comment~SW{:02x}~1~start~gge17{:02x}~0~\"".format(x_cor,y_cor,uuid_suffix,x_cor-Decimal("20.0"),y_cor-Decimal("15.0"),uuid_suffix,x_cor,y_cor,uuid_suffix,x_cor,y_cor-Decimal("15.0"),uuid_suffix,uuid_suffix)
        diode_pat_str = "\"LIB~{}~{}~~~0~ggea6e3555a40bbd0{:02x}~c00a5353f3b94652815b35507393626c~96cef3e97a674dddb50d607b26bdbb48~0~~yes~yes~~~#@$T~N~{}~{}~0~#000080~Arial~~~~~comment~CD4148~1~start~gge20{:02x}~0~#@$E~{}~{}~4~4~#000000~1~0~none~gge23{:02x}~#@$T~P~{}~{}~0~#000080~Arial~~~~~comment~D{:02x}~1~start~gge21{:02x}~0~\"".format(x_diode_cor,y_diode_cor,uuid_suffix,x_diode_cor,y_diode_cor,uuid_suffix,x_diode_cor,y_diode_cor,uuid_suffix,x_diode_cor-Decimal("10.0"),y_diode_cor-Decimal("5.0"),uuid_suffix,uuid_suffix)
        key_pat_str = ",".join([key_pat_str,diode_pat_str])
        if has_rgb:
            rgb_pat_str = "\"LIB~{}~{}~~~0~ggebd237e6e201399{:02x}~39a66e805a46415db367c3ecceb53fdd~08d5f75f6b4c42bd938151d495c5d287~0~~yes~yes~~~#@$T~N~{}~{}~0~#000080~Arial~~~~~comment~WS2812B~1~start~gge19{:02x}~0~#@$E~{}~{}~4~4~#000000~1~0~none~gge35{:02x}~#@$T~P~{}~{}~0~#000080~Arial~~~~~comment~LED{:02x}~1~start~gge39{:02x}~0~\"".format(x_rgb_cor,y_rgb_cor,uuid_suffix,x_rgb_cor,y_rgb_cor-Decimal("5.0"),uuid_suffix,x_rgb_cor,y_rgb_cor,uuid_suffix,x_rgb_cor-Decimal("15.0"),y_rgb_cor-Decimal("10.0"),uuid_suffix,uuid_suffix)
            key_pat_str = ",".join([key_pat_str,rgb_pat_str])
        return key_pat_str
    
    def add_kle_switchs(self, sws, key_in_north=False, has_rgb=False):
        for sw in sws:
            key_str = self.add_hotswap_key(sw.mm_center[0], Decimal("-1.0")*sw.mm_center[1],
                                        sw.angle, self.key_uuid_suffix_counter, key_in_north, has_rgb)
            self.key_uuid_suffix_counter += 1
            self.pcb_key_str.append(key_str)

    def gen_sch_json_file(self, file_name):
        with open(file_name, 'w') as f:
            f.write(self.sch_template.replace("{{shape_str}}", ",".join(self.pcb_key_str)))
    def print_schjson(self):
        print(self.sch_template.replace("{{shape_str}}", ",".join(self.pcb_key_str)))

# pj = PCB_JSON()

# class SW:
#     mm_center = [0, 0]
#     angle = 0
#     def __init__(self,x,y,r) -> None:
#         self.mm_center = [Decimal(str(x)),Decimal(str(y))]
#         self.angle = Decimal(str(r))

# pj.add_kle_switchs([SW(0,0,0), SW(19.05,0,0), SW(0,19.05,0)])
# # pj.add_kle_switchs([SW(0,0,0)])
# pj.gen_pcb_json_file("pcb.json")






