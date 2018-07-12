#include <stdio.h>
#include <time.h>

#include "bench.h"

int main(int argc, char *argv[]) {

  {
    clock_t start = clock();
    double val = sum();
    clock_t end = clock();
    double elapsed = (double)(end-start)/CLOCKS_PER_SEC;
    
    printf("sum = %lf\n", val);
    printf("elapsed = %lf\n", elapsed);
  }

  {
    clock_t start = clock();
    double val = smooth();
    clock_t end = clock();
    double elapsed = (double)(end-start)/CLOCKS_PER_SEC;
    
    printf("smooth = %lf\n", val);
    printf("elapsed = %lf\n", elapsed);
  }

  {
    clock_t start = clock();
    double val = square(1500, 100000);
    clock_t end = clock();
    double elapsed = (double)(end-start)/CLOCKS_PER_SEC;
    
    printf("square (cache) = %lf\n", val);
    printf("elapsed = %lf\n", elapsed);
  }

    {
    clock_t start = clock();
    double val = square(1500000, 100);
    clock_t end = clock();
    double elapsed = (double)(end-start)/CLOCKS_PER_SEC;
    
    printf("square = %lf\n", val);
    printf("elapsed = %lf\n", elapsed);
  }
  
}

