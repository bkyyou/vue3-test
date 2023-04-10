

// export const reg = /(?<!(^|-))(?=(\d{3})+($|\.))(?<!(\..*))/g;
// const num = '-11111111111.11111';
// export const formattingNum = (str) => str.replace(reg, ',');
// console.log(formattingNum(num));

// export const aa = /^((?=[A-Z]+)(?=[a-z]+)|(?=\d+)(?=[a-z]+)|(?=[A-Z]+)(?=\d+)).{6,}$/g;
// 匹配位置是不消耗字符的，所以 第一个 ?= 还是从开头开始匹配，所以  aa.test('ABCabc')  还是 false
 const aa = /(?=.*[A-Z]+)(?=[a-z]+)/g 
// export const pwdreg = /^((?=.*?[A-Z]+)(?=.*?[a-z]+)|(?=.*?\d+)(?=.*?[a-z]+)|(?=.*?[A-Z]+)(?=.*?\d+)).{6,}$/g;

console.log(aa.test('ABCabc'));
console.log('ABCabc'.replace(aa, ','));

var Num = -11111111.111111;

Num = Num.toString().replace(/\d+/, function (n) {
  console.log('n', n);
  return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1, m) {
    console.log('m', m);
    return $1 + ",";
  });
});
// console.log(Num);


