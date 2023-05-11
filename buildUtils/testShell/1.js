const obj = {a: 1};
const obj1 = {b: 0};

// obj && console.log(1) || console.log(2)
obj && obj1.b || console.log(2)

console.log(null || undefined );