number_one = int(input('Enter a number: '))
number_two = int(input('Enter another number: '))

gcd = 1

for count in range(1, number_one +1 and number_two +1):
    if (number_one % count == 0 and number_two % count == 0):
        gcd = count
print('GCD is', gcd)

