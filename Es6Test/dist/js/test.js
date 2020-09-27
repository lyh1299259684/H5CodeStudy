'use strict';

//********************************* Es6 var和let的作用域 ***************************************
{
	var _a = 0;
}
var a = 2;
var a = 5;
console.log(a);

/**
 * 改变盒子背景颜色
 * @param {Object} color 想要改变的颜色
 */
function changeBoxBgColor(color) {
	var boxItemArray = document.getElementsByClassName('item');
	//方案1
	// for(let i = 0; i < boxItemArray.length; i++) {
	// 	boxItemArray[i].onclick = function() {
	// 		boxItemArray[i].style.background = color
	// 		resetBgColor(i, boxItemArray)
	// 	}
	// }

	//方案2

	var _loop = function _loop(i) {
		boxItemArray[i].onclick = function () {
			this.style.background = color;
			resetBgColor(i, boxItemArray);
		};
	};

	for (var i = 0; i < boxItemArray.length; i++) {
		_loop(i);
	}
}
/**
 * 修改其他没有选中的盒子为默认颜色
 * @param {Object} selectIndex
 * @param {Object} array
 */
function resetBgColor(selectIndex, array) {
	for (var i = 0; i < array.length; i++) {
		if (i != selectIndex) {
			array[i].style.background = 'white';
		}
	}
}
changeBoxBgColor('#EAEAEA');

//********************************* Es6解构赋值 ***************************************
/* 案例1 */
var jArray = ['张三', '李四', '王五'];
var zhangsan = jArray[0],
    lisi = jArray[1],
    wangwu = jArray[2];

console.log(zhangsan);
/* 案例2 */
var jOArray = [{
	name: '张三',
	age: 12,
	sex: '男'
}, {
	name: '李四',
	age: 14,
	sex: '男'
}, {
	name: '王五',
	age: 16,
	sex: '女'
}];
var zhangsanO = jOArray[0],
    lisiO = jOArray[1],
    wangwuO = jOArray[2];

console.log(zhangsanO);
/* 案例3 */
var jO = {
	title: '测试',
	content: '测试内容',
	test: function test(title) {
		console.log(title);
	}
};
var title = jO.title,
    test = jO.test;

test(title);
console.log(jO);

//********************************* Es6模板字符串 ***************************************
// 模板字符串，其实也是一个字符串，只是新增了一些特性
/**
 * 特性1： 可以直接换行，无需拼接
 */
var htmlStr = '<div>\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<hr/>\n\t\t\t   </div>';
console.log(htmlStr);
/**
 * 特性2：拼接字符串
 */
var mubanStr1 = '张三';
var mubanStr2 = mubanStr1 + '\u559C\u6B22\u559D\u5564\u9152\uFF01';
console.log(mubanStr2);
/**
 * 特性3：可以声明字符串
 */
var createStr = '\u58F0\u660E\u4E00\u4E2A\u5B57\u7B26\u4E32';
console.log(createStr);

//********************************* Es6简化对象写法 ***************************************
var jhName = '张三';
var jhAge = 14;
function jhAction() {
	console.log('我的技能');
}
//简化声明
var jhObj = {
	jhName: jhName,
	jhAge: jhAge,
	jhAction: jhAction,
	jhObjAction: function jhObjAction() {
		console.log('我是新声明的方法');
	}
};
jhObj.jhAction();
jhObj.jhObjAction();
console.log(jhObj);

//********************************* Es6箭头函数 ***************************************
//声明箭头函数
var jtFn = function jtFn(a, b) {
	return a + b;
};
console.log(jtFn(1, 45));
/**
 * 特性1： this是静态的，this始终指向函数声明时所在的作用域下的this的值
 */
function getJtName() {
	console.log(this.jtName);
}
var getJtName2 = function getJtName2() {
	console.log(undefined.jtName);
};
window.jtName = '箭头函数学习';
var jtObj = {
	jtName: '动态this指针'
	//普通函数指针已经改变
};getJtName.call(jtObj);
//箭头函数未改变
getJtName2.call(jtObj);

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
var JtPerson = function JtPerson(name, age) {
	this.name = name;
	this.age = age;
};
var JtMe = new JtPerson('张三', 15);
console.log(JtMe);

/**
 * 特性3： 不能使用arguments变量
 */
//错误
// let jtArgs = () => {
// 	console.log(arguments)
// }
// jtArgs(1, 2, 3)
//正确
var jtArgs = function jtArgs() {
	if (arguments && arguments.length > 0) {
		console.log(arguments);
	}
};
jtArgs(1, 2, 3);

/**
 * 特性4：箭头函数简写，有以下两种方式可以简写
 */
//简写1：有且只有一个形参的时候可以不用写小括号
var jtEasy1 = function jtEasy1(n) {
	return n * n;
};
console.log(jtEasy1(542));
//简写2：代码块里面只有一行的时候可以省略花括号，省略花括号后一定会有返回值，所以不用写return
//1
var jtEasy2 = function jtEasy2(n) {
	return n + n;
};
console.log(jtEasy2(6));
//2
var jtEasy3 = function jtEasy3(n) {
	return n * n;
};
console.log(jtEasy3(6));

var is_eng_num_special = function is_eng_num_special(str) {
	var engA = /[A-Z]/;
	var enga = /[a-z]/;
	var num = /[0-9]/;
	var special = new RegExp("[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“'。，、？_]");
	return engA.test(str) && enga.test(str) && num.test(str) && special.test(str);
};