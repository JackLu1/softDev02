'''
Chinese Communist Party -- Jack Lu, Vincent Lin
SoftDev2 pd8
K #18: Getting Clever with List Comprehensions
2019-04-16
'''

def triple(n):
    '''Triples up to n inclusive'''
    n += 1 #include n in triples
    tri = [[a, b, c] for a in range(1,n) for b in range(a,n) for c in range(b,n) if a**2 + b**2 == c**2 and c < n]
    return tri

def qsort(lst):
    '''quicksort array lst'''
    # list of 1 or 0 elements is sorted
    if len(lst) < 2:
        return lst
    else:
        pivot = lst[int(len(lst) / 2)]
        left = []
        right = []
        mid = []
        [left.append(i) if i < pivot else right.append(i) if i > pivot else mid.append(i) for i in lst]
        return qsort(left) + mid + qsort(right)


#t = triple(20)
#print(t)

#a = qsort([3, 4, 0, 1, 7, 5, 11, 11, 0, 9, 8, 2, 6])
#print(a)
