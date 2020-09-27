import * as m1 from './module/m1.js'
m1.module1()

import {hello, module1} from './module/m1.js'
console.log(hello)

import m3 from './module/m3.js'
m3.module2()

//使用import引入jquery，完成修改背景颜色的需求
/**
 * 步骤
 * 	 1.首先要执行 npm i jquery 完成jquery的安装
 *   2.引入jquery
 */
import $ from 'jquery'  //这一步完成jquery的引入，相当于const $ = require('jquery')
//完成背景颜色的修改
$('body').css('background', 'pink')