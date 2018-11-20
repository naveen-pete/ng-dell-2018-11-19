function sum(x: number, y: number, z: number): number {
  return x + y + z;
}

const numbers: number[] = [1, 2, 3];

console.log((<any>sum)(...numbers));
// expected output: 6

// console.log(sum.apply(null, numbers));
// expected output: 6
