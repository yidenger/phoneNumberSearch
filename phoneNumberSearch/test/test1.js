var query = require('query-mobile-phone-area');

var phoneNumber = '1111111111111111';
console.log(query(phoneNumber));

// var query = require('query-mobile-phone-area');

// // 查询国内号码
// console.log(query('13800138000'));
// // 输出： {province: '北京', city: '北京', type: '中国移动'}