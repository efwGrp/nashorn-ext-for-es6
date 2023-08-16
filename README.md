# nashorn-ext-for-es6

Nashorn has 100% support for ECMAScript 5.1, but not full support for ECMAScript 2015 and after version. It will be a painful experience if you want to use some third-party library that requires CMAScript 2015 in nashorn.This extension pack may be able to ease your pain.

## Implemented Features
<table>
<tr><th>Feature</th><th>ECMAScript</th><th>Explication</th></tr>
<tr><td colspan=3>Math</td></tr>
<tr><td>log10</td><td>2015</td><td>The Math.log10() static method returns the base 10 logarithm of a number. </td></tr>
<tr><td>log2</td><td>2015</td><td>The Math.log2() static method returns the base 2 logarithm of a number. </td></tr>
<tr><td>log1p</td><td>2015</td><td>The Math.log1p() static method returns the natural logarithm (base e) of 1 + x, where x is the argument.</td></tr>
<tr><td>expm1</td><td>2015</td><td>Math.expm1The Math.expm1() static method returns e raised to the power of a number, subtracted by 1. </td></tr>
<tr><td>sinh</td><td>2015</td><td>The Math.sinh() static method returns the hyperbolic sine of a number. </td></tr>
<tr><td>cosh</td><td>2015</td><td>The Math.cosh() static method returns the hyperbolic cosine of a number. </td></tr>
<tr><td>tanh</td><td>2015</td><td>The Math.tanh() static method returns the hyperbolic tangent of a number.</td></tr>
<tr><td>asinh</td><td>2015</td><td>The Math.asinh() static method returns the inverse hyperbolic sine of a number. </td></tr>
<tr><td>acosh</td><td>2015</td><td>The Math.acosh() static method returns the inverse hyperbolic cosine of a number.</td></tr>
<tr><td>atanh</td><td>2015</td><td>The Math.atanh() static method returns the inverse hyperbolic tangent of a number.</td></tr>
<tr><td>hypot</td><td>2015</td><td>The Math.hypot() static method returns the square root of the sum of squares of its arguments.</td></tr>
<tr><td>trunc</td><td>2015</td><td>The Math.trunc() static method returns the integer part of a number by removing any fractional digits.</td></tr>
<tr><td>sign</td><td>2015</td><td>The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument.</td></tr>
<tr><td>cbrt</td><td>2015</td><td>The Math.cbrt() static method returns the cube root of a number. </td></tr>
<tr><td>imul</td><td>2015</td><td>The Math.imul() static method returns the result of the C-like 32-bit multiplication of the two parameters.</td></tr>
<tr><td>fround</td><td>2015</td><td>The Math.fround() static method returns the nearest 32-bit single precision float representation of a number.</td></tr>
<tr><td>clz32</td><td>2015</td><td>The Math.clz32() static method returns the number of leading zero bits in the 32-bit binary representation of a number.</td></tr>
<tr><td colspan=3>Number</td></tr>
<tr><td>EPSILON</td><td>2015</td><td>The Number.EPSILON static data property represents the difference between 1 and the smallest floating point number greater than 1.</td></tr>
<tr><td>isFinite</td><td>2015</td><td>The Number.isFinite() static method determines whether the passed value is a finite number.</td></tr>
<tr><td>isInteger</td><td>2015</td><td>The Number.isInteger() static method determines whether the passed value is an integer.</td></tr>
<tr><td>isNaN</td><td>2015</td><td>The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type.</td></tr>
<tr><td>parseFloat</td><td>2015</td><td>The Number.parseFloat() static method parses an argument and returns a floating point number.</td></tr>
<tr><td>parseInt</td><td>2015</td><td>The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.</td></tr>
<tr><td colspan=3>String</td></tr>
<tr><td>codePointAt</td><td>2015</td><td>The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index.</td></tr>
<tr><td>fromCodePoint</td><td>2015</td><td>The String.fromCodePoint() static method returns a string created from the specified sequence of code points.</td></tr>
<tr><td>includes</td><td>2015</td><td>The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.</td></tr>
<tr><td>repeat</td><td>2015</td><td>The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.</td></tr>
<tr><td>trimStart</td><td>2019</td><td>The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. </td></tr>
<tr><td>trimEnd</td><td>2019</td><td>The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.</td></tr>
<tr><td>padStart</td><td>2017</td><td>The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.</td></tr>
<tr><td>padEnd</td><td>2017</td><td>The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.</td></tr>
<tr><td colspan=3>Array</td></tr>
<tr><td>of</td><td>2015</td><td>The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.</td></tr>
<tr><td>copyWithin</td><td>2015</td><td>The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.</td></tr>
<tr><td>includes</td><td>2016</td><td>The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.</td></tr>
<tr><td>flatMap</td><td>2019</td><td>The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. </td></tr>
<tr><td>from</td><td>2015</td><td>The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. <font color=red>nashorn15.4 is required.</font></td></tr>
<tr><td>flat</td><td>2015</td><td>The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. <b>nashorn15.4 is required.</b></td></tr>
<tr><td colspan=3>Object</td></tr>
<tr><td>assign</td><td>2015</td><td>The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
</td></tr>
<tr><td>is</td><td>2015</td><td>The Object.is() static method determines whether two values are the same value.</td></tr>
<tr><td>values</td><td>2017</td><td>The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.</td></tr>
<tr><td>getOwnPropertyDescriptors</td><td>2017</td><td>The Object.getOwnPropertyDescriptors() static method returns all own property descriptors of a given object.</td></tr>
<tr><td>entries</td><td>2017</td><td>The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs. <b>nashorn15.4 is required.</b></td></tr>
<tr><td colspan=3>This module mimics the browser's timeout functionality.I added it to make Promise work. Idears from https://github.com/nikku/nashorn-async</td></tr>
<tr><td colspan=3>[global]</td></tr>
<tr><td colspan=2>setTimeout(fn, millis)</td><td>The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.</td></tr>
<tr><td colspan=2>clearTimeout(task)</td><td>The global clearTimeout() method cancels a timeout previously established by calling setTimeout().</td></tr>
<tr><td colspan=2>setInterval(fn, millis)</td><td>The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.</td></tr>
<tr><td colspan=2>clearInterval(task)</td><td>The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). </td></tr>
<tr><td colspan=3>This module provides a simple Promise functionality implementation. Referenced from https://www.promisejs.org</td></tr>
<tr><td colspan=3>Promise</td></tr>
<tr><td colspan=2>new Promise(executor)</td><td>Creates a new Promise object. The constructor is primarily used to wrap functions that do not already support promises.</td></tr>
<tr><td colspan=2>then(onFulfilled, onRejected)</td><td>Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler.</td></tr>
<tr><td colspan=2>catch(onRejected)</td><td>catch metod is equival to calling Promise.prototype.then(undefined, onRejected)</td></tr>
<tr><td colspan=3>async/await  
<b>These functions are similar, but not identical, to the original in ECMAScript 2015.</b></td></tr>
<tr><td colspan=2>async(fnc)</td><td>The async() method changes fnc to a Promise instanse and returns it.If fnc has been a Promise instanse,it will be returned without changing.</td></tr>
<tr><td colspan=2>await(prms)</td><td>The await() method calls prms.then() method and waits till fulfill is executed, then returns the value of fulfill.</td></tr>
</table>

## Samples
The sample about async/await. It is amizing for nashorn, isn't it?
```Javascript
load("nashorn-ext-for-es6.js");
var f = async(function(){
	java.lang.System.out.println(new Date()+" The async started.");
	return new Promise(function(resolve, reject){
		setTimeout(function(){resolve("hello world");},1000);
	});
});
var ret=await(f);
java.lang.System.out.println(new Date()+" The await return value is : "+ret);
```
