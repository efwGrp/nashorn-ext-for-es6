/****************************
MIT License

Copyright (c) 2023 efwGrp

https://github.com/efwGrp/nashorn-ext-for-es6
****************************/
"use strict";
///////////////////////////////////////////////////////////////////////////////
/**
The Math.log10() static method returns the base 10 logarithm of a number. 
ECMAScript 2015
*/
if (Math.log10==null){
	Math.log10=function(x){
		return Math.log(x) * Math.LOG10E;
	}
	Object.defineProperty(Math, "log10", {enumerable: false});
}
/**
The Math.log2() static method returns the base 2 logarithm of a number. 
ECMAScript 2015
*/
if (Math.log2==null){
	Math.log2=function(x){
		return Math.log(x) * Math.LOG2E;
	}
	Object.defineProperty(Math, "log2", {enumerable: false});
}
/**
The Math.log1p() static method returns the natural logarithm (base e) of 1 + x, where x is the argument.
ECMAScript 2015
*/
if (Math.log1p==null){
	Math.log1p=function(x){
		x = Number(x);
		if (x < -1 || x !== x) return NaN;
		if (x === 0 || x === Infinity) return x;
		var nearX = x + 1 - 1;
		return nearX === 0 ? x : x * (Math.log(x + 1) / nearX);
	}
	Object.defineProperty(Math, "log1p", {enumerable: false});
}
/**
Math.expm1The Math.expm1() static method returns e raised to the power of a number, subtracted by 1. 
ECMAScript 2015
*/
if (Math.expm1==null){
	Math.expm1=function(x){
		return Math.exp(x) - 1;
	}
	Object.defineProperty(Math, "expm1", {enumerable: false});
}
/**
The Math.sinh() static method returns the hyperbolic sine of a number. 
ECMAScript 2015
*/
if (Math.sinh==null){
	Math.sinh=function(x){
		return (Math.exp(x) - Math.exp(-x)) / 2;
	}
	Object.defineProperty(Math, "sinh", {enumerable: false});
}
/**
The Math.cosh() static method returns the hyperbolic cosine of a number. 
ECMAScript 2015
*/
if (Math.cosh==null){
	Math.cosh=function(x){
		return (Math.exp(x) + Math.exp(-x)) / 2;
	}
	Object.defineProperty(Math, "cosh", {enumerable: false});
}
/**
The Math.tanh() static method returns the hyperbolic tangent of a number. 
ECMAScript 2015
*/
if (Math.tanh==null){
	Math.tanh=function(x){
		var a = Math.exp(+x),b = Math.exp(-x);
		return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
	}
	Object.defineProperty(Math, "tanh", {enumerable: false});
}
/**
The Math.asinh() static method returns the inverse hyperbolic sine of a number. 
ECMAScript 2015
*/
if (Math.asinh==null){
	Math.asinh=function(x){
		var absX = Math.abs(x),w;
		if (absX < 3.725290298461914e-9)
		// |x| < 2^-28
		return x;
		if (absX > 268435456)
		// |x| > 2^28
		w = Math.log(absX) + Math.LN2;
		else if (absX > 2)
		// 2^28 >= |x| > 2
		w = Math.log(2 * absX + 1 / (Math.sqrt(x * x + 1) + absX));
		else
		var t = x * x,
		w = Math.log1p(absX + t / (1 + Math.sqrt(1 + t)));

		return x > 0 ? w : -w;
	}
	Object.defineProperty(Math, "asinh", {enumerable: false});
}
/**
The Math.acosh() static method returns the inverse hyperbolic cosine of a number. 
ECMAScript 2015
*/
if (Math.acosh==null){
	Math.acosh=function(x){
		return Math.log(x + Math.sqrt(x * x - 1));
	}
	Object.defineProperty(Math, "acosh", {enumerable: false});
}
/**
The Math.atanh() static method returns the inverse hyperbolic tangent of a number. 
ECMAScript 2015
*/
if (Math.atanh==null){
	Math.atanh=function(x){
		return Math.log((1 + x) / (1 - x)) / 2;
	}
	Object.defineProperty(Math, "atanh", {enumerable: false});
}
/**
The Math.hypot() static method returns the square root of the sum of squares of its arguments.
ECMAScript 2015
*/
if (Math.hypot==null){
	Math.hypot=function(){
		var y = 0,i = arguments.length,containsInfinity = false;
		while (i--) {
			var arg = arguments[i];
			if (arg === Infinity || arg === -Infinity) containsInfinity = true;
			y += arg * arg;
		}
		return containsInfinity ? Infinity : Math.sqrt(y);
	}
	Object.defineProperty(Math, "hypot", {enumerable: false});
}
/**
The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
ECMAScript 2015
*/
if (Math.trunc==null){
	Math.trunc=function(x){
		return x < 0 ? Math.ceil(x) : Math.floor(x);
	}
	Object.defineProperty(Math, "trunc", {enumerable: false});
}
/**
The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument.
ECMAScript 2015
*/
if (Math.sign==null){
	Math.sign=function(x){
		return (x > 0) - (x < 0) || +x;
	}
	Object.defineProperty(Math, "sign", {enumerable: false});
}
/**
The Math.cbrt() static method returns the cube root of a number. 
ECMAScript 2015
*/
if (Math.cbrt==null){
	Math.cbrt=function(x){
		return x < 0 ? -Math.pow(-x, 1 / 3) : Math.pow(x, 1 / 3);
	}
	Object.defineProperty(Math, "cbrt", {enumerable: false});
}
/**
The Math.imul() static method returns the result of the C-like 32-bit multiplication of the two parameters.
ECMAScript 2015
*/
if (Math.imul==null){
	Math.imul=function(a,b){
		var aHi = (a >>> 16) & 0xffff;
		var aLo = a & 0xffff;
		var bHi = (b >>> 16) & 0xffff;
		var bLo = b & 0xffff;
		// the shift by 0 fixes the sign on the high part
		// the final |0 converts the unsigned value into a signed value
		return (aLo * bLo + (((aHi * bLo + aLo * bHi) << 16) >>> 0)) | 0;
	}
	Object.defineProperty(Math, "imul", {enumerable: false});
}
/**
The Math.fround() static method returns the nearest 32-bit single precision float representation of a number.
ECMAScript 2015
*/
if (Math.fround==null){
	Math.fround=function(x){
		var array=new Float32Array(1);
		return (array[0] = x), array[0];
	}
	Object.defineProperty(Math, "fround", {enumerable: false});
}
/**
The Math.clz32() static method returns the number of leading zero bits in the 32-bit binary representation of a number.
ECMAScript 2015
*/
if (Math.clz32==null){
	Math.clz32=function(x){
	  // Let n be ToUint32(x).
	  // Let p be the number of leading zero bits in
	  // the 32-bit binary representation of n.
	  // Return p.
	  var asUint = x >>> 0;
	  if (asUint === 0) {
		return 32;
	  }
	  return (31 - ((Math.log(asUint) / Math.LN2) | 0)) | 0; // the "| 0" acts like math.floor
	}
	Object.defineProperty(Math, "clz32", {enumerable: false});
}
///////////////////////////////////////////////////////////////////////////////
/**
The Number.EPSILON static data property represents the difference between 1 and the smallest floating point number greater than 1.
ECMAScript 2015
*/
if (Number.EPSILON==null){
	Number.EPSILON=2.2204460492503130808472633361816E-16;
	Object.defineProperty(Number, "EPSILON", {enumerable: false});
}
/**
The Number.isFinite() static method determines whether the passed value is a finite number.
ECMAScript 2015
*/
if (Number.isFinite==null){
	Number.isFinite=function(x){
		return typeof x === "number" && isFinite(x);
	}
	Object.defineProperty(Number, "isFinite", {enumerable: false});
}
/**
The Number.isInteger() static method determines whether the passed value is an integer.
ECMAScript 2015
*/
if (Number.isInteger==null){
	Number.isInteger=function(x){
		if (typeof x !== "number") return false;
		return x % 1 === 0;
	}
	Object.defineProperty(Number, "isInteger", {enumerable: false});
}
/**
The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type. 
ECMAScript 2015
*/
if (Number.isNaN==null){
	Number.isNaN=function(x){
		return x !== x;
	}
	Object.defineProperty(Number, "isNaN", {enumerable: false});
}
/**
The Number.parseFloat() static method parses an argument and returns a floating point number.
ECMAScript 2015
*/
if (Number.parseFloat==null){
	Number.parseFloat=function(string){
		return parseFloat(string);
	}
	Object.defineProperty(Number, "parseFloat", {enumerable: false});
}
/**
The Number.parseInt() static method parses a string argument and returns an integer of the specified radix or base.
ECMAScript 2015
*/
if (Number.parseInt==null){
	Number.parseInt=function(string,radix){
		return parseInt(string,radix);
	}
	Object.defineProperty(Number, "parseInt", {enumerable: false});
}
///////////////////////////////////////////////////////////////////////////////
/**
The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index.
ECMAScript 2015
*/
if (String.prototype.codePointAt==null) {
	String.prototype.codePointAt = function(position) {
		var str = String(this);
		var length = str.length;
		var size = 0;
		var index = 0;
		var count = 0;
		for (var index = 0; index < length; index += size) {
			var high = str.charCodeAt(index);
			var low = str.charCodeAt(index + 1);
			if ((0xD800 <= high && high <= 0xDBFF) &&
			(0xDC00 <= low && low <= 0xDFFF)
			) {
				if (count == position) {
					return (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
				}
				size = 2;
			} else {
				if (count == position) {
					return high;
				}
				size = 1;
			}
			++count;
		}
		return undefined;
	};
	Object.defineProperty(String.prototype, "codePointAt", {enumerable: false});
}
/**
The String.fromCodePoint() static method returns a string created from the specified sequence of code points.
ECMAScript 2015
*/
if (String.fromCodePoint==null) {
	String.fromCodePoint = function fromCodePoint() {
		var chars = [], point, offset, i;
		var length = arguments.length;
		for (i = 0; i < length; ++i) {
			point = arguments[i];
			if (point < 0x10000) {
			chars.push(point);
			} else {
			offset = point - 0x10000;
			chars.push(0xD800 + (offset >> 10));
			chars.push(0xDC00 + (offset & 0x3FF));
			}
		}
		return String.fromCharCode.apply(null, chars);
	};
	Object.defineProperty(String, "fromCodePoint", {enumerable: false});
}
/**
The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
ECMAScript 2015
*/
if (String.prototype.includes==null){
	String.prototype.includes=function(searchString, position){
		if (position==null)position=0;
		if (this.indexOf(searchString,position)>-1){
			return true;
		}else{
			return false;
		}
	}
	Object.defineProperty(String.prototype, "includes", {enumerable: false});
}
/**
The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
ECMAScript 2015
*/
if (String.prototype.repeat==null){
	String.prototype.repeat=function(count){
		var ret="";
		for(var i=0;i<count;i++){
			ret+=this;
		}
		return ret;
	}
	Object.defineProperty(String.prototype, "repeat", {enumerable: false});
}
/**
The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. 
ECMAScript 2019
*/
if (String.prototype.trimStart==null){
	String.prototype.trimStart=function(){
		return this.replace(new RegExp("^" + 
			/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source,
			"g"), "");
	}
	Object.defineProperty(String.prototype, "trimStart", {enumerable: false});
}
/**
The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.
ECMAScript 2019
*/
if (String.prototype.trimEnd==null){
	String.prototype.trimEnd=function(){
		return this.replace(new RegExp(
			/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source 
			+ "$", "g"), "");
	}
	Object.defineProperty(String.prototype, "trimEnd", {enumerable: false});
}
/**
The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.
ECMAScript 2017
*/
if (String.prototype.padStart==null){
	String.prototype.padStart=function(targetLength, padString){
		if (padString==null)padString=" ";
		return padString.repeat(targetLength-this.length)+this;
	}
	Object.defineProperty(String.prototype, "padStart", {enumerable: false});
}
/**
The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.
ECMAScript 2017
*/
if (String.prototype.padEnd==null){
	String.prototype.padEnd=function(targetLength, padString){
		if (padString==null)padString=" ";
		return this+padString.repeat(targetLength-this.length);
	}
	Object.defineProperty(String.prototype, "padEnd", {enumerable: false});
}

///////////////////////////////////////////////////////////////////////////////
/**
The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
ECMAScript 2015
*/
if (Array.of==null){
	Array.of=function(element0/*, ..., elementN*/){
		var ret=[];
		for(var i=0;i<arguments.length;i++){
			ret.push(arguments[i]);
		}
		return ret;
	}
	Object.defineProperty(Array, "of", {enumerable: false});
}
/**
The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.
ECMAScript 2015
*/
if (Array.prototype.copyWithin==null){
	Array.prototype.copyWithin=function(target, start, end){
		var array = this;
		var length = array.length;
		var to;
		if (target < 0) {
			to = Math.max(length + target, 0);
		} else {
			to = Math.min(target, length);
		}
		var from;
		if (start < 0) {
			from = Math.max(length + start, 0);
		} else {
			from = Math.min(start, length);
		}
		var fnl;
		if (end < 0) {
			fnl = Math.max(length + end, 0);
		} else {
			fnl = Math.min(end, length);
		}

		var count = Math.min(fnl - from, length - to);
		var direction = 1;
		if (from < to && to < (from + count)) {
			direction = -1;
		from = from + count - 1;
			to = to + count - 1;
		}

		while (count > 0) {
			if (from in array) {
				array[to] = array[from];
			} else {
				delete array[to];
			}
			from = from + direction;
			to = to + direction;
			count--;
		}

		return array;
	}
	Object.defineProperty(Array.prototype, "copyWithin", {enumerable: false});
}
/**
The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
ECMAScript 2016
*/
if (Array.prototype.includes==null){
	Array.prototype.includes=function(searchElement, fromIndex){
		if (fromIndex==null)fromIndex=0;
		if (this.indexOf(searchElement)>-1){
			return true;
		}else{
			return false;
		}
	}
	Object.defineProperty(Array.prototype, "includes", {enumerable: false});
}
/**
The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. 
ECMAScript 2019
*/
if (Array.prototype.flatMap==null){
	Array.prototype.flatMap=function(lambda){
		return [].concat.apply([],this.map(lambda));
	}
	Object.defineProperty(Array.prototype, "flatMap", {enumerable: false});
}
///////////////////////////////////////////////////////////////////////////////
/**
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
ECMAScript 2015
 */
if (Object.assign==null){
	Object.assign=function(dest, src/*, …srcn*/) {
		for (var i=1; i<arguments.length; i++) {
			var src = arguments[i];
			for(var key in src){
				dest[key] = src[key];
			}
		}
		return dest;
	}
	Object.defineProperty(Object, "assign", {enumerable: false});
}
/**
The Object.is() static method determines whether two values are the same value.
ECMAScript 2015
*/
if (Object.is==null){
	Object.is=function(x,y) {
		if (x === y) {
			return x !== 0 || 1 / x === 1 / y;
		}
		return x !== x && y !== y;
	}
	Object.defineProperty(Object, "is", {enumerable: false});
}
/**
The Object.setPrototypeOf() static method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
ECMAScript 2015. Implemented from JDK8.
*/
/**
The Object.getPrototypeOf() static method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
ECMAScript 2015. Implemented from JDK8.
*/
/**
The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
ECMAScript 2017
*/
if (Object.values==null){
	Object.values=function(obj) {
		var ary=[];
		for (var key in obj){
			ary.push(obj[key]);
		}
		return ary;
	}
	Object.defineProperty(Object, "values", {enumerable: false});
}
/**
The Object.getOwnPropertyDescriptors() static method returns all own property descriptors of a given object.
ECMAScript 2017
*/
if (Object.getOwnPropertyDescriptors==null){
	Object.getOwnPropertyDescriptors=function(obj){
		var ret={};
		for(var key in obj){
			ret[key]=Object.getOwnPropertyDescriptor(obj,key);
		}
		return ret;
	}
	Object.defineProperty(Object, "getOwnPropertyDescriptors", {enumerable: false});
}
///////////////////////////////////////////////////////////////////////////////
/**
 * The following extensions in this block require nashorn15.4.
 */
/**  
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
ECMAScript 2015
*/
if (Array.from==null){
	try{
		eval("Array.from=function(r){var u=arguments[1],e=arguments[2],l=[];for(var n of r)null!=u?null!=e?l.push(u.call(e,n)):l.push(u(n)):l.push(n);return l},Object.defineProperty(Array,\"from\",{enumerable:!1});")
	}catch(e){java.lang.System.out.println("Nashorn15.4 is required for Array.from implementation.");}
}
/**
The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
ECMAScript 2015. Implemented from nashorn15.4.
*/
/**
The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
ECMAScript 2015. Implemented from nashorn15.4.
*/
/**
The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.
ECMAScript 2015. Implemented from nashorn15.4.
*/
/**
The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
ECMAScript 2015
*/
if (Array.prototype.flat==null){
	try{
		eval("Array.prototype.flat=function(r){var t=[];for(var e of(null==r&&(r=1),this))Array.isArray(e)&&r>0?t=t.concat(e.flat(r-1)):t.push(e);return t},Object.defineProperty(Array.prototype,\"flat\",{enumerable:!1});");
	}catch(e){java.lang.System.out.println("Nashorn15.4 is required for Array.prototype.flat implementation.");}
}
/**
The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
ECMAScript 2017
*/
if (Object.entries==null){
	try{
		eval("Object.entries=function(e){var r,t=Object.keys(e);return{[Symbol.iterator](){return this},next:()=>void 0!==(r=t.shift())?{value:[r,e[r]]}:{done:!0}}},Object.defineProperty(Object,\"entries\",{enumerable:!1});");
	}catch(e){java.lang.System.out.println("Nashorn15.4 is required for Object.entries implementation.");}
}

///////////////////////////////////////////////////////////////////////////////
/**
This module mimics the browser's timeout functionality. I added it to make Promise work.
Idears from https://github.com/nikku/nashorn-async
*/
(function(context){
	if (context.setTimeout==null){
		var timer = new java.util.Timer();
		function setTimeout(fn, millis) {
			var task = new java.util.TimerTask({
				run: function(){
					try {fn();}catch(e){e.printStackTrace();}
				}
			});
			timer.schedule(task, millis || 0);
			return task;
		}
		function clearTimeout(task) {
			if(task){task.cancel();}
		}
		function setInterval(fn, millis) {
			var task = new java.util.TimerTask({
				run: function() {
					try {fn();}catch(e){e.printStackTrace();}
				}
			});
			timer.scheduleAtFixedRate(task, millis, millis);
			return task;
		}
		function clearInterval(task) {
			if(task){task.cancel();}
		}
		context.setTimeout = setTimeout;
		context.clearTimeout = clearTimeout;
		context.setInterval = setInterval;
		context.clearInterval = clearInterval;
	}
})(this);
///////////////////////////////////////////////////////////////////////////////
/**
This module provides a simple Promise functionality implementation.
Referenced from https://stackoverflow.com/questions/23772801/basic-javascript-promise-implementation-attempt
*/
(function(context){
	if (context.Promise==null){
		function Promise(executor) {
			this.state = 'pending';
			this.value = undefined;
			// A list of "clients" that need to be notified when a state
			//   change event occurs. These event-consumers are the promises
			//   that are returned by the calls to the `then` method.
			this.consumers = [];
			try {
				executor(this.resolve.bind(this), this.reject.bind(this));
			} catch(err) { // Return a rejected promise when error occurs
				this.reject(err);
			}
		}

		// 2.1.1.1: provide only two ways to transition
		Promise.prototype.fulfill = function (value) {
			if (this.state !== 'pending') return; // 2.1.2.1, 2.1.3.1: cannot transition anymore
			this.state = 'fulfilled'; // 2.1.1.1: can transition
			this.value = value; // 2.1.2.2: must have a value
			this.broadcast();
		}
		//Returns a promise that is rejected with the given reason.
		Promise.prototype.reject = function (reason) {
			if (this.state !== 'pending') return; // 2.1.2.1, 2.1.3.1: cannot transition anymore
			this.state = 'rejected'; // 2.1.1.1: can transition
			this.value = reason; // 2.1.3.2: must have a reason
			this.broadcast();
		}

		// A promise then method accepts two arguments:
		Promise.prototype.then = function(onFulfilled, onRejected) {
			var consumer = new Promise(function () {});
			// 2.2.1.1 ignore onFulfilled if not a function
			consumer.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
			// 2.2.1.2 ignore onRejected if not a function
			consumer.onRejected = typeof onRejected === 'function' ? onRejected : null;
			// 2.2.6.1, 2.2.6.2: .then() may be called multiple times on the same promise
			this.consumers.push(consumer);
			// It might be that the promise was already resolved... 
			this.broadcast();
			// 2.2.7: .then() must return a promise
			return consumer;
		};
		//catch metod is equival to calling Promise.prototype.then(undefined, onRejected)
		Promise.prototype["catch"] = function(onRejected){
			return this.then(null, onRejected);
		}
		/////////////////////////////////////
		Promise.prototype.broadcast = function() {
			var promise = this;
			// 2.2.2.1, 2.2.2.2, 2.2.3.1, 2.2.3.2 called after promise is resolved
			if (this.state === 'pending') return;
			// 2.2.6.1, 2.2.6.2 all respective callbacks must execute
			var callbackName = this.state == 'fulfilled' ? 'onFulfilled' : 'onRejected';
			var resolver = this.state == 'fulfilled' ? 'resolve' : 'reject';
			// 2.2.4 onFulfilled/onRejected must be called asynchronously
			setTimeout(function() {
				// 2.2.6.1, 2.2.6.2 traverse in order, 2.2.2.3, 2.2.3.3 called only once
				//splice is wrong in nashorn8,so I must change the code here.
				/*promise.consumers.splice(0).forEach(function(consumer) {*/

				while(promise.consumers.length>0){
					var consumer=promise.consumers.shift();
					try {
						var callback = consumer[callbackName];
						// 2.2.1.1, 2.2.1.2 ignore callback if not a function, else
						// 2.2.5 call callback as plain function without context
						if (callback) {
							// 2.2.7.1. execute the Promise Resolution Procedure:
							consumer.resolve(callback(promise.value)); 
						} else {
							// 2.2.7.3 resolve in same way as current promise
							consumer[resolver](promise.value);
						}
					} catch (e) {
						// 2.2.7.2
						consumer.reject(e);
					};
				}
			});
		};
		// The Promise Resolution Procedure: will treat values that are thenables/promises
		// and will eventually call either fulfill or reject/throw.
		Promise.prototype.resolve = function(x) {
			var wasCalled, then;
			// 2.3.1
			if (this === x) {
				throw new TypeError('Circular reference: promise value is promise itself');
			}
			// 2.3.2
			if (x instanceof Promise) {
				// 2.3.2.1, 2.3.2.2, 2.3.2.3
				x.then(this.resolve.bind(this), this.reject.bind(this));
			} else if (x === Object(x)) { // 2.3.3
				try {
					// 2.3.3.1
					then = x.then;
					if (typeof then === 'function') {
						// 2.3.3.3
						then.call(x, function resolve(y) {
							// 2.3.3.3.3 don't allow multiple calls
							if (wasCalled) return;
							wasCalled = true;
							// 2.3.3.3.1 recurse
							this.resolve(y);
						}.bind(this), function reject(reasonY) {
							// 2.3.3.3.3 don't allow multiple calls
							if (wasCalled) return;
							wasCalled = true;
							// 2.3.3.3.2
							this.reject(reasonY);
						}.bind(this));
					} else {
						// 2.3.3.4
						this.fulfill(x);
					}
				} catch(e) {
					// 2.3.3.3.4.1 ignore if call was made
					if (wasCalled) return;
					// 2.3.3.2 or 2.3.3.3.4.2
					this.reject(e);
				}
			} else {
				// 2.3.4
				this.fulfill(x);
			}
		}
		context.Promise=Promise;
	}
})(this);
///////////////////////////////////////////////////////////////////////////////
/**
Now it is time to deal with async and await.
*/
(function(context){
	if (context.await==null){
		/**
		The async() method changes fnc to a Promise instanse and returns it.
		If fnc has been a Promise instanse,it will be returned without changing.
		*/
		function async(fnc){
			if (fnc instanceof Promise) return fnc;
			return new Promise(function(resolve,reject){
				try{
					resolve(fnc());
				}catch(e){
					reject(e);
				}
			});
		}
		/**
		The await() method calls prms.then() method and waits till fulfill is executed,
		then returns the value of fulfill.
		*/
		function await(prms){
			if (! prms instanceof Promise) return prms();
			var ret;
			var finished=false;
			prms.then(function(v){
				ret=v;
				finished=true;
			}).catch(function(v){
				ret=v;
				finished=true;
			});
			
			var threadWaiter = 
				new java.lang.Thread(
					new java.lang.Runnable({
						run:function(){
							while(true){
								if (finished){
									return;
								}else{
									java.lang.Thread.sleep(50);
								}
							}
						}
					}
				)
			);
			threadWaiter.start();
			threadWaiter.join();

			if (prms.state == 'fulfilled'){
				return ret;
			}else{
				throw ret;
			}
		}
		context.async=async;
		context.await=await;
	}
})(this);