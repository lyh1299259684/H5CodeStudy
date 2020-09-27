//******************************class的get set方法**********************************
class E6GetSet {
	//get方法，只要获取对象的name属性值就会触发，一般用于特殊的计算处理
	get name() {
		return '张三'
	}
	
	//set方法，必须传递一个参数，当对象设置name属性时触发
	set name(v) {
		console.log('设置name属性')
	}
}
//实例化对象
let e6GetSetTest = new E6GetSet()
//获取属性值，触发get方法
console.log(e6GetSetTest.name)
//设置属性值，触发set方法
e6GetSetTest.name = '李四'


//******************************Es6中的数值扩展**********************************
/**
 * Number.EPSILON 是 JavaScript 表示的最小精度
 * 		如果两个数的差值小于Number.EPSILON这个值，那么就认为他们是相等的
 * 		最典型的例子就是0.1+0.2 = 0.3问题
 */
function nEqual(a, b) {
	//小于说明相等
	if (Math.abs(a - b) < Number.EPSILON) {
		return true
	} else {
		return false
	}
}
//false
console.log(0.1 + 0.2 === 0.3)
//true
console.log(nEqual(0.1 + 0.2, 0.3))

/**
 * 二进制、八进制、十进制、十六进制
 */
//二进制  10
console.log(0b1010)
//八进制  511
console.log(0o777)
//十进制  100
console.log(100)
//十六进制 255
console.log(0xff)

/**
 * Number.isFinite 检测一个数是否是一个有限数
 */
console.log(Number.isFinite(100))  		//true
// console.log(Number.isFinite(100/0))  	//false
// console.log(Number.isFinite(Infinity))  //false，Infinity表示无穷尽

/**
 * Number.isNaN()  判断是否是NaN，如果是NaN返回true，否则返回false
 *    注意：它与isNaN()是不同的，isNaN()是判断是否不是数字和是否不可以转换为数字
 * 		   如果不是数字返回true，是数字以及可以转换为数字返回false
 */
//例子
let nanPInt = parseInt('aaa')
console.log(Number.isNaN(nanPInt))  //true
let nanPint2 = parseInt('125')
console.log(Number.isNaN(nanPint2))  //false
//isNaN()例子
console.log(isNaN('a'))   //true
console.log(isNaN('123')) //false
console.log(isNaN('1a2a3'))//true

/**
 * Number.parseInt() 和 Number.parseFloat()
 * 
 * 用法跟parseInt() 和 parseFloat() 一样
 */
console.log(Number.parseInt('123aaa'))		//123
console.log(Number.parseFloat('2.15fdas'))	//2.15

/**
 * Number.isInteger 判断一个数是否为整数
 */
console.log(Number.isInteger(5.2))		//false
console.log(Number.isInteger(1))		//true
console.log(Number.isInteger('aaa'))	//false

/**
 * Math.trunc 将数字的小数部分抹掉，只保留整数
 */
console.log(Math.trunc(3.5244511))	//3
console.log(Math.trunc(5.3))		//5

/**
 * Math.sign  判断一个数到底是正数、负数还是0，正数返回1、负数返回-1、0返回0
 */
console.log(Math.sign(100.01))	//1
console.log(Math.sign(0))		//0
console.log(Math.sign(-100))	//-1


//******************************Object对象方法扩展**********************************
/**
 * Object.is()  判断两个数值是否相等
 */
console.log(Object.is(120, 120))  //true
console.log(Object.is('as', 'as'))//true
console.log(Object.is(NaN, NaN))  //true
console.log(Object.is(0.1 + 0.2, 0.3)) //false
console.log(NaN === NaN) //false

/**
 * Object.assign 对象的合并
 */
const oAssign1 = {
	name: '张三',
	age: 15,
	sex: '男',
	height: 162,
	spreak: '说话'
}
const oAssign2 = {
	name: '李四',
	age: 15,
	sex: '男',
	height: 162,
	action: '跳高'
}
/**
 * 如果出现重名的，第二个参数里面的属性会覆盖第一个参数里面的属性，不重名则合并
 * 输出结果：{name: '张三',age: 15,sex: '男',height: 162,spreak: '说话',action: '跳高'}
 */
console.log(Object.assign(oAssign2, oAssign1))

/**
 * Object.setPrototypeOf(a, b)  设置原型对象
 * Object.getPrototypeOf(a)     获取原型对象
 */
let opA = {
	name: '123'
}
let opB = {
	address: ['张三', '李四', '王五']
}
//设置opA的原型对象为opB
Object.setPrototypeOf(opA, opB)
console.log(opA)
//获取opA的原型对象
console.log(Object.getPrototypeOf(opA))