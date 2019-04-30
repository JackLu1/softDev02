def repeat(p):
    def times(n):
        return p * n
    return times

#r1 = repeat('hello')
#print(r1(2))
#r2 = repeat('goodbye')
#print(r2(2))
print( repeat('cool')(3) )

#def outer():
#    x = "foo"
#    def inner():
#        x = 'bar'
#    inner()
#    return x
#
#print(outer())

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = 'bar'
    inner()
    return x

print(outer())
