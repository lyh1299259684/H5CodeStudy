/**
 * 默认暴露，可以暴露任意类型，一般为对象的情况居多，调用时需要加上default
 * 
 * 注意：暴露函数只支持属性的方式暴露
 */
export default {
	module1: function() {
		console.log('测试默认暴露')
	},
	module2: function() {
		console.log('我也暴露了，嘿嘿')
	},
	name: '张三'
}