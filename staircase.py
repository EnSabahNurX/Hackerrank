def staircase(n):
    for i in range(n): print(' '*(n-i-1)+'#'*(i+1))
    
'''
    for i in range(1,n+1): print(' '*(n-i)+'#'*(i))

    for i in range(1,n+1):
        print(' '*(n-i)+'#'*i)

    for i in range(1,n):
        print(" "*(n - i - 1),"#"*i)
    print("#"*n)

    for i in range(n,0,-1):
        print("#"*(abs(n-i+1)), " "*(abs(i-n+1)))
'''
n = 8
staircase(n)

