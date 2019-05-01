def repeat(p):
    def times(n):
        return p * n
    return times

#r1 = repeat('hello')
#print(r1(2))
#r2 = repeat('goodbye')
#print(r2(2))
#print( repeat('cool')(3) )

#def outer():
#    x = "foo"
#    def inner():
#        x = 'bar'
#    inner()
#    return x
#
#print(outer())

#def outer():
#    x = "foo"
#    def inner():
#        nonlocal x
#        x = 'bar'
#    inner()
#    return x
#
#print(outer())

def make_counter():
    x = 0
    def count():
        nonlocal x
        x += 1
        return x

    def acc():
        return x

    return count, acc

ctr1, acc1 = make_counter()
print(ctr1())
print(acc1())

print(ctr1())
print(acc1())

print(ctr1())
print(acc1())

#ctr2 = make_counter()
#print(ctr2())
#print(ctr2())
#print(ctr2())


