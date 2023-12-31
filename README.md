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
<tr><td colspan=2>new Promise(fn)</td><td>
The Promise() constructor creates Promise objects. 
It is primarily used to wrap callback-based APIs that do not already support promises.
</td></tr>
<tr><td colspan=2>Promise.resolve(value)</td><td>
The Promise.resolve() static method "resolves" a given value to a Promise. 
If the value is a promise, that promise is returned; if the value is a thenable, 
Promise.resolve() will call the then() method with two callbacks it prepared; 
otherwise the returned promise will be fulfilled with the value.
</td></tr>
<tr><td colspan=2>Promise.reject(value)</td><td>
The Promise.reject() static method returns a Promise object that is rejected with a given reason.	
</td></tr>
<tr><td colspan=2>then(onFulfilled, onRejected)</td><td>
The then() method of Promise instances takes up to two arguments: 
callback functions for the fulfilled and rejected cases of the Promise. 
It immediately returns an equivalent Promise object, 
allowing you to chain calls to other promise methods.
</td></tr>
<tr><td colspan=2>Promise.all(arr)</td><td>
The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise fulfills when all of the input's promises fulfill 
(including when an empty iterable is passed), with an array of the fulfillment values. 
It rejects when any of the input's promises rejects, with this first rejection reason.
</td></tr>
<tr><td colspan=2>catch(onRejected)</td><td>
The catch() method of Promise instances schedules a function to be called when the promise is rejected.
It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods. 
It is a shortcut for Promise.prototype.then(undefined, onRejected).
</td></tr>
<tr><td colspan=2>Promise.race(values)</td><td>
The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise settles with the eventual state of the first promise that settles.
</td></tr>
<tr><td colspan=2>catch(onRejected)</td><td>catch metod is equival to calling Promise.prototype.then(undefined, onRejected)</td></tr>
<tr><td colspan=3>async/await  
<b>These functions are similar, but not identical, to the original in ECMAScript 2015.</b></td></tr>
<tr><td colspan=2>async(fnc)</td><td>The async() method changes fnc to a Promise instanse and returns it.If fnc has been a Promise instanse,it will be returned without changing.</td></tr>
<tr><td colspan=2>await(prms)</td><td>The await() method calls prms.then() method and waits till fulfill is executed, then returns the value of fulfill.</td></tr>
<tr><td colspan=3>
And I added a simple window mock implementation to cheat pdfmake environment checking.

```javascript
context.console={log:function(v){
		if (typeof v =="object"){
			java.lang.System.out.println(JSON.stringify(v));
		}else{
			java.lang.System.out.println(v);
		}
	}
}
context.navigator={
	//to cheat the checker of pdfmake
	userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
};
context.self=context;
context.window=context;
```

</td></tr>

</table>

## Samples
### A
The sample about async/await. It is amizing for nashorn, isn't it?
```Javascript
load("nashorn-ext-for-es6.min.js");
var f = async(function(){
	java.lang.System.out.println(new Date()+" The async started.");
	return new Promise(function(resolve, reject){
		setTimeout(function(param){resolve("hello world,"+param);},1000,"hello tokyo");
	});
});
var ret=await(f);
java.lang.System.out.println(new Date()+" The await return value is : "+ret);
```
![image](https://github.com/efwGrp/nashorn-ext-for-es6/blob/main/p1.png)

### B
The sample about Promise.all. It is added for running pdfmake.
And you can use console.log() for output.
```Javascript
load("nashorn-ext-for-es6.min.js");
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
setTimeout(resolve, 100, 'foo');
});
var a=await(Promise.all([promise1, promise2, promise3]));
console.log(a);
```
![image](https://github.com/efwGrp/nashorn-ext-for-es6/blob/main/p2.png)

### C
The sample to creat pdf using pdf-lib.
Besure your nashorn is 15.4 or later. To run the sample in JDK8 will be error.
You can download pdf-lib.min.js from https://pdf-lib.js.org/ or
https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js.
```Javascript
load("nashorn-ext-for-es6.min.js");
load("pdf-lib.min.js");
var pdfDoc=await(PDFLib.PDFDocument.create());
var page = pdfDoc.addPage([350, 400]);
page.moveTo(110, 200);
page.drawText("Hello World!");
var pdfDataUri=await(pdfDoc.saveAsBase64({ dataUri: true }));
java.lang.System.out.println(pdfDataUri);
```
Try to send the pdfDataUri to the src attribute of iframe, you will see your pdf.
![image](https://github.com/efwGrp/nashorn-ext-for-es6/blob/main/p3.png)
![image](https://github.com/efwGrp/nashorn-ext-for-es6/blob/main/p4.png)

### D
The sample to creat pdf using pdfmake.
Besure your nashorn is 15.4 or later. To run the sample in JDK8 will be error.
You can download pdfmake.min.js from http://pdfmake.org/ or
https://cdnjs.com/libraries/pdfmake .
```Javascript
load("nashorn-ext-for-es6.min.js");
load("pdfmake.min.js");
load("vfs_fonts.min.js");
var docDefinition = {
	content: [
		"This is a standard paragraph, using default style",
		{ text: "This paragraph will have a bigger font", fontSize: 15 },
		{
			text: [
				"This paragraph is defined as an array of elements to make it possible to ",
				{ text: "restyle part of it and make it bigger ", fontSize: 15 },
				"than the rest.",
			],
		},
	],
};
var pdfDataUri;
var doc=pdfMake.createPdf(docDefinition);
pdfDataUri=await(
	new Promise(function(resolve,reject){
		doc.getDataUrl(function(data){
			resolve(data);
		});
	})
);
console.log(pdfDataUri);
```
Try to send the pdfDataUri to the src attribute of iframe, you will see your pdf.
![image](https://github.com/efwGrp/nashorn-ext-for-es6/blob/main/p5.png)
![image](https://github.com/efwGrp/nashorn-ext-for-es6/blob/main/p6.png)
