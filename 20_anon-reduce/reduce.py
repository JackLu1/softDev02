from functools import reduce

f = open('odyssey.txt').read().split(' ')
text = [word for line in f for word in line.split()]

def frequency(word):
    count = len([x for x in text if x == word])
    return count


''' 'the' 6697 times'''
def most_frequent():
    uniq = set(text)
    #print(uniq)
    c = [ (frequency(word), word) for word in uniq]
    print(max(c))


print(frequency('the'))
print(frequency('Ulysses'))

#most_frequent()
