import math

ndat = 1000*1000*1000
dx = 0.0001
sum = 0.0

i = 0
while i < ndat:
    sum += math.cos(i*dx)*dx
    i += 1
    
print('sum = %f' % sum)

# (+ (* 60 5) 17) = 317 
