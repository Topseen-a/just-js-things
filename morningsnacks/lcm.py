number_one = int(input('Enter a number: '))
number_two = int(input('Enter another number: '))

lcm = number_one

if number_two > lcm:
    lcm = number_two

while True:
    if lcm % number_one == 0 and lcm % number_two == 0:
        break
    lcm += 1
print('LCM of', number_one, "and", number_two, "is", lcm)
