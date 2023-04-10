<script setup lang="ts">
import {
  reactive,
  ref,
  onMounted,
  onUpdated,
  watch,
  watchEffect,
  computed,
  defineProps,
  provide,
} from 'vue';
import Big from 'big.js';
// const Big = require('big.js');

let a = 1;

console.log(new Big('0.1').add(0.2).toFixed(2));
console.log(new Big('12').cmp(10));
console.log(new Big('10000000000000000').add('100000000000000000').toFixed(2));

const numReg = /\d+/;
const counterSign = {
  ['+']: 'plus',
  ['-']: 'minus',
  ['*']: 'times',
  ['/']: 'div',
}
// const reg = /(\d+|\+|\-|\*/)/;
const errtip = '传入的参数有误';
const counterCore = (str: string) => {
  
  if (typeof(str) !== 'string') {
    console.error('请传入字符串');
  }

  str = str.replace(/\s/g, '');
  const m = str.match(numReg);
  let big = new Big(m[0]);
  str = str.slice(m[0].length)

  while (str.length > 0) {
    const first = str.slice(0, 1);
    str = str.slice(1);
    const _sign = counterSign[first];
    if (!_sign) console.error(errtip); 
    const _m = str.match(numReg);
    big = big[_sign](_m[0]);
    str = str.slice(_m[0].length);
  }

  return big.toFixed(2);
}
console.log(counterCore('1000+2000+1-2- 11'))

const counter = {
  plus(arr: []) {
    return counter(arr.join('+'));
  },
  minus(arr) {
    return counter(arr.join('-'));
  },
  comCounter(str) {
    return counter(str);
  }
}


</script>

<template>

</template>

<style scoped>

</style>