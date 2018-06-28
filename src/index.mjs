import sum from './sum.mjs';
import smooth from './smooth.mjs';
import LoadEmscripten from './LoadEmscripten.mjs';

function go_js() {
  let sum_time = 0;
  let smooth_time = 0;

  {
    let start = performance.now();
    let val = sum();
    let end = performance.now();
    sum_time = end-start;
    console.log('sum = ' + val + '  ' + sum_time + ' ms');
  }
  
  {
    let start = performance.now();
    let val = smooth();
    let end = performance.now();
    smooth_time = end-start;

    console.log('smooth = ' + val + '  ' + smooth_time + ' ms');
  }

  return {sum_time: sum_time, smooth_time: smooth_time};
}

self.addEventListener('message', event => {
  console.log('event = ' + JSON.stringify(event.data));
  if (event.data === 'js') {
    self.postMessage(go_js());
  } 
  else {
    console.log('unknown event type');
  }
});

console.log('here I am, in index about to run benchmarks');
console.log('And here I am again, all done');
