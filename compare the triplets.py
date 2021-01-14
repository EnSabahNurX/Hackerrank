def compareTriplets(a, b):
    return (sum(x > y for x, y in zip(a, b)), sum(x < y for x, y in zip(a, b)))


'''

def compareTriplets(a, b):

    comparison = [0, 0]
    for i in range(len(a)):
        if a[i] > b[i]: comparison[0] += 1
        elif b[i] > a[i]: comparison[1] += 1
    return comparison


def compareTriplets(a, b):
    comparison =[0, 0]
    comparison[0] = (a[0]>b[0]) + (a[1]>b[1]) + (a[2]>b[2])
    comparison[1] = (a[0]<b[0]) + (a[1]<b[1]) + (a[2]<b[2])
    return comparison

'''





a = [1, 2, 3]
b = [3, 2, 1]
print(compareTriplets(a, b))
