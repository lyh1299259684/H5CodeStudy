'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(gen2);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var iterArray = [1, 2, 3, 4, 5];
//使用for...of来遍历
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = iterArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var v = _step.value;

		console.log(v);
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

var iteratorA = iterArray[Symbol.iterator]();
//调用next方法遍历输出数组
var iterArrayi = 0;
while (iterArrayi < iterArray.length) {
	console.log(iteratorA.next());
	iterArrayi += 1;
}

//*****************************************自定义迭代器**************************************
//使用自定义迭代器遍历对象
var customIterator = _defineProperty({
	name: '张三',
	actions: ['打球', '游泳', '狂吃不胖', '爬山', '旅游']
}, Symbol.iterator, function () {
	var index = 0;
	var that = this;

	return {
		next: function next() {
			var result = void 0;
			if (index < that.actions.length) {
				result = { value: that.actions[index], done: false };
			} else {
				result = { value: undefined, done: true };
			}
			index++;
			return result;
		}
	};
});
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = customIterator[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _v = _step2.value;

		console.log(_v);
	}

	//*****************************************生成器函数**************************************
	/**
  * 生成器其实就是一个特殊的函数
  * 语法如下：
  */
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

function gen() {
	return regeneratorRuntime.wrap(function gen$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					console.log('我是一个生成器');
					//生成器里面可以使用yield，它其实就是一个阻断符，可以将代码分隔，类似于break
					_context.next = 3;
					return 1;

				case 3:
					console.log('我是一个生成器1111');
					_context.next = 6;
					return 2;

				case 6:
					console.log('我是一个生成器2222');
					_context.next = 9;
					return 3;

				case 9:
					console.log('我是一个生成器3333');

				case 10:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked, this);
}
//调用生成器
var genIterator = gen();
// genIterator.next()

//可以使用for...of进行遍历
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = genIterator[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _v2 = _step3.value;

		console.log(_v2);
	}

	//*****************************************生成器函数传参**************************************
} catch (err) {
	_didIteratorError3 = true;
	_iteratorError3 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion3 && _iterator3.return) {
			_iterator3.return();
		}
	} finally {
		if (_didIteratorError3) {
			throw _iteratorError3;
		}
	}
}

function gen2(params) {
	var y1;
	return regeneratorRuntime.wrap(function gen2$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					//生成器函数可以传入参数
					console.log(params);
					_context2.next = 3;
					return 111;

				case 3:
					y1 = _context2.sent;

					console.log(y1);

				case 5:
				case 'end':
					return _context2.stop();
			}
		}
	}, _marked2, this);
}
var gen2Iterator = gen2('test');
gen2Iterator.next();
//next的方法可以传递参数，其参数将作为上一个yield的返回值
gen2Iterator.next('result111');

//****************************************Promise*********************************************
/**
 * 异步操作，可以用来网络请求，文件读取等，避免了回调地狱问题
 */
var promiseA = new Promise(function (resolve, reject) {
	//模拟网络请求
	setTimeout(function () {
		//成功
		resolve('操作成功');
		//失败
		// reject('发生错误')
	}, 1000);
});
promiseA.then(
//成功
function (result) {
	console.log(result);
},
//失败
function (error) {
	console.log(error);
});

//**************************************Promise的then方法*****************************************
/**
 * then方法其实也是有返回值的，它的返回结果是一个Promise对象，对象状态由回调函数的执行结果决定
 * 
 * 1.如果回调函数中返回的结果是非Promise类型的，状态为成功，返回值为对象成功的值
 * 2.如果回调函数中返回的结果是Promise类型的，那么then方法的状态取决于返回结果的状态，会直接覆盖。
 */
var promiseB = new Promise(function (resolve, reject) {
	resolve('success');
});
//then方法可以调用多次
promiseB.then(function (result) {
	//第一个结果请求成功
	console.log(result);
	//如果还想请求第二个那么可以直接返回一个Promise对象，会走第二个then
	return new Promise(function (resolve, reject) {
		reject('fail');
	});
}, function (error) {
	console.log(error);
}).then(function (result) {
	console.log(result);
}, function (error) {
	console.log(error);
});