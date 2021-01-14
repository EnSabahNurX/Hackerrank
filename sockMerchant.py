def sockMerchant(n, ar):
    pairs_of_socks = 0
    for i in set(ar): pairs_of_socks += ar.count(i) // 2
    return pairs_of_socks

    
'''
    socks = set(ar)
    print(socks)
    pairs = 0
    for i in socks:
        print(socks)
        pairs += ar.count(i) // 2
    return pairs



    pairs_of_socks = 0
    l = Counter(ar)
    for i in l:
        pairs_of_socks += l[i] // 2
    return pairs_of_socks




    pairs_of_socks = 0
    for iterator in set(ar):
        pairs_of_socks += ar.count(iterator) // 2
    return pairs_of_socks
'''



n = 9;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
print(sockMerchant (n, ar))


