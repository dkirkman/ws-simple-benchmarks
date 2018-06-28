import sum from './sum.mjs';
import smooth from './smooth.mjs';
import loadEmscripten from './LoadEmscripten.mjs';

function go_js() {
  {
    let start = performance.now();
    let val = sum();
    let end = performance.now();
    let sum_time = end-start;
    console.log('sum = ' + val + '  ' + sum_time + ' ms');
    
    self.postMessage({sum_time: sum_time});
  }
  
  {
    let start = performance.now();
    let val = smooth();
    let end = performance.now();
    let smooth_time = end-start;

    console.log('smooth = ' + val + '  ' + smooth_time + ' ms');
    self.postMessage({smooth_time: smooth_time});
  }

  self.postMessage('done');
}

function go_emcc(use_asm) {
  loadEmscripten({'asm.js': use_asm, url_prefix: './'}, cspace => {
    {
      let start = performance.now();
      let val = cspace._sum();
      let end = performance.now();
      let sum_time = end-start;
      console.log('sum = ' + val + '  ' + sum_time + ' ms');
      
      self.postMessage({sum_time: sum_time});
    }
    
    {
      let start = performance.now();
      let val = cspace._smooth();
      let end = performance.now();
      let smooth_time = end-start;
      
      console.log('smooth = ' + val + '  ' + smooth_time + ' ms');
      self.postMessage({smooth_time: smooth_time});
    }
    self.postMessage('done');
  });
}

self.addEventListener('message', event => {
  console.log('event = ' + JSON.stringify(event.data));
  if (event.data === 'js') {
    go_js();
  } else if (event.data === 'asm.js') {
    go_emcc(true);
  } else if (event.data === 'WebAssembly') {
    go_emcc(false);
  }
  else {
    console.log('unknown event type');
  }
});

console.log('here I am, in index about to run benchmarks');
console.log('And here I am again, all done');
