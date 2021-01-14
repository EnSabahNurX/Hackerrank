l1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
ex1 = [variavel for variavel in l1]
# print(ex1)
ex2 = [v * 2 for v in l1]
# print(ex2)
ex3 = [(v, v2) for v in l1 for v2 in range(4)]
# print(ex3)
l2 = ['Luiz', 'Mauro', 'Maria', 'Souza', 'silva']
ex4 = [v.replace('A' and 'a', '@').replace('S' and 's', '5').upper()
       for v in l2]
# print(ex4)

tupla = (
    ('chave1', 'valor1'),
    ('chave2', 'valor2'),
    ('chave3', 'valor3'),
)
ex5 = [(y, x) for x, y in tupla]
ex5 = dict(ex5)
# print(ex5)
# print(ex5['valor2'])


l3 = list(range(1, 100))
ex6 = [v for v in l3 if v % 3 == 0 if v % 8 == 0]
# print(ex6)

ex7 = [v if v % 3 == 0 and v % 8 == 0 else 'Não é' for v in l3]
# print(ex7)


new_numbers = [x if x %
               3 != 0 else f' {x} divisível por 3' for x in l3 if x % 2 == 0]
# print(new_numbers)

row_and_column = [(x, y) for x in range(1, 11) for y in range(1, 6)]
row_and_column = [(x, y) if y % 2 == 0 else f'({x},{y}) y is not even' for x in range(
    1, 11) for y in range(1, 6)]
row_and_column = [(x, y) if y % 2 == 0 else (x, y ** x)
                  for x in range(1, 11) for y in range(1, 6)]

#print(row_and_column)

string = 'Ricardo Almeida'
new_string = [letter for letter in string]
# print(new_string)

new_string = [string[index:index + 2] for index in range(len(string))]
# print(new_string)

new_string = [string[index:index + 2] for index in range(0, len(string), 2)]
# print(new_string)

slice_number = 3
new_string = [string[index:index + slice_number]
              for index in range(0, len(string), slice_number)]
#print(new_string)


slice_number = 5
new_string = '.'.join([string[index:index + slice_number].strip()
              for index in range(0, len(string), slice_number)])
#print(new_string)


names = ['Luiz', 'Mary', 'Helena', 'John', 'Felicia']
new_names = [name.title() for name in names]
#print(new_names)

names = ['Luiz', 'Mary', 'Helena', 'John', 'Felicia']
new_names = [f'{name[:-1].lower()}{name[-1].upper()}' for name in names]
#print(new_names)

numbers = [[n, n ** 2] for n in range(10)]
flat = [y for x in numbers for y in x]

print(numbers)
print(flat)