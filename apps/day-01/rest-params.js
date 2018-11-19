function add() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (n, total) { return n + total; }, 0);
}
console.log(add(10, 20, 30, 40));
