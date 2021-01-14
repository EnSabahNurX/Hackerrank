
import random
import math


def prob(n, s, x=1):
    for i in range(n, n - s, -1):
        x *= i or i
    x /= math.factorial(s)
    # return x
    return "{:.5f}".format(x)
    # "{:.2f}".format(i["amount"])


def lotto_draw(n, s):
    return random.sample(list(range(1, n + 1)), s)
    # return random.sample([i for i in range(1,n +1)], s)


while True:
    n = int(input("\nHow many numbers in the board?\n"))
    s = int(input("\nHow many numbers in the draw?\n"))
    print(lotto_draw(n, s))
    print(prob(n, s))
'''


#return random.sample([i for i in range(1,n +1)], s)



import random, collections
from collections import deque
def lotto_board(n):
    return [i for i in range(1,n +1)]


    draw = random.sample(lotto_board(n), s)
    print(draw)


draw = deque({random.randint(1, n) for i in range(1,(n//2) +1)}, maxlen = s)


#for i in range(1,n +1):
     #   board.append(i)

draw = set()
    while len(draw) < s:
        draw.add(random.randint(1, n))


def unique(seq):
    seen = set()
    seen_add = seen.add
    return [x for x in seq if not (x in seen or seen_add(x))]

output = unique([word for line in fhand for word in line.split()])

'''
