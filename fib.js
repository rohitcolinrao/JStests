function memoize(fn) {
  memoize.cache = {}
  return function() {
    var key = JSON.stringify(arguments)
    if(memoize.cache[key]) {
      return memoize.cache[key]
    }
    else {
      var val = fn.apply(this, arguments)
      memoize.cache[key] = val
      return val
    }
  };
}

fib = (n, first = 1, second = 0) => {
  if (n === 0) {
    return second
  } else {
    return fib(n - 1, first + second, first)
  }
}

var factorial = memoize(function(num){
  console.log('getting factorial(' + num + ')')
  if(num === 1) { return 1 }
  return num * factorial(num - 1)
});





console.log(factorial(4))
// processing time
console.time('time elapsed');
factorial(4)
console.timeEnd('time elapsed');
