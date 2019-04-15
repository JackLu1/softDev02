def triple(n):
    '''Triples up to n'''
    n += 1 #include n in triples
    tri = [[a, b, c] for a in range(1,n) for b in range(a,n) for c in range(b,n) if a**2 + b**2 == c**2 and c < n]
    print(tri)

def qsort(arr):
    '''quicksort array arr'''
    # pivot = center
    pivot = len(arr) / 2
    


qsort([3, 4, 1, 7, 5, 0, 9, 8, 2, 6])
#triple(20)

