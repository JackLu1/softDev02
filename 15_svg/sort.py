f = open('gdp.txt', 'r')
raw = f.readlines()
data = {}

for i in raw:
    a = i.split(',')
    print(a)
    data[a[0]] = a[1].strip('\n')

for i in data:
    print(i)
