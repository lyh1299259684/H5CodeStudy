/**
 * 测试小练习
 */

//*************************************箭头函数运用练习*******************************************
/**
 * 箭头函数使用场景注意
 * 		适用场景举例：1.与this无关的回调。 比如：定时器、数组方法的回调
 *      不适用场景举例: 1.与this有关的回调。 比如：dom事件回调函数、对象的方法
 */
//test1: 实现点击后2s改变div颜色
var bgChangeState = 'before'  //before: 原始状态, after: 改变之后
function changeBgIn2sAfter(color) {
	let ad = document.getElementById('ad')
	
	//es5之前的做法
	// ad.addEventListener('click', function() {
	// 	let _this = this
	// 	setTimeout(function() {
	// 		_this.style.background = color
	// 	}, 2000)
	// })
	
	//es6使用箭头函数
	ad.addEventListener('click', function() {
		if (this.changing) {
			console.log('变色中，不要继续点击呦！')
			return
		}
		this.changing = true
		
		setTimeout(()=>{
			if (bgChangeState == 'before') {
				this.style.background = color
				this.innerHTML = '再点我2s还原'
				bgChangeState = 'after'
			} else {
				this.style.background = 'green'
				this.innerHTML = '点我2s变色'
				bgChangeState = 'before'
			}
			this.changing = false
		}, 2000)
	})
}
changeBgIn2sAfter('blue')

//test2: 给定一个数组，输出数组中的偶数
function getEvenArray(array) {
	if (!array || array.length == 0) return []
	
	//es5之前
	// return array.filter(function(item) {
	// 	return item % 2 == 0
	// })
	
	//es6使用箭头函数
	return array.filter(item => item % 2 == 0)
}
console.log(getEvenArray([0, 5, 3, 8, 20, 14, 16, 12]))


//*************************************扩展运算符(...)应用*******************************************
//数组合并
const kzDemoArray1 = [
	{
		name: '张三',
		age: 15,
		sex: '男'
	},
	{
		name: '李四',
		age: 24,
		sex: '女'
	}
]
const kzDemoArray2 = [
	{
		name: '王五',
		age: 13,
		sex: '男'
	},
	{
		name: '小明',
		age: 12,
		sex: '男'
	}
]
//es5
const kzDemoArrayResult = kzDemoArray1.concat(kzDemoArray2)
console.log(kzDemoArrayResult)
//es6
const kzDemoArrayResultEs6 = [...kzDemoArray1, ...kzDemoArray2]
console.log(kzDemoArrayResultEs6)

//数组克隆(浅拷贝: 会拷贝对象的引用地址，如果对象属性值发生改变则拷贝的地方的值也会发生改变)
//修改值不会改变，原始数组重新赋值也不会改变
const kzDemoArray3 = ['z', 's', 'm', 'l']
const kzDemoArray4 = [...kzDemoArray3]
kzDemoArray4[0] = 'a'
console.log(kzDemoArray3)
console.log(kzDemoArray4)

//修改对象的属性值会一起改变
const kzDemoArray5 = [{name: '张三', age: 12}, {name: '李四', age: 15}]
const kzDemoArray6 = [...kzDemoArray5]
kzDemoArray5[0].name = '王五'
console.log(kzDemoArray5)
console.log(kzDemoArray6)

//将伪数组转换为真正的数组
//什么是伪数组，比如arguments，看起开是个数组，其实他是一个对象
function getKzArray() {
	let array = [...arguments]
	console.log(array)
}
getKzArray(1, 2, 5, 8)


//*******************************************生成器函数例子************************************
/**
 * 使用异步编程完成以下功能
 *   1s后控制台输出111  2s后输出222  3秒后输出333
 */

//平时的做法
// setTimeout(() => {
// 	console.log('111')
// 	setTimeout(() => {
// 		console.log('222')
// 		setTimeout(() => {
// 			console.log('333')
// 		}, 3000)
// 	}, 2000)
// }, 1000)

//生成器函数做法，使用生成器完全的解决了函数回调地狱的问题
let taskIterator
function taskOne() {
	setTimeout(() => {
		console.log(111)
		taskIterator.next()
	}, 1000)
}
function taskTwo() {
	setTimeout(() => {
		console.log(222)
		taskIterator.next()
	}, 2000)
}
function taskThree() {
	setTimeout(() => {
		console.log(333)
	}, 3000)
}
function * gen3() {
	yield taskOne()
	yield taskTwo()
	yield taskThree()
}
taskIterator = gen3()
taskIterator.next()


//*************************************生成器函数传参例子**********************************
let reqIterator
function getUserInfo() {
	setTimeout(() => {
		let data = '得到用户数据'
		reqIterator.next(data)
	}, 1000)
}
function getOther() {
	setTimeout(() => {
		let data = '得到其他结果'
		reqIterator.next(data)
	}, 1000)
}
function * gen4() {
	let userInfo = yield getUserInfo()
	console.log(userInfo)
	let other = yield getOther()
	console.log(other)
}
reqIterator = gen4()
reqIterator.next()


//*************************************使用Promise完成文件读取封装*********************************
// const fs = require('fs')
// const readFilePromise = new Promise((resolve, reject) => {
// 	fs.readFile('../../css/test.css', (err, data) => {
// 		if (err) {
// 			reject(err)
// 		}
// 		resolve(data)
// 	})
// })
// readFilePromise.then(
// 	result => {
// 		console.log(result)
// 	},
// 	error => {
// 		console.log(error)
// 	}
// )


//*************************************使用Promise完成网络请求*********************************
/**
 * 使用ajax请求完成操作
 */
const reqPromise = new Promise((resolve, reject) => {
	//1.创建对象
	let xhr = new XMLHttpRequest()
	//2. 初始化
	xhr.open('GET', 'https://api.apiopen.top/getJoke')
	//3. 发送
	xhr.send()
	//4. 绑定事件，处理相应结果
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4) {
			//200 - 299为成功
			if (xhr.status >= 200 && xhr.status < 300) {
				resolve(xhr.response)
			} else {
				reject(xhr.status)
			}
		}
	}
})
reqPromise.then(
	result => {
		console.log(result)
	},
	error => {
		console.log(error)
	}
)


//********************************Promise的then方法链式调用例子*************************************
const promiseC = new Promise((resolve, reject) =>{
	resolve('success')
})
promiseC.then(result => {
	return new Promise((resolve, reject) => {
		resolve([result, 'success + 1'])
	})
}).then(result => {
	return new Promise((resolve, reject) => {
		result.push('success + 2')
		resolve(result)
	})
}).then(result => {
	//拼接数组并添加分隔符
	console.log(result.join('\r\n'))
})


//********************************Set小测试*************************************
/**
 * 按照需求实现以下功能
 */
let setDemoArr = [1, 3, 5, 6, 8, 1, 5, 7]
//数组去重
let result = new Set(setDemoArr)
//使用扩展运算符展开元素
result = [...result]
console.log(result)

//求数组交集
let setDemoArr2 = [5, 8, 7, 0, 9]
result = [...new Set(setDemoArr)].filter(item => new Set(setDemoArr2).has(item))
console.log(result)

//求数组并集
result = [...setDemoArr, ...setDemoArr2]
result = [...new Set(result)]
console.log(result)

//求数组差集
result = [...new Set(setDemoArr)].filter(item => !(new Set(setDemoArr2).has(item)))
console.log(result)