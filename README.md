# ezkb_tools_py

## Use Examples

**Gen PCBs**

```bash

cd ezeda

cat kle | python pcbgen.py  --gen-type pcb > testpcb.json

cat kle | python pcbgen.py  --gen-type sch > testsch.json

cat kle | python pcbgen.py  --gen-type pcb --key-rgb > testpcb.json

cat kle | python pcbgen.py  --gen-type sch --key-rgb > testsch.json

cat kle | python pcbgen.py  --gen-type pcb --key-rgb --key-north > testpcb.json

cat kle | python pcbgen.py  --gen-type sch --key-rgb --key-north > testsch.json

# --gen-type [plate(p) bottom_plate(bp) underkey_plate(up) key_base(kb) pcb sch]
```

**Gen Plate**

```bash

cd ezdxf

# 定位板
cat kle | python plategen.py  --gen-type p > plate.dxf

# 底棉
cat kle | python plategen.py  --gen-type bp > bottom_plate.dxf

# 轴下垫
cat kle | python plategen.py  --gen-type up > underkey_plate.dxf

# 轴定位图
cat kle | python plategen.py  --gen-type kb > keybase_plate.dxf

```