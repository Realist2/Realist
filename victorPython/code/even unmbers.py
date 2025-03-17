i = 0
total = 0
average = 0
while i < 1000:
    if(i % 2 == 0):
        print(i)
        total += 1
        average += i
    i += 1

print(f"Total Numbers {total}")
print(f"Average: {average/total}")