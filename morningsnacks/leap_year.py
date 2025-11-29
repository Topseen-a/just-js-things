for year in range(1900, 2026):
    year += 1
    if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
        print(year)
