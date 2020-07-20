/**
 * When the language can handle function as variables also,
 * in another words, when we can store functions inside variables
 */


 const x = 3;
 const y = (value) => value;

 console.log(x);
 console.log(y('This is a First Class Function'));