a = int(input('Entry with a number: '))
div = 0
for x in range(1,a+1):
    resto = a % x
    if resto == 0:
        div += 1
if div == 2:
    print('Number {} is prime!'.format(a))
else:
    print('Numebre {} is not prime!'.format(a))