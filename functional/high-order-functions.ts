/**
 * Functions that operate in another functions,
 * making them in arguments or returning them,
 * are called as High Order Functions (or HOC)
 */

 function execute(func, ...params) {
    return func(...params);
 }

 function sum(a, b, c) {
    return a + b + c;
 }

 function sub(a, b) {
    return a - b;
 }

 console.log(execute(sum, 4, 5, 6));
 console.log(execute(sub, 4, 5));