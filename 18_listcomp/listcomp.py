def triple(n):
    '''Triples up to n'''
    n += 1 #include n in triples
    tri = [[a, b, c] for a in range(1,n) for b in range(a,n) for c in range(b,n) if a**2 + b**2 == c**2 and c < n]
    print(tri)

def qsort(lst):
    '''quicksort array arr'''
    # pivot = center
    #pivot = int(len(lst) / 2)
    #a = lst[:pivot]
    #print(a)
    if len(lst) < 2:
        return lst
    else:
        pivot = lst[int(len(lst) / 2)]
        left = []
        right = []
        mid = []
        [left.append(i) if i < pivot else right.append(i) if i > pivot else mid.append(i) for i in lst]
        return qsort(left) + mid + qsort(right)




triple(20)
a = qsort([3, 4, 0, 1, 7, 5, 11, 11, 0, 9, 8, 2, 6])
print(a)
