# ezkb_tools_py

## Use Examples

```bash
cat kle | python plategen.py  --gen-type pcb > testpcb.json

cat kle | python plategen.py  --gen-type sch > testpcb.json

cat kle | python plategen.py  --gen-type pcb --key-rgb --key-north > testpcb.json

cat kle | python plategen.py  --gen-type sch --key-rgb --key-north > testpcb.json

# --gen-type [plate(p) bottom_plate(bp) underkey_plate(up) key_base(kb) pcb sch]
```