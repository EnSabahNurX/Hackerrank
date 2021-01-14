def primes_until_n(n):
    noprimes = [j for i in range(2, int(n ** (1 / 2)) + 1)
                for j in range(i * 2, n + 1, i)]
    return [x for x in range(2, n + 1) if x not in noprimes]


def give_n_primes(n):
    return [p for p in [a for a in range(1, (n ** 2 + 1)) if all([(a % b != 0) for b in range(2, a)])][1:n]]

# n = input("n: ")
n = 21
# print(primes_until_n(n))
print(give_n_primes(n))

'''
from itertools import count, islice
primes = (n for n in count(2) if all(n % d for d in range(2, n)))
print("100th prime is %d" % next(islice(primes, 99, 100)))

[p for p in [a for a in range(1,1000) if all([(a % b != 0) for b in range(2, a)])][:input('How many prime numbers? ')]]
[p for p in [a for a in range(1,1000) if all([(a % b != 0) for b in range(2, a)])][1:n]]


def give_n_primes(n):
    primes = []
    # Loop through 9999 possible prime numbers
    for a in range(1, (n**2+1)):
        # Loop through every number it could divide by
        for b in range(2, a):
            # Does b divide evenly into a ?
            if a % b == 0:
                break
        # Loop exited without breaking ? (It is prime)
        else:
            # Add the prime number to our list
            primes.append(a)
        # We have enough to stop ?
        if len(primes) == n:
            return primes
'''
