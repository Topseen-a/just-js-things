for number in range(1, 1001):
    sum_of_count = 0

    for count in range(1, number):
        if number % count == 0:
            sum_of_count += count

    if sum_of_count == number:
        print(number)

