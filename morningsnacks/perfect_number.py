number = int(input('Enter a number: '))

sum = 0;

for count in range (1, number):
    if (number % count == 0):
        sum += count

if (sum == number):
    print(number, "is a perfect number")
else:
    print(number, "is not a perfect number")
