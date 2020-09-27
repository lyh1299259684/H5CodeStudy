//********************************* Es6 var和let的作用域 ***************************************
{
	let a = 0
}
var a = 2
var a = 5
console.log(a)

/**
 * 改变盒子背景颜色
 * @param {Object} color 想要改变的颜色
 */
function changeBoxBgColor(color) {
	let boxItemArray = document.getElementsByClassName('item')
	//方案1
	// for(let i = 0; i < boxItemArray.length; i++) {
	// 	boxItemArray[i].onclick = function() {
	// 		boxItemArray[i].style.background = color
	// 		resetBgColor(i, boxItemArray)
	// 	}
	// }
	
	//方案2
	for (let i = 0; i < boxItemArray.length; i++) {
		boxItemArray[i].onclick = function() {
			this.style.background = color
			resetBgColor(i, boxItemArray)
		}
	}
}
/**
 * 修改其他没有选中的盒子为默认颜色
 * @param {Object} selectIndex
 * @param {Object} array
 */
function resetBgColor(selectIndex, array) {
	for (let i = 0; i < array.length; i++) {
		if (i != selectIndex) {
			array[i].style.background = 'white'
		}
	}
}
changeBoxBgColor('#EAEAEA')

//********************************* Es6解构赋值 ***************************************
/* 案例1 */
const jArray = ['张三', '李四', '王五']
let [zhangsan, lisi, wangwu] = jArray
console.log(zhangsan)
/* 案例2 */
const jOArray = [
	{
		name: '张三',
		age: 12,
		sex: '男'
	},
	{
		name: '李四',
		age: 14,
		sex: '男'
	},
	{
		name: '王五',
		age: 16,
		sex: '女'
	}
]
let [zhangsanO, lisiO, wangwuO] = jOArray
console.log(zhangsanO)
/* 案例3 */
const jO = {
	title: '测试',
	content: '测试内容',
	test: function(title) {
		console.log(title)
	}
}
let {title, test} = jO
test(title)
console.log(jO)


//********************************* Es6模板字符串 ***************************************
// 模板字符串，其实也是一个字符串，只是新增了一些特性
/**
 * 特性1： 可以直接换行，无需拼接
 */
let htmlStr = `<div>
					<p></p>
					<hr/>
			   </div>`
console.log(htmlStr)
/**
 * 特性2：拼接字符串
 */
let mubanStr1 = '张三'
let mubanStr2 = `${mubanStr1}喜欢喝啤酒！`
console.log(mubanStr2)
/**
 * 特性3：可以声明字符串
 */
let createStr = `声明一个字符串`
console.log(createStr)


//********************************* Es6简化对象写法 ***************************************
let jhName = '张三'
let jhAge = 14
function jhAction() {
	console.log('我的技能')
}
//简化声明
const jhObj = {
	jhName,
	jhAge,
	jhAction,
	jhObjAction() {
		console.log('我是新声明的方法')
	}
}
jhObj.jhAction()
jhObj.jhObjAction()
console.log(jhObj)


//********************************* Es6箭头函数 ***************************************
//声明箭头函数
let jtFn = (a, b) => {
	return a + b
}
console.log(jtFn(1, 45))
/**
 * 特性1： this是静态的，this始终指向函数声明时所在的作用域下的this的值
 */
function getJtName() {
	console.log(this.jtName)
}
let getJtName2 = () => {
	console.log(this.jtName)
}
window.jtName = '箭头函数学习'
const jtObj = {
	jtName: '动态this指针'
}
//普通函数指针已经改变
getJtName.call(jtObj)
//箭头函数未改变
getJtName2.call(jtObj)

/**
 * 特性2：箭头函数不能作为构造函数实例化对象
 */
//错误
// let JtPerson = (name, age) => {
// 	this.name = name,
// 	this.age = age
// }
// let JtMe = new JtPerson('张三', 15)
// console.log(JtMe)
//正确
let JtPerson = function(name, age) {
	this.name = name
	this.age = age
}
let JtMe = new JtPerson('张三', 15)
console.log(JtMe)

/**
 * 特性3： 不能使用arguments变量
 */
//错误
// let jtArgs = () => {
// 	console.log(arguments)
// }
// jtArgs(1, 2, 3)
//正确
let jtArgs = function() {
	if (arguments && arguments.length > 0) {
		console.log(arguments)
	}
}
jtArgs(1, 2, 3)

/**
 * 特性4：箭头函数简写，有以下两种方式可以简写
 */
//简写1：有且只有一个形参的时候可以不用写小括号
let jtEasy1 = n => {
	return n*n
}
console.log(jtEasy1(542))
//简写2：代码块里面只有一行的时候可以省略花括号，省略花括号后一定会有返回值，所以不用写return
//1
let jtEasy2 = (n) => n+n
console.log(jtEasy2(6))
//2
let jtEasy3 = n => n*n
console.log(jtEasy3(6))

let is_eng_num_special = str => {
	let engA = /[A-Z]/
	let enga = /[a-z]/
	let num = /[0-9]/
	let special = new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“'。，、？_]")
	return engA.test(str) && enga.test(str) && num.test(str) && special.test(str)
}