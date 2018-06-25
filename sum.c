#include <stdio.h>

int main(int argc, char *argv[]) {
  int ndat = 1000*1000*1000;
  double sum = 0.0;
  
  for (int i=0; i<ndat; ++i) {
    sum += 0.01;
  }

  printf ("sum = %f\n", sum);
}
