#not my first exposure to recursion, but let's see what we learn!
def countdown(i):
  print(i)
  if i <= 0:
    return
  countdown(i - 1)

countdown(10)

def factorial(x):
  if x == 1:
    return 1
  else:
    return x * factorial(x - 1)

print(factorial(3))

#well that was a short chapter so not too much learned I guess