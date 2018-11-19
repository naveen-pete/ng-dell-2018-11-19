function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
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
var numbers = [1, 2, 3];
console.log(reverse(numbers));
var names = ['hari', 'krish', 'shiv'];
console.log(reverse(names));
var customers = [
    { name: 'a' },
    { name: 'b' }
];
console.log(reverse(customers));
