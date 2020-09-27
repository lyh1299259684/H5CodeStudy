//********************************Set集合****************************************************
/**
 * 特点：会自动去重
 */
let setArray = [1, 2, 3, 2, 5, 6, 4, 1]
let setArrTest = new Set(setArray)
console.log(setArrTest)  //结果[1,2,3,5,6,4]
// //查看数组长度
// console.log(setArrTest.size)
// //新增一个元素
// setArrTest.add(7)
// console.log(setArrTest)
// //删除一个元素
// setArrTest.delete(1)
// console.log(setArrTest)
// //查看某一个元素是否包含
// console.log(setArrTest.has(3))
// //清空
// setArrTest.clear()
// console.log(setArrTest)

//可以使用for...of遍历
for (let v of setArrTest) {
	console.log(v)
}


//********************************Map集合****************************************************
//简单实例
let mapA = new Map()

//添加元素1
mapA.set('name', '张三')
//添加元素2
mapA.set('action', () => {
	console.log('这是我的特长')
})
//添加元素3
let mapAKey = {
	test: 'aaaa'
}
mapA.set(mapAKey, [1, 3, 5, 8])

//获取集合元素个数
console.log(mapA.size)

//删除某一个元素
mapA.delete('name')
console.log(mapA)

//通过key获取元素
mapA.get('action')()
console.log(mapA.get(mapAKey))

//清空元素
mapA.clear()
console.log(mapA)


//********************************class类****************************************************
/**
 * es5通过构造函数实例化对象例子
 */
function Phone(name, price) {
	this.name = name
	this.price = price
}
//设置set方法
Phone.prototype.setName = function(name) {
	this.name = name
}
//设置get方法
Phone.prototype.getName = function() {
	return this.name
}
let Huawei = new Phone('华为', 6999)
console.log(Huawei)
console.log(Huawei.getName())
Huawei.setName('小米')
console.log(Huawei.getName())

/**
 * es6创建对象
 */
class e6Phone{
	//创建构造函数，可以有参，可以无参，必须使用constructor关键字，固定格式，通过new e6Phone()自动执行
	constructor(name, price) {
	    this.name = name
		this.price = price
	}
	//定义设置name方法，注意定义方法必须使用方法名 + (){} 的形式，否则会报错，举例setName(name){}
	setName(name) {
		this.name = name
	}
	//定义获取name方法
	getName() {
		return this.name
	}
}
let onePlus = new e6Phone('1+', 1999)
console.log(onePlus.getName())


//********************************class类的静态成员***********************************************
class PhoneB{
	//静态属性写法，据说是Es7支持，hx编译器好像不支持
	// static name = '手机'
	static getName() {
		console.log('aaa')
	}
}
PhoneB.getName()