setTimeout(() => console.log(1), 0);
process.nextTick(() => console.log(2));
setImmediate(() => console.log(3));
setTimeout(() => {
  for (let i=0; i<10000000; i++) {
     ;
  }
  console.log(4);
 
}, 100)

async function loop(time) {
  const nowDate = Date.now()
  while (nowDate + time > Date.now()) {
    
  }
  console.log('loop');
}

// 三种观察者的优先级顺序是：idle观察者>>io观察者>check观察者

// loop(1000)