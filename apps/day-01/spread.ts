function sum(x: number, y: number, z: number, a: number): number {
  return x + y + z + a;
}

const numbers: number[] = [1, 2, 3, 4];

console.log(sum(...numbers));
// expected output: 6

// console.log(sum.apply(null, numbers));
// expected output: 6
