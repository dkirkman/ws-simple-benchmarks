console.log("This. Is. SPARTA!\n");

function minstd(seed) {
  return seed * 48271 % 214783647;
}

let ndat = 50000;

let buf = [];
let sbuf = [];
let i = 0;
let j = 0;
let dist = 0;

let idev = 1;
let ddev = 0;

for (i=0; i<ndat; ++i) {
  idev = minstd(idev);
  ddev = idev/214783647;

  buf[i] = ddev;
}

for (i=0; i<ndat; ++i) {
  sbuf[i] = 0.0;

  for (j=0; j<ndat; ++j) {
    dist = Math.abs(i-j);
    sbuf[i] += buf[j]*Math.exp(-dist*dist);
  }
}

for (i=0; i<100; ++i) {
  console.log(i + '  ' + buf[i] + '  ' + sbuf[i]);
}
