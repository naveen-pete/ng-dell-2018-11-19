// normal function syntax
function double(n: number): number {
  return n * 2; 
}

// function expression syntax
var double2 = function(n: number): number {
  return n * 2;
} 

// arrow function syntax
const double3 = (n: number): number => n * 2;

// arrow function syntax
const double4 = n => n * 2;

console.log(double(10));
console.log(double2(20));
console.log(double3(30));
console.log(double4(40));
