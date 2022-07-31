class pcbjson:
    def __init__(self):
        pass

    def add_hotswap_key(self, x, y, r, dir='south', has_rgb=False):
        pass

    def add

    def eda_reg(self):
        self.meta_reg = {
            'CA': { # 画布
              'prefix': 'CA~',
              'regex':
                  /^CA~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
              'format': [
                {'index': 1, 'label': 'viewWidth'}, {'index': 2, 'label': 'viewHeight'},
                {'index': 3, 'label': 'backGround'},
                {'index': 4, 'label': 'gridVisible'},
                {'index': 5, 'label': 'gridColor'}, {'index': 6, 'label': 'gridSize'},
                {'index': 7, 'label': 'canvasWidth'},
                {'index': 8, 'label': 'canvasHeight'},
                {'index': 9, 'label': 'gridStyle'}, {'index': 10, 'label': 'snapSize'},
                {'index': 11, 'label': 'unit'}, {'index': 12, 'label': 'altSnapSize'},
                {'index': 13, 'label': 'unknown13'},
                {'index': 14, 'label': 'unknown14'},
                {'index': 15, 'label': 'unknown15'}, {'index': 16, 'label': 'originX'},
                {'index': 17, 'label': 'originY'}
              ]
            },
            'HOLE': {
              'prefix': 'HOLE~',
              'regex': /^HOLE~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
              'format': [
                {'index': 1, 'label': 'x'}, {'index': 2, 'label': 'y'},
                {'index': 3, 'label': 'holeR'}, {'index': 4, 'label': 'gId'},
                {'index': 5, 'label': 'locked'}
              ]
            },
            'TRACK': {
              'prefix': 'TRACK~',
              'regex': /^TRACK~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
              'format': [
                {'index': 1, 'label': 'strokeWidth'}, {'index': 2, 'label': 'layerid'},
                {'index': 3, 'label': 'net'}, {'index': 4, 'label': 'pointArr'},
                {'index': 5, 'label': 'gId'}, {'index': 6, 'label': 'locked'}
              ]
            },
            'PAD': {
              'prefix': 'PAD~',
              'regex':
                  /^PAD~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              'format': [
                {'index': 1, 'label': 'shape'}, {'index': 2, 'label': 'x'},
                {'index': 3, 'label': 'y'}, {'index': 4, 'label': 'width'},
                {'index': 5, 'label': 'height'}, {'index': 6, 'label': 'layerid'},
                {'index': 7, 'label': 'net'}, {'index': 8, 'label': 'number'},
                {'index': 9, 'label': 'holeR'}, {'index': 10, 'label': 'pointArr'},
                {'index': 11, 'label': 'rotation'}, {'index': 12, 'label': 'gId'},
                {'index': 13, 'label': 'holeLength'},
                {'index': 14, 'label': 'slotPointArr'},
                {'index': 15, 'label': 'plated'}, {'index': 16, 'label': 'locked'},
                {'index': 17, 'label': 'pasteexpansion'},
                {'index': 18, 'label': 'solderexpansion'},
                {'index': 19, 'label': 'holeCenter'}
              ]
            },
            'SVGNODE': {
              'prefix': 'SVGNODE~',
              'regex': /^SVGNODE~(.*)/,
              'format': [{'index': 1, 'label': 'data'}]
            },
            'ARC': {
              'prefix': 'ARC~',
              'regex':
                  /^ARC~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              'format': [
                {'index': 1, 'label': 'strokeWidth'}, {'index': 2, 'label': 'layerid'},
                {'index': 3, 'label': 'net'}, {'index': 4, 'label': 'd'},
                {'index': 5, 'label': 'c_helper_dots'}, {'index': 6, 'label': 'gId'},
                {'index': 7, 'label': 'locked'}
              ]
            },
            'CIRCLE': {
              'prefix': 'CIRCLE~',
              'regex':
                  /^CIRCLE~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              'format': [
                {'index': 1, 'label': 'cx'}, {'index': 2, 'label': 'cy'},
                {'index': 3, 'label': 'r'}, {'index': 4, 'label': 'strokeWidth'},
                {'index': 5, 'label': 'layerid'}, {'index': 6, 'label': 'gId'},
                {'index': 7, 'label': 'locked'}, {'index': 8, 'label': 'net'},
                {'index': 9, 'label': 'transformarc'}
              ]
            },
            'SOLIDREGION': {
              'prefix': 'SOLIDREGION~',
              'regex':
                  /^SOLIDREGION~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              'format': [
                {'index': 1, 'label': 'layerid'}, {'index': 2, 'label': 'net'},
                {'index': 3, 'label': 'pathStr'}, {'index': 4, 'label': 'type'},
                {'index': 5, 'label': 'gId'}, {'index': 6, 'label': 'teardrop'},
                {'index': 7, 'label': 'targetPad'}, {'index': 8, 'label': 'targetWire'},
                {'index': 9, 'label': 'locked'}
              ]
            },
            'TEXT': {
              'prefix': 'TEXT~',
              'regex':
                  /^TEXT~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              'format': [
                {'index': 1, 'label': 'type'}, {'index': 2, 'label': 'x'},
                {'index': 3, 'label': 'y'}, {'index': 4, 'label': 'strokeWidth'},
                {'index': 5, 'label': 'rotation'}, {'index': 6, 'label': 'mirror'},
                {'index': 7, 'label': 'layerid'}, {'index': 8, 'label': 'net'},
                {'index': 9, 'label': 'fontSize'}, {'index': 10, 'label': 'text'},
                {'index': 11, 'label': 'pathStr'}, {'index': 12, 'label': 'display'},
                {'index': 13, 'label': 'gId'}, {'index': 14, 'label': 'fontFamily'},
                {'index': 15, 'label': 'locked'}, {'index': 16, 'label': 'c_etype'}
              ]
            },
            'LIB': {
              'prefix': 'LIB~',
              'regex':
                  /^LIB~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              'format': [
                {'index': 1, 'label': 'x'}, {'index': 2, 'label': 'y'},
                {'index': 3, 'label': 'c_para'}, {'index': 4, 'label': 'rotation'},
                {'index': 5, 'label': 'importFlag'}, {'index': 6, 'label': 'gId'},
                {'index': 7, 'label': 'layerid'}, {'index': 8, 'label': 'uuid'},
                {'index': 9, 'label': 'utime'}, {'index': 10, 'label': 'locked'},
                {'index': 11, 'label': 'bind_sch_id'},
                {'index': 12, 'label': 'unknown12'},
                {'index': 13, 'label': 'unknown13'},
                {'index': 14, 'label': 'otherParts'}
              ]
            }
        }
        self.shape_reg = {
        'T': {
            'prefix': 'T~',
            'regex':
                /^T~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
            'format': [
                {
                'index': 1,
                'label': 'mark',
                'chinese':
                    '\u6587\u672c\u6807\u8bb0\uff0c\u53ef\u9009\u503c\uff1aL(\u666e\u901a\u6587\u672c) | N(\u5668\u4ef6\u540d\u79f0) | P(\u5668\u4ef6\u7f16\u53f7) | PK(\u5c01\u88c5\u540d)'
                },
                {'index': 2, 'label': 'x', 'chinese': '\u6a2a\u5750\u6807'},
                {'index': 3, 'label': 'y', 'chinese': '\u7eb5\u5750\u6807'},
                {'index': 4, 'label': 'rotation', 'chinese': '\u65cb\u8f6c\u89d2\u5ea6'},
                {'index': 5, 'label': 'fillColor', 'chinese': '\u586b\u5145\u989c\u8272'},
                {'index': 6, 'label': 'fontFamily', 'chinese': '\u5b57\u4f53'},
                {'index': 7, 'label': 'fontSize', 'chinese': '\u6587\u5b57\u5927\u5c0f'},
                {
                'index': 8,
                'label': 'fontWeight',
                'chinese': '\u6587\u5b57\u7c97\u7ec6'
                },
                {
                'index': 9,
                'label': 'fontStyle',
                'chinese':
                    '\u6587\u5b57\u6837\u5f0f\uff08\u81ea\u52a8 | \u6b63\u5e38 | \u659c\u4f53\uff09'
                },
                {
                'index': 10,
                'label': 'dominantBaseline',
                'chinese': '\u6587\u5b57\u7684dominant-baseline\u5c5e\u6027'
                },
                {
                'index': 11,
                'label': 'type',
                'chinese':
                    '\u6587\u672c\u7c7b\u578b\uff08\u6ce8\u91ca | \u4eff\u771f\uff09'
                },
                {'index': 12, 'label': 'value', 'chinese': '\u6587\u672c\u503c'},
                {'index': 13, 'label': 'visible', 'chinese': '\u662f\u5426\u53ef\u89c1'},
                {
                'index': 14,
                'label': 'textAnchor',
                'chinese': '\u6587\u5b57\u7684text-anchor\u5c5e\u6027'
                },
                {'index': 15, 'label': 'gId', 'chinese': '\u5143\u7d20id'},
                {'index': 16, 'label': 'locked', 'chinese': '\u662f\u5426\u9501\u5b9a'}, {
                'index': 17,
                'label': 'c_etype',
                'chinese':
                    'c_etype\u5c5e\u6027\u503c\uff08c_etype\u662f\u81ea\u5b9a\u4e49\u7684\u7528\u4e8e\u7ec6\u5206\u56fe\u5143\u7c7b\u578b\u7684\u5c5e\u6027\uff09'
                }
            ]
            },
            'J': {
            'prefix': 'J~',
            'regex': /^J~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
            'format': [
                {'index': 1, 'label': 'x', 'chinese': '\u6a2a\u5750\u6807'},
                {'index': 2, 'label': 'y', 'chinese': '\u7eb5\u5750\u6807'},
                {'index': 3, 'label': 'r', 'chinese': '\u534a\u5f84'},
                {'index': 4, 'label': 'fillColor', 'chinese': '\u586b\u5145\u989c\u8272'},
                {'index': 5, 'label': 'gId', 'chinese': '\u5143\u7d20id'},
                {'index': 6, 'label': 'locked', 'chinese': '\u662f\u5426\u9501\u5b9a'}
            ]
            },
            'W': {
            'prefix': 'W~',
            'regex': /^W~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
            'format': [
                {
                'index': 1,
                'label': 'pointerStr',
                'chinese':
                    '\u6298\u7ebfpolyline\u7684points\u6570\u636e\u5b57\u7b26\u4e32'
                },
                {
                'index': 2,
                'label': 'strokeColor',
                'chinese': '\u7ebf\u6761\u989c\u8272'
                },
                {
                'index': 3,
                'label': 'strokeWidth',
                'chinese': '\u7ebf\u6761\u5bbd\u5ea6'
                },
                {
                'index': 4,
                'label': 'strokeStyle',
                'chinese': '\u7ebf\u6761\u6837\u5f0f'
                },
                {'index': 5, 'label': 'fillColor', 'chinese': '\u586b\u5145\u989c\u8272'},
                {'index': 6, 'label': 'gId', 'chinese': '\u5143\u7d20id'},
                {'index': 7, 'label': 'locked', 'chinese': '\u662f\u5426\u9501\u5b9a'}
            ]
            },
            'PL': {
            'prefix': 'PL~',
            'regex': /^PL~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
            'format': [
                {
                'index': 1,
                'label': 'pointerStr',
                'chinese':
                    '\u6298\u7ebfpolyline\u7684points\u6570\u636e\u5b57\u7b26\u4e32'
                },
                {
                'index': 2,
                'label': 'strokeColor',
                'chinese': '\u7ebf\u6761\u989c\u8272'
                },
                {
                'index': 3,
                'label': 'strokeWidth',
                'chinese': '\u7ebf\u6761\u5bbd\u5ea6'
                },
                {
                'index': 4,
                'label': 'strokeStyle',
                'chinese': '\u7ebf\u6761\u6837\u5f0f'
                },
                {'index': 5, 'label': 'fillColor', 'chinese': '\u586b\u5145\u989c\u8272'},
                {'index': 6, 'label': 'gId', 'chinese': '\u5143\u7d20id'},
                {'index': 7, 'label': 'locked', 'chinese': '\u662f\u5426\u9501\u5b9a'}
            ]
            },
            'LIB': {
            'prefix': 'LIB~',
            'regex':
                "LIB~{1}~{2}~{3}~{4}~{5}~{6}~{}~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)",
            'format': [
                {'index': 1, 'label': 'x', 'chinese': '\u6a2a\u5750\u6807'},
                {'index': 2, 'label': 'y', 'chinese': '\u7eb5\u5750\u6807'}, {
                'index': 3,
                'label': 'c_para',
                'chinese': '\u81ea\u5b9a\u4e49\u5c5e\u6027'#自定义属性
                },
                {'index': 4, 'label': 'rotation', 'chinese': '\u65cb\u8f6c\u89d2\u5ea6'},
                {
                'index': 5,
                'label': 'importFlag',
                'chinese': 'eagle\u5bfc\u5165\u6807\u8bb0, '
                },
                {'index': 6, 'label': 'gId', 'chinese': '\u5143\u7d20id'}, {
                'index': 7,
                'label': 'puuid',
                'chinese': '\u7ed1\u5b9a\u7684pcb\u5c01\u88c5uuid'
                },
                {'index': 8, 'label': 'uuid', 'chinese': '\u5668\u4ef6\u7684uuid'},
                {'index': 9, 'label': 'locked', 'chinese': '\u662f\u5426\u9501\u5b9a'}, {
                'index': 10,
                'label': 'bind_pcb_id',
                'chinese':
                    '\u7ed1\u5b9a\u7684pcb\u5c01\u88c5\u7684id\uff08\u5f03\u7528\uff09'
                },
                {
                'index': 11,
                'label': 'convert_to_pcb',
                'chinese': '\u662f\u5426\u66f4\u65b0\u5230pcb'
                },
                {
                'index': 12,
                'label': 'add_into_bom',
                'chinese': '\u662f\u5426\u52a0\u5165bom\u8868\u5355'
                },
                {
                'index': 13,
                'label': 'otherParts',
                'chinese': '\u5668\u4ef6\u5185\u90e8\u56fe\u5143\u6570\u636e'
                }
            ]
            }
        }