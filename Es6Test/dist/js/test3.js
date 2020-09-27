'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//********************************Set集合****************************************************
/**
 * 特点：会自动去重
 */
var setArray = [1, 2, 3, 2, 5, 6, 4, 1];
var setArrTest = new Set(setArray);
console.log(setArrTest); //结果[1,2,3,5,6,4]
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
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = setArrTest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var v = _step.value;

		console.log(v);
	}

	//********************************Map集合****************************************************
	//简单实例
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var mapA = new Map();

//添加元素1
mapA.set('name', '张三');
//添加元素2
mapA.set('action', function () {
	console.log('这是我的特长');
});
//添加元素3
var mapAKey = {
	test: 'aaaa'
};
mapA.set(mapAKey, [1, 3, 5, 8]);

//获取集合元素个数
console.log(mapA.size);

//删除某一个元素
mapA.delete('name');
console.log(mapA);

//通过key获取元素
mapA.get('action')();
console.log(mapA.get(mapAKey));

//清空元素
mapA.clear();
console.log(mapA);

//********************************class类****************************************************
/**
 * es5通过构造函数实例化对象例子
 */
function Phone(name, price) {
	this.name = name;
	this.price = price;
}
//设置set方法
Phone.prototype.setName = function (name) {
	this.name = name;
};
//设置get方法
Phone.prototype.getName = function () {
	return this.name;
};
var Huawei = new Phone('华为', 6999);
console.log(Huawei);
console.log(Huawei.getName());
Huawei.setName('小米');
console.log(Huawei.getName());

/**
 * es6创建对象
 */

var e6Phone = function () {
	//创建构造函数，可以有参，可以无参，必须使用constructor关键字，固定格式，通过new e6Phone()自动执行
	function e6Phone(name, price) {
		_classCallCheck(this, e6Phone);

		this.name = name;
		this.price = price;
	}
	//定义设置name方法，注意定义方法必须使用方法名 + (){} 的形式，否则会报错，举例setName(name){}


	_createClass(e6Phone, [{
		key: 'setName',
		value: function setName(name) {
			this.name = name;
		}
		//定义获取name方法

	}, {
		key: 'getName',
		value: function getName() {
			return this.name;
		}
	}]);

	return e6Phone;
}();

var onePlus = new e6Phone('1+', 1999);
console.log(onePlus.getName());

//********************************class类的静态成员***********************************************

var PhoneB = function () {
	function PhoneB() {
		_classCallCheck(this, PhoneB);
	}

	_createClass(PhoneB, null, [{
		key: 'getName',

		//静态属性写法，据说是Es7支持，hx编译器好像不支持
		// static name = '手机'
		value: function getName() {
			console.log('aaa');
		}
	}]);

	return PhoneB;
}();

PhoneB.getName();