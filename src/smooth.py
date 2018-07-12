import numpy as np
import math

print('This. Is. SPARTA!');

def minstd_orig(seed):
    return ((seed * 48271) % 214783647)

def minstd(seed):
    return ((seed * 48271) % 214783647)

ndat = 15000
buf = np.full(ndat, 0, dtype=np.float64)
sbuf = np.full(ndat, 0, dtype=np.float64)

idev = 1
i = 0
while i < ndat:
    idev = minstd(idev)
    ddev = np.float64(idev)/214783647;

    buf[i] = ddev
    i += 1

i = 0
while i < ndat:
    sbuf[i] = 0.0

    j=0
    while j < ndat:
        dist = abs(i-j)
        sbuf[i] += buf[j]*math.exp(-dist*dist)
        j += 1

    i += 1

sum = 0
i = 0
while i < ndat:
    sum += sbuf[i]
    i += 1
    
print('sum = %f' % sum)
