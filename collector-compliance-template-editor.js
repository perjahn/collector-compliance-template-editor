(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		value
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		value
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$Main$ChangedUrl = function (a) {
	return {$: 'ChangedUrl', a: a};
};
var author$project$Main$ClickedLink = function (a) {
	return {$: 'ClickedLink', a: a};
};
var author$project$QuestionCategory$Model$AML = {$: 'AML'};
var author$project$QuestionCategory$Model$PEP = {$: 'PEP'};
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var author$project$QuestionCategory$Model$makeQuestionCategory = function (categoryType) {
	return {active: false, categoryType: categoryType, description: '', extendedDescription: '', extendedTitle: '', questions: _List_Nil, title: ''};
};
var author$project$Routing$CategoryRoute = function (a) {
	return {$: 'CategoryRoute', a: a};
};
var author$project$Routing$FollowUpQuestion = function (a) {
	return {$: 'FollowUpQuestion', a: a};
};
var author$project$Routing$GroupQuestion = function (a) {
	return {$: 'GroupQuestion', a: a};
};
var author$project$Routing$OptionsRoute = function (a) {
	return {$: 'OptionsRoute', a: a};
};
var author$project$Routing$QuestionRoute = function (a) {
	return {$: 'QuestionRoute', a: a};
};
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var author$project$Routing$parseLocation = function (location) {
	var parse = function (xss) {
		_n0$5:
		while (true) {
			if (xss.b && xss.b.b) {
				switch (xss.a) {
					case 'categories':
						var _n1 = xss.b;
						var categoryName = _n1.a;
						var xs = _n1.b;
						return A2(
							elm$core$List$cons,
							author$project$Routing$CategoryRoute(categoryName),
							parse(xs));
					case 'questions':
						var _n2 = xss.b;
						var questionId = _n2.a;
						var xs = _n2.b;
						return A2(
							elm$core$List$cons,
							author$project$Routing$QuestionRoute(questionId),
							parse(xs));
					case 'subquestions':
						var _n3 = xss.b;
						var questionId = _n3.a;
						var xs = _n3.b;
						return A2(
							elm$core$List$cons,
							author$project$Routing$GroupQuestion(questionId),
							parse(xs));
					case 'options':
						var _n4 = xss.b;
						var optionsId = _n4.a;
						var xs = _n4.b;
						return A2(
							elm$core$List$cons,
							author$project$Routing$OptionsRoute(optionsId),
							parse(xs));
					case 'followup-questions':
						var _n5 = xss.b;
						var questionId = _n5.a;
						var xs = _n5.b;
						return A2(
							elm$core$List$cons,
							author$project$Routing$FollowUpQuestion(questionId),
							parse(xs));
					default:
						break _n0$5;
				}
			} else {
				break _n0$5;
			}
		}
		return _List_Nil;
	};
	return parse(
		A2(
			elm$core$String$split,
			'/',
			A2(elm$core$Maybe$withDefault, '', location.fragment)));
};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var author$project$Main$init = F3(
	function (flags, location, key) {
		var initialModel = {
			key: key,
			menuState: {products: _List_Nil, selectedProduct: ''},
			questionTemplate: {
				categories: _List_fromArray(
					[
						author$project$QuestionCategory$Model$makeQuestionCategory(author$project$QuestionCategory$Model$PEP),
						author$project$QuestionCategory$Model$makeQuestionCategory(author$project$QuestionCategory$Model$AML)
					]),
				name: ''
			},
			route: author$project$Routing$parseLocation(location),
			uuidSeed: elm$random$Random$initialSeed(0)
		};
		return _Utils_Tuple2(initialModel, elm$core$Platform$Cmd$none);
	});
var elm$json$Json$Decode$map2 = _Json_map2;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = elm$json$Json$Decode$map2(elm$core$Basics$apR);
var elm$json$Json$Decode$field = _Json_decodeField;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2(elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$json$Json$Decode$succeed = _Json_succeed;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded = A2(elm$core$Basics$composeR, elm$json$Json$Decode$succeed, NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom);
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$decodeValue = _Json_run;
var elm$json$Json$Decode$fail = _Json_fail;
var elm$json$Json$Decode$null = _Json_decodeNull;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$value = _Json_decodeValue;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						decoder,
						elm$json$Json$Decode$null(fallback)
					]));
		};
		var handleResult = function (input) {
			var _n0 = A2(elm$json$Json$Decode$decodeValue, pathDecoder, input);
			if (_n0.$ === 'Ok') {
				var rawValue = _n0.a;
				var _n1 = A2(
					elm$json$Json$Decode$decodeValue,
					nullOr(valDecoder),
					rawValue);
				if (_n1.$ === 'Ok') {
					var finalResult = _n1.a;
					return elm$json$Json$Decode$succeed(finalResult);
				} else {
					var finalErr = _n1.a;
					return elm$json$Json$Decode$fail(
						elm$json$Json$Decode$errorToString(finalErr));
				}
			} else {
				return elm$json$Json$Decode$succeed(fallback);
			}
		};
		return A2(elm$json$Json$Decode$andThen, handleResult, elm$json$Json$Decode$value);
	});
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder,
				A2(elm$json$Json$Decode$field, key, elm$json$Json$Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var elm$core$Basics$identity = function (x) {
	return x;
};
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$resolve = elm$json$Json$Decode$andThen(elm$core$Basics$identity);
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$map = _Json_map1;
var author$project$JsonModel$Deserialization$decodeSelectType = A2(
	elm$json$Json$Decode$map,
	function (i) {
		switch (i) {
			case 0:
				return false;
			case 1:
				return true;
			default:
				return false;
		}
	},
	elm$json$Json$Decode$int);
var author$project$Question$Model$CountryQuestion = function (a) {
	return {$: 'CountryQuestion', a: a};
};
var author$project$Question$Model$FreeTextQuestion = function (a) {
	return {$: 'FreeTextQuestion', a: a};
};
var author$project$Question$Model$Question = function (a) {
	return {$: 'Question', a: a};
};
var author$project$Question$Model$QuestionGroup = function (a) {
	return {$: 'QuestionGroup', a: a};
};
var author$project$Question$Model$QuestionOption = F5(
	function (id, text, isComplianceCheckNeeded, followUpQuestions, active) {
		return {active: active, followUpQuestions: followUpQuestions, id: id, isComplianceCheckNeeded: isComplianceCheckNeeded, text: text};
	});
var author$project$Question$Model$SelectQuestion = function (a) {
	return {$: 'SelectQuestion', a: a};
};
var author$project$Question$Model$makeFreeTextQuestion = author$project$Question$Model$FreeTextQuestion(
	{isMandatory: false, maxLength: ''});
var author$project$Question$Model$makeQuestionGroup = author$project$Question$Model$QuestionGroup(
	{maxRepeat: '1', questions: _List_Nil});
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var elm$json$Json$Decode$lazy = function (thunk) {
	return A2(
		elm$json$Json$Decode$andThen,
		thunk,
		elm$json$Json$Decode$succeed(_Utils_Tuple0));
};
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$json$Json$Decode$string = _Json_decodeString;
function author$project$JsonModel$Deserialization$cyclic$decodeOption() {
	return A2(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded,
		false,
		A4(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
			'followUpQuestions',
			elm$json$Json$Decode$lazy(
				function (_n9) {
					return author$project$JsonModel$Deserialization$cyclic$decodeQuestions();
				}),
			_List_Nil,
			A4(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'isComplianceCheckNeeded',
				elm$json$Json$Decode$bool,
				false,
				A3(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'text',
					elm$json$Json$Decode$string,
					A4(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'id',
						elm$json$Json$Decode$string,
						'',
						elm$json$Json$Decode$succeed(author$project$Question$Model$QuestionOption))))));
}
function author$project$JsonModel$Deserialization$cyclic$decodeOptions() {
	return elm$json$Json$Decode$list(
		elm$json$Json$Decode$lazy(
			function (_n8) {
				return author$project$JsonModel$Deserialization$cyclic$decodeOption();
			}));
}
function author$project$JsonModel$Deserialization$cyclic$decodeQuestion() {
	var decodeQuestionRecord = function () {
		var toDecoder = function (title) {
			return function (extendedTitle) {
				return function (description) {
					return function (extendedDescription) {
						return function (questionTypeValue) {
							return function (active) {
								return function (id) {
									return function (collapsed) {
										return function (maybeMaxLength) {
											return function (options) {
												return function (allowMultiple) {
													return function (questions) {
														return function (parameters) {
															return function (maybeMaxRepeat) {
																return function (validationMessage) {
																	return function (isMandatory) {
																		var questionType = function () {
																			switch (questionTypeValue) {
																				case 1:
																					return elm$core$Maybe$Just(
																						function () {
																							if (maybeMaxLength.$ === 'Just') {
																								var maxLength = maybeMaxLength.a;
																								return author$project$Question$Model$FreeTextQuestion(
																									{
																										isMandatory: isMandatory,
																										maxLength: elm$core$String$fromInt(maxLength)
																									});
																							} else {
																								return author$project$Question$Model$makeFreeTextQuestion;
																							}
																						}());
																				case 0:
																					return elm$core$Maybe$Just(
																						author$project$Question$Model$SelectQuestion(
																							{allowMultiple: allowMultiple, options: options}));
																				case 2:
																					return elm$core$Maybe$Just(
																						author$project$Question$Model$CountryQuestion(
																							{allowMultiple: allowMultiple, validationMessage: validationMessage}));
																				case 3:
																					return elm$core$Maybe$Just(
																						function () {
																							if (maybeMaxRepeat.$ === 'Just') {
																								var maxRepeat = maybeMaxRepeat.a;
																								return author$project$Question$Model$QuestionGroup(
																									{
																										maxRepeat: elm$core$String$fromInt(maxRepeat),
																										questions: questions
																									});
																							} else {
																								return author$project$Question$Model$makeQuestionGroup;
																							}
																						}());
																				default:
																					return elm$core$Maybe$Nothing;
																			}
																		}();
																		if (questionType.$ === 'Just') {
																			var qt = questionType.a;
																			return elm$json$Json$Decode$succeed(
																				{active: false, collapsed: false, description: description, extendedDescription: extendedDescription, extendedTitle: extendedTitle, id: id, parameters: parameters, questionType: qt, title: title});
																		} else {
																			return elm$json$Json$Decode$fail('Failed to parse question fields');
																		}
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
		return NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$resolve(
			A4(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'isMandatory',
				elm$json$Json$Decode$bool,
				false,
				A4(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
					'validationMessage',
					elm$json$Json$Decode$string,
					'',
					A4(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'maxRepeat',
						A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, elm$json$Json$Decode$int),
						elm$core$Maybe$Nothing,
						A4(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'parameters',
							elm$json$Json$Decode$keyValuePairs(elm$json$Json$Decode$string),
							_List_Nil,
							A4(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
								'questions',
								elm$json$Json$Decode$lazy(
									function (_n3) {
										return author$project$JsonModel$Deserialization$cyclic$decodeQuestions();
									}),
								_List_Nil,
								A4(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
									'selectType',
									author$project$JsonModel$Deserialization$decodeSelectType,
									false,
									A4(
										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
										'options',
										elm$json$Json$Decode$lazy(
											function (_n2) {
												return author$project$JsonModel$Deserialization$cyclic$decodeOptions();
											}),
										_List_Nil,
										A4(
											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
											'maxLength',
											A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, elm$json$Json$Decode$int),
											elm$core$Maybe$Nothing,
											A2(
												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded,
												false,
												A4(
													NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
													'id',
													elm$json$Json$Decode$string,
													'',
													A2(
														NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded,
														false,
														A3(
															NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
															'questionType',
															elm$json$Json$Decode$int,
															A4(
																NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																'extendedDescription',
																elm$json$Json$Decode$string,
																'',
																A4(
																	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																	'description',
																	elm$json$Json$Decode$string,
																	'',
																	A4(
																		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
																		'extendedTitle',
																		elm$json$Json$Decode$string,
																		'',
																		A3(
																			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
																			'title',
																			elm$json$Json$Decode$string,
																			elm$json$Json$Decode$succeed(toDecoder))))))))))))))))));
	}();
	return A2(
		elm$json$Json$Decode$map,
		author$project$Question$Model$Question,
		elm$json$Json$Decode$lazy(
			function (_n1) {
				return decodeQuestionRecord;
			}));
}
function author$project$JsonModel$Deserialization$cyclic$decodeQuestions() {
	return elm$json$Json$Decode$list(
		elm$json$Json$Decode$lazy(
			function (_n0) {
				return author$project$JsonModel$Deserialization$cyclic$decodeQuestion();
			}));
}
try {
	var author$project$JsonModel$Deserialization$decodeOption = author$project$JsonModel$Deserialization$cyclic$decodeOption();
	author$project$JsonModel$Deserialization$cyclic$decodeOption = function () {
		return author$project$JsonModel$Deserialization$decodeOption;
	};
	var author$project$JsonModel$Deserialization$decodeOptions = author$project$JsonModel$Deserialization$cyclic$decodeOptions();
	author$project$JsonModel$Deserialization$cyclic$decodeOptions = function () {
		return author$project$JsonModel$Deserialization$decodeOptions;
	};
	var author$project$JsonModel$Deserialization$decodeQuestion = author$project$JsonModel$Deserialization$cyclic$decodeQuestion();
	author$project$JsonModel$Deserialization$cyclic$decodeQuestion = function () {
		return author$project$JsonModel$Deserialization$decodeQuestion;
	};
	var author$project$JsonModel$Deserialization$decodeQuestions = author$project$JsonModel$Deserialization$cyclic$decodeQuestions();
	author$project$JsonModel$Deserialization$cyclic$decodeQuestions = function () {
		return author$project$JsonModel$Deserialization$decodeQuestions;
	};
} catch ($) {
throw 'Some top-level definitions from `JsonModel.Deserialization` are causing infinite recursion:\n\n  ┌─────┐\n  │    decodeOption\n  │     ↓\n  │    decodeOptions\n  │     ↓\n  │    decodeQuestion\n  │     ↓\n  │    decodeQuestions\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var author$project$JsonModel$Deserialization$decodeQuestionCategory = function () {
	var makeQuestionCategory = F7(
		function (title, extendedTitle, description, extendedDescription, categoryType, questions, active) {
			var makeResult = function (ct) {
				return elm$json$Json$Decode$succeed(
					{active: active, categoryType: ct, description: description, extendedDescription: extendedDescription, extendedTitle: extendedTitle, questions: questions, title: title});
			};
			switch (categoryType) {
				case 1:
					return makeResult(author$project$QuestionCategory$Model$AML);
				case 0:
					return makeResult(author$project$QuestionCategory$Model$PEP);
				default:
					return elm$json$Json$Decode$fail('Unknown category type.');
			}
		});
	return NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$resolve(
		A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded,
			false,
			A4(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
				'questions',
				author$project$JsonModel$Deserialization$decodeQuestions,
				_List_Nil,
				A3(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'categoryType',
					elm$json$Json$Decode$int,
					A4(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
						'extendedDescription',
						elm$json$Json$Decode$string,
						'',
						A4(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
							'description',
							elm$json$Json$Decode$string,
							'',
							A4(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
								'extendedTitle',
								elm$json$Json$Decode$string,
								'',
								A4(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional,
									'title',
									elm$json$Json$Decode$string,
									'',
									elm$json$Json$Decode$succeed(makeQuestionCategory)))))))));
}();
var author$project$JsonModel$Deserialization$decodeQuestionCategories = elm$json$Json$Decode$list(author$project$JsonModel$Deserialization$decodeQuestionCategory);
var author$project$QuestionTemplate$Model$QuestionTemplate = F2(
	function (name, categories) {
		return {categories: categories, name: name};
	});
var author$project$JsonModel$Deserialization$decodeQuestionTemplate = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'categories',
	author$project$JsonModel$Deserialization$decodeQuestionCategories,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'name',
		elm$json$Json$Decode$string,
		elm$json$Json$Decode$succeed(author$project$QuestionTemplate$Model$QuestionTemplate)));
var danyx23$elm_uuid$Uuid$toString = function (_n0) {
	var internalString = _n0.a;
	return internalString;
};
var danyx23$elm_uuid$Uuid$Uuid = function (a) {
	return {$: 'Uuid', a: a};
};
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Bitwise$and = _Bitwise_and;
var elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$int = F2(
	function (a, b) {
		return elm$random$Random$Generator(
			function (seed0) {
				var _n0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _n0.a;
				var hi = _n0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & elm$random$Random$peel(seed0)) >>> 0) + lo,
						elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = elm$random$Random$peel(seed);
							var seedN = elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var danyx23$elm_uuid$Uuid$Barebones$hexGenerator = A2(elm$random$Random$int, 0, 15);
var elm$core$Bitwise$or = _Bitwise_or;
var danyx23$elm_uuid$Uuid$Barebones$limitDigitRange8ToB = function (digit) {
	return (digit & 3) | 8;
};
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$core$Char$fromCode = _Char_fromCode;
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var danyx23$elm_uuid$Uuid$Barebones$hexDigits = function () {
	var mapChars = F2(
		function (offset, digit) {
			return elm$core$Char$fromCode(digit + offset);
		});
	return elm$core$Array$fromList(
		_Utils_ap(
			A2(
				elm$core$List$map,
				mapChars(48),
				A2(elm$core$List$range, 0, 9)),
			A2(
				elm$core$List$map,
				mapChars(97),
				A2(elm$core$List$range, 0, 5))));
}();
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_n0.$ === 'SubTree') {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var danyx23$elm_uuid$Uuid$Barebones$mapToHex = function (index) {
	var maybeResult = A2(elm$core$Array$get, index, danyx23$elm_uuid$Uuid$Barebones$hexDigits);
	if (maybeResult.$ === 'Nothing') {
		return _Utils_chr('x');
	} else {
		var result = maybeResult.a;
		return result;
	}
};
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var elm$core$String$fromList = _String_fromList;
var danyx23$elm_uuid$Uuid$Barebones$toUuidString = function (thirtyOneHexDigits) {
	return elm$core$String$concat(
		_List_fromArray(
			[
				elm$core$String$fromList(
				A2(
					elm$core$List$map,
					danyx23$elm_uuid$Uuid$Barebones$mapToHex,
					A2(elm$core$List$take, 8, thirtyOneHexDigits))),
				'-',
				elm$core$String$fromList(
				A2(
					elm$core$List$map,
					danyx23$elm_uuid$Uuid$Barebones$mapToHex,
					A2(
						elm$core$List$take,
						4,
						A2(elm$core$List$drop, 8, thirtyOneHexDigits)))),
				'-',
				'4',
				elm$core$String$fromList(
				A2(
					elm$core$List$map,
					danyx23$elm_uuid$Uuid$Barebones$mapToHex,
					A2(
						elm$core$List$take,
						3,
						A2(elm$core$List$drop, 12, thirtyOneHexDigits)))),
				'-',
				elm$core$String$fromList(
				A2(
					elm$core$List$map,
					danyx23$elm_uuid$Uuid$Barebones$mapToHex,
					A2(
						elm$core$List$map,
						danyx23$elm_uuid$Uuid$Barebones$limitDigitRange8ToB,
						A2(
							elm$core$List$take,
							1,
							A2(elm$core$List$drop, 15, thirtyOneHexDigits))))),
				elm$core$String$fromList(
				A2(
					elm$core$List$map,
					danyx23$elm_uuid$Uuid$Barebones$mapToHex,
					A2(
						elm$core$List$take,
						3,
						A2(elm$core$List$drop, 16, thirtyOneHexDigits)))),
				'-',
				elm$core$String$fromList(
				A2(
					elm$core$List$map,
					danyx23$elm_uuid$Uuid$Barebones$mapToHex,
					A2(
						elm$core$List$take,
						12,
						A2(elm$core$List$drop, 19, thirtyOneHexDigits))))
			]));
};
var elm$random$Random$listHelp = F4(
	function (revList, n, gen, seed) {
		listHelp:
		while (true) {
			if (n < 1) {
				return _Utils_Tuple2(revList, seed);
			} else {
				var _n0 = gen(seed);
				var value = _n0.a;
				var newSeed = _n0.b;
				var $temp$revList = A2(elm$core$List$cons, value, revList),
					$temp$n = n - 1,
					$temp$gen = gen,
					$temp$seed = newSeed;
				revList = $temp$revList;
				n = $temp$n;
				gen = $temp$gen;
				seed = $temp$seed;
				continue listHelp;
			}
		}
	});
var elm$random$Random$list = F2(
	function (n, _n0) {
		var gen = _n0.a;
		return elm$random$Random$Generator(
			function (seed) {
				return A4(elm$random$Random$listHelp, _List_Nil, n, gen, seed);
			});
	});
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n1 = genA(seed0);
				var a = _n1.a;
				var seed1 = _n1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var danyx23$elm_uuid$Uuid$Barebones$uuidStringGenerator = A2(
	elm$random$Random$map,
	danyx23$elm_uuid$Uuid$Barebones$toUuidString,
	A2(elm$random$Random$list, 31, danyx23$elm_uuid$Uuid$Barebones$hexGenerator));
var danyx23$elm_uuid$Uuid$uuidGenerator = A2(elm$random$Random$map, danyx23$elm_uuid$Uuid$Uuid, danyx23$elm_uuid$Uuid$Barebones$uuidStringGenerator);
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0.a;
		return generator(seed);
	});
var folkertdev$elm_state$State$State = function (a) {
	return {$: 'State', a: a};
};
var folkertdev$elm_state$State$andThen = F2(
	function (f, _n0) {
		var h = _n0.a;
		return folkertdev$elm_state$State$State(
			function (s) {
				var _n1 = h(s);
				var a = _n1.a;
				var newState = _n1.b;
				var _n2 = f(a);
				var g = _n2.a;
				return g(newState);
			});
	});
var folkertdev$elm_state$State$get = folkertdev$elm_state$State$State(
	function (s) {
		return _Utils_Tuple2(s, s);
	});
var folkertdev$elm_state$State$map = F2(
	function (f, _n0) {
		var step = _n0.a;
		return folkertdev$elm_state$State$State(
			function (currentState) {
				var _n1 = step(currentState);
				var value = _n1.a;
				var newState = _n1.b;
				return _Utils_Tuple2(
					f(value),
					newState);
			});
	});
var folkertdev$elm_state$State$modify = function (f) {
	return folkertdev$elm_state$State$State(
		function (s) {
			return _Utils_Tuple2(
				_Utils_Tuple0,
				f(s));
		});
};
var author$project$JsonModel$IdGenerator$newId = function () {
	var generate = function (rnd) {
		var _n1 = A2(elm$random$Random$step, danyx23$elm_uuid$Uuid$uuidGenerator, rnd.seed);
		var newUuid = _n1.a;
		var newSeed = _n1.b;
		return {
			id: danyx23$elm_uuid$Uuid$toString(newUuid),
			seed: newSeed
		};
	};
	return A2(
		folkertdev$elm_state$State$map,
		function ($) {
			return $.id;
		},
		A2(
			folkertdev$elm_state$State$andThen,
			function (_n0) {
				return folkertdev$elm_state$State$get;
			},
			folkertdev$elm_state$State$modify(generate)));
}();
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var author$project$JsonModel$IdGenerator$pickId = F2(
	function (generated, existing) {
		return elm$core$String$isEmpty(existing) ? generated : existing;
	});
var folkertdev$elm_state$State$state = function (value) {
	return folkertdev$elm_state$State$State(
		function (s) {
			return _Utils_Tuple2(value, s);
		});
};
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var folkertdev$elm_state$State$Done = function (a) {
	return {$: 'Done', a: a};
};
var folkertdev$elm_state$State$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var folkertdev$elm_state$State$tailRec = function (f) {
	var go = function (step) {
		go:
		while (true) {
			if (step.$ === 'Loop') {
				var a = step.a;
				var $temp$step = f(a);
				step = $temp$step;
				continue go;
			} else {
				var b = step.a;
				return b;
			}
		}
	};
	return A2(elm$core$Basics$composeL, go, f);
};
var folkertdev$elm_state$State$tailRecM = F2(
	function (f, a) {
		var helper = function (_n3) {
			var m = _n3.a;
			var s1 = _n3.b;
			if (m.$ === 'Loop') {
				var x = m.a;
				return folkertdev$elm_state$State$Loop(
					_Utils_Tuple2(x, s1));
			} else {
				var y = m.a;
				return folkertdev$elm_state$State$Done(
					_Utils_Tuple2(y, s1));
			}
		};
		var step = function (_n1) {
			var value = _n1.a;
			var s = _n1.b;
			var _n0 = f(value);
			var st = _n0.a;
			return helper(
				st(s));
		};
		return folkertdev$elm_state$State$State(
			function (s) {
				return A2(
					folkertdev$elm_state$State$tailRec,
					step,
					_Utils_Tuple2(a, s));
			});
	});
var folkertdev$elm_state$State$tailRecM2 = F3(
	function (f, a, b) {
		return A2(
			folkertdev$elm_state$State$tailRecM,
			function (_n0) {
				var x = _n0.a;
				var y = _n0.b;
				return A2(f, x, y);
			},
			_Utils_Tuple2(a, b));
	});
var folkertdev$elm_state$State$foldlM = function (f) {
	var step = F2(
		function (accum, elements) {
			if (!elements.b) {
				return folkertdev$elm_state$State$state(
					folkertdev$elm_state$State$Done(accum));
			} else {
				var x = elements.a;
				var xs = elements.b;
				return A2(
					folkertdev$elm_state$State$map,
					function (a_) {
						return folkertdev$elm_state$State$Loop(
							_Utils_Tuple2(a_, xs));
					},
					A2(f, accum, x));
			}
		});
	return folkertdev$elm_state$State$tailRecM2(step);
};
var folkertdev$elm_state$State$map2 = F3(
	function (f, _n0, _n1) {
		var step1 = _n0.a;
		var step2 = _n1.a;
		return folkertdev$elm_state$State$State(
			function (currentState) {
				var _n2 = step1(currentState);
				var value1 = _n2.a;
				var newState = _n2.b;
				var _n3 = step2(newState);
				var value2 = _n3.a;
				var newerState = _n3.b;
				return _Utils_Tuple2(
					A2(f, value1, value2),
					newerState);
			});
	});
var folkertdev$elm_state$State$traverse = function (f) {
	return A2(
		elm$core$Basics$composeL,
		folkertdev$elm_state$State$map(elm$core$List$reverse),
		A2(
			folkertdev$elm_state$State$foldlM,
			F2(
				function (accum, elem) {
					return A3(
						folkertdev$elm_state$State$map2,
						elm$core$List$cons,
						f(elem),
						folkertdev$elm_state$State$state(accum));
				}),
			_List_Nil));
};
var author$project$JsonModel$IdGenerator$generateIdsForOption = function (option) {
	return A2(
		folkertdev$elm_state$State$andThen,
		function (id) {
			return A2(
				folkertdev$elm_state$State$andThen,
				function (followUpQuestions) {
					return folkertdev$elm_state$State$state(
						_Utils_update(
							option,
							{
								followUpQuestions: followUpQuestions,
								id: A2(author$project$JsonModel$IdGenerator$pickId, id, option.id)
							}));
				},
				author$project$JsonModel$IdGenerator$generateIdsForQuestions(option.followUpQuestions));
		},
		author$project$JsonModel$IdGenerator$newId);
};
var author$project$JsonModel$IdGenerator$generateIdsForOptions = function (options) {
	return A2(folkertdev$elm_state$State$traverse, author$project$JsonModel$IdGenerator$generateIdsForOption, options);
};
var author$project$JsonModel$IdGenerator$generateIdsForQuestion = function (_n1) {
	var q = _n1.a;
	var makeQuestion = function (id) {
		return A2(
			folkertdev$elm_state$State$andThen,
			function (qt) {
				return folkertdev$elm_state$State$state(
					author$project$Question$Model$Question(
						_Utils_update(
							q,
							{
								id: A2(author$project$JsonModel$IdGenerator$pickId, id, q.id),
								questionType: qt
							})));
			},
			author$project$JsonModel$IdGenerator$generateIdsForQuestionType(q.questionType));
	};
	return A2(folkertdev$elm_state$State$andThen, makeQuestion, author$project$JsonModel$IdGenerator$newId);
};
var author$project$JsonModel$IdGenerator$generateIdsForQuestionType = function (questionType) {
	switch (questionType.$) {
		case 'QuestionGroup':
			var qg = questionType.a;
			return A2(
				folkertdev$elm_state$State$andThen,
				function (questions) {
					return folkertdev$elm_state$State$state(
						author$project$Question$Model$QuestionGroup(
							_Utils_update(
								qg,
								{questions: questions})));
				},
				author$project$JsonModel$IdGenerator$generateIdsForQuestions(qg.questions));
		case 'SelectQuestion':
			var sq = questionType.a;
			return A2(
				folkertdev$elm_state$State$andThen,
				function (options) {
					return folkertdev$elm_state$State$state(
						author$project$Question$Model$SelectQuestion(
							_Utils_update(
								sq,
								{options: options})));
				},
				author$project$JsonModel$IdGenerator$generateIdsForOptions(sq.options));
		default:
			return folkertdev$elm_state$State$state(questionType);
	}
};
var author$project$JsonModel$IdGenerator$generateIdsForQuestions = function (questions) {
	return A2(folkertdev$elm_state$State$traverse, author$project$JsonModel$IdGenerator$generateIdsForQuestion, questions);
};
var author$project$JsonModel$IdGenerator$generateIdsForQuestionCategory = function (questionCategory) {
	return A2(
		folkertdev$elm_state$State$andThen,
		function (questions) {
			return folkertdev$elm_state$State$state(
				_Utils_update(
					questionCategory,
					{questions: questions}));
		},
		author$project$JsonModel$IdGenerator$generateIdsForQuestions(questionCategory.questions));
};
var author$project$JsonModel$IdGenerator$generateIdsForQuestionCategories = function (questionCategories) {
	return A2(folkertdev$elm_state$State$traverse, author$project$JsonModel$IdGenerator$generateIdsForQuestionCategory, questionCategories);
};
var author$project$JsonModel$IdGenerator$generateIdsForQuestionTemplate = function (questionTemplate) {
	return A2(
		folkertdev$elm_state$State$andThen,
		function (categories) {
			return folkertdev$elm_state$State$state(
				_Utils_update(
					questionTemplate,
					{categories: categories}));
		},
		author$project$JsonModel$IdGenerator$generateIdsForQuestionCategories(questionTemplate.categories));
};
var folkertdev$elm_state$State$run = F2(
	function (initialState, _n0) {
		var s = _n0.a;
		return s(initialState);
	});
var folkertdev$elm_state$State$finalValue = function (initialState) {
	return A2(
		elm$core$Basics$composeL,
		elm$core$Tuple$first,
		folkertdev$elm_state$State$run(initialState));
};
var author$project$JsonModel$IdGenerator$generateIds = function (questionTemplate) {
	return A2(
		folkertdev$elm_state$State$finalValue,
		{
			id: '',
			seed: elm$random$Random$initialSeed(0)
		},
		author$project$JsonModel$IdGenerator$generateIdsForQuestionTemplate(questionTemplate));
};
var elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var author$project$JsonModel$Deserialization$fromJson = function (s) {
	return A2(
		elm$core$Result$map,
		author$project$JsonModel$IdGenerator$generateIds,
		A2(elm$json$Json$Decode$decodeString, author$project$JsonModel$Deserialization$decodeQuestionTemplate, s));
};
var author$project$Main$NoAction = {$: 'NoAction'};
var author$project$Main$QuestionTemplateLoaded = function (a) {
	return {$: 'QuestionTemplateLoaded', a: a};
};
var author$project$Main$QuestionTemplateSaved = {$: 'QuestionTemplateSaved'};
var author$project$Main$UpdateModel = function (a) {
	return {$: 'UpdateModel', a: a};
};
var arturopala$elm_monocle$Monocle$Lens$Lens = F2(
	function (get, set) {
		return {get: get, set: set};
	});
var arturopala$elm_monocle$Monocle$Optional$Optional = F2(
	function (getOption, set) {
		return {getOption: getOption, set: set};
	});
var arturopala$elm_monocle$Monocle$Optional$fromLens = function (lens) {
	var getOption = function (a) {
		return elm$core$Maybe$Just(
			lens.get(a));
	};
	return A2(arturopala$elm_monocle$Monocle$Optional$Optional, getOption, lens.set);
};
var author$project$Main$menuStateOfModel = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (m) {
				return m.menuState;
			},
			F2(
				function (c, m) {
					return _Utils_update(
						m,
						{menuState: c});
				}))),
	path: _List_Nil
};
var author$project$Menu$ProductDefinition = F2(
	function (id, name) {
		return {id: id, name: name};
	});
var author$project$Menu$decodeProduct = A3(
	NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
	'name',
	elm$json$Json$Decode$string,
	A3(
		NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
		'id',
		elm$json$Json$Decode$string,
		elm$json$Json$Decode$succeed(author$project$Menu$ProductDefinition)));
var author$project$Menu$parseProducts = elm$json$Json$Decode$decodeString(
	elm$json$Json$Decode$list(author$project$Menu$decodeProduct));
var author$project$Menu$productsOfMenuState = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (s) {
				return s.products;
			},
			F2(
				function (t, s) {
					return _Utils_update(
						s,
						{products: t});
				}))),
	path: _List_fromArray(
		['products'])
};
var arturopala$elm_monocle$Monocle$Optional$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var arturopala$elm_monocle$Monocle$Optional$compose = F2(
	function (outer, inner) {
		var set = F2(
			function (c, a) {
				return A2(
					elm$core$Maybe$withDefault,
					a,
					A2(
						elm$core$Maybe$map,
						A2(
							elm$core$Basics$composeR,
							inner.set(c),
							A2(arturopala$elm_monocle$Monocle$Optional$flip, outer.set, a)),
						outer.getOption(a)));
			});
		var getOption = function (a) {
			var _n0 = outer.getOption(a);
			if (_n0.$ === 'Just') {
				var x = _n0.a;
				return inner.getOption(x);
			} else {
				return elm$core$Maybe$Nothing;
			}
		};
		return A2(arturopala$elm_monocle$Monocle$Optional$Optional, getOption, set);
	});
var arturopala$elm_monocle$Monocle$Compose$optionalWithOptional = F2(
	function (inner, outer) {
		return A2(arturopala$elm_monocle$Monocle$Optional$compose, outer, inner);
	});
var author$project$Optics$composeFocus = F2(
	function (f2, f1) {
		return {
			optional: A2(arturopala$elm_monocle$Monocle$Compose$optionalWithOptional, f2.optional, f1.optional),
			path: _Utils_ap(f1.path, f2.path)
		};
	});
var author$project$Ports$productsLoaded = _Platform_incomingPort('productsLoaded', elm$json$Json$Decode$string);
var author$project$Ports$questionTemplateLoaded = _Platform_incomingPort('questionTemplateLoaded', elm$json$Json$Decode$string);
var author$project$Ports$questionTemplateSaved = _Platform_incomingPort('questionTemplateSaved', elm$json$Json$Decode$string);
var elm$core$Platform$Sub$batch = _Platform_batch;
var author$project$Main$subscriptions = function (model) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				author$project$Ports$questionTemplateLoaded(
				function (data) {
					var _n0 = author$project$JsonModel$Deserialization$fromJson(data);
					if (_n0.$ === 'Ok') {
						var questionTemplate = _n0.a;
						return author$project$Main$QuestionTemplateLoaded(questionTemplate);
					} else {
						var error = _n0.a;
						return author$project$Main$NoAction;
					}
				}),
				author$project$Ports$questionTemplateSaved(
				function (_n1) {
					return author$project$Main$QuestionTemplateSaved;
				}),
				author$project$Ports$productsLoaded(
				function (data) {
					var _n2 = author$project$Menu$parseProducts(data);
					if (_n2.$ === 'Ok') {
						var products = _n2.a;
						return author$project$Main$UpdateModel(
							A2(author$project$Optics$composeFocus, author$project$Menu$productsOfMenuState, author$project$Main$menuStateOfModel).optional.set(products));
					} else {
						var error = _n2.a;
						return author$project$Main$NoAction;
					}
				})
			]));
};
var author$project$JsonModel$Serialization$addOptionalProperty = F4(
	function (name, jsonifier, value, properties) {
		var _n0 = jsonifier(value);
		if (_n0.$ === 'Just') {
			var value_ = _n0.a;
			return _Utils_ap(
				properties,
				_List_fromArray(
					[
						_Utils_Tuple2(name, value_)
					]));
		} else {
			return properties;
		}
	});
var author$project$JsonModel$Serialization$addProperty = F4(
	function (name, jsonifier, value, properties) {
		return _Utils_ap(
			properties,
			_List_fromArray(
				[
					_Utils_Tuple2(
					name,
					jsonifier(value))
				]));
	});
var author$project$JsonModel$Serialization$emptyPropertySet = _List_Nil;
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$JsonModel$Serialization$nonEmptyStringOrDefault = function (v) {
	return (v === '') ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
		elm$json$Json$Encode$string(v));
};
var author$project$JsonModel$Serialization$addProperties = F2(
	function (a, b) {
		return _Utils_ap(a, b);
	});
var author$project$JsonModel$Serialization$defaultOrValue = F3(
	function (f, dv, v) {
		return _Utils_eq(v, dv) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
			f(v));
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var author$project$JsonModel$Serialization$nonEmptyListOrDefault = F2(
	function (f, v) {
		return elm$core$List$isEmpty(v) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
			f(v));
	});
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var author$project$JsonModel$Serialization$parametersToJson = function (parameters) {
	return elm$json$Json$Encode$object(
		A2(
			elm$core$List$map,
			function (_n0) {
				var name = _n0.a;
				var value = _n0.b;
				return _Utils_Tuple2(
					name,
					elm$json$Json$Encode$string(value));
			},
			parameters));
};
var elm$core$String$toInt = _String_toInt;
var elm$json$Json$Encode$int = _Json_wrap;
var author$project$JsonModel$Serialization$stringToOptionalInt = function (s) {
	return A2(
		elm$core$Maybe$map,
		elm$json$Json$Encode$int,
		elm$core$String$toInt(s));
};
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var author$project$JsonModel$Serialization$optionToJson = function (option) {
	return elm$json$Json$Encode$object(
		A4(
			author$project$JsonModel$Serialization$addProperty,
			'followUpQuestions',
			author$project$JsonModel$Serialization$questionsToJson,
			option.followUpQuestions,
			A4(
				author$project$JsonModel$Serialization$addOptionalProperty,
				'isComplianceCheckNeeded',
				A2(author$project$JsonModel$Serialization$defaultOrValue, elm$json$Json$Encode$bool, false),
				option.isComplianceCheckNeeded,
				A4(
					author$project$JsonModel$Serialization$addProperty,
					'text',
					elm$json$Json$Encode$string,
					option.text,
					A4(author$project$JsonModel$Serialization$addProperty, 'id', elm$json$Json$Encode$string, option.id, author$project$JsonModel$Serialization$emptyPropertySet)))));
};
var author$project$JsonModel$Serialization$optionsToJson = function (options) {
	return A2(elm$json$Json$Encode$list, author$project$JsonModel$Serialization$optionToJson, options);
};
var author$project$JsonModel$Serialization$questionToJson = function (_n0) {
	var question = _n0.a;
	var toSelectType = function (b) {
		return b ? elm$json$Json$Encode$int(1) : elm$json$Json$Encode$int(0);
	};
	var questionTypeSpecifics = function () {
		var _n1 = question.questionType;
		switch (_n1.$) {
			case 'FreeTextQuestion':
				var ftq = _n1.a;
				return A4(
					author$project$JsonModel$Serialization$addOptionalProperty,
					'isMandatory',
					A2(author$project$JsonModel$Serialization$defaultOrValue, elm$json$Json$Encode$bool, false),
					ftq.isMandatory,
					A4(
						author$project$JsonModel$Serialization$addOptionalProperty,
						'maxLength',
						author$project$JsonModel$Serialization$stringToOptionalInt,
						ftq.maxLength,
						A4(author$project$JsonModel$Serialization$addProperty, 'questionType', elm$json$Json$Encode$int, 1, author$project$JsonModel$Serialization$emptyPropertySet)));
			case 'SelectQuestion':
				var sq = _n1.a;
				return A4(
					author$project$JsonModel$Serialization$addProperty,
					'options',
					author$project$JsonModel$Serialization$optionsToJson,
					sq.options,
					A4(
						author$project$JsonModel$Serialization$addProperty,
						'selectType',
						toSelectType,
						sq.allowMultiple,
						A4(author$project$JsonModel$Serialization$addProperty, 'questionType', elm$json$Json$Encode$int, 0, author$project$JsonModel$Serialization$emptyPropertySet)));
			case 'CountryQuestion':
				var cq = _n1.a;
				return A4(
					author$project$JsonModel$Serialization$addOptionalProperty,
					'validationMessage',
					author$project$JsonModel$Serialization$nonEmptyStringOrDefault,
					cq.validationMessage,
					A4(
						author$project$JsonModel$Serialization$addProperty,
						'selectType',
						toSelectType,
						cq.allowMultiple,
						A4(
							author$project$JsonModel$Serialization$addProperty,
							'countryListFor',
							elm$json$Json$Encode$int,
							0,
							A4(author$project$JsonModel$Serialization$addProperty, 'questionType', elm$json$Json$Encode$int, 2, author$project$JsonModel$Serialization$emptyPropertySet))));
			default:
				var qg = _n1.a;
				return A4(
					author$project$JsonModel$Serialization$addOptionalProperty,
					'maxRepeat',
					author$project$JsonModel$Serialization$stringToOptionalInt,
					qg.maxRepeat,
					A4(
						author$project$JsonModel$Serialization$addProperty,
						'questions',
						author$project$JsonModel$Serialization$questionsToJson,
						qg.questions,
						A4(author$project$JsonModel$Serialization$addProperty, 'questionType', elm$json$Json$Encode$int, 3, author$project$JsonModel$Serialization$emptyPropertySet)));
		}
	}();
	return elm$json$Json$Encode$object(
		A2(
			author$project$JsonModel$Serialization$addProperties,
			questionTypeSpecifics,
			A4(
				author$project$JsonModel$Serialization$addOptionalProperty,
				'parameters',
				author$project$JsonModel$Serialization$nonEmptyListOrDefault(author$project$JsonModel$Serialization$parametersToJson),
				question.parameters,
				A4(
					author$project$JsonModel$Serialization$addOptionalProperty,
					'extendedDescription',
					author$project$JsonModel$Serialization$nonEmptyStringOrDefault,
					question.extendedDescription,
					A4(
						author$project$JsonModel$Serialization$addOptionalProperty,
						'description',
						author$project$JsonModel$Serialization$nonEmptyStringOrDefault,
						question.description,
						A4(
							author$project$JsonModel$Serialization$addOptionalProperty,
							'extendedTitle',
							author$project$JsonModel$Serialization$nonEmptyStringOrDefault,
							question.extendedTitle,
							A4(
								author$project$JsonModel$Serialization$addProperty,
								'title',
								elm$json$Json$Encode$string,
								question.title,
								A4(author$project$JsonModel$Serialization$addProperty, 'id', elm$json$Json$Encode$string, question.id, author$project$JsonModel$Serialization$emptyPropertySet))))))));
};
var author$project$JsonModel$Serialization$questionsToJson = function (questions) {
	return A2(elm$json$Json$Encode$list, author$project$JsonModel$Serialization$questionToJson, questions);
};
var author$project$JsonModel$Serialization$questionCategoryToJson = function (questionCategory) {
	var categoryTypeToValue = function (ct) {
		return elm$json$Json$Encode$int(
			function () {
				if (ct.$ === 'AML') {
					return 1;
				} else {
					return 0;
				}
			}());
	};
	return elm$json$Json$Encode$object(
		A4(
			author$project$JsonModel$Serialization$addProperty,
			'questions',
			author$project$JsonModel$Serialization$questionsToJson,
			questionCategory.questions,
			A4(
				author$project$JsonModel$Serialization$addOptionalProperty,
				'extendedTitle',
				author$project$JsonModel$Serialization$nonEmptyStringOrDefault,
				questionCategory.extendedTitle,
				A4(
					author$project$JsonModel$Serialization$addOptionalProperty,
					'extendedDescription',
					author$project$JsonModel$Serialization$nonEmptyStringOrDefault,
					questionCategory.extendedDescription,
					A4(
						author$project$JsonModel$Serialization$addOptionalProperty,
						'description',
						author$project$JsonModel$Serialization$nonEmptyStringOrDefault,
						questionCategory.description,
						A4(
							author$project$JsonModel$Serialization$addProperty,
							'categoryType',
							categoryTypeToValue,
							questionCategory.categoryType,
							A4(author$project$JsonModel$Serialization$addProperty, 'title', elm$json$Json$Encode$string, questionCategory.title, author$project$JsonModel$Serialization$emptyPropertySet)))))));
};
var author$project$JsonModel$Serialization$questionCategoriesToJson = function (questionCategories) {
	return A2(elm$json$Json$Encode$list, author$project$JsonModel$Serialization$questionCategoryToJson, questionCategories);
};
var author$project$JsonModel$Serialization$questionTemplateToJson = function (questionTemplate) {
	return elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'name',
				elm$json$Json$Encode$string(questionTemplate.name)),
				_Utils_Tuple2(
				'categories',
				author$project$JsonModel$Serialization$questionCategoriesToJson(questionTemplate.categories))
			]));
};
var author$project$JsonModel$Serialization$toJson = A2(
	elm$core$Basics$composeR,
	author$project$JsonModel$Serialization$questionTemplateToJson,
	elm$json$Json$Encode$encode(4));
var author$project$Ports$loadQuestionTemplate = _Platform_outgoingPort('loadQuestionTemplate', elm$json$Json$Encode$string);
var author$project$Ports$saveQuestionTemplate = _Platform_outgoingPort(
	'saveQuestionTemplate',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			elm$json$Json$Encode$list,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					elm$json$Json$Encode$string(a),
					elm$json$Json$Encode$string(b)
				]));
	});
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Navigation$load = _Browser_load;
var elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var elm$core$Debug$log = _Debug_log;
var elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + elm$core$String$fromInt(port_));
		}
	});
var elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var elm$url$Url$toString = function (url) {
	var http = function () {
		var _n0 = url.protocol;
		if (_n0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var author$project$Main$update = F2(
	function (msg, model) {
		var _n0 = A2(elm$core$Debug$log, 'MESSAGE: ', msg);
		switch (_n0.$) {
			case 'UpdateModel':
				var f = _n0.a;
				return _Utils_Tuple2(
					f(model),
					elm$core$Platform$Cmd$none);
			case 'ClickedLink':
				var urlRequest = _n0.a;
				if (urlRequest.$ === 'Internal') {
					var url = urlRequest.a;
					return _Utils_Tuple2(
						model,
						A2(
							elm$browser$Browser$Navigation$pushUrl,
							model.key,
							elm$url$Url$toString(url)));
				} else {
					var href = urlRequest.a;
					return _Utils_Tuple2(
						model,
						elm$browser$Browser$Navigation$load(href));
				}
			case 'ChangedUrl':
				var url = _n0.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							route: author$project$Routing$parseLocation(url)
						}),
					elm$core$Platform$Cmd$none);
			case 'MenuAction':
				var action = _n0.a;
				if (action.$ === 'LoadQuestionTemplate') {
					var product = action.a;
					return _Utils_Tuple2(
						model,
						author$project$Ports$loadQuestionTemplate(product));
				} else {
					var product = action.a;
					return _Utils_Tuple2(
						model,
						author$project$Ports$saveQuestionTemplate(
							_Utils_Tuple2(
								product,
								author$project$JsonModel$Serialization$toJson(model.questionTemplate))));
				}
			case 'QuestionTemplateLoaded':
				var questionTemplate = _n0.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{questionTemplate: questionTemplate}),
					elm$core$Platform$Cmd$none);
			case 'QuestionTemplateSaved':
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
		}
	});
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$ViewComponent$eval = F4(
	function (f, model, modelTraits, focus) {
		var _n0 = focus.optional.getOption(model);
		if (_n0.$ === 'Just') {
			var model_ = _n0.a;
			return A4(f, model, modelTraits, focus, model_);
		} else {
			return elm$html$Html$text('');
		}
	});
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var author$project$ViewHelpers$onChange = function (msgCreator) {
	return A2(
		elm$html$Html$Events$on,
		'change',
		A2(elm$json$Json$Decode$map, msgCreator, elm$html$Html$Events$targetValue));
};
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var author$project$ViewHelpers$panel2 = F2(
	function (heading, content) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('card'),
					A2(elm$html$Html$Attributes$style, 'margin', '5px')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('card-body')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$h1,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('card-title'),
									A2(elm$html$Html$Attributes$style, 'color', '#6b1faf')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(heading)
								])),
							A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[content]))
						]))
				]));
	});
var elm$html$Html$textarea = _VirtualDom_node('textarea');
var elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		elm$core$String$fromInt(n));
};
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var author$project$JsonModel$DetailsView$jsonModelView = author$project$ViewComponent$eval(
	F4(
		function (model, modelTraits, focus, questionTemplate) {
			var updateModel = function (s) {
				var _n0 = author$project$JsonModel$Deserialization$fromJson(s);
				if (_n0.$ === 'Ok') {
					var value = _n0.a;
					return modelTraits.makeMsg(
						focus.optional.set(value));
				} else {
					var error = _n0.a;
					return modelTraits.makeMsg(
						A2(
							elm$core$Debug$log,
							'Error while parsing json: ' + elm$json$Json$Decode$errorToString(error),
							function (x) {
								return x;
							}));
				}
			};
			return A2(
				author$project$ViewHelpers$panel2,
				'Json Representation',
				A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$textarea,
							_List_fromArray(
								[
									elm$html$Html$Attributes$rows(20),
									elm$html$Html$Attributes$value(
									author$project$JsonModel$Serialization$toJson(questionTemplate)),
									A2(elm$html$Html$Attributes$style, 'font-family', 'monospace'),
									author$project$ViewHelpers$onChange(updateModel),
									A2(elm$html$Html$Attributes$style, 'width', '100%')
								]),
							_List_Nil)
						])));
		}));
var author$project$Main$MenuAction = function (a) {
	return {$: 'MenuAction', a: a};
};
var author$project$Main$questionTemplateOfModel = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (m) {
				return m.questionTemplate;
			},
			F2(
				function (c, m) {
					return _Utils_update(
						m,
						{questionTemplate: c});
				}))),
	path: _List_Nil
};
var author$project$Main$Category = function (a) {
	return {$: 'Category', a: a};
};
var author$project$Main$None = {$: 'None'};
var author$project$Main$Option = function (a) {
	return {$: 'Option', a: a};
};
var author$project$Main$Question = function (a) {
	return {$: 'Question', a: a};
};
var author$project$Question$Optics$followUpQuestionsOfOption = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (o) {
				return o.followUpQuestions;
			},
			F2(
				function (fuq, o) {
					return _Utils_update(
						o,
						{followUpQuestions: fuq});
				}))),
	path: _List_fromArray(
		['followup-questions'])
};
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Optics$elementOfElementList = function (predicate) {
	var tryFind = function (xs) {
		return elm$core$List$head(
			A2(elm$core$List$filter, predicate, xs));
	};
	var addOrReplace = F2(
		function (x_, xss) {
			if (!xss.b) {
				return _List_fromArray(
					[x_]);
			} else {
				var x = xss.a;
				var xs = xss.b;
				return predicate(x) ? A2(elm$core$List$cons, x_, xs) : A2(
					elm$core$List$cons,
					x,
					A2(addOrReplace, x_, xs));
			}
		});
	return A2(arturopala$elm_monocle$Monocle$Optional$Optional, tryFind, addOrReplace);
};
var author$project$Question$Optics$optionOfOptionsList = function (optionId) {
	return {
		optional: author$project$Optics$elementOfElementList(
			function (o) {
				return _Utils_eq(o.id, optionId);
			}),
		path: _List_fromArray(
			[optionId])
	};
};
var author$project$Question$Optics$optionsOfSelectQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (o) {
				return o.options;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{options: newValue});
				}))),
	path: _List_fromArray(
		['options'])
};
var author$project$Question$Optics$questionGroupOfQuestion = {
	optional: A2(
		arturopala$elm_monocle$Monocle$Optional$Optional,
		function (qt) {
			if (qt.$ === 'QuestionGroup') {
				var gq = qt.a;
				return elm$core$Maybe$Just(gq);
			} else {
				return elm$core$Maybe$Nothing;
			}
		},
		F2(
			function (newq, _n1) {
				return author$project$Question$Model$QuestionGroup(newq);
			})),
	path: _List_Nil
};
var author$project$Question$Optics$questionOfQuestionList = function (questionId) {
	return {
		optional: author$project$Optics$elementOfElementList(
			function (_n0) {
				var q = _n0.a;
				return _Utils_eq(q.id, questionId);
			}),
		path: _List_fromArray(
			[questionId])
	};
};
var author$project$Question$Optics$questionTypeOfQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (_n0) {
				var q = _n0.a;
				return q.questionType;
			},
			F2(
				function (qt, _n1) {
					var q = _n1.a;
					return author$project$Question$Model$Question(
						_Utils_update(
							q,
							{questionType: qt}));
				}))),
	path: _List_Nil
};
var author$project$Question$Optics$questionsOfGroupQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.questions;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{questions: newValue});
				}))),
	path: _List_fromArray(
		['subquestions'])
};
var author$project$Question$Optics$selectQuestionOfQuestion = {
	optional: A2(
		arturopala$elm_monocle$Monocle$Optional$Optional,
		function (qt) {
			if (qt.$ === 'SelectQuestion') {
				var sq = qt.a;
				return elm$core$Maybe$Just(sq);
			} else {
				return elm$core$Maybe$Nothing;
			}
		},
		F2(
			function (newq, _n1) {
				return author$project$Question$Model$SelectQuestion(newq);
			})),
	path: _List_Nil
};
var author$project$QuestionCategory$Model$categoryTypeToString = function (ct) {
	if (ct.$ === 'AML') {
		return 'AML';
	} else {
		return 'PEP';
	}
};
var author$project$QuestionCategory$Optics$questionCategoryOfQuestionCategoryList = function (categoryType) {
	return {
		optional: author$project$Optics$elementOfElementList(
			function (c) {
				return _Utils_eq(c.categoryType, categoryType);
			}),
		path: _List_fromArray(
			[
				author$project$QuestionCategory$Model$categoryTypeToString(categoryType)
			])
	};
};
var author$project$QuestionCategory$Optics$questionsOfQuestionCategory = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.questions;
			},
			F2(
				function (ql, qc) {
					return _Utils_update(
						qc,
						{questions: ql});
				}))),
	path: _List_fromArray(
		['questions'])
};
var author$project$QuestionTemplate$Optics$categoriesOfQuestionTemplate = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.categories;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{categories: newValue});
				}))),
	path: _List_fromArray(
		['categories'])
};
var elm$core$String$toUpper = _String_toUpper;
var author$project$Main$routeToSelectedEntity = function () {
	var optionRouteToSelectedEntity = F2(
		function (route, focus) {
			if (route.b && (route.a.$ === 'FollowUpQuestion')) {
				var questionId = route.a.a;
				var xs = route.b;
				var focus_ = A2(
					author$project$Optics$composeFocus,
					author$project$Question$Optics$questionOfQuestionList(questionId),
					A2(author$project$Optics$composeFocus, author$project$Question$Optics$followUpQuestionsOfOption, focus));
				if (!xs.b) {
					return author$project$Main$Question(focus_);
				} else {
					return A2(subQuestionRouteToSelectedEntity, xs, focus_);
				}
			} else {
				return author$project$Main$None;
			}
		});
	var subQuestionRouteToSelectedEntity = F2(
		function (route, focus) {
			_n5$2:
			while (true) {
				if (route.b) {
					switch (route.a.$) {
						case 'OptionsRoute':
							var optionId = route.a.a;
							var xs = route.b;
							var focus_ = A2(
								author$project$Optics$composeFocus,
								author$project$Question$Optics$optionOfOptionsList(optionId),
								A2(
									author$project$Optics$composeFocus,
									author$project$Question$Optics$optionsOfSelectQuestion,
									A2(
										author$project$Optics$composeFocus,
										author$project$Question$Optics$selectQuestionOfQuestion,
										A2(author$project$Optics$composeFocus, author$project$Question$Optics$questionTypeOfQuestion, focus))));
							if (!xs.b) {
								return author$project$Main$Option(focus_);
							} else {
								return A2(optionRouteToSelectedEntity, xs, focus_);
							}
						case 'GroupQuestion':
							var questionId = route.a.a;
							var xs = route.b;
							var focus_ = A2(
								author$project$Optics$composeFocus,
								author$project$Question$Optics$questionOfQuestionList(questionId),
								A2(
									author$project$Optics$composeFocus,
									author$project$Question$Optics$questionsOfGroupQuestion,
									A2(
										author$project$Optics$composeFocus,
										author$project$Question$Optics$questionGroupOfQuestion,
										A2(author$project$Optics$composeFocus, author$project$Question$Optics$questionTypeOfQuestion, focus))));
							if (!xs.b) {
								return author$project$Main$Question(focus_);
							} else {
								return A2(subQuestionRouteToSelectedEntity, xs, focus_);
							}
						default:
							break _n5$2;
					}
				} else {
					break _n5$2;
				}
			}
			return author$project$Main$None;
		});
	var questionRouteToSelectedEntity = F2(
		function (route, focus) {
			if (route.b && (route.a.$ === 'QuestionRoute')) {
				var questionId = route.a.a;
				var xs = route.b;
				var focus_ = A2(
					author$project$Optics$composeFocus,
					author$project$Question$Optics$questionOfQuestionList(questionId),
					A2(author$project$Optics$composeFocus, author$project$QuestionCategory$Optics$questionsOfQuestionCategory, focus));
				if (!xs.b) {
					return author$project$Main$Question(focus_);
				} else {
					return A2(subQuestionRouteToSelectedEntity, xs, focus_);
				}
			} else {
				return author$project$Main$None;
			}
		});
	var categoryRouteToSelectedEntity = function (route) {
		if (route.b && (route.a.$ === 'CategoryRoute')) {
			var categoryTypeName = route.a.a;
			var xs = route.b;
			var focus_ = function (categoryType) {
				return A2(
					author$project$Optics$composeFocus,
					author$project$QuestionCategory$Optics$questionCategoryOfQuestionCategoryList(categoryType),
					A2(author$project$Optics$composeFocus, author$project$QuestionTemplate$Optics$categoriesOfQuestionTemplate, author$project$Main$questionTemplateOfModel));
			};
			var makeResult = function (categoryType) {
				if (!xs.b) {
					return author$project$Main$Category(
						focus_(categoryType));
				} else {
					return A2(
						questionRouteToSelectedEntity,
						xs,
						focus_(categoryType));
				}
			};
			var _n1 = elm$core$String$toUpper(categoryTypeName);
			switch (_n1) {
				case 'PEP':
					return makeResult(author$project$QuestionCategory$Model$PEP);
				case 'AML':
					return makeResult(author$project$QuestionCategory$Model$AML);
				default:
					return A2(elm$core$Debug$log, 'No route found for category ' + categoryTypeName, author$project$Main$None);
			}
		} else {
			return author$project$Main$None;
		}
	};
	return categoryRouteToSelectedEntity;
}();
var author$project$Main$withNewId = F2(
	function (f, model) {
		var _n0 = A2(elm$random$Random$step, danyx23$elm_uuid$Uuid$uuidGenerator, model.uuidSeed);
		var newUuid = _n0.a;
		var newSeed = _n0.b;
		return A2(
			f,
			danyx23$elm_uuid$Uuid$toString(newUuid),
			_Utils_update(
				model,
				{uuidSeed: newSeed}));
	});
var author$project$Menu$LoadQuestionTemplate = function (a) {
	return {$: 'LoadQuestionTemplate', a: a};
};
var author$project$Menu$SaveQuestionTemplate = function (a) {
	return {$: 'SaveQuestionTemplate', a: a};
};
var author$project$Menu$panelNoHeader = function (content) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('card'),
				A2(elm$html$Html$Attributes$style, 'margin', '5px'),
				A2(elm$html$Html$Attributes$style, 'width', '100%'),
				A2(elm$html$Html$Attributes$style, 'background-color', '#ddd')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('card-body')
					]),
				content)
			]));
};
var author$project$Menu$selectedProductOfMenuState = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (s) {
				return s.selectedProduct;
			},
			F2(
				function (t, s) {
					return _Utils_update(
						s,
						{selectedProduct: t});
				}))),
	path: _List_fromArray(
		['selectedProduct'])
};
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$form = _VirtualDom_node('form');
var elm$html$Html$option = _VirtualDom_node('option');
var elm$html$Html$select = _VirtualDom_node('select');
var elm$html$Html$span = _VirtualDom_node('span');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var author$project$Menu$menuView = function (makeMenuMsg) {
	return author$project$ViewComponent$eval(
		F4(
			function (model, modelTraits, focus, menuState) {
				var updateSelectedProduct = function (newSelectedProduct) {
					return modelTraits.makeMsg(
						A2(author$project$Optics$composeFocus, author$project$Menu$selectedProductOfMenuState, focus).optional.set(newSelectedProduct));
				};
				var saveQuestionTemplate = makeMenuMsg(
					author$project$Menu$SaveQuestionTemplate(menuState.selectedProduct));
				var productToOption = function (product) {
					return A2(
						elm$html$Html$option,
						_List_fromArray(
							[
								elm$html$Html$Attributes$value(product.id)
							]),
						_List_fromArray(
							[
								elm$html$Html$text(product.name)
							]));
				};
				var productDropdown = A2(
					elm$html$Html$select,
					_List_fromArray(
						[
							elm$html$Html$Events$onInput(updateSelectedProduct),
							elm$html$Html$Attributes$class('form-control')
						]),
					A2(elm$core$List$map, productToOption, menuState.products));
				var loadQuestionTemplate = makeMenuMsg(
					author$project$Menu$LoadQuestionTemplate(menuState.selectedProduct));
				return author$project$Menu$panelNoHeader(
					_List_fromArray(
						[
							A2(
							elm$html$Html$span,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									elm$html$Html$form,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('form-inline')
										]),
									_List_fromArray(
										[
											productDropdown,
											A2(
											elm$html$Html$button,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('btn btn-primary my-1 mr-sm-2'),
													elm$html$Html$Attributes$type_('button'),
													elm$html$Html$Events$onClick(loadQuestionTemplate)
												]),
											_List_fromArray(
												[
													elm$html$Html$text('Load')
												])),
											A2(
											elm$html$Html$button,
											_List_fromArray(
												[
													elm$html$Html$Attributes$class('btn btn-primary my-1 mr-sm-2'),
													elm$html$Html$Attributes$type_('button'),
													elm$html$Html$Events$onClick(saveQuestionTemplate)
												]),
											_List_fromArray(
												[
													elm$html$Html$text('Save')
												]))
										]))
								]))
						]));
			}));
};
var arturopala$elm_monocle$Monocle$Optional$modifyOption = F2(
	function (opt, fx) {
		var mf = function (a) {
			return A2(
				elm$core$Maybe$map,
				A2(
					elm$core$Basics$composeR,
					fx,
					A2(arturopala$elm_monocle$Monocle$Optional$flip, opt.set, a)),
				opt.getOption(a));
		};
		return mf;
	});
var arturopala$elm_monocle$Monocle$Optional$modify = F2(
	function (opt, fx) {
		var mf = function (a) {
			return A2(
				elm$core$Maybe$withDefault,
				a,
				A3(arturopala$elm_monocle$Monocle$Optional$modifyOption, opt, fx, a));
		};
		return mf;
	});
var author$project$Question$Optics$isComplianceCheckNeededOfOption = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (o) {
				return o.isComplianceCheckNeeded;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{isComplianceCheckNeeded: newValue});
				}))),
	path: _List_fromArray(
		['is-compliancecheck-Needed'])
};
var author$project$Question$Optics$textOfOption = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (o) {
				return o.text;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{text: newValue});
				}))),
	path: _List_fromArray(
		['text'])
};
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$label = _VirtualDom_node('label');
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$checked = elm$html$Html$Attributes$boolProperty('checked');
var elm$html$Html$Attributes$for = elm$html$Html$Attributes$stringProperty('htmlFor');
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var author$project$ViewHelpers$formCheckBoxInput = F4(
	function (id_, text_, checked_, toggleAction) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-check')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$type_('checkbox'),
							elm$html$Html$Attributes$class('form-check-input'),
							elm$html$Html$Attributes$id(id_),
							elm$html$Html$Events$onClick(toggleAction),
							elm$html$Html$Attributes$checked(checked_)
						]),
					_List_Nil),
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$for(id_),
							elm$html$Html$Attributes$class('form-check-label')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(text_)
						]))
				]));
	});
var elm$html$Html$small = _VirtualDom_node('small');
var author$project$ViewHelpers$formTextInput = F5(
	function (id_, text_, value_, maybeHelp, action) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$for(id_)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(text_)
						])),
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$type_('text'),
							elm$html$Html$Attributes$class('form-control'),
							elm$html$Html$Attributes$id(id_),
							elm$html$Html$Events$onInput(action),
							elm$html$Html$Attributes$value(value_)
						]),
					_List_Nil),
					function () {
					if (maybeHelp.$ === 'Just') {
						var helpText = maybeHelp.a;
						return A2(
							elm$html$Html$small,
							_List_fromArray(
								[
									elm$html$Html$Attributes$id(id_ + 'help'),
									elm$html$Html$Attributes$class('form-text text-muted')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(helpText)
								]));
					} else {
						return elm$html$Html$text('');
					}
				}()
				]));
	});
var author$project$ViewHelpers$panel = F2(
	function (heading, content) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('card'),
					A2(elm$html$Html$Attributes$style, 'margin', '5px')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('card-body')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$h1,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('card-title'),
									A2(elm$html$Html$Attributes$style, 'color', '#6b1faf')
								]),
							_List_fromArray(
								[
									elm$html$Html$text(heading)
								])),
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									A2(elm$html$Html$Attributes$style, 'height', '50rem'),
									A2(elm$html$Html$Attributes$style, 'overflow-y', 'auto')
								]),
							_List_fromArray(
								[content]))
						]))
				]));
	});
var elm$core$Basics$not = _Basics_not;
var author$project$Question$OptionDetailsView$optionDetailsView = author$project$ViewComponent$eval(
	F4(
		function (model, modelTraits, focus, option) {
			var updateOptionText = function (s) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$Question$Optics$textOfOption, focus).optional.set(s));
			};
			var toggleIsComplianceCheckNeeded = modelTraits.makeMsg(
				A2(
					arturopala$elm_monocle$Monocle$Optional$modify,
					A2(author$project$Optics$composeFocus, author$project$Question$Optics$isComplianceCheckNeededOfOption, focus).optional,
					elm$core$Basics$not));
			return A2(
				author$project$ViewHelpers$panel,
				'Option Details',
				A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A5(author$project$ViewHelpers$formTextInput, 'optionTextInput', 'Text', option.text, elm$core$Maybe$Nothing, updateOptionText),
							A4(author$project$ViewHelpers$formCheckBoxInput, 'isComplianceCheckNeededInput', 'Compliance Check Needed?', option.isComplianceCheckNeeded, toggleIsComplianceCheckNeeded)
						])));
		}));
var author$project$Question$Model$isCountryQuestion = function (questionType) {
	if (questionType.$ === 'CountryQuestion') {
		return true;
	} else {
		return false;
	}
};
var author$project$Question$Model$isFreeText = function (questionType) {
	if (questionType.$ === 'FreeTextQuestion') {
		return true;
	} else {
		return false;
	}
};
var author$project$Question$Model$isQuestionGroup = function (questionType) {
	if (questionType.$ === 'QuestionGroup') {
		return true;
	} else {
		return false;
	}
};
var author$project$Question$Model$isSelectQuestion = function (questionType) {
	if (questionType.$ === 'SelectQuestion') {
		return true;
	} else {
		return false;
	}
};
var author$project$Question$Model$makeCountryQuestion = author$project$Question$Model$CountryQuestion(
	{allowMultiple: false, validationMessage: ''});
var author$project$Question$Model$makeSelectQuestion = author$project$Question$Model$SelectQuestion(
	{allowMultiple: false, options: _List_Nil});
var author$project$Question$Optics$descriptionOfQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (_n0) {
				var q = _n0.a;
				return q.description;
			},
			F2(
				function (d, _n1) {
					var q = _n1.a;
					return author$project$Question$Model$Question(
						_Utils_update(
							q,
							{description: d}));
				}))),
	path: _List_fromArray(
		['description'])
};
var author$project$Question$Optics$extendedDescriptionOfQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (_n0) {
				var q = _n0.a;
				return q.extendedDescription;
			},
			F2(
				function (d, _n1) {
					var q = _n1.a;
					return author$project$Question$Model$Question(
						_Utils_update(
							q,
							{extendedDescription: d}));
				}))),
	path: _List_fromArray(
		['extended-description'])
};
var author$project$Question$Optics$extendedTitleOfQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (_n0) {
				var q = _n0.a;
				return q.extendedTitle;
			},
			F2(
				function (t, _n1) {
					var q = _n1.a;
					return author$project$Question$Model$Question(
						_Utils_update(
							q,
							{extendedTitle: t}));
				}))),
	path: _List_fromArray(
		['extended-title'])
};
var author$project$Question$Optics$titleOfQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (_n0) {
				var q = _n0.a;
				return q.title;
			},
			F2(
				function (t, _n1) {
					var q = _n1.a;
					return author$project$Question$Model$Question(
						_Utils_update(
							q,
							{title: t}));
				}))),
	path: _List_fromArray(
		['title'])
};
var author$project$Question$Model$makeOption = function (id) {
	return {active: false, followUpQuestions: _List_Nil, id: id, isComplianceCheckNeeded: false, text: id};
};
var author$project$Question$Model$makeQuestion = function (id) {
	return author$project$Question$Model$Question(
		{active: false, collapsed: false, description: '', extendedDescription: '', extendedTitle: '', id: id, parameters: _List_Nil, questionType: author$project$Question$Model$makeFreeTextQuestion, title: id});
};
var author$project$Question$Optics$allowMultipleOfCountryQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (o) {
				return o.allowMultiple;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{allowMultiple: newValue});
				}))),
	path: _List_fromArray(
		['allow-multiple'])
};
var author$project$Question$Optics$allowMultipleOfSelectQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (o) {
				return o.allowMultiple;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{allowMultiple: newValue});
				}))),
	path: _List_fromArray(
		['allow-multiple'])
};
var author$project$Question$Optics$countryQuestionOfQuestion = {
	optional: A2(
		arturopala$elm_monocle$Monocle$Optional$Optional,
		function (qt) {
			if (qt.$ === 'CountryQuestion') {
				var cq = qt.a;
				return elm$core$Maybe$Just(cq);
			} else {
				return elm$core$Maybe$Nothing;
			}
		},
		F2(
			function (newq, _n1) {
				return author$project$Question$Model$CountryQuestion(newq);
			})),
	path: _List_fromArray(
		['country-question'])
};
var author$project$Question$Optics$freeTextQuestionOfQuestion = {
	optional: A2(
		arturopala$elm_monocle$Monocle$Optional$Optional,
		function (qt) {
			if (qt.$ === 'FreeTextQuestion') {
				var ftq = qt.a;
				return elm$core$Maybe$Just(ftq);
			} else {
				return elm$core$Maybe$Nothing;
			}
		},
		F2(
			function (newq, _n1) {
				return author$project$Question$Model$FreeTextQuestion(newq);
			})),
	path: _List_Nil
};
var author$project$Question$Optics$isMandatoryOfFreeTextQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.isMandatory;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{isMandatory: newValue});
				}))),
	path: _List_fromArray(
		['mandatory'])
};
var author$project$Question$Optics$maxLengthOfFreeTextQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.maxLength;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{maxLength: newValue});
				}))),
	path: _List_fromArray(
		['max-length'])
};
var author$project$Question$Optics$maxRepeatOfGroupQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.maxRepeat;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{maxRepeat: newValue});
				}))),
	path: _List_fromArray(
		['max-repeat'])
};
var author$project$Question$Optics$validationMessageOfCountryQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (o) {
				return o.validationMessage;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{validationMessage: newValue});
				}))),
	path: _List_fromArray(
		['validation-message'])
};
var author$project$Question$QuestionDetailsView$questionTypeSpecificFieldsView = author$project$ViewComponent$eval(
	F4(
		function (model, modelTraits, focus, questionType) {
			var updateValidationMessage = function (newValidationMessage) {
				return modelTraits.makeMsg(
					A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$validationMessageOfCountryQuestion,
						A2(author$project$Optics$composeFocus, author$project$Question$Optics$countryQuestionOfQuestion, focus)).optional.set(newValidationMessage));
			};
			var updateQuestionMaxLength = function (newMaxLen) {
				return modelTraits.makeMsg(
					A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$maxLengthOfFreeTextQuestion,
						A2(author$project$Optics$composeFocus, author$project$Question$Optics$freeTextQuestionOfQuestion, focus)).optional.set(newMaxLen));
			};
			var updateMaxRepeat = function (newMaxRepeat) {
				return modelTraits.makeMsg(
					A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$maxRepeatOfGroupQuestion,
						A2(author$project$Optics$composeFocus, author$project$Question$Optics$questionGroupOfQuestion, focus)).optional.set(newMaxRepeat));
			};
			var toggleIsMandatory = modelTraits.makeMsg(
				A2(
					arturopala$elm_monocle$Monocle$Optional$modify,
					A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$isMandatoryOfFreeTextQuestion,
						A2(author$project$Optics$composeFocus, author$project$Question$Optics$freeTextQuestionOfQuestion, focus)).optional,
					elm$core$Basics$not));
			var toggleAllowMultipleSelect = modelTraits.makeMsg(
				A2(
					arturopala$elm_monocle$Monocle$Optional$modify,
					A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$allowMultipleOfSelectQuestion,
						A2(author$project$Optics$composeFocus, author$project$Question$Optics$selectQuestionOfQuestion, focus)).optional,
					elm$core$Basics$not));
			var toggleAllowMultipleCountry = modelTraits.makeMsg(
				A2(
					arturopala$elm_monocle$Monocle$Optional$modify,
					A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$allowMultipleOfCountryQuestion,
						A2(author$project$Optics$composeFocus, author$project$Question$Optics$countryQuestionOfQuestion, focus)).optional,
					elm$core$Basics$not));
			var addSubQuestion = modelTraits.makeIdMsg(
				function (id) {
					return A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$questionOfQuestionList(id),
						A2(
							author$project$Optics$composeFocus,
							author$project$Question$Optics$questionsOfGroupQuestion,
							A2(author$project$Optics$composeFocus, author$project$Question$Optics$questionGroupOfQuestion, focus))).optional.set(
						author$project$Question$Model$makeQuestion(id));
				});
			var addOption = modelTraits.makeIdMsg(
				function (id) {
					return A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$optionOfOptionsList(id),
						A2(
							author$project$Optics$composeFocus,
							author$project$Question$Optics$optionsOfSelectQuestion,
							A2(author$project$Optics$composeFocus, author$project$Question$Optics$selectQuestionOfQuestion, focus))).optional.set(
						author$project$Question$Model$makeOption(id));
				});
			switch (questionType.$) {
				case 'FreeTextQuestion':
					var ftq = questionType.a;
					return A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A5(author$project$ViewHelpers$formTextInput, 'maxLengthInput', 'The maximum answer length', ftq.maxLength, elm$core$Maybe$Nothing, updateQuestionMaxLength),
								A4(author$project$ViewHelpers$formCheckBoxInput, 'isMandatory', 'Mandatory', ftq.isMandatory, toggleIsMandatory)
							]));
				case 'SelectQuestion':
					var sq = questionType.a;
					return A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A4(author$project$ViewHelpers$formCheckBoxInput, 'allowMultipleInput', 'Allow Multiple Choices', sq.allowMultiple, toggleAllowMultipleSelect),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('btn btn-outline-primary btn-sm'),
										elm$html$Html$Events$onClick(addOption)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Add Option')
									]))
							]));
				case 'CountryQuestion':
					var cq = questionType.a;
					return A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A5(
								author$project$ViewHelpers$formTextInput,
								'validationMessage',
								'Validation Message',
								cq.validationMessage,
								elm$core$Maybe$Just('This message will be displayed when the country is not valid'),
								updateValidationMessage),
								A4(author$project$ViewHelpers$formCheckBoxInput, 'allowMultipleInput', 'Allow Multiple Choices', cq.allowMultiple, toggleAllowMultipleCountry)
							]));
				default:
					var qs = questionType.a;
					return A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A5(
								author$project$ViewHelpers$formTextInput,
								'maxRepeatInput',
								'Max Repeat',
								qs.maxRepeat,
								elm$core$Maybe$Just('The maximum times the questions in the group may be asked. Zero means unlimited'),
								updateMaxRepeat),
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('btn btn-outline-primary btn-sm'),
										elm$html$Html$Events$onClick(addSubQuestion)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Add Sub Question')
									]))
							]));
			}
		}));
var elm$html$Html$Attributes$selected = elm$html$Html$Attributes$boolProperty('selected');
var author$project$ViewHelpers$formSelectInput = F4(
	function (id_, text_, action, options) {
		var makeOption = function (_n0) {
			var option_ = _n0.a;
			var value_ = _n0.b;
			var selected_ = _n0.c;
			return A2(
				elm$html$Html$option,
				_List_fromArray(
					[
						elm$html$Html$Attributes$value(value_),
						elm$html$Html$Attributes$selected(selected_)
					]),
				_List_fromArray(
					[
						elm$html$Html$text(option_)
					]));
		};
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$for(id_)
						]),
					_List_fromArray(
						[
							elm$html$Html$text(text_)
						])),
					A2(
					elm$html$Html$select,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('form-control'),
							elm$html$Html$Attributes$id(id_),
							elm$html$Html$Events$onInput(action)
						]),
					A2(elm$core$List$map, makeOption, options))
				]));
	});
var author$project$Question$QuestionDetailsView$questionDetailsView = author$project$ViewComponent$eval(
	F4(
		function (model, modelTraits, focus, _n0) {
			var current = _n0.a;
			var updateQuestionType = function (qtstr) {
				var qt = function () {
					switch (qtstr) {
						case 'freetext':
							return author$project$Question$Model$makeFreeTextQuestion;
						case 'select':
							return author$project$Question$Model$makeSelectQuestion;
						case 'country':
							return author$project$Question$Model$makeCountryQuestion;
						default:
							return author$project$Question$Model$makeQuestionGroup;
					}
				}();
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$Question$Optics$questionTypeOfQuestion, focus).optional.set(qt));
			};
			var updateQuestionTitle = function (newTitle) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$Question$Optics$titleOfQuestion, focus).optional.set(newTitle));
			};
			var updateQuestionExtendedTitle = function (newTitle) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$Question$Optics$extendedTitleOfQuestion, focus).optional.set(newTitle));
			};
			var updateQuestionExtendedDescription = function (newDescription) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$Question$Optics$extendedDescriptionOfQuestion, focus).optional.set(newDescription));
			};
			var updateQuestionDescription = function (newDescription) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$Question$Optics$descriptionOfQuestion, focus).optional.set(newDescription));
			};
			return A2(
				author$project$ViewHelpers$panel,
				'Question Details',
				A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A4(
							author$project$ViewHelpers$formSelectInput,
							'questionTypeInput',
							'Question Type',
							updateQuestionType,
							_List_fromArray(
								[
									_Utils_Tuple3(
									'Free Text',
									'freetext',
									author$project$Question$Model$isFreeText(current.questionType)),
									_Utils_Tuple3(
									'Select',
									'select',
									author$project$Question$Model$isSelectQuestion(current.questionType)),
									_Utils_Tuple3(
									'Country',
									'country',
									author$project$Question$Model$isCountryQuestion(current.questionType)),
									_Utils_Tuple3(
									'Group',
									'group',
									author$project$Question$Model$isQuestionGroup(current.questionType))
								])),
							A5(author$project$ViewHelpers$formTextInput, 'titleInput', 'Title', current.title, elm$core$Maybe$Nothing, updateQuestionTitle),
							A5(
							author$project$ViewHelpers$formTextInput,
							'extendedTitleInput',
							'Extended Title',
							current.extendedTitle,
							elm$core$Maybe$Just('A formatted title that may use html tags'),
							updateQuestionExtendedTitle),
							A5(author$project$ViewHelpers$formTextInput, 'descriptionInput', 'Description', current.description, elm$core$Maybe$Nothing, updateQuestionDescription),
							A5(
							author$project$ViewHelpers$formTextInput,
							'extendedDescriptionInput',
							'Extended Description',
							current.extendedDescription,
							elm$core$Maybe$Just('A formatted description that may use html tags'),
							updateQuestionExtendedDescription),
							A3(
							author$project$Question$QuestionDetailsView$questionTypeSpecificFieldsView,
							model,
							modelTraits,
							A2(author$project$Optics$composeFocus, author$project$Question$Optics$questionTypeOfQuestion, focus))
						])));
		}));
var author$project$QuestionCategory$Optics$descriptionOfQuestionCategory = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.description;
			},
			F2(
				function (a, qc) {
					return _Utils_update(
						qc,
						{description: a});
				}))),
	path: _List_fromArray(
		['description'])
};
var author$project$QuestionCategory$Optics$extendedDescriptionOfQuestionCategory = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.extendedDescription;
			},
			F2(
				function (a, qc) {
					return _Utils_update(
						qc,
						{extendedDescription: a});
				}))),
	path: _List_fromArray(
		['extended-description'])
};
var author$project$QuestionCategory$Optics$extendedTitleOfQuestionCategory = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.extendedTitle;
			},
			F2(
				function (a, qc) {
					return _Utils_update(
						qc,
						{extendedTitle: a});
				}))),
	path: _List_fromArray(
		['extended-title'])
};
var author$project$QuestionCategory$Optics$titleOfQuestionCategory = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.title;
			},
			F2(
				function (a, qc) {
					return _Utils_update(
						qc,
						{title: a});
				}))),
	path: _List_fromArray(
		['title'])
};
var author$project$QuestionCategory$DetailsView$questionCategoryDetailsView = author$project$ViewComponent$eval(
	F4(
		function (model, modelTraits, focus, questionCategory) {
			var updateTitle = function (s) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$QuestionCategory$Optics$titleOfQuestionCategory, focus).optional.set(s));
			};
			var updateExtendedTitle = function (s) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$QuestionCategory$Optics$extendedTitleOfQuestionCategory, focus).optional.set(s));
			};
			var updateExtendedDescription = function (s) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$QuestionCategory$Optics$extendedDescriptionOfQuestionCategory, focus).optional.set(s));
			};
			var updateDescription = function (s) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$QuestionCategory$Optics$descriptionOfQuestionCategory, focus).optional.set(s));
			};
			return A2(
				author$project$ViewHelpers$panel,
				'Category Details',
				A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A5(author$project$ViewHelpers$formTextInput, 'titleInput', 'Title', questionCategory.title, elm$core$Maybe$Nothing, updateTitle),
							A5(
							author$project$ViewHelpers$formTextInput,
							'extendedTitleInput',
							'Extended Title',
							questionCategory.extendedTitle,
							elm$core$Maybe$Just('A formatted title that may use html tags'),
							updateExtendedTitle),
							A5(author$project$ViewHelpers$formTextInput, 'descriptionInput', 'Description', questionCategory.description, elm$core$Maybe$Nothing, updateDescription),
							A5(
							author$project$ViewHelpers$formTextInput,
							'extendedDescriptionInput',
							'Extended Description',
							questionCategory.extendedDescription,
							elm$core$Maybe$Just('A formatted description that may use html tags'),
							updateExtendedDescription)
						])));
		}));
var elm$core$Basics$round = _Basics_round;
var elm$core$String$fromFloat = _String_fromNumber;
var avh4$elm_color$Color$toCssString = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	var a = _n0.d;
	var roundTo = function (x) {
		return elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return elm$core$Basics$round(x * 10000) / 100;
	};
	return elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				elm$core$String$fromFloat(
				pct(r)),
				'%,',
				elm$core$String$fromFloat(
				pct(g)),
				'%,',
				elm$core$String$fromFloat(
				pct(b)),
				'%,',
				elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var elm$svg$Svg$map = elm$virtual_dom$VirtualDom$map;
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var feathericons$elm_feather$FeatherIcons$toHtml = F2(
	function (attributes, _n0) {
		var src = _n0.a.src;
		var attrs = _n0.a.attrs;
		var strSize = elm$core$String$fromFloat(attrs.size);
		var baseAttributes = _List_fromArray(
			[
				elm$svg$Svg$Attributes$fill('none'),
				elm$svg$Svg$Attributes$height(
				_Utils_ap(strSize, attrs.sizeUnit)),
				elm$svg$Svg$Attributes$width(
				_Utils_ap(strSize, attrs.sizeUnit)),
				elm$svg$Svg$Attributes$stroke('currentColor'),
				elm$svg$Svg$Attributes$strokeLinecap('round'),
				elm$svg$Svg$Attributes$strokeLinejoin('round'),
				elm$svg$Svg$Attributes$strokeWidth(
				elm$core$String$fromFloat(attrs.strokeWidth)),
				elm$svg$Svg$Attributes$viewBox(attrs.viewBox)
			]);
		var combinedAttributes = _Utils_ap(
			function () {
				var _n1 = attrs._class;
				if (_n1.$ === 'Just') {
					var c = _n1.a;
					return A2(
						elm$core$List$cons,
						elm$svg$Svg$Attributes$class(c),
						baseAttributes);
				} else {
					return baseAttributes;
				}
			}(),
			attributes);
		return A2(
			elm$svg$Svg$svg,
			combinedAttributes,
			A2(
				elm$core$List$map,
				elm$svg$Svg$map(elm$core$Basics$never),
				src));
	});
var author$project$Icons$mkIcon = function (icon) {
	return F2(
		function (color, size) {
			return A2(
				feathericons$elm_feather$FeatherIcons$toHtml,
				_List_fromArray(
					[
						A2(
						elm$html$Html$Attributes$style,
						'color',
						avh4$elm_color$Color$toCssString(color))
					]),
				icon);
		});
};
var elm$svg$Svg$circle = elm$svg$Svg$trustedNode('circle');
var elm$svg$Svg$line = elm$svg$Svg$trustedNode('line');
var elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var elm$svg$Svg$Attributes$x1 = _VirtualDom_attribute('x1');
var elm$svg$Svg$Attributes$x2 = _VirtualDom_attribute('x2');
var elm$svg$Svg$Attributes$y1 = _VirtualDom_attribute('y1');
var elm$svg$Svg$Attributes$y2 = _VirtualDom_attribute('y2');
var feathericons$elm_feather$FeatherIcons$Icon = function (a) {
	return {$: 'Icon', a: a};
};
var feathericons$elm_feather$FeatherIcons$defaultAttributes = function (name) {
	return {
		_class: elm$core$Maybe$Just('feather feather-' + name),
		size: 24,
		sizeUnit: '',
		strokeWidth: 2,
		viewBox: '0 0 24 24'
	};
};
var feathericons$elm_feather$FeatherIcons$makeBuilder = F2(
	function (name, src) {
		return feathericons$elm_feather$FeatherIcons$Icon(
			{
				attrs: feathericons$elm_feather$FeatherIcons$defaultAttributes(name),
				src: src
			});
	});
var feathericons$elm_feather$FeatherIcons$aperture = A2(
	feathericons$elm_feather$FeatherIcons$makeBuilder,
	'aperture',
	_List_fromArray(
		[
			A2(
			elm$svg$Svg$circle,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$cx('12'),
					elm$svg$Svg$Attributes$cy('12'),
					elm$svg$Svg$Attributes$r('10')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$line,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1('14.31'),
					elm$svg$Svg$Attributes$y1('8'),
					elm$svg$Svg$Attributes$x2('20.05'),
					elm$svg$Svg$Attributes$y2('17.94')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$line,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1('9.69'),
					elm$svg$Svg$Attributes$y1('8'),
					elm$svg$Svg$Attributes$x2('21.17'),
					elm$svg$Svg$Attributes$y2('8')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$line,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1('7.38'),
					elm$svg$Svg$Attributes$y1('12'),
					elm$svg$Svg$Attributes$x2('13.12'),
					elm$svg$Svg$Attributes$y2('2.06')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$line,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1('9.69'),
					elm$svg$Svg$Attributes$y1('16'),
					elm$svg$Svg$Attributes$x2('3.95'),
					elm$svg$Svg$Attributes$y2('6.06')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$line,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1('14.31'),
					elm$svg$Svg$Attributes$y1('16'),
					elm$svg$Svg$Attributes$x2('2.83'),
					elm$svg$Svg$Attributes$y2('16')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$line,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1('16.62'),
					elm$svg$Svg$Attributes$y1('12'),
					elm$svg$Svg$Attributes$x2('10.88'),
					elm$svg$Svg$Attributes$y2('21.94')
				]),
			_List_Nil)
		]));
var author$project$Icons$categoryIcon = author$project$Icons$mkIcon(feathericons$elm_feather$FeatherIcons$aperture);
var elm$svg$Svg$path = elm$svg$Svg$trustedNode('path');
var elm$svg$Svg$polyline = elm$svg$Svg$trustedNode('polyline');
var elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var feathericons$elm_feather$FeatherIcons$checkCircle = A2(
	feathericons$elm_feather$FeatherIcons$makeBuilder,
	'check-circle',
	_List_fromArray(
		[
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$d('M22 11.08V12a10 10 0 1 1-5.93-9.14')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$polyline,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$points('22 4 12 14.01 9 11.01')
				]),
			_List_Nil)
		]));
var author$project$Icons$check_circle = author$project$Icons$mkIcon(feathericons$elm_feather$FeatherIcons$checkCircle);
var feathericons$elm_feather$FeatherIcons$helpCircle = A2(
	feathericons$elm_feather$FeatherIcons$makeBuilder,
	'help-circle',
	_List_fromArray(
		[
			A2(
			elm$svg$Svg$circle,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$cx('12'),
					elm$svg$Svg$Attributes$cy('12'),
					elm$svg$Svg$Attributes$r('10')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$path,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$d('M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3')
				]),
			_List_Nil),
			A2(
			elm$svg$Svg$line,
			_List_fromArray(
				[
					elm$svg$Svg$Attributes$x1('12'),
					elm$svg$Svg$Attributes$y1('17'),
					elm$svg$Svg$Attributes$x2('12'),
					elm$svg$Svg$Attributes$y2('17')
				]),
			_List_Nil)
		]));
var feathericons$elm_feather$FeatherIcons$withSize = F2(
	function (size, _n0) {
		var attrs = _n0.a.attrs;
		var src = _n0.a.src;
		return feathericons$elm_feather$FeatherIcons$Icon(
			{
				attrs: _Utils_update(
					attrs,
					{size: size}),
				src: src
			});
	});
var author$project$Icons$questionIconCollapsed = author$project$Icons$mkIcon(
	A2(feathericons$elm_feather$FeatherIcons$withSize, 16, feathericons$elm_feather$FeatherIcons$helpCircle));
var author$project$Icons$questionIconExpanded = author$project$Icons$mkIcon(feathericons$elm_feather$FeatherIcons$helpCircle);
var author$project$Question$Optics$activeOfOption = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (o) {
				return o.active;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{active: newValue});
				}))),
	path: _List_fromArray(
		['active'])
};
var author$project$Question$Optics$activeOfQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (_n0) {
				var q = _n0.a;
				return q.active;
			},
			F2(
				function (a, _n1) {
					var q = _n1.a;
					return author$project$Question$Model$Question(
						_Utils_update(
							q,
							{active: a}));
				}))),
	path: _List_fromArray(
		['active'])
};
var author$project$Question$Optics$collapsedOfQuestion = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function (_n0) {
				var q = _n0.a;
				return q.collapsed;
			},
			F2(
				function (a, _n1) {
					var q = _n1.a;
					return author$project$Question$Model$Question(
						_Utils_update(
							q,
							{collapsed: a}));
				}))),
	path: _List_fromArray(
		['collapsed'])
};
var avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 'RgbaSpace', a: a, b: b, c: c, d: d};
	});
var avh4$elm_color$Color$black = A4(avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var avh4$elm_color$Color$red = A4(avh4$elm_color$Color$RgbaSpace, 204 / 255, 0 / 255, 0 / 255, 1.0);
var author$project$ViewHelpers$treeIcon = F2(
	function (icon, active) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'vertical-align', 'sub'),
					A2(elm$html$Html$Attributes$style, 'padding-right', '5px')
				]),
			_List_fromArray(
				[
					A2(
					icon,
					active ? avh4$elm_color$Color$red : avh4$elm_color$Color$black,
					20)
				]));
	});
var author$project$ViewHelpers$treeIcon2 = F5(
	function (iconExpanded, iconCollapsed, active, collapsed, toggleCollapsed) {
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'vertical-align', 'sub'),
					A2(elm$html$Html$Attributes$style, 'padding-right', '5px'),
					elm$html$Html$Events$onClick(toggleCollapsed)
				]),
			_List_fromArray(
				[
					A2(
					collapsed ? iconCollapsed : iconExpanded,
					active ? avh4$elm_color$Color$red : avh4$elm_color$Color$black,
					20)
				]));
	});
var author$project$ViewHelpers$treeViewButtons = F2(
	function (buttons, model) {
		var makeButton = function (_n0) {
			var title = _n0.a;
			var action = _n0.b;
			return A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('btn btn-outline-primary btn-sm'),
						elm$html$Html$Events$onClick(action)
					]),
				_List_fromArray(
					[
						elm$html$Html$text(title)
					]));
		};
		return A2(
			elm$html$Html$span,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('float-right'),
					A2(
					elm$html$Html$Attributes$style,
					'display',
					model.active ? '' : 'none')
				]),
			A2(elm$core$List$map, makeButton, buttons));
	});
var elm$core$Basics$neq = _Utils_notEqual;
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$p = _VirtualDom_node('p');
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var elm$html$Html$Events$onMouseOut = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseout',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseOver = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseover',
		elm$json$Json$Decode$succeed(msg));
};
var rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var rundis$elm_bootstrap$Bootstrap$ListGroup$attrs = function (attrs_) {
	return rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Attrs(attrs_);
};
var elm$html$Html$li = _VirtualDom_node('li');
var rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Item = function (a) {
	return {$: 'Item', a: a};
};
var rundis$elm_bootstrap$Bootstrap$ListGroup$li = F2(
	function (options, children) {
		return rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$Item(
			{children: children, itemFn: elm$html$Html$li, options: options});
	});
var elm$html$Html$ul = _VirtualDom_node('ul');
var rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Roled':
				var role = modifier.a;
				return _Utils_update(
					options,
					{
						role: elm$core$Maybe$Just(role)
					});
			case 'Action':
				return _Utils_update(
					options,
					{action: true});
			case 'Disabled':
				return _Utils_update(
					options,
					{disabled: true});
			case 'Active':
				return _Utils_update(
					options,
					{active: true});
			default:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$defaultOptions = {action: false, active: false, attributes: _List_Nil, disabled: false, role: elm$core$Maybe$Nothing};
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$html$Html$Attributes$classList = function (classes) {
	return elm$html$Html$Attributes$class(
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				elm$core$Tuple$first,
				A2(elm$core$List$filter, elm$core$Tuple$second, classes))));
};
var elm$html$Html$Attributes$disabled = elm$html$Html$Attributes$boolProperty('disabled');
var rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass = F2(
	function (prefix, role) {
		return elm$html$Html$Attributes$class(
			prefix + ('-' + function () {
				switch (role.$) {
					case 'Primary':
						return 'primary';
					case 'Secondary':
						return 'secondary';
					case 'Success':
						return 'success';
					case 'Info':
						return 'info';
					case 'Warning':
						return 'warning';
					case 'Danger':
						return 'danger';
					case 'Light':
						return 'light';
					default:
						return 'dark';
				}
			}()));
	});
var rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$itemAttributes = function (options) {
	return _Utils_ap(
		_List_fromArray(
			[
				elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('list-group-item', true),
						_Utils_Tuple2('disabled', options.disabled),
						_Utils_Tuple2('active', options.active),
						_Utils_Tuple2('list-group-item-action', options.action)
					]))
			]),
		_Utils_ap(
			_List_fromArray(
				[
					elm$html$Html$Attributes$disabled(options.disabled)
				]),
			_Utils_ap(
				A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						elm$core$Maybe$map,
						function (r) {
							return _List_fromArray(
								[
									A2(rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'list-group-item', r)
								]);
						},
						options.role)),
				options.attributes)));
};
var rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$renderItem = function (_n0) {
	var itemFn = _n0.a.itemFn;
	var options = _n0.a.options;
	var children = _n0.a.children;
	return A2(
		itemFn,
		rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$itemAttributes(
			A3(elm$core$List$foldl, rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$applyModifier, rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$defaultOptions, options)),
		children);
};
var rundis$elm_bootstrap$Bootstrap$ListGroup$ul = function (items) {
	return A2(
		elm$html$Html$ul,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('list-group')
			]),
		A2(elm$core$List$map, rundis$elm_bootstrap$Bootstrap$Internal$ListGroup$renderItem, items));
};
function author$project$Question$TreeView$cyclic$optionsView() {
	return author$project$ViewComponent$eval(
		F4(
			function (model, modelTraits, focus, options) {
				var makeOptionView = function (option) {
					var focus_ = A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$optionOfOptionsList(option.id),
						focus);
					var setActiveFlag = function (isActive) {
						return modelTraits.makeMsg(
							A2(author$project$Optics$composeFocus, author$project$Question$Optics$activeOfOption, focus_).optional.set(isActive));
					};
					var deleteOptionMsg = modelTraits.makeMsg(
						focus.optional.set(
							A2(
								elm$core$List$filter,
								function (o) {
									return !_Utils_eq(o.id, option.id);
								},
								options)));
					var address = elm$html$Html$Attributes$href(
						'#' + A2(elm$core$String$join, '/', focus_.path));
					var addFollowUpMsg = modelTraits.makeIdMsg(
						function (id) {
							return A2(
								author$project$Optics$composeFocus,
								author$project$Question$Optics$questionOfQuestionList(id),
								A2(author$project$Optics$composeFocus, author$project$Question$Optics$followUpQuestionsOfOption, focus_)).optional.set(
								author$project$Question$Model$makeQuestion(id));
						});
					return A2(
						rundis$elm_bootstrap$Bootstrap$ListGroup$li,
						_List_fromArray(
							[
								rundis$elm_bootstrap$Bootstrap$ListGroup$attrs(
								_List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'border', '0')
									]))
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Events$onMouseOver(
										setActiveFlag(true)),
										elm$html$Html$Events$onMouseOut(
										setActiveFlag(false))
									]),
								_List_fromArray(
									[
										A2(author$project$ViewHelpers$treeIcon, author$project$Icons$check_circle, option.active),
										A2(
										elm$html$Html$a,
										_List_fromArray(
											[address]),
										_List_fromArray(
											[
												elm$html$Html$text(option.text)
											])),
										A2(
										author$project$ViewHelpers$treeViewButtons,
										_List_fromArray(
											[
												_Utils_Tuple2('Delete Option', deleteOptionMsg),
												_Utils_Tuple2('Add Followup Question', addFollowUpMsg)
											]),
										option)
									])),
								A3(
								author$project$Question$TreeView$cyclic$questionsView(),
								model,
								modelTraits,
								A2(
									author$project$Optics$composeFocus,
									author$project$Question$Optics$followUpQuestionsOfOption,
									A2(
										author$project$Optics$composeFocus,
										author$project$Question$Optics$optionOfOptionsList(option.id),
										focus)))
							]));
				};
				return rundis$elm_bootstrap$Bootstrap$ListGroup$ul(
					A2(elm$core$List$map, makeOptionView, options));
			}));
}
function author$project$Question$TreeView$cyclic$questionsView() {
	return author$project$ViewComponent$eval(
		F4(
			function (model, modelTraits, focus, questions) {
				var makeQuestionView = function (_n3) {
					var question = _n3.a;
					var focus_ = A2(
						author$project$Optics$composeFocus,
						author$project$Question$Optics$questionOfQuestionList(question.id),
						focus);
					var setActiveFlag = function (isActive) {
						return modelTraits.makeMsg(
							A2(author$project$Optics$composeFocus, author$project$Question$Optics$activeOfQuestion, focus_).optional.set(isActive));
					};
					var toggleCollapsed = modelTraits.makeMsg(
						A2(
							arturopala$elm_monocle$Monocle$Optional$modify,
							A2(author$project$Optics$composeFocus, author$project$Question$Optics$collapsedOfQuestion, focus_).optional,
							elm$core$Basics$not));
					var deleteQuestionMsg = modelTraits.makeMsg(
						focus.optional.set(
							A2(
								elm$core$List$filter,
								function (_n2) {
									var q = _n2.a;
									return !_Utils_eq(q.id, question.id);
								},
								questions)));
					var address = elm$html$Html$Attributes$href(
						'#' + A2(elm$core$String$join, '/', focus_.path));
					return A2(
						rundis$elm_bootstrap$Bootstrap$ListGroup$li,
						_List_fromArray(
							[
								rundis$elm_bootstrap$Bootstrap$ListGroup$attrs(
								_List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'border', '0')
									]))
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$p,
								_List_fromArray(
									[
										elm$html$Html$Events$onMouseOver(
										setActiveFlag(true)),
										elm$html$Html$Events$onMouseOut(
										setActiveFlag(false))
									]),
								_List_fromArray(
									[
										A5(author$project$ViewHelpers$treeIcon2, author$project$Icons$questionIconExpanded, author$project$Icons$questionIconCollapsed, question.active, question.collapsed, toggleCollapsed),
										A2(
										elm$html$Html$a,
										_List_fromArray(
											[address]),
										_List_fromArray(
											[
												elm$html$Html$text(question.title)
											])),
										A2(
										author$project$ViewHelpers$treeViewButtons,
										_List_fromArray(
											[
												_Utils_Tuple2('Delete Question', deleteQuestionMsg)
											]),
										question)
									])),
								question.collapsed ? elm$html$Html$text('') : A3(
								author$project$Question$TreeView$cyclic$subQuestionsView(),
								model,
								modelTraits,
								A2(
									author$project$Optics$composeFocus,
									author$project$Question$Optics$questionOfQuestionList(question.id),
									focus))
							]));
				};
				return rundis$elm_bootstrap$Bootstrap$ListGroup$ul(
					A2(elm$core$List$map, makeQuestionView, questions));
			}));
}
function author$project$Question$TreeView$cyclic$subQuestionsView() {
	return author$project$ViewComponent$eval(
		F4(
			function (model, modelTraits, focus, _n0) {
				var question = _n0.a;
				var _n1 = question.questionType;
				switch (_n1.$) {
					case 'QuestionGroup':
						return A3(
							author$project$Question$TreeView$cyclic$questionsView(),
							model,
							modelTraits,
							A2(
								author$project$Optics$composeFocus,
								author$project$Question$Optics$questionsOfGroupQuestion,
								A2(
									author$project$Optics$composeFocus,
									author$project$Question$Optics$questionGroupOfQuestion,
									A2(author$project$Optics$composeFocus, author$project$Question$Optics$questionTypeOfQuestion, focus))));
					case 'SelectQuestion':
						return A3(
							author$project$Question$TreeView$cyclic$optionsView(),
							model,
							modelTraits,
							A2(
								author$project$Optics$composeFocus,
								author$project$Question$Optics$optionsOfSelectQuestion,
								A2(
									author$project$Optics$composeFocus,
									author$project$Question$Optics$selectQuestionOfQuestion,
									A2(author$project$Optics$composeFocus, author$project$Question$Optics$questionTypeOfQuestion, focus))));
					default:
						return elm$html$Html$text('');
				}
			}));
}
try {
	var author$project$Question$TreeView$optionsView = author$project$Question$TreeView$cyclic$optionsView();
	author$project$Question$TreeView$cyclic$optionsView = function () {
		return author$project$Question$TreeView$optionsView;
	};
	var author$project$Question$TreeView$questionsView = author$project$Question$TreeView$cyclic$questionsView();
	author$project$Question$TreeView$cyclic$questionsView = function () {
		return author$project$Question$TreeView$questionsView;
	};
	var author$project$Question$TreeView$subQuestionsView = author$project$Question$TreeView$cyclic$subQuestionsView();
	author$project$Question$TreeView$cyclic$subQuestionsView = function () {
		return author$project$Question$TreeView$subQuestionsView;
	};
} catch ($) {
throw 'Some top-level definitions from `Question.TreeView` are causing infinite recursion:\n\n  ┌─────┐\n  │    optionsView\n  │     ↓\n  │    questionsView\n  │     ↓\n  │    subQuestionsView\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var author$project$QuestionCategory$Optics$activeOfQuestionCategory = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.active;
			},
			F2(
				function (a, qc) {
					return _Utils_update(
						qc,
						{active: a});
				}))),
	path: _List_fromArray(
		['active'])
};
var author$project$QuestionCategory$TreeView$questionCategoriesView = author$project$ViewComponent$eval(
	F4(
		function (model, modelTraits, focus, questionCategories) {
			var makeQuestionCategoryView = function (questionCategory) {
				var questionCategoryName = author$project$QuestionCategory$Model$categoryTypeToString(questionCategory.categoryType);
				var focus_ = A2(
					author$project$Optics$composeFocus,
					author$project$QuestionCategory$Optics$questionCategoryOfQuestionCategoryList(questionCategory.categoryType),
					focus);
				var setActiveFlag = function (isActive) {
					return modelTraits.makeMsg(
						A2(author$project$Optics$composeFocus, author$project$QuestionCategory$Optics$activeOfQuestionCategory, focus_).optional.set(isActive));
				};
				var address = elm$html$Html$Attributes$href(
					'#' + A2(elm$core$String$join, '/', focus_.path));
				var addNewQuestionToCategory = modelTraits.makeIdMsg(
					function (id) {
						return A2(
							author$project$Optics$composeFocus,
							author$project$Question$Optics$questionOfQuestionList(id),
							A2(author$project$Optics$composeFocus, author$project$QuestionCategory$Optics$questionsOfQuestionCategory, focus_)).optional.set(
							author$project$Question$Model$makeQuestion(id));
					});
				return A2(
					rundis$elm_bootstrap$Bootstrap$ListGroup$li,
					_List_fromArray(
						[
							rundis$elm_bootstrap$Bootstrap$ListGroup$attrs(
							_List_fromArray(
								[
									A2(elm$html$Html$Attributes$style, 'border', '0')
								]))
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$p,
							_List_fromArray(
								[
									elm$html$Html$Events$onMouseOver(
									setActiveFlag(true)),
									elm$html$Html$Events$onMouseOut(
									setActiveFlag(false))
								]),
							_List_fromArray(
								[
									A2(author$project$ViewHelpers$treeIcon, author$project$Icons$categoryIcon, questionCategory.active),
									A2(
									elm$html$Html$a,
									_List_fromArray(
										[address]),
									_List_fromArray(
										[
											elm$html$Html$text(questionCategoryName)
										])),
									A2(
									author$project$ViewHelpers$treeViewButtons,
									_List_fromArray(
										[
											_Utils_Tuple2('Add Question', addNewQuestionToCategory)
										]),
									questionCategory)
								])),
							A3(
							author$project$Question$TreeView$questionsView,
							model,
							modelTraits,
							A2(author$project$Optics$composeFocus, author$project$QuestionCategory$Optics$questionsOfQuestionCategory, focus_))
						]));
			};
			return A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						rundis$elm_bootstrap$Bootstrap$ListGroup$ul(
						A2(elm$core$List$map, makeQuestionCategoryView, questionCategories))
					]));
		}));
var author$project$QuestionTemplate$Optics$nameOfQuestionTemplate = {
	optional: arturopala$elm_monocle$Monocle$Optional$fromLens(
		A2(
			arturopala$elm_monocle$Monocle$Lens$Lens,
			function ($) {
				return $.name;
			},
			F2(
				function (newValue, o) {
					return _Utils_update(
						o,
						{name: newValue});
				}))),
	path: _List_fromArray(
		['name'])
};
var author$project$QuestionTemplate$Views$questionTemplateView = author$project$ViewComponent$eval(
	F4(
		function (model, modelTraits, focus, questionTemplate) {
			var updateQuestionTemplateName = function (s) {
				return modelTraits.makeMsg(
					A2(author$project$Optics$composeFocus, author$project$QuestionTemplate$Optics$nameOfQuestionTemplate, focus).optional.set(s));
			};
			return A2(
				author$project$ViewHelpers$panel,
				'Question Template Hierarchy',
				A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A5(author$project$ViewHelpers$formTextInput, 'questionTemplateNameInput', 'Template Name', questionTemplate.name, elm$core$Maybe$Nothing, updateQuestionTemplateName),
							A3(
							author$project$QuestionCategory$TreeView$questionCategoriesView,
							model,
							modelTraits,
							A2(author$project$Optics$composeFocus, author$project$QuestionTemplate$Optics$categoriesOfQuestionTemplate, focus))
						])));
		}));
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var elm$html$Html$Attributes$rel = _VirtualDom_attribute('rel');
var rundis$elm_bootstrap$Bootstrap$CDN$stylesheet = A3(
	elm$html$Html$node,
	'link',
	_List_fromArray(
		[
			elm$html$Html$Attributes$rel('stylesheet'),
			elm$html$Html$Attributes$href('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css')
		]),
	_List_Nil);
var rundis$elm_bootstrap$Bootstrap$Grid$container = F2(
	function (attributes, children) {
		return A2(
			elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('container')
					]),
				attributes),
			children);
	});
var author$project$Main$view = function (model) {
	var rootView = function () {
		var modelTraits = {
			makeIdMsg: A2(elm$core$Basics$composeL, author$project$Main$UpdateModel, author$project$Main$withNewId),
			makeMsg: author$project$Main$UpdateModel
		};
		var questionDetailsView_ = function () {
			var _n0 = author$project$Main$routeToSelectedEntity(model.route);
			switch (_n0.$) {
				case 'Category':
					var focus = _n0.a;
					return A3(author$project$QuestionCategory$DetailsView$questionCategoryDetailsView, model, modelTraits, focus);
				case 'Question':
					var focus = _n0.a;
					return A3(author$project$Question$QuestionDetailsView$questionDetailsView, model, modelTraits, focus);
				case 'Option':
					var focus = _n0.a;
					return A3(author$project$Question$OptionDetailsView$optionDetailsView, model, modelTraits, focus);
				default:
					return elm$html$Html$text('');
			}
		}();
		var questionTemplateView_ = A3(author$project$QuestionTemplate$Views$questionTemplateView, model, modelTraits, author$project$Main$questionTemplateOfModel);
		var menuView_ = A4(author$project$Menu$menuView, author$project$Main$MenuAction, model, modelTraits, author$project$Main$menuStateOfModel);
		var jsonModelView_ = A3(author$project$JsonModel$DetailsView$jsonModelView, model, modelTraits, author$project$Main$questionTemplateOfModel);
		return A2(
			rundis$elm_bootstrap$Bootstrap$Grid$container,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'background-color', '#333'),
					A2(elm$html$Html$Attributes$style, 'max-width', '100%')
				]),
			_List_fromArray(
				[
					rundis$elm_bootstrap$Bootstrap$CDN$stylesheet,
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('row')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('col')
								]),
							_List_fromArray(
								[menuView_]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('row')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('col-7')
								]),
							_List_fromArray(
								[questionTemplateView_])),
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('col-5')
								]),
							_List_fromArray(
								[questionDetailsView_]))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('row')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('col')
								]),
							_List_fromArray(
								[jsonModelView_]))
						]))
				]));
	}();
	return {
		body: _List_fromArray(
			[rootView]),
		title: 'Compliance Template Editor'
	};
};
var elm$browser$Browser$application = _Browser_application;
var author$project$Main$main = elm$browser$Browser$application(
	{init: author$project$Main$init, onUrlChange: author$project$Main$ChangedUrl, onUrlRequest: author$project$Main$ClickedLink, subscriptions: author$project$Main$subscriptions, update: author$project$Main$update, view: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));