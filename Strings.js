'use strict';

// Task #1
let name = 'Mary ';
let activity = 'drink tea';
let bio = 'Our guest ' + name + activity + '.';
console.log(bio.length);

// Task #2
const str =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

let number = prompt('Enter a number');

if (isNaN(number)) {
  console.log('not a number');
} else {
  console.log(`the Character at ${number} is '${str.charAt(number)}'`);
}

// Task #3
let string = prompt('Enter a String');

console.log(
  string.charAt(string.length - 2) + string.charAt(string.length - 1),
);

// Task #4
const str1 = 'abcde';
let newstr = '';
for (let i = 1; i <= str1.length; i++) {
  newstr += str1.charAt(str1.length - i);
}
console.log(newstr);

// Task #5
const js = 'js';
console.log(js.toUpperCase());

// Task #6
const str2 =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
let find = prompt('Enter a String');

console.log(str2.includes(find));

// Task #7
let numbers = '1-2-3-4-5';
while (numbers.includes('-')) {
  numbers = numbers.replace('-', '.');
}
console.log(numbers);

// Task #8
let numberss = '1-2-3-4-5';
numberss = numberss.replaceAll('-', '.');
console.log(numberss);

// Task #9
const st_r = 'sdfwe';
console.log(st_r.substring(4, 2)); //output: fw

// Task #10
const s_tr = "I'm learning javascript!";
console.log(s_tr.substr(4, 8));
console.log(s_tr.substr(13));
console.log(s_tr.substr(-11, 10));

console.log('');

console.log(s_tr.substring(4, 12));
console.log(s_tr.substring(13));
console.log(s_tr.substring(13, 23));

console.log('');

console.log(s_tr.slice(4, -12));
console.log(s_tr.slice(13));
console.log(s_tr.slice(-11, -1));

// Task #11
const _str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/';

if (_str.indexOf('http://') != 0) {
  console.log(`'${_str}' does not start with 'http://'`);
} else {
  console.log(`'${_str}' starts with 'http://'`);
}

// Task #12
const str_ = 'https://www.notion.html';

if (str_.length - str_.indexOf('.html') != 5) {
  console.log(`'${str_}' does not end with '.html'`);
} else {
  console.log(`'${str_}' ends with '.html'`);
}

// Task #13
const letters = 'ab cd cd cd ef';
console.log(letters.lastIndexOf('cd')); // 9
console.log(letters.lastIndexOf('cd', 8)); // 6

// Task #14
const string_ = 'abcde';

console.log(string_.startsWith('abc')); // true
console.log(string_.startsWith('xxx')); // false
console.log(string_.startsWith('bc')); // false

// Task #15
const _string = 'abcde';

console.log(_string.endsWith('cde')); // true
console.log(_string.endsWith('xxx')); // false
console.log(_string.endsWith('bc')); // false

// Task #16
let _str_ = 'ab-cd-ef';
console.log(_str_.split('-')); // ['ab', 'cd', 'ef']
console.log(_str_.split('-', 2)); //['ab', 'cd']
console.log(_str_.split('')); // ['a', 'b', '-', 'c', 'd', '-', 'e', 'f']
console.log(_str_.split('', 3)); // ['a', 'b', '-']

let _str_2 = '12345';
console.log(_str_2.split('')); // ['1', '2', '3', '4', '5']
