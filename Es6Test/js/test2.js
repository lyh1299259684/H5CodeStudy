//***********************************迭代器iterator************************************
/**
 * 具备iterator接口的数据结构，以下数据结构都可以使用for...of遍历
 * 1. Array
 * 2. Arguments
 * 3. Set
 * 4. Map
 * 5. String
 * 6. TypedArray
 * 7. NodeList
 */

//迭代器使用
let iterArray = [1, 2, 3, 4, 5]
//使用for...of来遍历
for (let v of iterArray) {
	console.log(v)
}

//遍历原理
/**
 * 1.创建一个指针对象，指向当前数据结构的起始位置
 * 2.第一次调用对象的next方法，指针自动指向数据结构的第一个成员
 * 3.接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员
 * 4.每次调用next方法返回一个包含value和done属性的对象，当done为true时表示数组遍历完成
 */
//************自定义遍历数组的时候可以使用迭代器*************************

//模拟for...of遍历过程
//先拿到迭代器
let iteratorA = iterArray[Symbol.iterator]()
//调用next方法遍历输出数组
let iterArrayi = 0
while (iterArrayi < iterArray.length) {
	console.log(iteratorA.next())
	iterArrayi += 1
}


//*****************************************自定义迭代器**************************************
//使用自定义迭代器遍历对象
let customIterator = {
	name: '张三',
	actions: [
		'打球',
		'游泳',
		'狂吃不胖',
		'爬山',
		'旅游'
	],
	[Symbol.iterator]() {
		let index = 0
		let that = this
		
		return {
			next: function() {
				let result
				if (index < that.actions.length) {
					result = {value: that.actions[index], done: false}
				} else {
					result = {value: undefined, done: true}
				}
				index++
				return result
			}
		}
	}
}
for (let v of customIterator) {
	console.log(v)
}


//*****************************************生成器函数**************************************
/**
 * 生成器其实就是一个特殊的函数
 * 语法如下：
 */
function * gen() {
	console.log('我是一个生成器')
	//生成器里面可以使用yield，它其实就是一个阻断符，可以将代码分隔，类似于break
	yield 1
	console.log('我是一个生成器1111')
	yield 2
	console.log('我是一个生成器2222')
	yield 3
	console.log('我是一个生成器3333')
}
//调用生成器
let genIterator = gen()
// genIterator.next()

//可以使用for...of进行遍历
for (let v of genIterator) {
	console.log(v)
}


//*****************************************生成器函数传参**************************************
function * gen2(params) {
	//生成器函数可以传入参数
	console.log(params)
	let y1 = yield 111
	console.log(y1)
}
let gen2Iterator = gen2('test')
gen2Iterator.next()
//next的方法可以传递参数，其参数将作为上一个yield的返回值
gen2Iterator.next('result111')


//****************************************Promise*********************************************
/**
 * 异步操作，可以用来网络请求，文件读取等，避免了回调地狱问题
 */
const promiseA = new Promise(function(resolve, reject){
	//模拟网络请求
	setTimeout(() => {
		//成功
		resolve('操作成功')
		//失败
		// reject('发生错误')
	}, 1000)
})
promiseA.then(
	//成功
	result => {
		console.log(result)
	},
	//失败
	error => {
		console.log(error)
	}
)


//**************************************Promise的then方法*****************************************
/**
 * then方法其实也是有返回值的，它的返回结果是一个Promise对象，对象状态由回调函数的执行结果决定
 * 
 * 1.如果回调函数中返回的结果是非Promise类型的，状态为成功，返回值为对象成功的值
 * 2.如果回调函数中返回的结果是Promise类型的，那么then方法的状态取决于返回结果的状态，会直接覆盖。
 */
const promiseB = new Promise((resolve, reject) => {
	resolve('success')
})
//then方法可以调用多次
promiseB.then(
	result => {
		//第一个结果请求成功
		console.log(result)
		//如果还想请求第二个那么可以直接返回一个Promise对象，会走第二个then
		return new Promise((resolve, reject) => {
			reject('fail')
		})
	},
	error => {
		console.log(error)
	}
).then(
	result => {
		console.log(result)
	},
	error => {
		console.log(error)
	}
)