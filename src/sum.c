#include "bench.h"

EXPORT
double sum() {
  int ndat = 1000*1000*1000;
  double sum = 0.0;
  
  for (int i=0; i<ndat; ++i) {
    sum += 0.01;
  }

  return sum;
}
