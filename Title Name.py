def Title(name):
    lista = name.split()
    modificada = []
    final = ''
    for i in lista:
        if len(i) > 3:
            modificada.append(i.title())
            modificada.append(' ')
        else:
            modificada.append(i.lower())
            modificada.append(' ')
    modificada.pop()
    return final.join(modificada)


while True:
    name = input('\nPlease, Tell me your name:\n')
    final = Title(name)
    print(final)


print(modificada)
