'use strict';

var _m = require('./module/m1.js');

var m1 = _interopRequireWildcard(_m);

var _m2 = require('./module/m3.js');

var _m3 = _interopRequireDefault(_m2);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

m1.module1();

console.log(_m.hello);

_m3.default.module2();

//使用import引入jquery，完成修改背景颜色的需求
/**
 * 步骤
 * 	 1.首先要执行 npm i jquery 完成jquery的安装
 *   2.引入jquery
 */
//这一步完成jquery的引入，相当于const $ = require('jquery')
//完成背景颜色的修改
(0, _jquery2.default)('body').css('background', 'pink');