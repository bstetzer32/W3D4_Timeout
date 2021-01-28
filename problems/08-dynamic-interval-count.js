/***********************************************************************
Write a function `dynamicIntervalCount` that accepts a callback, delay
in milliseconds, and an optional amount as arguments. The function should 
set an interval with the given callback and delay. If an amount argument 
is passed, the interval should be cleared after the callback has been 
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Examples:

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = intervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }

// 

***********************************************************************/

function dynamicIntervalCount(cb, delay, amt) {
  if (amt === undefined) {
    return setInterval(cb, delay);
  } else if (amt) {
    let obj = setInterval(() => {
      cb();
      amt--;
      if (amt === 0) {
        clearInterval(obj);
      }
    }, delay);
  }
}




// const dynamicIntervalCount = (cb, delay, amt) => {
//   if (amt === undefined) {
//     const obj = setInterval(cb, delay);
//     return obj;
//   } else {
//     const obj = setInterval(() => {
//       cb();
//       amt--;
//       if (amt === 0) {
//         clearInterval(obj);
//       }
//     }, delay);
//   }
// }


// dynamicIntervalCount(function () {
//   console.log('hi');
// }, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


// const timeoutObject = dynamicIntervalCount(function () {
//   console.log('hi');
// }, 500); // prints 'hi' at 500ms intervals indefinitely

// console.log(timeoutObject); // Timeout { ... }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}
