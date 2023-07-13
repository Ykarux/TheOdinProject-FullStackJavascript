"use strict";

var hello = function hello() {
  return console.log('hello world!');
};
var a = 5;
var myObj = {
  a: a
};
console.log(Object.hasOwn(myObj, 'a'));
