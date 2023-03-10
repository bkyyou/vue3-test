

export const reg = /(?<!(^|-))(?=(\d{3})+($|\.))(?<!(\..*))/g;
// const num = '-11111111111.11111';
export const formattingNum = (str) => str.replace(reg, ',');
// console.log(formattingNum(num));

export const pwdreg = /^((?=.*?[A-Z]+)(?=.*?[a-z]+)|(?=.*?\d+)(?=.*?[a-z]+)|(?=.*?[A-Z]+)(?=.*?\d+)).{6,}$/g;

// console.log(pwdreg.test('Ab'));
// console.log(num.replace(pwdreg, ','));

var Num = -11111111.111111;

Num = Num.toString().replace(/\d+/, function (n) {
  console.log('n', n);
  return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1, m) {
    console.log('m', m);
    return $1 + ",";
  });
});
// console.log(Num);


