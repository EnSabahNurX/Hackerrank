from itertools import product
def getMoneySpent(keyboards, drives, b):
    if (min(keyboards) + min(drives)) > b:
        return -1
    x = [sum(i) for i in list(product(keyboards, drives)) if sum(i) <= b]
    return max(x)


'''
    if (min(keyboards) + min(drives)) > b:
        return -1
    x = []
    for i in list(product(keyboards, drives)):
        if sum(i) <= b:
            x.append(sum(i))
    return max(x)


    max_spent = -1
    for i in keyboards:
        for j in drives:
            if (i + j <= b):
                max_spent = max(max_spent, i + j)
    return max_spent



    good_options = []
    for i in keyboards:
        for j in drives:
            if (i + j <= b):
                good_options.append(i + j)
    if len(good_options) == 0:
        return -1
    else:
        return max(good_options)
'''

budge = 60
keyboards = [40, 50, 60]
drives = [5, 8, 12]
print(getMoneySpent(keyboards, drives, budge))
