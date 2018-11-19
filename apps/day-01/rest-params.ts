function add(...arr: number[]) {
  return arr.reduce((n, total) => n + total, 0);
}

console.log(add(10, 20, 30, 40));
