def plusMinus(arr):
    print("%.6f" %(len(list(filter(lambda x: (x > 0), arr))) / len(arr)))
    print("%.6f" %(len(list(filter(lambda x: (x < 0), arr))) / len(arr)))
    print("%.6f" %(len(list(filter(lambda x: (x == 0), arr))) / len(arr)))



arr = [1,1,0,-1,-1]
plusMinus(arr)
