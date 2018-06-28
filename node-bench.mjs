import loadEmscripten from './build/LoadEmscripten.mjs';
import sum from './build/sum.mjs';
import smooth from './build/smooth.mjs';
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

loadEmscripten({'asm.js': true}, cspace => {
  console.log('--------- asm.js ------------');
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

  loadEmscripten({'asm.js': false}, waspace => {
    console.log('--------- asm.js ------------');
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
  });
});
