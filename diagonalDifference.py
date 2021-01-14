def diagonalDifference(arr):
    return abs(sum(arr[i][i] for i in range(len(arr))) - sum(arr[i][len(arr) - i - 1] for i in range(len(arr))))
'''
    n = len(arr)
    d1 = 0
    d2 = 0
    for i in range(n): 
        d1 = d1 + arr[i][i]
        d2 = d2 + arr[i][n - i - 1]
    return abs(d1 - d2)

'''
arr = [[11, 2, 4], [4 , 5, 6], [10, 8, -12]]
print(diagonalDifference(arr))
