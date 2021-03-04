class Difference:
    def __init__(self, a):
        self.__elements = a

    # Add your code here
    maximumDifference = None
    def computeDifference(self):
        sortedList = self.__elements
        sortedList.sort()
        a = sortedList[0]
        b = sortedList[-1]
        self.maximumDifference = b - a
        
# End of Difference class

#_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
