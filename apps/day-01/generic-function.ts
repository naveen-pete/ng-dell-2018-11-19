function reverse<T>(items: T[]): T[] {
  var toreturn: T[] = [];
  for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
  }
  return toreturn;
}

// function reverse(items: number[]): number[] {
//   var toreturn: number[] = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//       toreturn.push(items[i]);
//   }
//   return toreturn;
// }

// function reverseStrings(items: string[]): string[] {
//   var toreturn: string[] = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//       toreturn.push(items[i]);
//   }
//   return toreturn;
// }

let numbers = [1, 2, 3];
console.log(reverse<number>(numbers));

let names = ['hari', 'krish', 'shiv'];
console.log(reverse<string>(names));

interface Customer {
  name: string;
}
let customers: Customer[] = [
  { name: 'a' },
  { name: 'b' }
]
console.log(reverse<Customer>(customers));