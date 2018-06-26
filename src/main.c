#include <stdio.h>
#include <time.h>

double sum();
double smooth();

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
  
}
