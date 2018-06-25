
let ndat = 1000*1000*1000;
let sum = 0.0;
let dx = 0.0001;
let i = 0;

for (i=0; i<ndat; ++i) {
  sum += Math.cos(i*dx)*dx;
}

console.log('sum = ' + sum);
