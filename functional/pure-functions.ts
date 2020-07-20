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

console.log(areaCircImpure(2)); // 12.56
console.log(areaCircPure(2, 5)); // 20