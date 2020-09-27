//********************************class类继承***********************************************
/**
 * es5构造函数实现继承
 */
//父类
function E5Father(name, sex, age) {
	this.name = name
	this.sex = sex
	this.age = age
}
E5Father.prototype.spreak = function() {
	console.log('我可以说话')
}
E5Father.prototype.eat = function() {
	console.log('我可以吃饭')
}

//子类
function E5Child(name, sex, age, action) {
	//这里的this是子类的this，通过call函数复制
	E5Father.call(this, name, sex, age)
	//处理子类特有的属性
	this.action = action
}
//设置子类构造器原型
E5Child.prototype = new E5Father()
//验证原型，可以不写
E5Child.prototype.constructor = E5Father

//设置子类特有的方法
E5Child.prototype.setAction = function(action) {
	this.action = action
}
E5Child.prototype.getAction = function() {
	return this.action
}

//创建子类实例对象
let e5ChildTest = new E5Child('张三', '男', 28, '游泳,踢足球,攀岩')
//调用父类的方法
e5ChildTest.spreak()
//调用子类的方法
console.log(e5ChildTest.getAction())
//获取属性值
console.log(e5ChildTest.name)


/**
 * es6实现继承
 */
//父类
class E6Father {
	//初始化构造
	constructor(name, sex, age) {
	    this.name = name
		this.sex = sex
		this.age = age
	}
	spreak() {
		console.log('我可以说话')
	}
	eat() {
		console.log('我可以吃饭')
	}
}
//子类
class E6Child extends E6Father {
	//初始化构造
	constructor(name, sex, age, action) {
	    //初始化父类构造
		super(name, sex, age)
		this.action = action
	}
	//子类特有方法
	setAction(action) {
		this.action = action
	}
	getAction() {
		return this.action
	}
	/**
	 * 重写子类方法
	 * 	  注意：目前只能完全重写，也就说在子类重写了父类的方法，就只能调用子类的方法，无法调用父类的方法
	 */
	spreak() {
		console.log('我除了会说话，我还会说外语！')
	}
}
//初始化子类实例
let e6ChildTest = new E6Child('李四', '男', 18, 'E6真牛逼')
//调用父类方法
e6ChildTest.eat()
//调用子类方法
e6ChildTest.setAction('E6最牛逼')
console.log(e6ChildTest.getAction())
//调用重写方法
e6ChildTest.spreak()