UP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LOW = "abcdefghijklmnopqrstuvwxyz"
NUM = "1234567890"
SP = " .?!&#,;:-_*"

while(True):
    print('pw must have upper, lower, number')
    pw = input("enter ur pw: ")
    # 0 = lowercase
    # 1 = upercaes
    # 2 = num
    # 3 = special
    # -1 = other
    strong = [0 if x in LOW else 1 if x in UP else 2 if x in NUM else 3 if x in SP else -1 for x in pw]
    print(strong)
    if -1 in strong:
        print("INVALID")
    elif 0 in strong and 1 in strong and 2 in strong:
        print("strong")
        s = 0

        # special good
        if 3 in strong:
            s += 2

        # long pw good
        if len(strong) > 10:
            s += 4

        # mix of different types
        if abs(strong.count(0) - strong.count(1)) < 3:
            s += 2

        # numbers good
        if strong.count(2) > 2:
            s += 2

        print('ur pw is ' + str(s) + ' strong')

        break
    else:
        print('weak')
