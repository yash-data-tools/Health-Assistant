#include <stdio.h>
#include <math.h>
#include <stdlib.h>
int main(int argc, char* argv[]) {
  float height,  weight, bmi;

  height = atof(argv[1]);
  weight = atof(argv[2]);

  bmi = weight/ pow(height, 2);
  printf("%.2f", bmi);
  return 0;
}