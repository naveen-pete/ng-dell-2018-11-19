function sum(x, y, z, a) {
    return x + y + z + a;
}
var numbers = [1, 2, 3, 4];
console.log(sum.apply(void 0, numbers));
// expected output: 6
// console.log(sum.apply(null, numbers));
// expected output: 6
