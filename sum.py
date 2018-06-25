ndat = 1000*1000*1000
sum = 0.0;

#for i in range(ndat):
#    sum += 0.01

i = 0
while i < ndat:
    sum += 0.01
    i += 1
    
print('sum = %f' % sum)

# (+ (* 60 4) 53) 293 seconds
# (+ (* 60 2) 35) 155 seconds  (/ 155 0.839)
