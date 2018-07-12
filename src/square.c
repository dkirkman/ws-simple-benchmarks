#include <stdlib.h>
#include <math.h>
#include <stdint.h>

#include "bench.h"

static uint32_t minstd(uint32_t seed) {
  return ((uint64_t)seed * 48271) % 214783647;
}

typedef struct {
  double x;
  double y;
} point;

EXPORT
double square(int ndat, int npass) {
  point *buf = (point *) malloc(ndat*sizeof(point));

  uint32_t idev = 1;
  for (int i=0; i<ndat; ++i) {
    idev = minstd(idev);
    buf[i].x = (double)idev/214783647;

    idev = minstd(idev);
    buf[i].y = (double)idev/214783647;
  }

  double sum = 0;

  for (int j=0; j<npass; ++j) {
    for (int i=0; i<ndat; ++i) {
      sum += sqrt(buf[i].x*buf[i].x + buf[i].y*buf[i].y);
    }
  }
  
  free(buf);
  return sum;
}
