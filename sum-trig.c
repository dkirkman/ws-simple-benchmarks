#include <stdio.h>
#include <math.h>

int main(int argc, char *argv[]) {
  int ndat = 1000*1000*1000;
  double sum = 0.0;
  double dx = 0.0001;
  for (int i=0; i<ndat; ++i) {
    sum += cos(i*dx)*dx;
  }

  printf ("sum = %f\n", sum);
}
