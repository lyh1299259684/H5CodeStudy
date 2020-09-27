'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//统一暴露，适用于同时暴露多个
function module1() {
	console.log('我是第一个被暴露的函数');
}
function module2() {
	console.log('我是第二个被暴露的函数');
}

exports.module1 = module1;
exports.module2 = module2;