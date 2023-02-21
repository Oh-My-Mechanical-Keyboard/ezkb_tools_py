from mpmath import *
from decimal import *

class PCB_JSON:
    pcd_template = '''
    {
    "head": {
        "docType": "3",
        "editorVersion": "6.5.8",
        "newgId": true,
        "c_para": [],
        "x": "4020",
        "y": "3364.5",
        "hasIdFlag": true,
        "importFlag": 0,
        "transformList": ""
    },
    "canvas": "CA~1000~1000~#000000~yes~#FFFFFF~18.75~1000~1000~line~18.75~mil~1~45~visible~0.1~0~0~1~yes",
    "shape": [{{shape_str}}],
    "layers": [
        "1~TopLayer~#FF0000~true~false~true~",
        "2~BottomLayer~#0000FF~true~true~true~",
        "3~TopSilkLayer~#FFCC00~true~false~true~",
        "4~BottomSilkLayer~#66CC33~true~false~true~",
        "5~TopPasteMaskLayer~#808080~true~false~true~",
        "6~BottomPasteMaskLayer~#800000~true~false~true~",
        "7~TopSolderMaskLayer~#800080~true~false~true~0.3",
        "8~BottomSolderMaskLayer~#AA00FF~true~false~true~0.3",
        "9~Ratlines~#6464FF~true~false~true~",
        "10~BoardOutLine~#FF00FF~true~false~true~",
        "11~Multi-Layer~#C0C0C0~true~false~true~",
        "12~Document~#FFFFFF~true~false~true~",
        "13~TopAssembly~#33CC99~false~false~false~",
        "14~BottomAssembly~#5555FF~false~false~false~",
        "15~Mechanical~#F022F0~false~false~false~",
        "19~3DModel~#66CCFF~false~false~false~",
        "21~Inner1~#999966~false~false~false~~",
        "22~Inner2~#008000~false~false~false~~",
        "23~Inner3~#00FF00~false~false~false~~",
        "24~Inner4~#BC8E00~false~false~false~~",
        "25~Inner5~#70DBFA~false~false~false~~",
        "26~Inner6~#00CC66~false~false~false~~",
        "27~Inner7~#9966FF~false~false~false~~",
        "28~Inner8~#800080~false~false~false~~",
        "29~Inner9~#008080~false~false~false~~",
        "30~Inner10~#15935F~false~false~false~~",
        "31~Inner11~#000080~false~false~false~~",
        "32~Inner12~#00B400~false~false~false~~",
        "33~Inner13~#2E4756~false~false~false~~",
        "34~Inner14~#99842F~false~false~false~~",
        "35~Inner15~#FFFFAA~false~false~false~~",
        "36~Inner16~#99842F~false~false~false~~",
        "37~Inner17~#2E4756~false~false~false~~",
        "38~Inner18~#3535FF~false~false~false~~",
        "39~Inner19~#8000BC~false~false~false~~",
        "40~Inner20~#43AE5F~false~false~false~~",
        "41~Inner21~#C3ECCE~false~false~false~~",
        "42~Inner22~#728978~false~false~false~~",
        "43~Inner23~#39503F~false~false~false~~",
        "44~Inner24~#0C715D~false~false~false~~",
        "45~Inner25~#5A8A80~false~false~false~~",
        "46~Inner26~#2B937E~false~false~false~~",
        "47~Inner27~#23999D~false~false~false~~",
        "48~Inner28~#45B4E3~false~false~false~~",
        "49~Inner29~#215DA1~false~false~false~~",
        "50~Inner30~#4564D7~false~false~false~~",
        "51~Inner31~#6969E9~false~false~false~~",
        "52~Inner32~#9069E9~false~false~false~~",
        "99~ComponentShapeLayer~#00CCCC~false~false~false~0.4",
        "100~LeadShapeLayer~#CC9999~false~false~false~",
        "101~ComponentMarkingLayer~#66FFCC~false~false~false~",
        "Hole~Hole~#222222~false~false~true~",
        "DRCError~DRCError~#FAD609~false~false~true~"
    ],
    "objects": [
        "All~true~false",
        "Component~true~true",
        "Prefix~true~true",
        "Name~true~false",
        "Track~true~true",
        "Pad~true~true",
        "Via~true~true",
        "Hole~true~true",
        "Copper_Area~true~true",
        "Circle~true~true",
        "Arc~true~true",
        "Solid_Region~true~true",
        "Text~true~true",
        "Image~true~true",
        "Rect~true~true",
        "Dimension~true~true",
        "Protractor~true~true"
    ],
    "BBox": {
        "x": 3985,
        "y": 3336,
        "width": 75,
        "height": 81
    },
    "preference": {
        "hideFootprints": "",
        "hideNets": ""
    },
    "DRCRULE": {
        "Default": {
            "trackWidth": 1,
            "clearance": 0.5984,
            "viaHoleDiameter": 2.4016,
            "viaHoleD": 1.2008
        },
        "isRealtime": true,
        "isDrcOnRoutingOrPlaceVia": false,
        "checkObjectToCopperarea": true,
        "showDRCRangeLine": true
    },
    "netColors": []
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
        r = Decimal("-1.0")*r
        place_x_offset = Decimal("-2.5") # -25mil   #轴座中心位置
        place_y_offset = Decimal("-15.0")   # 150 mil

        diode_x_offset = Decimal("-27.5") # 二极管偏移位置
        diode_y_offset = Decimal("12.0")

        x_10mil = Decimal('100')*Decimal(str(x))/Decimal('25.4') #圆心位置
        y_10mil = Decimal('100')*Decimal(str(y))/Decimal('25.4')

        if has_rgb:
            rgb_y_offset = Decimal("19.685") # 196.85mil
            x_rgb_10mil = x_10mil # RGB中心位置
            y_rgb_10mil = y_10mil+rgb_y_offset
        if key_in_north:
            r += Decimal("180.0")
        if r != 0:
            if (r<0):
                r = Decimal("360")+r
            x_cor, y_cor = self.rotate_point_around_anchor(x_10mil+place_x_offset,y_10mil+place_y_offset,x_10mil,y_10mil,r)
            x_diode_cor, y_diode_cor = self.rotate_point_around_anchor(x_10mil+diode_x_offset,y_10mil+diode_y_offset,x_10mil,y_10mil,r)
            if has_rgb:
                # print("x_10mil:{}, y_10mil:{}, r:{}, x_rgb_10mil:{}, y_rgb_10mil:{}".format(x_10mil, y_10mil,r,x_rgb_10mil,y_rgb_10mil))
                x_rgb_cor, y_rgb_cor = self.rotate_point_around_anchor(x_rgb_10mil,y_rgb_10mil,x_10mil,y_10mil,r)

        else:
            r = Decimal("0")
            x_cor = x_10mil+place_x_offset
            y_cor = y_10mil+place_y_offset
            x_diode_cor = x_10mil+diode_x_offset
            y_diode_cor = y_10mil+diode_y_offset
            if has_rgb:
                x_rgb_cor = x_rgb_10mil
                y_rgb_cor = y_rgb_10mil
        key_pat_str = "\"LIB~{}~{}~~{}~~ggea54457f7354c4b{:02x}~2~77984bad2be54610842f56fb7da52a0a~1663270135~0~~yes~~#@$HOLE~{}~{}~8~gge{:02x}~0#@$TEXT~P~{}~{}~0.6~0~1~4~~4.5~SW{:02x}~~~gge6{:02x}~~0~\"".format(x_cor,y_cor,Decimal("360.0")-r,uuid_suffix,x_cor,y_cor,uuid_suffix,x_cor,y_cor,uuid_suffix,uuid_suffix)
        diode_pat_str = "\"LIB~{}~{}~~{}~~ggea6e3555a40bbd0{:02x}~2~c00a5353f3b94652815b35507393626c~1637389919~0~~yes~~#@$HOLE~{}~{}~4~gge2{:02x}~0#@$TEXT~P~{}~{}~0.6~0~1~4~~4.5~D{:02x}~~~gge8{:02x}~~0~\"".format(x_diode_cor,y_diode_cor,Decimal("540.0")-r,uuid_suffix,x_diode_cor,y_diode_cor,uuid_suffix,x_diode_cor,y_diode_cor,uuid_suffix,uuid_suffix)
        key_pat_str = ",".join([key_pat_str,diode_pat_str])
        if has_rgb:
            rgb_pat_str = "\"LIB~{}~{}~~{}~~ggebd237e6e201399{:02x}~2~3d9e4da5677345b8b94522a242a26e4a~1651917307~0~~yes~~#@$HOLE~{}~{}~6~gge3{:02x}~0#@$TEXT~P~{}~{}~0.6~0~1~4~~4.5~LED{:02x}~~~gge7{:02x}~~0~\"".format(x_rgb_cor,y_rgb_cor,Decimal("360.0")-r,uuid_suffix,x_rgb_cor,y_rgb_cor,uuid_suffix,x_rgb_cor,y_rgb_cor,uuid_suffix,uuid_suffix)
            key_pat_str = ",".join([key_pat_str,rgb_pat_str])
        return key_pat_str
    
    def add_kle_switchs(self, sws, key_in_north=False, has_rgb=False):
        for sw in sws:
            key_str = self.add_hotswap_key(sw.mm_center[0], Decimal("-1.0")*sw.mm_center[1],
                                        sw.angle, self.key_uuid_suffix_counter, key_in_north, has_rgb)
            self.key_uuid_suffix_counter += 1
            self.pcb_key_str.append(key_str)

    def gen_pcb_json_file(self, file_name):
        with open(file_name, 'w') as f:
            f.write(self.pcd_template.replace("{{shape_str}}", ",".join(self.pcb_key_str)))
    def print_pcbjson(self):
        print(self.pcd_template.replace("{{shape_str}}", ",".join(self.pcb_key_str)))

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






