def memoize(f):
    memo = {}
    def helper(x):
        pass
    return helper

def fib(n):
    if n == 0:
        return 1
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

fib = memoize(fib)
print(fib(40))
