/**
 * Pure function is a function that its return value
 * is determinated ONLY by its input values, without side effects
 */

const PI: number = 3.14;

// Pure or Impure? Impure, because PI is an external dependency
function areaCircImpure(radius: number): number {
    return radius * radius * PI;
}

// Pure or Impure? Pure, because the function do not have any external dependency
function areaCircPure(radius: number, piValue: number): number {
    return radius * radius * piValue;
}

// Pure or Impure? Impure, this function still have an external dependecy
// Also, we can not determine what is the output value since it is a random number
function generateRandomNumber(min: number, max: number): number {
    const factor = max - min + 1;
    return (Math.random() * factor) + min;
}

// Pure or Impure? Pure!
function sumPure(num1: number, num2: number): number {
    return num1 + num2;
}

let executionsAmount = 0;

// Pure or Impure? Impure, because it have side effects out ot function scope
function sumImpure(num1: number, num2: number): number {
    executionsAmount++;
    return num1 + num2;
}

console.log(areaCircImpure(2));
console.log(areaCircPure(2, 5));
console.log(generateRandomNumber(2, 4));
console.log(sumPure(5, 9));
console.log(sumImpure(5, 9));