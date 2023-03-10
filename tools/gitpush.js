/**
 * git 一键提交
 */

const child_process = require('child_process');

child_process.exec('git add .', (err, stdout) => {
  if (err) throw err;
  let _str1 = 'feat';
  // let _str2 = '1.91';
  if (!process.argv[2]) {
    throw '请给commint信息'
  }
  // if (process.argv[3] === 2) {
  //   _str1 = '1.92';
  // }

  child_process.exec('git commit -m "' + _str1  + '"', (err, stdout) => {
    if (err) throw err;
    console.log('提交成功');
  })

})