def memoize(f):
    memo = [1, 1]
    def helper(x):
        x -= 2
        for _ in range(x):
            memo.append( memo[-1] + memo[-2] )
        return memo[-1]
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
