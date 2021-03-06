import loadEmscripten from './build/LoadEmscripten.mjs';
import sum from './build/sum.mjs';
import smooth from './build/smooth.mjs';
import square from './build/square.mjs';

import {performance} from 'perf_hooks';


console.log('--------- pure js ------------');
{
  let start = performance.now();
  let val = sum();
  let end = performance.now();
  console.log('sum = ' + val + '  ' + (end-start) + ' ms');
}

{
  let start = performance.now();
  let val = smooth();
  let end = performance.now();
  console.log('smooth = ' + val + '  ' + (end-start) + ' ms');
}

{
  let start = performance.now();
  let val = square(1500, 100000);
  let end = performance.now();
  console.log('square (cache) = ' + val + '  ' + (end-start) + ' ms');
}

{
  let start = performance.now();
  let val = square(1500000, 100);
  let end = performance.now();
  console.log('square = ' + val + '  ' + (end-start) + ' ms');
}


console.log('--------- asm.js ------------');
loadEmscripten({'asm.js': true}, cspace => {
  {
    let start = performance.now();
    let sum = cspace._sum();
    let end = performance.now();
    console.log('sum = ' + sum + '  ' + (end-start) + ' ms');
  }

  {
    let start = performance.now();
    let smooth = cspace._smooth();
    let end = performance.now();
    console.log('smooth = ' + smooth + '  ' + (end-start) + ' ms');
  }

  {
    let start = performance.now();
    let val = cspace._square(1500, 100000);
    let end = performance.now();
    console.log('square (cache) = ' + val + '  ' + (end-start) + ' ms');
  }
  
  {
    let start = performance.now();
    let val = cspace._square(1500000, 100);
    let end = performance.now();
    console.log('square = ' + val + '  ' + (end-start) + ' ms');
  }

  {
    let start = performance.now();
    let val = cspace._square(1500000, 100);
    let end = performance.now();
    console.log('square (after enlarged) = ' + val + '  ' + (end-start) + ' ms');
  }

  console.log('--------- webassembly ------------');
  loadEmscripten({'asm.js': false}, waspace => {
    {
      let start = performance.now();
      let sum = waspace._sum();
      let end = performance.now();
      console.log('sum = ' + sum + '  ' + (end-start) + ' ms');
    }
    
    {
      let start = performance.now();
      let smooth = waspace._smooth();
      let end = performance.now();
      console.log('smooth = ' + smooth + '  ' + (end-start) + ' ms');
    }

    {
      let start = performance.now();
      let val = waspace._square(1500, 100000);
      let end = performance.now();
      console.log('square (cache) = ' + val + '  ' + (end-start) + ' ms');
    }

    {
      let start = performance.now();
      let val = waspace._square(1500000, 100);
      let end = performance.now();
      console.log('square = ' + val + '  ' + (end-start) + ' ms');
    }
    
    {
      let start = performance.now();
      let val = waspace._square(1500000, 100);
      let end = performance.now();
      console.log('square (after enlarged) = ' + val + '  ' + (end-start) + ' ms');
    }

    {
      let start = performance.now();
      let val = waspace._square(1500000, 100);
      let end = performance.now();
      console.log('square (after enlarged again) = ' + val + '  ' + (end-start) + ' ms');
    }
  });
});
