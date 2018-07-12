#ifdef EMSCRIPTEN
  #include <emscripten.h>
  #define EXPORT EMSCRIPTEN_KEEPALIVE
#else
  #define EXPORT
#endif

double sum();
double smooth();
double square(int ndat, int npass);
