import numpy as np

ndat = 1000*1000*1000
sum = np.full(ndat, 0.01, dtype=np.float64).sum()

print('sum = %f' % sum)
