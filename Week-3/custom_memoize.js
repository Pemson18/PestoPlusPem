// memoize function
function memoize(fn){
  const cache = new Map();
  return function(...args){
      const key = args.toString();
      if(cache.has(key)){
          return cache.get(key);
      }
      cache.set(key, fn(...args));
      return cache.get(key);
  }
}
function sum(a,b){
  return a+b;
}

const sumM = memoize(sum);
function time(fn){
  console.time();
  fn()
  console.timeEnd();
}
time(() => sumM(50000000, 55401255));
time(() => sumM(50000000, 55401255));
time(() => sumM(50000000, 55401255));

//output
//default: 0.052ms
//default: 0.008ms
//default: 0.007ms

