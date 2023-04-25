'''DrawBot NFT generator https://www.drawbot.com'''

size = 1080
divs = 270
divSize = size // divs
newPage(size, size)


def ranc():
    '''Random color generator'''
    ranNum = randint(0, 255)
    return 0 if ranNum == 0 else ranNum / 255


for x in range(divs):
    for y in range(divs):
        with savedState():
            fill(ranc(), ranc(), ranc())
            rect(x*divSize, y*divSize, divSize, divSize)

saveImage('~/Desktop/nfteat.png')
