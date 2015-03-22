#!/bin/python

# filing single
brackets_single = [0, 9075, 36900, 89350, 186350, 405100, 406750, 10**9];
# married filing jointly
brackets_joint = [0, 18150, 73800, 148850, 226850, 405100, 457600, 10**9]
# married filing separately
brackets_sep = [0, 9075, 36900, 74425, 113425, 202550, 228800, 10**9]
# head of household
brackets_head = [0, 12950, 49400, 127550, 206600, 405100, 432200, 10**9]

rates = [0.1, 0.15, 0.25, 0.28, 0.33, 0.35, 0.396];

def CalcTax(income, brackets):
    my_bracket = -1
    for b in range(len(brackets)-1):
        if income > brackets[b] and income <= brackets[b+1]:
            my_bracket = b
            break
    tax = 0
    for i in range(my_bracket+1):
        tax += rates[i]*(min(income,brackets[i+1]) - brackets[i])
    return tax


if __name__ == '__main__':
    for i in range(0, int(3.2*10**5), 10**3):
        print "[%d,%d]," % (i, int(CalcTax(i, brackets_head)))
            
