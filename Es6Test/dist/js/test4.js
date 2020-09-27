'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//********************************class类继承***********************************************
/**
 * es5构造函数实现继承
 */
//父类
function E5Father(name, sex, age) {
	this.name = name;
	this.sex = sex;
	this.age = age;
}
E5Father.prototype.spreak = function () {
	console.log('我可以说话');
};
E5Father.prototype.eat = function () {
	console.log('我可以吃饭');
};

//子类
function E5Child(name, sex, age, action) {
	//这里的this是子类的this，通过call函数复制
	E5Father.call(this, name, sex, age);
	//处理子类特有的属性
	this.action = action;
}
//设置子类构造器原型
E5Child.prototype = new E5Father();
//验证原型，可以不写
E5Child.prototype.constructor = E5Father;

//设置子类特有的方法
E5Child.prototype.setAction = function (action) {
	this.action = action;
};
E5Child.prototype.getAction = function () {
	return this.action;
};

//创建子类实例对象
var e5ChildTest = new E5Child('张三', '男', 28, '游泳,踢足球,攀岩');
//调用父类的方法
e5ChildTest.spreak();
//调用子类的方法
console.log(e5ChildTest.getAction());
//获取属性值
console.log(e5ChildTest.name);

/**
 * es6实现继承
 */
//父类

var E6Father = function () {
	//初始化构造
	function E6Father(name, sex, age) {
		_classCallCheck(this, E6Father);

		this.name = name;
		this.sex = sex;
		this.age = age;
	}

	_createClass(E6Father, [{
		key: 'spreak',
		value: function spreak() {
			console.log('我可以说话');
		}
	}, {
		key: 'eat',
		value: function eat() {
			console.log('我可以吃饭');
		}
	}]);

	return E6Father;
}();
//子类


var E6Child = function (_E6Father) {
	_inherits(E6Child, _E6Father);

	//初始化构造
	function E6Child(name, sex, age, action) {
		_classCallCheck(this, E6Child);

		var _this = _possibleConstructorReturn(this, (E6Child.__proto__ || Object.getPrototypeOf(E6Child)).call(this, name, sex, age));
		//初始化父类构造


		_this.action = action;
		return _this;
	}
	//子类特有方法


	_createClass(E6Child, [{
		key: 'setAction',
		value: function setAction(action) {
			this.action = action;
		}
	}, {
		key: 'getAction',
		value: function getAction() {
			return this.action;
		}
		/**
   * 重写子类方法
   * 	  注意：目前只能完全重写，也就说在子类重写了父类的方法，就只能调用子类的方法，无法调用父类的方法
   */

	}, {
		key: 'spreak',
		value: function spreak() {
			console.log('我除了会说话，我还会说外语！');
		}
	}]);

	return E6Child;
}(E6Father);
//初始化子类实例


var e6ChildTest = new E6Child('李四', '男', 18, 'E6真牛逼');
//调用父类方法
e6ChildTest.eat();
//调用子类方法
e6ChildTest.setAction('E6最牛逼');
console.log(e6ChildTest.getAction());
//调用重写方法
e6ChildTest.spreak();