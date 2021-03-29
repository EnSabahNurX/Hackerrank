def countingValleys(n, s):
    level, valleys = 0,0
    for i in s:
        if level == 0 and i == 'D':
            valleys += 1
        level = level + 1 if i == 'U' else level - 1
    
    return valleys
'''

    level, valleys = 0, 0
    for i in s:
        if i == 'U':
            level += 1
            if level == 0:
                valleys += 1
        else:
            level -= 1
    return valleys



    current_height = 0
    previous_height = 0
    valleys = 0
    for i in range(len(s)):
        if (s[i] == 'U'):
            current_height += 1
        elif s[i] == 'D':
            current_height -= 1
        if current_height == 0 and previous_height < 0:
            valleys += 1
        previous_height = current_height
    return valleys
'''

n = 8
s = 'UDDDUDUU'
print(countingValleys(n, s))