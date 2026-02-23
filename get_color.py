import sys
import PIL.Image

img = PIL.Image.open(sys.argv[1]).convert("RGB")
# Get average color of the top left 10x10 block
r, g, b = 0, 0, 0
for x in range(10):
    for y in range(10):
        pr, pg, pb = img.getpixel((x, y))
        r += pr
        g += pg
        b += pb
print("#%02x%02x%02x" % (r//100, g//100, b//100))
