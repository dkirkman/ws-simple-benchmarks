function minstd(seed) {
  return seed * 48271 % 214783647;
}


export default function(ndat, npass) {
  let buf = [];
  let i = 0;
  let j = 0;

  let idev = 1;
  let xdev = 0;
  let ydev = 0;

  for (i=0; i<ndat; ++i) {
    idev = minstd(idev);
    xdev = idev/214783647;  

    idev = minstd(idev);
    ydev = idev/214783647;  

    buf[i] = {x: xdev, y: ydev};
  }
  
  let sum = 0;
  for (j=0; j<npass; ++j) {
    for (i=0; i<ndat; ++i) {
      sum += Math.sqrt(buf[i].x*buf[i].x + buf[i].y*buf[i].y);
    }
  }

  return sum;
}
