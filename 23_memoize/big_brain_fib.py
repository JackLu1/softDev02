#def memoize(f):
#    memo = [1, 1]
#    def helper(x):
#        x -= 2
#        for _ in range(x):
#            memo.append( memo[-1] + memo[-2] )
#        return memo[-1]
#    return helper

#def memoize(f):
#    memo = {}
#    def helper(x):
#        if x not in memo:
#            memo[x] = f(x)
#        return memo[x]
#    return helper

def memoize(fxn):
    cache = {}
    def memoized_fxn(*args):
        if args in cache:
            return cache[args]
        result = fxn(*args)
        cache[args] = result
        return result
    return memoized_fxn

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

#fib = memoize(fib)
print(fib(40))
#print( fib(40) )

