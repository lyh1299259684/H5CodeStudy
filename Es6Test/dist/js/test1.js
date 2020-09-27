'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _symbolDemo, _symbolDemo2;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//***********************************形参赋初始值************************************
//在es6中允许给参数赋初始值
//注意：赋初始值的参数一般是最后一个参数
var defaultParams = function defaultParams(a, b) {
	var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
	return a + b + c;
};
console.log(defaultParams(0, 5));

//结合结构函数一起使用
function connect(_ref) {
	var _ref$host = _ref.host,
	    host = _ref$host === undefined ? '100.10.1.2' : _ref$host,
	    username = _ref.username,
	    password = _ref.password,
	    _ref$port = _ref.port,
	    port = _ref$port === undefined ? 80 : _ref$port;

	console.log(host);
	console.log(username);
	console.log(password);
	console.log(port);
}
connect({
	host: '17.1.1.2',
	username: 'zhangsan',
	password: 'root'
});

//***********************************rest获取实参************************************
/**
 * es6之后引入了rest获取实参的概念，代替了arguments，rest参数返回的是一个数组，arguments返回的是一个对象
 * 	引入rest之后的一个好处是，我们可以使用Array里面的方法，比如filter、some、every、map
 * 
 * 	注意事项：rest参数必须放在最后一个，否则会报错，提示说必须放在最后一个
 */
//es5
function es5Args() {
	console.log(arguments);
}
es5Args(0, 2, 3);
//es6
function es6Args() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	console.log(args.filter(function (item) {
		return item % 2 == 1;
	}));
}
es6Args(5, 6, 7);
function es6Args2(a, b) {
	console.log(a);
	console.log(b);

	for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
		args[_key2 - 2] = arguments[_key2];
	}

	console.log(args);
}
es6Args2(5, 8, 12, 23, 45, 55);

//***********************************...扩展运算符************************************
//扩展运算符就相当于分解数组
var kzArray = ['张三', '李四', '王五'];
function getKzArray() {
	console.log(arguments);
}
getKzArray.apply(undefined, kzArray); // => getKzArray('张三', '李四', '王五')


//***********************************Symbol************************************
/**
 * Es6引入了一种新的原始数据类型Symbol, 表示独一无二的值，是一种类似于字符串的数据类型
 * 		注意：1.Symbol的值是唯一的，用来解决命名冲突的问题
 *  		  2.Symbol值不能与其他数据进行运算
 *   		  3.Symbol定义的对象属性不能用for...in循环遍历，但是可以使用Reflect.ownKeys来获取对象
 * 				的所有键名
 */
//创建1
var sym1 = Symbol();
console.log(sym1, typeof sym1 === 'undefined' ? 'undefined' : _typeof(sym1));
//函数创建
var sym2 = Symbol('测试');
var sym3 = Symbol('测试');
console.log(sym2 === sym3); //false
console.log(sym2, typeof sym2 === 'undefined' ? 'undefined' : _typeof(sym2));
//函数对象创建
var sym4 = Symbol.for('张三');
var sym5 = Symbol.for('张三');
console.log(sym4 === sym5); //true
console.log(sym4, typeof sym4 === 'undefined' ? 'undefined' : _typeof(sym4));

//js数据类型总结
/**
 * undefined
 * string symbol
 * object
 * null number
 * boolean
 * 
 * if (str) //undefined、null、''都会返回false
 */

//***********************************Symbol的使用************************************
/**
 * 使用Symbol创建对象属性，犹豫对于相对比较复杂的对象，里面有哪些函数我们不知道，这时候我们又要往这个对象
 * 里面添加一个方法，这时候是有很大风险出现方法重名的问题，那么就可以通过Symbol的方式添加，这样及简单又
 * 可以保证唯一安全
 */

//案例1：
var symbolDemo = {
	name: '张三',
	age: 15,
	action: '',
	setAction: function setAction(action) {
		this.action = action;
	},
	getAction: function getAction() {
		return this.action;
	}
};
var addMethod = {
	up: Symbol(),
	down: Symbol(),
	getAction: Symbol()
};
symbolDemo.setAction('我会跳舞');
symbolDemo[addMethod.up] = function () {
	console.log('跳起来了');
};
symbolDemo[addMethod.down] = function () {
	console.log('坐下了');
};
symbolDemo[addMethod.getAction] = function () {
	return this.action;
};
symbolDemo[addMethod.up]();
console.log(symbolDemo[addMethod.getAction]());
console.log(symbolDemo.getAction());

//案例2
var symbolDemo2 = (_symbolDemo = {
	playName: '狼人杀'
}, _defineProperty(_symbolDemo, Symbol.for('say'), function () {
	console.log('平民请发言');
}), _defineProperty(_symbolDemo, Symbol.for('up'), function () {
	console.log('狼人请起立');
}), _defineProperty(_symbolDemo, Symbol.for('down'), function () {
	console.log('巫师请坐下');
}), _symbolDemo);
symbolDemo2[Symbol.for('say')]();

//案例3
var symbolDemo3 = (_symbolDemo2 = {
	playName: '狼人杀'
}, _defineProperty(_symbolDemo2, Symbol('say'), function () {
	console.log('平民请发言');
}), _defineProperty(_symbolDemo2, Symbol('up'), function () {
	console.log('狼人请起立');
}), _defineProperty(_symbolDemo2, Symbol('down'), function () {
	console.log('巫师请坐下');
}), _symbolDemo2);
symbolDemo3[Object.getOwnPropertySymbols(symbolDemo3)[0]]();

//***********************************Symbol内置属性************************************
// 1. Symbol.hasInstance 用来检测类型

var Person = function () {
	function Person() {
		_classCallCheck(this, Person);
	}

	_createClass(Person, null, [{
		key: Symbol.hasInstance,
		value: function value(params) {
			//还可以传递参数参数就是symO
			console.log(params);
			console.log("检测类型时触发");
			//这里返回什么instanceof的结果就是什么
			return true;
		}
	}]);

	return Person;
}();

var symO = { name: '张三'
	//此处的结果跟Symbol.hasInstance里面的返回值有管
};console.log(symO instanceof Person);

//2. Symbol.isConcatSpreadable concat合并后是否可以展开
var symArray1 = [1, 2, 3];
var symArray2 = [4, 5, 6];
//不设置时输出结果为[1, 2, 3, 4, 5, 6]
console.log(symArray1.concat(symArray2));
//设置后输出结果为[1, 2, 3, Array(3)]
symArray2[Symbol.isConcatSpreadable] = false;
console.log(symArray1.concat(symArray2));