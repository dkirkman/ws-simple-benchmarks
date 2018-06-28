#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <math.h>

#include "bench.h"

double smooth();

uint32_t minstd(uint32_t seed) {
  return ((uint64_t)seed * 48271) % 214783647;
}

EXPORT
double smooth() {
  int ndat = 50000;
  
  double *buf = (double *) malloc(ndat*sizeof(double));
  double *sbuf = (double *) malloc(ndat*sizeof(double));
                                  
  uint32_t idev = 1;
  for (int i=0; i<ndat; ++i) {
    idev = minstd(idev);
    double ddev = (double)idev/214783647;

    buf[i] = ddev;
  }

  for (int i=0; i<ndat; ++i) {
    sbuf[i] = 0.0;
    
    for (int j=0; j<ndat; ++j) {
      double dist = abs(i-j);
      sbuf[i] += buf[j]*exp(-dist*dist);
    }
  }

  double sum = 0;
  for (int i=0; i<ndat; ++i) {
    sum += sbuf[i];
  }

  free(buf);
  free(sbuf);

  printf("sum = %lf\n", sum);
  return sum;
}
