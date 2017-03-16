/**
 * Created by YOU on 2017/3/14.
 */
const fs = require('fs');
var Mock = require('mockjs');
var devices = [{
  // 属性 id 是一个自增数，起始值为 1，每次增 1
  'state|1-3': 3,
  'type|1-3': 3,
  'company|+1': [
    'suninfo', 'lenovo', 'google'
  ],
  'model|+1': [
    'G480', 'Y360', 'H110'
  ],
  'watch|1': true,
  'proof|1': false,
  'devicename|+1': [
    'DELL', 'Lenovo', 'Acer'
  ],
  'ip': Mock.mock('@ip'),
  'cpu|1-100': 100,
  'memory|1-100': 100,
  'disk|1-100': 100,
  'level|1-3': 3,
  'businessname|+1': [
    'suninfo', 'lenovo', 'google'
  ],
  'operation|1': true
}];
var communities = [{
  'version|+1': [
    'v1', 'v2', 'v3'
  ],
  'sign': Mock.mock('@word(5,8)'),
  'edit': '删除'
}];

var netWork = [{
  'address': Mock.mock('@ip'),
  'netMask': Mock.mock('@ip'),
  'maxNumber|100-254': 254,
  'ipField': Mock.mock('@ip') + '~' + Mock.mock('@ip')
}];
var data = Mock.mock({
  'devices|50-75': devices,
  'communities|5-10': communities,
  'netWork|5-10': netWork
});
fs.writeFile('../mockData.json', JSON.stringify(data, null, 4), (err) => {
  if (err) throw err;
  console.log('write successfully!');
});

