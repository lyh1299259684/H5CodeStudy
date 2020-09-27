'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * 默认暴露，可以暴露任意类型，一般为对象的情况居多，调用时需要加上default
 * 
 * 注意：暴露函数只支持属性的方式暴露
 */
exports.default = {
	module1: function module1() {
		console.log('测试默认暴露');
	},
	module2: function module2() {
		console.log('我也暴露了，嘿嘿');
	},
	name: '张三'
};