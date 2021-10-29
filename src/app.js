let a = 5;
let b = 3;
console.log(a.toString().concat(b.toString()));
a = a + b;
b = a - b;
a = a - b;
console.log(a.toString().concat(b.toString()));
