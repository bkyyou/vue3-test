const xlsx = require('node-xlsx');
const fs = require('fs');

const data = [
  {
    name: 'sheet1',
    data: [
      ['name', 'id', 'source'],
      ['zs', 100, 99],
      ['ls', 100, 99],
      ['ww', 100, 99],
    ]
  }
]

fs.writeFileSync('./hello.xlsx',xlsx.build(data));
