/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_angular_angular_min__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_angular_angular_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_angular_angular_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_angular_animate_angular_animate_min__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_angular_animate_angular_animate_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_angular_animate_angular_animate_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_angular_sanitize_angular_sanitize_min__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_angular_sanitize_angular_sanitize_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_angular_sanitize_angular_sanitize_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_angular_ui_router_release_angular_ui_router_min__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_angular_ui_router_release_angular_ui_router_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_angular_ui_router_release_angular_ui_router_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_ionic_js_ionic_min__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_ionic_js_ionic_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__lib_ionic_js_ionic_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_ionic_js_ionic_angular_min__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_ionic_js_ionic_angular_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__lib_ionic_js_ionic_angular_min__);







var app = angular.module('starter', ['ionic']).run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ionic_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_test_test_component__ = __webpack_require__(11);





/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (T, P, u) {
  'use strict';
  function O(a) {
    return function () {
      var b = arguments[0],
          d;d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.3/" + (a ? a + "/" : "") + b;for (b = 1; b < arguments.length; b++) {
        d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";var c = encodeURIComponent,
            e;e = arguments[b];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;d += c(e);
      }return Error(d);
    };
  }function za(a) {
    if (null == a || Ya(a)) return !1;if (M(a) || y(a) || H && a instanceof H) return !0;
    var b = "length" in Object(a) && a.length;return R(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
  }function q(a, b, d) {
    var c, e;if (a) if (D(a)) for (c in a) {
      "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
    } else if (M(a) || za(a)) {
      var f = "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a));c = 0;for (e = a.length; c < e; c++) {
        (f || c in a) && b.call(d, a[c], c, a);
      }
    } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (oc(a)) for (c in a) {
      b.call(d, a[c], c, a);
    } else if ("function" === typeof a.hasOwnProperty) for (c in a) {
      a.hasOwnProperty(c) && b.call(d, a[c], c, a);
    } else for (c in a) {
      va.call(a, c) && b.call(d, a[c], c, a);
    }return a;
  }function pc(a, b, d) {
    for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) {
      b.call(d, a[c[e]], c[e]);
    }return c;
  }function qc(a) {
    return function (b, d) {
      a(d, b);
    };
  }function Wd() {
    return ++qb;
  }function Ob(a, b, d) {
    for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
      var g = b[e];if (J(g) || D(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
        var m = h[k],
            n = g[m];d && J(n) ? fa(n) ? a[m] = new Date(n.valueOf()) : Za(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Pb(n) ? a[m] = n.clone() : (J(a[m]) || (a[m] = M(n) ? [] : {}), Ob(a[m], [n], !0)) : a[m] = n;
      }
    }c ? a.$$hashKey = c : delete a.$$hashKey;return a;
  }function S(a) {
    return Ob(a, Aa.call(arguments, 1), !1);
  }function Xd(a) {
    return Ob(a, Aa.call(arguments, 1), !0);
  }function Y(a) {
    return parseInt(a, 10);
  }function Qb(a, b) {
    return S(Object.create(a), b);
  }function E() {}function $a(a) {
    return a;
  }function da(a) {
    return function () {
      return a;
    };
  }function rc(a) {
    return D(a.toString) && a.toString !== ka;
  }function z(a) {
    return "undefined" === typeof a;
  }function A(a) {
    return "undefined" !== typeof a;
  }function J(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a));
  }function oc(a) {
    return null !== a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && !sc(a);
  }function y(a) {
    return "string" === typeof a;
  }function R(a) {
    return "number" === typeof a;
  }function fa(a) {
    return "[object Date]" === ka.call(a);
  }function D(a) {
    return "function" === typeof a;
  }function Za(a) {
    return "[object RegExp]" === ka.call(a);
  }function Ya(a) {
    return a && a.window === a;
  }function ab(a) {
    return a && a.$evalAsync && a.$watch;
  }function Oa(a) {
    return "boolean" === typeof a;
  }function Yd(a) {
    return a && R(a.length) && Zd.test(ka.call(a));
  }function Pb(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
  }function $d(a) {
    var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) {
      b[a[d]] = !0;
    }return b;
  }function oa(a) {
    return N(a.nodeName || a[0] && a[0].nodeName);
  }function bb(a, b) {
    var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
  }function pa(a, b) {
    function d(a, b) {
      var d = b.$$hashKey,
          e;if (M(a)) {
        e = 0;for (var f = a.length; e < f; e++) {
          b.push(c(a[e]));
        }
      } else if (oc(a)) for (e in a) {
        b[e] = c(a[e]);
      } else if (a && "function" === typeof a.hasOwnProperty) for (e in a) {
        a.hasOwnProperty(e) && (b[e] = c(a[e]));
      } else for (e in a) {
        va.call(a, e) && (b[e] = c(a[e]));
      }d ? b.$$hashKey = d : delete b.$$hashKey;return b;
    }function c(a) {
      if (!J(a)) return a;var b = f.indexOf(a);if (-1 !== b) return g[b];if (Ya(a) || ab(a)) throw Ba("cpws");var b = !1,
          c = e(a);c === u && (c = M(a) ? [] : Object.create(sc(a)), b = !0);f.push(a);g.push(c);return b ? d(a, c) : c;
    }function e(a) {
      switch (ka.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
          return new a.constructor(c(a.buffer));
        case "[object ArrayBuffer]":
          if (!a.slice) {
            var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
          }return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
          return new a.constructor(a.valueOf());case "[object RegExp]":
          return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
          return new a.constructor([a], { type: a.type });}if (D(a.cloneNode)) return a.cloneNode(!0);
    }var f = [],
        g = [];if (b) {
      if (Yd(b) || "[object ArrayBuffer]" === ka.call(b)) throw Ba("cpta");if (a === b) throw Ba("cpi");M(b) ? b.length = 0 : q(b, function (a, c) {
        "$$hashKey" !== c && delete b[c];
      });f.push(a);g.push(b);return d(a, b);
    }return c(a);
  }function ia(a, b) {
    if (M(a)) {
      b = b || [];for (var d = 0, c = a.length; d < c; d++) {
        b[d] = a[d];
      }
    } else if (J(a)) for (d in b = b || {}, a) {
      if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
    }return b || a;
  }function na(a, b) {
    if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a === "undefined" ? "undefined" : _typeof(a),
        c;if (d == (typeof b === "undefined" ? "undefined" : _typeof(b)) && "object" == d) if (M(a)) {
      if (!M(b)) return !1;if ((d = a.length) == b.length) {
        for (c = 0; c < d; c++) {
          if (!na(a[c], b[c])) return !1;
        }return !0;
      }
    } else {
      if (fa(a)) return fa(b) ? na(a.getTime(), b.getTime()) : !1;if (Za(a)) return Za(b) ? a.toString() == b.toString() : !1;if (ab(a) || ab(b) || Ya(a) || Ya(b) || M(b) || fa(b) || Za(b)) return !1;d = V();for (c in a) {
        if ("$" !== c.charAt(0) && !D(a[c])) {
          if (!na(a[c], b[c])) return !1;d[c] = !0;
        }
      }for (c in b) {
        if (!(c in d) && "$" !== c.charAt(0) && A(b[c]) && !D(b[c])) return !1;
      }return !0;
    }return !1;
  }function cb(a, b, d) {
    return a.concat(Aa.call(b, d));
  }function tc(a, b) {
    var d = 2 < arguments.length ? Aa.call(arguments, 2) : [];return !D(b) || b instanceof RegExp ? b : d.length ? function () {
      return arguments.length ? b.apply(a, cb(d, arguments, 0)) : b.apply(a, d);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }function ae(a, b) {
    var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = u : Ya(b) ? d = "$WINDOW" : b && P === b ? d = "$DOCUMENT" : ab(b) && (d = "$SCOPE");return d;
  }function db(a, b) {
    if (z(a)) return u;R(b) || (b = b ? 2 : null);return JSON.stringify(a, ae, b);
  }function uc(a) {
    return y(a) ? JSON.parse(a) : a;
  }function vc(a, b) {
    a = a.replace(be, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return isNaN(d) ? b : d;
  }function Rb(a, b, d) {
    d = d ? -1 : 1;var c = a.getTimezoneOffset();b = vc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
  }function wa(a) {
    a = H(a).clone();try {
      a.empty();
    } catch (b) {}var d = H("<div>").append(a).html();try {
      return a[0].nodeType === Pa ? N(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + N(b);
      });
    } catch (c) {
      return N(d);
    }
  }function wc(a) {
    try {
      return decodeURIComponent(a);
    } catch (b) {}
  }
  function xc(a) {
    var b = {};q((a || "").split("&"), function (a) {
      var c, e, f;a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = wc(e), A(e) && (f = A(f) ? wc(f) : !0, va.call(b, e) ? M(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
    });return b;
  }function Sb(a) {
    var b = [];q(a, function (a, c) {
      M(a) ? q(a, function (a) {
        b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)));
      }) : b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)));
    });return b.length ? b.join("&") : "";
  }function rb(a) {
    return ja(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }function ja(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
  }function ce(a, b) {
    var d,
        c,
        e = Qa.length;for (c = 0; c < e; ++c) {
      if (d = Qa[c] + b, y(d = a.getAttribute(d))) return d;
    }return null;
  }function de(a, b) {
    var d,
        c,
        e = {};q(Qa, function (b) {
      b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
    });q(Qa, function (b) {
      b += "app";var e;!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
    });d && (e.strictDi = null !== ce(d, "strict-di"), b(d, c ? [c] : [], e));
  }function yc(a, b, d) {
    J(d) || (d = {});d = S({ strictDi: !1 }, d);var c = function c() {
      a = H(a);if (a.injector()) {
        var c = a[0] === P ? "document" : wa(a);throw Ba("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }b = b || [];b.unshift(["$provide", function (b) {
        b.value("$rootElement", a);
      }]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);b.unshift("ng");c = eb(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);c(b)(a);
        });
      }]);return c;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;T && e.test(T.name) && (d.debugInfoEnabled = !0, T.name = T.name.replace(e, ""));if (T && !f.test(T.name)) return c();T.name = T.name.replace(f, "");ea.resumeBootstrap = function (a) {
      q(a, function (a) {
        b.push(a);
      });return c();
    };D(ea.resumeDeferredBootstrap) && ea.resumeDeferredBootstrap();
  }function ee() {
    T.name = "NG_ENABLE_DEBUG_INFO!" + T.name;T.location.reload();
  }
  function fe(a) {
    a = ea.element(a).injector();if (!a) throw Ba("test");return a.get("$$testability");
  }function zc(a, b) {
    b = b || "_";return a.replace(ge, function (a, c) {
      return (c ? b : "") + a.toLowerCase();
    });
  }function he() {
    var a;if (!Ac) {
      var b = sb();($ = z(b) ? __webpack_provided_window_dot_jQuery : b ? T[b] : u) && $.fn.on ? (H = $, S($.fn, { scope: Ra.scope, isolateScope: Ra.isolateScope, controller: Ra.controller, injector: Ra.injector, inheritedData: Ra.inheritedData }), a = $.cleanData, $.cleanData = function (b) {
        for (var c, e = 0, f; null != (f = b[e]); e++) {
          (c = $._data(f, "events")) && c.$destroy && $(f).triggerHandler("$destroy");
        }a(b);
      }) : H = U;ea.element = H;Ac = !0;
    }
  }function tb(a, b, d) {
    if (!a) throw Ba("areq", b || "?", d || "required");return a;
  }function Sa(a, b, d) {
    d && M(a) && (a = a[a.length - 1]);tb(D(a), b, "not a function, got " + (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) ? a.constructor.name || "Object" : typeof a === "undefined" ? "undefined" : _typeof(a)));return a;
  }function Ta(a, b) {
    if ("hasOwnProperty" === a) throw Ba("badname", b);
  }function Bc(a, b, d) {
    if (!b) return a;b = b.split(".");for (var c, e = a, f = b.length, g = 0; g < f; g++) {
      c = b[g], a && (a = (e = a)[c]);
    }return !d && D(a) ? tc(e, a) : a;
  }function ub(a) {
    for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) {
      if (c || a[e] !== b) c || (c = H(Aa.call(a, 0, e))), c.push(b);
    }return c || a;
  }function V() {
    return Object.create(null);
  }function ie(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }var d = O("$injector"),
        c = O("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || O;return b(a, "module", function () {
      var a = {};return function (f, g, h) {
        if ("hasOwnProperty" === f) throw c("badname", "module");g && a.hasOwnProperty(f) && (a[f] = null);return b(a, f, function () {
          function a(b, d, e, f) {
            f || (f = c);return function () {
              f[e || "push"]([b, d, arguments]);return L;
            };
          }function b(a, d) {
            return function (b, e) {
              e && D(e) && (e.$$moduleName = f);c.push([a, d, arguments]);return L;
            };
          }if (!g) throw d("nomod", f);var c = [],
              e = [],
              p = [],
              F = a("$injector", "invoke", "push", e),
              L = { _invokeQueue: c, _configBlocks: e, _runBlocks: p, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: F, run: function run(a) {
              p.push(a);return this;
            } };h && F(h);return L;
        });
      };
    });
  }function je(a) {
    S(a, { bootstrap: yc, copy: pa, extend: S, merge: Xd, equals: na, element: H, forEach: q, injector: eb, noop: E, bind: tc, toJson: db, fromJson: uc, identity: $a, isUndefined: z, isDefined: A, isString: y, isFunction: D, isObject: J, isNumber: R, isElement: Pb, isArray: M,
      version: ke, isDate: fa, lowercase: N, uppercase: vb, callbacks: { counter: 0 }, getTestability: fe, $$minErr: O, $$csp: Ga, reloadWithDebugInfo: ee });Tb = ie(T);Tb("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({ $$sanitizeUri: le });a.provider("$compile", Cc).directive({ a: me, input: Dc, textarea: Dc, form: ne, script: oe, select: pe, style: qe, option: re, ngBind: se, ngBindHtml: te, ngBindTemplate: ue, ngClass: ve, ngClassEven: we, ngClassOdd: xe, ngCloak: ye, ngController: ze, ngForm: Ae, ngHide: Be, ngIf: Ce, ngInclude: De, ngInit: Ee, ngNonBindable: Fe,
        ngPluralize: Ge, ngRepeat: He, ngShow: Ie, ngStyle: Je, ngSwitch: Ke, ngSwitchWhen: Le, ngSwitchDefault: Me, ngOptions: Ne, ngTransclude: Oe, ngModel: Pe, ngList: Qe, ngChange: Re, pattern: Ec, ngPattern: Ec, required: Fc, ngRequired: Fc, minlength: Gc, ngMinlength: Gc, maxlength: Hc, ngMaxlength: Hc, ngValue: Se, ngModelOptions: Te }).directive({ ngInclude: Ue }).directive(wb).directive(Ic);a.provider({ $anchorScroll: Ve, $animate: We, $animateCss: Xe, $$animateJs: Ye, $$animateQueue: Ze, $$AnimateRunner: $e, $$animateAsyncRun: af, $browser: bf, $cacheFactory: cf,
        $controller: df, $document: ef, $exceptionHandler: ff, $filter: Jc, $$forceReflow: gf, $interpolate: hf, $interval: jf, $http: kf, $httpParamSerializer: lf, $httpParamSerializerJQLike: mf, $httpBackend: nf, $xhrFactory: of, $location: pf, $log: qf, $parse: rf, $rootScope: sf, $q: tf, $$q: uf, $sce: vf, $sceDelegate: wf, $sniffer: xf, $templateCache: yf, $templateRequest: zf, $$testability: Af, $timeout: Bf, $window: Cf, $$rAF: Df, $$jqLite: Ef, $$HashMap: Ff, $$cookieReader: Gf });
    }]);
  }function fb(a) {
    return a.replace(Hf, function (a, d, c, e) {
      return e ? c.toUpperCase() : c;
    }).replace(If, "Moz$1");
  }function Kc(a) {
    a = a.nodeType;return 1 === a || !a || 9 === a;
  }function Lc(a, b) {
    var d,
        c,
        e = b.createDocumentFragment(),
        f = [];if (Ub.test(a)) {
      d = d || e.appendChild(b.createElement("div"));c = (Jf.exec(a) || ["", ""])[1].toLowerCase();c = ha[c] || ha._default;d.innerHTML = c[1] + a.replace(Kf, "<$1></$2>") + c[2];for (c = c[0]; c--;) {
        d = d.lastChild;
      }f = cb(f, d.childNodes);d = e.firstChild;d.textContent = "";
    } else f.push(b.createTextNode(a));e.textContent = "";e.innerHTML = "";q(f, function (a) {
      e.appendChild(a);
    });return e;
  }function Mc(a, b) {
    var d = a.parentNode;d && d.replaceChild(b, a);b.appendChild(a);
  }function U(a) {
    if (a instanceof U) return a;var b;y(a) && (a = W(a), b = !0);if (!(this instanceof U)) {
      if (b && "<" != a.charAt(0)) throw Vb("nosel");return new U(a);
    }if (b) {
      b = P;var d;a = (d = Lf.exec(a)) ? [b.createElement(d[1])] : (d = Lc(a, b)) ? d.childNodes : [];
    }Nc(this, a);
  }function Wb(a) {
    return a.cloneNode(!0);
  }function xb(a, b) {
    b || gb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) {
      gb(d[c]);
    }
  }function Oc(a, b, d, c) {
    if (A(c)) throw Vb("offargs");
    var e = (c = yb(a)) && c.events,
        f = c && c.handle;if (f) if (b) {
      var g = function g(b) {
        var c = e[b];A(d) && bb(c || [], d);A(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
      };q(b.split(" "), function (a) {
        g(a);zb[a] && g(zb[a]);
      });
    } else for (b in e) {
      "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b];
    }
  }function gb(a, b) {
    var d = a.ng339,
        c = d && hb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Oc(a)), delete hb[d], a.ng339 = u));
  }function yb(a, b) {
    var d = a.ng339,
        d = d && hb[d];b && !d && (a.ng339 = d = ++Mf, d = hb[d] = { events: {}, data: {}, handle: u });return d;
  }function Xb(a, b, d) {
    if (Kc(a)) {
      var c = A(d),
          e = !c && b && !J(b),
          f = !b;a = (a = yb(a, !e)) && a.data;if (c) a[b] = d;else {
        if (f) return a;if (e) return a && a[b];S(a, b);
      }
    }
  }function Ab(a, b) {
    return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
  }function Bb(a, b) {
    b && a.setAttribute && q(b.split(" "), function (b) {
      a.setAttribute("class", W((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(b) + " ", " ")));
    });
  }function Cb(a, b) {
    if (b && a.setAttribute) {
      var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");q(b.split(" "), function (a) {
        a = W(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
      });a.setAttribute("class", W(d));
    }
  }function Nc(a, b) {
    if (b) if (b.nodeType) a[a.length++] = b;else {
      var d = b.length;if ("number" === typeof d && b.window !== b) {
        if (d) for (var c = 0; c < d; c++) {
          a[a.length++] = b[c];
        }
      } else a[a.length++] = b;
    }
  }function Pc(a, b) {
    return Db(a, "$" + (b || "ngController") + "Controller");
  }function Db(a, b, d) {
    9 == a.nodeType && (a = a.documentElement);for (b = M(b) ? b : [b]; a;) {
      for (var c = 0, e = b.length; c < e; c++) {
        if (A(d = H.data(a, b[c]))) return d;
      }a = a.parentNode || 11 === a.nodeType && a.host;
    }
  }function Qc(a) {
    for (xb(a, !0); a.firstChild;) {
      a.removeChild(a.firstChild);
    }
  }function Yb(a, b) {
    b || xb(a);var d = a.parentNode;d && d.removeChild(a);
  }function Nf(a, b) {
    b = b || T;if ("complete" === b.document.readyState) b.setTimeout(a);else H(b).on("load", a);
  }function Rc(a, b) {
    var d = Eb[b.toLowerCase()];return d && Sc[oa(a)] && d;
  }function Of(a, b) {
    var d = function d(c, _d) {
      c.isDefaultPrevented = function () {
        return c.defaultPrevented;
      };
      var f = b[_d || c.type],
          g = f ? f.length : 0;if (g) {
        if (z(c.immediatePropagationStopped)) {
          var h = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
            c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
          };
        }c.isImmediatePropagationStopped = function () {
          return !0 === c.immediatePropagationStopped;
        };var k = f.specialHandlerWrapper || Pf;1 < g && (f = ia(f));for (var l = 0; l < g; l++) {
          c.isImmediatePropagationStopped() || k(a, c, f[l]);
        }
      }
    };d.elem = a;return d;
  }function Pf(a, b, d) {
    d.call(a, b);
  }function Qf(a, b, d) {
    var c = b.relatedTarget;c && (c === a || Rf.call(a, c)) || d.call(a, b);
  }function Ef() {
    this.$get = function () {
      return S(U, { hasClass: function hasClass(a, b) {
          a.attr && (a = a[0]);return Ab(a, b);
        }, addClass: function addClass(a, b) {
          a.attr && (a = a[0]);return Cb(a, b);
        }, removeClass: function removeClass(a, b) {
          a.attr && (a = a[0]);return Bb(a, b);
        } });
    };
  }function Ha(a, b) {
    var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a === "undefined" ? "undefined" : _typeof(a);return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Wd)() : d + ":" + a;
  }function Ua(a, b) {
    if (b) {
      var d = 0;this.nextUid = function () {
        return ++d;
      };
    }q(a, this.put, this);
  }function Tc(a) {
    a = a.toString().replace(Sf, "");return a.match(Tf) || a.match(Uf);
  }function Vf(a) {
    return (a = Tc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }function eb(a, b) {
    function d(a) {
      return function (b, c) {
        if (J(b)) q(b, qc(a));else return a(b, c);
      };
    }function c(a, b) {
      Ta(a, "service");if (D(b) || M(b)) b = p.instantiate(b);if (!b.$get) throw Ia("pget", a);return n[a + "Provider"] = b;
    }function e(a, b) {
      return function () {
        var c = x.invoke(b, this);if (z(c)) throw Ia("undef", a);
        return c;
      };
    }function f(a, b, d) {
      return c(a, { $get: !1 !== d ? e(a, b) : b });
    }function g(a) {
      tb(z(a) || M(a), "modulesToLoad", "not an array");var b = [],
          c;q(a, function (a) {
        function d(a) {
          var b, c;b = 0;for (c = a.length; b < c; b++) {
            var e = a[b],
                f = p.get(e[0]);f[e[1]].apply(f, e[2]);
          }
        }if (!m.get(a)) {
          m.put(a, !0);try {
            y(a) ? (c = Tb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : D(a) ? b.push(p.invoke(a)) : M(a) ? b.push(p.invoke(a)) : Sa(a, "module");
          } catch (e) {
            throw M(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ia("modulerr", a, e.stack || e.message || e);
          }
        }
      });return b;
    }function h(a, c) {
      function d(b, e) {
        if (a.hasOwnProperty(b)) {
          if (a[b] === k) throw Ia("cdep", b + " <- " + l.join(" <- "));return a[b];
        }try {
          return l.unshift(b), a[b] = k, a[b] = c(b, e);
        } catch (f) {
          throw a[b] === k && delete a[b], f;
        } finally {
          l.shift();
        }
      }function e(a, c, f) {
        var g = [];a = eb.$$annotate(a, b, f);for (var h = 0, k = a.length; h < k; h++) {
          var l = a[h];if ("string" !== typeof l) throw Ia("itkn", l);g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
        }return g;
      }return { invoke: function invoke(a, b, c, d) {
          "string" === typeof c && (d = c, c = null);c = e(a, c, d);M(a) && (a = a[a.length - 1]);d = 11 >= Da ? !1 : "function" === typeof a && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a));return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
        }, instantiate: function instantiate(a, b, c) {
          var d = M(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
        }, get: d, annotate: eb.$$annotate, has: function has(b) {
          return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
        } };
    }b = !0 === b;var k = {},
        l = [],
        m = new Ua([], !0),
        n = { $provide: { provider: d(c), factory: d(f), service: d(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }), value: d(function (a, b) {
          return f(a, da(b), !1);
        }), constant: d(function (a, b) {
          Ta(a, "constant");n[a] = b;F[a] = b;
        }), decorator: function decorator(a, b) {
          var c = p.get(a + "Provider"),
              d = c.$get;c.$get = function () {
            var a = x.invoke(d, c);return x.invoke(b, null, { $delegate: a });
          };
        } } },
        p = n.$injector = h(n, function (a, b) {
      ea.isString(b) && l.push(b);
      throw Ia("unpr", l.join(" <- "));
    }),
        F = {},
        L = h(F, function (a, b) {
      var c = p.get(a + "Provider", b);return x.invoke(c.$get, c, u, a);
    }),
        x = L;n.$injectorProvider = { $get: da(L) };var r = g(a),
        x = L.get("$injector");x.strictDi = b;q(r, function (a) {
      a && x.invoke(a);
    });return x;
  }function Ve() {
    var a = !0;this.disableAutoScrolling = function () {
      a = !1;
    };this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
      function e(a) {
        var b = null;Array.prototype.some.call(a, function (a) {
          if ("a" === oa(a)) return b = a, !0;
        });return b;
      }function f(a) {
        if (a) {
          a.scrollIntoView();
          var c;c = g.yOffset;D(c) ? c = c() : Pb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : R(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
        } else b.scrollTo(0, 0);
      }function g(a) {
        a = y(a) ? a : d.hash();var b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }var h = b.document;a && c.$watch(function () {
        return d.hash();
      }, function (a, b) {
        a === b && "" === a || Nf(function () {
          c.$evalAsync(g);
        });
      });return g;
    }];
  }function ib(a, b) {
    if (!a && !b) return "";
    if (!a) return b;if (!b) return a;M(a) && (a = a.join(" "));M(b) && (b = b.join(" "));return a + " " + b;
  }function Wf(a) {
    y(a) && (a = a.split(" "));var b = V();q(a, function (a) {
      a.length && (b[a] = !0);
    });return b;
  }function Ja(a) {
    return J(a) ? a : {};
  }function Xf(a, b, d, c) {
    function e(a) {
      try {
        a.apply(null, Aa.call(arguments, 1));
      } finally {
        if (L--, 0 === L) for (; x.length;) {
          try {
            x.pop()();
          } catch (b) {
            d.error(b);
          }
        }
      }
    }function f() {
      t = null;g();h();
    }function g() {
      r = G();r = z(r) ? null : r;na(r, I) && (r = I);I = r;
    }function h() {
      if (v !== k.url() || w !== r) v = k.url(), w = r, q(C, function (a) {
        a(k.url(), r);
      });
    }var k = this,
        l = a.location,
        m = a.history,
        n = a.setTimeout,
        p = a.clearTimeout,
        F = {};k.isMock = !1;var L = 0,
        x = [];k.$$completeOutstandingRequest = e;k.$$incOutstandingRequestCount = function () {
      L++;
    };k.notifyWhenNoOutstandingRequests = function (a) {
      0 === L ? a() : x.push(a);
    };var r,
        w,
        v = l.href,
        Q = b.find("base"),
        t = null,
        G = c.history ? function () {
      try {
        return m.state;
      } catch (a) {}
    } : E;g();w = r;k.url = function (b, d, e) {
      z(e) && (e = null);l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
        var f = w === e;if (v === b && (!c.history || f)) return k;
        var h = v && Ka(v) === Ka(b);v = b;w = e;if (!c.history || h && f) {
          if (!h || t) t = b;d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b;l.href !== b && (t = b);
        } else m[d ? "replaceState" : "pushState"](e, "", b), g(), w = r;return k;
      }return t || l.href.replace(/%27/g, "'");
    };k.state = function () {
      return r;
    };var C = [],
        K = !1,
        I = null;k.onUrlChange = function (b) {
      if (!K) {
        if (c.history) H(a).on("popstate", f);H(a).on("hashchange", f);K = !0;
      }C.push(b);return b;
    };k.$$applicationDestroyed = function () {
      H(a).off("hashchange popstate", f);
    };
    k.$$checkUrlChange = h;k.baseHref = function () {
      var a = Q.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
    };k.defer = function (a, b) {
      var c;L++;c = n(function () {
        delete F[c];e(a);
      }, b || 0);F[c] = !0;return c;
    };k.defer.cancel = function (a) {
      return F[a] ? (delete F[a], p(a), e(E), !0) : !1;
    };
  }function bf() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
      return new Xf(a, c, b, d);
    }];
  }function cf() {
    this.$get = function () {
      function a(a, c) {
        function e(a) {
          a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }if (a in b) throw O("$cacheFactory")("iid", a);var g = 0,
            h = S({}, c, { id: a }),
            k = V(),
            l = c && c.capacity || Number.MAX_VALUE,
            m = V(),
            n = null,
            p = null;return b[a] = { put: function put(a, b) {
            if (!z(b)) {
              if (l < Number.MAX_VALUE) {
                var c = m[a] || (m[a] = { key: a });e(c);
              }a in k || g++;k[a] = b;g > l && this.remove(p.key);return b;
            }
          }, get: function get(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;e(b);
            }return k[a];
          }, remove: function remove(a) {
            if (l < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;b == n && (n = b.p);b == p && (p = b.n);f(b.n, b.p);delete m[a];
            }a in k && (delete k[a], g--);
          }, removeAll: function removeAll() {
            k = V();g = 0;m = V();n = p = null;
          }, destroy: function destroy() {
            m = h = k = null;delete b[a];
          }, info: function info() {
            return S({}, h, { size: g });
          } };
      }var b = {};a.info = function () {
        var a = {};q(b, function (b, e) {
          a[e] = b.info();
        });return a;
      };a.get = function (a) {
        return b[a];
      };return a;
    };
  }function yf() {
    this.$get = ["$cacheFactory", function (a) {
      return a("templates");
    }];
  }function Cc(a, b) {
    function d(a, b, c) {
      var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
          e = {};q(a, function (a, f) {
        if (a in m) e[f] = m[a];else {
          var g = a.match(d);if (!g) throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };g[4] && (m[a] = e[f]);
        }
      });return e;
    }function c(a) {
      var b = a.charAt(0);if (!b || b !== N(b)) throw ga("baddir", a);if (a !== a.trim()) throw ga("baddir", a);
    }var e = {},
        f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        g = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        h = $d("ngSrc,ngSrcset,src,srcset"),
        k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        l = /^(on[a-z]+|formaction)$/,
        m = V();this.directive = function L(b, d) {
      Ta(b, "directive");y(b) ? (c(b), tb(d, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
        var d = [];q(e[b], function (e, f) {
          try {
            var g = a.invoke(e);D(g) ? g = { compile: da(g) } : !g.compile && g.link && (g.compile = da(g.link));g.priority = g.priority || 0;g.index = f;g.name = g.name || b;g.require = g.require || g.controller && g.name;g.restrict = g.restrict || "EA";g.$$moduleName = e.$$moduleName;d.push(g);
          } catch (h) {
            c(h);
          }
        });return d;
      }])), e[b].push(d)) : q(b, qc(L));return this;
    };this.component = function (a, b) {
      function c(a) {
        function e(b) {
          return D(b) || M(b) ? function (c, d) {
            return a.invoke(b, this, { $element: c, $attrs: d });
          } : b;
        }var f = b.template || b.templateUrl ? b.template : "";return { controller: d, controllerAs: Uc(b.controller) || b.controllerAs || "$ctrl", template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };
      }var d = b.controller || E;q(b, function (a, b) {
        "$" === b.charAt(0) && (c[b] = a, d[b] = a);
      });c.$inject = ["$injector"];return this.directive(a, c);
    };this.aHrefSanitizationWhitelist = function (a) {
      return A(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
    };this.imgSrcSanitizationWhitelist = function (a) {
      return A(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
    };var n = !0;this.debugInfoEnabled = function (a) {
      return A(a) ? (n = a, this) : n;
    };var p = 10;this.onChangesTtl = function (a) {
      return arguments.length ? (p = a, this) : p;
    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, m, v, Q, t, G, C, K) {
      function I() {
        try {
          if (! --pa) throw $ = u, ga("infchng", p);t.$apply(function () {
            for (var a = 0, b = $.length; a < b; ++a) {
              $[a]();
            }$ = u;
          });
        } finally {
          pa++;
        }
      }function qa(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;d = 0;for (e = c.length; d < e; d++) {
            f = c[d], this[f] = b[f];
          }
        } else this.$attr = {};this.$$element = a;
      }function Ca(a, b, c) {
        la.innerHTML = "<span " + b + ">";b = la.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);
        d.value = c;a.attributes.setNamedItem(d);
      }function B(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }function ba(a, b, c, d, e) {
        a instanceof H || (a = H(a));for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
          var k = a[g];k.nodeType === Pa && k.nodeValue.match(f) && Mc(k, a[g] = P.createElement("span"));
        }var l = xa(a, b, a, c, d, e);ba.$$addScopeClass(a);var m = null;return function (b, c, d) {
          tb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var f = d.parentBoundTranscludeFn,
              g = d.transcludeControllers;d = d.futureParentElement;f && f.$$boundTransclude && (f = f.$$boundTransclude);m || (m = (d = d && d[0]) ? "foreignobject" !== oa(d) && ka.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== m ? H(ca(m, H("<div>").append(a).html())) : c ? Ra.clone.call(a) : a;if (g) for (var h in g) {
            d.data("$" + h + "Controller", g[h].instance);
          }ba.$$addScopeInfo(d, b);c && c(d, b);l && l(b, d, d, f);return d;
        };
      }function xa(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, k, l, m, n, p, G;if (r) for (G = Array(c.length), m = 0; m < h.length; m += 3) {
            f = h[m], G[f] = c[f];
          } else G = c;m = 0;for (n = h.length; m < n;) {
            k = G[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), ba.$$addScopeInfo(H(k), l)) : l = a, p = c.transcludeOnThisElement ? s(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? s(a, b) : null, c(f, l, k, d, p)) : f && f(a, k.childNodes, u, e);
          }
        }for (var h = [], k, l, m, n, r, p = 0; p < a.length; p++) {
          k = new qa();l = A(a[p], [], k, 0 === p ? d : u, e);(f = l.length ? ra(l, a[p], k, b, c, null, [], [], f) : null) && f.scope && ba.$$addScopeClass(k.$$element);k = f && f.terminal || !(m = a[p].childNodes) || !m.length ? null : xa(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || k) h.push(p, f, k), n = !0, r = r || f;f = null;
        }return n ? g : null;
      }function s(a, b, c) {
        function d(e, f, g, h, k) {
          e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, f, { parentBoundTranscludeFn: c, transcludeControllers: g, futureParentElement: h });
        }var e = d.$$slots = V(),
            f;for (f in b.$$slots) {
          e[f] = b.$$slots[f] ? s(a, b.$$slots[f], c) : null;
        }return d;
      }function A(a, b, c, d, e) {
        var h = c.$attr,
            k;switch (a.nodeType) {case 1:
            Fa(b, ya(oa(a)), "E", d, e);for (var l, m, n, r = a.attributes, p = 0, G = r && r.length; p < G; p++) {
              var v = !1,
                  C = !1;l = r[p];k = l.name;m = W(l.value);l = ya(k);if (n = za.test(l)) k = k.replace(Vc, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              });(l = l.match(Ba)) && R(l[1]) && (v = k, C = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));l = ya(k.toLowerCase());h[l] = k;if (n || !c.hasOwnProperty(l)) c[l] = m, Rc(a, l) && (c[l] = !0);fa(a, b, m, l, n);Fa(b, l, "A", d, e, v, C);
            }a = a.className;J(a) && (a = a.animVal);if (y(a) && "" !== a) for (; k = g.exec(a);) {
              l = ya(k[2]), Fa(b, l, "C", d, e) && (c[l] = W(k[3])), a = a.substr(k.index + k[0].length);
            }break;case Pa:
            if (11 === Da) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Pa;) {
              a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
            }Y(b, a.nodeValue);break;case 8:
            try {
              if (k = f.exec(a.nodeValue)) l = ya(k[1]), Fa(b, l, "M", d, e) && (c[l] = W(k[2]));
            } catch (w) {}}b.sort(Z);return b;
      }function Wc(a, b, c) {
        var d = [],
            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ga("uterdir", b, c);1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);return H(d);
      }function O(a, b, c) {
        return function (d, e, f, g, h) {
          e = Wc(e[0], b, c);return a(d, e, f, g, h);
        };
      }function Zb(a, b, c, d, e, f) {
        var g;return a ? ba(b, c, d, e, f) : function () {
          g || (g = ba(b, c, d, e, f), b = c = f = null);return g.apply(this, arguments);
        };
      }function ra(a, b, d, e, f, g, h, k, l) {
        function m(a, b, c, d) {
          if (a) {
            c && (a = O(a, c, d));a.require = B.require;a.directiveName = L;if (C === B || B.$$isolateScope) a = ia(a, { isolateScope: !0 });h.push(a);
          }if (b) {
            c && (b = O(b, c, d));b.require = B.require;b.directiveName = L;if (C === B || B.$$isolateScope) b = ia(b, { isolateScope: !0 });k.push(b);
          }
        }function n(a, c, e, f, g) {
          function l(a, b, c, d) {
            var e;
            ab(a) || (d = c, c = b, b = a, a = u);Ca && (e = K);c || (c = Ca ? t.parent() : t);if (d) {
              var f = g.$$slots[d];if (f) return f(a, b, e, c, s);if (z(f)) throw ga("noslot", d, wa(t));
            } else return g(a, b, e, c, s);
          }var m, r, p, B, I, K, x, t;b === e ? (f = d, t = d.$$element) : (t = H(e), f = new qa(t, d));I = c;C ? B = c.$new(!0) : G && (I = c.$parent);g && (x = l, x.$$boundTransclude = g, x.isSlotFilled = function (a) {
            return !!g.$$slots[a];
          });v && (K = T(t, f, x, v, B, c, C));C && (ba.$$addScopeInfo(t, B, !0, !(w && (w === C || w === C.$$originalDirective))), ba.$$addScopeClass(t, !0), B.$$isolateBindings = C.$$isolateBindings, (p = ha(c, f, B, B.$$isolateBindings, C)) && B.$on("$destroy", p));for (r in K) {
            p = v[r];var Va = K[r],
                Q = p.$$bindings.bindToController;Va.identifier && Q && (m = ha(I, f, Va.instance, Q, p));var L = Va();L !== Va.instance && (Va.instance = L, t.data("$" + p.name + "Controller", L), m && m(), m = ha(I, f, Va.instance, Q, p));
          }q(v, function (a, b) {
            var c = a.require;a.bindToController && !M(c) && J(c) && S(K[b].instance, jb(b, c, t, K));
          });q(K, function (a) {
            var b = a.instance;D(b.$onInit) && b.$onInit();D(b.$onDestroy) && I.$on("$destroy", function () {
              b.$onDestroy();
            });
          });m = 0;for (r = h.length; m < r; m++) {
            p = h[m], ja(p, p.isolateScope ? B : c, t, f, p.require && jb(p.directiveName, p.require, t, K), x);
          }var s = c;C && (C.template || null === C.templateUrl) && (s = B);a && a(s, e.childNodes, u, g);for (m = k.length - 1; 0 <= m; m--) {
            p = k[m], ja(p, p.isolateScope ? B : c, t, f, p.require && jb(p.directiveName, p.require, t, K), x);
          }q(K, function (a) {
            a = a.instance;D(a.$postLink) && a.$postLink();
          });
        }l = l || {};for (var p = -Number.MAX_VALUE, G = l.newScopeDirective, v = l.controllerDirectives, C = l.newIsolateScopeDirective, w = l.templateDirective, I = l.nonTlbTranscludeDirective, K = !1, x = !1, Ca = l.hasElementTranscludeDirective, t = d.$$element = H(b), B, L, Q, s = e, xa, Ea = !1, E = !1, y, ra = 0, N = a.length; ra < N; ra++) {
          B = a[ra];var R = B.$$start,
              Fa = B.$$end;R && (t = Wc(b, R, Fa));Q = u;if (p > B.priority) break;if (y = B.scope) B.templateUrl || (J(y) ? (X("new/isolated scope", C || G, B, t), C = B) : X("new/isolated scope", C, B, t)), G = G || B;L = B.name;if (!Ea && (B.replace && (B.templateUrl || B.template) || B.transclude && !B.$$tlb)) {
            for (y = ra + 1; Ea = a[y++];) {
              if (Ea.transclude && !Ea.$$tlb || Ea.replace && (Ea.templateUrl || Ea.template)) {
                E = !0;break;
              }
            }Ea = !0;
          }!B.templateUrl && B.controller && (y = B.controller, v = v || V(), X("'" + L + "' controller", v[L], B, t), v[L] = B);if (y = B.transclude) if (K = !0, B.$$tlb || (X("transclusion", I, B, t), I = B), "element" == y) Ca = !0, p = B.priority, Q = t, t = d.$$element = H(ba.$$createComment(L, d[L])), b = t[0], da(f, Aa.call(Q, 0), b), Q[0].$$parentNode = Q[0].parentNode, s = Zb(E, Q, e, p, g && g.name, { nonTlbTranscludeDirective: I });else {
            var P = V();Q = H(Wb(b)).contents();if (J(y)) {
              Q = [];var Z = V(),
                  Y = V();q(y, function (a, b) {
                var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;Z[a] = b;P[b] = null;Y[b] = c;
              });q(t.contents(), function (a) {
                var b = Z[ya(oa(a))];b ? (Y[b] = !0, P[b] = P[b] || [], P[b].push(a)) : Q.push(a);
              });q(Y, function (a, b) {
                if (!a) throw ga("reqslot", b);
              });for (var $ in P) {
                P[$] && (P[$] = Zb(E, P[$], e));
              }
            }t.empty();s = Zb(E, Q, e, u, u, { needsNewScope: B.$$isolateScope || B.$$newScope });s.$$slots = P;
          }if (B.template) if (x = !0, X("template", w, B, t), w = B, y = D(B.template) ? B.template(t, d) : B.template, y = ua(y), B.replace) {
            g = B;Q = Ub.test(y) ? Xc(ca(B.templateNamespace, W(y))) : [];b = Q[0];if (1 != Q.length || 1 !== b.nodeType) throw ga("tplrt", L, "");da(f, t, b);N = { $attr: {} };
            y = A(b, [], N);var ea = a.splice(ra + 1, a.length - (ra + 1));(C || G) && Yc(y, C, G);a = a.concat(y).concat(ea);U(d, N);N = a.length;
          } else t.html(y);if (B.templateUrl) x = !0, X("template", w, B, t), w = B, B.replace && (g = B), n = aa(a.splice(ra, a.length - ra), t, d, f, K && s, h, k, { controllerDirectives: v, newScopeDirective: G !== B && G, newIsolateScopeDirective: C, templateDirective: w, nonTlbTranscludeDirective: I }), N = a.length;else if (B.compile) try {
            xa = B.compile(t, d, s), D(xa) ? m(null, xa, R, Fa) : xa && m(xa.pre, xa.post, R, Fa);
          } catch (fa) {
            c(fa, wa(t));
          }B.terminal && (n.terminal = !0, p = Math.max(p, B.priority));
        }n.scope = G && !0 === G.scope;n.transcludeOnThisElement = K;n.templateOnThisElement = x;n.transclude = s;l.hasElementTranscludeDirective = Ca;return n;
      }function jb(a, b, c, d) {
        var e;if (y(b)) {
          var f = b.match(k);b = b.substring(f[0].length);var g = f[1] || f[3],
              f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
            var h = "$" + b + "Controller";e = g ? c.inheritedData(h) : c.data(h);
          }if (!e && !f) throw ga("ctreq", b, a);
        } else if (M(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
          e[g] = jb(a, b[g], c, d);
        } else J(b) && (e = {}, q(b, function (b, f) {
          e[f] = jb(a, b, c, d);
        }));return e || null;
      }function T(a, b, c, d, e, f, g) {
        var h = V(),
            k;for (k in d) {
          var l = d[k],
              m = { $scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
              n = l.controller;"@" == n && (n = b[l.name]);m = Q(n, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
        }return h;
      }function Yc(a, b, c) {
        for (var d = 0, e = a.length; d < e; d++) {
          a[d] = Qb(a[d], { $$isolateScope: b, $$newScope: c });
        }
      }function Fa(b, f, g, h, k, l, m) {
        if (f === k) return null;k = null;if (e.hasOwnProperty(f)) {
          var n;f = a.get(f + "Directive");for (var p = 0, G = f.length; p < G; p++) {
            try {
              if (n = f[p], (z(h) || h > n.priority) && -1 != n.restrict.indexOf(g)) {
                l && (n = Qb(n, { $$start: l, $$end: m }));if (!n.$$bindings) {
                  var v = n,
                      C = n,
                      w = n.name,
                      B = { isolateScope: null, bindToController: null };J(C.scope) && (!0 === C.bindToController ? (B.bindToController = d(C.scope, w, !0), B.isolateScope = {}) : B.isolateScope = d(C.scope, w, !1));J(C.bindToController) && (B.bindToController = d(C.bindToController, w, !0));if (J(B.bindToController)) {
                    var I = C.controller,
                        K = C.controllerAs;if (!I) throw ga("noctrl", w);if (!Uc(I, K)) throw ga("noident", w);
                  }var x = v.$$bindings = B;J(x.isolateScope) && (n.$$isolateBindings = x.isolateScope);
                }b.push(n);k = n;
              }
            } catch (t) {
              c(t);
            }
          }
        }return k;
      }function R(b) {
        if (e.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++) {
          if (b = c[d], b.multiElement) return !0;
        }return !1;
      }function U(a, b) {
        var c = b.$attr,
            d = a.$attr,
            e = a.$$element;q(a, function (d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
        });q(b, function (b, f) {
          "class" == f ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
        });
      }function aa(a, b, c, d, e, f, g, h) {
        var k = [],
            l,
            n,
            p = b[0],
            r = a.shift(),
            G = Qb(r, { templateUrl: null, transclude: null, replace: null, $$originalDirective: r }),
            v = D(r.templateUrl) ? r.templateUrl(b, c) : r.templateUrl,
            C = r.templateNamespace;b.empty();m(v).then(function (m) {
          var w, I;m = ua(m);if (r.replace) {
            m = Ub.test(m) ? Xc(ca(C, W(m))) : [];w = m[0];if (1 != m.length || 1 !== w.nodeType) throw ga("tplrt", r.name, v);m = { $attr: {} };da(d, b, w);var K = A(w, [], m);J(r.scope) && Yc(K, !0);a = K.concat(a);U(c, m);
          } else w = p, b.html(m);a.unshift(G);l = ra(a, w, c, e, b, r, f, g, h);q(d, function (a, c) {
            a == w && (d[c] = b[0]);
          });for (n = xa(b[0].childNodes, e); k.length;) {
            m = k.shift();I = k.shift();var x = k.shift(),
                t = k.shift(),
                K = b[0];if (!m.$$destroyed) {
              if (I !== p) {
                var qa = I.className;h.hasElementTranscludeDirective && r.replace || (K = Wb(w));da(x, H(I), K);B(H(K), qa);
              }I = l.transcludeOnThisElement ? s(m, l.transclude, t) : t;l(n, m, K, d, I);
            }
          }k = null;
        });return function (a, b, c, d, e) {
          a = e;b.$$destroyed || (k ? k.push(b, c, d, a) : (l.transcludeOnThisElement && (a = s(b, l.transclude, e)), l(n, b, c, d, a)));
        };
      }function Z(a, b) {
        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }function X(a, b, c, d) {
        function e(a) {
          return a ? " (module: " + a + ")" : "";
        }if (b) throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, wa(d));
      }function Y(a, c) {
        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
            a = a.parent();var b = !!a.length;
            b && ba.$$addBindingClass(a);return function (a, c) {
              var e = c.parent();b || ba.$$addBindingClass(e);ba.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          } });
      }function ca(a, b) {
        a = N(a || "html");switch (a) {case "svg":case "math":
            var c = P.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
            return b;}
      }function ea(a, b) {
        if ("srcdoc" == b) return G.HTML;var c = oa(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return G.RESOURCE_URL;
      }
      function fa(a, c, d, e, f) {
        var g = ea(a, e);f = h[e] || f;var k = b(d, !0, g, f);if (k) {
          if ("multiple" === e && "select" === oa(a)) throw ga("selmulti", wa(a));c.push({ priority: 100, compile: function compile() {
              return { pre: function pre(a, c, h) {
                  c = h.$$observers || (h.$$observers = V());if (l.test(e)) throw ga("nodomevents");var m = h[e];m !== d && (k = m && b(m, !0, g, f), d = m);k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                    "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a);
                  }));
                } };
            } });
        }
      }function da(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;if (a) for (g = 0, h = a.length; g < h; g++) {
          if (a[g] == d) {
            a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) {
              h < k ? a[g] = a[h] : delete a[g];
            }a.length -= e - 1;a.context === d && (a.context = c);break;
          }
        }f && f.replaceChild(c, d);a = P.createDocumentFragment();for (g = 0; g < e; g++) {
          a.appendChild(b[g]);
        }H.hasData(d) && (H.data(c, H.data(d)), H(d).off("$destroy"));H.cleanData(a.querySelectorAll("*"));for (g = 1; g < e; g++) {
          delete b[g];
        }b[0] = c;b.length = 1;
      }function ia(a, b) {
        return S(function () {
          return a.apply(null, arguments);
        }, a, b);
      }function ja(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, wa(d));
        }
      }function ha(a, c, d, e, f) {
        function g(b, c, e) {
          D(d.$onChanges) && c !== e && ($ || (a.$$postDigest(I), $ = []), l || (l = {}, $.push(h)), l[b] && (e = l[b].previousValue), l[b] = { previousValue: e, currentValue: c });
        }function h() {
          d.$onChanges(l);l = u;
        }var k = [],
            l;q(e, function (e, h) {
          var l = e.attrName,
              m = e.optional,
              n,
              r,
              p,
              G;switch (e.mode) {case "@":
              m || va.call(c, l) || (d[h] = c[l] = void 0);c.$observe(l, function (a) {
                y(a) && (g(h, a, d[h]), d[h] = a);
              });c.$$observers[l].$$scope = a;n = c[l];y(n) ? d[h] = b(n)(a) : Oa(n) && (d[h] = n);break;case "=":
              if (!va.call(c, l)) {
                if (m) break;c[l] = void 0;
              }if (m && !c[l]) break;r = v(c[l]);G = r.literal ? na : function (a, b) {
                return a === b || a !== a && b !== b;
              };p = r.assign || function () {
                n = d[h] = r(a);throw ga("nonassign", c[l], l, f.name);
              };n = d[h] = r(a);m = function m(b) {
                G(b, d[h]) || (G(b, n) ? p(a, b = d[h]) : d[h] = b);return n = b;
              };m.$stateful = !0;m = e.collection ? a.$watchCollection(c[l], m) : a.$watch(v(c[l], m), null, r.literal);k.push(m);break;case "<":
              if (!va.call(c, l)) {
                if (m) break;c[l] = void 0;
              }if (m && !c[l]) break;r = v(c[l]);
              d[h] = r(a);m = a.$watch(r, function (a) {
                g(h, a, d[h]);d[h] = a;
              }, r.literal);k.push(m);break;case "&":
              r = c.hasOwnProperty(l) ? v(c[l]) : E;if (r === E && m) break;d[h] = function (b) {
                return r(a, b);
              };}
        });return k.length && function () {
          for (var a = 0, b = k.length; a < b; ++a) {
            k[a]();
          }
        };
      }var ma = /^\w/,
          la = P.createElement("div"),
          pa = p,
          $;qa.prototype = { $normalize: ya, $addClass: function $addClass(a) {
          a && 0 < a.length && C.addClass(this.$$element, a);
        }, $removeClass: function $removeClass(a) {
          a && 0 < a.length && C.removeClass(this.$$element, a);
        }, $updateClass: function $updateClass(a, b) {
          var c = Zc(a, b);c && c.length && C.addClass(this.$$element, c);(c = Zc(b, a)) && c.length && C.removeClass(this.$$element, c);
        }, $set: function $set(a, b, d, e) {
          var f = Rc(this.$$element[0], a),
              g = $c[a],
              h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = zc(a, "-"));f = oa(this.$$element);if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = K(b, "src" === a);else if ("img" === f && "srcset" === a) {
            for (var f = "", g = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) {
              var m = 2 * l,
                  f = f + K(W(g[m]), !0),
                  f = f + (" " + W(g[m + 1]));
            }g = W(g[2 * l]).split(/\s/);f += K(W(g[0]), !0);2 === g.length && (f += " " + W(g[1]));this[a] = b = f;
          }!1 !== d && (null === b || z(b) ? this.$$element.removeAttr(e) : ma.test(e) ? this.$$element.attr(e, b) : Ca(this.$$element[0], e, b));(a = this.$$observers) && q(a[h], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        }, $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = V()),
              e = d[a] || (d[a] = []);e.push(b);t.$evalAsync(function () {
            e.$$inter || !c.hasOwnProperty(a) || z(c[a]) || b(c[a]);
          });return function () {
            bb(e, b);
          };
        } };var sa = b.startSymbol(),
          ta = b.endSymbol(),
          ua = "{{" == sa && "}}" == ta ? $a : function (a) {
        return a.replace(/\{\{/g, sa).replace(/}}/g, ta);
      },
          za = /^ngAttr[A-Z]/,
          Ba = /^(.+)Start$/;ba.$$addBindingInfo = n ? function (a, b) {
        var c = a.data("$binding") || [];M(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
      } : E;ba.$$addBindingClass = n ? function (a) {
        B(a, "ng-binding");
      } : E;ba.$$addScopeInfo = n ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : E;ba.$$addScopeClass = n ? function (a, b) {
        B(a, b ? "ng-isolate-scope" : "ng-scope");
      } : E;ba.$$createComment = function (a, b) {
        var c = "";n && (c = " " + (a || "") + ": " + (b || "") + " ");return P.createComment(c);
      };return ba;
    }];
  }function ya(a) {
    return fb(a.replace(Vc, ""));
  }function Zc(a, b) {
    var d = "",
        c = a.split(/\s+/),
        e = b.split(/\s+/),
        f = 0;a: for (; f < c.length; f++) {
      for (var g = c[f], h = 0; h < e.length; h++) {
        if (g == e[h]) continue a;
      }d += (0 < d.length ? " " : "") + g;
    }return d;
  }function Xc(a) {
    a = H(a);var b = a.length;if (1 >= b) return a;for (; b--;) {
      8 === a[b].nodeType && Yf.call(a, b, 1);
    }return a;
  }function Uc(a, b) {
    if (b && y(b)) return b;if (y(a)) {
      var d = ad.exec(a);if (d) return d[3];
    }
  }function df() {
    var a = {},
        b = !1;this.has = function (b) {
      return a.hasOwnProperty(b);
    };this.register = function (b, c) {
      Ta(b, "controller");J(b) ? S(a, b) : a[b] = c;
    };this.allowGlobals = function () {
      b = !0;
    };this.$get = ["$injector", "$window", function (d, c) {
      function e(a, b, c, d) {
        if (!a || !J(a.$scope)) throw O("$controller")("noscp", d, b);a.$scope[b] = c;
      }return function (f, g, h, k) {
        var l, m, n;h = !0 === h;k && y(k) && (n = k);if (y(f)) {
          k = f.match(ad);
          if (!k) throw Zf("ctrlfmt", f);m = k[1];n = n || k[3];f = a.hasOwnProperty(m) ? a[m] : Bc(g.$scope, m, !0) || (b ? Bc(c, m, !0) : u);Sa(f, m, !0);
        }if (h) return h = (M(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), S(function () {
          var a = d.invoke(f, l, g, m);a !== l && (J(a) || D(a)) && (l = a, n && e(g, n, l, m || f.name));return l;
        }, { instance: l, identifier: n });l = d.instantiate(f, g, m);n && e(g, n, l, m || f.name);return l;
      };
    }];
  }function ef() {
    this.$get = ["$window", function (a) {
      return H(a.document);
    }];
  }function ff() {
    this.$get = ["$log", function (a) {
      return function (b, d) {
        a.error.apply(a, arguments);
      };
    }];
  }function $b(a) {
    return J(a) ? fa(a) ? a.toISOString() : db(a) : a;
  }function lf() {
    this.$get = function () {
      return function (a) {
        if (!a) return "";var b = [];pc(a, function (a, c) {
          null === a || z(a) || (M(a) ? q(a, function (a) {
            b.push(ja(c) + "=" + ja($b(a)));
          }) : b.push(ja(c) + "=" + ja($b(a))));
        });return b.join("&");
      };
    };
  }function mf() {
    this.$get = function () {
      return function (a) {
        function b(a, e, f) {
          null === a || z(a) || (M(a) ? q(a, function (a, c) {
            b(a, e + "[" + (J(a) ? c : "") + "]");
          }) : J(a) && !fa(a) ? pc(a, function (a, c) {
            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
          }) : d.push(ja(e) + "=" + ja($b(a))));
        }if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
      };
    };
  }function ac(a, b) {
    if (y(a)) {
      var d = a.replace($f, "").trim();if (d) {
        var c = b("Content-Type");(c = c && 0 === c.indexOf(bd)) || (c = (c = d.match(ag)) && bg[c[0]].test(d));c && (a = uc(d));
      }
    }return a;
  }function cd(a) {
    var b = V(),
        d;y(a) ? q(a.split("\n"), function (a) {
      d = a.indexOf(":");var e = N(W(a.substr(0, d)));a = W(a.substr(d + 1));e && (b[e] = b[e] ? b[e] + ", " + a : a);
    }) : J(a) && q(a, function (a, d) {
      var f = N(d),
          g = W(a);f && (b[f] = b[f] ? b[f] + ", " + g : g);
    });return b;
  }
  function dd(a) {
    var b;return function (d) {
      b || (b = cd(a));return d ? (d = b[N(d)], void 0 === d && (d = null), d) : b;
    };
  }function ed(a, b, d, c) {
    if (D(c)) return c(a, b, d);q(c, function (c) {
      a = c(a, b, d);
    });return a;
  }function kf() {
    var a = this.defaults = { transformResponse: [ac], transformRequest: [function (a) {
        return J(a) && "[object File]" !== ka.call(a) && "[object Blob]" !== ka.call(a) && "[object FormData]" !== ka.call(a) ? db(a) : a;
      }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: ia(bc), put: ia(bc), patch: ia(bc) }, xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer" },
        b = !1;this.useApplyAsync = function (a) {
      return A(a) ? (b = !!a, this) : b;
    };var d = !0;this.useLegacyPromiseExtensions = function (a) {
      return A(a) ? (d = !!a, this) : d;
    };var c = this.interceptors = [];this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
      function m(b) {
        function c(a) {
          var b = S({}, a);b.data = ed(a.data, a.headers, a.status, f.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
        }function e(a, b) {
          var c,
              d = {};q(a, function (a, e) {
            D(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
          });return d;
        }if (!J(b)) throw O("$http")("badreq", b);if (!y(b.url)) throw O("$http")("badreq", b.url);var f = S({ method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer }, b);f.headers = function (b) {
          var c = a.headers,
              d = S({}, b.headers),
              f,
              g,
              h,
              c = S({}, c.common, c[N(b.method)]);a: for (f in c) {
            g = N(f);for (h in d) {
              if (N(h) === g) continue a;
            }d[f] = c[f];
          }return e(d, ia(b));
        }(b);f.method = vb(f.method);
        f.paramSerializer = y(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;var g = [function (b) {
          var d = b.headers,
              e = ed(b.data, dd(d), u, b.transformRequest);z(e) && q(d, function (a, b) {
            "content-type" === N(b) && delete d[b];
          });z(b.withCredentials) && !z(a.withCredentials) && (b.withCredentials = a.withCredentials);return n(b, e).then(c, c);
        }, u],
            h = k.when(f);for (q(L, function (a) {
          (a.request || a.requestError) && g.unshift(a.request, a.requestError);(a.response || a.responseError) && g.push(a.response, a.responseError);
        }); g.length;) {
          b = g.shift();var m = g.shift(),
              h = h.then(b, m);
        }d ? (h.success = function (a) {
          Sa(a, "fn");h.then(function (b) {
            a(b.data, b.status, b.headers, f);
          });return h;
        }, h.error = function (a) {
          Sa(a, "fn");h.then(null, function (b) {
            a(b.data, b.status, b.headers, f);
          });return h;
        }) : (h.success = fd("success"), h.error = fd("error"));return h;
      }function n(c, d) {
        function g(a, c, d, e) {
          function f() {
            l(c, a, d, e);
          }K && (200 <= a && 300 > a ? K.put(L, [a, c, cd(d), e]) : K.remove(L));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
        }function l(a, b, d, e) {
          b = -1 <= b ? b : 0;(200 <= b && 300 > b ? G.resolve : G.reject)({ data: a, status: b, headers: dd(d), config: c, statusText: e });
        }function n(a) {
          l(a.data, a.status, ia(a.headers()), a.statusText);
        }function t() {
          var a = m.pendingRequests.indexOf(c);-1 !== a && m.pendingRequests.splice(a, 1);
        }var G = k.defer(),
            C = G.promise,
            K,
            I,
            qa = c.headers,
            L = p(c.url, c.paramSerializer(c.params));m.pendingRequests.push(c);C.then(t, t);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (K = J(c.cache) ? c.cache : J(a.cache) ? a.cache : F);K && (I = K.get(L), A(I) ? I && D(I.then) ? I.then(n, n) : M(I) ? l(I[1], I[0], ia(I[2]), I[3]) : l(I, 200, {}, "OK") : K.put(L, C));z(I) && ((I = gd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : u) && (qa[c.xsrfHeaderName || a.xsrfHeaderName] = I), e(c.method, L, d, g, qa, c.timeout, c.withCredentials, c.responseType));return C;
      }function p(a, b) {
        0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);return a;
      }var F = g("$http");a.paramSerializer = y(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var L = [];q(c, function (a) {
        L.unshift(y(a) ? l.get(a) : l.invoke(a));
      });m.pendingRequests = [];(function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c) {
            return m(S({}, c || {}, { method: a, url: b }));
          };
        });
      })("get", "delete", "head", "jsonp");(function (a) {
        q(arguments, function (a) {
          m[a] = function (b, c, d) {
            return m(S({}, d || {}, { method: a, url: b, data: c }));
          };
        });
      })("post", "put", "patch");m.defaults = a;return m;
    }];
  }function of() {
    this.$get = function () {
      return function () {
        return new T.XMLHttpRequest();
      };
    };
  }function nf() {
    this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, d, c) {
      return cg(a, c, a.defer, b.angular.callbacks, d[0]);
    }];
  }function cg(a, b, d, c, e) {
    function f(a, b, d) {
      var f = e.createElement("script"),
          _m = null;f.type = "text/javascript";f.src = a;f.async = !0;_m = function m(a) {
        f.removeEventListener("load", _m, !1);f.removeEventListener("error", _m, !1);e.body.removeChild(f);f = null;var g = -1,
            F = "unknown";a && ("load" !== a.type || c[b].called || (a = { type: "error" }), F = a.type, g = "error" === a.type ? 404 : 200);d && d(g, F);
      };f.addEventListener("load", _m, !1);f.addEventListener("error", _m, !1);e.body.appendChild(f);return _m;
    }return function (e, h, k, l, m, n, p, F) {
      function L() {
        w && w();v && v.abort();
      }
      function x(b, c, e, f, g) {
        A(t) && d.cancel(t);w = v = null;b(c, e, f, g);a.$$completeOutstandingRequest(E);
      }a.$$incOutstandingRequestCount();h = h || a.url();if ("jsonp" == N(e)) {
        var r = "_" + (c.counter++).toString(36);c[r] = function (a) {
          c[r].data = a;c[r].called = !0;
        };var w = f(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function (a, b) {
          x(l, a, c[r].data, "", b);c[r] = E;
        });
      } else {
        var v = b(e, h);v.open(e, h, !0);q(m, function (a, b) {
          A(a) && v.setRequestHeader(b, a);
        });v.onload = function () {
          var a = v.statusText || "",
              b = "response" in v ? v.response : v.responseText,
              c = 1223 === v.status ? 204 : v.status;0 === c && (c = b ? 200 : "file" == sa(h).protocol ? 404 : 0);x(l, c, b, v.getAllResponseHeaders(), a);
        };e = function e() {
          x(l, -1, null, null, "");
        };v.onerror = e;v.onabort = e;p && (v.withCredentials = !0);if (F) try {
          v.responseType = F;
        } catch (Q) {
          if ("json" !== F) throw Q;
        }v.send(z(k) ? null : k);
      }if (0 < n) var t = d(L, n);else n && D(n.then) && n.then(L);
    };
  }function hf() {
    var a = "{{",
        b = "}}";this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    };this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
      function f(a) {
        return "\\\\\\" + a;
      }function g(c) {
        return c.replace(n, a).replace(p, b);
      }function h(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);
      }function k(f, k, n, r) {
        function p(a) {
          try {
            var b = a;a = n ? e.getTrusted(n, b) : e.valueOf(b);var d;if (r && !A(a)) d = a;else if (null == a) d = "";else {
              switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "string":
                  break;case "number":
                  a = "" + a;break;default:
                  a = db(a);}d = a;
            }return d;
          } catch (g) {
            c(La.interr(f, g));
          }
        }if (!f.length || -1 === f.indexOf(a)) {
          var v;k || (k = g(f), v = da(k), v.exp = f, v.expressions = [], v.$$watchDelegate = h);return v;
        }r = !!r;var q,
            t,
            G = 0,
            C = [],
            K = [];v = f.length;for (var I = [], qa = []; G < v;) {
          if (-1 != (q = f.indexOf(a, G)) && -1 != (t = f.indexOf(b, q + l))) G !== q && I.push(g(f.substring(G, q))), G = f.substring(q + l, t), C.push(G), K.push(d(G, p)), G = t + m, qa.push(I.length), I.push("");else {
            G !== v && I.push(g(f.substring(G)));break;
          }
        }n && 1 < I.length && La.throwNoconcat(f);if (!k || C.length) {
          var Ca = function Ca(a) {
            for (var b = 0, c = C.length; b < c; b++) {
              if (r && z(a[b])) return;I[qa[b]] = a[b];
            }return I.join("");
          };return S(function (a) {
            var b = 0,
                d = C.length,
                e = Array(d);try {
              for (; b < d; b++) {
                e[b] = K[b](a);
              }return Ca(e);
            } catch (g) {
              c(La.interr(f, g));
            }
          }, { exp: f, expressions: C, $$watchDelegate: function $$watchDelegate(a, b) {
              var c;return a.$watchGroup(K, function (d, e) {
                var f = Ca(d);D(b) && b.call(this, f, d !== e ? c : f, a);c = f;
              });
            } });
        }
      }var l = a.length,
          m = b.length,
          n = new RegExp(a.replace(/./g, f), "g"),
          p = new RegExp(b.replace(/./g, f), "g");k.startSymbol = function () {
        return a;
      };k.endSymbol = function () {
        return b;
      };return k;
    }];
  }function jf() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
      function f(f, k, l, m) {
        function n() {
          p ? f.apply(null, F) : f(r);
        }var p = 4 < arguments.length,
            F = p ? Aa.call(arguments, 4) : [],
            q = b.setInterval,
            x = b.clearInterval,
            r = 0,
            w = A(m) && !m,
            v = (w ? c : d).defer(),
            Q = v.promise;l = A(l) ? l : 0;Q.$$intervalId = q(function () {
          w ? e.defer(n) : a.$evalAsync(n);v.notify(r++);0 < l && r >= l && (v.resolve(r), x(Q.$$intervalId), delete g[Q.$$intervalId]);w || a.$apply();
        }, k);g[Q.$$intervalId] = v;return Q;
      }var g = {};f.cancel = function (a) {
        return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
      };return f;
    }];
  }function cc(a) {
    a = a.split("/");for (var b = a.length; b--;) {
      a[b] = rb(a[b]);
    }return a.join("/");
  }function hd(a, b) {
    var d = sa(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = Y(d.port) || dg[d.protocol] || null;
  }function id(a, b) {
    var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = sa(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = xc(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
  }function la(a, b) {
    if (0 === b.indexOf(a)) return b.substr(a.length);
  }function Ka(a) {
    var b = a.indexOf("#");return -1 == b ? a : a.substr(0, b);
  }function kb(a) {
    return a.replace(/(#.+)|#$/, "$1");
  }function dc(a, b, d) {
    this.$$html5 = !0;d = d || "";hd(a, this);this.$$parse = function (a) {
      var d = la(b, a);if (!y(d)) throw Fb("ipthprfx", a, b);id(d, this);this.$$path || (this.$$path = "/");this.$$compose();
    };this.$$compose = function () {
      var a = Sb(this.$$search),
          d = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = cc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);
    };this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;A(f = la(a, c)) ? (g = f, g = A(f = la(d, f)) ? b + (la("/", f) || f) : a + g) : A(f = la(b, c)) ? g = b + f : b == c + "/" && (g = b);g && this.$$parse(g);return !!g;
    };
  }function ec(a, b, d) {
    hd(a, this);this.$$parse = function (c) {
      var e = la(a, c) || la(b, c),
          f;z(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", z(e) && (a = c, this.replace())) : (f = la(d, e), z(f) && (f = e));id(f, this);c = this.$$path;var e = a,
          g = /^\/[A-Z]:(\/.*)/;0 === f.indexOf(e) && (f = f.replace(e, ""));g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);this.$$path = c;this.$$compose();
    };this.$$compose = function () {
      var b = Sb(this.$$search),
          e = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = cc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
    };this.$$parseLinkUrl = function (b, d) {
      return Ka(a) == Ka(b) ? (this.$$parse(b), !0) : !1;
    };
  }function jd(a, b, d) {
    this.$$html5 = !0;ec.apply(this, arguments);this.$$parseLinkUrl = function (c, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;a == Ka(c) ? f = c : (g = la(b, c)) ? f = a + d + g : b === c + "/" && (f = b);f && this.$$parse(f);return !!f;
    };this.$$compose = function () {
      var b = Sb(this.$$search),
          e = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = cc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + d + this.$$url;
    };
  }function Gb(a) {
    return function () {
      return this[a];
    };
  }function kd(a, b) {
    return function (d) {
      if (z(d)) return this[a];this[a] = b(d);this.$$compose();return this;
    };
  }function pf() {
    var a = "",
        b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
      return A(b) ? (a = b, this) : a;
    };this.html5Mode = function (a) {
      return Oa(a) ? (b.enabled = a, this) : J(a) ? (Oa(a.enabled) && (b.enabled = a.enabled), Oa(a.requireBase) && (b.requireBase = a.requireBase), Oa(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b;
    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
      function h(a, b, d) {
        var e = l.url(),
            f = l.$$state;try {
          c.url(a, b, d), l.$$state = c.state();
        } catch (g) {
          throw l.url(e), l.$$state = f, g;
        }
      }function k(a, b) {
        d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
      }var l, m;m = c.baseHref();var n = c.url(),
          p;if (b.enabled) {
        if (!m && b.requireBase) throw Fb("nobase");p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = e.history ? dc : jd;
      } else p = Ka(n), m = ec;var F = p.substr(0, Ka(p).lastIndexOf("/") + 1);l = new m(p, F, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var q = /^\s*(javascript|mailto):/i;f.on("click", function (a) {
        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
          for (var e = H(a.target); "a" !== oa(e[0]);) {
            if (e[0] === f[0] || !(e = e.parent())[0]) return;
          }var h = e.prop("href"),
              k = e.attr("href") || e.attr("xlink:href");J(h) && "[object SVGAnimatedString]" === h.toString() && (h = sa(h.animVal).href);q.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
        }
      });kb(l.absUrl()) != kb(n) && c.url(l.absUrl(), !0);var x = !0;c.onUrlChange(function (a, b) {
        z(la(F, a)) ? g.location.href = a : (d.$evalAsync(function () {
          var c = l.absUrl(),
              e = l.$$state,
              f;a = kb(a);l.$$parse(a);
          l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (x = !1, k(c, e)));
        }), d.$$phase || d.$digest());
      });d.$watch(function () {
        var a = kb(c.url()),
            b = kb(l.absUrl()),
            f = c.state(),
            g = l.$$replace,
            m = a !== b || l.$$html5 && e.history && f !== l.$$state;if (x || m) x = !1, d.$evalAsync(function () {
          var b = l.absUrl(),
              c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
        });l.$$replace = !1;
      });return l;
    }];
  }function qf() {
    var a = !0,
        b = this;this.debugEnabled = function (b) {
      return A(b) ? (a = b, this) : a;
    };this.$get = ["$window", function (d) {
      function c(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
      }function e(a) {
        var b = d.console || {},
            e = b[a] || b.log || E;a = !1;try {
          a = !!e.apply;
        } catch (k) {}return a ? function () {
          var a = [];q(arguments, function (b) {
            a.push(c(b));
          });
          return e.apply(b, a);
        } : function (a, b) {
          e(a, null == b ? "" : b);
        };
      }return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
          var c = e("debug");return function () {
            a && c.apply(b, arguments);
          };
        }() };
    }];
  }function Wa(a, b) {
    if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ca("isecfld", b);return a;
  }function eg(a) {
    return a + "";
  }function ta(a, b) {
    if (a) {
      if (a.constructor === a) throw ca("isecfn", b);if (a.window === a) throw ca("isecwindow", b);if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ca("isecdom", b);if (a === Object) throw ca("isecobj", b);
    }return a;
  }function ld(a, b) {
    if (a) {
      if (a.constructor === a) throw ca("isecfn", b);if (a === fg || a === gg || a === hg) throw ca("isecff", b);
    }
  }function Hb(a, b) {
    if (a && (a === 0 .constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw ca("isecaf", b);
  }function ig(a, b) {
    return "undefined" !== typeof a ? a : b;
  }function md(a, b) {
    return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
  }function aa(a, b) {
    var d, c;switch (a.type) {case s.Program:
        d = !0;q(a.body, function (a) {
          aa(a.expression, b);d = d && a.expression.constant;
        });a.constant = d;break;case s.Literal:
        a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
        aa(a.argument, b);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
        aa(a.left, b);aa(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
        aa(a.left, b);aa(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
        aa(a.test, b);aa(a.alternate, b);aa(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
        a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
        aa(a.object, b);a.computed && aa(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
        d = a.filter ? !b(a.callee.name).$stateful : !1;c = [];q(a.arguments, function (a) {
          aa(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];break;case s.AssignmentExpression:
        aa(a.left, b);aa(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case s.ArrayExpression:
        d = !0;c = [];q(a.elements, function (a) {
          aa(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
        d = !0;c = [];q(a.properties, function (a) {
          aa(a.value, b);d = d && a.value.constant;a.value.constant || c.push.apply(c, a.value.toWatch);
        });a.constant = d;a.toWatch = c;break;case s.ThisExpression:
        a.constant = !1;a.toWatch = [];break;case s.LocalsExpression:
        a.constant = !1, a.toWatch = [];}
  }function nd(a) {
    if (1 == a.length) {
      a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : u;
    }
  }function od(a) {
    return a.type === s.Identifier || a.type === s.MemberExpression;
  }function pd(a) {
    if (1 === a.body.length && od(a.body[0].expression)) return { type: s.AssignmentExpression,
      left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
  }function qd(a) {
    return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
  }function rd(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function sd(a, b) {
    this.astBuilder = a;this.$filter = b;
  }function Ib(a) {
    return "constructor" == a;
  }function fc(a) {
    return D(a.valueOf) ? a.valueOf() : jg.call(a);
  }function rf() {
    var a = V(),
        b = V(),
        d = { "true": !0,
      "false": !1, "null": null, undefined: u };this.addLiteral = function (a, b) {
      d[a] = b;
    };this.$get = ["$filter", function (c) {
      function e(d, e, g) {
        var p, t, G;g = g || x;switch (typeof d === "undefined" ? "undefined" : _typeof(d)) {case "string":
            G = d = d.trim();var C = g ? b : a;p = C[G];if (!p) {
              ":" === d.charAt(0) && ":" === d.charAt(1) && (t = !0, d = d.substring(2));p = g ? L : F;var K = new gc(p);p = new hc(K, c, p).parse(d);p.constant ? p.$$watchDelegate = m : t ? p.$$watchDelegate = p.literal ? l : k : p.inputs && (p.$$watchDelegate = h);g && (p = f(p));C[G] = p;
            }return n(p, e);case "function":
            return n(d, e);default:
            return n(E, e);}
      }function f(a) {
        function b(c, d, e, f) {
          var g = x;x = !0;try {
            return a(c, d, e, f);
          } finally {
            x = g;
          }
        }if (!a) return a;b.$$watchDelegate = a.$$watchDelegate;b.assign = f(a.assign);b.constant = a.constant;b.literal = a.literal;for (var c = 0; a.inputs && c < a.inputs.length; ++c) {
          a.inputs[c] = f(a.inputs[c]);
        }b.inputs = a.inputs;return b;
      }function g(a, b) {
        return null == a || null == b ? a === b : "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && (a = fc(a), "object" === (typeof a === "undefined" ? "undefined" : _typeof(a))) ? !1 : a === b || a !== a && b !== b;
      }function h(a, b, c, d, e) {
        var f = d.inputs,
            h;if (1 === f.length) {
          var k = g,
              f = f[0];return a.$watch(function (a) {
            var b = f(a);g(b, k) || (h = d(a, u, u, [b]), k = b && fc(b));return h;
          }, b, c, e);
        }for (var l = [], m = [], n = 0, p = f.length; n < p; n++) {
          l[n] = g, m[n] = null;
        }return a.$watch(function (a) {
          for (var b = !1, c = 0, e = f.length; c < e; c++) {
            var k = f[c](a);if (b || (b = !g(k, l[c]))) m[c] = k, l[c] = k && fc(k);
          }b && (h = d(a, u, u, m));return h;
        }, b, c, e);
      }function k(a, b, c, d) {
        var e, f;return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          f = a;D(b) && b.apply(this, arguments);A(a) && d.$$postDigest(function () {
            A(f) && e();
          });
        }, c);
      }function l(a, b, c, d) {
        function e(a) {
          var b = !0;q(a, function (a) {
            A(a) || (b = !1);
          });return b;
        }var f, g;return f = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          g = a;D(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
            e(g) && f();
          });
        }, c);
      }function m(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          e();return d(a);
        }, b, c);
      }function n(a, b) {
        if (!b) return a;var c = a.$$watchDelegate,
            d = !1,
            c = c !== l && c !== k ? function (c, e, f, g) {
          f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
        } : function (c, d, e, f) {
          e = a(c, d, e, f);c = b(e, c, d);return A(e) ? c : e;
        };a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);return c;
      }var p = Ga().noUnsafeEval,
          F = { csp: p, expensiveChecks: !1, literals: pa(d) },
          L = { csp: p, expensiveChecks: !0, literals: pa(d) },
          x = !1;e.$$runningExpensiveChecks = function () {
        return x;
      };return e;
    }];
  }function tf() {
    this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
      return td(function (b) {
        a.$evalAsync(b);
      }, b);
    }];
  }function uf() {
    this.$get = ["$browser", "$exceptionHandler", function (a, b) {
      return td(function (b) {
        a.defer(b);
      }, b);
    }];
  }function td(a, b) {
    function d() {
      this.$$state = { status: 0 };
    }function c(a, b) {
      return function (c) {
        b.call(a, c);
      };
    }function e(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
        var a, d, e;e = c.pending;c.processScheduled = !1;c.pending = u;for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];a = e[f][c.status];try {
            D(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (h) {
            d.reject(h), b(h);
          }
        }
      }));
    }function f() {
      this.promise = new d();
    }var g = O("$q", TypeError);S(d.prototype, { then: function then(a, b, c) {
        if (z(a) && z(b) && z(c)) return this;var d = new f();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && e(this.$$state);return d.promise;
      }, "catch": function _catch(a) {
        return this.then(null, a);
      }, "finally": function _finally(a, b) {
        return this.then(function (b) {
          return k(b, !0, a);
        }, function (b) {
          return k(b, !1, a);
        }, b);
      } });S(f.prototype, { resolve: function resolve(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a));
      }, $$resolve: function $$resolve(a) {
        function d(a) {
          k || (k = !0, h.$$resolve(a));
        }
        function f(a) {
          k || (k = !0, h.$$reject(a));
        }var g,
            h = this,
            k = !1;try {
          if (J(a) || D(a)) g = a && a.then;D(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state));
        } catch (l) {
          f(l), b(l);
        }
      }, reject: function reject(a) {
        this.promise.$$state.status || this.$$reject(a);
      }, $$reject: function $$reject(a) {
        this.promise.$$state.value = a;this.promise.$$state.status = 2;e(this.promise.$$state);
      }, notify: function notify(c) {
        var d = this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && a(function () {
          for (var a, e, f = 0, g = d.length; f < g; f++) {
            e = d[f][0];a = d[f][3];try {
              e.notify(D(a) ? a(c) : c);
            } catch (h) {
              b(h);
            }
          }
        });
      } });var h = function h(a, b) {
      var c = new f();b ? c.resolve(a) : c.reject(a);return c.promise;
    },
        k = function k(a, b, c) {
      var d = null;try {
        D(c) && (d = c());
      } catch (e) {
        return h(e, !1);
      }return d && D(d.then) ? d.then(function () {
        return h(a, b);
      }, function (a) {
        return h(a, !1);
      }) : h(a, b);
    },
        l = function l(a, b, c, d) {
      var e = new f();e.resolve(a);return e.promise.then(b, c, d);
    },
        m = function m(a) {
      if (!D(a)) throw g("norslvr", a);var b = new f();a(function (a) {
        b.resolve(a);
      }, function (a) {
        b.reject(a);
      });return b.promise;
    };m.prototype = d.prototype;m.defer = function () {
      var a = new f();a.resolve = c(a, a.resolve);a.reject = c(a, a.reject);a.notify = c(a, a.notify);return a;
    };m.reject = function (a) {
      var b = new f();b.reject(a);return b.promise;
    };m.when = l;m.resolve = l;m.all = function (a) {
      var b = new f(),
          c = 0,
          d = M(a) ? [] : {};q(a, function (a, e) {
        c++;l(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });0 === c && b.resolve(d);return b.promise;
    };return m;
  }function Df() {
    this.$get = ["$window", "$timeout", function (a, b) {
      var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          e = !!d,
          f = e ? function (a) {
        var b = d(a);return function () {
          c(b);
        };
      } : function (a) {
        var c = b(a, 16.66, !1);return function () {
          b.cancel(c);
        };
      };f.supported = e;return f;
    }];
  }function sf() {
    function a(a) {
      function b() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++qb;this.$$ChildScope = null;
      }b.prototype = a;return b;
    }var b = 10,
        d = O("$rootScope"),
        c = null,
        e = null;this.digestTtl = function (a) {
      arguments.length && (b = a);return b;
    };this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
      function k(a) {
        a.currentScope.$$destroyed = !0;
      }function l(a) {
        9 === Da && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
      }function m() {
        this.$id = ++qb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
      }function n(a) {
        if (w.$$phase) throw d("inprog", w.$$phase);w.$$phase = a;
      }function p(a, b) {
        do {
          a.$$watchersCount += b;
        } while (a = a.$parent);
      }function F(a, b, c) {
        do {
          a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
        } while (a = a.$parent);
      }function s() {}function x() {
        for (; t.length;) {
          try {
            t.shift()();
          } catch (a) {
            f(a);
          }
        }e = null;
      }function r() {
        null === e && (e = h.defer(function () {
          w.$apply(x);
        }));
      }m.prototype = { constructor: m, $new: function $new(b, c) {
          var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c != this) && d.$on("$destroy", k);return d;
        }, $watch: function $watch(a, b, d, e) {
          var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
              k = h.$$watchers,
              l = { fn: b, last: s, get: f, exp: e || a, eq: !!d };c = null;D(b) || (l.fn = E);k || (k = h.$$watchers = []);k.unshift(l);p(this, 1);return function () {
            0 <= bb(k, l) && p(h, -1);c = null;
          };
        }, $watchGroup: function $watchGroup(a, b) {
          function c() {
            h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
          }var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              h = !1,
              k = !0;if (!a.length) {
            var l = !0;g.$evalAsync(function () {
              l && b(e, e, g);
            });return function () {
              l = !1;
            };
          }if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
            e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
          });q(a, function (a, b) {
            var k = g.$watch(a, function (a, f) {
              e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
            });f.push(k);
          });return function () {
            for (; f.length;) {
              f.shift()();
            }
          };
        }, $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;var b, d, g, h;if (!z(e)) {
              if (J(e)) {
                if (za(e)) for (f !== n && (f = n, v = f.length = 0, l++), a = e.length, v !== a && (l++, f.length = v = a), b = 0; b < a; b++) {
                  h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                } else {
                  f !== p && (f = p = {}, v = 0, l++);a = 0;for (b in e) {
                    va.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (v++, f[b] = g, l++));
                  }if (v > a) for (b in l++, f) {
                    va.call(e, b) || (v--, delete f[b]);
                  }
                }
              } else f !== e && (f = e, l++);return l;
            }
          }c.$stateful = !0;var d = this,
              e,
              f,
              h,
              k = 1 < b.length,
              l = 0,
              m = g(a, c),
              n = [],
              p = {},
              r = !0,
              v = 0;return this.$watch(m, function () {
            r ? (r = !1, b(e, e, d)) : b(e, h, d);if (k) if (J(e)) {
              if (za(e)) {
                h = Array(e.length);for (var a = 0; a < e.length; a++) {
                  h[a] = e[a];
                }
              } else for (a in h = {}, e) {
                va.call(e, a) && (h[a] = e[a]);
              }
            } else h = e;
          });
        }, $digest: function $digest() {
          var a,
              g,
              k,
              l,
              m,
              p,
              r,
              q,
              t = b,
              F,
              A = [],
              z,
              y;n("$digest");h.$$checkUrlChange();this === w && null !== e && (h.defer.cancel(e), x());c = null;do {
            q = !1;
            for (F = this; v.length;) {
              try {
                y = v.shift(), y.scope.$eval(y.expression, y.locals);
              } catch (E) {
                f(E);
              }c = null;
            }a: do {
              if (p = F.$$watchers) for (r = p.length; r--;) {
                try {
                  if (a = p[r]) if (m = a.get, (g = m(F)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k))) q = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, F), 5 > t && (z = 4 - t, A[z] || (A[z] = []), A[z].push({ msg: D(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k }));else if (a === c) {
                    q = !1;break a;
                  }
                } catch (H) {
                  f(H);
                }
              }if (!(p = F.$$watchersCount && F.$$childHead || F !== this && F.$$nextSibling)) for (; F !== this && !(p = F.$$nextSibling);) {
                F = F.$parent;
              }
            } while (F = p);if ((q || v.length) && !t--) throw w.$$phase = null, d("infdig", b, A);
          } while (q || v.length);for (w.$$phase = null; u.length;) {
            try {
              u.shift()();
            } catch (J) {
              f(J);
            }
          }
        }, $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === w && h.$$applicationDestroyed();p(this, -this.$$watchersCount);for (var b in this.$$listenerCount) {
              F(this, this.$$listenerCount[b], b);
            }a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = E;this.$on = this.$watch = this.$watchGroup = function () {
              return E;
            };this.$$listeners = {};this.$$nextSibling = null;l(this);
          }
        }, $eval: function $eval(a, b) {
          return g(a)(this, b);
        }, $evalAsync: function $evalAsync(a, b) {
          w.$$phase || v.length || h.defer(function () {
            v.length && w.$digest();
          });v.push({ scope: this, expression: g(a), locals: b });
        }, $$postDigest: function $$postDigest(a) {
          u.push(a);
        }, $apply: function $apply(a) {
          try {
            n("$apply");try {
              return this.$eval(a);
            } finally {
              w.$$phase = null;
            }
          } catch (b) {
            f(b);
          } finally {
            try {
              w.$digest();
            } catch (c) {
              throw f(c), c;
            }
          }
        }, $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }var c = this;a && t.push(b);a = g(a);r();
        }, $on: function $on(a, b) {
          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do {
            d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
          } while (d = d.$parent);var e = this;return function () {
            var d = c.indexOf(b);-1 !== d && (c[d] = null, F(e, 1, a));
          };
        }, $emit: function $emit(a, b) {
          var c = [],
              d,
              e = this,
              g = !1,
              h = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
              g = !0;
            }, preventDefault: function preventDefault() {
              h.defaultPrevented = !0;
            }, defaultPrevented: !1 },
              k = cb([h], arguments, 1),
              l,
              m;do {
            d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for (m = d.length; l < m; l++) {
              if (d[l]) try {
                d[l].apply(null, k);
              } catch (n) {
                f(n);
              } else d.splice(l, 1), l--, m--;
            }if (g) return h.currentScope = null, h;e = e.$parent;
          } while (e);
          h.currentScope = null;return h;
        }, $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              e = { name: a, targetScope: this, preventDefault: function preventDefault() {
              e.defaultPrevented = !0;
            }, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var g = cb([e], arguments, 1), h, k; c = d;) {
            e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) {
              if (d[h]) try {
                d[h].apply(null, g);
              } catch (l) {
                f(l);
              } else d.splice(h, 1), h--, k--;
            }if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
              c = c.$parent;
            }
          }e.currentScope = null;return e;
        } };var w = new m(),
          v = w.$$asyncQueue = [],
          u = w.$$postDigestQueue = [],
          t = w.$$applyAsyncQueue = [];return w;
    }];
  }function le() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
      return A(b) ? (a = b, this) : a;
    };this.imgSrcSanitizationWhitelist = function (a) {
      return A(a) ? (b = a, this) : b;
    };this.$get = function () {
      return function (d, c) {
        var e = c ? b : a,
            f;f = sa(d).href;return "" === f || f.match(e) ? d : "unsafe:" + f;
      };
    };
  }function kg(a) {
    if ("self" === a) return a;
    if (y(a)) {
      if (-1 < a.indexOf("***")) throw ua("iwcard", a);a = ud(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + a + "$");
    }if (Za(a)) return new RegExp("^" + a.source + "$");throw ua("imatcher");
  }function vd(a) {
    var b = [];A(a) && q(a, function (a) {
      b.push(kg(a));
    });return b;
  }function wf() {
    this.SCE_CONTEXTS = ma;var a = ["self"],
        b = [];this.resourceUrlWhitelist = function (b) {
      arguments.length && (a = vd(b));return a;
    };this.resourceUrlBlacklist = function (a) {
      arguments.length && (b = vd(a));return b;
    };this.$get = ["$injector", function (d) {
      function c(a, b) {
        return "self" === a ? gd(b) : !!a.exec(b.href);
      }function e(a) {
        var b = function b(a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };a && (b.prototype = new a());b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };return b;
      }var f = function f(a) {
        throw ua("unsafe");
      };d.has("$sanitize") && (f = d.get("$sanitize"));var g = e(),
          h = {};h[ma.HTML] = e(g);h[ma.CSS] = e(g);h[ma.URL] = e(g);h[ma.JS] = e(g);h[ma.RESOURCE_URL] = e(h[ma.URL]);return { trustAs: function trustAs(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw ua("icontext", a, b);if (null === b || z(b) || "" === b) return b;if ("string" !== typeof b) throw ua("itype", a);return new c(b);
        }, getTrusted: function getTrusted(d, e) {
          if (null === e || z(e) || "" === e) return e;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (d === ma.RESOURCE_URL) {
            var g = sa(e.toString()),
                n,
                p,
                q = !1;n = 0;for (p = a.length; n < p; n++) {
              if (c(a[n], g)) {
                q = !0;break;
              }
            }if (q) for (n = 0, p = b.length; n < p; n++) {
              if (c(b[n], g)) {
                q = !1;break;
              }
            }if (q) return e;throw ua("insecurl", e.toString());
          }if (d === ma.HTML) return f(e);throw ua("unsafe");
        }, valueOf: function valueOf(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        } };
    }];
  }function vf() {
    var a = !0;this.enabled = function (b) {
      arguments.length && (a = !!b);return a;
    };this.$get = ["$parse", "$sceDelegate", function (b, d) {
      if (a && 8 > Da) throw ua("iequirks");var c = ia(ma);c.isEnabled = function () {
        return a;
      };c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
        return b;
      }, c.valueOf = $a);c.parseAs = function (a, d) {
        var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
          return c.getTrusted(a, b);
        });
      };var e = c.parseAs,
          f = c.getTrusted,
          g = c.trustAs;q(ma, function (a, b) {
        var d = N(b);c[fb("parse_as_" + d)] = function (b) {
          return e(a, b);
        };c[fb("get_trusted_" + d)] = function (b) {
          return f(a, b);
        };c[fb("trust_as_" + d)] = function (b) {
          return g(a, b);
        };
      });return c;
    }];
  }function xf() {
    this.$get = ["$window", "$document", function (a, b) {
      var d = {},
          c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
          e = Y((/android (\d+)/.exec(N((a.navigator || {}).userAgent)) || [])[1]),
          f = /Boxee/i.test((a.navigator || {}).userAgent),
          g = b[0] || {},
          h,
          k = /^(Moz|webkit|ms)(?=[A-Z])/,
          l = g.body && g.body.style,
          m = !1,
          n = !1;if (l) {
        for (var p in l) {
          if (m = k.exec(p)) {
            h = m[0];h = h.substr(0, 1).toUpperCase() + h.substr(1);break;
          }
        }h || (h = "WebkitOpacity" in l && "webkit");m = !!("transition" in l || h + "Transition" in l);n = !!("animation" in l || h + "Animation" in l);!e || m && n || (m = y(l.webkitTransition), n = y(l.webkitAnimation));
      }return { history: !(!c || 4 > e || f), hasEvent: function hasEvent(a) {
          if ("input" === a && 11 >= Da) return !1;if (z(d[a])) {
            var b = g.createElement("div");d[a] = "on" + a in b;
          }return d[a];
        }, csp: Ga(), vendorPrefix: h, transitions: m, animations: n, android: e };
    }];
  }function zf() {
    var a;this.httpOptions = function (b) {
      return b ? (a = b, this) : a;
    };this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
      function f(g, h) {
        f.totalPendingRequests++;y(g) && b.get(g) || (g = e.getTrustedResourceUrl(g));var k = d.defaults && d.defaults.transformResponse;M(k) ? k = k.filter(function (a) {
          return a !== ac;
        }) : k === ac && (k = null);return d.get(g, S({ cache: b, transformResponse: k }, a))["finally"](function () {
          f.totalPendingRequests--;
        }).then(function (a) {
          b.put(g, a.data);return a.data;
        }, function (a) {
          if (!h) throw lg("tpload", g, a.status, a.statusText);return c.reject(a);
        });
      }f.totalPendingRequests = 0;return f;
    }];
  }function Af() {
    this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
      return { findBindings: function findBindings(a, b, d) {
          a = a.getElementsByClassName("ng-binding");var g = [];q(a, function (a) {
            var c = ea.element(a).data("$binding");c && q(c, function (c) {
              d ? new RegExp("(^|\\s)" + ud(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
            });
          });return g;
        }, findModels: function findModels(a, b, d) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
            var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');if (k.length) return k;
          }
        }, getLocation: function getLocation() {
          return d.url();
        }, setLocation: function setLocation(b) {
          b !== d.url() && (d.url(b), a.$digest());
        }, whenStable: function whenStable(a) {
          b.notifyWhenNoOutstandingRequests(a);
        } };
    }];
  }function Bf() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
      function f(f, k, l) {
        D(f) || (l = k, k = f, f = E);var m = Aa.call(arguments, 3),
            n = A(l) && !l,
            p = (n ? c : d).defer(),
            q = p.promise,
            s;s = b.defer(function () {
          try {
            p.resolve(f.apply(null, m));
          } catch (b) {
            p.reject(b), e(b);
          } finally {
            delete g[q.$$timeoutId];
          }n || a.$apply();
        }, k);q.$$timeoutId = s;g[s] = p;return q;
      }var g = {};f.cancel = function (a) {
        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
      };return f;
    }];
  }function sa(a) {
    Da && (Z.setAttribute("href", a), a = Z.href);Z.setAttribute("href", a);return { href: Z.href, protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "", host: Z.host, search: Z.search ? Z.search.replace(/^\?/, "") : "", hash: Z.hash ? Z.hash.replace(/^#/, "") : "", hostname: Z.hostname, port: Z.port, pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname };
  }function gd(a) {
    a = y(a) ? sa(a) : a;return a.protocol === wd.protocol && a.host === wd.host;
  }function Cf() {
    this.$get = da(T);
  }function xd(a) {
    function b(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }var d = a[0] || {},
        c = {},
        e = "";return function () {
      var a, g, h, k, l;a = d.cookie || "";if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) {
        g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), z(c[l]) && (c[l] = b(g.substring(k + 1))));
      }return c;
    };
  }function Gf() {
    this.$get = xd;
  }function Jc(a) {
    function b(d, c) {
      if (J(d)) {
        var e = {};q(d, function (a, c) {
          e[c] = b(c, a);
        });return e;
      }return a.factory(d + "Filter", c);
    }this.register = b;this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];b("currency", yd);b("date", zd);b("filter", mg);
    b("json", ng);b("limitTo", og);b("lowercase", pg);b("number", Ad);b("orderBy", Bd);b("uppercase", qg);
  }function mg() {
    return function (a, b, d) {
      if (!za(a)) {
        if (null == a) return a;throw O("filter")("notarray", a);
      }var c;switch (ic(b)) {case "function":
          break;case "boolean":case "null":case "number":case "string":
          c = !0;case "object":
          b = rg(b, d, c);break;default:
          return a;}return Array.prototype.filter.call(a, b);
    };
  }function rg(a, b, d) {
    var c = J(a) && "$" in a;!0 === b ? b = na : D(b) || (b = function b(a, _b) {
      if (z(a)) return !1;if (null === a || null === _b) return a === _b;if (J(_b) || J(a) && !rc(a)) return !1;a = N("" + a);_b = N("" + _b);return -1 !== a.indexOf(_b);
    });return function (e) {
      return c && !J(e) ? Ma(e, a.$, b, !1) : Ma(e, a, b, d);
    };
  }function Ma(a, b, d, c, e) {
    var f = ic(a),
        g = ic(b);if ("string" === g && "!" === b.charAt(0)) return !Ma(a, b.substring(1), d, c);if (M(a)) return a.some(function (a) {
      return Ma(a, b, d, c);
    });switch (f) {case "object":
        var h;if (c) {
          for (h in a) {
            if ("$" !== h.charAt(0) && Ma(a[h], b, d, !0)) return !0;
          }return e ? !1 : Ma(a, b, d, !1);
        }if ("object" === g) {
          for (h in b) {
            if (e = b[h], !D(e) && !z(e) && (f = "$" === h, !Ma(f ? a : a[h], e, d, f, f))) return !1;
          }return !0;
        }return d(a, b);case "function":
        return !1;default:
        return d(a, b);}
  }function ic(a) {
    return null === a ? "null" : typeof a === "undefined" ? "undefined" : _typeof(a);
  }function yd(a) {
    var b = a.NUMBER_FORMATS;return function (a, c, e) {
      z(c) && (c = b.CURRENCY_SYM);z(e) && (e = b.PATTERNS[1].maxFrac);return null == a ? a : Cd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
    };
  }function Ad(a) {
    var b = a.NUMBER_FORMATS;return function (a, c) {
      return null == a ? a : Cd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }function sg(a) {
    var b = 0,
        d,
        c,
        e,
        f,
        g;-1 < (c = a.indexOf(Dd)) && (a = a.replace(Dd, ""));0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);for (e = 0; a.charAt(e) == jc; e++) {}if (e == (g = a.length)) d = [0], c = 1;else {
      for (g--; a.charAt(g) == jc;) {
        g--;
      }c -= e;d = [];for (f = 0; e <= g; e++, f++) {
        d[f] = +a.charAt(e);
      }
    }c > Ed && (d = d.splice(0, Ed - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
  }function tg(a, b, d, c) {
    var e = a.d,
        f = e.length - a.i;b = z(b) ? Math.min(Math.max(d, f), c) : +b;d = b + a.i;c = e[d];if (0 < d) {
      e.splice(Math.max(a.i, d));for (var g = d; g < e.length; g++) {
        e[g] = 0;
      }
    } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) {
      e[g] = 0;
    }if (5 <= c) if (0 > d - 1) {
      for (c = 0; c > d; c--) {
        e.unshift(0), a.i++;
      }e.unshift(1);a.i++;
    } else e[d - 1]++;for (; f < Math.max(0, b); f++) {
      e.push(0);
    }if (b = e.reduceRight(function (a, b, c, d) {
      b += a;d[c] = b % 10;return Math.floor(b / 10);
    }, 0)) e.unshift(b), a.i++;
  }function Cd(a, b, d, c, e) {
    if (!y(a) && !R(a) || isNaN(a)) return "";var f = !isFinite(a),
        g = !1,
        h = Math.abs(a) + "",
        k = "";if (f) k = "\u221E";else {
      g = sg(h);tg(g, e, b.minFrac, b.maxFrac);k = g.d;h = g.i;e = g.e;f = [];for (g = k.reduce(function (a, b) {
        return a && !b;
      }, !0); 0 > h;) {
        k.unshift(0), h++;
      }0 < h ? f = k.splice(h) : (f = k, k = [0]);h = [];for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize).join("")); k.length > b.gSize;) {
        h.unshift(k.splice(-b.gSize).join(""));
      }k.length && h.unshift(k.join(""));k = h.join(d);f.length && (k += c + f.join(""));e && (k += "e+" + e);
    }return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
  }function Jb(a, b, d, c) {
    var e = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");for (a = "" + a; a.length < b;) {
      a = jc + a;
    }d && (a = a.substr(a.length - b));return e + a;
  }function X(a, b, d, c, e) {
    d = d || 0;return function (f) {
      f = f["get" + a]();if (0 < d || f > -d) f += d;0 === f && -12 == d && (f = 12);return Jb(f, b, c, e);
    };
  }function lb(a, b, d) {
    return function (c, e) {
      var f = c["get" + a](),
          g = vb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return e[g][f];
    };
  }function Fd(a) {
    var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
  }function Gd(a) {
    return function (b) {
      var d = Fd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Jb(b, a);
    };
  }function kc(a, b) {
    return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
  }function zd(a) {
    function b(a) {
      var b;if (b = a.match(d)) {
        a = new Date(0);var f = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            k = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = Y(b[9] + b[10]), g = Y(b[9] + b[11]));h.call(a, Y(b[1]), Y(b[2]) - 1, Y(b[3]));f = Y(b[4] || 0) - f;g = Y(b[5] || 0) - g;h = Y(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, f, g, h, b);
      }return a;
    }var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, d, f) {
      var g = "",
          h = [],
          k,
          l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;y(c) && (c = ug.test(c) ? Y(c) : b(c));R(c) && (c = new Date(c));if (!fa(c) || !isFinite(c.getTime())) return c;for (; d;) {
        (l = vg.exec(d)) ? (h = cb(h, l, 1), d = h.pop()) : (h.push(d), d = null);
      }var m = c.getTimezoneOffset();f && (m = vc(f, m), c = Rb(c, f, !0));q(h, function (b) {
        k = wg[b];g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });return g;
    };
  }function ng() {
    return function (a, b) {
      z(b) && (b = 2);return db(a, b);
    };
  }function og() {
    return function (a, b, d) {
      b = Infinity === Math.abs(Number(b)) ? Number(b) : Y(b);if (isNaN(b)) return a;R(a) && (a = a.toString());if (!M(a) && !y(a)) return a;d = !d || isNaN(d) ? 0 : Y(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d);
    };
  }function Bd(a) {
    function b(b, d) {
      d = d ? -1 : 1;return b.map(function (b) {
        var c = 1,
            h = $a;if (D(b)) h = b;else if (y(b)) {
          if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (h = a(b), h.constant)) var k = h(),
              h = function h(a) {
            return a[k];
          };
        }return { get: h,
          descending: c * d };
      });
    }function d(a) {
      switch (typeof a === "undefined" ? "undefined" : _typeof(a)) {case "number":case "boolean":case "string":
          return !0;default:
          return !1;}
    }return function (a, e, f) {
      if (null == a) return a;if (!za(a)) throw O("orderBy")("notarray", a);M(e) || (e = [e]);0 === e.length && (e = ["+"]);var g = b(e, f);g.push({ get: function get() {
          return {};
        }, descending: f ? -1 : 1 });a = Array.prototype.map.call(a, function (a, b) {
        return { value: a, predicateValues: g.map(function (c) {
            var e = c.get(a);c = typeof e === "undefined" ? "undefined" : _typeof(e);if (null === e) c = "string", e = "null";else if ("string" === c) e = e.toLowerCase();else if ("object" === c) a: {
              if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e))) break a;if (rc(e) && (e = e.toString(), d(e))) break a;e = b;
            }return { value: e, type: c };
          }) };
      });a.sort(function (a, b) {
        for (var c = 0, d = 0, e = g.length; d < e; ++d) {
          var c = a.predicateValues[d],
              f = b.predicateValues[d],
              q = 0;c.type === f.type ? c.value !== f.value && (q = c.value < f.value ? -1 : 1) : q = c.type < f.type ? -1 : 1;if (c = q * g[d].descending) break;
        }return c;
      });return a = a.map(function (a) {
        return a.value;
      });
    };
  }function Na(a) {
    D(a) && (a = { link: a });a.restrict = a.restrict || "AC";return da(a);
  }function Hd(a, b, d, c, e) {
    var f = this,
        g = [];f.$error = {};f.$$success = {};f.$pending = u;f.$name = e(b.name || b.ngForm || "")(d);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Kb;f.$rollbackViewValue = function () {
      q(g, function (a) {
        a.$rollbackViewValue();
      });
    };f.$commitViewValue = function () {
      q(g, function (a) {
        a.$commitViewValue();
      });
    };f.$addControl = function (a) {
      Ta(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;
    };f.$$renameControl = function (a, b) {
      var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
    };f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];q(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });q(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });q(f.$$success, function (b, c) {
        f.$setValidity(c, null, a);
      });bb(g, a);a.$$parentForm = Kb;
    };Id({ ctrl: this, $element: a, set: function set(a, b, c) {
        var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      }, unset: function unset(a, b, c) {
        var d = a[b];d && (bb(d, c), 0 === d.length && delete a[b]);
      }, $animate: c });f.$setDirty = function () {
      c.removeClass(a, Xa);c.addClass(a, Lb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();
    };f.$setPristine = function () {
      c.setClass(a, Xa, Lb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;q(g, function (a) {
        a.$setPristine();
      });
    };f.$setUntouched = function () {
      q(g, function (a) {
        a.$setUntouched();
      });
    };f.$setSubmitted = function () {
      c.addClass(a, "ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();
    };
  }function lc(a) {
    a.$formatters.push(function (b) {
      return a.$isEmpty(b) ? b : b.toString();
    });
  }function mb(a, b, d, c, e, f) {
    var g = N(b[0].type);if (!e.android) {
      var h = !1;b.on("compositionstart", function () {
        h = !0;
      });b.on("compositionend", function () {
        h = !1;l();
      });
    }var k,
        l = function l(a) {
      k && (f.defer.cancel(k), k = null);if (!h) {
        var e = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (e = W(e));(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
      }
    };if (e.hasEvent("input")) b.on("input", l);else {
      var m = function m(a, b, c) {
        k || (k = f.defer(function () {
          k = null;b && b.value === c || l(a);
        }));
      };b.on("keydown", function (a) {
        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });if (e.hasEvent("paste")) b.on("paste cut", m);
    }b.on("change", l);if (Jd[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
      if (!k) {
        var b = this.validity,
            c = b.badInput,
            d = b.typeMismatch;k = f.defer(function () {
          k = null;b.badInput === c && b.typeMismatch === d || l(a);
        });
      }
    });c.$render = function () {
      var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
    };
  }function Mb(a, b) {
    return function (d, c) {
      var e, f;if (fa(d)) return d;if (y(d)) {
        '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (xg.test(d)) return new Date(d);a.lastIndex = 0;if (e = a.exec(d)) return e.shift(), f = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(e, function (a, c) {
          c < b.length && (f[b[c]] = +a);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }return NaN;
    };
  }function nb(a, b, d, c) {
    return function (e, f, g, h, k, l, m) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }function p(a) {
        return A(a) && !fa(a) ? d(a) || u : a;
      }Kd(e, f, g, h);mb(e, f, g, h, k, l);var q = h && h.$options && h.$options.timezone,
          s;h.$$parserName = a;h.$parsers.push(function (a) {
        return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, s), q && (a = Rb(a, q)), a) : u;
      });h.$formatters.push(function (a) {
        if (a && !fa(a)) throw ob("datefmt", a);if (n(a)) return (s = a) && q && (s = Rb(s, q, !0)), m("date")(a, c, q);s = null;return "";
      });if (A(g.min) || g.ngMin) {
        var x;h.$validators.min = function (a) {
          return !n(a) || z(x) || d(a) >= x;
        };g.$observe("min", function (a) {
          x = p(a);h.$validate();
        });
      }if (A(g.max) || g.ngMax) {
        var r;h.$validators.max = function (a) {
          return !n(a) || z(r) || d(a) <= r;
        };g.$observe("max", function (a) {
          r = p(a);h.$validate();
        });
      }
    };
  }function Kd(a, b, d, c) {
    (c.$$hasNativeValidators = J(b[0].validity)) && c.$parsers.push(function (a) {
      var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? u : a;
    });
  }function Ld(a, b, d, c, e) {
    if (A(c)) {
      a = a(c);if (!a.constant) throw ob("constexpr", d, c);return a(b);
    }return e;
  }function mc(a, b) {
    a = "ngClass" + a;return ["$animate", function (d) {
      function c(a, b) {
        var c = [],
            d = 0;a: for (; d < a.length; d++) {
          for (var e = a[d], m = 0; m < b.length; m++) {
            if (e == b[m]) continue a;
          }c.push(e);
        }return c;
      }function e(a) {
        var b = [];return M(a) ? (q(a, function (a) {
          b = b.concat(e(a));
        }), b) : y(a) ? a.split(" ") : J(a) ? (q(a, function (a, c) {
          a && (b = b.concat(c.split(" ")));
        }), b) : a;
      }return { restrict: "AC", link: function link(f, g, h) {
          function k(a, b) {
            var c = g.data("$classCounts") || V(),
                d = [];q(a, function (a) {
              if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
            });g.data("$classCounts", c);return d.join(" ");
          }function l(a) {
            if (!0 === b || f.$index % 2 === b) {
              var l = e(a || []);if (!m) {
                var q = k(l, 1);h.$addClass(q);
              } else if (!na(a, m)) {
                var s = e(m),
                    q = c(l, s),
                    l = c(s, l),
                    q = k(q, 1),
                    l = k(l, -1);q && q.length && d.addClass(g, q);l && l.length && d.removeClass(g, l);
              }
            }m = ia(a);
          }var m;f.$watch(h[a], l, !0);h.$observe("class", function (b) {
            l(f.$eval(h[a]));
          });"ngClass" !== a && f.$watch("$index", function (c, d) {
            var g = c & 1;if (g !== (d & 1)) {
              var l = e(f.$eval(h[a]));g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g));
            }
          });
        } };
    }];
  }function Id(a) {
    function b(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
    }function d(a, c) {
      a = a ? "-" + zc(a, "-") : "";b(pb + a, !0 === c);b(Md + a, !1 === c);
    }var c = a.ctrl,
        e = a.$element,
        f = {},
        g = a.set,
        h = a.unset,
        k = a.$animate;f[Md] = !(f[pb] = e.hasClass(pb));c.$setValidity = function (a, e, f) {
      z(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Nd(c.$pending) && (c.$pending = u));Oa(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));c.$pending ? (b(Od, !0), c.$valid = c.$invalid = u, d("", null)) : (b(Od, !1), c.$valid = Nd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));e = c.$pending && c.$pending[a] ? u : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;d(a, e);c.$$parentForm.$setValidity(a, e, c);
    };
  }function Nd(a) {
    if (a) for (var b in a) {
      if (a.hasOwnProperty(b)) return !1;
    }return !0;
  }var yg = /^\/(.+)\/([a-z]*)$/,
      va = Object.prototype.hasOwnProperty,
      N = function N(a) {
    return y(a) ? a.toLowerCase() : a;
  },
      vb = function vb(a) {
    return y(a) ? a.toUpperCase() : a;
  },
      Da,
      H,
      $,
      Aa = [].slice,
      Yf = [].splice,
      zg = [].push,
      ka = Object.prototype.toString,
      sc = Object.getPrototypeOf,
      Ba = O("ng"),
      ea = T.angular || (T.angular = {}),
      Tb,
      qb = 0;Da = P.documentMode;E.$inject = [];$a.$inject = [];var M = Array.isArray,
      Zd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
      W = function W(a) {
    return y(a) ? a.trim() : a;
  },
      ud = function ud(a) {
    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      Ga = function Ga() {
    if (!A(Ga.rules)) {
      var a = P.querySelector("[ng-csp]") || P.querySelector("[data-ng-csp]");if (a) {
        var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
        Ga.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
      } else {
        a = Ga;try {
          new Function(""), b = !1;
        } catch (d) {
          b = !0;
        }a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
      }
    }return Ga.rules;
  },
      sb = function sb() {
    if (A(sb.name_)) return sb.name_;var a,
        b,
        d = Qa.length,
        c,
        e;for (b = 0; b < d; ++b) {
      if (c = Qa[b], a = P.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
        e = a.getAttribute(c + "jq");break;
      }
    }return sb.name_ = e;
  },
      be = /:/g,
      Qa = ["ng-", "data-ng-", "ng:", "x-ng-"],
      ge = /[A-Z]/g,
      Ac = !1,
      Pa = 3,
      ke = { full: "1.5.3",
    major: 1, minor: 5, dot: 3, codeName: "diplohaplontic-meiosis" };U.expando = "ng339";var hb = U.cache = {},
      Mf = 1;U._data = function (a) {
    return this.cache[a[this.expando]] || {};
  };var Hf = /([\:\-\_]+(.))/g,
      If = /^moz([A-Z])/,
      zb = { mouseleave: "mouseout", mouseenter: "mouseover" },
      Vb = O("jqLite"),
      Lf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      Ub = /<|&#?\w+;/,
      Jf = /<([\w:-]+)/,
      Kf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ha = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ha.optgroup = ha.option;ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;ha.th = ha.td;var Rf = Node.prototype.contains || function (a) {
    return !!(this.compareDocumentPosition(a) & 16);
  },
      Ra = U.prototype = { ready: function ready(a) {
      function b() {
        d || (d = !0, a());
      }var d = !1;"complete" === P.readyState ? setTimeout(b) : (this.on("DOMContentLoaded", b), U(T).on("load", b));
    }, toString: function toString() {
      var a = [];q(this, function (b) {
        a.push("" + b);
      });return "[" + a.join(", ") + "]";
    }, eq: function eq(a) {
      return 0 <= a ? H(this[a]) : H(this[this.length + a]);
    }, length: 0, push: zg, sort: [].sort, splice: [].splice },
      Eb = {};q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
    Eb[N(a)] = a;
  });var Sc = {};q("input select option textarea button form details".split(" "), function (a) {
    Sc[a] = !0;
  });var $c = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };q({ data: Xb, removeData: gb,
    hasData: function hasData(a) {
      for (var b in hb[a.ng339]) {
        return !0;
      }return !1;
    }, cleanData: function cleanData(a) {
      for (var b = 0, d = a.length; b < d; b++) {
        gb(a[b]);
      }
    } }, function (a, b) {
    U[b] = a;
  });q({ data: Xb, inheritedData: Db, scope: function scope(a) {
      return H.data(a, "$scope") || Db(a.parentNode || a, ["$isolateScope", "$scope"]);
    }, isolateScope: function isolateScope(a) {
      return H.data(a, "$isolateScope") || H.data(a, "$isolateScopeNoTemplate");
    }, controller: Pc, injector: function injector(a) {
      return Db(a, "$injector");
    }, removeAttr: function removeAttr(a, b) {
      a.removeAttribute(b);
    }, hasClass: Ab, css: function css(a, b, d) {
      b = fb(b);if (A(d)) a.style[b] = d;else return a.style[b];
    }, attr: function attr(a, b, d) {
      var c = a.nodeType;if (c !== Pa && 2 !== c && 8 !== c) if (c = N(b), Eb[c]) {
        if (A(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));else return a[b] || (a.attributes.getNamedItem(b) || E).specified ? c : u;
      } else if (A(d)) a.setAttribute(b, d);else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? u : a;
    }, prop: function prop(a, b, d) {
      if (A(d)) a[b] = d;else return a[b];
    }, text: function () {
      function a(a, d) {
        if (z(d)) {
          var c = a.nodeType;return 1 === c || c === Pa ? a.textContent : "";
        }a.textContent = d;
      }a.$dv = "";return a;
    }(), val: function val(a, b) {
      if (z(b)) {
        if (a.multiple && "select" === oa(a)) {
          var d = [];q(a.options, function (a) {
            a.selected && d.push(a.value || a.text);
          });return 0 === d.length ? null : d;
        }return a.value;
      }a.value = b;
    }, html: function html(a, b) {
      if (z(b)) return a.innerHTML;xb(a, !0);a.innerHTML = b;
    }, empty: Qc }, function (a, b) {
    U.prototype[b] = function (b, c) {
      var e,
          f,
          g = this.length;if (a !== Qc && z(2 == a.length && a !== Ab && a !== Pc ? b : c)) {
        if (J(b)) {
          for (e = 0; e < g; e++) {
            if (a === Xb) a(this[e], b);else for (f in b) {
              a(this[e], f, b[f]);
            }
          }return this;
        }e = a.$dv;g = z(e) ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
          var h = a(this[f], b, c);e = e ? e + h : h;
        }return e;
      }for (e = 0; e < g; e++) {
        a(this[e], b, c);
      }return this;
    };
  });q({ removeData: gb, on: function on(a, b, d, c) {
      if (A(c)) throw Vb("onargs");if (Kc(a)) {
        c = yb(a, !0);var e = c.events,
            f = c.handle;f || (f = c.handle = Of(a, e));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
          var h = e[b];h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));h.push(d);
        }; g--;) {
          b = c[g], zb[b] ? (h(zb[b], Qf), h(b, u, !0)) : h(b);
        }
      }
    }, off: Oc, one: function one(a, b, d) {
      a = H(a);a.on(b, function e() {
        a.off(b, d);a.off(b, e);
      });a.on(b, d);
    }, replaceWith: function replaceWith(a, b) {
      var d,
          c = a.parentNode;xb(a);q(new U(b), function (b) {
        d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
      });
    }, children: function children(a) {
      var b = [];q(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      });return b;
    }, contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    }, append: function append(a, b) {
      var d = a.nodeType;if (1 === d || 11 === d) {
        b = new U(b);for (var d = 0, c = b.length; d < c; d++) {
          a.appendChild(b[d]);
        }
      }
    },
    prepend: function prepend(a, b) {
      if (1 === a.nodeType) {
        var d = a.firstChild;q(new U(b), function (b) {
          a.insertBefore(b, d);
        });
      }
    }, wrap: function wrap(a, b) {
      Mc(a, H(b).eq(0).clone()[0]);
    }, remove: Yb, detach: function detach(a) {
      Yb(a, !0);
    }, after: function after(a, b) {
      var d = a,
          c = a.parentNode;b = new U(b);for (var e = 0, f = b.length; e < f; e++) {
        var g = b[e];c.insertBefore(g, d.nextSibling);d = g;
      }
    }, addClass: Cb, removeClass: Bb, toggleClass: function toggleClass(a, b, d) {
      b && q(b.split(" "), function (b) {
        var e = d;z(e) && (e = !Ab(a, b));(e ? Cb : Bb)(a, b);
      });
    }, parent: function parent(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    }, next: function next(a) {
      return a.nextElementSibling;
    }, find: function find(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
    }, clone: Wb, triggerHandler: function triggerHandler(a, b, d) {
      var c,
          e,
          f = b.type || b,
          g = yb(a);if (g = (g = g && g.events) && g[f]) c = { preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }, isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        },
        stopPropagation: E, type: f, target: a }, b.type && (c = S(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
        c.isImmediatePropagationStopped() || b.apply(a, e);
      });
    } }, function (a, b) {
    U.prototype[b] = function (b, c, e) {
      for (var f, g = 0, h = this.length; g < h; g++) {
        z(f) ? (f = a(this[g], b, c, e), A(f) && (f = H(f))) : Nc(f, a(this[g], b, c, e));
      }return A(f) ? f : this;
    };U.prototype.bind = U.prototype.on;U.prototype.unbind = U.prototype.off;
  });Ua.prototype = { put: function put(a, b) {
      this[Ha(a, this.nextUid)] = b;
    }, get: function get(a) {
      return this[Ha(a, this.nextUid)];
    }, remove: function remove(a) {
      var b = this[a = Ha(a, this.nextUid)];delete this[a];return b;
    } };var Ff = [function () {
    this.$get = [function () {
      return Ua;
    }];
  }],
      Tf = /^([^\(]+?)=>/,
      Uf = /^[^\(]*\(\s*([^\)]*)\)/m,
      Ag = /,/,
      Bg = /^\s*(_?)(\S+?)\1\s*$/,
      Sf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Ia = O("$injector");eb.$$annotate = function (a, b, d) {
    var c;if ("function" === typeof a) {
      if (!(c = a.$inject)) {
        c = [];if (a.length) {
          if (b) throw y(d) && d || (d = a.name || Vf(a)), Ia("strictdi", d);b = Tc(a);q(b[1].split(Ag), function (a) {
            a.replace(Bg, function (a, b, d) {
              c.push(d);
            });
          });
        }a.$inject = c;
      }
    } else M(a) ? (b = a.length - 1, Sa(a[b], "fn"), c = a.slice(0, b)) : Sa(a, "fn", !0);return c;
  };var Pd = O("$animate"),
      Ye = function Ye() {
    this.$get = E;
  },
      Ze = function Ze() {
    var a = new Ua(),
        b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
      function e(a, b, c) {
        var d = !1;b && (b = y(b) ? b.split(" ") : M(b) ? b : [], q(b, function (b) {
          b && (d = !0, a[b] = c);
        }));return d;
      }function f() {
        q(b, function (b) {
          var c = a.get(b);if (c) {
            var d = Wf(b.attr("class")),
                e = "",
                f = "";q(c, function (a, b) {
              a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
            });q(b, function (a) {
              e && Cb(a, e);f && Bb(a, f);
            });a.remove(b);
          }
        });b.length = 0;
      }return { enabled: E, on: E, off: E, pin: E, push: function push(g, h, k, l) {
          l && l();k = k || {};k.from && g.css(k.from);k.to && g.css(k.to);if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);g = new d();g.complete();return g;
        } };
    }];
  },
      We = ["$provide", function (a) {
    var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
      if (d && "." !== d.charAt(0)) throw Pd("notcsel", d);var e = d + "-animation";b.$$registeredAnimations[d.substr(1)] = e;a.factory(e, c);
    };this.classNameFilter = function (a) {
      if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Pd("nongcls", "ng-animate");return this.$$classNameFilter;
    };this.$get = ["$$animateQueue", function (a) {
      function b(a, c, d) {
        if (d) {
          var h;a: {
            for (h = 0; h < d.length; h++) {
              var k = d[h];if (1 === k.nodeType) {
                h = k;break a;
              }
            }h = void 0;
          }!h || h.parentNode || h.previousElementSibling || (d = null);
        }d ? d.after(a) : c.prepend(a);
      }return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
          a.end && a.end();
        }, enter: function enter(e, f, g, h) {
          f = f && H(f);g = g && H(g);f = f || g.parent();b(e, f, g);return a.push(e, "enter", Ja(h));
        }, move: function move(e, f, g, h) {
          f = f && H(f);g = g && H(g);f = f || g.parent();b(e, f, g);return a.push(e, "move", Ja(h));
        }, leave: function leave(b, c) {
          return a.push(b, "leave", Ja(c), function () {
            b.remove();
          });
        }, addClass: function addClass(b, c, g) {
          g = Ja(g);g.addClass = ib(g.addclass, c);return a.push(b, "addClass", g);
        }, removeClass: function removeClass(b, c, g) {
          g = Ja(g);g.removeClass = ib(g.removeClass, c);return a.push(b, "removeClass", g);
        }, setClass: function setClass(b, c, g, h) {
          h = Ja(h);h.addClass = ib(h.addClass, c);h.removeClass = ib(h.removeClass, g);return a.push(b, "setClass", h);
        }, animate: function animate(b, c, g, h, k) {
          k = Ja(k);k.from = k.from ? S(k.from, c) : c;k.to = k.to ? S(k.to, g) : g;k.tempClasses = ib(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
        } };
    }];
  }],
      af = function af() {
    this.$get = ["$$rAF", function (a) {
      function b(b) {
        d.push(b);1 < d.length || a(function () {
          for (var a = 0; a < d.length; a++) {
            d[a]();
          }d = [];
        });
      }var d = [];return function () {
        var a = !1;b(function () {
          a = !0;
        });return function (d) {
          a ? d() : b(d);
        };
      };
    }];
  },
      $e = function $e() {
    this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
      function f(a) {
        this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
          var d = c[0];d && d.hidden ? e(a, 0, !1) : b(a);
        };this._state = 0;
      }f.chain = function (a, b) {
        function c() {
          if (d === a.length) b(!0);else a[d](function (a) {
            !1 === a ? b(!1) : (d++, c());
          });
        }var d = 0;c();
      };f.all = function (a, b) {
        function c(f) {
          e = e && f;++d === a.length && b(e);
        }var d = 0,
            e = !0;q(a, function (a) {
          a.done(c);
        });
      };f.prototype = { setHost: function setHost(a) {
          this.host = a || {};
        }, done: function done(a) {
          2 === this._state ? a() : this._doneCallbacks.push(a);
        }, progress: E, getPromise: function getPromise() {
          if (!this.promise) {
            var b = this;this.promise = a(function (a, c) {
              b.done(function (b) {
                !1 === b ? c() : a();
              });
            });
          }return this.promise;
        }, then: function then(a, b) {
          return this.getPromise().then(a, b);
        }, "catch": function _catch(a) {
          return this.getPromise()["catch"](a);
        }, "finally": function _finally(a) {
          return this.getPromise()["finally"](a);
        }, pause: function pause() {
          this.host.pause && this.host.pause();
        }, resume: function resume() {
          this.host.resume && this.host.resume();
        }, end: function end() {
          this.host.end && this.host.end();this._resolve(!0);
        }, cancel: function cancel() {
          this.host.cancel && this.host.cancel();this._resolve(!1);
        }, complete: function complete(a) {
          var b = this;0 === b._state && (b._state = 1, b._tick(function () {
            b._resolve(a);
          }));
        }, _resolve: function _resolve(a) {
          2 !== this._state && (q(this._doneCallbacks, function (b) {
            b(a);
          }), this._doneCallbacks.length = 0, this._state = 2);
        } };return f;
    }];
  },
      Xe = function Xe() {
    this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
      return function (b, e) {
        function f() {
          a(function () {
            g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);h || k.complete();h = !0;
          });return k;
        }var g = e || {};g.$$prepared || (g = pa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var h,
            k = new d();return { start: f, end: f };
      };
    }];
  },
      ga = O("$compile");Cc.$inject = ["$provide", "$$sanitizeUriProvider"];var Vc = /^((?:x|data)[\:\-_])/i,
      Zf = O("$controller"),
      ad = /^(\S+)(\s+as\s+([\w$]+))?$/,
      gf = function gf() {
    this.$get = ["$document", function (a) {
      return function (b) {
        b ? !b.nodeType && b instanceof H && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
      };
    }];
  },
      bd = "application/json",
      bc = { "Content-Type": bd + ";charset=utf-8" },
      ag = /^\[|^\{(?!\{)/,
      bg = { "[": /]$/, "{": /}$/ },
      $f = /^\)\]\}',?\n/,
      Cg = O("$http"),
      fd = function fd(a) {
    return function () {
      throw Cg("legacy", a);
    };
  },
      La = ea.$interpolateMinErr = O("$interpolate");La.throwNoconcat = function (a) {
    throw La("noconcat", a);
  };La.interr = function (a, b) {
    return La("interr", a, b.toString());
  };var Dg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      dg = { http: 80, https: 443, ftp: 21 },
      Fb = O("$location"),
      Eg = { $$html5: !1, $$replace: !1, absUrl: Gb("$$absUrl"), url: function url(a) {
      if (z(a)) return this.$$url;var b = Dg.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
    }, protocol: Gb("$$protocol"), host: Gb("$$host"), port: Gb("$$port"), path: kd("$$path", function (a) {
      a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
    }), search: function search(a, b) {
      switch (arguments.length) {case 0:
          return this.$$search;case 1:
          if (y(a) || R(a)) a = a.toString(), this.$$search = xc(a);else if (J(a)) a = pa(a, {}), q(a, function (b, c) {
            null == b && delete a[c];
          }), this.$$search = a;else throw Fb("isrcharg");break;default:
          z(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
    }, hash: kd("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }), replace: function replace() {
      this.$$replace = !0;return this;
    } };q([jd, ec, dc], function (a) {
    a.prototype = Object.create(Eg);a.prototype.state = function (b) {
      if (!arguments.length) return this.$$state;if (a !== dc || !this.$$html5) throw Fb("nostate");this.$$state = z(b) ? null : b;return this;
    };
  });var ca = O("$parse"),
      fg = Function.prototype.call,
      gg = Function.prototype.apply,
      hg = Function.prototype.bind,
      Nb = V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
    Nb[a] = !0;
  });var Fg = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
      gc = function gc(a) {
    this.options = a;
  };gc.prototype = { constructor: gc, lex: function lex(a) {
      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) {
        if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdent(a)) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
          var b = a + this.peek(),
              d = b + this.peek(2),
              c = Nb[b],
              e = Nb[d];Nb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
        }
      }return this.tokens;
    }, is: function is(a, b) {
      return -1 !== b.indexOf(a);
    }, peek: function peek(a) {
      a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    }, isNumber: function isNumber(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    }, isWhitespace: function isWhitespace(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\xA0" === a;
    }, isIdent: function isIdent(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    }, isExpOperator: function isExpOperator(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    }, throwError: function throwError(a, b, d) {
      d = d || this.index;b = A(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw ca("lexerr", a, b, this.text);
    }, readNumber: function readNumber() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var d = N(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
          var c = this.peek();if ("e" == d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }this.index++;
      }this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
    }, readIdent: function readIdent() {
      for (var a = this.index; this.index < this.text.length;) {
        var b = this.text.charAt(this.index);if (!this.isIdent(b) && !this.isNumber(b)) break;this.index++;
      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
    }, readString: function readString(a) {
      var b = this.index;this.index++;for (var d = "", c = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index),
            c = c + f;if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Fg[f] || f, e = !1;else if ("\\" === f) e = !0;else {
          if (f === a) {
            this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
          }d += f;
        }this.index++;
      }this.throwError("Unterminated quote", b);
    } };var s = function s(a, b) {
    this.lexer = a;this.options = b;
  };s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.LocalsExpression = "LocalsExpression";
  s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
      this.text = a;this.tokens = this.lexer.lex(a);a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
    }, program: function program() {
      for (var a = [];;) {
        if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return { type: s.Program, body: a };
      }
    }, expressionStatement: function expressionStatement() {
      return { type: s.ExpressionStatement, expression: this.filterChain() };
    }, filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) {
        a = this.filter(a);
      }return a;
    }, expression: function expression() {
      return this.assignment();
    }, assignment: function assignment() {
      var a = this.ternary();this.expect("=") && (a = { type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "=" });return a;
    }, ternary: function ternary() {
      var a = this.logicalOR(),
          b,
          d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: b, consequent: d }) : a;
    }, logicalOR: function logicalOR() {
      for (var a = this.logicalAND(); this.expect("||");) {
        a = { type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };
      }return a;
    }, logicalAND: function logicalAND() {
      for (var a = this.equality(); this.expect("&&");) {
        a = { type: s.LogicalExpression, operator: "&&", left: a, right: this.equality() };
      }return a;
    }, equality: function equality() {
      for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.relational() };
      }return a;
    }, relational: function relational() {
      for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
        a = { type: s.BinaryExpression,
          operator: b.text, left: a, right: this.additive() };
      }return a;
    }, additive: function additive() {
      for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.multiplicative() };
      }return a;
    }, multiplicative: function multiplicative() {
      for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
        a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.unary() };
      }return a;
    }, unary: function unary() {
      var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
    }, primary: function primary() {
      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: s.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) {
        "(" === b.text ? (a = { type: s.CallExpression, callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");
      }return a;
    }, filter: function filter(a) {
      a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) {
        a.push(this.expression());
      }return b;
    }, parseArguments: function parseArguments() {
      var a = [];if (")" !== this.peekToken().text) {
        do {
          a.push(this.expression());
        } while (this.expect(","));
      }return a;
    }, identifier: function identifier() {
      var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: s.Identifier, name: a.text };
    }, constant: function constant() {
      return { type: s.Literal, value: this.consume().value };
    }, arrayDeclaration: function arrayDeclaration() {
      var a = [];if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;a.push(this.expression());
        } while (this.expect(","));
      }this.consume("]");
      return { type: s.ArrayExpression, elements: a };
    }, object: function object() {
      var a = [],
          b;if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;b = { type: s.Property, kind: "init" };this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());this.consume(":");b.value = this.expression();a.push(b);
        } while (this.expect(","));
      }this.consume("}");return { type: s.ObjectExpression, properties: a };
    }, throwError: function throwError(a, b) {
      throw ca("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
    }, consume: function consume(a) {
      if (0 === this.tokens.length) throw ca("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
    }, peekToken: function peekToken() {
      if (0 === this.tokens.length) throw ca("ueoe", this.text);return this.tokens[0];
    }, peek: function peek(a, b, d, c) {
      return this.peekAhead(0, a, b, d, c);
    }, peekAhead: function peekAhead(a, b, d, c, e) {
      if (this.tokens.length > a) {
        a = this.tokens[a];var f = a.text;if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
      }return !1;
    },
    expect: function expect(a, b, d, c) {
      return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
    }, selfReferential: { "this": { type: s.ThisExpression }, $locals: { type: s.LocalsExpression } } };rd.prototype = { compile: function compile(a, b) {
      var d = this,
          c = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, expensiveChecks: b, fn: { vars: [], body: [], own: {} }, assign: { vars: [], body: [], own: {} }, inputs: [] };aa(c, d.$filter);var e = "",
          f;this.stage = "assign";if (f = pd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");f = nd(c.body);d.stage = "inputs";q(f, function (a, b) {
        var c = "fn" + b;d.state[c] = { vars: [], body: [], own: {} };d.state.computing = c;var e = d.nextId();d.recurse(a, e);d.return_(e);d.state.inputs.push(c);a.watchId = b;
      });this.state.computing = "fn";this.stage = "main";this.recurse(c);e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Wa, ta, ld, eg, Hb, ig, md, a);this.state = this.stage = u;e.literal = qd(c);e.constant = c.constant;return e;
    }, USE: "use", STRICT: "strict", watchFns: function watchFns() {
      var a = [],
          b = this.state.inputs,
          d = this;q(b, function (b) {
        a.push("var " + b + "=" + d.generateFunction(b, "s"));
      });b.length && a.push("fn.inputs=[" + b.join(",") + "];");return a.join("");
    }, generateFunction: function generateFunction(a, b) {
      return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
    }, filterPrefix: function filterPrefix() {
      var a = [],
          b = this;q(this.state.filters, function (d, c) {
        a.push(d + "=$filter(" + b.escape(c) + ")");
      });return a.length ? "var " + a.join(",") + ";" : "";
    }, varsPrefix: function varsPrefix(a) {
      return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
    }, body: function body(a) {
      return this.state[a].body.join("");
    }, recurse: function recurse(a, b, d, c, e, f) {
      var g,
          h,
          k = this,
          l,
          m;c = c || E;if (!f && A(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {case s.Program:
          q(a.body, function (b, c) {
            k.recurse(b.expression, u, u, function (a) {
              h = a;
            });c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
          });break;case s.Literal:
          m = this.escape(a.value);this.assign(b, m);c(m);break;case s.UnaryExpression:
          this.recurse(a.argument, u, u, function (a) {
            h = a;
          });m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);c(m);break;case s.BinaryExpression:
          this.recurse(a.left, u, u, function (a) {
            g = a;
          });this.recurse(a.right, u, u, function (a) {
            h = a;
          });m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
          b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));c(b);break;case s.ConditionalExpression:
          b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
          b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);Wa(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
            k.if_("inputs" === k.stage || "s", function () {
              e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
            });
          }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));(k.state.expensiveChecks || Ib(a.name)) && k.addEnsureSafeObject(b);c(b);
          break;case s.MemberExpression:
          g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, u, function () {
            k.if_(k.notNull(g), function () {
              e && 1 !== e && k.addEnsureSafeAssignContext(g);if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);else {
                Wa(a.property.name);e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));m = k.nonComputedMember(g, a.property.name);if (k.state.expensiveChecks || Ib(a.property.name)) m = k.ensureSafeObject(m);k.assign(b, m);d && (d.computed = !1, d.name = a.property.name);
              }
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }, !!e);break;case s.CallExpression:
          b = b || this.nextId();a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
            var b = k.nextId();k.recurse(a, b);l.push(b);
          }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
            k.if_(k.notNull(h), function () {
              k.addEnsureSafeFunction(h);q(a.arguments, function (a) {
                k.recurse(a, k.nextId(), u, function (a) {
                  l.push(k.ensureSafeObject(a));
                });
              });g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";m = k.ensureSafeObject(m);k.assign(b, m);
            }, function () {
              k.assign(b, "undefined");
            });c(b);
          }));break;case s.AssignmentExpression:
          h = this.nextId();g = {};if (!od(a.left)) throw ca("lval");this.recurse(a.left, u, g, function () {
            k.if_(k.notNull(g.context), function () {
              k.recurse(a.right, h);k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));k.addEnsureSafeAssignContext(g.context);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
            });
          }, 1);break;case s.ArrayExpression:
          l = [];q(a.elements, function (a) {
            k.recurse(a, k.nextId(), u, function (a) {
              l.push(a);
            });
          });m = "[" + l.join(",") + "]";this.assign(b, m);c(m);break;case s.ObjectExpression:
          l = [];q(a.properties, function (a) {
            k.recurse(a.value, k.nextId(), u, function (b) {
              l.push(k.escape(a.key.type === s.Identifier ? a.key.name : "" + a.key.value) + ":" + b);
            });
          });m = "{" + l.join(",") + "}";this.assign(b, m);c(m);break;case s.ThisExpression:
          this.assign(b, "s");c("s");break;case s.LocalsExpression:
          this.assign(b, "l");c("l");break;case s.NGValueParameter:
          this.assign(b, "v"), c("v");}
    }, getHasOwnProperty: function getHasOwnProperty(a, b) {
      var d = a + "." + b,
          c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
    }, assign: function assign(a, b) {
      if (a) return this.current().body.push(a, "=", b, ";"), a;
    }, filter: function filter(a) {
      this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
    }, ifDefined: function ifDefined(a, b) {
      return "ifDefined(" + a + "," + this.escape(b) + ")";
    }, plus: function plus(a, b) {
      return "plus(" + a + "," + b + ")";
    }, return_: function return_(a) {
      this.current().body.push("return ", a, ";");
    }, if_: function if_(a, b, d) {
      if (!0 === a) b();else {
        var c = this.current().body;c.push("if(", a, "){");b();c.push("}");
        d && (c.push("else{"), d(), c.push("}"));
      }
    }, not: function not(a) {
      return "!(" + a + ")";
    }, notNull: function notNull(a) {
      return a + "!=null";
    }, nonComputedMember: function nonComputedMember(a, b) {
      return a + "." + b;
    }, computedMember: function computedMember(a, b) {
      return a + "[" + b + "]";
    }, member: function member(a, b, d) {
      return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
    }, addEnsureSafeObject: function addEnsureSafeObject(a) {
      this.current().body.push(this.ensureSafeObject(a), ";");
    }, addEnsureSafeMemberName: function addEnsureSafeMemberName(a) {
      this.current().body.push(this.ensureSafeMemberName(a), ";");
    }, addEnsureSafeFunction: function addEnsureSafeFunction(a) {
      this.current().body.push(this.ensureSafeFunction(a), ";");
    }, addEnsureSafeAssignContext: function addEnsureSafeAssignContext(a) {
      this.current().body.push(this.ensureSafeAssignContext(a), ";");
    }, ensureSafeObject: function ensureSafeObject(a) {
      return "ensureSafeObject(" + a + ",text)";
    }, ensureSafeMemberName: function ensureSafeMemberName(a) {
      return "ensureSafeMemberName(" + a + ",text)";
    }, ensureSafeFunction: function ensureSafeFunction(a) {
      return "ensureSafeFunction(" + a + ",text)";
    }, getStringValue: function getStringValue(a) {
      this.assign(a, "getStringValue(" + a + ")");
    }, ensureSafeAssignContext: function ensureSafeAssignContext(a) {
      return "ensureSafeAssignContext(" + a + ",text)";
    }, lazyRecurse: function lazyRecurse(a, b, d, c, e, f) {
      var g = this;return function () {
        g.recurse(a, b, d, c, e, f);
      };
    }, lazyAssign: function lazyAssign(a, b) {
      var d = this;return function () {
        d.assign(a, b);
      };
    }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }, escape: function escape(a) {
      if (y(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (R(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw ca("esc");
    }, nextId: function nextId(a, b) {
      var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
    }, current: function current() {
      return this.state[this.state.computing];
    } };sd.prototype = { compile: function compile(a, b) {
      var d = this,
          c = this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = b;aa(c, d.$filter);var e, f;if (e = pd(c)) f = this.recurse(e);e = nd(c.body);var g;e && (g = [], q(e, function (a, b) {
        var c = d.recurse(a);a.input = c;g.push(c);a.watchId = b;
      }));var h = [];q(c.body, function (a) {
        h.push(d.recurse(a.expression));
      });e = 0 === c.body.length ? E : 1 === c.body.length ? h[0] : function (a, b) {
        var c;q(h, function (d) {
          c = d(a, b);
        });return c;
      };f && (e.assign = function (a, b, c) {
        return f(a, c, b);
      });g && (e.inputs = g);e.literal = qd(c);e.constant = c.constant;return e;
    }, recurse: function recurse(a, b, d) {
      var c,
          e,
          f = this,
          g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
          return this.value(a.value, b);case s.UnaryExpression:
          return e = this.recurse(a.argument), this["unary" + a.operator](e, b);case s.BinaryExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.LogicalExpression:
          return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.ConditionalExpression:
          return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case s.Identifier:
          return Wa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Ib(a.name), b, d, f.expression);case s.MemberExpression:
          return c = this.recurse(a.object, !1, !!d), a.computed || (Wa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);case s.CallExpression:
          return g = [], q(a.arguments, function (a) {
            g.push(f.recurse(a));
          }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
            for (var n = [], p = 0; p < g.length; ++p) {
              n.push(g[p](a, c, d, f));
            }a = e.apply(u, n, f);return b ? { context: u, name: u, value: a } : a;
          } : function (a, c, d, m) {
            var n = e(a, c, d, m),
                p;if (null != n.value) {
              ta(n.context, f.expression);ld(n.value, f.expression);p = [];for (var q = 0; q < g.length; ++q) {
                p.push(ta(g[q](a, c, d, m), f.expression));
              }p = ta(n.value.apply(n.context, p), f.expression);
            }return b ? { value: p } : p;
          };case s.AssignmentExpression:
          return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
            var n = c(a, d, g, m);a = e(a, d, g, m);ta(n.value, f.expression);Hb(n.context);n.context[n.name] = a;return b ? { value: a } : a;
          };case s.ArrayExpression:
          return g = [], q(a.elements, function (a) {
            g.push(f.recurse(a));
          }), function (a, c, d, e) {
            for (var f = [], p = 0; p < g.length; ++p) {
              f.push(g[p](a, c, d, e));
            }return b ? { value: f } : f;
          };case s.ObjectExpression:
          return g = [], q(a.properties, function (a) {
            g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, value: f.recurse(a.value) });
          }), function (a, c, d, e) {
            for (var f = {}, p = 0; p < g.length; ++p) {
              f[g[p].key] = g[p].value(a, c, d, e);
            }return b ? { value: f } : f;
          };case s.ThisExpression:
          return function (a) {
            return b ? { value: a } : a;
          };case s.LocalsExpression:
          return function (a, c) {
            return b ? { value: c } : c;
          };case s.NGValueParameter:
          return function (a, c, d) {
            return b ? { value: d } : d;
          };}
    }, "unary+": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = A(d) ? +d : 0;return b ? { value: d } : d;
      };
    }, "unary-": function unary(a, b) {
      return function (d, c, e, f) {
        d = a(d, c, e, f);d = A(d) ? -d : 0;return b ? { value: d } : d;
      };
    }, "unary!": function unary(a, b) {
      return function (d, c, e, f) {
        d = !a(d, c, e, f);return b ? { value: d } : d;
      };
    }, "binary+": function binary(a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);c = b(c, e, f, g);h = md(h, c);return d ? { value: h } : h;
      };
    }, "binary-": function binary(a, b, d) {
      return function (c, e, f, g) {
        var h = a(c, e, f, g);c = b(c, e, f, g);
        h = (A(h) ? h : 0) - (A(c) ? c : 0);return d ? { value: h } : h;
      };
    }, "binary*": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) * b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary/": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) / b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary%": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) % b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary===": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) === b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary!==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) !== b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary==": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) == b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary!=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) != b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary<": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) < b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary>": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) > b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary<=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) <= b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary>=": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) >= b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary&&": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) && b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "binary||": function binary(a, b, d) {
      return function (c, e, f, g) {
        c = a(c, e, f, g) || b(c, e, f, g);return d ? { value: c } : c;
      };
    }, "ternary?:": function ternary(a, b, d, c) {
      return function (e, f, g, h) {
        e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);return c ? { value: e } : e;
      };
    }, value: function value(a, b) {
      return function () {
        return b ? { context: u,
          name: u, value: a } : a;
      };
    }, identifier: function identifier(a, b, d, c, e) {
      return function (f, g, h, k) {
        f = g && a in g ? g : f;c && 1 !== c && f && !f[a] && (f[a] = {});g = f ? f[a] : u;b && ta(g, e);return d ? { context: f, name: a, value: g } : g;
      };
    }, computedMember: function computedMember(a, b, d, c, e) {
      return function (f, g, h, k) {
        var l = a(f, g, h, k),
            m,
            n;null != l && (m = b(f, g, h, k), m += "", Wa(m, e), c && 1 !== c && (Hb(l), l && !l[m] && (l[m] = {})), n = l[m], ta(n, e));return d ? { context: l, name: m, value: n } : n;
      };
    }, nonComputedMember: function nonComputedMember(a, b, d, c, e, f) {
      return function (g, h, k, l) {
        g = a(g, h, k, l);e && 1 !== e && (Hb(g), g && !g[b] && (g[b] = {}));h = null != g ? g[b] : u;(d || Ib(b)) && ta(h, f);return c ? { context: g, name: b, value: h } : h;
      };
    }, inputs: function inputs(a, b) {
      return function (d, c, e, f) {
        return f ? f[b] : a(d, c, e);
      };
    } };var hc = function hc(a, b, d) {
    this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(a, d);this.astCompiler = d.csp ? new sd(this.ast, b) : new rd(this.ast, b);
  };hc.prototype = { constructor: hc, parse: function parse(a) {
      return this.astCompiler.compile(a, this.options.expensiveChecks);
    } };var jg = Object.prototype.valueOf,
      ua = O("$sce"),
      ma = { HTML: "html", CSS: "css", URL: "url",
    RESOURCE_URL: "resourceUrl", JS: "js" },
      lg = O("$compile"),
      Z = P.createElement("a"),
      wd = sa(T.location.href);xd.$inject = ["$document"];Jc.$inject = ["$provide"];var Ed = 22,
      Dd = ".",
      jc = "0";yd.$inject = ["$locale"];Ad.$inject = ["$locale"];var wg = { yyyy: X("FullYear", 4, 0, !1, !0), yy: X("FullYear", 2, 0, !0, !0), y: X("FullYear", 1, 0, !1, !0), MMMM: lb("Month"), MMM: lb("Month", !0), MM: X("Month", 2, 1), M: X("Month", 1, 1), LLLL: lb("Month", !1, !0), dd: X("Date", 2), d: X("Date", 1), HH: X("Hours", 2), H: X("Hours", 1), hh: X("Hours", 2, -12), h: X("Hours", 1, -12),
    mm: X("Minutes", 2), m: X("Minutes", 1), ss: X("Seconds", 2), s: X("Seconds", 1), sss: X("Milliseconds", 3), EEEE: lb("Day"), EEE: lb("Day", !0), a: function a(_a, b) {
      return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
    }, Z: function Z(a, b, d) {
      a = -1 * d;return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2));
    }, ww: Gd(2), w: Gd(1), G: kc, GG: kc, GGG: kc, GGGG: function GGGG(a, b) {
      return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
    } },
      vg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      ug = /^\-?\d+$/;zd.$inject = ["$locale"];var pg = da(N),
      qg = da(vb);Bd.$inject = ["$parse"];var me = da({ restrict: "E", compile: function compile(a, b) {
      if (!b.href && !b.xlinkHref) return function (a, b) {
        if ("a" === b[0].nodeName.toLowerCase()) {
          var e = "[object SVGAnimatedString]" === ka.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
            b.attr(e) || a.preventDefault();
          });
        }
      };
    } }),
      wb = {};q(Eb, function (a, b) {
    function d(a, d, e) {
      a.$watch(e[c], function (a) {
        e.$set(b, !!a);
      });
    }if ("multiple" != a) {
      var c = ya("ng-" + b),
          e = d;"checked" === a && (e = function e(a, b, _e) {
        _e.ngModel !== _e[c] && d(a, b, _e);
      });wb[c] = function () {
        return { restrict: "A", priority: 100, link: e };
      };
    }
  });q($c, function (a, b) {
    wb[b] = function () {
      return { priority: 100, link: function link(a, c, e) {
          if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(yg))) {
            e.$set("ngPattern", new RegExp(c[1], c[2]));return;
          }a.$watch(e[b], function (a) {
            e.$set(b, a);
          });
        } };
    };
  });q(["src", "srcset", "href"], function (a) {
    var b = ya("ng-" + a);wb[b] = function () {
      return { priority: 99, link: function link(d, c, e) {
          var f = a,
              g = a;"href" === a && "[object SVGAnimatedString]" === ka.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);e.$observe(b, function (b) {
            b ? (e.$set(g, b), Da && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
          });
        } };
    };
  });var Kb = { $addControl: E, $$renameControl: function $$renameControl(a, b) {
      a.$name = b;
    }, $removeControl: E, $setValidity: E, $setDirty: E, $setPristine: E, $setSubmitted: E };Hd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var Qd = function Qd(a) {
    return ["$timeout", "$parse", function (b, d) {
      function c(a) {
        return "" === a ? d('this[""]').assign : d(a).assign || E;
      }return { name: "form",
        restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Hd, compile: function compile(d, f) {
          d.addClass(Xa).addClass(pb);var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
              var n = f[0];if (!("action" in e)) {
                var p = function p(b) {
                  a.$apply(function () {
                    n.$commitViewValue();n.$setSubmitted();
                  });b.preventDefault();
                };d[0].addEventListener("submit", p, !1);d.on("$destroy", function () {
                  b(function () {
                    d[0].removeEventListener("submit", p, !1);
                  }, 0, !1);
                });
              }(f[1] || n.$$parentForm).$addControl(n);var q = g ? c(n.$name) : E;g && (q(a, n), e.$observe(g, function (b) {
                n.$name !== b && (q(a, u), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n));
              }));d.on("$destroy", function () {
                n.$$parentForm.$removeControl(n);q(a, u);S(n, Kb);
              });
            } };
        } };
    }];
  },
      ne = Qd(),
      Ae = Qd(!0),
      xg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      Gg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      Hg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      Ig = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      Rd = /^(\d{4,})-(\d{2})-(\d{2})$/,
      Sd = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      nc = /^(\d{4,})-W(\d\d)$/,
      Td = /^(\d{4,})-(\d\d)$/,
      Ud = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Jd = V();q(["date", "datetime-local", "month", "time", "week"], function (a) {
    Jd[a] = !0;
  });var Vd = { text: function text(a, b, d, c, e, f) {
      mb(a, b, d, c, e, f);lc(c);
    }, date: nb("date", Rd, Mb(Rd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": nb("datetimelocal", Sd, Mb(Sd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: nb("time", Ud, Mb(Ud, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: nb("week", nc, function (a, b) {
      if (fa(a)) return a;if (y(a)) {
        nc.lastIndex = 0;var d = nc.exec(a);if (d) {
          var c = +d[1],
              e = +d[2],
              f = d = 0,
              g = 0,
              h = 0,
              k = Fd(c),
              e = 7 * (e - 1);b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + e, d, f, g, h);
        }
      }return NaN;
    }, "yyyy-Www"), month: nb("month", Td, Mb(Td, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, e, f) {
      Kd(a, b, d, c);mb(a, b, d, c, e, f);c.$$parserName = "number";c.$parsers.push(function (a) {
        return c.$isEmpty(a) ? null : Ig.test(a) ? parseFloat(a) : u;
      });c.$formatters.push(function (a) {
        if (!c.$isEmpty(a)) {
          if (!R(a)) throw ob("numfmt", a);a = a.toString();
        }return a;
      });if (A(d.min) || d.ngMin) {
        var g;c.$validators.min = function (a) {
          return c.$isEmpty(a) || z(g) || a >= g;
        };d.$observe("min", function (a) {
          A(a) && !R(a) && (a = parseFloat(a, 10));g = R(a) && !isNaN(a) ? a : u;c.$validate();
        });
      }if (A(d.max) || d.ngMax) {
        var h;c.$validators.max = function (a) {
          return c.$isEmpty(a) || z(h) || a <= h;
        };d.$observe("max", function (a) {
          A(a) && !R(a) && (a = parseFloat(a, 10));h = R(a) && !isNaN(a) ? a : u;c.$validate();
        });
      }
    }, url: function url(a, b, d, c, e, f) {
      mb(a, b, d, c, e, f);lc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Gg.test(d);
      };
    }, email: function email(a, b, d, c, e, f) {
      mb(a, b, d, c, e, f);lc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
        var d = a || b;return c.$isEmpty(d) || Hg.test(d);
      };
    }, radio: function radio(a, b, d, c) {
      z(d.name) && b.attr("name", ++qb);b.on("click", function (a) {
        b[0].checked && c.$setViewValue(d.value, a && a.type);
      });c.$render = function () {
        b[0].checked = d.value == c.$viewValue;
      };d.$observe("value", c.$render);
    }, checkbox: function checkbox(a, b, d, c, e, f, g, h) {
      var k = Ld(h, a, "ngTrueValue", d.ngTrueValue, !0),
          l = Ld(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
        c.$setViewValue(b[0].checked, a && a.type);
      });c.$render = function () {
        b[0].checked = c.$viewValue;
      };c.$isEmpty = function (a) {
        return !1 === a;
      };c.$formatters.push(function (a) {
        return na(a, k);
      });c.$parsers.push(function (a) {
        return a ? k : l;
      });
    }, hidden: E, button: E, submit: E, reset: E, file: E },
      Dc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(e, f, g, h) {
          h[0] && (Vd[N(g.type)] || Vd.text)(e, f, g, h[0], b, a, d, c);
        } } };
  }],
      Jg = /^(true|false|\d+)$/,
      Se = function Se() {
    return { restrict: "A", priority: 100, compile: function compile(a, b) {
        return Jg.test(b.ngValue) ? function (a, b, e) {
          e.$set("value", a.$eval(e.ngValue));
        } : function (a, b, e) {
          a.$watch(e.ngValue, function (a) {
            e.$set("value", a);
          });
        };
      } };
  },
      se = ["$compile", function (a) {
    return { restrict: "AC", compile: function compile(b) {
        a.$$addBindingClass(b);
        return function (b, c, e) {
          a.$$addBindingInfo(c, e.ngBind);c = c[0];b.$watch(e.ngBind, function (a) {
            c.textContent = z(a) ? "" : a;
          });
        };
      } };
  }],
      ue = ["$interpolate", "$compile", function (a, b) {
    return { compile: function compile(d) {
        b.$$addBindingClass(d);return function (c, d, f) {
          c = a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];f.$observe("ngBindTemplate", function (a) {
            d.textContent = z(a) ? "" : a;
          });
        };
      } };
  }],
      te = ["$sce", "$parse", "$compile", function (a, b, d) {
    return { restrict: "A", compile: function compile(c, e) {
        var f = b(e.ngBindHtml),
            g = b(e.ngBindHtml, function (a) {
          return (a || "").toString();
        });d.$$addBindingClass(c);return function (b, c, e) {
          d.$$addBindingInfo(c, e.ngBindHtml);b.$watch(g, function () {
            c.html(a.getTrustedHtml(f(b)) || "");
          });
        };
      } };
  }],
      Re = da({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
      c.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    } }),
      ve = mc("", !0),
      xe = mc("Odd", 0),
      we = mc("Even", 1),
      ye = Na({ compile: function compile(a, b) {
      b.$set("ngCloak", u);a.removeClass("ng-cloak");
    } }),
      ze = [function () {
    return { restrict: "A", scope: !0, controller: "@",
      priority: 500 };
  }],
      Ic = {},
      Kg = { blur: !0, focus: !0 };q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var b = ya("ng-" + a);Ic[b] = ["$parse", "$rootScope", function (d, c) {
      return { restrict: "A", compile: function compile(e, f) {
          var g = d(f[b], null, !0);return function (b, d) {
            d.on(a, function (d) {
              var e = function e() {
                g(b, { $event: d });
              };Kg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
            });
          };
        } };
    }];
  });var Ce = ["$animate", "$compile", function (a, b) {
    return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, e, f, g) {
        var h, k, l;d.$watch(e.ngIf, function (d) {
          d ? k || g(function (d, f) {
            k = f;d[d.length++] = b.$$createComment("end ngIf", e.ngIf);h = { clone: d };a.enter(d, c.parent(), c);
          }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = ub(h.clone), a.leave(l).then(function () {
            l = null;
          }), h = null));
        });
      } };
  }],
      De = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
    return { restrict: "ECA", priority: 400, terminal: !0,
      transclude: "element", controller: ea.noop, compile: function compile(c, e) {
        var f = e.ngInclude || e.src,
            g = e.onload || "",
            h = e.autoscroll;return function (c, e, m, n, p) {
          var q = 0,
              s,
              x,
              r,
              w = function w() {
            x && (x.remove(), x = null);s && (s.$destroy(), s = null);r && (d.leave(r).then(function () {
              x = null;
            }), x = r, r = null);
          };c.$watch(f, function (f) {
            var m = function m() {
              !A(h) || h && !c.$eval(h) || b();
            },
                t = ++q;f ? (a(f, !0).then(function (a) {
              if (!c.$$destroyed && t === q) {
                var b = c.$new();n.template = a;a = p(b, function (a) {
                  w();d.enter(a, null, e).then(m);
                });s = b;r = a;s.$emit("$includeContentLoaded", f);c.$eval(g);
              }
            }, function () {
              c.$$destroyed || t !== q || (w(), c.$emit("$includeContentError", f));
            }), c.$emit("$includeContentRequested", f)) : (w(), n.template = null);
          });
        };
      } };
  }],
      Ue = ["$compile", function (a) {
    return { restrict: "ECA", priority: -400, require: "ngInclude", link: function link(b, d, c, e) {
        ka.call(d[0]).match(/SVG/) ? (d.empty(), a(Lc(e.template, P).childNodes)(b, function (a) {
          d.append(a);
        }, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
      } };
  }],
      Ee = Na({ priority: 450, compile: function compile() {
      return { pre: function pre(a, b, d) {
          a.$eval(d.ngInit);
        } };
    } }),
      Qe = function Qe() {
    return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
        var e = b.attr(d.$attr.ngList) || ", ",
            f = "false" !== d.ngTrim,
            g = f ? W(e) : e;c.$parsers.push(function (a) {
          if (!z(a)) {
            var b = [];a && q(a.split(g), function (a) {
              a && b.push(f ? W(a) : a);
            });return b;
          }
        });c.$formatters.push(function (a) {
          return M(a) ? a.join(e) : u;
        });c.$isEmpty = function (a) {
          return !a || !a.length;
        };
      } };
  },
      pb = "ng-valid",
      Md = "ng-invalid",
      Xa = "ng-pristine",
      Lb = "ng-dirty",
      Od = "ng-pending",
      ob = O("ngModel"),
      Lg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = u;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = u;this.$name = l(d.name || "", !1)(a);this.$$parentForm = Kb;var m = e(d.ngModel),
        n = m.assign,
        p = m,
        s = n,
        y = null,
        x,
        r = this;this.$$setOptions = function (a) {
      if ((r.$options = a) && a.getterSetter) {
        var b = e(d.ngModel + "()"),
            f = e(d.ngModel + "($$$p)");p = function p(a) {
          var c = m(a);D(c) && (c = b(a));return c;
        };s = function s(a, b) {
          D(m(a)) ? f(a, { $$$p: b }) : n(a, b);
        };
      } else if (!m.assign) throw ob("nonassign", d.ngModel, wa(c));
    };this.$render = E;this.$isEmpty = function (a) {
      return z(a) || "" === a || null === a || a !== a;
    };this.$$updateEmptyClasses = function (a) {
      r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"));
    };var w = 0;Id({ ctrl: this, $element: c, set: function set(a, b) {
        a[b] = !0;
      }, unset: function unset(a, b) {
        delete a[b];
      }, $animate: f });this.$setPristine = function () {
      r.$dirty = !1;r.$pristine = !0;f.removeClass(c, Lb);f.addClass(c, Xa);
    };this.$setDirty = function () {
      r.$dirty = !0;r.$pristine = !1;f.removeClass(c, Xa);f.addClass(c, Lb);r.$$parentForm.$setDirty();
    };this.$setUntouched = function () {
      r.$touched = !1;r.$untouched = !0;f.setClass(c, "ng-untouched", "ng-touched");
    };this.$setTouched = function () {
      r.$touched = !0;r.$untouched = !1;f.setClass(c, "ng-touched", "ng-untouched");
    };this.$rollbackViewValue = function () {
      g.cancel(y);r.$viewValue = r.$$lastCommittedViewValue;r.$render();
    };this.$validate = function () {
      if (!R(r.$modelValue) || !isNaN(r.$modelValue)) {
        var a = r.$$rawModelValue,
            b = r.$valid,
            c = r.$modelValue,
            d = r.$options && r.$options.allowInvalid;r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
          d || b === e || (r.$modelValue = e ? a : u, r.$modelValue !== c && r.$$writeModelToScope());
        });
      }
    };this.$$runValidators = function (a, b, c) {
      function d() {
        var c = !0;q(r.$validators, function (d, e) {
          var g = d(a, b);c = c && g;f(e, g);
        });return c ? !0 : (q(r.$asyncValidators, function (a, b) {
          f(b, null);
        }), !1);
      }function e() {
        var c = [],
            d = !0;q(r.$asyncValidators, function (e, g) {
          var h = e(a, b);if (!h || !D(h.then)) throw ob("nopromise", h);f(g, u);c.push(h.then(function () {
            f(g, !0);
          }, function () {
            d = !1;f(g, !1);
          }));
        });c.length ? k.all(c).then(function () {
          g(d);
        }, E) : g(!0);
      }function f(a, b) {
        h === w && r.$setValidity(a, b);
      }function g(a) {
        h === w && c(a);
      }w++;var h = w;(function () {
        var a = r.$$parserName || "parse";if (z(x)) f(a, null);else return x || (q(r.$validators, function (a, b) {
          f(b, null);
        }), q(r.$asyncValidators, function (a, b) {
          f(b, null);
        })), f(a, x), x;return !0;
      })() ? d() ? e() : g(!1) : g(!1);
    };this.$commitViewValue = function () {
      var a = r.$viewValue;g.cancel(y);if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate();
    };this.$$parseAndValidate = function () {
      var b = r.$$lastCommittedViewValue;if (x = z(b) ? u : !0) for (var c = 0; c < r.$parsers.length; c++) {
        if (b = r.$parsers[c](b), z(b)) {
          x = !1;break;
        }
      }R(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));var d = r.$modelValue,
          e = r.$options && r.$options.allowInvalid;r.$$rawModelValue = b;e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
        e || (r.$modelValue = a ? b : u, r.$modelValue !== d && r.$$writeModelToScope());
      });
    };this.$$writeModelToScope = function () {
      s(a, r.$modelValue);q(r.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (c) {
          b(c);
        }
      });
    };this.$setViewValue = function (a, b) {
      r.$viewValue = a;r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b);
    };this.$$debounceViewValueCommit = function (b) {
      var c = 0,
          d = r.$options;d && A(d.debounce) && (d = d.debounce, R(d) ? c = d : R(d[b]) ? c = d[b] : R(d["default"]) && (c = d["default"]));g.cancel(y);c ? y = g(function () {
        r.$commitViewValue();
      }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
        r.$commitViewValue();
      });
    };a.$watch(function () {
      var b = p(a);if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
        r.$modelValue = r.$$rawModelValue = b;x = u;for (var c = r.$formatters, d = c.length, e = b; d--;) {
          e = c[d](e);
        }r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, E));
      }return b;
    });
  }],
      Pe = ["$rootScope", function (a) {
    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Lg, priority: 1, compile: function compile(b) {
        b.addClass(Xa).addClass("ng-untouched").addClass(pb);return { pre: function pre(a, b, e, f) {
            var g = f[0];b = f[1] || g.$$parentForm;g.$$setOptions(f[2] && f[2].$options);b.$addControl(g);
            e.$observe("name", function (a) {
              g.$name !== a && g.$$parentForm.$$renameControl(g, a);
            });a.$on("$destroy", function () {
              g.$$parentForm.$removeControl(g);
            });
          }, post: function post(b, c, e, f) {
            var g = f[0];if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function (a) {
              g.$$debounceViewValueCommit(a && a.type);
            });c.on("blur", function () {
              g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
            });
          } };
      } };
  }],
      Mg = /(\s+|^)default(\s+|$)/,
      Te = function Te() {
    return { restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
        var d = this;this.$options = pa(a.$eval(b.ngModelOptions));A(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = W(this.$options.updateOn.replace(Mg, function () {
          d.$options.updateOnDefault = !0;return " ";
        }))) : this.$options.updateOnDefault = !0;
      }] };
  },
      Fe = Na({ terminal: !0, priority: 1E3 }),
      Ng = O("ngOptions"),
      Og = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      Ne = ["$compile", "$parse", function (a, b) {
    function d(a, c, d) {
      function e(a, b, c, d, f) {
        this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
      }function l(a) {
        var b;if (!p && za(a)) b = a;else {
          b = [];for (var c in a) {
            a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
          }
        }return b;
      }var m = a.match(Og);if (!m) throw Ng("iexp", a, wa(c));var n = m[5] || m[7],
          p = m[6];a = / as /.test(m[0]) && m[1];var q = m[9];c = b(m[2] ? m[1] : n);var s = a && b(a) || c,
          x = q && b(q),
          r = q ? function (a, b) {
        return x(d, b);
      } : function (a) {
        return Ha(a);
      },
          w = function w(a, b) {
        return r(a, y(a, b));
      },
          v = b(m[2] || m[1]),
          u = b(m[3] || ""),
          t = b(m[4] || ""),
          G = b(m[8]),
          C = {},
          y = p ? function (a, b) {
        C[p] = b;C[n] = a;return C;
      } : function (a) {
        C[n] = a;return C;
      };return { trackBy: q, getTrackByValue: w, getWatchables: b(G, function (a) {
          var b = [];a = a || [];for (var c = l(a), e = c.length, f = 0; f < e; f++) {
            var g = a === c ? f : c[f],
                k = a[g],
                g = y(k, g),
                k = r(k, g);b.push(k);if (m[2] || m[1]) k = v(d, g), b.push(k);m[4] && (g = t(d, g), b.push(g));
          }return b;
        }), getOptions: function getOptions() {
          for (var a = [], b = {}, c = G(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
            var n = c === f ? m : f[m],
                p = y(c[n], n),
                x = s(d, p),
                n = r(x, p),
                C = v(d, p),
                A = u(d, p),
                p = t(d, p),
                x = new e(n, x, C, A, p);a.push(x);b[n] = x;
          }return { items: a, selectValueMap: b, getOptionFromViewValue: function getOptionFromViewValue(a) {
              return b[w(a)];
            }, getViewValueFromOption: function getViewValueFromOption(a) {
              return q ? ea.copy(a.viewValue) : a.viewValue;
            } };
        } };
    }var c = P.createElement("option"),
        e = P.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
          d[0].registerOption = E;
        }, post: function post(b, g, h, k) {
          function l(a, b) {
            a.element = b;b.disabled = a.disabled;
            a.label !== b.label && (b.label = a.label, b.textContent = a.label);a.value !== b.value && (b.value = a.selectValue);
          }function m(a, b, c, d) {
            b && N(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));return c;
          }function n(a) {
            for (var b; a;) {
              b = a.nextSibling, Yb(a), a = b;
            }
          }function p(a) {
            var b = w && w[0],
                c = G && G[0];if (b || c) for (; a && (a === b || a === c || 8 === a.nodeType || "option" === oa(a) && "" === a.value);) {
              a = a.nextSibling;
            }return a;
          }function s() {
            var a = C && u.readValue();C = z.getOptions();var b = {},
                d = g[0].firstChild;t && g.prepend(w);
            d = p(d);C.items.forEach(function (a) {
              var f, h;A(a.group) ? (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, f.label = a.group, f = b[a.group] = { groupElement: f, currentOptionElement: f.firstChild }), h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, "option", c), l(a, h), d = h.nextSibling);
            });Object.keys(b).forEach(function (a) {
              n(b[a].currentOptionElement);
            });n(d);x.$render();if (!x.$isEmpty(a)) {
              var f = u.readValue();(z.trackBy || r ? na(a, f) : a === f) || (x.$setViewValue(f), x.$render());
            }
          }var u = k[0],
              x = k[1],
              r = h.multiple,
              w;k = 0;for (var v = g.children(), y = v.length; k < y; k++) {
            if ("" === v[k].value) {
              w = v.eq(k);break;
            }
          }var t = !!w,
              G = H(c.cloneNode(!1));G.val("?");var C,
              z = d(h.ngOptions, g, b);r ? (x.$isEmpty = function (a) {
            return !a || 0 === a.length;
          }, u.writeValue = function (a) {
            C.items.forEach(function (a) {
              a.element.selected = !1;
            });a && a.forEach(function (a) {
              (a = C.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0);
            });
          }, u.readValue = function () {
            var a = g.val() || [],
                b = [];q(a, function (a) {
              (a = C.selectValueMap[a]) && !a.disabled && b.push(C.getViewValueFromOption(a));
            });return b;
          }, z.trackBy && b.$watchCollection(function () {
            if (M(x.$viewValue)) return x.$viewValue.map(function (a) {
              return z.getTrackByValue(a);
            });
          }, function () {
            x.$render();
          })) : (u.writeValue = function (a) {
            var b = C.getOptionFromViewValue(a);b && !b.disabled ? (g[0].value !== b.selectValue && (G.remove(), t || w.remove(), g[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || t ? (G.remove(), t || g.prepend(w), g.val(""), w.prop("selected", !0), w.attr("selected", !0)) : (t || w.remove(), g.prepend(G), g.val("?"), G.prop("selected", !0), G.attr("selected", !0));
          }, u.readValue = function () {
            var a = C.selectValueMap[g.val()];return a && !a.disabled ? (t || w.remove(), G.remove(), C.getViewValueFromOption(a)) : null;
          }, z.trackBy && b.$watch(function () {
            return z.getTrackByValue(x.$viewValue);
          }, function () {
            x.$render();
          }));t ? (w.remove(), a(w)(b), w.removeClass("ng-scope")) : w = H(c.cloneNode(!1));s();b.$watchCollection(z.getWatchables, s);
        } } };
  }],
      Ge = ["$locale", "$interpolate", "$log", function (a, b, d) {
    var c = /{}/g,
        e = /^when(Minus)?(.+)$/;return { link: function link(f, g, h) {
        function k(a) {
          g.text(a || "");
        }var l = h.count,
            m = h.$attr.when && g.attr(h.$attr.when),
            n = h.offset || 0,
            p = f.$eval(m) || {},
            s = {},
            u = b.startSymbol(),
            x = b.endSymbol(),
            r = u + l + "-" + n + x,
            w = ea.noop,
            v;q(h, function (a, b) {
          var c = e.exec(b);c && (c = (c[1] ? "-" : "") + N(c[2]), p[c] = g.attr(h.$attr[b]));
        });q(p, function (a, d) {
          s[d] = b(a.replace(c, r));
        });f.$watch(l, function (b) {
          var c = parseFloat(b),
              e = isNaN(c);e || c in p || (c = a.pluralCat(c - n));c === v || e && R(v) && isNaN(v) || (w(), e = s[c], z(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), w = E, k()) : w = f.$watch(e, k), v = c);
        });
      } };
  }],
      He = ["$parse", "$animate", "$compile", function (a, b, d) {
    var c = O("ngRepeat"),
        e = function e(a, b, c, d, _e2, m, n) {
      a[c] = d;_e2 && (a[_e2] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
    };return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
        var h = g.ngRepeat,
            k = d.$$createComment("end ngRepeat", h),
            l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
        if (!l) throw c("iexp", h);var m = l[1],
            n = l[2],
            p = l[3],
            s = l[4],
            l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var y = l[3] || l[1],
            x = l[2];if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);var r,
            w,
            v,
            z,
            t = { $id: Ha };s ? r = a(s) : (v = function v(a, b) {
          return Ha(b);
        }, z = function z(a) {
          return a;
        });return function (a, d, f, g, l) {
          r && (w = function w(b, c, d) {
            x && (t[x] = b);t[y] = c;t.$index = d;return r(a, t);
          });var m = V();a.$watchCollection(n, function (f) {
            var g,
                n,
                r = d[0],
                s,
                t = V(),
                A,
                E,
                H,
                D,
                I,
                F,
                J;p && (a[p] = f);if (za(f)) I = f, n = w || v;else for (J in n = w || z, I = [], f) {
              va.call(f, J) && "$" !== J.charAt(0) && I.push(J);
            }A = I.length;J = Array(A);for (g = 0; g < A; g++) {
              if (E = f === I ? g : I[g], H = f[E], D = n(E, H, g), m[D]) F = m[D], delete m[D], t[D] = F, J[g] = F;else {
                if (t[D]) throw q(J, function (a) {
                  a && a.scope && (m[a.id] = a);
                }), c("dupes", h, D, H);J[g] = { id: D, scope: u, clone: u };t[D] = !0;
              }
            }for (s in m) {
              F = m[s];D = ub(F.clone);b.leave(D);if (D[0].parentNode) for (g = 0, n = D.length; g < n; g++) {
                D[g].$$NG_REMOVED = !0;
              }F.scope.$destroy();
            }for (g = 0; g < A; g++) {
              if (E = f === I ? g : I[g], H = f[E], F = J[g], F.scope) {
                s = r;do {
                  s = s.nextSibling;
                } while (s && s.$$NG_REMOVED);F.clone[0] != s && b.move(ub(F.clone), null, r);r = F.clone[F.clone.length - 1];e(F.scope, g, y, H, x, E, A);
              } else l(function (a, c) {
                F.scope = c;var d = k.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;F.clone = a;t[F.id] = F;e(F.scope, g, y, H, x, E, A);
              });
            }m = t;
          });
        };
      } };
  }],
      Ie = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngShow, function (b) {
          a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      Be = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
        b.$watch(c.ngHide, function (b) {
          a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      Je = Na(function (a, b, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && q(d, function (a, c) {
        b.css(c, "");
      });a && b.css(a);
    }, !0);
  }),
      Ke = ["$animate", "$compile", function (a, b) {
    return { require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {};
      }],
      link: function link(d, c, e, f) {
        var g = [],
            h = [],
            k = [],
            l = [],
            m = function m(a, b) {
          return function () {
            a.splice(b, 1);
          };
        };d.$watch(e.ngSwitch || e.on, function (c) {
          var d, e;d = 0;for (e = k.length; d < e; ++d) {
            a.cancel(k[d]);
          }d = k.length = 0;for (e = l.length; d < e; ++d) {
            var s = ub(h[d].clone);l[d].$destroy();(k[d] = a.leave(s)).then(m(k, d));
          }h.length = 0;l.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
            c.transclude(function (d, e) {
              l.push(e);var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");h.push({ clone: d });a.enter(d, f.parent(), f);
            });
          });
        });
      } };
  }],
      Le = Na({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];c.cases["!" + d.ngSwitchWhen].push({ transclude: e, element: b });
    } }),
      Me = Na({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
      c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: e, element: b });
    } }),
      Pg = O("ngTransclude"),
      Oe = Na({ restrict: "EAC", link: function link(a, b, d, c, e) {
      d.ngTransclude === d.$attr.ngTransclude && (d.ngTransclude = "");if (!e) throw Pg("orphan", wa(b));e(function (a) {
        a.length && (b.empty(), b.append(a));
      }, null, d.ngTransclude || d.ngTranscludeSlot);
    } }),
      oe = ["$templateCache", function (a) {
    return { restrict: "E", terminal: !0, compile: function compile(b, d) {
        "text/ng-template" == d.type && a.put(d.id, b[0].text);
      } };
  }],
      Qg = { $setViewValue: E, $render: E },
      Rg = ["$element", "$scope", function (a, b) {
    var d = this,
        c = new Ua();d.ngModelCtrl = Qg;d.unknownOption = H(P.createElement("option"));d.renderUnknownOption = function (b) {
      b = "? " + Ha(b) + " ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b);
    };b.$on("$destroy", function () {
      d.renderUnknownOption = E;
    });d.removeUnknownOption = function () {
      d.unknownOption.parent() && d.unknownOption.remove();
    };d.readValue = function () {
      d.removeUnknownOption();return a.val();
    };d.writeValue = function (b) {
      d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b);
    };d.addOption = function (a, b) {
      if (8 !== b[0].nodeType) {
        Ta(a, '"option value"');"" === a && (d.emptyOption = b);var g = c.get(a) || 0;c.put(a, g + 1);d.ngModelCtrl.$render();b[0].hasAttribute("selected") && (b[0].selected = !0);
      }
    };d.removeOption = function (a) {
      var b = c.get(a);b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = u)) : c.put(a, b - 1));
    };d.hasOption = function (a) {
      return !!c.get(a);
    };d.registerOption = function (a, b, c, h, k) {
      if (h) {
        var l;c.$observe("value", function (a) {
          A(l) && d.removeOption(l);l = a;d.addOption(a, b);
        });
      } else k ? a.$watch(k, function (a, e) {
        c.$set("value", a);e !== a && d.removeOption(e);d.addOption(a, b);
      }) : d.addOption(c.value, b);b.on("$destroy", function () {
        d.removeOption(c.value);d.ngModelCtrl.$render();
      });
    };
  }],
      pe = function pe() {
    return { restrict: "E", require: ["select", "?ngModel"], controller: Rg, priority: 1, link: { pre: function pre(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];f.ngModelCtrl = e;b.on("change", function () {
              a.$apply(function () {
                e.$setViewValue(f.readValue());
              });
            });if (d.multiple) {
              f.readValue = function () {
                var a = [];q(b.find("option"), function (b) {
                  b.selected && a.push(b.value);
                });return a;
              };
              f.writeValue = function (a) {
                var c = new Ua(a);q(b.find("option"), function (a) {
                  a.selected = A(c.get(a.value));
                });
              };var g,
                  h = NaN;a.$watch(function () {
                h !== e.$viewValue || na(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());h = e.$viewValue;
              });e.$isEmpty = function (a) {
                return !a || 0 === a.length;
              };
            }
          }
        }, post: function post(a, b, d, c) {
          var e = c[1];if (e) {
            var f = c[0];e.$render = function () {
              f.writeValue(e.$viewValue);
            };
          }
        } } };
  },
      re = ["$interpolate", function (a) {
    return { restrict: "E", priority: 100, compile: function compile(b, d) {
        if (A(d.value)) var c = a(d.value, !0);else {
          var e = a(b.text(), !0);e || d.$set("value", b.text());
        }return function (a, b, d) {
          var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
        };
      } };
  }],
      qe = da({ restrict: "E", terminal: !1 }),
      Fc = function Fc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        c && (d.required = !0, c.$validators.required = function (a, b) {
          return !d.required || !c.$isEmpty(b);
        }, d.$observe("required", function () {
          c.$validate();
        }));
      } };
  },
      Ec = function Ec() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e,
              f = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
            y(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw O("ngPattern")("noregexp", f, a, wa(b));e = a || u;c.$validate();
          });c.$validators.pattern = function (a, b) {
            return c.$isEmpty(b) || z(e) || e.test(b);
          };
        }
      } };
  },
      Hc = function Hc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = -1;d.$observe("maxlength", function (a) {
            a = Y(a);e = isNaN(a) ? -1 : a;c.$validate();
          });c.$validators.maxlength = function (a, b) {
            return 0 > e || c.$isEmpty(b) || b.length <= e;
          };
        }
      } };
  },
      Gc = function Gc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
        if (c) {
          var e = 0;d.$observe("minlength", function (a) {
            e = Y(a) || 0;c.$validate();
          });c.$validators.minlength = function (a, b) {
            return c.$isEmpty(b) || b.length >= e;
          };
        }
      } };
  };T.angular.bootstrap ? T.console && console.log("WARNING: Tried to load angular more than once.") : (he(), je(ea), ea.module("ngLocale", [], ["$provide", function (a) {
    function b(a) {
      a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
    }a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: "-\xA4", negSuf: "", posPre: "\xA4", posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
        var e = a | 0,
            f = c;u === f && (f = Math.min(b(a), 3));Math.pow(10, f);return 1 == e && 0 == f ? "one" : "other";
      } });
  }]), H(P).ready(function () {
    de(P, yc);
  }));
})(window, document);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (E, w, Va) {
  'use strict';
  function ya(a, b, c) {
    if (!a) throw Ka("areq", b || "?", c || "required");return a;
  }function za(a, b) {
    if (!a && !b) return "";if (!a) return b;if (!b) return a;ba(a) && (a = a.join(" "));ba(b) && (b = b.join(" "));return a + " " + b;
  }function La(a) {
    var b = {};a && (a.to || a.from) && (b.to = a.to, b.from = a.from);return b;
  }function V(a, b, c) {
    var d = "";a = ba(a) ? a : a && I(a) && a.length ? a.split(/\s+/) : [];q(a, function (a, f) {
      a && 0 < a.length && (d += 0 < f ? " " : "", d += c ? b + a : a + b);
    });return d;
  }function Ma(a) {
    if (a instanceof H) switch (a.length) {case 0:
        return [];
      case 1:
        if (1 === a[0].nodeType) return a;break;default:
        return H(ga(a));}if (1 === a.nodeType) return H(a);
  }function ga(a) {
    if (!a[0]) return a;for (var b = 0; b < a.length; b++) {
      var c = a[b];if (1 == c.nodeType) return c;
    }
  }function Na(a, b, c) {
    q(b, function (b) {
      a.addClass(b, c);
    });
  }function Oa(a, b, c) {
    q(b, function (b) {
      a.removeClass(b, c);
    });
  }function Q(a) {
    return function (b, c) {
      c.addClass && (Na(a, b, c.addClass), c.addClass = null);c.removeClass && (Oa(a, b, c.removeClass), c.removeClass = null);
    };
  }function oa(a) {
    a = a || {};if (!a.$$prepared) {
      var b = a.domOperation || O;a.domOperation = function () {
        a.$$domOperationFired = !0;b();b = O;
      };a.$$prepared = !0;
    }return a;
  }function ha(a, b) {
    Aa(a, b);Ba(a, b);
  }function Aa(a, b) {
    b.from && (a.css(b.from), b.from = null);
  }function Ba(a, b) {
    b.to && (a.css(b.to), b.to = null);
  }function T(a, b, c) {
    var d = b.options || {};c = c.options || {};var e = (d.addClass || "") + " " + (c.addClass || ""),
        f = (d.removeClass || "") + " " + (c.removeClass || "");a = Pa(a.attr("class"), e, f);c.preparationClasses && (d.preparationClasses = W(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
    e = d.domOperation !== O ? d.domOperation : null;Ca(d, c);e && (d.domOperation = e);d.addClass = a.addClass ? a.addClass : null;d.removeClass = a.removeClass ? a.removeClass : null;b.addClass = d.addClass;b.removeClass = d.removeClass;return d;
  }function Pa(a, b, c) {
    function d(a) {
      I(a) && (a = a.split(" "));var b = {};q(a, function (a) {
        a.length && (b[a] = !0);
      });return b;
    }var e = {};a = d(a);b = d(b);q(b, function (a, b) {
      e[b] = 1;
    });c = d(c);q(c, function (a, b) {
      e[b] = 1 === e[b] ? null : -1;
    });var f = { addClass: "", removeClass: "" };q(e, function (b, c) {
      var d, e;1 === b ? (d = "addClass", e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]);e && (f[d].length && (f[d] += " "), f[d] += c);
    });return f;
  }function A(a) {
    return a instanceof w.element ? a[0] : a;
  }function Qa(a, b, c) {
    var d = "";b && (d = V(b, "ng-", !0));c.addClass && (d = W(d, V(c.addClass, "-add")));c.removeClass && (d = W(d, V(c.removeClass, "-remove")));d.length && (c.preparationClasses = d, a.addClass(d));
  }function pa(a, b) {
    var c = b ? "-" + b + "s" : "";la(a, [ma, c]);return [ma, c];
  }function ra(a, b) {
    var c = b ? "paused" : "",
        d = X + "PlayState";la(a, [d, c]);return [d, c];
  }function la(a, b) {
    a.style[b[0]] = b[1];
  }function W(a, b) {
    return a ? b ? a + " " + b : a : b;
  }function Da(a, b, c) {
    var d = Object.create(null),
        e = a.getComputedStyle(b) || {};q(c, function (a, b) {
      var c = e[a];if (c) {
        var F = c.charAt(0);if ("-" === F || "+" === F || 0 <= F) c = Ra(c);0 === c && (c = null);d[b] = c;
      }
    });return d;
  }function Ra(a) {
    var b = 0;a = a.split(/\s*,\s*/);q(a, function (a) {
      "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));a = parseFloat(a) || 0;b = b ? Math.max(a, b) : a;
    });return b;
  }function sa(a) {
    return 0 === a || null != a;
  }function Ea(a, b) {
    var c = R,
        d = a + "s";b ? c += "Duration" : d += " linear all";
    return [c, d];
  }function Fa() {
    var a = Object.create(null);return { flush: function flush() {
        a = Object.create(null);
      }, count: function count(b) {
        return (b = a[b]) ? b.total : 0;
      }, get: function get(b) {
        return (b = a[b]) && b.value;
      }, put: function put(b, c) {
        a[b] ? a[b].total++ : a[b] = { total: 1, value: c };
      } };
  }function Ga(a, b, c) {
    q(c, function (c) {
      a[c] = Y(a[c]) ? a[c] : b.style.getPropertyValue(c);
    });
  }var O = w.noop,
      Ha = w.copy,
      Ca = w.extend,
      H = w.element,
      q = w.forEach,
      ba = w.isArray,
      I = w.isString,
      ca = w.isObject,
      N = w.isUndefined,
      Y = w.isDefined,
      Ia = w.isFunction,
      ta = w.isElement,
      R,
      ua,
      X,
      va;N(E.ontransitionend) && Y(E.onwebkittransitionend) ? (R = "WebkitTransition", ua = "webkitTransitionEnd transitionend") : (R = "transition", ua = "transitionend");N(E.onanimationend) && Y(E.onwebkitanimationend) ? (X = "WebkitAnimation", va = "webkitAnimationEnd animationend") : (X = "animation", va = "animationend");var qa = X + "Delay",
      wa = X + "Duration",
      ma = R + "Delay";E = R + "Duration";var Ka = w.$$minErr("ng"),
      Sa = { transitionDuration: E, transitionDelay: ma, transitionProperty: R + "Property", animationDuration: wa, animationDelay: qa, animationIterationCount: X + "IterationCount" },
      Ta = { transitionDuration: E, transitionDelay: ma, animationDuration: wa, animationDelay: qa };w.module("ngAnimate", []).directive("ngAnimateSwap", ["$animate", "$rootScope", function (a, b) {
    return { restrict: "A", transclude: "element", terminal: !0, priority: 600, link: function link(b, d, e, f, r) {
        var x, F;b.$watchCollection(e.ngAnimateSwap || e["for"], function (e) {
          x && a.leave(x);F && (F.$destroy(), F = null);if (e || 0 === e) F = b.$new(), r(F, function (b) {
            x = b;a.enter(b, null, d);
          });
        });
      } };
  }]).directive("ngAnimateChildren", ["$interpolate", function (a) {
    return { link: function link(b, c, d) {
        function e(a) {
          c.data("$$ngAnimateChildren", "on" === a || "true" === a);
        }var f = d.ngAnimateChildren;w.isString(f) && 0 === f.length ? c.data("$$ngAnimateChildren", !0) : (e(a(f)(b)), d.$observe("ngAnimateChildren", e));
      } };
  }]).factory("$$rAFScheduler", ["$$rAF", function (a) {
    function b(a) {
      d = d.concat(a);c();
    }function c() {
      if (d.length) {
        for (var b = d.shift(), r = 0; r < b.length; r++) {
          b[r]();
        }e || a(function () {
          e || c();
        });
      }
    }var d, e;d = b.queue = [];b.waitUntilQuiet = function (b) {
      e && e();e = a(function () {
        e = null;b();c();
      });
    };return b;
  }]).provider("$$animateQueue", ["$animateProvider", function (a) {
    function b(a) {
      if (!a) return null;a = a.split(" ");var b = Object.create(null);q(a, function (a) {
        b[a] = !0;
      });return b;
    }function c(a, c) {
      if (a && c) {
        var d = b(c);return a.split(" ").some(function (a) {
          return d[a];
        });
      }
    }function d(a, b, c, d) {
      return f[a].some(function (a) {
        return a(b, c, d);
      });
    }function e(a, b) {
      var c = 0 < (a.addClass || "").length,
          d = 0 < (a.removeClass || "").length;return b ? c && d : c || d;
    }var f = this.rules = { skip: [], cancel: [], join: [] };f.join.push(function (a, b, c) {
      return !b.structural && e(b);
    });f.skip.push(function (a, b, c) {
      return !b.structural && !e(b);
    });f.skip.push(function (a, b, c) {
      return "leave" == c.event && b.structural;
    });f.skip.push(function (a, b, c) {
      return c.structural && 2 === c.state && !b.structural;
    });f.cancel.push(function (a, b, c) {
      return c.structural && b.structural;
    });f.cancel.push(function (a, b, c) {
      return 2 === c.state && b.structural;
    });f.cancel.push(function (a, b, d) {
      if (d.structural) return !1;a = b.addClass;b = b.removeClass;var e = d.addClass;d = d.removeClass;return N(a) && N(b) || N(e) && N(d) ? !1 : c(a, d) || c(b, e);
    });this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (b, c, f, u, l, w, s, M, v, h) {
      function P() {
        var a = !1;return function (b) {
          a ? b() : c.$$postDigest(function () {
            a = !0;b();
          });
        };
      }function y(a, b, c) {
        var g = A(b),
            d = A(a),
            k = [];(a = G[c]) && q(a, function (a) {
          t.call(a.node, g) ? k.push(a.callback) : "leave" === c && t.call(a.node, d) && k.push(a.callback);
        });return k;
      }function k(a, g, k) {
        function m(c, g, d, k) {
          F(function () {
            var c = y(J, a, g);c.length && b(function () {
              q(c, function (b) {
                b(a, d, k);
              });
            });
          });c.progress(g, d, k);
        }function G(b) {
          var c = a,
              g = h;g.preparationClasses && (c.removeClass(g.preparationClasses), g.preparationClasses = null);g.activeClasses && (c.removeClass(g.activeClasses), g.activeClasses = null);Ja(a, h);ha(a, h);h.domOperation();f.complete(!b);
        }var h = Ha(k),
            t,
            J;if (a = Ma(a)) t = A(a), J = a.parent();var h = oa(h),
            f = new s(),
            F = P();ba(h.addClass) && (h.addClass = h.addClass.join(" "));h.addClass && !I(h.addClass) && (h.addClass = null);ba(h.removeClass) && (h.removeClass = h.removeClass.join(" "));h.removeClass && !I(h.removeClass) && (h.removeClass = null);h.from && !ca(h.from) && (h.from = null);h.to && !ca(h.to) && (h.to = null);if (!t) return G(), f;k = [t.className, h.addClass, h.removeClass].join(" ");if (!Ua(k)) return G(), f;var v = 0 <= ["enter", "move", "leave"].indexOf(g),
            l = !K || u[0].hidden || C.get(t);k = !l && z.get(t) || {};var Z = !!k.state;l || Z && 1 == k.state || (l = !n(a, J, g));if (l) return G(), f;v && xa(a);l = { structural: v, element: a, event: g, addClass: h.addClass, removeClass: h.removeClass, close: G, options: h, runner: f };if (Z) {
          if (d("skip", a, l, k)) {
            if (2 === k.state) return G(), f;T(a, k, l);return k.runner;
          }if (d("cancel", a, l, k)) {
            if (2 === k.state) k.runner.end();else if (k.structural) k.close();else return T(a, k, l), k.runner;
          } else if (d("join", a, l, k)) if (2 === k.state) T(a, l, {});else return Qa(a, v ? g : null, h), g = l.event = k.event, h = T(a, k, l), k.runner;
        } else T(a, l, {});(Z = l.structural) || (Z = "animate" === l.event && 0 < Object.keys(l.options.to || {}).length || e(l));if (!Z) return G(), ka(a), f;var M = (k.counter || 0) + 1;l.counter = M;D(a, 1, l);c.$$postDigest(function () {
          var b = z.get(t),
              c = !b,
              b = b || {},
              d = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));if (c || b.counter !== M || !d) {
            c && (Ja(a, h), ha(a, h));if (c || v && b.event !== g) h.domOperation(), f.end();d || ka(a);
          } else g = !b.structural && e(b, !0) ? "setClass" : b.event, D(a, 2), b = w(a, g, b.options), b.done(function (b) {
            G(!b);(b = z.get(t)) && b.counter === M && ka(A(a));m(f, g, "close", {});
          }), f.setHost(b), m(f, g, "start", {});
        });return f;
      }function xa(a) {
        a = A(a).querySelectorAll("[data-ng-animate]");q(a, function (a) {
          var b = parseInt(a.getAttribute("data-ng-animate")),
              c = z.get(a);
          if (c) switch (b) {case 2:
              c.runner.end();case 1:
              z.remove(a);}
        });
      }function ka(a) {
        a = A(a);a.removeAttribute("data-ng-animate");z.remove(a);
      }function J(a, b) {
        return A(a) === A(b);
      }function n(a, b, c) {
        c = H(u[0].body);var g = J(a, c) || "HTML" === a[0].nodeName,
            d = J(a, f),
            k = !1,
            h,
            m = C.get(A(a));(a = H.data(a[0], "$ngAnimatePin")) && (b = a);for (b = A(b); b;) {
          d || (d = J(b, f));if (1 !== b.nodeType) break;a = z.get(b) || {};if (!k) {
            var e = C.get(b);if (!0 === e && !1 !== m) {
              m = !0;break;
            } else !1 === e && (m = !1);k = a.structural;
          }if (N(h) || !0 === h) a = H.data(b, "$$ngAnimateChildren"), Y(a) && (h = a);if (k && !1 === h) break;g || (g = J(b, c));if (g && d) break;if (!d && (a = H.data(b, "$ngAnimatePin"))) {
            b = A(a);continue;
          }b = b.parentNode;
        }return (!k || h) && !0 !== m && d && g;
      }function D(a, b, c) {
        c = c || {};c.state = b;a = A(a);a.setAttribute("data-ng-animate", b);c = (b = z.get(a)) ? Ca(b, c) : c;z.put(a, c);
      }var z = new l(),
          C = new l(),
          K = null,
          g = c.$watch(function () {
        return 0 === M.totalPendingRequests;
      }, function (a) {
        a && (g(), c.$$postDigest(function () {
          c.$$postDigest(function () {
            null === K && (K = !0);
          });
        }));
      }),
          G = {},
          m = a.classNameFilter(),
          Ua = m ? function (a) {
        return m.test(a);
      } : function () {
        return !0;
      },
          Ja = Q(v),
          t = Node.prototype.contains || function (a) {
        return this === a || !!(this.compareDocumentPosition(a) & 16);
      },
          Z = { on: function on(a, b, c) {
          var g = ga(b);G[a] = G[a] || [];G[a].push({ node: g, callback: c });H(b).on("$destroy", function () {
            Z.off(a, b, c);
          });
        }, off: function off(a, b, c) {
          function g(a, b, c) {
            var d = ga(b);return a.filter(function (a) {
              return !(a.node === d && (!c || a.callback === c));
            });
          }var d = G[a];d && (G[a] = 1 === arguments.length ? null : g(d, b, c));
        }, pin: function pin(a, b) {
          ya(ta(a), "element", "not an element");ya(ta(b), "parentElement", "not an element");a.data("$ngAnimatePin", b);
        }, push: function push(a, b, c, g) {
          c = c || {};c.domOperation = g;return k(a, b, c);
        }, enabled: function enabled(a, b) {
          var c = arguments.length;if (0 === c) b = !!K;else if (ta(a)) {
            var g = A(a),
                d = C.get(g);1 === c ? b = !d : C.put(g, !b);
          } else b = K = !!a;return b;
        } };return Z;
    }];
  }]).provider("$$animation", ["$animateProvider", function (a) {
    function b(a) {
      return a.data("$$animationRunner");
    }var c = this.drivers = [];this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (a, e, f, r, x, F) {
      function u(a) {
        function b(a) {
          if (a.processed) return a;a.processed = !0;var d = a.domNode,
              h = d.parentNode;e.put(d, a);for (var f; h;) {
            if (f = e.get(h)) {
              f.processed || (f = b(f));break;
            }h = h.parentNode;
          }(f || c).children.push(a);return a;
        }var c = { children: [] },
            d,
            e = new x();for (d = 0; d < a.length; d++) {
          var f = a[d];e.put(f.domNode, a[d] = { domNode: f.domNode, fn: f.fn, children: [] });
        }for (d = 0; d < a.length; d++) {
          b(a[d]);
        }return function (a) {
          var b = [],
              c = [],
              d;for (d = 0; d < a.children.length; d++) {
            c.push(a.children[d]);
          }a = c.length;var h = 0,
              e = [];for (d = 0; d < c.length; d++) {
            var f = c[d];0 >= a && (a = h, h = 0, b.push(e), e = []);e.push(f.fn);f.children.forEach(function (a) {
              h++;c.push(a);
            });a--;
          }e.length && b.push(e);return b;
        }(c);
      }var l = [],
          w = Q(a);return function (s, x, v) {
        function h(a) {
          a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");var b = [];q(a, function (a) {
            var c = a.getAttribute("ng-animate-ref");c && c.length && b.push(a);
          });return b;
        }function P(a) {
          var b = [],
              c = {};q(a, function (a, g) {
            var d = A(a.element),
                k = 0 <= ["enter", "move"].indexOf(a.event),
                d = a.structural ? h(d) : [];if (d.length) {
              var e = k ? "to" : "from";q(d, function (a) {
                var b = a.getAttribute("ng-animate-ref");c[b] = c[b] || {};c[b][e] = { animationID: g, element: H(a) };
              });
            } else b.push(a);
          });var d = {},
              k = {};q(c, function (c, h) {
            var e = c.from,
                f = c.to;if (e && f) {
              var m = a[e.animationID],
                  C = a[f.animationID],
                  n = e.animationID.toString();if (!k[n]) {
                var D = k[n] = { structural: !0, beforeStart: function beforeStart() {
                    m.beforeStart();C.beforeStart();
                  }, close: function close() {
                    m.close();C.close();
                  }, classes: y(m.classes, C.classes), from: m, to: C, anchors: [] };D.classes.length ? b.push(D) : (b.push(m), b.push(C));
              }k[n].anchors.push({ out: e.element, "in": f.element });
            } else e = e ? e.animationID : f.animationID, f = e.toString(), d[f] || (d[f] = !0, b.push(a[e]));
          });return b;
        }function y(a, b) {
          a = a.split(" ");b = b.split(" ");for (var c = [], d = 0; d < a.length; d++) {
            var k = a[d];if ("ng-" !== k.substring(0, 3)) for (var e = 0; e < b.length; e++) {
              if (k === b[e]) {
                c.push(k);break;
              }
            }
          }return c.join(" ");
        }function k(a) {
          for (var b = c.length - 1; 0 <= b; b--) {
            var d = c[b];if (f.has(d) && (d = f.get(d)(a))) return d;
          }
        }function xa(a, c) {
          a.from && a.to ? (b(a.from.element).setHost(c), b(a.to.element).setHost(c)) : b(a.element).setHost(c);
        }function ka() {
          var a = b(s);!a || "leave" === x && v.$$domOperationFired || a.end();
        }function J(b) {
          s.off("$destroy", ka);s.removeData("$$animationRunner");w(s, v);ha(s, v);v.domOperation();C && a.removeClass(s, C);s.removeClass("ng-animate");D.complete(!b);
        }v = oa(v);var n = 0 <= ["enter", "move", "leave"].indexOf(x),
            D = new r({ end: function end() {
            J();
          }, cancel: function cancel() {
            J(!0);
          } });if (!c.length) return J(), D;s.data("$$animationRunner", D);var z = za(s.attr("class"), za(v.addClass, v.removeClass)),
            C = v.tempClasses;C && (z += " " + C, v.tempClasses = null);var K;n && (K = "ng-" + x + "-prepare", a.addClass(s, K));l.push({ element: s, classes: z, event: x, structural: n, options: v, beforeStart: function beforeStart() {
            s.addClass("ng-animate");C && a.addClass(s, C);K && (a.removeClass(s, K), K = null);
          }, close: J });s.on("$destroy", ka);if (1 < l.length) return D;e.$$postDigest(function () {
          var a = [];q(l, function (c) {
            b(c.element) ? a.push(c) : c.close();
          });l.length = 0;var c = P(a),
              d = [];q(c, function (a) {
            d.push({ domNode: A(a.from ? a.from.element : a.element), fn: function fn() {
                a.beforeStart();
                var c,
                    d = a.close;if (b(a.anchors ? a.from.element || a.to.element : a.element)) {
                  var g = k(a);g && (c = g.start);
                }c ? (c = c(), c.done(function (a) {
                  d(!a);
                }), xa(a, c)) : d();
              } });
          });F(u(d));
        });return D;
      };
    }];
  }]).provider("$animateCss", ["$animateProvider", function (a) {
    var b = Fa(),
        c = Fa();this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (a, e, f, r, x, F, u, l) {
      function w(a, b) {
        var c = a.parentNode;return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++P)) + "-" + a.getAttribute("class") + "-" + b;
      }function s(k, h, f, l) {
        var n;0 < b.count(f) && (n = c.get(f), n || (h = V(h, "-stagger"), e.addClass(k, h), n = Da(a, k, l), n.animationDuration = Math.max(n.animationDuration, 0), n.transitionDuration = Math.max(n.transitionDuration, 0), e.removeClass(k, h), c.put(f, n)));return n || {};
      }function M(a) {
        y.push(a);u.waitUntilQuiet(function () {
          b.flush();c.flush();for (var a = x(), d = 0; d < y.length; d++) {
            y[d](a);
          }y.length = 0;
        });
      }function v(c, h, e) {
        h = b.get(e);h || (h = Da(a, c, Sa), "infinite" === h.animationIterationCount && (h.animationIterationCount = 1));
        b.put(e, h);c = h;e = c.animationDelay;h = c.transitionDelay;c.maxDelay = e && h ? Math.max(e, h) : e || h;c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);return c;
      }var h = Q(e),
          P = 0,
          y = [];return function (a, c) {
        function d() {
          n();
        }function u() {
          n(!0);
        }function n(b) {
          if (!(P || H && da)) {
            P = !0;da = !1;g.$$skipPreparationClasses || e.removeClass(a, fa);e.removeClass(a, ga);ra(m, !1);pa(m, !1);q(y, function (a) {
              m.style[a[0]] = "";
            });h(a, g);ha(a, g);Object.keys(G).length && q(G, function (a, b) {
              a ? m.style.setProperty(b, a) : m.style.removeProperty(b);
            });if (g.onDone) g.onDone();ea && ea.length && a.off(ea.join(" "), C);var c = a.data("$$animateCss");c && (r.cancel(c[0].timer), a.removeData("$$animateCss"));E && E.complete(!b);
          }
        }function D(a) {
          p.blockTransition && pa(m, a);p.blockKeyframeAnimation && ra(m, !!a);
        }function z() {
          E = new f({ end: d, cancel: u });M(O);n();return { $$willAnimate: !1, start: function start() {
              return E;
            }, end: d };
        }function C(a) {
          a.stopPropagation();var b = a.originalEvent || a;a = b.$manualTimeStamp || Date.now();b = parseFloat(b.elapsedTime.toFixed(3));
          Math.max(a - W, 0) >= Q && b >= L && (H = !0, n());
        }function K() {
          function b() {
            if (!P) {
              D(!1);q(y, function (a) {
                m.style[a[0]] = a[1];
              });h(a, g);e.addClass(a, ga);if (p.recalculateTimingStyles) {
                na = m.className + " " + fa;ia = w(m, na);B = v(m, na, ia);$ = B.maxDelay;I = Math.max($, 0);L = B.maxDuration;if (0 === L) {
                  n();return;
                }p.hasTransitions = 0 < B.transitionDuration;p.hasAnimations = 0 < B.animationDuration;
              }p.applyAnimationDelay && ($ = "boolean" !== typeof g.delay && sa(g.delay) ? parseFloat(g.delay) : $, I = Math.max($, 0), B.animationDelay = $, aa = [qa, $ + "s"], y.push(aa), m.style[aa[0]] = aa[1]);Q = 1E3 * I;T = 1E3 * L;if (g.easing) {
                var d,
                    f = g.easing;p.hasTransitions && (d = R + "TimingFunction", y.push([d, f]), m.style[d] = f);p.hasAnimations && (d = X + "TimingFunction", y.push([d, f]), m.style[d] = f);
              }B.transitionDuration && ea.push(ua);B.animationDuration && ea.push(va);W = Date.now();var l = Q + 1.5 * T;d = W + l;var f = a.data("$$animateCss") || [],
                  K = !0;if (f.length) {
                var z = f[0];(K = d > z.expectedEndTime) ? r.cancel(z.timer) : f.push(n);
              }K && (l = r(c, l, !1), f[0] = { timer: l, expectedEndTime: d }, f.push(n), a.data("$$animateCss", f));
              if (ea.length) a.on(ea.join(" "), C);g.to && (g.cleanupStyles && Ga(G, m, Object.keys(g.to)), Ba(a, g));
            }
          }function c() {
            var b = a.data("$$animateCss");if (b) {
              for (var d = 1; d < b.length; d++) {
                b[d]();
              }a.removeData("$$animateCss");
            }
          }if (!P) if (m.parentNode) {
            var d = function d(a) {
              if (H) da && a && (da = !1, n());else if (da = !a, B.animationDuration) if (a = ra(m, da), da) y.push(a);else {
                var b = y,
                    c = b.indexOf(a);0 <= a && b.splice(c, 1);
              }
            },
                f = 0 < ca && (B.transitionDuration && 0 === U.transitionDuration || B.animationDuration && 0 === U.animationDuration) && Math.max(U.animationDelay, U.transitionDelay);f ? r(b, Math.floor(f * ca * 1E3), !1) : b();N.resume = function () {
              d(!0);
            };N.pause = function () {
              d(!1);
            };
          } else n();
        }var g = c || {};g.$$prepared || (g = oa(Ha(g)));var G = {},
            m = A(a);if (!m || !m.parentNode || !l.enabled()) return z();var y = [],
            x = a.attr("class"),
            t = La(g),
            P,
            da,
            H,
            E,
            N,
            I,
            Q,
            L,
            T,
            W,
            ea = [];if (0 === g.duration || !F.animations && !F.transitions) return z();var ja = g.event && ba(g.event) ? g.event.join(" ") : g.event,
            Y = "",
            S = "";ja && g.structural ? Y = V(ja, "ng-", !0) : ja && (Y = ja);g.addClass && (S += V(g.addClass, "-add"));g.removeClass && (S.length && (S += " "), S += V(g.removeClass, "-remove"));g.applyClassesEarly && S.length && h(a, g);var fa = [Y, S].join(" ").trim(),
            na = x + " " + fa,
            ga = V(fa, "-active"),
            x = t.to && 0 < Object.keys(t.to).length;if (!(0 < (g.keyframeStyle || "").length || x || fa)) return z();var ia, U;0 < g.stagger ? (t = parseFloat(g.stagger), U = { transitionDelay: t, animationDelay: t, transitionDuration: 0, animationDuration: 0 }) : (ia = w(m, na), U = s(m, fa, ia, Ta));g.$$skipPreparationClasses || e.addClass(a, fa);g.transitionStyle && (t = [R, g.transitionStyle], la(m, t), y.push(t));
        0 <= g.duration && (t = 0 < m.style[R].length, t = Ea(g.duration, t), la(m, t), y.push(t));g.keyframeStyle && (t = [X, g.keyframeStyle], la(m, t), y.push(t));var ca = U ? 0 <= g.staggerIndex ? g.staggerIndex : b.count(ia) : 0;(ja = 0 === ca) && !g.skipBlocking && pa(m, 9999);var B = v(m, na, ia),
            $ = B.maxDelay;I = Math.max($, 0);L = B.maxDuration;var p = {};p.hasTransitions = 0 < B.transitionDuration;p.hasAnimations = 0 < B.animationDuration;p.hasTransitionAll = p.hasTransitions && "all" == B.transitionProperty;p.applyTransitionDuration = x && (p.hasTransitions && !p.hasTransitionAll || p.hasAnimations && !p.hasTransitions);p.applyAnimationDuration = g.duration && p.hasAnimations;p.applyTransitionDelay = sa(g.delay) && (p.applyTransitionDuration || p.hasTransitions);p.applyAnimationDelay = sa(g.delay) && p.hasAnimations;p.recalculateTimingStyles = 0 < S.length;if (p.applyTransitionDuration || p.applyAnimationDuration) L = g.duration ? parseFloat(g.duration) : L, p.applyTransitionDuration && (p.hasTransitions = !0, B.transitionDuration = L, t = 0 < m.style[R + "Property"].length, y.push(Ea(L, t))), p.applyAnimationDuration && (p.hasAnimations = !0, B.animationDuration = L, y.push([wa, L + "s"]));if (0 === L && !p.recalculateTimingStyles) return z();if (null != g.delay) {
          var aa;"boolean" !== typeof g.delay && (aa = parseFloat(g.delay), I = Math.max(aa, 0));p.applyTransitionDelay && y.push([ma, aa + "s"]);p.applyAnimationDelay && y.push([qa, aa + "s"]);
        }null == g.duration && 0 < B.transitionDuration && (p.recalculateTimingStyles = p.recalculateTimingStyles || ja);Q = 1E3 * I;T = 1E3 * L;g.skipBlocking || (p.blockTransition = 0 < B.transitionDuration, p.blockKeyframeAnimation = 0 < B.animationDuration && 0 < U.animationDelay && 0 === U.animationDuration);g.from && (g.cleanupStyles && Ga(G, m, Object.keys(g.from)), Aa(a, g));p.blockTransition || p.blockKeyframeAnimation ? D(L) : g.skipBlocking || pa(m, !1);return { $$willAnimate: !0, end: d, start: function start() {
            if (!P) return N = { end: d, cancel: u, resume: null, pause: null }, E = new f(N), M(K), E;
          } };
      };
    }];
  }]).provider("$$animateCssDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateCssDriver");this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (a, c, d, e, f, r, x) {
      function F(a) {
        return a.replace(/\bng-\S+\b/g, "");
      }function u(a, b) {
        I(a) && (a = a.split(" "));I(b) && (b = b.split(" "));return a.filter(function (a) {
          return -1 === b.indexOf(a);
        }).join(" ");
      }function l(c, e, f) {
        function k(a) {
          var b = {},
              c = A(a).getBoundingClientRect();q(["width", "height", "top", "left"], function (a) {
            var d = c[a];switch (a) {case "top":
                d += M.scrollTop;break;case "left":
                d += M.scrollLeft;}b[a] = Math.floor(d) + "px";
          });return b;
        }function l() {
          var c = F(f.attr("class") || ""),
              d = u(c, n),
              c = u(n, c),
              d = a(r, { to: k(f), addClass: "ng-anchor-in " + d, removeClass: "ng-anchor-out " + c, delay: !0 });return d.$$willAnimate ? d : null;
        }function x() {
          r.remove();e.removeClass("ng-animate-shim");f.removeClass("ng-animate-shim");
        }var r = H(A(e).cloneNode(!0)),
            n = F(r.attr("class") || "");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");r.addClass("ng-anchor");v.append(r);var D;c = function () {
          var c = a(r, { addClass: "ng-anchor-out", delay: !0, from: k(e) });return c.$$willAnimate ? c : null;
        }();if (!c && (D = l(), !D)) return x();var z = c || D;return { start: function start() {
            function a() {
              c && c.end();
            }var b,
                c = z.start();c.done(function () {
              c = null;if (!D && (D = l())) return c = D.start(), c.done(function () {
                c = null;x();b.complete();
              }), c;x();b.complete();
            });return b = new d({ end: a, cancel: a });
          } };
      }function w(a, b, c, e) {
        var f = s(a, O),
            r = s(b, O),
            x = [];q(e, function (a) {
          (a = l(c, a.out, a["in"])) && x.push(a);
        });if (f || r || 0 !== x.length) return { start: function start() {
            function a() {
              q(b, function (a) {
                a.end();
              });
            }var b = [];f && b.push(f.start());r && b.push(r.start());q(x, function (a) {
              b.push(a.start());
            });var c = new d({ end: a, cancel: a });d.all(b, function (a) {
              c.complete(a);
            });
            return c;
          } };
      }function s(c) {
        var d = c.element,
            e = c.options || {};c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));e.preparationClasses && (e.event = W(e.event, e.preparationClasses));c = a(d, e);return c.$$willAnimate ? c : null;
      }if (!f.animations && !f.transitions) return O;var M = x[0].body;c = A(e);var v = H(c.parentNode && 11 === c.parentNode.nodeType || M.contains(c) ? c : M);Q(r);return function (a) {
        return a.from && a.to ? w(a.from, a.to, a.classes, a.anchors) : s(a);
      };
    }];
  }]).provider("$$animateJs", ["$animateProvider", function (a) {
    this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (b, c, d) {
      function e(c) {
        c = ba(c) ? c : c.split(" ");for (var d = [], e = {}, f = 0; f < c.length; f++) {
          var l = c[f],
              q = a.$$registeredAnimations[l];q && !e[l] && (d.push(b.get(q)), e[l] = !0);
        }return d;
      }var f = Q(d);return function (a, b, d, u) {
        function l() {
          u.domOperation();f(a, u);
        }function w(a, b, d, e, g) {
          switch (d) {case "animate":
              b = [b, e.from, e.to, g];break;case "setClass":
              b = [b, h, H, g];break;case "addClass":
              b = [b, h, g];break;case "removeClass":
              b = [b, H, g];
              break;default:
              b = [b, g];}b.push(e);if (a = a.apply(a, b)) if (Ia(a.start) && (a = a.start()), a instanceof c) a.done(g);else if (Ia(a)) return a;return O;
        }function s(a, b, d, e, g) {
          var f = [];q(e, function (e) {
            var h = e[g];h && f.push(function () {
              var e,
                  g,
                  f = !1,
                  k = function k(a) {
                f || (f = !0, (g || O)(a), e.complete(!a));
              };e = new c({ end: function end() {
                  k();
                }, cancel: function cancel() {
                  k(!0);
                } });g = w(h, a, b, d, function (a) {
                k(!1 === a);
              });return e;
            });
          });return f;
        }function A(a, b, d, e, g) {
          var f = s(a, b, d, e, g);if (0 === f.length) {
            var h, k;"beforeSetClass" === g ? (h = s(a, "removeClass", d, e, "beforeRemoveClass"), k = s(a, "addClass", d, e, "beforeAddClass")) : "setClass" === g && (h = s(a, "removeClass", d, e, "removeClass"), k = s(a, "addClass", d, e, "addClass"));h && (f = f.concat(h));k && (f = f.concat(k));
          }if (0 !== f.length) return function (a) {
            var b = [];f.length && q(f, function (a) {
              b.push(a());
            });b.length ? c.all(b, a) : a();return function (a) {
              q(b, function (b) {
                a ? b.cancel() : b.end();
              });
            };
          };
        }var v = !1;3 === arguments.length && ca(d) && (u = d, d = null);u = oa(u);d || (d = a.attr("class") || "", u.addClass && (d += " " + u.addClass), u.removeClass && (d += " " + u.removeClass));var h = u.addClass,
            H = u.removeClass,
            y = e(d),
            k,
            E;if (y.length) {
          var I, J;"leave" == b ? (J = "leave", I = "afterLeave") : (J = "before" + b.charAt(0).toUpperCase() + b.substr(1), I = b);"enter" !== b && "move" !== b && (k = A(a, b, u, y, J));E = A(a, b, u, y, I);
        }if (k || E) {
          var n;return { $$willAnimate: !0, end: function end() {
              n ? n.end() : (v = !0, l(), ha(a, u), n = new c(), n.complete(!0));return n;
            }, start: function start() {
              function b(c) {
                v = !0;l();ha(a, u);n.complete(c);
              }if (n) return n;n = new c();var d,
                  e = [];k && e.push(function (a) {
                d = k(a);
              });e.length ? e.push(function (a) {
                l();
                a(!0);
              }) : l();E && e.push(function (a) {
                d = E(a);
              });n.setHost({ end: function end() {
                  v || ((d || O)(void 0), b(void 0));
                }, cancel: function cancel() {
                  v || ((d || O)(!0), b(!0));
                } });c.chain(e, b);return n;
            } };
        }
      };
    }];
  }]).provider("$$animateJsDriver", ["$$animationProvider", function (a) {
    a.drivers.push("$$animateJsDriver");this.$get = ["$$animateJs", "$$AnimateRunner", function (a, c) {
      function d(c) {
        return a(c.element, c.event, c.classes, c.options);
      }return function (a) {
        if (a.from && a.to) {
          var b = d(a.from),
              r = d(a.to);if (b || r) return { start: function start() {
              function a() {
                return function () {
                  q(d, function (a) {
                    a.end();
                  });
                };
              }var d = [];b && d.push(b.start());r && d.push(r.start());c.all(d, function (a) {
                e.complete(a);
              });var e = new c({ end: a(), cancel: a() });return e;
            } };
        } else return d(a);
      };
    }];
  }]);
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (A, e, B) {
  'use strict';
  function C(a) {
    var c = [];v(c, e.noop).chars(a);return c.join("");
  }function h(a, c) {
    var b = {},
        d = a.split(","),
        l;for (l = 0; l < d.length; l++) {
      b[c ? e.lowercase(d[l]) : d[l]] = !0;
    }return b;
  }function D(a, c) {
    null === a || a === B ? a = "" : "string" !== typeof a && (a = "" + a);g.innerHTML = a;var b = 5;do {
      if (0 === b) throw w("uinput");b--;11 >= document.documentMode && n(g);a = g.innerHTML;g.innerHTML = a;
    } while (a !== g.innerHTML);for (b = g.firstChild; b;) {
      switch (b.nodeType) {case 1:
          c.start(b.nodeName.toLowerCase(), E(b.attributes));
          break;case 3:
          c.chars(b.textContent);}var d;if (!(d = b.firstChild) && (1 == b.nodeType && c.end(b.nodeName.toLowerCase()), d = b.nextSibling, !d)) for (; null == d;) {
        b = b.parentNode;if (b === g) break;d = b.nextSibling;1 == b.nodeType && c.end(b.nodeName.toLowerCase());
      }b = d;
    }for (; b = g.firstChild;) {
      g.removeChild(b);
    }
  }function E(a) {
    for (var c = {}, b = 0, d = a.length; b < d; b++) {
      var l = a[b];c[l.name] = l.value;
    }return c;
  }function x(a) {
    return a.replace(/&/g, "&amp;").replace(F, function (a) {
      var b = a.charCodeAt(0);a = a.charCodeAt(1);return "&#" + (1024 * (b - 55296) + (a - 56320) + 65536) + ";";
    }).replace(G, function (a) {
      return "&#" + a.charCodeAt(0) + ";";
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }function v(a, c) {
    var b = !1,
        d = e.bind(a, a.push);return { start: function start(a, f) {
        a = e.lowercase(a);!b && H[a] && (b = a);b || !0 !== t[a] || (d("<"), d(a), e.forEach(f, function (b, f) {
          var g = e.lowercase(f),
              h = "img" === a && "src" === g || "background" === g;!0 !== I[g] || !0 === y[g] && !c(b, h) || (d(" "), d(f), d('="'), d(x(b)), d('"'));
        }), d(">"));
      }, end: function end(a) {
        a = e.lowercase(a);b || !0 !== t[a] || !0 === z[a] || (d("</"), d(a), d(">"));a == b && (b = !1);
      }, chars: function chars(a) {
        b || d(x(a));
      } };
  }function n(a) {
    if (a.nodeType === Node.ELEMENT_NODE) for (var c = a.attributes, b = 0, d = c.length; b < d; b++) {
      var e = c[b],
          f = e.name.toLowerCase();if ("xmlns:ns1" === f || 0 === f.indexOf("ns1:")) a.removeAttributeNode(e), b--, d--;
    }(c = a.firstChild) && n(c);(c = a.nextSibling) && n(c);
  }var w = e.$$minErr("$sanitize"),
      F = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      G = /([^\#-~ |!])/g,
      z = h("area,br,col,hr,img,wbr"),
      q = h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      k = h("rp,rt"),
      u = e.extend({}, k, q),
      q = e.extend({}, q, h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
      k = e.extend({}, k, h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
      J = h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
      H = h("script,style"),
      t = e.extend({}, z, q, k, u),
      y = h("background,cite,href,longdesc,src,xlink:href"),
      u = h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
      k = h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
      I = e.extend({}, y, k, u),
      g;(function (a) {
    if (a.document && a.document.implementation) a = a.document.implementation.createHTMLDocument("inert");else throw w("noinert");var c = (a.documentElement || a.getDocumentElement()).getElementsByTagName("body");1 === c.length ? g = c[0] : (c = a.createElement("html"), g = a.createElement("body"), c.appendChild(g), a.appendChild(c));
  })(A);e.module("ngSanitize", []).provider("$sanitize", function () {
    var a = !1;this.$get = ["$$sanitizeUri", function (c) {
      a && e.extend(t, J);return function (a) {
        var d = [];D(a, v(d, function (a, b) {
          return !/^unsafe:/.test(c(a, b));
        }));return d.join("");
      };
    }];this.enableSvg = function (c) {
      return e.isDefined(c) ? (a = c, this) : a;
    };
  });e.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
    var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
        b = /^mailto:/i,
        d = e.$$minErr("linky"),
        g = e.isString;return function (f, h, m) {
      function k(a) {
        a && p.push(C(a));
      }function q(a, b) {
        var c;p.push("<a ");e.isFunction(m) && (m = m(a));if (e.isObject(m)) for (c in m) {
          p.push(c + '="' + m[c] + '" ');
        } else m = {};!e.isDefined(h) || "target" in m || p.push('target="', h, '" ');p.push('href="', a.replace(/"/g, "&quot;"), '">');k(b);p.push("</a>");
      }if (null == f || "" === f) return f;if (!g(f)) throw d("notstring", f);for (var r = f, p = [], s, n; f = r.match(c);) {
        s = f[0], f[2] || f[4] || (s = (f[3] ? "http://" : "mailto:") + s), n = f.index, k(r.substr(0, n)), q(s, f[0].replace(b, "")), r = r.substring(n + f[0].length);
      }k(r);return a(p.join(""));
    };
  }]);
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
  "use strict";
  function d(a, b) {
    return M(new (M(function () {}, { prototype: a }))(), b);
  }function e(a) {
    return L(arguments, function (b) {
      b !== a && L(b, function (b, c) {
        a.hasOwnProperty(c) || (a[c] = b);
      });
    }), a;
  }function f(a, b) {
    var c = [];for (var d in a.path) {
      if (a.path[d] !== b.path[d]) break;c.push(a.path[d]);
    }return c;
  }function g(a) {
    if (Object.keys) return Object.keys(a);var c = [];return b.forEach(a, function (a, b) {
      c.push(b);
    }), c;
  }function h(a, b) {
    if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);var c = a.length >>> 0,
        d = Number(arguments[2]) || 0;for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++) {
      if (d in a && a[d] === b) return d;
    }return -1;
  }function i(a, b, c, d) {
    var e,
        i = f(c, d),
        j = {},
        k = [];for (var l in i) {
      if (i[l].params && (e = g(i[l].params), e.length)) for (var m in e) {
        h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
      }
    }return M({}, j, b);
  }function j(a, b, c) {
    if (!c) {
      c = [];for (var d in a) {
        c.push(d);
      }
    }for (var e = 0; e < c.length; e++) {
      var f = c[e];if (a[f] != b[f]) return !1;
    }return !0;
  }function k(a, b) {
    var c = {};return L(a, function (a) {
      c[a] = b[a];
    }), c;
  }function l(a) {
    var b = {},
        c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));for (var d in a) {
      -1 == h(c, d) && (b[d] = a[d]);
    }return b;
  }function m(a, b) {
    var c = K(a),
        d = c ? [] : {};return L(a, function (a, e) {
      b(a, e) && (d[c ? d.length : e] = a);
    }), d;
  }function n(a, b) {
    var c = K(a) ? [] : {};return L(a, function (a, d) {
      c[d] = b(a, d);
    }), c;
  }function o(a, b) {
    var d = 1,
        f = 2,
        i = {},
        j = [],
        k = i,
        m = M(a.when(i), { $$promises: i, $$values: i });this.study = function (i) {
      function n(a, c) {
        if (s[c] !== f) {
          if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));if (s[c] = d, I(a)) q.push(c, [function () {
            return b.get(a);
          }], j);else {
            var e = b.annotate(a);L(e, function (a) {
              a !== c && i.hasOwnProperty(a) && n(i[a], a);
            }), q.push(c, a, e);
          }r.pop(), s[c] = f;
        }
      }function o(a) {
        return J(a) && a.then && a.$$promises;
      }if (!J(i)) throw new Error("'invocables' must be an object");var p = g(i || {}),
          q = [],
          r = [],
          s = {};return L(i, n), i = r = s = null, function (d, f, g) {
        function h() {
          --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t));
        }function i(a) {
          r.$$failure = a, n.reject(a);
        }function j(c, e, f) {
          function j(a) {
            l.reject(a), i(a);
          }function k() {
            if (!G(r.$$failure)) try {
              l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                t[c] = a, h();
              }, j);
            } catch (a) {
              j(a);
            }
          }var l = a.defer(),
              m = 0;L(f, function (a) {
            s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
              t[a] = b, --m || k();
            }, j));
          }), m || k(), s[c] = l.promise;
        }if (o(d) && g === c && (g = f, f = d, d = null), d) {
          if (!J(d)) throw new Error("'locals' must be an object");
        } else d = k;if (f) {
          if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
        } else f = m;var n = a.defer(),
            r = n.promise,
            s = r.$$promises = {},
            t = M({}, d),
            u = 1 + q.length / 3,
            v = !1;if (G(f.$$failure)) return i(f.$$failure), r;f.$$inheritedValues && e(t, l(f.$$inheritedValues, p)), M(s, f.$$promises), f.$$values ? (v = e(t, l(f.$$values, p)), r.$$inheritedValues = l(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = l(f.$$inheritedValues, p)), f.then(h, i));for (var w = 0, x = q.length; x > w; w += 3) {
          d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
        }return r;
      };
    }, this.resolve = function (a, b, c, d) {
      return this.study(a)(b, c, d);
    };
  }function p(a, b, c) {
    this.fromConfig = function (a, b, c) {
      return G(a.template) ? this.fromString(a.template, b) : G(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : G(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null;
    }, this.fromString = function (a, b) {
      return H(a) ? a(b) : a;
    }, this.fromUrl = function (c, d) {
      return H(c) && (c = c(d)), null == c ? null : a.get(c, { cache: b, headers: { Accept: "text/html" } }).then(function (a) {
        return a.data;
      });
    }, this.fromProvider = function (a, b, d) {
      return c.invoke(a, null, d || { params: b });
    };
  }function q(a, b, e) {
    function f(b, c, d, e) {
      if (q.push(b), o[b]) return o[b];if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");return p[b] = new O.Param(b, c, d, e), p[b];
    }function g(a, b, c) {
      var d = ["", ""],
          e = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");if (!b) return e;switch (c) {case !1:
          d = ["(", ")"];break;case !0:
          d = ["?(", ")?"];break;default:
          d = ["(" + c + "|", ")?"];}return e + d[0] + b + d[1];
    }function h(c, e) {
      var f, g, h, i, j;return f = c[2] || c[3], j = b.params[f], h = a.substring(m, c.index), g = e ? c[4] : c[4] || ("*" == c[1] ? ".*" : null), i = O.type(g || "string") || d(O.type("string"), { pattern: new RegExp(g) }), { id: f, regexp: g, segment: h, type: i, cfg: j };
    }b = M({ params: {} }, J(b) ? b : {});var i,
        j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        l = "^",
        m = 0,
        n = this.segments = [],
        o = e ? e.params : {},
        p = this.params = e ? e.params.$$new() : new O.ParamSet(),
        q = [];this.source = a;for (var r, s, t; (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) {
      s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash), n.push(r.segment), m = j.lastIndex;
    }t = a.substring(m);var u = t.indexOf("?");if (u >= 0) {
      var v = this.sourceSearch = t.substring(u);if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0) for (m = 0; i = k.exec(v);) {
        r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex;
      }
    } else this.sourcePath = a, this.sourceSearch = "";l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q;
  }function r(a) {
    M(this, a);
  }function s() {
    function a(a) {
      return null != a ? a.toString().replace(/\//g, "%2F") : a;
    }function e(a) {
      return null != a ? a.toString().replace(/%2F/g, "/") : a;
    }function f(a) {
      return this.pattern.test(a);
    }function i() {
      return { strict: t, caseInsensitive: p };
    }function j(a) {
      return H(a) || K(a) && H(a[a.length - 1]);
    }function k() {
      for (; x.length;) {
        var a = x.shift();if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name], o.invoke(a.def));
      }
    }function l(a) {
      M(this, a || {});
    }O = this;var o,
        p = !1,
        t = !0,
        u = !1,
        v = {},
        w = !0,
        x = [],
        y = { string: { encode: a, decode: e, is: f, pattern: /[^/]*/ }, "int": { encode: a, decode: function decode(a) {
          return parseInt(a, 10);
        }, is: function is(a) {
          return G(a) && this.decode(a.toString()) === a;
        }, pattern: /\d+/ }, bool: { encode: function encode(a) {
          return a ? 1 : 0;
        }, decode: function decode(a) {
          return 0 !== parseInt(a, 10);
        }, is: function is(a) {
          return a === !0 || a === !1;
        }, pattern: /0|1/ }, date: { encode: function encode(a) {
          return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c;
        }, decode: function decode(a) {
          if (this.is(a)) return a;var b = this.capture.exec(a);return b ? new Date(b[1], b[2] - 1, b[3]) : c;
        }, is: function is(a) {
          return a instanceof Date && !isNaN(a.valueOf());
        }, equals: function equals(a, b) {
          return this.is(a) && this.is(b) && a.toISOString() === b.toISOString();
        }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/, capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/ }, json: { encode: b.toJson, decode: b.fromJson, is: b.isObject, equals: b.equals, pattern: /[^/]*/ }, any: { encode: b.identity, decode: b.identity, is: b.identity, equals: b.equals, pattern: /.*/ } };s.$$getDefaultValue = function (a) {
      if (!j(a.value)) return a.value;if (!o) throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value);
    }, this.caseInsensitive = function (a) {
      return G(a) && (p = a), p;
    }, this.strictMode = function (a) {
      return G(a) && (t = a), t;
    }, this.defaultSquashPolicy = function (a) {
      if (!G(a)) return u;if (a !== !0 && a !== !1 && !I(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");return u = a, a;
    }, this.compile = function (a, b) {
      return new q(a, M(i(), b));
    }, this.isMatcher = function (a) {
      if (!J(a)) return !1;var b = !0;return L(q.prototype, function (c, d) {
        H(c) && (b = b && G(a[d]) && H(a[d]));
      }), b;
    }, this.type = function (a, b, c) {
      if (!G(b)) return v[a];if (v.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");return v[a] = new r(M({ name: a }, b)), c && (x.push({ name: a, def: c }), w || k()), this;
    }, L(y, function (a, b) {
      v[b] = new r(M({ name: b }, a));
    }), v = d(v, {}), this.$get = ["$injector", function (a) {
      return o = a, w = !1, k(), L(y, function (a, b) {
        v[b] || (v[b] = new r(a));
      }), this;
    }], this.Param = function (a, b, d, e) {
      function f(a) {
        var b = J(a) ? g(a) : [],
            c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");return c && (a = { value: a }), a.$$fn = j(a.value) ? a.value : function () {
          return a.value;
        }, a;
      }function i(b, c, d) {
        if (b.type && c) throw new Error("Param '" + a + "' has two type configurations.");return c ? c : b.type ? b.type instanceof r ? b.type : new r(b.type) : "config" === d ? v.any : v.string;
      }function k() {
        var b = { array: "search" === e ? "auto" : !1 },
            c = a.match(/\[\]$/) ? { array: !0 } : {};return M(b, c, d).array;
      }function l(a, b) {
        var c = a.squash;if (!b || c === !1) return !1;if (!G(c) || null == c) return u;if (c === !0 || I(c)) return c;throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string");
      }function p(a, b, d, e) {
        var f,
            g,
            i = [{ from: "", to: d || b ? c : "" }, { from: null, to: d || b ? c : "" }];return f = K(a.replace) ? a.replace : [], I(e) && f.push({ from: e, to: c }), g = n(f, function (a) {
          return a.from;
        }), m(i, function (a) {
          return -1 === h(g, a.from);
        }).concat(f);
      }function q() {
        if (!o) throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn);
      }function s(a) {
        function b(a) {
          return function (b) {
            return b.from === a;
          };
        }function c(a) {
          var c = n(m(w.replace, b(a)), function (a) {
            return a.to;
          });return c.length ? c[0] : a;
        }return a = c(a), G(a) ? w.type.decode(a) : q();
      }function t() {
        return "{Param:" + a + " " + b + " squash: '" + z + "' optional: " + y + "}";
      }var w = this;d = f(d), b = i(d, b, e);var x = k();b = x ? b.$asArray(x, "search" === e) : b, "string" !== b.name || x || "path" !== e || d.value !== c || (d.value = "");var y = d.value !== c,
          z = l(d, y),
          A = p(d, x, y, z);M(this, { id: a, type: b, location: e, array: x, squash: z, replace: A, isOptional: y, value: s, dynamic: c, config: d, toString: t });
    }, l.prototype = { $$new: function $$new() {
        return d(this, M(new l(), { $$parent: this }));
      }, $$keys: function $$keys() {
        for (var a = [], b = [], c = this, d = g(l.prototype); c;) {
          b.push(c), c = c.$$parent;
        }return b.reverse(), L(b, function (b) {
          L(g(b), function (b) {
            -1 === h(a, b) && -1 === h(d, b) && a.push(b);
          });
        }), a;
      }, $$values: function $$values(a) {
        var b = {},
            c = this;return L(c.$$keys(), function (d) {
          b[d] = c[d].value(a && a[d]);
        }), b;
      }, $$equals: function $$equals(a, b) {
        var c = !0,
            d = this;return L(d.$$keys(), function (e) {
          var f = a && a[e],
              g = b && b[e];d[e].type.equals(f, g) || (c = !1);
        }), c;
      }, $$validates: function $$validates(a) {
        var b,
            c,
            d,
            e = !0,
            f = this;return L(this.$$keys(), function (g) {
          d = f[g], c = a[g], b = !c && d.isOptional, e = e && (b || !!d.type.is(c));
        }), e;
      }, $$parent: c }, this.ParamSet = l;
  }function t(a, d) {
    function e(a) {
      var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null != b ? b[1].replace(/\\(.)/g, "$1") : "";
    }function f(a, b) {
      return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
        return b["$" === c ? 0 : Number(c)];
      });
    }function g(a, b, c) {
      if (!c) return !1;var d = a.invoke(b, b, { $match: c });return G(d) ? d : !0;
    }function h(d, e, f, g) {
      function h(a, b, c) {
        return "/" === p ? a : b ? p.slice(0, -1) + a : c ? p.slice(1) + a : a;
      }function m(a) {
        function b(a) {
          var b = a(f, d);return b ? (I(b) && d.replace().url(b), !0) : !1;
        }if (!a || !a.defaultPrevented) {
          var e = o && d.url() === o;if (o = c, e) return !0;var g,
              h = j.length;for (g = 0; h > g; g++) {
            if (b(j[g])) return;
          }k && b(k);
        }
      }function n() {
        return i = i || e.$on("$locationChangeSuccess", m);
      }var o,
          p = g.baseHref(),
          q = d.url();return l || n(), { sync: function sync() {
          m();
        }, listen: function listen() {
          return n();
        }, update: function update(a) {
          return a ? void (q = d.url()) : void (d.url() !== q && (d.url(q), d.replace()));
        }, push: function push(a, b, e) {
          d.url(a.format(b || {})), o = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace();
        }, href: function href(c, e, f) {
          if (!c.validates(e)) return null;var g = a.html5Mode();b.isObject(g) && (g = g.enabled);var i = c.format(e);if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), i = h(i, g, f.absolute), !f.absolute || !i) return i;var j = !g && i ? "/" : "",
              k = d.port();return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("");
        } };
    }var i,
        j = [],
        k = null,
        l = !1;this.rule = function (a) {
      if (!H(a)) throw new Error("'rule' must be a function");return j.push(a), this;
    }, this.otherwise = function (a) {
      if (I(a)) {
        var b = a;a = function a() {
          return b;
        };
      } else if (!H(a)) throw new Error("'rule' must be a function");return k = a, this;
    }, this.when = function (a, b) {
      var c,
          h = I(b);if (I(a) && (a = d.compile(a)), !h && !H(b) && !K(b)) throw new Error("invalid 'handler' in when()");var i = { matcher: function matcher(a, b) {
          return h && (c = d.compile(b), b = ["$match", function (a) {
            return c.format(a);
          }]), M(function (c, d) {
            return g(c, b, a.exec(d.path(), d.search()));
          }, { prefix: I(a.prefix) ? a.prefix : "" });
        }, regex: function regex(a, b) {
          if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");return h && (c = b, b = ["$match", function (a) {
            return f(c, a);
          }]), M(function (c, d) {
            return g(c, b, a.exec(d.path()));
          }, { prefix: e(a) });
        } },
          j = { matcher: d.isMatcher(a), regex: a instanceof RegExp };for (var k in j) {
        if (j[k]) return this.rule(i[k](a, b));
      }throw new Error("invalid 'what' in when()");
    }, this.deferIntercept = function (a) {
      a === c && (a = !0), l = a;
    }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser"];
  }function u(a, e) {
    function f(a) {
      return 0 === a.indexOf(".") || 0 === a.indexOf("^");
    }function l(a, b) {
      if (!a) return c;var d = I(a),
          e = d ? a : a.name,
          g = f(e);if (g) {
        if (!b) throw new Error("No reference point given for path '" + e + "'");b = l(b);for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++) {
          if ("" !== h[i] || 0 !== i) {
            if ("^" !== h[i]) break;if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");k = k.parent;
          } else k = b;
        }h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h;
      }var m = y[e];return !m || !d && (d || m !== a && m.self !== a) ? c : m;
    }function m(a, b) {
      z[a] || (z[a] = []), z[a].push(b);
    }function o(a) {
      for (var b = z[a] || []; b.length;) {
        p(b.shift());
      }
    }function p(b) {
      b = d(b, { self: b, resolve: b.resolve || {}, toString: function toString() {
          return this.name;
        } });var c = b.name;if (!I(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");if (y.hasOwnProperty(c)) throw new Error("State '" + c + "'' is already defined");var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : I(b.parent) ? b.parent : J(b.parent) && I(b.parent.name) ? b.parent.name : "";if (e && !y[e]) return m(e, b.self);for (var f in B) {
        H(B[f]) && (b[f] = B[f](b, B.$delegates[f]));
      }return y[c] = b, !b[A] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
        x.$current.navigable == b && j(a, c) || x.transitionTo(b, a, { inherit: !0, location: !1 });
      }]), o(c), b;
    }function q(a) {
      return a.indexOf("*") > -1;
    }function r(a) {
      var b = a.split("."),
          c = x.$current.name.split(".");if ("**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length) return !1;for (var d = 0, e = b.length; e > d; d++) {
        "*" === b[d] && (c[d] = "*");
      }return c.join("") === b.join("");
    }function s(a, b) {
      return I(a) && !G(b) ? B[a] : H(b) && I(a) ? (B[a] && !B.$delegates[a] && (B.$delegates[a] = B[a]), B[a] = b, this) : this;
    }function t(a, b) {
      return J(a) ? b = a : b.name = a, p(b), this;
    }function u(a, e, f, h, m, o, p) {
      function s(b, c, d, f) {
        var g = a.$broadcast("$stateNotFound", b, c, d);if (g.defaultPrevented) return p.update(), B;if (!g.retry) return null;if (f.$retry) return p.update(), C;var h = x.transition = e.when(g.retry);return h.then(function () {
          return h !== x.transition ? u : (b.options.$retry = !0, x.transitionTo(b.to, b.toParams, b.options));
        }, function () {
          return B;
        }), p.update(), h;
      }function t(a, c, d, g, i, j) {
        var l = d ? c : k(a.params.$$keys(), c),
            n = { $stateParams: l };i.resolve = m.resolve(a.resolve, n, i.resolve, a);var o = [i.resolve.then(function (a) {
          i.globals = a;
        })];return g && o.push(g), L(a.views, function (c, d) {
          var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};e.$template = [function () {
            return f.load(d, { view: c, locals: n, params: l, notify: j.notify }) || "";
          }], o.push(m.resolve(e, n, i.resolve, a).then(function (f) {
            if (H(c.controllerProvider) || K(c.controllerProvider)) {
              var g = b.extend({}, e, n);f.$$controller = h.invoke(c.controllerProvider, null, g);
            } else f.$$controller = c.controller;f.$$state = a, f.$$controllerAs = c.controllerAs, i[d] = f;
          }));
        }), e.all(o).then(function () {
          return i;
        });
      }var u = e.reject(new Error("transition superseded")),
          z = e.reject(new Error("transition prevented")),
          B = e.reject(new Error("transition aborted")),
          C = e.reject(new Error("transition failed"));return w.locals = { resolve: null, globals: { $stateParams: {} } }, x = { params: {}, current: w.self, $current: w, transition: null }, x.reload = function () {
        return x.transitionTo(x.current, o, { reload: !0, inherit: !1, notify: !0 });
      }, x.go = function (a, b, c) {
        return x.transitionTo(a, b, M({ inherit: !0, relative: x.$current }, c));
      }, x.transitionTo = function (b, c, f) {
        c = c || {}, f = M({ location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1 }, f || {});var g,
            j = x.$current,
            m = x.params,
            n = j.path,
            q = l(b, f.relative);if (!G(q)) {
          var r = { to: b, toParams: c, options: f },
              y = s(r, j.self, m, f);if (y) return y;if (b = r.to, c = r.toParams, f = r.options, q = l(b, f.relative), !G(q)) {
            if (!f.relative) throw new Error("No such state '" + b + "'");throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'");
          }
        }if (q[A]) throw new Error("Cannot transition to abstract state '" + b + "'");if (f.inherit && (c = i(o, c || {}, x.$current, q)), !q.params.$$validates(c)) return C;c = q.params.$$values(c), b = q;var B = b.path,
            D = 0,
            E = B[D],
            F = w.locals,
            H = [];if (!f.reload) for (; E && E === n[D] && E.ownParams.$$equals(c, m);) {
          F = H[D] = E.locals, D++, E = B[D];
        }if (v(b, j, F, f)) return b.self.reloadOnSearch !== !1 && p.update(), x.transition = null, e.when(x.current);if (c = k(b.params.$$keys(), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, m).defaultPrevented) return p.update(), z;for (var I = e.when(F), J = D; J < B.length; J++, E = B[J]) {
          F = H[J] = d(F), I = t(E, c, E === b, I, F, f);
        }var K = x.transition = I.then(function () {
          var d, e, g;if (x.transition !== K) return u;for (d = n.length - 1; d >= D; d--) {
            g = n[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
          }for (d = D; d < B.length; d++) {
            e = B[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
          }return x.transition !== K ? u : (x.$current = b, x.current = b.self, x.params = c, N(x.params, o), x.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, { $$avoidResync: !0, replace: "replace" === f.location }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, m), p.update(!0), x.current);
        }, function (d) {
          return x.transition !== K ? u : (x.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, m, d), g.defaultPrevented || p.update(), e.reject(d));
        });return K;
      }, x.is = function (a, b, d) {
        d = M({ relative: x.$current }, d || {});var e = l(a, d.relative);return G(e) ? x.$current !== e ? !1 : b ? j(e.params.$$values(b), o) : !0 : c;
      }, x.includes = function (a, b, d) {
        if (d = M({ relative: x.$current }, d || {}), I(a) && q(a)) {
          if (!r(a)) return !1;a = x.$current.name;
        }var e = l(a, d.relative);return G(e) ? G(x.$current.includes[e.name]) ? b ? j(e.params.$$values(b), o, g(b)) : !0 : !1 : c;
      }, x.href = function (a, b, d) {
        d = M({ lossy: !0, inherit: !0, absolute: !1, relative: x.$current }, d || {});var e = l(a, d.relative);if (!G(e)) return null;d.inherit && (b = i(o, b || {}, x.$current, e));var f = e && d.lossy ? e.navigable : e;return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys(), b || {}), { absolute: d.absolute }) : null;
      }, x.get = function (a, b) {
        if (0 === arguments.length) return n(g(y), function (a) {
          return y[a].self;
        });var c = l(a, b || x.$current);return c && c.self ? c.self : null;
      }, x;
    }function v(a, b, c, d) {
      return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0;
    }var w,
        x,
        y = {},
        z = {},
        A = "abstract",
        B = { parent: function parent(a) {
        if (G(a.parent) && a.parent) return l(a.parent);var b = /^(.+)\.[^.]+$/.exec(a.name);return b ? l(b[1]) : w;
      }, data: function data(a) {
        return a.parent && a.parent.data && (a.data = a.self.data = M({}, a.parent.data, a.data)), a.data;
      }, url: function url(a) {
        var b = a.url,
            c = { params: a.params || {} };if (I(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || w).url.concat(b, c);if (!b || e.isMatcher(b)) return b;throw new Error("Invalid url '" + b + "' in state '" + a + "'");
      }, navigable: function navigable(a) {
        return a.url ? a : a.parent ? a.parent.navigable : null;
      }, ownParams: function ownParams(a) {
        var b = a.url && a.url.params || new O.ParamSet();return L(a.params || {}, function (a, c) {
          b[c] || (b[c] = new O.Param(c, null, a, "config"));
        }), b;
      }, params: function params(a) {
        return a.parent && a.parent.params ? M(a.parent.params.$$new(), a.ownParams) : new O.ParamSet();
      }, views: function views(a) {
        var b = {};return L(G(a.views) ? a.views : { "": a }, function (c, d) {
          d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c;
        }), b;
      }, path: function path(a) {
        return a.parent ? a.parent.path.concat(a) : [];
      }, includes: function includes(a) {
        var b = a.parent ? M({}, a.parent.includes) : {};return b[a.name] = !0, b;
      }, $delegates: {} };w = p({ name: "", url: "^", views: null, "abstract": !0 }), w.navigable = null, this.decorator = s, this.state = t, this.$get = u, u.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"];
  }function v() {
    function a(a, b) {
      return { load: function load(c, d) {
          var e,
              f = { template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {} };return d = M(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e;
        } };
    }this.$get = a, a.$inject = ["$rootScope", "$templateFactory"];
  }function w() {
    var a = !1;this.useAnchorScroll = function () {
      a = !0;
    }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
      return a ? b : function (a) {
        c(function () {
          a[0].scrollIntoView();
        }, 0, !1);
      };
    }];
  }function x(a, c, d, e) {
    function f() {
      return c.has ? function (a) {
        return c.has(a) ? c.get(a) : null;
      } : function (a) {
        try {
          return c.get(a);
        } catch (b) {
          return null;
        }
      };
    }function g(a, b) {
      var c = function c() {
        return { enter: function enter(a, b, c) {
            b.after(a), c();
          }, leave: function leave(a, b) {
            a.remove(), b();
          } };
      };if (j) return { enter: function enter(a, b, c) {
          var d = j.enter(a, null, b, c);d && d.then && d.then(c);
        }, leave: function leave(a, b) {
          var c = j.leave(a, b);c && c.then && c.then(b);
        } };if (i) {
        var d = i && i(b, a);return { enter: function enter(a, b, c) {
            d.enter(a, null, b), c();
          }, leave: function leave(a, b) {
            d.leave(a), b();
          } };
      }return c();
    }var h = f(),
        i = h("$animator"),
        j = h("$animate"),
        k = { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function compile(c, f, h) {
        return function (c, f, i) {
          function j() {
            l && (l.remove(), l = null), n && (n.$destroy(), n = null), m && (r.leave(m, function () {
              l = null;
            }), l = m, m = null);
          }function k(g) {
            var k,
                l = z(c, i, f, e),
                s = l && a.$current && a.$current.locals[l];if (g || s !== o) {
              k = c.$new(), o = a.$current.locals[l];var t = h(k, function (a) {
                r.enter(a, f, function () {
                  n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a);
                }), j();
              });m = t, n = k, n.$emit("$viewContentLoaded"), n.$eval(p);
            }
          }var l,
              m,
              n,
              o,
              p = i.onload || "",
              q = i.autoscroll,
              r = g(i, c);c.$on("$stateChangeSuccess", function () {
            k(!1);
          }), c.$on("$viewContentLoading", function () {
            k(!1);
          }), k(!0);
        };
      } };return k;
  }function y(a, b, c, d) {
    return { restrict: "ECA", priority: -400, compile: function compile(e) {
        var f = e.html();return function (e, g, h) {
          var i = c.$current,
              j = z(e, h, g, d),
              k = i && i.locals[j];if (k) {
            g.data("$uiView", { name: j, state: k.$$state }), g.html(k.$template ? k.$template : f);var l = a(g.contents());if (k.$$controller) {
              k.$scope = e;var m = b(k.$$controller, k);k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m);
            }l(e);
          }
        };
      } };
  }function z(a, b, c, d) {
    var e = d(b.uiView || b.name || "")(a),
        f = c.inheritedData("$uiView");return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "");
  }function A(a, b) {
    var c,
        d = a.match(/^\s*({[^}]*})\s*$/);if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");return { state: c[1], paramExpr: c[3] || null };
  }function B(a) {
    var b = a.parent().inheritedData("$uiView");return b && b.state && b.state.name ? b.state : void 0;
  }function C(a, c) {
    var d = ["location", "inherit", "reload"];return { restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function link(e, f, g, h) {
        var i = A(g.uiSref, a.current.name),
            j = null,
            k = B(f) || a.$current,
            l = null,
            m = "A" === f.prop("tagName"),
            n = "FORM" === f[0].nodeName,
            o = n ? "action" : "href",
            p = !0,
            q = { relative: k, inherit: !0 },
            r = e.$eval(g.uiSrefOpts) || {};b.forEach(d, function (a) {
          a in r && (q[a] = r[a]);
        });var s = function s(c) {
          if (c && (j = b.copy(c)), p) {
            l = a.href(i.state, j, q);var d = h[1] || h[0];return d && d.$$setStateInfo(i.state, j), null === l ? (p = !1, !1) : void g.$set(o, l);
          }
        };i.paramExpr && (e.$watch(i.paramExpr, function (a) {
          a !== j && s(a);
        }, !0), j = b.copy(e.$eval(i.paramExpr))), s(), n || f.bind("click", function (b) {
          var d = b.which || b.button;if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
            var e = c(function () {
              a.go(i.state, j, q);
            });b.preventDefault();var g = m && !l ? 1 : 0;b.preventDefault = function () {
              g-- <= 0 && c.cancel(e);
            };
          }
        });
      } };
  }function D(a, b, c) {
    return { restrict: "A", controller: ["$scope", "$element", "$attrs", function (b, d, e) {
        function f() {
          g() ? d.addClass(j) : d.removeClass(j);
        }function g() {
          return "undefined" != typeof e.uiSrefActiveEq ? h && a.is(h.name, i) : h && a.includes(h.name, i);
        }var h, i, j;j = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b), this.$$setStateInfo = function (b, c) {
          h = a.get(b, B(d)), i = c, f();
        }, b.$on("$stateChangeSuccess", f);
      }] };
  }function E(a) {
    var b = function b(_b) {
      return a.is(_b);
    };return b.$stateful = !0, b;
  }function F(a) {
    var b = function b(_b2) {
      return a.includes(_b2);
    };return b.$stateful = !0, b;
  }var G = b.isDefined,
      H = b.isFunction,
      I = b.isString,
      J = b.isObject,
      K = b.isArray,
      L = b.forEach,
      M = b.extend,
      N = b.copy;b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), o.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", o), p.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", p);var O;q.prototype.concat = function (a, b) {
    var c = { caseInsensitive: O.caseInsensitive(), strict: O.strictMode(), squash: O.defaultSquashPolicy() };return new q(this.sourcePath + a + this.sourceSearch, M(c, b), this);
  }, q.prototype.toString = function () {
    return this.source;
  }, q.prototype.exec = function (a, b) {
    function c(a) {
      function b(a) {
        return a.split("").reverse().join("");
      }function c(a) {
        return a.replace(/\\-/, "-");
      }var d = b(a).split(/-(?!\\)/),
          e = n(d, b);return n(e, c).reverse();
    }var d = this.regexp.exec(a);if (!d) return null;b = b || {};var e,
        f,
        g,
        h = this.parameters(),
        i = h.length,
        j = this.segments.length - 1,
        k = {};if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");for (e = 0; j > e; e++) {
      g = h[e];var l = this.params[g],
          m = d[e + 1];for (f = 0; f < l.replace; f++) {
        l.replace[f].from === m && (m = l.replace[f].to);
      }m && l.array === !0 && (m = c(m)), k[g] = l.value(m);
    }for (; i > e; e++) {
      g = h[e], k[g] = this.params[g].value(b[g]);
    }return k;
  }, q.prototype.parameters = function (a) {
    return G(a) ? this.params[a] || null : this.$$paramNames;
  }, q.prototype.validates = function (a) {
    return this.params.$$validates(a);
  }, q.prototype.format = function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/-/g, function (a) {
        return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase();
      });
    }a = a || {};var c = this.segments,
        d = this.parameters(),
        e = this.params;if (!this.validates(a)) return null;var f,
        g = !1,
        h = c.length - 1,
        i = d.length,
        j = c[0];for (f = 0; i > f; f++) {
      var k = h > f,
          l = d[f],
          m = e[l],
          o = m.value(a[l]),
          p = m.isOptional && m.type.equals(m.value(), o),
          q = p ? m.squash : !1,
          r = m.type.encode(o);if (k) {
        var s = c[f + 1];if (q === !1) null != r && (j += K(r) ? n(r, b).join("-") : encodeURIComponent(r)), j += s;else if (q === !0) {
          var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;j += s.match(t)[1];
        } else I(q) && (j += q + s);
      } else {
        if (null == r || p && q !== !1) continue;K(r) || (r = [r]), r = n(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0;
      }
    }return j;
  }, r.prototype.is = function () {
    return !0;
  }, r.prototype.encode = function (a) {
    return a;
  }, r.prototype.decode = function (a) {
    return a;
  }, r.prototype.equals = function (a, b) {
    return a == b;
  }, r.prototype.$subPattern = function () {
    var a = this.pattern.toString();return a.substr(1, a.length - 2);
  }, r.prototype.pattern = /.*/, r.prototype.toString = function () {
    return "{Type:" + this.name + "}";
  }, r.prototype.$asArray = function (a, b) {
    function d(a, b) {
      function d(a, b) {
        return function () {
          return a[b].apply(a, arguments);
        };
      }function e(a) {
        return K(a) ? a : G(a) ? [a] : [];
      }function f(a) {
        switch (a.length) {case 0:
            return c;case 1:
            return "auto" === b ? a[0] : a;default:
            return a;}
      }function g(a) {
        return !a;
      }function h(a, b) {
        return function (c) {
          c = e(c);var d = n(c, a);return b === !0 ? 0 === m(d, g).length : f(d);
        };
      }function i(a) {
        return function (b, c) {
          var d = e(b),
              f = e(c);if (d.length !== f.length) return !1;for (var g = 0; g < d.length; g++) {
            if (!a(d[g], f[g])) return !1;
          }return !0;
        };
      }this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$arrayMode = b;
    }if (!a) return this;if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");return new d(this, a);
  }, b.module("ui.router.util").provider("$urlMatcherFactory", s), b.module("ui.router.util").run(["$urlMatcherFactory", function () {}]), t.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", t), u.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", u), v.$inject = [], b.module("ui.router.state").provider("$view", v), b.module("ui.router.state").provider("$uiViewScroll", w), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], y.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", x), b.module("ui.router.state").directive("uiView", y), C.$inject = ["$state", "$timeout"], D.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", C).directive("uiSrefActive", D).directive("uiSrefActiveEq", D), E.$inject = ["$state"], F.$inject = ["$state"], b.module("ui.router.state").filter("isState", E).filter("includedByState", F);
}(window, window.angular);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, __webpack_provided_window_dot_jQuery) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Copyright 2015 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.3.5
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function () {
  function e(e, t, n) {
    t !== !1 ? X.addEventListener(e, J[e], n) : X.removeEventListener(e, J[e]);
  }function t(e) {
    var t = w(e.target),
        i = T(t);if (ionic.tap.requiresNativeClick(i) || $) return !1;var r = ionic.tap.pointerCoord(e);n("click", i, r.x, r.y), h(i);
  }function n(e, t, n, i) {
    var r = document.createEvent("MouseEvents");r.initMouseEvent(e, !0, !0, window, 1, 0, 0, n, i, !1, !1, !1, !1, 0, null), r.isIonicTap = !0, t.dispatchEvent(r);
  }function i(e) {
    return "submit" == e.target.type && 0 === e.detail ? null : ionic.scroll.isScrolling && ionic.tap.containsOrIsTextInput(e.target) || !e.isIonicTap && !ionic.tap.requiresNativeClick(e.target) ? (e.stopPropagation(), ionic.tap.isLabelWithTextInput(e.target) || e.preventDefault(), !1) : void 0;
  }function r(t) {
    return t.isIonicTap || p(t) ? null : B ? (t.stopPropagation(), ionic.Platform.isEdge() || ionic.tap.isTextInput(t.target) && K === t.target || b(t.target.tagName) || t.target.isContentEditable || ionic.tap.isVideo(t.target) || t.preventDefault(), !1) : ($ = !1, q = ionic.tap.pointerCoord(t), e("mousemove"), void ionic.activator.start(t));
  }function a(n) {
    return B ? (n.stopPropagation(), n.preventDefault(), !1) : p(n) || b(n.target.tagName) ? !1 : (_(n) || t(n), e("mousemove", !1), ionic.activator.end(), void ($ = !1));
  }function o(t) {
    return _(t) ? (e("mousemove", !1), ionic.activator.end(), $ = !0, !1) : void 0;
  }function s(t) {
    if (!p(t) && ($ = !1, u(), q = ionic.tap.pointerCoord(t), e(j), ionic.activator.start(t), ionic.Platform.isIOS() && ionic.tap.isLabelWithTextInput(t.target))) {
      var n = T(w(t.target));n !== F && t.preventDefault();
    }
  }function l(e) {
    p(e) || (u(), _(e) || (t(e), b(e.target.tagName) && e.preventDefault()), K = e.target, d());
  }function c(t) {
    return _(t) ? ($ = !0, e(j, !1), ionic.activator.end(), !1) : void 0;
  }function d() {
    e(j, !1), ionic.activator.end(), $ = !1;
  }function u() {
    B = !0, clearTimeout(W), W = setTimeout(function () {
      B = !1;
    }, 600);
  }function p(e) {
    return e.isTapHandled ? !0 : (e.isTapHandled = !0, ionic.tap.isElementTapDisabled(e.target) ? !0 : "SELECT" == e.target.tagName ? !0 : ionic.scroll.isScrolling && ionic.tap.containsOrIsTextInput(e.target) ? (e.preventDefault(), !0) : void 0);
  }function h(e) {
    U = null;var t = !1;"SELECT" == e.tagName ? (n("mousedown", e, 0, 0), e.focus && e.focus(), t = !0) : v() === e ? t = !0 : /^(input|textarea|ion-label)$/i.test(e.tagName) || e.isContentEditable ? (t = !0, e.focus && e.focus(), e.value = e.value, B && (U = e)) : f(), t && (v(e), ionic.trigger("ionic.focusin", { target: e }, !0));
  }function f() {
    var e = v();e && (/^(input|textarea|select)$/i.test(e.tagName) || e.isContentEditable) && e.blur(), v(null);
  }function m(e) {
    B && ionic.tap.isTextInput(v()) && ionic.tap.isTextInput(U) && U !== e.target && (U.focus(), U = null), ionic.scroll.isScrolling = !1;
  }function g() {
    v(null);
  }function v(e) {
    return arguments.length && (F = e), F || document.activeElement;
  }function _(e) {
    if (!e || 1 !== e.target.nodeType || !q || 0 === q.x && 0 === q.y) return !1;var t = ionic.tap.pointerCoord(e),
        n = !(!e.target.classList || !e.target.classList.contains || "function" != typeof e.target.classList.contains),
        i = n && e.target.classList.contains("button") ? Q : Z;return Math.abs(q.x - t.x) > i || Math.abs(q.y - t.y) > i;
  }function w(e, t) {
    for (var n = e, i = 0; 6 > i && n; i++) {
      if ("LABEL" === n.tagName) return n;n = n.parentElement;
    }return t !== !1 ? e : void 0;
  }function T(e) {
    if (e && "LABEL" === e.tagName) {
      if (e.control) return e.control;if (e.querySelector) {
        var t = e.querySelector("input,textarea,select");if (t) return t;
      }
    }return e;
  }function b(e) {
    return (/^(select|option)$/i.test(e)
    );
  }function S() {
    ionic.keyboard.isInitialized || (V() ? (window.addEventListener("native.keyboardshow", pe), window.addEventListener("native.keyboardhide", x)) : document.body.addEventListener("focusout", x), document.body.addEventListener("ionic.focusin", ue), document.body.addEventListener("focusin", ue), window.navigator.msPointerEnabled ? document.removeEventListener("MSPointerDown", S) : document.removeEventListener("touchstart", S), ionic.keyboard.isInitialized = !0);
  }function y(e) {
    clearTimeout(re), (!ionic.keyboard.isOpen || ionic.keyboard.isClosing) && (ionic.keyboard.isOpening = !0, ionic.keyboard.isClosing = !1), ionic.keyboard.height = e.keyboardHeight, le ? L(O, !0) : L(I, !0);
  }function E(e) {
    return clearTimeout(re), e.target && !e.target.readOnly && ionic.tap.isKeyboardElement(e.target) && (ne = ionic.DomUtil.getParentWithClass(e.target, de)) ? (ee = e.target, ne.classList.contains("overflow-scroll") || (document.body.scrollTop = 0, ne.scrollTop = 0, ionic.requestAnimationFrame(function () {
      document.body.scrollTop = 0, ne.scrollTop = 0;
    }), window.navigator.msPointerEnabled ? document.addEventListener("MSPointerMove", C, !1) : document.addEventListener("touchmove", C, !1)), (!ionic.keyboard.isOpen || ionic.keyboard.isClosing) && (ionic.keyboard.isOpening = !0, ionic.keyboard.isClosing = !1), document.addEventListener("keydown", M, !1), void (ionic.keyboard.isOpen || V() ? ionic.keyboard.isOpen && I() : L(I, !0))) : (ee && (te = ee), void (ee = null));
  }function x() {
    clearTimeout(re), (ionic.keyboard.isOpen || ionic.keyboard.isOpening) && (ionic.keyboard.isClosing = !0, ionic.keyboard.isOpening = !1), re = setTimeout(function () {
      ionic.requestAnimationFrame(function () {
        le ? L(function () {
          O(), P();
        }, !1) : L(P, !1);
      });
    }, 50);
  }function D() {
    ionic.keyboard.isLandscape = !ionic.keyboard.isLandscape, ionic.Platform.isIOS() && O(), ionic.Platform.isAndroid() && (ionic.keyboard.isOpen && V() ? le = !0 : L(O, !1));
  }function M(e) {
    ionic.scroll.isScrolling && C(e);
  }function C(e) {
    "TEXTAREA" !== e.target.tagName && e.preventDefault();
  }function L(e, t) {
    clearInterval(ie);var n,
        i = 0,
        r = G(),
        a = r;return n = ionic.Platform.isAndroid() && ionic.Platform.version() < 4.4 ? 30 : ionic.Platform.isAndroid() ? 10 : 1, ie = setInterval(function () {
      a = G(), (!(++i < n) || (N(a) || z(a)) && ionic.keyboard.height) && (V() || (ionic.keyboard.height = Math.abs(r - window.innerHeight)), ionic.keyboard.isOpen = t, clearInterval(ie), e());
    }, 50), n;
  }function P() {
    clearTimeout(re), ionic.keyboard.isOpen = !1, ionic.keyboard.isClosing = !1, (ee || te) && ionic.trigger("resetScrollView", { target: ee || te }, !0), ionic.requestAnimationFrame(function () {
      document.body.classList.remove(ce);
    }), window.navigator.msPointerEnabled ? document.removeEventListener("MSPointerMove", C) : document.removeEventListener("touchmove", C), document.removeEventListener("keydown", M), ionic.Platform.isAndroid() && (V() && cordova.plugins.Keyboard.close(), ee && ee.blur()), ee = null, te = null;
  }function I() {
    ionic.keyboard.isOpen = !0, ionic.keyboard.isOpening = !1;var e = { keyboardHeight: k(), viewportHeight: ae };if (ee) {
      e.target = ee;var t = ee.getBoundingClientRect();e.elementTop = Math.round(t.top), e.elementBottom = Math.round(t.bottom), e.windowHeight = e.viewportHeight - e.keyboardHeight, e.isElementUnderKeyboard = e.elementBottom > e.windowHeight, ionic.trigger("scrollChildIntoView", e, !0);
    }return setTimeout(function () {
      document.body.classList.add(ce);
    }, 400), e;
  }function k() {
    if (ionic.keyboard.height) return ionic.keyboard.height;if (ionic.Platform.isAndroid()) {
      if (ionic.Platform.isFullScreen) return 275;var e = window.innerHeight;return ae > e ? ae - e : 0;
    }return ionic.Platform.isIOS() ? ionic.keyboard.isLandscape ? 206 : ionic.Platform.isWebView() ? 260 : 216 : 275;
  }function N(e) {
    return !!(!ionic.keyboard.isLandscape && oe && Math.abs(oe - e) < 2);
  }function z(e) {
    return !!(ionic.keyboard.isLandscape && se && Math.abs(se - e) < 2);
  }function O() {
    le = !1, ae = G(), ionic.keyboard.isLandscape && !se ? se = ae : ionic.keyboard.isLandscape || oe || (oe = ae), ee && ionic.trigger("resetScrollView", { target: ee }, !0), ionic.keyboard.isOpen && ionic.tap.isTextInput(ee) && I();
  }function A() {
    var e = G();e / window.innerWidth < 1 && (ionic.keyboard.isLandscape = !0), ae = e, ionic.keyboard.isLandscape && !se ? se = ae : ionic.keyboard.isLandscape || oe || (oe = ae);
  }function G() {
    var e = window.innerHeight;return ionic.Platform.isAndroid() && ionic.Platform.isFullScreen || !ionic.keyboard.isOpen && !ionic.keyboard.isOpening || ionic.keyboard.isClosing ? e : e + k();
  }function V() {
    return !!(window.cordova && cordova.plugins && cordova.plugins.Keyboard);
  }function R() {
    var e;for (e = 0; e < document.head.children.length; e++) {
      if ("viewport" == document.head.children[e].name) {
        he = document.head.children[e];break;
      }
    }if (he) {
      var t,
          n = he.content.toLowerCase().replace(/\s+/g, "").split(",");for (e = 0; e < n.length; e++) {
        n[e] && (t = n[e].split("="), fe[t[0]] = t.length > 1 ? t[1] : "_");
      }H();
    }
  }function H() {
    var e = fe.width,
        t = fe.height,
        n = ionic.Platform,
        i = n.version(),
        r = "device-width",
        a = "device-height",
        o = ionic.viewport.orientation();delete fe.height, fe.width = r, n.isIPad() ? i > 7 ? delete fe.width : n.isWebView() ? 90 == o ? fe.height = "0" : 7 == i && (fe.height = a) : 7 > i && (fe.height = "0") : n.isIOS() && (n.isWebView() ? i > 7 ? delete fe.width : 7 > i ? t && (fe.height = "0") : 7 == i && (fe.height = a) : 7 > i && t && (fe.height = "0")), (e !== fe.width || t !== fe.height) && Y();
  }function Y() {
    var e,
        t = [];for (e in fe) {
      fe[e] && t.push(e + ("_" == fe[e] ? "" : "=" + fe[e]));
    }he.content = t.join(", ");
  }window.ionic = window.ionic || {}, window.ionic.views = {}, window.ionic.version = "1.3.5", function (e) {
    e.DelegateService = function (e) {
      function t() {
        return !0;
      }if (e.indexOf("$getByHandle") > -1) throw new Error("Method '$getByHandle' is implicitly added to each delegate service. Do not list it as a method.");return ["$log", function (n) {
        function i(e, t) {
          this._instances = e, this.handle = t;
        }function r() {
          this._instances = [];
        }function a(e) {
          return function () {
            var t,
                i = this.handle,
                r = arguments,
                a = 0;return this._instances.forEach(function (n) {
              if ((!i || i == n.$$delegateHandle) && n.$$filterFn(n)) {
                a++;var o = n[e].apply(n, r);1 === a && (t = o);
              }
            }), !a && i ? n.warn('Delegate for handle "' + i + '" could not find a corresponding element with delegate-handle="' + i + '"! ' + e + "() was not called!\nPossible cause: If you are calling " + e + '() immediately, and your element with delegate-handle="' + i + '" is a child of your controller, then your element may not be compiled yet. Put a $timeout around your call to ' + e + "() and try again.") : t;
          };
        }return e.forEach(function (e) {
          i.prototype[e] = a(e);
        }), r.prototype = i.prototype, r.prototype._registerInstance = function (e, n, i) {
          var r = this._instances;return e.$$delegateHandle = n, e.$$filterFn = i || t, r.push(e), function () {
            var t = r.indexOf(e);-1 !== t && r.splice(t, 1);
          };
        }, r.prototype.$getByHandle = function (e) {
          return new i(this._instances, e);
        }, new r();
      }];
    };
  }(window.ionic), function (e, t, n) {
    function i() {
      a = !0;for (var e = 0; e < r.length; e++) {
        n.requestAnimationFrame(r[e]);
      }r = [], t.removeEventListener("DOMContentLoaded", i);
    }var r = [],
        a = "complete" === t.readyState || "interactive" === t.readyState;a || t.addEventListener("DOMContentLoaded", i), e._rAF = function () {
      return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (t) {
        e.setTimeout(t, 16);
      };
    }();var o = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame;n.DomUtil = { requestAnimationFrame: function requestAnimationFrame(t) {
        return e._rAF(t);
      }, cancelAnimationFrame: function cancelAnimationFrame(e) {
        o(e);
      }, animationFrameThrottle: function animationFrameThrottle(e) {
        var t, i, r;return function () {
          t = arguments, r = this, i || (i = !0, n.requestAnimationFrame(function () {
            e.apply(r, t), i = !1;
          }));
        };
      }, contains: function contains(e, t) {
        for (var n = t; n;) {
          if (n === e) return !0;n = n.parentNode;
        }
      }, getPositionInParent: function getPositionInParent(e) {
        return { left: e.offsetLeft, top: e.offsetTop };
      }, getOffsetTop: function getOffsetTop(e) {
        var t = 0;if (e.offsetParent) {
          do {
            t += e.offsetTop, e = e.offsetParent;
          } while (e);return t;
        }
      }, ready: function ready(e) {
        a ? n.requestAnimationFrame(e) : r.push(e);
      }, getTextBounds: function getTextBounds(n) {
        if (t.createRange) {
          var i = t.createRange();if (i.selectNodeContents(n), i.getBoundingClientRect) {
            var r = i.getBoundingClientRect();if (r) {
              var a = e.scrollX,
                  o = e.scrollY;return { top: r.top + o, left: r.left + a, right: r.left + a + r.width, bottom: r.top + o + r.height, width: r.width, height: r.height };
            }
          }
        }return null;
      }, getChildIndex: function getChildIndex(e, t) {
        if (t) for (var n, i = e.parentNode.children, r = 0, a = 0, o = i.length; o > r; r++) {
          if (n = i[r], n.nodeName && n.nodeName.toLowerCase() == t) {
            if (n == e) return a;a++;
          }
        }return Array.prototype.slice.call(e.parentNode.children).indexOf(e);
      }, swapNodes: function swapNodes(e, t) {
        t.parentNode.insertBefore(e, t);
      }, elementIsDescendant: function elementIsDescendant(e, t, n) {
        var i = e;do {
          if (i === t) return !0;i = i.parentNode;
        } while (i && i !== n);return !1;
      }, getParentWithClass: function getParentWithClass(e, t, n) {
        for (n = n || 10; e.parentNode && n--;) {
          if (e.parentNode.classList && e.parentNode.classList.contains(t)) return e.parentNode;e = e.parentNode;
        }return null;
      }, getParentOrSelfWithClass: function getParentOrSelfWithClass(e, t, n) {
        for (n = n || 10; e && n--;) {
          if (e.classList && e.classList.contains(t)) return e;e = e.parentNode;
        }return null;
      }, rectContains: function rectContains(e, t, n, i, r, a) {
        return n > e || e > r ? !1 : i > t || t > a ? !1 : !0;
      }, blurAll: function blurAll() {
        return t.activeElement && t.activeElement != t.body ? (t.activeElement.blur(), t.activeElement) : null;
      }, cachedAttr: function cachedAttr(e, t, n) {
        if (e = e && e.length && e[0] || e, e && e.setAttribute) {
          var i = "$attr-" + t;return arguments.length > 2 ? e[i] !== n && (e.setAttribute(t, n), e[i] = n) : "undefined" == typeof e[i] && (e[i] = e.getAttribute(t)), e[i];
        }
      }, cachedStyles: function cachedStyles(e, t) {
        if (e = e && e.length && e[0] || e, e && e.style) for (var n in t) {
          e["$style-" + n] !== t[n] && (e.style[n] = e["$style-" + n] = t[n]);
        }
      } }, n.requestAnimationFrame = n.DomUtil.requestAnimationFrame, n.cancelAnimationFrame = n.DomUtil.cancelAnimationFrame, n.animationFrameThrottle = n.DomUtil.animationFrameThrottle;
  }(window, document, ionic), function (e) {
    e.CustomEvent = function () {
      if ("function" == typeof window.CustomEvent) return CustomEvent;var e = function e(_e, t) {
        var n;t = t || { bubbles: !1, cancelable: !1, detail: void 0 };try {
          n = document.createEvent("CustomEvent"), n.initCustomEvent(_e, t.bubbles, t.cancelable, t.detail);
        } catch (i) {
          n = document.createEvent("Event");for (var r in t) {
            n[r] = t[r];
          }n.initEvent(_e, t.bubbles, t.cancelable);
        }return n;
      };return e.prototype = window.Event.prototype, e;
    }(), e.EventController = { VIRTUALIZED_EVENTS: ["tap", "swipe", "swiperight", "swipeleft", "drag", "hold", "release"], trigger: function trigger(t, n, i, r) {
        var a = new e.CustomEvent(t, { detail: n, bubbles: !!i, cancelable: !!r });n && n.target && n.target.dispatchEvent && n.target.dispatchEvent(a) || window.dispatchEvent(a);
      }, on: function on(t, n, i) {
        for (var r = i || window, a = 0, o = this.VIRTUALIZED_EVENTS.length; o > a; a++) {
          if (t == this.VIRTUALIZED_EVENTS[a]) {
            var s = new e.Gesture(i);return s.on(t, n), s;
          }
        }r.addEventListener(t, n);
      }, off: function off(e, t, n) {
        n.removeEventListener(e, t);
      }, onGesture: function onGesture(t, n, i, r) {
        var a = new e.Gesture(i, r);return a.on(t, n), a;
      }, offGesture: function offGesture(e, t, n) {
        e && e.off(t, n);
      }, handlePopState: function handlePopState() {} }, e.on = function () {
      e.EventController.on.apply(e.EventController, arguments);
    }, e.off = function () {
      e.EventController.off.apply(e.EventController, arguments);
    }, e.trigger = e.EventController.trigger, e.onGesture = function () {
      return e.EventController.onGesture.apply(e.EventController.onGesture, arguments);
    }, e.offGesture = function () {
      return e.EventController.offGesture.apply(e.EventController.offGesture, arguments);
    };
  }(window.ionic), function (e) {
    function t() {
      if (!e.Gestures.READY) {
        e.Gestures.event.determineEventTypes();for (var t in e.Gestures.gestures) {
          e.Gestures.gestures.hasOwnProperty(t) && e.Gestures.detection.register(e.Gestures.gestures[t]);
        }e.Gestures.event.onTouch(e.Gestures.DOCUMENT, e.Gestures.EVENT_MOVE, e.Gestures.detection.detect), e.Gestures.event.onTouch(e.Gestures.DOCUMENT, e.Gestures.EVENT_END, e.Gestures.detection.detect), e.Gestures.READY = !0;
      }
    }e.Gesture = function (t, n) {
      return new e.Gestures.Instance(t, n || {});
    }, e.Gestures = {}, e.Gestures.defaults = { stop_browser_behavior: "disable-user-behavior" }, e.Gestures.HAS_POINTEREVENTS = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, e.Gestures.HAS_TOUCHEVENTS = "ontouchstart" in window, e.Gestures.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i, e.Gestures.NO_MOUSEEVENTS = e.Gestures.HAS_TOUCHEVENTS && window.navigator.userAgent.match(e.Gestures.MOBILE_REGEX), e.Gestures.EVENT_TYPES = {}, e.Gestures.DIRECTION_DOWN = "down", e.Gestures.DIRECTION_LEFT = "left", e.Gestures.DIRECTION_UP = "up", e.Gestures.DIRECTION_RIGHT = "right", e.Gestures.POINTER_MOUSE = "mouse", e.Gestures.POINTER_TOUCH = "touch", e.Gestures.POINTER_PEN = "pen", e.Gestures.EVENT_START = "start", e.Gestures.EVENT_MOVE = "move", e.Gestures.EVENT_END = "end", e.Gestures.DOCUMENT = window.document, e.Gestures.plugins = {}, e.Gestures.READY = !1, e.Gestures.Instance = function (n, i) {
      var r = this;return null === n ? this : (t(), this.element = n, this.enabled = !0, this.options = e.Gestures.utils.extend(e.Gestures.utils.extend({}, e.Gestures.defaults), i || {}), this.options.stop_browser_behavior && e.Gestures.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), e.Gestures.event.onTouch(n, e.Gestures.EVENT_START, function (t) {
        r.enabled && e.Gestures.detection.startDetect(r, t);
      }), this);
    }, e.Gestures.Instance.prototype = { on: function on(e, t) {
        for (var n = e.split(" "), i = 0; i < n.length; i++) {
          this.element.addEventListener(n[i], t, !1);
        }return this;
      }, off: function off(e, t) {
        for (var n = e.split(" "), i = 0; i < n.length; i++) {
          this.element.removeEventListener(n[i], t, !1);
        }return this;
      }, trigger: function trigger(t, n) {
        var i = e.Gestures.DOCUMENT.createEvent("Event");i.initEvent(t, !0, !0), i.gesture = n;var r = this.element;return e.Gestures.utils.hasParent(n.target, r) && (r = n.target), r.dispatchEvent(i), this;
      }, enable: function enable(e) {
        return this.enabled = e, this;
      } };var n = null,
        i = !1,
        r = !1;e.Gestures.event = { bindDom: function bindDom(e, t, n) {
        for (var i = t.split(" "), r = 0; r < i.length; r++) {
          e.addEventListener(i[r], n, !1);
        }
      }, onTouch: function onTouch(t, a, o) {
        var s = this;this.bindDom(t, e.Gestures.EVENT_TYPES[a], function (l) {
          var c = l.type.toLowerCase();if (!c.match(/mouse/) || !r) {
            c.match(/touch/) || c.match(/pointerdown/) || c.match(/mouse/) && 1 === l.which ? i = !0 : c.match(/mouse/) && 1 !== l.which && (i = !1), c.match(/touch|pointer/) && (r = !0);var d = 0;i && (e.Gestures.HAS_POINTEREVENTS && a != e.Gestures.EVENT_END ? d = e.Gestures.PointerEvent.updatePointer(a, l) : c.match(/touch/) ? d = l.touches.length : r || (d = c.match(/up/) ? 0 : 1), d > 0 && a == e.Gestures.EVENT_END ? a = e.Gestures.EVENT_MOVE : d || (a = e.Gestures.EVENT_END), (d || null === n) && (n = l), o.call(e.Gestures.detection, s.collectEventData(t, a, s.getTouchList(n, a), l)), e.Gestures.HAS_POINTEREVENTS && a == e.Gestures.EVENT_END && (d = e.Gestures.PointerEvent.updatePointer(a, l))), d || (n = null, i = !1, r = !1, e.Gestures.PointerEvent.reset());
          }
        });
      }, determineEventTypes: function determineEventTypes() {
        var t;t = e.Gestures.HAS_POINTEREVENTS ? e.Gestures.PointerEvent.getEvents() : e.Gestures.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], e.Gestures.EVENT_TYPES[e.Gestures.EVENT_START] = t[0], e.Gestures.EVENT_TYPES[e.Gestures.EVENT_MOVE] = t[1], e.Gestures.EVENT_TYPES[e.Gestures.EVENT_END] = t[2];
      }, getTouchList: function getTouchList(t) {
        return e.Gestures.HAS_POINTEREVENTS ? e.Gestures.PointerEvent.getTouchList() : t.touches ? t.touches : (t.identifier = 1, [t]);
      }, collectEventData: function collectEventData(t, n, i, r) {
        var a = e.Gestures.POINTER_TOUCH;return (r.type.match(/mouse/) || e.Gestures.PointerEvent.matchType(e.Gestures.POINTER_MOUSE, r)) && (a = e.Gestures.POINTER_MOUSE), { center: e.Gestures.utils.getCenter(i), timeStamp: new Date().getTime(), target: r.target, touches: i, eventType: n, pointerType: a, srcEvent: r, preventDefault: function preventDefault() {
            this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault;
          }, stopPropagation: function stopPropagation() {
            this.srcEvent.stopPropagation();
          }, stopDetect: function stopDetect() {
            return e.Gestures.detection.stopDetect();
          } };
      } }, e.Gestures.PointerEvent = { pointers: {}, getTouchList: function getTouchList() {
        var e = this,
            t = [];return Object.keys(e.pointers).sort().forEach(function (n) {
          t.push(e.pointers[n]);
        }), t;
      }, updatePointer: function updatePointer(t, n) {
        return t == e.Gestures.EVENT_END ? this.pointers = {} : (n.identifier = n.pointerId, this.pointers[n.pointerId] = n), Object.keys(this.pointers).length;
      }, matchType: function matchType(t, n) {
        if (!n.pointerType) return !1;var i = {};return i[e.Gestures.POINTER_MOUSE] = n.pointerType == n.MSPOINTER_TYPE_MOUSE || n.pointerType == e.Gestures.POINTER_MOUSE, i[e.Gestures.POINTER_TOUCH] = n.pointerType == n.MSPOINTER_TYPE_TOUCH || n.pointerType == e.Gestures.POINTER_TOUCH, i[e.Gestures.POINTER_PEN] = n.pointerType == n.MSPOINTER_TYPE_PEN || n.pointerType == e.Gestures.POINTER_PEN, i[t];
      }, getEvents: function getEvents() {
        return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"];
      }, reset: function reset() {
        this.pointers = {};
      } }, e.Gestures.utils = { extend: function extend(e, t, n) {
        for (var i in t) {
          void 0 !== e[i] && n || (e[i] = t[i]);
        }return e;
      }, hasParent: function hasParent(e, t) {
        for (; e;) {
          if (e == t) return !0;e = e.parentNode;
        }return !1;
      }, getCenter: function getCenter(e) {
        for (var t = [], n = [], i = 0, r = e.length; r > i; i++) {
          t.push(e[i].pageX), n.push(e[i].pageY);
        }return { pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2, pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2 };
      }, getVelocity: function getVelocity(e, t, n) {
        return { x: Math.abs(t / e) || 0, y: Math.abs(n / e) || 0 };
      }, getAngle: function getAngle(e, t) {
        var n = t.pageY - e.pageY,
            i = t.pageX - e.pageX;return 180 * Math.atan2(n, i) / Math.PI;
      }, getDirection: function getDirection(t, n) {
        var i = Math.abs(t.pageX - n.pageX),
            r = Math.abs(t.pageY - n.pageY);return i >= r ? t.pageX - n.pageX > 0 ? e.Gestures.DIRECTION_LEFT : e.Gestures.DIRECTION_RIGHT : t.pageY - n.pageY > 0 ? e.Gestures.DIRECTION_UP : e.Gestures.DIRECTION_DOWN;
      }, getDistance: function getDistance(e, t) {
        var n = t.pageX - e.pageX,
            i = t.pageY - e.pageY;return Math.sqrt(n * n + i * i);
      }, getScale: function getScale(e, t) {
        return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1;
      }, getRotation: function getRotation(e, t) {
        return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0;
      }, isVertical: function isVertical(t) {
        return t == e.Gestures.DIRECTION_UP || t == e.Gestures.DIRECTION_DOWN;
      }, stopDefaultBrowserBehavior: function stopDefaultBrowserBehavior(e, t) {
        e && e.classList && (e.classList.add(t), e.onselectstart = function () {
          return !1;
        });
      } }, e.Gestures.detection = { gestures: [], current: null, previous: null, stopped: !1, startDetect: function startDetect(t, n) {
        this.current || (this.stopped = !1, this.current = { inst: t, startEvent: e.Gestures.utils.extend({}, n), lastEvent: !1, name: "" }, this.detect(n));
      }, detect: function detect(t) {
        if (!this.current || this.stopped) return null;t = this.extendEventData(t);for (var n = this.current.inst.options, i = 0, r = this.gestures.length; r > i; i++) {
          var a = this.gestures[i];if (!this.stopped && n[a.name] !== !1 && a.handler.call(a, t, this.current.inst) === !1) {
            this.stopDetect();break;
          }
        }return this.current && (this.current.lastEvent = t), t.eventType == e.Gestures.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t;
      }, stopDetect: function stopDetect() {
        this.previous = e.Gestures.utils.extend({}, this.current), this.current = null, this.stopped = !0;
      }, extendEventData: function extendEventData(t) {
        var n = this.current.startEvent;if (n && (t.touches.length != n.touches.length || t.touches === n.touches)) {
          n.touches = [];for (var i = 0, r = t.touches.length; r > i; i++) {
            n.touches.push(e.Gestures.utils.extend({}, t.touches[i]));
          }
        }var a = t.timeStamp - n.timeStamp,
            o = t.center.pageX - n.center.pageX,
            s = t.center.pageY - n.center.pageY,
            l = e.Gestures.utils.getVelocity(a, o, s);return e.Gestures.utils.extend(t, { deltaTime: a, deltaX: o, deltaY: s, velocityX: l.x, velocityY: l.y, distance: e.Gestures.utils.getDistance(n.center, t.center), angle: e.Gestures.utils.getAngle(n.center, t.center), direction: e.Gestures.utils.getDirection(n.center, t.center), scale: e.Gestures.utils.getScale(n.touches, t.touches), rotation: e.Gestures.utils.getRotation(n.touches, t.touches), startEvent: n }), t;
      }, register: function register(t) {
        var n = t.defaults || {};return void 0 === n[t.name] && (n[t.name] = !0), e.Gestures.utils.extend(e.Gestures.defaults, n, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function (e, t) {
          return e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
        }), this.gestures;
      } }, e.Gestures.gestures = e.Gestures.gestures || {}, e.Gestures.gestures.Hold = { name: "hold", index: 10, defaults: { hold_timeout: 500, hold_threshold: 9 }, timer: null, handler: function handler(t, n) {
        switch (t.eventType) {case e.Gestures.EVENT_START:
            clearTimeout(this.timer), e.Gestures.detection.current.name = this.name, this.timer = setTimeout(function () {
              "hold" == e.Gestures.detection.current.name && (e.tap.cancelClick(), n.trigger("hold", t));
            }, n.options.hold_timeout);break;case e.Gestures.EVENT_MOVE:
            t.distance > n.options.hold_threshold && clearTimeout(this.timer);break;case e.Gestures.EVENT_END:
            clearTimeout(this.timer);}
      } }, e.Gestures.gestures.Tap = { name: "tap", index: 100, defaults: { tap_max_touchtime: 250, tap_max_distance: 10, tap_always: !0, doubletap_distance: 20, doubletap_interval: 300 }, handler: function handler(t, n) {
        if (t.eventType == e.Gestures.EVENT_END && "touchcancel" != t.srcEvent.type) {
          var i = e.Gestures.detection.previous,
              r = !1;if (t.deltaTime > n.options.tap_max_touchtime || t.distance > n.options.tap_max_distance) return;i && "tap" == i.name && t.timeStamp - i.lastEvent.timeStamp < n.options.doubletap_interval && t.distance < n.options.doubletap_distance && (n.trigger("doubletap", t), r = !0), (!r || n.options.tap_always) && (e.Gestures.detection.current.name = "tap", n.trigger("tap", t));
        }
      } }, e.Gestures.gestures.Swipe = { name: "swipe", index: 40, defaults: { swipe_max_touches: 1, swipe_velocity: .4 }, handler: function handler(t, n) {
        if (t.eventType == e.Gestures.EVENT_END) {
          if (n.options.swipe_max_touches > 0 && t.touches.length > n.options.swipe_max_touches) return;(t.velocityX > n.options.swipe_velocity || t.velocityY > n.options.swipe_velocity) && (n.trigger(this.name, t), n.trigger(this.name + t.direction, t));
        }
      } }, e.Gestures.gestures.Drag = { name: "drag", index: 50, defaults: { drag_min_distance: 10, correct_for_drag_min_distance: !0, drag_max_touches: 1, drag_block_horizontal: !0, drag_block_vertical: !0, drag_lock_to_axis: !1, drag_lock_min_distance: 25, prevent_default_directions: [] }, triggered: !1, handler: function handler(t, n) {
        if ("touchstart" == t.srcEvent.type || "touchend" == t.srcEvent.type ? this.preventedFirstMove = !1 : this.preventedFirstMove || "touchmove" != t.srcEvent.type || (n.options.prevent_default_directions.length > 0 && -1 != n.options.prevent_default_directions.indexOf(t.direction) && t.srcEvent.preventDefault(), this.preventedFirstMove = !0), e.Gestures.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", t), void (this.triggered = !1);if (!(n.options.drag_max_touches > 0 && t.touches.length > n.options.drag_max_touches)) switch (t.eventType) {case e.Gestures.EVENT_START:
            this.triggered = !1;break;case e.Gestures.EVENT_MOVE:
            if (t.distance < n.options.drag_min_distance && e.Gestures.detection.current.name != this.name) return;if (e.Gestures.detection.current.name != this.name && (e.Gestures.detection.current.name = this.name, n.options.correct_for_drag_min_distance)) {
              var i = Math.abs(n.options.drag_min_distance / t.distance);e.Gestures.detection.current.startEvent.center.pageX += t.deltaX * i, e.Gestures.detection.current.startEvent.center.pageY += t.deltaY * i, t = e.Gestures.detection.extendEventData(t);
            }(e.Gestures.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);var r = e.Gestures.detection.current.lastEvent.direction;t.drag_locked_to_axis && r !== t.direction && (e.Gestures.utils.isVertical(r) ? t.direction = t.deltaY < 0 ? e.Gestures.DIRECTION_UP : e.Gestures.DIRECTION_DOWN : t.direction = t.deltaX < 0 ? e.Gestures.DIRECTION_LEFT : e.Gestures.DIRECTION_RIGHT), this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), n.trigger(this.name + t.direction, t), (n.options.drag_block_vertical && e.Gestures.utils.isVertical(t.direction) || n.options.drag_block_horizontal && !e.Gestures.utils.isVertical(t.direction)) && t.preventDefault();break;case e.Gestures.EVENT_END:
            this.triggered && n.trigger(this.name + "end", t), this.triggered = !1;}
      } }, e.Gestures.gestures.Transform = { name: "transform", index: 45, defaults: { transform_min_scale: .01, transform_min_rotation: 1, transform_always_block: !1 }, triggered: !1, handler: function handler(t, n) {
        if (e.Gestures.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", t), void (this.triggered = !1);if (!(t.touches.length < 2)) switch (n.options.transform_always_block && t.preventDefault(), t.eventType) {case e.Gestures.EVENT_START:
            this.triggered = !1;break;case e.Gestures.EVENT_MOVE:
            var i = Math.abs(1 - t.scale),
                r = Math.abs(t.rotation);if (i < n.options.transform_min_scale && r < n.options.transform_min_rotation) return;e.Gestures.detection.current.name = this.name, this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), r > n.options.transform_min_rotation && n.trigger("rotate", t), i > n.options.transform_min_scale && (n.trigger("pinch", t), n.trigger("pinch" + (t.scale < 1 ? "in" : "out"), t));break;case e.Gestures.EVENT_END:
            this.triggered && n.trigger(this.name + "end", t), this.triggered = !1;}
      } }, e.Gestures.gestures.Touch = { name: "touch", index: -(1 / 0), defaults: { prevent_default: !1, prevent_mouseevents: !1 }, handler: function handler(t, n) {
        return n.options.prevent_mouseevents && t.pointerType == e.Gestures.POINTER_MOUSE ? void t.stopDetect() : (n.options.prevent_default && t.preventDefault(), void (t.eventType == e.Gestures.EVENT_START && n.trigger(this.name, t)));
      } }, e.Gestures.gestures.Release = { name: "release", index: 1 / 0, handler: function handler(t, n) {
        t.eventType == e.Gestures.EVENT_END && n.trigger(this.name, t);
      } };
  }(window.ionic), function (e, t, n) {
    function i(e) {
      e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
          n = t.exec(location.search);return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
    }function r() {
      setTimeout(function () {
        !f.isReady && f.isWebView();
      }, _);
    }function a() {
      f.isWebView() ? t.addEventListener("deviceready", o, !1) : o(), s && e.removeEventListener("load", a, !1);
    }function o() {
      f.isReady = !0, f.detect();for (var e = 0; e < v.length; e++) {
        v[e]();
      }v = [], n.trigger("platformready", { target: t }), h(function () {
        t.body.classList.add("platform-ready");
      });
    }var s,
        l = "ios",
        c = "android",
        d = "windowsphone",
        u = "edge",
        p = "crosswalk",
        h = n.requestAnimationFrame,
        f = n.Platform = { navigator: e.navigator, isReady: !1, isFullScreen: !1, platforms: null, grade: null, ua: navigator.userAgent, ready: function ready(e) {
        f.isReady ? e() : v.push(e);
      }, detect: function detect() {
        f._checkPlatforms(), h(function () {
          for (var e = 0; e < f.platforms.length; e++) {
            t.body.classList.add("platform-" + f.platforms[e]);
          }
        });
      }, setGrade: function setGrade(e) {
        var n = f.grade;f.grade = e, h(function () {
          n && t.body.classList.remove("grade-" + n), t.body.classList.add("grade-" + e);
        });
      }, device: function device() {
        return e.device || {};
      }, _checkPlatforms: function _checkPlatforms() {
        f.platforms = [];var t = "a";f.isWebView() ? (f.platforms.push("webview"), e.cordova || e.PhoneGap || e.phonegap ? f.platforms.push("cordova") : "object" == _typeof(e.forge) && f.platforms.push("trigger")) : f.platforms.push("browser"), f.isIPad() && f.platforms.push("ipad");var n = f.platform();if (n) {
          f.platforms.push(n);var i = f.version();if (i) {
            var r = i.toString();r.indexOf(".") > 0 ? r = r.replace(".", "_") : r += "_0", f.platforms.push(n + r.split("_")[0]), f.platforms.push(n + r), f.isAndroid() && 4.4 > i ? t = 4 > i ? "c" : "b" : f.isWindowsPhone() && (t = "b");
          }
        }f.setGrade(t);
      }, isWebView: function isWebView() {
        return !(!e.cordova && !e.PhoneGap && !e.phonegap && "object" !== e.forge);
      }, isIPad: function isIPad() {
        return (/iPad/i.test(f.navigator.platform) ? !0 : /iPad/i.test(f.ua)
        );
      }, isIOS: function isIOS() {
        return f.is(l);
      }, isAndroid: function isAndroid() {
        return f.is(c);
      }, isWindowsPhone: function isWindowsPhone() {
        return f.is(d);
      }, isEdge: function isEdge() {
        return f.is(u);
      }, isCrosswalk: function isCrosswalk() {
        return f.is(p);
      }, platform: function platform() {
        return null === m && f.setPlatform(f.device().platform), m;
      }, setPlatform: function setPlatform(e) {
        m = "undefined" != typeof e && null !== e && e.length ? e.toLowerCase() : i("ionicplatform") ? i("ionicplatform") : f.ua.indexOf("Edge") > -1 ? u : f.ua.indexOf("Windows Phone") > -1 ? d : f.ua.indexOf("Android") > 0 ? c : /iPhone|iPad|iPod/.test(f.ua) ? l : f.navigator.platform && navigator.platform.toLowerCase().split(" ")[0] || "";
      }, version: function version() {
        return null === g && f.setVersion(f.device().version), g;
      }, setVersion: function setVersion(e) {
        if ("undefined" != typeof e && null !== e && (e = e.split("."), e = parseFloat(e[0] + "." + (e.length > 1 ? e[1] : 0)), !isNaN(e))) return void (g = e);g = 0;var t = f.platform(),
            n = { android: /Android (\d+).(\d+)?/, ios: /OS (\d+)_(\d+)?/, windowsphone: /Windows Phone (\d+).(\d+)?/ };n[t] && (e = f.ua.match(n[t]), e && e.length > 2 && (g = parseFloat(e[1] + "." + e[2])));
      }, is: function is(e) {
        if (e = e.toLowerCase(), f.platforms) for (var t = 0; t < f.platforms.length; t++) {
          if (f.platforms[t] === e) return !0;
        }var n = f.platform();return n ? n === e.toLowerCase() : f.ua.toLowerCase().indexOf(e) >= 0;
      }, exitApp: function exitApp() {
        f.ready(function () {
          navigator.app && navigator.app.exitApp && navigator.app.exitApp();
        });
      }, showStatusBar: function showStatusBar(n) {
        f._showStatusBar = n, f.ready(function () {
          h(function () {
            f._showStatusBar ? (e.StatusBar && e.StatusBar.show(), t.body.classList.remove("status-bar-hide")) : (e.StatusBar && e.StatusBar.hide(), t.body.classList.add("status-bar-hide"));
          });
        });
      }, fullScreen: function fullScreen(e, i) {
        f.isFullScreen = e !== !1, n.DomUtil.ready(function () {
          h(function () {
            f.isFullScreen ? t.body.classList.add("fullscreen") : t.body.classList.remove("fullscreen");
          }), f.showStatusBar(i === !0);
        });
      } },
        m = null,
        g = null,
        v = [],
        _ = 2e3;r(), "complete" === t.readyState ? a() : (s = !0, e.addEventListener("load", a, !1));
  }(window, document, ionic), function (e, t) {
    "use strict";
    t.CSS = {}, t.CSS.TRANSITION = [], t.CSS.TRANSFORM = [], t.EVENTS = {}, function () {
      var n,
          i = ["webkitTransform", "transform", "-webkit-transform", "webkit-transform", "-moz-transform", "moz-transform", "MozTransform", "mozTransform", "msTransform"];for (n = 0; n < i.length; n++) {
        if (void 0 !== e.documentElement.style[i[n]]) {
          t.CSS.TRANSFORM = i[n];break;
        }
      }for (i = ["webkitTransition", "mozTransition", "msTransition", "transition"], n = 0; n < i.length; n++) {
        if (void 0 !== e.documentElement.style[i[n]]) {
          t.CSS.TRANSITION = i[n];break;
        }
      }t.CSS.TRANSITION = t.CSS.TRANSITION || "transition";var r = t.CSS.TRANSITION.indexOf("webkit") > -1;t.CSS.TRANSITION_DURATION = (r ? "-webkit-" : "") + "transition-duration", t.CSS.TRANSITIONEND = (r ? "webkitTransitionEnd " : "") + "transitionend";
    }(), function () {
      var e = "touchstart",
          n = "touchmove",
          i = "touchend",
          r = "touchcancel";
      window.navigator.pointerEnabled ? (e = "pointerdown", n = "pointermove", i = "pointerup", r = "pointercancel") : window.navigator.msPointerEnabled && (e = "MSPointerDown", n = "MSPointerMove", i = "MSPointerUp", r = "MSPointerCancel"), t.EVENTS.touchstart = e, t.EVENTS.touchmove = n, t.EVENTS.touchend = i, t.EVENTS.touchcancel = r;
    }(), "classList" in e.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", { get: function get() {
        function e(e) {
          return function () {
            var n,
                i = t.className.split(/\s+/);for (n = 0; n < arguments.length; n++) {
              e(i, i.indexOf(arguments[n]), arguments[n]);
            }t.className = i.join(" ");
          };
        }var t = this;return { add: e(function (e, t, n) {
            ~t || e.push(n);
          }), remove: e(function (e, t) {
            ~t && e.splice(t, 1);
          }), toggle: e(function (e, t, n) {
            ~t ? e.splice(t, 1) : e.push(n);
          }), contains: function contains(e) {
            return !!~t.className.split(/\s+/).indexOf(e);
          }, item: function item(e) {
            return t.className.split(/\s+/)[e] || null;
          } };
      } });
  }(document, ionic);var X,
      F,
      B,
      W,
      $,
      q,
      U,
      K,
      j = "touchmove",
      Z = 12,
      Q = 50,
      J = { click: i, mousedown: r, mouseup: a, mousemove: o, touchstart: s, touchend: l, touchcancel: d, touchmove: c, pointerdown: s, pointerup: l, pointercancel: d, pointermove: c, MSPointerDown: s, MSPointerUp: l, MSPointerCancel: d, MSPointerMove: c, focusin: m, focusout: g };ionic.tap = { register: function register(t) {
      return X = t, e("click", !0, !0), e("mouseup"), e("mousedown"), window.navigator.pointerEnabled ? (e("pointerdown"), e("pointerup"), e("pointercancel"), j = "pointermove") : window.navigator.msPointerEnabled ? (e("MSPointerDown"), e("MSPointerUp"), e("MSPointerCancel"), j = "MSPointerMove") : (e("touchstart"), e("touchend"), e("touchcancel")), e("focusin"), e("focusout"), function () {
        for (var t in J) {
          e(t, !1);
        }X = null, F = null, B = !1, $ = !1, q = null;
      };
    }, ignoreScrollStart: function ignoreScrollStart(e) {
      return e.defaultPrevented || /^(file|range)$/i.test(e.target.type) || "true" == (e.target.dataset ? e.target.dataset.preventScroll : e.target.getAttribute("data-prevent-scroll")) || !!/^(object|embed)$/i.test(e.target.tagName) || ionic.tap.isElementTapDisabled(e.target);
    }, isTextInput: function isTextInput(e) {
      return !!e && ("TEXTAREA" == e.tagName || "true" === e.contentEditable || "INPUT" == e.tagName && !/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(e.type));
    }, isDateInput: function isDateInput(e) {
      return !!e && "INPUT" == e.tagName && /^(date|time|datetime-local|month|week)$/i.test(e.type);
    }, isVideo: function isVideo(e) {
      return !!e && "VIDEO" == e.tagName;
    }, isKeyboardElement: function isKeyboardElement(e) {
      return !ionic.Platform.isIOS() || ionic.Platform.isIPad() ? ionic.tap.isTextInput(e) && !ionic.tap.isDateInput(e) : ionic.tap.isTextInput(e) || !!e && "SELECT" == e.tagName;
    }, isLabelWithTextInput: function isLabelWithTextInput(e) {
      var t = w(e, !1);return !!t && ionic.tap.isTextInput(T(t));
    }, containsOrIsTextInput: function containsOrIsTextInput(e) {
      return ionic.tap.isTextInput(e) || ionic.tap.isLabelWithTextInput(e);
    }, cloneFocusedInput: function cloneFocusedInput(e) {
      ionic.tap.hasCheckedClone || (ionic.tap.hasCheckedClone = !0, ionic.requestAnimationFrame(function () {
        var t = e.querySelector(":focus");if (ionic.tap.isTextInput(t) && !ionic.tap.isDateInput(t)) {
          var n = t.cloneNode(!0);n.value = t.value, n.classList.add("cloned-text-input"), n.readOnly = !0, t.isContentEditable && (n.contentEditable = t.contentEditable, n.innerHTML = t.innerHTML), t.parentElement.insertBefore(n, t), t.classList.add("previous-input-focus"), n.scrollTop = t.scrollTop;
        }
      }));
    }, hasCheckedClone: !1, removeClonedInputs: function removeClonedInputs(e) {
      ionic.tap.hasCheckedClone = !1, ionic.requestAnimationFrame(function () {
        var t,
            n = e.querySelectorAll(".cloned-text-input"),
            i = e.querySelectorAll(".previous-input-focus");for (t = 0; t < n.length; t++) {
          n[t].parentElement.removeChild(n[t]);
        }for (t = 0; t < i.length; t++) {
          i[t].classList.remove("previous-input-focus"), i[t].style.top = "", ionic.keyboard.isOpen && !ionic.keyboard.isClosing && i[t].focus();
        }
      });
    }, requiresNativeClick: function requiresNativeClick(e) {
      return ionic.Platform.isWindowsPhone() && ("A" == e.tagName || "BUTTON" == e.tagName || e.hasAttribute("ng-click") || "INPUT" == e.tagName && ("button" == e.type || "submit" == e.type)) ? !0 : !e || e.disabled || /^(file|range)$/i.test(e.type) || /^(object|video)$/i.test(e.tagName) || ionic.tap.isLabelContainingFileInput(e) ? !0 : ionic.tap.isElementTapDisabled(e);
    }, isLabelContainingFileInput: function isLabelContainingFileInput(e) {
      var t = w(e);if ("LABEL" !== t.tagName) return !1;var n = t.querySelector("input[type=file]");return n && n.disabled === !1 ? !0 : !1;
    }, isElementTapDisabled: function isElementTapDisabled(e) {
      if (e && 1 === e.nodeType) for (var t = e; t;) {
        if (t.getAttribute && "true" == t.getAttribute("data-tap-disabled")) return !0;t = t.parentElement;
      }return !1;
    }, setTolerance: function setTolerance(e, t) {
      Z = e, Q = t;
    }, cancelClick: function cancelClick() {
      $ = !0;
    }, pointerCoord: function pointerCoord(e) {
      var t = { x: 0, y: 0 };if (e) {
        var n = e.touches && e.touches.length ? e.touches : [e],
            i = e.changedTouches && e.changedTouches[0] || n[0];i && (t.x = i.clientX || i.pageX || 0, t.y = i.clientY || i.pageY || 0);
      }return t;
    } }, ionic.DomUtil.ready(function () {
    var e = "undefined" != typeof angular ? angular : null;(!e || e && !e.scenario) && ionic.tap.register(document);
  }), function (e, t) {
    "use strict";
    function n() {
      a = {}, t.requestAnimationFrame(r);
    }function i() {
      for (var e in a) {
        a[e] && (a[e].classList.add(l), o[e] = a[e]);
      }a = {};
    }function r() {
      if (t.transition && t.transition.isActive) return void setTimeout(r, 400);for (var e in o) {
        o[e] && (o[e].classList.remove(l), delete o[e]);
      }
    }var a = {},
        o = {},
        s = 0,
        l = "activated";t.activator = { start: function start(e) {
        var n = t.tap.pointerCoord(e).x;n > 0 && 30 > n || t.requestAnimationFrame(function () {
          if (!(t.scroll && t.scroll.isScrolling || t.tap.requiresNativeClick(e.target))) {
            for (var n, r = e.target, o = 0; 6 > o && r && 1 === r.nodeType; o++) {
              if (n && r.classList && r.classList.contains("item")) {
                n = r;break;
              }if ("A" == r.tagName || "BUTTON" == r.tagName || r.hasAttribute("ng-click")) {
                n = r;break;
              }if (r.classList && r.classList.contains("button")) {
                n = r;break;
              }if ("ION-CONTENT" == r.tagName || r.classList && r.classList.contains("pane") || "BODY" == r.tagName) break;r = r.parentElement;
            }n && (a[s] = n, t.requestAnimationFrame(i), s = s > 29 ? 0 : s + 1);
          }
        });
      }, end: function end() {
        setTimeout(n, 200);
      } };
  }(document, ionic), function (e) {
    var t = 0;e.Utils = { arrayMove: function arrayMove(e, t, n) {
        if (n >= e.length) for (var i = n - e.length; i-- + 1;) {
          e.push(void 0);
        }return e.splice(n, 0, e.splice(t, 1)[0]), e;
      }, proxy: function proxy(e, t) {
        var n = Array.prototype.slice.call(arguments, 2);return function () {
          return e.apply(t, n.concat(Array.prototype.slice.call(arguments)));
        };
      }, debounce: function debounce(e, t, n) {
        var i, r, a, o, s;return function () {
          a = this, r = arguments, o = new Date();var l = function l() {
            var c = new Date() - o;t > c ? i = setTimeout(l, t - c) : (i = null, n || (s = e.apply(a, r)));
          },
              c = n && !i;return i || (i = setTimeout(l, t)), c && (s = e.apply(a, r)), s;
        };
      }, throttle: function throttle(e, t, n) {
        var i,
            r,
            a,
            o = null,
            s = 0;n || (n = {});var l = function l() {
          s = n.leading === !1 ? 0 : Date.now(), o = null, a = e.apply(i, r);
        };return function () {
          var c = Date.now();s || n.leading !== !1 || (s = c);var d = t - (c - s);return i = this, r = arguments, 0 >= d ? (clearTimeout(o), o = null, s = c, a = e.apply(i, r)) : o || n.trailing === !1 || (o = setTimeout(l, d)), a;
        };
      }, inherit: function inherit(t, n) {
        var i,
            r = this;i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
          return r.apply(this, arguments);
        }, e.extend(i, r, n);var a = function a() {
          this.constructor = i;
        };return a.prototype = r.prototype, i.prototype = new a(), t && e.extend(i.prototype, t), i.__super__ = r.prototype, i;
      }, extend: function extend(e) {
        for (var t = Array.prototype.slice.call(arguments, 1), n = 0; n < t.length; n++) {
          var i = t[n];if (i) for (var r in i) {
            e[r] = i[r];
          }
        }return e;
      }, nextUid: function nextUid() {
        return "ion" + t++;
      }, disconnectScope: function disconnectScope(e) {
        if (e && e.$root !== e) {
          var t = e.$parent;e.$$disconnected = !0, e.$broadcast("$ionic.disconnectScope", e), t.$$childHead === e && (t.$$childHead = e.$$nextSibling), t.$$childTail === e && (t.$$childTail = e.$$prevSibling), e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling), e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling), e.$$nextSibling = e.$$prevSibling = null;
        }
      }, reconnectScope: function reconnectScope(e) {
        if (e && e.$root !== e && e.$$disconnected) {
          var t = e.$parent;e.$$disconnected = !1, e.$broadcast("$ionic.reconnectScope", e), e.$$prevSibling = t.$$childTail, t.$$childHead ? (t.$$childTail.$$nextSibling = e, t.$$childTail = e) : t.$$childHead = t.$$childTail = e;
        }
      }, isScopeDisconnected: function isScopeDisconnected(e) {
        for (var t = e; t;) {
          if (t.$$disconnected) return !0;t = t.$parent;
        }return !1;
      } }, e.inherit = e.Utils.inherit, e.extend = e.Utils.extend, e.throttle = e.Utils.throttle, e.proxy = e.Utils.proxy, e.debounce = e.Utils.debounce;
  }(window.ionic);var ee,
      te,
      ne,
      ie,
      re,
      ae = 0,
      oe = 0,
      se = 0,
      le = !1,
      ce = "keyboard-open",
      de = "scroll-content",
      ue = ionic.debounce(E, 200, !0),
      pe = ionic.debounce(y, 100, !0);ionic.keyboard = { isOpen: !1, isClosing: !1, isOpening: !1, height: 0, isLandscape: !1, isInitialized: !1, hide: function hide() {
      V() && cordova.plugins.Keyboard.close(), ee && ee.blur();
    }, show: function show() {
      V() && cordova.plugins.Keyboard.show();
    }, disable: function disable() {
      V() ? (window.removeEventListener("native.keyboardshow", pe), window.removeEventListener("native.keyboardhide", x)) : document.body.removeEventListener("focusout", x), document.body.removeEventListener("ionic.focusin", ue), document.body.removeEventListener("focusin", ue), window.removeEventListener("orientationchange", D), window.navigator.msPointerEnabled ? document.removeEventListener("MSPointerDown", S) : document.removeEventListener("touchstart", S), ionic.keyboard.isInitialized = !1;
    }, enable: function enable() {
      S();
    } }, ae = G(), ionic.Platform.ready(function () {
    A(), window.addEventListener("orientationchange", D), setTimeout(A, 999), window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", S, !1) : document.addEventListener("touchstart", S, !1);
  });var he,
      fe = {};ionic.viewport = { orientation: function orientation() {
      return window.innerWidth > window.innerHeight ? 90 : 0;
    } }, ionic.Platform.ready(function () {
    R(), window.addEventListener("orientationchange", function () {
      setTimeout(H, 1e3);
    }, !1);
  }), function (e) {
    "use strict";
    e.views.View = function () {
      this.initialize.apply(this, arguments);
    }, e.views.View.inherit = e.inherit, e.extend(e.views.View.prototype, { initialize: function initialize() {} });
  }(window.ionic);var me = { effect: {} };!function (e) {
    var t = Date.now || function () {
      return +new Date();
    },
        n = 60,
        i = 1e3,
        r = {},
        a = 1;me.effect.Animate = { requestAnimationFrame: function () {
        var t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame,
            n = !!t;if (t && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString()) && (n = !1), n) return function (e, n) {
          t(e, n);
        };var i = 60,
            r = {},
            a = 0,
            o = 1,
            s = null,
            l = +new Date();return function (e) {
          var t = o++;return r[t] = e, a++, null === s && (s = setInterval(function () {
            var e = +new Date(),
                t = r;r = {}, a = 0;for (var n in t) {
              t.hasOwnProperty(n) && (t[n](e), l = e);
            }e - l > 2500 && (clearInterval(s), s = null);
          }, 1e3 / i)), t;
        };
      }(), stop: function stop(e) {
        var t = null != r[e];return t && (r[e] = null), t;
      }, isRunning: function isRunning(e) {
        return null != r[e];
      }, start: function start(e, o, s, l, c, d) {
        var u = t(),
            p = u,
            h = 0,
            f = 0,
            m = a++;if (d || (d = document.body), m % 20 === 0) {
          var g = {};for (var v in r) {
            g[v] = !0;
          }r = g;
        }var _ = function _(a) {
          var g = a !== !0,
              v = t();if (!r[m] || o && !o(m)) return r[m] = null, void (s && s(n - f / ((v - u) / i), m, !1));if (g) for (var w = Math.round((v - p) / (i / n)) - 1, T = 0; T < Math.min(w, 4); T++) {
            _(!0), f++;
          }l && (h = (v - u) / l, h > 1 && (h = 1));var b = c ? c(h) : h;e(b, v, g) !== !1 && 1 !== h || !g ? g && (p = v, me.effect.Animate.requestAnimationFrame(_, d)) : (r[m] = null, s && s(n - f / ((v - u) / i), m, 1 === h || null == l));
        };return r[m] = !0, me.effect.Animate.requestAnimationFrame(_, d), m;
      } };
  }(window), function (e) {
    var t = function t() {},
        n = function n(e) {
      return Math.pow(e - 1, 3) + 1;
    },
        i = function i(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2);
    };e.views.Scroll = e.views.View.inherit({ initialize: function initialize(n) {
        var i = this;i.__container = n.el, i.__content = n.el.firstElementChild, setTimeout(function () {
          i.__container && i.__content && (i.__container.scrollTop = 0, i.__content.scrollTop = 0);
        }), i.options = { scrollingX: !1, scrollbarX: !0, scrollingY: !0, scrollbarY: !0, startX: 0, startY: 0, wheelDampen: 6, minScrollbarSizeX: 5, minScrollbarSizeY: 5, scrollbarsFade: !0, scrollbarFadeDelay: 300, scrollbarResizeFadeDelay: 1e3, animating: !0, animationDuration: 250, decelVelocityThreshold: 4, decelVelocityThresholdPaging: 4, bouncing: !0, locking: !0, paging: !1, snapping: !1, zooming: !1, minZoom: .5, maxZoom: 3, speedMultiplier: 1, deceleration: .97, preventDefault: !1, scrollingComplete: t, penetrationDeceleration: .03, penetrationAcceleration: .08, scrollEventInterval: 10, freeze: !1, getContentWidth: function getContentWidth() {
            return Math.max(i.__content.scrollWidth, i.__content.offsetWidth);
          }, getContentHeight: function getContentHeight() {
            return Math.max(i.__content.scrollHeight, i.__content.offsetHeight + 2 * i.__content.offsetTop);
          } };for (var r in n) {
          i.options[r] = n[r];
        }i.hintResize = e.debounce(function () {
          i.resize();
        }, 1e3, !0), i.onScroll = function () {
          e.scroll.isScrolling ? (clearTimeout(i.scrollTimer), i.scrollTimer = setTimeout(i.setScrollStop, 80)) : setTimeout(i.setScrollStart, 50);
        }, i.freeze = function (e) {
          return arguments.length && (i.options.freeze = e), i.options.freeze;
        }, i.freezeShut = i.freeze, i.setScrollStart = function () {
          e.scroll.isScrolling = Math.abs(e.scroll.lastTop - i.__scrollTop) > 1, clearTimeout(i.scrollTimer), i.scrollTimer = setTimeout(i.setScrollStop, 80);
        }, i.setScrollStop = function () {
          e.scroll.isScrolling = !1, e.scroll.lastTop = i.__scrollTop;
        }, i.triggerScrollEvent = e.throttle(function () {
          i.onScroll(), e.trigger("scroll", { scrollTop: i.__scrollTop, scrollLeft: i.__scrollLeft, target: i.__container });
        }, i.options.scrollEventInterval), i.triggerScrollEndEvent = function () {
          e.trigger("scrollend", { scrollTop: i.__scrollTop, scrollLeft: i.__scrollLeft, target: i.__container });
        }, i.__scrollLeft = i.options.startX, i.__scrollTop = i.options.startY, i.__callback = i.getRenderFn(), i.__initEventHandlers(), i.__createScrollbars();
      }, run: function run() {
        this.resize(), this.__fadeScrollbars("out", this.options.scrollbarResizeFadeDelay);
      }, __isSingleTouch: !1, __isTracking: !1, __didDecelerationComplete: !1, __isGesturing: !1, __isDragging: !1, __isDecelerating: !1, __isAnimating: !1, __clientLeft: 0, __clientTop: 0, __clientWidth: 0, __clientHeight: 0, __contentWidth: 0, __contentHeight: 0, __snapWidth: 100, __snapHeight: 100, __refreshHeight: null, __refreshActive: !1, __refreshActivate: null, __refreshDeactivate: null, __refreshStart: null, __zoomLevel: 1, __scrollLeft: 0, __scrollTop: 0, __maxScrollLeft: 0, __maxScrollTop: 0, __scheduledLeft: 0, __scheduledTop: 0, __scheduledZoom: 0, __lastTouchLeft: null, __lastTouchTop: null, __lastTouchMove: null, __positions: null, __minDecelerationScrollLeft: null, __minDecelerationScrollTop: null, __maxDecelerationScrollLeft: null, __maxDecelerationScrollTop: null, __decelerationVelocityX: null, __decelerationVelocityY: null, __transformProperty: null, __perspectiveProperty: null, __indicatorX: null, __indicatorY: null, __scrollbarFadeTimeout: null, __didWaitForSize: null, __sizerTimeout: null, __initEventHandlers: function __initEventHandlers() {
        function t(e) {
          return e.touches && e.touches.length ? e.touches : [{ pageX: e.pageX, pageY: e.pageY }];
        }var n,
            i = this,
            r = i.__container;if (i.scrollChildIntoView = function (t) {
          var a = r.getBoundingClientRect().bottom;n = r.offsetHeight;var o = i.isShrunkForKeyboard,
              s = r.parentNode.classList.contains("modal"),
              l = s && window.innerWidth >= 680;if (!o) {
            if (e.Platform.isIOS() || e.Platform.isFullScreen || l) {
              var c = t.detail.viewportHeight - a,
                  d = Math.max(0, t.detail.keyboardHeight - c);e.requestAnimationFrame(function () {
                n -= d, r.style.height = n + "px", r.style.overflow = "visible", i.resize();
              });
            }i.isShrunkForKeyboard = !0;
          }t.detail.isElementUnderKeyboard && e.requestAnimationFrame(function () {
            r.scrollTop = 0, i.isShrunkForKeyboard && !o && (a = r.getBoundingClientRect().bottom);var s = .5 * n,
                l = (t.detail.elementBottom + t.detail.elementTop) / 2,
                c = l - a,
                d = c + s;d > 0 && (e.Platform.isIOS() && e.tap.cloneFocusedInput(r, i), i.scrollBy(0, d, !0), i.onScroll());
          }), t.stopPropagation();
        }, i.resetScrollView = function () {
          i.isShrunkForKeyboard && (i.isShrunkForKeyboard = !1, r.style.height = "", r.style.overflow = ""), i.resize();
        }, r.addEventListener("scrollChildIntoView", i.scrollChildIntoView), document.addEventListener("resetScrollView", i.resetScrollView), i.touchStart = function (n) {
          if (i.startCoordinates = e.tap.pointerCoord(n), !e.tap.ignoreScrollStart(n)) {
            if (i.__isDown = !0, e.tap.containsOrIsTextInput(n.target) || "SELECT" === n.target.tagName) return void (i.__hasStarted = !1);i.__isSelectable = !0, i.__enableScrollY = !0, i.__hasStarted = !0, i.doTouchStart(t(n), n.timeStamp), n.preventDefault();
          }
        }, i.touchMove = function (n) {
          if (!(i.options.freeze || !i.__isDown || !i.__isDown && n.defaultPrevented || "TEXTAREA" === n.target.tagName && n.target.parentElement.querySelector(":focus"))) {
            if (!i.__hasStarted && (e.tap.containsOrIsTextInput(n.target) || "SELECT" === n.target.tagName)) return i.__hasStarted = !0, i.doTouchStart(t(n), n.timeStamp), void n.preventDefault();if (i.startCoordinates) {
              var a = e.tap.pointerCoord(n);i.__isSelectable && e.tap.isTextInput(n.target) && Math.abs(i.startCoordinates.x - a.x) > 20 && (i.__enableScrollY = !1, i.__isSelectable = !0), i.__enableScrollY && Math.abs(i.startCoordinates.y - a.y) > 10 && (i.__isSelectable = !1, e.tap.cloneFocusedInput(r, i));
            }i.doTouchMove(t(n), n.timeStamp, n.scale), i.__isDown = !0;
          }
        }, i.touchMoveBubble = function (e) {
          i.__isDown && i.options.preventDefault && e.preventDefault();
        }, i.touchEnd = function (t) {
          i.__isDown && (i.doTouchEnd(t, t.timeStamp), i.__isDown = !1, i.__hasStarted = !1, i.__isSelectable = !0, i.__enableScrollY = !0, i.__isDragging || i.__isDecelerating || i.__isAnimating || e.tap.removeClonedInputs(r, i));
        }, i.mouseWheel = e.animationFrameThrottle(function (t) {
          var n = e.DomUtil.getParentOrSelfWithClass(t.target, "ionic-scroll");i.options.freeze || n !== i.__container || (i.hintResize(), i.scrollBy((t.wheelDeltaX || t.deltaX || 0) / i.options.wheelDampen, (-t.wheelDeltaY || t.deltaY || 0) / i.options.wheelDampen), i.__fadeScrollbars("in"), clearTimeout(i.__wheelHideBarTimeout), i.__wheelHideBarTimeout = setTimeout(function () {
            i.__fadeScrollbars("out");
          }, 100));
        }), "ontouchstart" in window) r.addEventListener("touchstart", i.touchStart, !1), i.options.preventDefault && r.addEventListener("touchmove", i.touchMoveBubble, !1), document.addEventListener("touchmove", i.touchMove, !1), document.addEventListener("touchend", i.touchEnd, !1), document.addEventListener("touchcancel", i.touchEnd, !1), document.addEventListener("wheel", i.mouseWheel, !1);else if (window.navigator.pointerEnabled) r.addEventListener("pointerdown", i.touchStart, !1), i.options.preventDefault && r.addEventListener("pointermove", i.touchMoveBubble, !1), document.addEventListener("pointermove", i.touchMove, !1), document.addEventListener("pointerup", i.touchEnd, !1), document.addEventListener("pointercancel", i.touchEnd, !1), document.addEventListener("wheel", i.mouseWheel, !1);else if (window.navigator.msPointerEnabled) r.addEventListener("MSPointerDown", i.touchStart, !1), i.options.preventDefault && r.addEventListener("MSPointerMove", i.touchMoveBubble, !1), document.addEventListener("MSPointerMove", i.touchMove, !1), document.addEventListener("MSPointerUp", i.touchEnd, !1), document.addEventListener("MSPointerCancel", i.touchEnd, !1), document.addEventListener("wheel", i.mouseWheel, !1);else {
          var a = !1;i.mouseDown = function (n) {
            e.tap.ignoreScrollStart(n) || "SELECT" === n.target.tagName || (i.doTouchStart(t(n), n.timeStamp), e.tap.isTextInput(n.target) || n.preventDefault(), a = !0);
          }, i.mouseMove = function (e) {
            i.options.freeze || !a || !a && e.defaultPrevented || (i.doTouchMove(t(e), e.timeStamp), a = !0);
          }, i.mouseMoveBubble = function (e) {
            a && i.options.preventDefault && e.preventDefault();
          }, i.mouseUp = function (e) {
            a && (i.doTouchEnd(e, e.timeStamp), a = !1);
          }, r.addEventListener("mousedown", i.mouseDown, !1), i.options.preventDefault && r.addEventListener("mousemove", i.mouseMoveBubble, !1), document.addEventListener("mousemove", i.mouseMove, !1), document.addEventListener("mouseup", i.mouseUp, !1), document.addEventListener("mousewheel", i.mouseWheel, !1), document.addEventListener("wheel", i.mouseWheel, !1);
        }
      }, __cleanup: function __cleanup() {
        var n = this,
            i = n.__container;i.removeEventListener("touchstart", n.touchStart), i.removeEventListener("touchmove", n.touchMoveBubble), document.removeEventListener("touchmove", n.touchMove), document.removeEventListener("touchend", n.touchEnd), document.removeEventListener("touchcancel", n.touchEnd), i.removeEventListener("pointerdown", n.touchStart), i.removeEventListener("pointermove", n.touchMoveBubble), document.removeEventListener("pointermove", n.touchMove), document.removeEventListener("pointerup", n.touchEnd), document.removeEventListener("pointercancel", n.touchEnd), i.removeEventListener("MSPointerDown", n.touchStart), i.removeEventListener("MSPointerMove", n.touchMoveBubble), document.removeEventListener("MSPointerMove", n.touchMove), document.removeEventListener("MSPointerUp", n.touchEnd), document.removeEventListener("MSPointerCancel", n.touchEnd), i.removeEventListener("mousedown", n.mouseDown), i.removeEventListener("mousemove", n.mouseMoveBubble), document.removeEventListener("mousemove", n.mouseMove), document.removeEventListener("mouseup", n.mouseUp), document.removeEventListener("mousewheel", n.mouseWheel), document.removeEventListener("wheel", n.mouseWheel), i.removeEventListener("scrollChildIntoView", n.scrollChildIntoView), document.removeEventListener("resetScrollView", n.resetScrollView), e.tap.removeClonedInputs(i, n), delete n.__container, delete n.__content, delete n.__indicatorX, delete n.__indicatorY, delete n.options.el, n.__callback = n.scrollChildIntoView = n.resetScrollView = t, n.mouseMove = n.mouseDown = n.mouseUp = n.mouseWheel = n.touchStart = n.touchMove = n.touchEnd = n.touchCancel = t, n.resize = n.scrollTo = n.zoomTo = n.__scrollingComplete = t, i = null;
      }, __createScrollbar: function __createScrollbar(e) {
        var t = document.createElement("div"),
            n = document.createElement("div");return n.className = "scroll-bar-indicator scroll-bar-fade-out", "h" == e ? t.className = "scroll-bar scroll-bar-h" : t.className = "scroll-bar scroll-bar-v", t.appendChild(n), t;
      }, __createScrollbars: function __createScrollbars() {
        var e,
            t,
            n = this;n.options.scrollingX && (e = { el: n.__createScrollbar("h"), sizeRatio: 1 }, e.indicator = e.el.children[0], n.options.scrollbarX && n.__container.appendChild(e.el), n.__indicatorX = e), n.options.scrollingY && (t = { el: n.__createScrollbar("v"), sizeRatio: 1 }, t.indicator = t.el.children[0], n.options.scrollbarY && n.__container.appendChild(t.el), n.__indicatorY = t);
      }, __resizeScrollbars: function __resizeScrollbars() {
        var t = this;if (t.__indicatorX) {
          var n = Math.max(Math.round(t.__clientWidth * t.__clientWidth / t.__contentWidth), 20);n > t.__contentWidth && (n = 0), n !== t.__indicatorX.size && e.requestAnimationFrame(function () {
            t.__indicatorX.indicator.style.width = n + "px";
          }), t.__indicatorX.size = n, t.__indicatorX.minScale = t.options.minScrollbarSizeX / n, t.__indicatorX.maxPos = t.__clientWidth - n, t.__indicatorX.sizeRatio = t.__maxScrollLeft ? t.__indicatorX.maxPos / t.__maxScrollLeft : 1;
        }if (t.__indicatorY) {
          var i = Math.max(Math.round(t.__clientHeight * t.__clientHeight / t.__contentHeight), 20);i > t.__contentHeight && (i = 0), i !== t.__indicatorY.size && e.requestAnimationFrame(function () {
            t.__indicatorY && (t.__indicatorY.indicator.style.height = i + "px");
          }), t.__indicatorY.size = i, t.__indicatorY.minScale = t.options.minScrollbarSizeY / i, t.__indicatorY.maxPos = t.__clientHeight - i, t.__indicatorY.sizeRatio = t.__maxScrollTop ? t.__indicatorY.maxPos / t.__maxScrollTop : 1;
        }
      }, __repositionScrollbars: function __repositionScrollbars() {
        var e,
            t,
            n,
            i,
            r,
            a,
            o = this,
            s = 0,
            l = 0;if (o.__indicatorX) {
          o.__indicatorY && (s = 10), r = Math.round(o.__indicatorX.sizeRatio * o.__scrollLeft) || 0, n = o.__scrollLeft - (o.__maxScrollLeft - s), o.__scrollLeft < 0 ? (t = Math.max(o.__indicatorX.minScale, (o.__indicatorX.size - Math.abs(o.__scrollLeft)) / o.__indicatorX.size), r = 0, o.__indicatorX.indicator.style[o.__transformOriginProperty] = "left center") : n > 0 ? (t = Math.max(o.__indicatorX.minScale, (o.__indicatorX.size - n) / o.__indicatorX.size), r = o.__indicatorX.maxPos - s, o.__indicatorX.indicator.style[o.__transformOriginProperty] = "right center") : (r = Math.min(o.__maxScrollLeft, Math.max(0, r)), t = 1);var c = "translate3d(" + r + "px, 0, 0) scaleX(" + t + ")";o.__indicatorX.transformProp !== c && (o.__indicatorX.indicator.style[o.__transformProperty] = c, o.__indicatorX.transformProp = c);
        }if (o.__indicatorY) {
          a = Math.round(o.__indicatorY.sizeRatio * o.__scrollTop) || 0, o.__indicatorX && (l = 10), i = o.__scrollTop - (o.__maxScrollTop - l), o.__scrollTop < 0 ? (e = Math.max(o.__indicatorY.minScale, (o.__indicatorY.size - Math.abs(o.__scrollTop)) / o.__indicatorY.size), a = 0, "center top" !== o.__indicatorY.originProp && (o.__indicatorY.indicator.style[o.__transformOriginProperty] = "center top", o.__indicatorY.originProp = "center top")) : i > 0 ? (e = Math.max(o.__indicatorY.minScale, (o.__indicatorY.size - i) / o.__indicatorY.size), a = o.__indicatorY.maxPos - l, "center bottom" !== o.__indicatorY.originProp && (o.__indicatorY.indicator.style[o.__transformOriginProperty] = "center bottom", o.__indicatorY.originProp = "center bottom")) : (a = Math.min(o.__maxScrollTop, Math.max(0, a)), e = 1);var d = "translate3d(0," + a + "px, 0) scaleY(" + e + ")";o.__indicatorY.transformProp !== d && (o.__indicatorY.indicator.style[o.__transformProperty] = d, o.__indicatorY.transformProp = d);
        }
      }, __fadeScrollbars: function __fadeScrollbars(e, t) {
        var n = this;if (n.options.scrollbarsFade) {
          var i = "scroll-bar-fade-out";n.options.scrollbarsFade === !0 && (clearTimeout(n.__scrollbarFadeTimeout), "in" == e ? (n.__indicatorX && n.__indicatorX.indicator.classList.remove(i), n.__indicatorY && n.__indicatorY.indicator.classList.remove(i)) : n.__scrollbarFadeTimeout = setTimeout(function () {
            n.__indicatorX && n.__indicatorX.indicator.classList.add(i), n.__indicatorY && n.__indicatorY.indicator.classList.add(i);
          }, t || n.options.scrollbarFadeDelay));
        }
      }, __scrollingComplete: function __scrollingComplete() {
        this.options.scrollingComplete(), e.tap.removeClonedInputs(this.__container, this), this.__fadeScrollbars("out");
      }, resize: function resize(e) {
        var t = this;t.__container && t.options && t.setDimensions(t.__container.clientWidth, t.__container.clientHeight, t.options.getContentWidth(), t.options.getContentHeight(), e);
      }, getRenderFn: function getRenderFn() {
        var e,
            t = this,
            n = t.__content,
            i = document.documentElement.style;"MozAppearance" in i ? e = "gecko" : "WebkitAppearance" in i ? e = "webkit" : "string" == typeof navigator.cpuClass && (e = "trident");var r,
            a = { trident: "ms", gecko: "Moz", webkit: "Webkit", presto: "O" }[e],
            o = document.createElement("div"),
            s = a + "Perspective",
            l = a + "Transform",
            c = a + "TransformOrigin";return t.__perspectiveProperty = l, t.__transformProperty = l, t.__transformOriginProperty = c, o.style[s] !== r ? function (e, i, r, a) {
          var o = "translate3d(" + -e + "px," + -i + "px,0) scale(" + r + ")";o !== t.contentTransform && (n.style[l] = o, t.contentTransform = o), t.__repositionScrollbars(), a || t.triggerScrollEvent();
        } : o.style[l] !== r ? function (e, i, r, a) {
          n.style[l] = "translate(" + -e + "px," + -i + "px) scale(" + r + ")", t.__repositionScrollbars(), a || t.triggerScrollEvent();
        } : function (e, i, r, a) {
          n.style.marginLeft = e ? -e / r + "px" : "", n.style.marginTop = i ? -i / r + "px" : "", n.style.zoom = r || "", t.__repositionScrollbars(), a || t.triggerScrollEvent();
        };
      }, setDimensions: function setDimensions(e, t, n, i, r) {
        var a = this;(e || t || n || i) && (e === +e && (a.__clientWidth = e), t === +t && (a.__clientHeight = t), n === +n && (a.__contentWidth = n), i === +i && (a.__contentHeight = i), a.__computeScrollMax(), a.__resizeScrollbars(), r || a.scrollTo(a.__scrollLeft, a.__scrollTop, !0, null, !0));
      }, setPosition: function setPosition(e, t) {
        this.__clientLeft = e || 0, this.__clientTop = t || 0;
      }, setSnapSize: function setSnapSize(e, t) {
        this.__snapWidth = e, this.__snapHeight = t;
      }, activatePullToRefresh: function activatePullToRefresh(t, n) {
        var i = this;i.__refreshHeight = t, i.__refreshActivate = function () {
          e.requestAnimationFrame(n.activate);
        }, i.__refreshDeactivate = function () {
          e.requestAnimationFrame(n.deactivate);
        }, i.__refreshStart = function () {
          e.requestAnimationFrame(n.start);
        }, i.__refreshShow = function () {
          e.requestAnimationFrame(n.show);
        }, i.__refreshHide = function () {
          e.requestAnimationFrame(n.hide);
        }, i.__refreshTail = function () {
          e.requestAnimationFrame(n.tail);
        }, i.__refreshTailTime = 100, i.__minSpinTime = 600;
      }, triggerPullToRefresh: function triggerPullToRefresh() {
        this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, !0);var e = new Date();this.refreshStartTime = e.getTime(), this.__refreshStart && this.__refreshStart();
      }, finishPullToRefresh: function finishPullToRefresh() {
        var e = this,
            t = new Date(),
            n = 0;e.refreshStartTime + e.__minSpinTime > t.getTime() && (n = e.refreshStartTime + e.__minSpinTime - t.getTime()), setTimeout(function () {
          e.__refreshTail && e.__refreshTail(), setTimeout(function () {
            e.__refreshActive = !1, e.__refreshDeactivate && e.__refreshDeactivate(), e.__refreshHide && e.__refreshHide(), e.scrollTo(e.__scrollLeft, e.__scrollTop, !0);
          }, e.__refreshTailTime);
        }, n);
      }, getValues: function getValues() {
        return { left: this.__scrollLeft, top: this.__scrollTop, zoom: this.__zoomLevel };
      }, getScrollMax: function getScrollMax() {
        return { left: this.__maxScrollLeft, top: this.__maxScrollTop };
      }, zoomTo: function zoomTo(e, t, n, i) {
        var r = this;if (!r.options.zooming) throw new Error("Zooming is not enabled!");r.__isDecelerating && (me.effect.Animate.stop(r.__isDecelerating), r.__isDecelerating = !1);var a = r.__zoomLevel;null == n && (n = r.__clientWidth / 2), null == i && (i = r.__clientHeight / 2), e = Math.max(Math.min(e, r.options.maxZoom), r.options.minZoom), r.__computeScrollMax(e);var o = (n + r.__scrollLeft) * e / a - n,
            s = (i + r.__scrollTop) * e / a - i;o > r.__maxScrollLeft ? o = r.__maxScrollLeft : 0 > o && (o = 0), s > r.__maxScrollTop ? s = r.__maxScrollTop : 0 > s && (s = 0), r.__publish(o, s, e, t);
      }, zoomBy: function zoomBy(e, t, n, i) {
        this.zoomTo(this.__zoomLevel * e, t, n, i);
      }, scrollTo: function scrollTo(e, t, n, i, r) {
        var a = this;if (a.__isDecelerating && (me.effect.Animate.stop(a.__isDecelerating), a.__isDecelerating = !1), null != i && i !== a.__zoomLevel) {
          if (!a.options.zooming) throw new Error("Zooming is not enabled!");e *= i, t *= i, a.__computeScrollMax(i);
        } else i = a.__zoomLevel;a.options.scrollingX ? a.options.paging ? e = Math.round(e / a.__clientWidth) * a.__clientWidth : a.options.snapping && (e = Math.round(e / a.__snapWidth) * a.__snapWidth) : e = a.__scrollLeft, a.options.scrollingY ? a.options.paging ? t = Math.round(t / a.__clientHeight) * a.__clientHeight : a.options.snapping && (t = Math.round(t / a.__snapHeight) * a.__snapHeight) : t = a.__scrollTop, e = Math.max(Math.min(a.__maxScrollLeft, e), 0), t = Math.max(Math.min(a.__maxScrollTop, t), 0), e === a.__scrollLeft && t === a.__scrollTop && (n = !1), a.__publish(e, t, i, n, r);
      }, scrollBy: function scrollBy(e, t, n) {
        var i = this,
            r = i.__isAnimating ? i.__scheduledLeft : i.__scrollLeft,
            a = i.__isAnimating ? i.__scheduledTop : i.__scrollTop;i.scrollTo(r + (e || 0), a + (t || 0), n);
      }, doMouseZoom: function doMouseZoom(e, t, n, i) {
        var r = e > 0 ? .97 : 1.03;return this.zoomTo(this.__zoomLevel * r, !1, n - this.__clientLeft, i - this.__clientTop);
      }, doTouchStart: function doTouchStart(e, t) {
        var n = this;n.__decStopped = !(!n.__isDecelerating && !n.__isAnimating), n.hintResize(), t instanceof Date && (t = t.valueOf()), "number" != typeof t && (t = Date.now()), n.__interruptedAnimation = !0, n.__isDecelerating && (me.effect.Animate.stop(n.__isDecelerating), n.__isDecelerating = !1, n.__interruptedAnimation = !0), n.__isAnimating && (me.effect.Animate.stop(n.__isAnimating), n.__isAnimating = !1, n.__interruptedAnimation = !0);var i,
            r,
            a = 1 === e.length;a ? (i = e[0].pageX, r = e[0].pageY) : (i = Math.abs(e[0].pageX + e[1].pageX) / 2, r = Math.abs(e[0].pageY + e[1].pageY) / 2), n.__initialTouchLeft = i, n.__initialTouchTop = r, n.__initialTouches = e, n.__zoomLevelStart = n.__zoomLevel, n.__lastTouchLeft = i, n.__lastTouchTop = r, n.__lastTouchMove = t, n.__lastScale = 1, n.__enableScrollX = !a && n.options.scrollingX, n.__enableScrollY = !a && n.options.scrollingY, n.__isTracking = !0, n.__didDecelerationComplete = !1, n.__isDragging = !a, n.__isSingleTouch = a, n.__positions = [];
      }, doTouchMove: function doTouchMove(e, t, n) {
        t instanceof Date && (t = t.valueOf()), "number" != typeof t && (t = Date.now());var i = this;if (i.__isTracking) {
          var r, a;2 === e.length ? (r = Math.abs(e[0].pageX + e[1].pageX) / 2, a = Math.abs(e[0].pageY + e[1].pageY) / 2, !n && i.options.zooming && (n = i.__getScale(i.__initialTouches, e))) : (r = e[0].pageX, a = e[0].pageY);var o = i.__positions;if (i.__isDragging) {
            i.__decStopped = !1;var s = r - i.__lastTouchLeft,
                l = a - i.__lastTouchTop,
                c = i.__scrollLeft,
                d = i.__scrollTop,
                u = i.__zoomLevel;if (null != n && i.options.zooming) {
              var p = u;if (u = u / i.__lastScale * n, u = Math.max(Math.min(u, i.options.maxZoom), i.options.minZoom), p !== u) {
                var h = r - i.__clientLeft,
                    f = a - i.__clientTop;c = (h + c) * u / p - h, d = (f + d) * u / p - f, i.__computeScrollMax(u);
              }
            }if (i.__enableScrollX) {
              c -= s * i.options.speedMultiplier;var m = i.__maxScrollLeft;(c > m || 0 > c) && (i.options.bouncing ? c += s / 2 * i.options.speedMultiplier : c = c > m ? m : 0);
            }if (i.__enableScrollY) {
              d -= l * i.options.speedMultiplier;var g = i.__maxScrollTop;d > g || 0 > d ? i.options.bouncing || i.__refreshHeight && 0 > d ? (d += l / 2 * i.options.speedMultiplier, i.__enableScrollX || null == i.__refreshHeight || (0 > d ? (i.__refreshHidden = !1, i.__refreshShow()) : (i.__refreshHide(), i.__refreshHidden = !0), !i.__refreshActive && d <= -i.__refreshHeight ? (i.__refreshActive = !0, i.__refreshActivate && i.__refreshActivate()) : i.__refreshActive && d > -i.__refreshHeight && (i.__refreshActive = !1, i.__refreshDeactivate && i.__refreshDeactivate()))) : d = d > g ? g : 0 : i.__refreshHeight && !i.__refreshHidden && (i.__refreshHide(), i.__refreshHidden = !0);
            }o.length > 60 && o.splice(0, 30), o.push(c, d, t), i.__publish(c, d, u);
          } else {
            var v = i.options.locking ? 3 : 0,
                _ = 5,
                w = Math.abs(r - i.__initialTouchLeft),
                T = Math.abs(a - i.__initialTouchTop);i.__enableScrollX = i.options.scrollingX && w >= v, i.__enableScrollY = i.options.scrollingY && T >= v, o.push(i.__scrollLeft, i.__scrollTop, t), i.__isDragging = (i.__enableScrollX || i.__enableScrollY) && (w >= _ || T >= _), i.__isDragging && (i.__interruptedAnimation = !1, i.__fadeScrollbars("in"));
          }i.__lastTouchLeft = r, i.__lastTouchTop = a, i.__lastTouchMove = t, i.__lastScale = n;
        }
      }, doTouchEnd: function doTouchEnd(t, n) {
        n instanceof Date && (n = n.valueOf()), "number" != typeof n && (n = Date.now());var i = this;if (i.__isTracking) {
          if (i.__isTracking = !1, i.__isDragging) {
            if (i.__isDragging = !1, i.__isSingleTouch && i.options.animating && n - i.__lastTouchMove <= 100) {
              for (var r = i.__positions, a = r.length - 1, o = a, s = a; s > 0 && r[s] > i.__lastTouchMove - 100; s -= 3) {
                o = s;
              }if (o !== a) {
                var l = r[a] - r[o],
                    c = i.__scrollLeft - r[o - 2],
                    d = i.__scrollTop - r[o - 1];i.__decelerationVelocityX = c / l * (1e3 / 60), i.__decelerationVelocityY = d / l * (1e3 / 60);var u = i.options.paging || i.options.snapping ? i.options.decelVelocityThresholdPaging : i.options.decelVelocityThreshold;(Math.abs(i.__decelerationVelocityX) > u || Math.abs(i.__decelerationVelocityY) > u) && (i.__refreshActive || i.__startDeceleration(n));
              } else i.__scrollingComplete();
            } else n - i.__lastTouchMove > 100 && i.__scrollingComplete();
          } else i.__decStopped && (t.isTapHandled = !0, i.__decStopped = !1);if (!i.__isDecelerating) if (i.__refreshActive && i.__refreshStart) {
            i.__publish(i.__scrollLeft, -i.__refreshHeight, i.__zoomLevel, !0);var p = new Date();i.refreshStartTime = p.getTime(), i.__refreshStart && i.__refreshStart(), e.Platform.isAndroid() || i.__startDeceleration();
          } else (i.__interruptedAnimation || i.__isDragging) && i.__scrollingComplete(), i.scrollTo(i.__scrollLeft, i.__scrollTop, !0, i.__zoomLevel), i.__refreshActive && (i.__refreshActive = !1, i.__refreshDeactivate && i.__refreshDeactivate());i.__positions.length = 0;
        }
      }, __publish: function __publish(e, t, r, a, o) {
        var s = this,
            l = s.__isAnimating;if (l && (me.effect.Animate.stop(l), s.__isAnimating = !1), a && s.options.animating) {
          s.__scheduledLeft = e, s.__scheduledTop = t, s.__scheduledZoom = r;var c = s.__scrollLeft,
              d = s.__scrollTop,
              u = s.__zoomLevel,
              p = e - c,
              h = t - d,
              f = r - u,
              m = function m(e, t, n) {
            n && (s.__scrollLeft = c + p * e, s.__scrollTop = d + h * e, s.__zoomLevel = u + f * e, s.__callback && s.__callback(s.__scrollLeft, s.__scrollTop, s.__zoomLevel, o));
          },
              g = function g(e) {
            return s.__isAnimating === e;
          },
              v = function v(e, t, n) {
            t === s.__isAnimating && (s.__isAnimating = !1), (s.__didDecelerationComplete || n) && s.__scrollingComplete(), s.options.zooming && s.__computeScrollMax();
          };s.__isAnimating = me.effect.Animate.start(m, g, v, s.options.animationDuration, l ? n : i);
        } else s.__scheduledLeft = s.__scrollLeft = e, s.__scheduledTop = s.__scrollTop = t, s.__scheduledZoom = s.__zoomLevel = r, s.__callback && s.__callback(e, t, r, o), s.options.zooming && s.__computeScrollMax();
      }, __computeScrollMax: function __computeScrollMax(e) {
        var t = this;null == e && (e = t.__zoomLevel), t.__maxScrollLeft = Math.max(t.__contentWidth * e - t.__clientWidth, 0), t.__maxScrollTop = Math.max(t.__contentHeight * e - t.__clientHeight, 0), t.__didWaitForSize || t.__maxScrollLeft || t.__maxScrollTop || (t.__didWaitForSize = !0, t.__waitForSize());
      }, __waitForSize: function __waitForSize() {
        var e = this;clearTimeout(e.__sizerTimeout);var t = function t() {
          e.resize(!0);
        };t(), e.__sizerTimeout = setTimeout(t, 500);
      }, __startDeceleration: function __startDeceleration() {
        var e = this;if (e.options.paging) {
          var t = Math.max(Math.min(e.__scrollLeft, e.__maxScrollLeft), 0),
              n = Math.max(Math.min(e.__scrollTop, e.__maxScrollTop), 0),
              i = e.__clientWidth,
              r = e.__clientHeight;e.__minDecelerationScrollLeft = Math.floor(t / i) * i, e.__minDecelerationScrollTop = Math.floor(n / r) * r, e.__maxDecelerationScrollLeft = Math.ceil(t / i) * i, e.__maxDecelerationScrollTop = Math.ceil(n / r) * r;
        } else e.__minDecelerationScrollLeft = 0, e.__minDecelerationScrollTop = 0, e.__maxDecelerationScrollLeft = e.__maxScrollLeft, e.__maxDecelerationScrollTop = e.__maxScrollTop, e.__refreshActive && (e.__minDecelerationScrollTop = -1 * e.__refreshHeight);var a = function a(t, n, i) {
          e.__stepThroughDeceleration(i);
        };e.__minVelocityToKeepDecelerating = e.options.snapping ? 4 : .1;var o = function o() {
          var t = Math.abs(e.__decelerationVelocityX) >= e.__minVelocityToKeepDecelerating || Math.abs(e.__decelerationVelocityY) >= e.__minVelocityToKeepDecelerating;return t || (e.__didDecelerationComplete = !0, e.options.bouncing && !e.__refreshActive && e.scrollTo(Math.min(Math.max(e.__scrollLeft, 0), e.__maxScrollLeft), Math.min(Math.max(e.__scrollTop, 0), e.__maxScrollTop), e.__refreshActive)), t;
        },
            s = function s() {
          e.__isDecelerating = !1, e.__didDecelerationComplete && e.__scrollingComplete(), e.options.paging && e.scrollTo(e.__scrollLeft, e.__scrollTop, e.options.snapping);
        };e.__isDecelerating = me.effect.Animate.start(a, o, s);
      }, __stepThroughDeceleration: function __stepThroughDeceleration(e) {
        var t = this,
            n = t.__scrollLeft + t.__decelerationVelocityX,
            i = t.__scrollTop + t.__decelerationVelocityY;if (!t.options.bouncing) {
          var r = Math.max(Math.min(t.__maxDecelerationScrollLeft, n), t.__minDecelerationScrollLeft);r !== n && (n = r, t.__decelerationVelocityX = 0);var a = Math.max(Math.min(t.__maxDecelerationScrollTop, i), t.__minDecelerationScrollTop);a !== i && (i = a, t.__decelerationVelocityY = 0);
        }if (e ? t.__publish(n, i, t.__zoomLevel) : (t.__scrollLeft = n, t.__scrollTop = i), !t.options.paging) {
          var o = t.options.deceleration;t.__decelerationVelocityX *= o, t.__decelerationVelocityY *= o;
        }if (t.options.bouncing) {
          var s = 0,
              l = 0,
              c = t.options.penetrationDeceleration,
              d = t.options.penetrationAcceleration;if (n < t.__minDecelerationScrollLeft ? s = t.__minDecelerationScrollLeft - n : n > t.__maxDecelerationScrollLeft && (s = t.__maxDecelerationScrollLeft - n), i < t.__minDecelerationScrollTop ? l = t.__minDecelerationScrollTop - i : i > t.__maxDecelerationScrollTop && (l = t.__maxDecelerationScrollTop - i), 0 !== s) {
            var u = s * t.__decelerationVelocityX <= t.__minDecelerationScrollLeft;u && (t.__decelerationVelocityX += s * c);var p = Math.abs(t.__decelerationVelocityX) <= t.__minVelocityToKeepDecelerating;(!u || p) && (t.__decelerationVelocityX = s * d);
          }if (0 !== l) {
            var h = l * t.__decelerationVelocityY <= t.__minDecelerationScrollTop;h && (t.__decelerationVelocityY += l * c);var f = Math.abs(t.__decelerationVelocityY) <= t.__minVelocityToKeepDecelerating;(!h || f) && (t.__decelerationVelocityY = l * d);
          }
        }
      }, __getDistance: function __getDistance(e, t) {
        var n = t.pageX - e.pageX,
            i = t.pageY - e.pageY;return Math.sqrt(n * n + i * i);
      }, __getScale: function __getScale(e, t) {
        return e.length >= 2 && t.length >= 2 ? this.__getDistance(t[0], t[1]) / this.__getDistance(e[0], e[1]) : 1;
      } }), e.scroll = { isScrolling: !1, lastTop: 0 };
  }(ionic), function (e) {
    var t = function t() {},
        n = function n(e) {};e.views.ScrollNative = e.views.View.inherit({ initialize: function initialize(t) {
        var n = this;n.__container = n.el = t.el, n.__content = t.el.firstElementChild, n.__frozen = !1, n.isNative = !0, n.__scrollTop = n.el.scrollTop, n.__scrollLeft = n.el.scrollLeft, n.__clientHeight = n.__content.clientHeight, n.__clientWidth = n.__content.clientWidth, n.__maxScrollTop = Math.max(n.__contentHeight - n.__clientHeight, 0), n.__maxScrollLeft = Math.max(n.__contentWidth - n.__clientWidth, 0), (t.startY >= 0 || t.startX >= 0) && e.requestAnimationFrame(function () {
          n.__originalContainerHeight = n.el.getBoundingClientRect().height, n.el.scrollTop = t.startY || 0, n.el.scrollLeft = t.startX || 0, n.__scrollTop = n.el.scrollTop, n.__scrollLeft = n.el.scrollLeft;
        }), n.options = { freeze: !1, getContentWidth: function getContentWidth() {
            return Math.max(n.__content.scrollWidth, n.__content.offsetWidth);
          }, getContentHeight: function getContentHeight() {
            return Math.max(n.__content.scrollHeight, n.__content.offsetHeight + 2 * n.__content.offsetTop);
          } };for (var i in t) {
          n.options[i] = t[i];
        }n.onScroll = function () {
          e.scroll.isScrolling || (e.scroll.isScrolling = !0), clearTimeout(n.scrollTimer), n.scrollTimer = setTimeout(function () {
            e.scroll.isScrolling = !1;
          }, 80);
        }, n.freeze = function (e) {
          n.__frozen = e;
        }, n.freezeShut = function (e) {
          n.__frozenShut = e;
        }, n.__initEventHandlers();
      }, __callback: function __callback() {
        n("__callback");
      }, zoomTo: function zoomTo() {
        n("zoomTo");
      }, zoomBy: function zoomBy() {
        n("zoomBy");
      }, activatePullToRefresh: function activatePullToRefresh() {
        n("activatePullToRefresh");
      }, resize: function resize(e) {
        var t = this;t.__container && t.options && t.setDimensions(t.__container.clientWidth, t.__container.clientHeight, t.options.getContentWidth(), t.options.getContentHeight(), e);
      }, run: function run() {
        this.resize();
      }, getValues: function getValues() {
        var e = this;return e.update(), { left: e.__scrollLeft, top: e.__scrollTop, zoom: 1 };
      }, update: function update() {
        var e = this;e.__scrollLeft = e.el.scrollLeft, e.__scrollTop = e.el.scrollTop;
      }, setDimensions: function setDimensions(e, t, n, i) {
        var r = this;(e || t || n || i) && (e === +e && (r.__clientWidth = e), t === +t && (r.__clientHeight = t), n === +n && (r.__contentWidth = n), i === +i && (r.__contentHeight = i), r.__computeScrollMax());
      }, getScrollMax: function getScrollMax() {
        return { left: this.__maxScrollLeft, top: this.__maxScrollTop };
      }, scrollBy: function scrollBy(e, t, n) {
        var i = this;i.update();var r = i.__isAnimating ? i.__scheduledLeft : i.__scrollLeft,
            a = i.__isAnimating ? i.__scheduledTop : i.__scrollTop;i.scrollTo(r + (e || 0), a + (t || 0), n);
      }, scrollTo: function scrollTo(t, n, i) {
        function r(t, n) {
          function i(e) {
            return --e * e * e + 1;
          }function r() {
            var p = Date.now(),
                h = Math.min(1, (p - l) / c),
                f = i(h);d != t && (a.el.scrollTop = parseInt(f * (t - d) + d, 10)), u != n && (a.el.scrollLeft = parseInt(f * (n - u) + u, 10)), 1 > h ? e.requestAnimationFrame(r) : (e.tap.removeClonedInputs(a.__container, a), a.el.style.overflowX = o, a.el.style.overflowY = s, a.resize());
          }var l = Date.now(),
              c = 250,
              d = a.el.scrollTop,
              u = a.el.scrollLeft;return d === t && u === n ? (a.el.style.overflowX = o, a.el.style.overflowY = s, void a.resize()) : void e.requestAnimationFrame(r);
        }var a = this;if (!i) return a.el.scrollTop = n, a.el.scrollLeft = t, void a.resize();var o = a.el.style.overflowX,
            s = a.el.style.overflowY;clearTimeout(a.__scrollToCleanupTimeout), a.__scrollToCleanupTimeout = setTimeout(function () {
          a.el.style.overflowX = o, a.el.style.overflowY = s;
        }, 500), a.el.style.overflowY = "hidden", a.el.style.overflowX = "hidden", r(n, t);
      }, __waitForSize: function __waitForSize() {
        var e = this;clearTimeout(e.__sizerTimeout);var t = function t() {
          e.resize(!0);
        };t(), e.__sizerTimeout = setTimeout(t, 500);
      }, __computeScrollMax: function __computeScrollMax() {
        var e = this;e.__maxScrollLeft = Math.max(e.__contentWidth - e.__clientWidth, 0), e.__maxScrollTop = Math.max(e.__contentHeight - e.__clientHeight, 0), e.__didWaitForSize || e.__maxScrollLeft || e.__maxScrollTop || (e.__didWaitForSize = !0, e.__waitForSize());
      }, __initEventHandlers: function __initEventHandlers() {
        var t,
            n,
            i = this,
            r = i.__container;i.scrollChildIntoView = function (a) {
          var o = r.getBoundingClientRect();i.__originalContainerHeight || (i.__originalContainerHeight = o.height), t = i.__originalContainerHeight;var s = i.isShrunkForKeyboard,
              l = r.parentNode.classList.contains("modal"),
              c = r.parentNode.classList.contains("popover"),
              d = l && window.innerWidth >= 680,
              u = n && n !== a.detail.keyboardHeight;(!s || u) && (!c && (e.Platform.isIOS() || e.Platform.isFullScreen || d) && e.requestAnimationFrame(function () {
            t = Math.max(0, Math.min(i.__originalContainerHeight, i.__originalContainerHeight - (a.detail.keyboardHeight - 43))), r.style.height = t + "px", r.classList.add("keyboard-up"), i.resize();
          }), i.isShrunkForKeyboard = !0), n = a.detail.keyboardHeight, a.detail.isElementUnderKeyboard && e.requestAnimationFrame(function () {
            var t = e.DomUtil.getOffsetTop(a.detail.target);setTimeout(function () {
              e.Platform.isIOS() && e.tap.cloneFocusedInput(r, i), i.scrollTo(0, t - (o.top + 100), !0), i.onScroll();
            }, 32);
          }), a.stopPropagation();
        }, i.resetScrollView = function () {
          i.isShrunkForKeyboard && (i.isShrunkForKeyboard = !1, r.style.height = "", i.__originalContainerHeight = r.getBoundingClientRect().height, e.Platform.isIOS() && e.requestAnimationFrame(function () {
            r.classList.remove("keyboard-up");
          })), i.resize();
        }, i.handleTouchMove = function (e) {
          return i.__frozenShut ? (e.preventDefault(), e.stopPropagation(), !1) : i.__frozen ? (e.preventDefault(), !1) : !0;
        }, r.addEventListener("scroll", i.onScroll), r.addEventListener("scrollChildIntoView", i.scrollChildIntoView), r.addEventListener(e.EVENTS.touchstart, i.handleTouchMove), r.addEventListener(e.EVENTS.touchmove, i.handleTouchMove), document.addEventListener("resetScrollView", i.resetScrollView);
      }, __cleanup: function __cleanup() {
        var n = this,
            i = n.__container;i.removeEventListener("scroll", n.onScroll), i.removeEventListener("scrollChildIntoView", n.scrollChildIntoView), i.removeEventListener(e.EVENTS.touchstart, n.handleTouchMove), i.removeEventListener(e.EVENTS.touchmove, n.handleTouchMove), document.removeEventListener("resetScrollView", n.resetScrollView), e.tap.removeClonedInputs(i, n), delete n.__container, delete n.__content, delete n.__indicatorX, delete n.__indicatorY, delete n.options.el, n.resize = n.scrollTo = n.onScroll = n.resetScrollView = t, n.scrollChildIntoView = t, i = null;
      } });
  }(ionic), function (e) {
    "use strict";
    var t = "item",
        n = "item-content",
        i = "item-sliding",
        r = "item-options",
        a = "item-placeholder",
        o = "item-reordering",
        s = "item-reorder",
        l = function l() {};l.prototype = { start: function start() {}, drag: function drag() {}, end: function end() {}, isSameItem: function isSameItem() {
        return !1;
      } };var c = function c(e) {
      this.dragThresholdX = e.dragThresholdX || 10, this.el = e.el, this.item = e.item, this.canSwipe = e.canSwipe;
    };c.prototype = new l(), c.prototype.start = function (a) {
      var o, s, l, c;this.canSwipe() && (o = a.target.classList.contains(n) ? a.target : a.target.classList.contains(t) ? a.target.querySelector("." + n) : e.DomUtil.getParentWithClass(a.target, n), o && (o.classList.remove(i), l = parseFloat(o.style[e.CSS.TRANSFORM].replace("translate3d(", "").split(",")[0]) || 0, s = o.parentNode.querySelector("." + r), s && (s.classList.remove("invisible"), c = s.offsetWidth, this._currentDrag = { buttons: s, buttonsWidth: c, content: o, startOffsetX: l })));
    }, c.prototype.isSameItem = function (e) {
      return e._lastDrag && this._currentDrag ? this._currentDrag.content == e._lastDrag.content : !1;
    }, c.prototype.clean = function (t) {
      function n() {
        i.buttons && i.buttons.classList.add("invisible");
      }var i = this._lastDrag;i && i.content && (i.content.style[e.CSS.TRANSITION] = "", i.content.style[e.CSS.TRANSFORM] = "", t ? (i.content.style[e.CSS.TRANSITION] = "none", n(), e.requestAnimationFrame(function () {
        i.content.style[e.CSS.TRANSITION] = "";
      })) : e.requestAnimationFrame(function () {
        setTimeout(n, 250);
      }));
    }, c.prototype.drag = e.animationFrameThrottle(function (t) {
      var n;if (this._currentDrag && (!this._isDragging && (Math.abs(t.gesture.deltaX) > this.dragThresholdX || Math.abs(this._currentDrag.startOffsetX) > 0) && (this._isDragging = !0), this._isDragging)) {
        n = this._currentDrag.buttonsWidth;var i = Math.min(0, this._currentDrag.startOffsetX + t.gesture.deltaX);-n > i && (i = Math.min(-n, -n + .4 * (t.gesture.deltaX + n))), this._currentDrag.content.$$ionicOptionsOpen = 0 !== i, this._currentDrag.content.style[e.CSS.TRANSFORM] = "translate3d(" + i + "px, 0, 0)", this._currentDrag.content.style[e.CSS.TRANSITION] = "none";
      }
    }), c.prototype.end = function (t, n) {
      var i = this;if (!i._currentDrag) return void (n && n());var r = -i._currentDrag.buttonsWidth;t.gesture.deltaX > -(i._currentDrag.buttonsWidth / 2) && ("left" == t.gesture.direction && Math.abs(t.gesture.velocityX) < .3 ? r = 0 : "right" == t.gesture.direction && (r = 0)), e.requestAnimationFrame(function () {
        if (0 === r) {
          i._currentDrag.content.style[e.CSS.TRANSFORM] = "";var t = i._currentDrag.buttons;setTimeout(function () {
            t && t.classList.add("invisible");
          }, 250);
        } else i._currentDrag.content.style[e.CSS.TRANSFORM] = "translate3d(" + r + "px,0,0)";i._currentDrag.content.style[e.CSS.TRANSITION] = "", i._lastDrag || (i._lastDrag = {}), e.extend(i._lastDrag, i._currentDrag), i._currentDrag && (i._currentDrag.buttons = null, i._currentDrag.content = null), i._currentDrag = null, n && n();
      });
    };var d = function d(e) {
      var t = this;if (t.dragThresholdY = e.dragThresholdY || 0, t.onReorder = e.onReorder, t.listEl = e.listEl, t.el = t.item = e.el, t.scrollEl = e.scrollEl, t.scrollView = e.scrollView, t.listElTrueTop = 0, t.listEl.offsetParent) {
        var n = t.listEl;do {
          t.listElTrueTop += n.offsetTop, n = n.offsetParent;
        } while (n);
      }
    };d.prototype = new l(), d.prototype._moveElement = function (t) {
      var n = t.gesture.center.pageY + this.scrollView.getValues().top - this._currentDrag.elementHeight / 2 - this.listElTrueTop;this.el.style[e.CSS.TRANSFORM] = "translate3d(0, " + n + "px, 0)";
    }, d.prototype.deregister = function () {
      this.listEl = this.el = this.scrollEl = this.scrollView = null;
    }, d.prototype.start = function (t) {
      var n = e.DomUtil.getChildIndex(this.el, this.el.nodeName.toLowerCase()),
          i = this.el.scrollHeight,
          r = this.el.cloneNode(!0);r.classList.add(a), this.el.parentNode.insertBefore(r, this.el), this.el.classList.add(o), this._currentDrag = { elementHeight: i, startIndex: n, placeholder: r, scrollHeight: scroll, list: r.parentNode }, this._moveElement(t);
    }, d.prototype.drag = e.animationFrameThrottle(function (t) {
      var n = this;if (this._currentDrag) {
        var i = 0,
            r = t.gesture.center.pageY,
            a = this.listElTrueTop;if (this.scrollView) {
          var o = this.scrollView.__container;i = this.scrollView.getValues().top;var s = o.offsetTop,
              l = s - r + this._currentDrag.elementHeight / 2,
              c = r + this._currentDrag.elementHeight / 2 - s - o.offsetHeight;t.gesture.deltaY < 0 && l > 0 && i > 0 && (this.scrollView.scrollBy(null, -l), e.requestAnimationFrame(function () {
            n.drag(t);
          })), t.gesture.deltaY > 0 && c > 0 && i < this.scrollView.getScrollMax().top && (this.scrollView.scrollBy(null, c), e.requestAnimationFrame(function () {
            n.drag(t);
          }));
        }!this._isDragging && Math.abs(t.gesture.deltaY) > this.dragThresholdY && (this._isDragging = !0), this._isDragging && (this._moveElement(t), this._currentDrag.currentY = i + r - a);
      }
    }), d.prototype._getReorderIndex = function () {
      for (var e, t = this, n = Array.prototype.slice.call(t._currentDrag.placeholder.parentNode.children).filter(function (e) {
        return e.nodeName === t.el.nodeName && e !== t.el;
      }), i = t._currentDrag.currentY, r = 0, a = n.length; a > r; r++) {
        if (e = n[r], r === a - 1) {
          if (i > e.offsetTop) return r;
        } else if (0 === r) {
          if (i < e.offsetTop + e.offsetHeight) return r;
        } else if (i > e.offsetTop - e.offsetHeight / 2 && i < e.offsetTop + e.offsetHeight) return r;
      }return t._currentDrag.startIndex;
    }, d.prototype.end = function (t, n) {
      if (!this._currentDrag) return void (n && n());var i = this._currentDrag.placeholder,
          r = this._getReorderIndex();this.el.classList.remove(o), this.el.style[e.CSS.TRANSFORM] = "", i.parentNode.insertBefore(this.el, i), i.parentNode.removeChild(i), this.onReorder && this.onReorder(this.el, this._currentDrag.startIndex, r), this._currentDrag = { placeholder: null, content: null }, this._currentDrag = null, n && n();
    }, e.views.ListView = e.views.View.inherit({ initialize: function initialize(t) {
        var n = this;t = e.extend({ onReorder: function onReorder() {}, virtualRemoveThreshold: -200, virtualAddThreshold: 200, canSwipe: function canSwipe() {
            return !0;
          } }, t), e.extend(n, t), !n.itemHeight && n.listEl && (n.itemHeight = n.listEl.children[0] && parseInt(n.listEl.children[0].style.height, 10)), n.onRefresh = t.onRefresh || function () {}, n.onRefreshOpening = t.onRefreshOpening || function () {}, n.onRefreshHolding = t.onRefreshHolding || function () {};var i = {};e.DomUtil.getParentOrSelfWithClass(n.el, "overflow-scroll") && (i.prevent_default_directions = ["left", "right"]), window.ionic.onGesture("release", function (e) {
          n._handleEndDrag(e);
        }, n.el, i), window.ionic.onGesture("drag", function (e) {
          n._handleDrag(e);
        }, n.el, i), n._initDrag();
      }, deregister: function deregister() {
        this.el = this.listEl = this.scrollEl = this.scrollView = null, this.isScrollFreeze && self.scrollView.freeze(!1);
      }, stopRefreshing: function stopRefreshing() {
        var e = this.el.querySelector(".list-refresher");e.style.height = "0";
      }, didScroll: function didScroll(e) {
        var t = this;if (t.isVirtual) {
          var n = t.itemHeight,
              i = e.target.scrollHeight,
              r = t.el.parentNode.offsetHeight,
              a = Math.max(0, e.scrollTop + t.virtualRemoveThreshold),
              o = Math.min(i, Math.abs(e.scrollTop) + r + t.virtualAddThreshold),
              s = parseInt(Math.abs(a / n), 10),
              l = parseInt(Math.abs(o / n), 10);t._virtualItemsToRemove = Array.prototype.slice.call(t.listEl.children, 0, s), t.renderViewport && t.renderViewport(a, o, s, l);
        }
      }, didStopScrolling: function didStopScrolling() {
        if (this.isVirtual) for (var e = 0; e < this._virtualItemsToRemove.length; e++) {
          this.didHideItem && this.didHideItem(e);
        }
      }, clearDragEffects: function clearDragEffects(e) {
        this._lastDragOp && (this._lastDragOp.clean && this._lastDragOp.clean(e), this._lastDragOp.deregister && this._lastDragOp.deregister(), this._lastDragOp = null);
      }, _initDrag: function _initDrag() {
        this._lastDragOp && this._lastDragOp.deregister && this._lastDragOp.deregister(), this._lastDragOp = this._dragOp, this._dragOp = null;
      }, _getItem: function _getItem(e) {
        for (; e;) {
          if (e.classList && e.classList.contains(t)) return e;e = e.parentNode;
        }return null;
      }, _startDrag: function _startDrag(t) {
        var n = this;n._isDragging = !1;var i,
            r = n._lastDragOp;n._didDragUpOrDown && r instanceof c && r.clean && r.clean(), !e.DomUtil.getParentOrSelfWithClass(t.target, s) || "up" != t.gesture.direction && "down" != t.gesture.direction ? !n._didDragUpOrDown && ("left" == t.gesture.direction || "right" == t.gesture.direction) && Math.abs(t.gesture.deltaX) > 5 && (i = n._getItem(t.target), i && i.querySelector(".item-options") && (n._dragOp = new c({ el: n.el, item: i, canSwipe: n.canSwipe }), n._dragOp.start(t), t.preventDefault(), n.isScrollFreeze = n.scrollView.freeze(!0))) : (i = n._getItem(t.target), i && (n._dragOp = new d({ listEl: n.el, el: i, scrollEl: n.scrollEl, scrollView: n.scrollView, onReorder: function onReorder(e, t, i) {
            n.onReorder && n.onReorder(e, t, i);
          } }), n._dragOp.start(t), t.preventDefault())), r && n._dragOp && !n._dragOp.isSameItem(r) && t.defaultPrevented && r.clean && r.clean();
      }, _handleEndDrag: function _handleEndDrag(e) {
        var t = this;t.scrollView && (t.isScrollFreeze = t.scrollView.freeze(!1)), t._didDragUpOrDown = !1, t._dragOp && t._dragOp.end(e, function () {
          t._initDrag();
        });
      }, _handleDrag: function _handleDrag(e) {
        var t = this;Math.abs(e.gesture.deltaY) > 5 && (t._didDragUpOrDown = !0), t.isDragging || t._dragOp || t._startDrag(e), t._dragOp && (e.gesture.srcEvent.preventDefault(), t._dragOp.drag(e));
      } });
  }(ionic), function (e) {
    "use strict";
    e.views.Modal = e.views.View.inherit({ initialize: function initialize(t) {
        t = e.extend({ focusFirstInput: !1, unfocusOnHide: !0, focusFirstDelay: 600, backdropClickToClose: !0, hardwareBackButtonClose: !0 }, t), e.extend(this, t), this.el = t.el;
      }, show: function show() {
        var e = this;e.focusFirstInput && window.setTimeout(function () {
          var t = e.el.querySelector("input, textarea");t && t.focus && t.focus();
        }, e.focusFirstDelay);
      }, hide: function hide() {
        if (this.unfocusOnHide) {
          var e = this.el.querySelectorAll("input, textarea");window.setTimeout(function () {
            for (var t = 0; t < e.length; t++) {
              e[t].blur && e[t].blur();
            }
          });
        }
      } });
  }(ionic), function (e) {
    "use strict";
    e.views.SideMenu = e.views.View.inherit({ initialize: function initialize(e) {
        this.el = e.el, this.isEnabled = "undefined" == typeof e.isEnabled ? !0 : e.isEnabled, this.setWidth(e.width);
      }, getFullWidth: function getFullWidth() {
        return this.width;
      }, setWidth: function setWidth(e) {
        this.width = e, this.el.style.width = e + "px";
      }, setIsEnabled: function setIsEnabled(e) {
        this.isEnabled = e;
      }, bringUp: function bringUp() {
        "0" !== this.el.style.zIndex && (this.el.style.zIndex = "0");
      }, pushDown: function pushDown() {
        "-1" !== this.el.style.zIndex && (this.el.style.zIndex = "-1");
      } }), e.views.SideMenuContent = e.views.View.inherit({ initialize: function initialize(t) {
        e.extend(this, { animationClass: "menu-animated", onDrag: function onDrag() {}, onEndDrag: function onEndDrag() {} }, t), e.onGesture("drag", e.proxy(this._onDrag, this), this.el), e.onGesture("release", e.proxy(this._onEndDrag, this), this.el);
      }, _onDrag: function _onDrag(e) {
        this.onDrag && this.onDrag(e);
      }, _onEndDrag: function _onEndDrag(e) {
        this.onEndDrag && this.onEndDrag(e);
      }, disableAnimation: function disableAnimation() {
        this.el.classList.remove(this.animationClass);
      }, enableAnimation: function enableAnimation() {
        this.el.classList.add(this.animationClass);
      }, getTranslateX: function getTranslateX() {
        return parseFloat(this.el.style[e.CSS.TRANSFORM].replace("translate3d(", "").split(",")[0]);
      }, setTranslateX: e.animationFrameThrottle(function (t) {
        this.el.style[e.CSS.TRANSFORM] = "translate3d(" + t + "px, 0, 0)";
      }) });
  }(ionic), function (e) {
    "use strict";
    e.views.Slider = e.views.View.inherit({ initialize: function initialize(e) {
        function t() {
          if (b.offsetWidth) {
            S = D.children, x = S.length, S.length < 2 && (e.continuous = !1), T.transitions && e.continuous && S.length < 3 && (D.appendChild(S[0].cloneNode(!0)), D.appendChild(D.children[1].cloneNode(!0)), S = D.children), y = new Array(S.length), E = b.offsetWidth || b.getBoundingClientRect().width, D.style.width = S.length * E + "px";for (var t = S.length; t--;) {
              var n = S[t];n.style.width = E + "px", n.setAttribute("data-index", t), T.transitions && (n.style.left = t * -E + "px", o(t, M > t ? -E : t > M ? E : 0, 0));
            }e.continuous && T.transitions && (o(r(M - 1), -E, 0), o(r(M + 1), E, 0)), T.transitions || (D.style.left = M * -E + "px"), b.style.visibility = "visible", e.slidesChanged && e.slidesChanged();
          }
        }function n(t) {
          e.continuous ? a(M - 1, t) : M && a(M - 1, t);
        }function i(t) {
          e.continuous ? a(M + 1, t) : M < S.length - 1 && a(M + 1, t);
        }function r(e) {
          return (S.length + e % S.length) % S.length;
        }function a(t, n) {
          if (M != t) {
            if (!S) return void (M = t);if (T.transitions) {
              var i = Math.abs(M - t) / (M - t);if (e.continuous) {
                var a = i;i = -y[r(t)] / E, i !== a && (t = -i * S.length + t);
              }for (var s = Math.abs(M - t) - 1; s--;) {
                o(r((t > M ? t : M) - s - 1), E * i, 0);
              }t = r(t), o(M, E * i, n || C), o(t, 0, n || C), e.continuous && o(r(t - i), -(E * i), 0);
            } else t = r(t), l(M * -E, t * -E, n || C);M = t, w(e.callback && e.callback(M, S[M]));
          }
        }function o(e, t, n) {
          s(e, t, n), y[e] = t;
        }function s(e, t, n) {
          var i = S[e],
              r = i && i.style;r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + "ms", r.webkitTransform = "translate(" + t + "px,0)translateZ(0)", r.msTransform = r.MozTransform = r.OTransform = "translateX(" + t + "px)");
        }function l(t, n, i) {
          if (!i) return void (D.style.left = n + "px");var r = +new Date(),
              a = setInterval(function () {
            var o = +new Date() - r;return o > i ? (D.style.left = n + "px", I && c(), e.transitionEnd && e.transitionEnd.call(event, M, S[M]), void clearInterval(a)) : void (D.style.left = (n - t) * (Math.floor(o / i * 100) / 100) + t + "px");
          }, 4);
        }function c() {
          L = setTimeout(i, I);
        }function d() {
          I = e.auto || 0, clearTimeout(L);
        }var u,
            p,
            h,
            f = this;window.navigator.pointerEnabled ? (u = "pointerdown", p = "pointermove", h = "pointerup") : window.navigator.msPointerEnabled ? (u = "MSPointerDown", p = "MSPointerMove", h = "MSPointerUp") : (u = "touchstart", p = "touchmove", h = "touchend");var m = "mousedown",
            g = "mousemove",
            v = "mouseup",
            _ = function _() {},
            w = function w(e) {
          setTimeout(e || _, 0);
        },
            T = { addEventListener: !!window.addEventListener, transitions: function (e) {
            var t = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];for (var n in t) {
              if (void 0 !== e.style[t[n]]) return !0;
            }return !1;
          }(document.createElement("swipe")) },
            b = e.el;if (b) {
          var S,
              y,
              E,
              x,
              D = b.children[0];e = e || {};var M = parseInt(e.startSlide, 10) || 0,
              C = e.speed || 300;e.continuous = void 0 !== e.continuous ? e.continuous : !0;var L,
              P,
              I = e.auto || 0,
              k = {},
              N = {},
              z = { handleEvent: function handleEvent(n) {
              switch (!n.touches && n.pageX && n.pageY && (n.touches = [{ pageX: n.pageX, pageY: n.pageY }]), n.type) {case u:
                  this.start(n);break;case m:
                  this.start(n);break;case p:
                  this.touchmove(n);break;case g:
                  this.touchmove(n);break;case h:
                  w(this.end(n));break;case v:
                  w(this.end(n));break;case "webkitTransitionEnd":case "msTransitionEnd":case "oTransitionEnd":case "otransitionend":case "transitionend":
                  w(this.transitionEnd(n));break;case "resize":
                  w(t);}e.stopPropagation && n.stopPropagation();
            }, start: function start(e) {
              if (e.touches) {
                var t = e.touches[0];k = { x: t.pageX, y: t.pageY, time: +new Date() }, P = void 0, N = {}, D.addEventListener(p, this, !1), D.addEventListener(g, this, !1), D.addEventListener(h, this, !1), D.addEventListener(v, this, !1), document.addEventListener(h, this, !1), document.addEventListener(v, this, !1);
              }
            }, touchmove: function touchmove(t) {
              if (!(!t.touches || t.touches.length > 1 || t.scale && 1 !== t.scale || f.slideIsDisabled)) {
                e.disableScroll && t.preventDefault();var n = t.touches[0];N = { x: n.pageX - k.x, y: n.pageY - k.y }, "undefined" == typeof P && (P = !!(P || Math.abs(N.x) < Math.abs(N.y))), P || (t.preventDefault(), d(), e.continuous ? (s(r(M - 1), N.x + y[r(M - 1)], 0), s(M, N.x + y[M], 0), s(r(M + 1), N.x + y[r(M + 1)], 0)) : (e.bouncing ? N.x = N.x / (!M && N.x > 0 || M == S.length - 1 && N.x < 0 ? Math.abs(N.x) / E + 1 : 1) : (E * M - N.x < 0 && (N.x = Math.min(N.x, E * M)), Math.abs(N.x) > E * (S.length - M - 1) && (N.x = Math.max(-E * (S.length - M - 1), N.x))), s(M - 1, N.x + y[M - 1], 0), s(M, N.x + y[M], 0), s(M + 1, N.x + y[M + 1], 0)), e.onDrag && e.onDrag());
              }
            }, end: function end() {
              var t = +new Date() - k.time,
                  n = Number(t) < 250 && Math.abs(N.x) > 20 || Math.abs(N.x) > E / 2,
                  i = !M && N.x > 0 || M == S.length - 1 && N.x < 0;e.continuous && (i = !1);var a = N.x < 0;P || (n && !i ? (a ? (e.continuous ? (o(r(M - 1), -E, 0), o(r(M + 2), E, 0)) : o(M - 1, -E, 0), o(M, y[M] - E, C), o(r(M + 1), y[r(M + 1)] - E, C), M = r(M + 1)) : (e.continuous ? (o(r(M + 1), E, 0), o(r(M - 2), -E, 0)) : o(M + 1, E, 0), o(M, y[M] + E, C), o(r(M - 1), y[r(M - 1)] + E, C), M = r(M - 1)), e.callback && e.callback(M, S[M])) : e.continuous ? (o(r(M - 1), -E, C), o(M, 0, C), o(r(M + 1), E, C)) : (o(M - 1, -E, C), o(M, 0, C), o(M + 1, E, C))), D.removeEventListener(p, z, !1), D.removeEventListener(g, z, !1), D.removeEventListener(h, z, !1), D.removeEventListener(v, z, !1), document.removeEventListener(h, z, !1), document.removeEventListener(v, z, !1), e.onDragEnd && e.onDragEnd();
            }, transitionEnd: function transitionEnd(t) {
              parseInt(t.target.getAttribute("data-index"), 10) == M && (I && c(), e.transitionEnd && e.transitionEnd.call(t, M, S[M]));
            } };this.update = function () {
            setTimeout(t);
          }, this.setup = function () {
            t();
          }, this.loop = function (t) {
            return arguments.length && (e.continuous = !!t), e.continuous;
          }, this.enableSlide = function (e) {
            return arguments.length && (this.slideIsDisabled = !e), !this.slideIsDisabled;
          }, this.slide = this.select = function (e, t) {
            d(), a(e, t);
          }, this.prev = this.previous = function () {
            d(), n();
          }, this.next = function () {
            d(), i();
          }, this.stop = function () {
            d();
          }, this.start = function () {
            c();
          }, this.autoPlay = function (e) {
            !I || 0 > I ? d() : (I = e, c());
          }, this.currentIndex = this.selected = function () {
            return M;
          }, this.slidesCount = this.count = function () {
            return x;
          }, this.kill = function () {
            d(), D.style.width = "", D.style.left = "", S && (S = []), T.addEventListener ? (D.removeEventListener(u, z, !1), D.removeEventListener(m, z, !1), D.removeEventListener("webkitTransitionEnd", z, !1), D.removeEventListener("msTransitionEnd", z, !1), D.removeEventListener("oTransitionEnd", z, !1), D.removeEventListener("otransitionend", z, !1), D.removeEventListener("transitionend", z, !1), window.removeEventListener("resize", z, !1)) : window.onresize = null;
          }, this.load = function () {
            t(), I && c(), T.addEventListener ? (D.addEventListener(u, z, !1), D.addEventListener(m, z, !1), T.transitions && (D.addEventListener("webkitTransitionEnd", z, !1), D.addEventListener("msTransitionEnd", z, !1), D.addEventListener("oTransitionEnd", z, !1), D.addEventListener("otransitionend", z, !1), D.addEventListener("transitionend", z, !1)), window.addEventListener("resize", z, !1)) : window.onresize = function () {
              t();
            };
          };
        }
      } });
  }(ionic), function () {
    "use strict";
    function e(e) {
      e.fn.swiper = function (t) {
        var i;return e(this).each(function () {
          var e = new n(this, t);i || (i = e);
        }), i;
      };
    }var t,
        n = function n(e, r, a, o) {
      function s() {
        return "horizontal" === y.params.direction;
      }function l(e) {
        return Math.floor(e);
      }function c() {
        y.autoplayTimeoutId = setTimeout(function () {
          y.params.loop ? (y.fixLoop(), y._slideNext()) : y.isEnd ? r.autoplayStopOnLast ? y.stopAutoplay() : y._slideTo(0) : y._slideNext();
        }, y.params.autoplay);
      }function d(e, n) {
        var i = t(e.target);if (!i.is(n)) if ("string" == typeof n) i = i.parents(n);else if (n.nodeType) {
          var r;return i.parents().each(function (e, t) {
            t === n && (r = n);
          }), r ? n : void 0;
        }return 0 === i.length ? void 0 : i[0];
      }function u(e, t) {
        t = t || {};var n = window.MutationObserver || window.WebkitMutationObserver,
            i = new n(function (e) {
          e.forEach(function (e) {
            y.onResize(!0), y.emit("onObserverUpdate", y, e);
          });
        });i.observe(e, { attributes: "undefined" == typeof t.attributes ? !0 : t.attributes, childList: "undefined" == typeof t.childList ? !0 : t.childList, characterData: "undefined" == typeof t.characterData ? !0 : t.characterData }), y.observers.push(i);
      }function p(e) {
        e.originalEvent && (e = e.originalEvent);var t = e.keyCode || e.charCode;if (!y.params.allowSwipeToNext && (s() && 39 === t || !s() && 40 === t)) return !1;if (!y.params.allowSwipeToPrev && (s() && 37 === t || !s() && 38 === t)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
          if (37 === t || 39 === t || 38 === t || 40 === t) {
            var n = !1;if (y.container.parents(".swiper-slide").length > 0 && 0 === y.container.parents(".swiper-slide-active").length) return;var i = { left: window.pageXOffset, top: window.pageYOffset },
                r = window.innerWidth,
                a = window.innerHeight,
                o = y.container.offset();y.rtl && (o.left = o.left - y.container[0].scrollLeft);for (var l = [[o.left, o.top], [o.left + y.width, o.top], [o.left, o.top + y.height], [o.left + y.width, o.top + y.height]], c = 0; c < l.length; c++) {
              var d = l[c];d[0] >= i.left && d[0] <= i.left + r && d[1] >= i.top && d[1] <= i.top + a && (n = !0);
            }if (!n) return;
          }s() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !y.rtl || 37 === t && y.rtl) && y.slideNext(), (37 === t && !y.rtl || 39 === t && y.rtl) && y.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && y.slideNext(), 38 === t && y.slidePrev());
        }
      }function h(e) {
        e.originalEvent && (e = e.originalEvent);var t = y.mousewheel.event,
            n = 0,
            i = y.rtl ? -1 : 1;if (e.detail) n = -e.detail;else if ("mousewheel" === t) {
          if (y.params.mousewheelForceToAxis) {
            if (s()) {
              if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;n = e.wheelDeltaX * i;
            } else {
              if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;n = e.wheelDeltaY;
            }
          } else n = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * i : -e.wheelDeltaY;
        } else if ("DOMMouseScroll" === t) n = -e.detail;else if ("wheel" === t) if (y.params.mousewheelForceToAxis) {
          if (s()) {
            if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;n = -e.deltaX * i;
          } else {
            if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;n = -e.deltaY;
          }
        } else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * i : -e.deltaY;if (0 !== n) {
          if (y.params.mousewheelInvert && (n = -n), y.params.freeMode) {
            var r = y.getWrapperTranslate() + n * y.params.mousewheelSensitivity,
                a = y.isBeginning,
                o = y.isEnd;if (r >= y.minTranslate() && (r = y.minTranslate()), r <= y.maxTranslate() && (r = y.maxTranslate()), y.setWrapperTransition(0), y.setWrapperTranslate(r), y.updateProgress(), y.updateActiveIndex(), (!a && y.isBeginning || !o && y.isEnd) && y.updateClasses(), y.params.freeModeSticky && (clearTimeout(y.mousewheel.timeout), y.mousewheel.timeout = setTimeout(function () {
              y.slideReset();
            }, 300)), 0 === r || r === y.maxTranslate()) return;
          } else {
            if (new window.Date().getTime() - y.mousewheel.lastScrollTime > 60) if (0 > n) {
              if (y.isEnd && !y.params.loop || y.animating) {
                if (y.params.mousewheelReleaseOnEdges) return !0;
              } else y.slideNext();
            } else if (y.isBeginning && !y.params.loop || y.animating) {
              if (y.params.mousewheelReleaseOnEdges) return !0;
            } else y.slidePrev();y.mousewheel.lastScrollTime = new window.Date().getTime();
          }return y.params.autoplay && y.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
        }
      }function f(e, n) {
        e = t(e);var i,
            r,
            a,
            o = y.rtl ? -1 : 1;i = e.attr("data-swiper-parallax") || "0", r = e.attr("data-swiper-parallax-x"), a = e.attr("data-swiper-parallax-y"), r || a ? (r = r || "0", a = a || "0") : s() ? (r = i, a = "0") : (a = i, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * n * o + "%" : r * n * o + "px", a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n + "%" : a * n + "px", e.transform("translate3d(" + r + ", " + a + ",0px)");
      }function m(e) {
        return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
      }if (!(this instanceof n)) return new n(e, r);var g = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, hashnav: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationHiddenClass: "swiper-pagination-hidden", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
          v = r && r.virtualTranslate;r = r || {};var _ = {};for (var w in r) {
        if ("object" != _typeof(r[w]) || r[w].nodeType || r[w] === window || r[w] === document || "undefined" != typeof i && r[w] instanceof i || "undefined" != typeof jQuery && r[w] instanceof jQuery) _[w] = r[w];else {
          _[w] = {};for (var T in r[w]) {
            _[w][T] = r[w][T];
          }
        }
      }for (var b in g) {
        if ("undefined" == typeof r[b]) r[b] = g[b];else if ("object" == _typeof(r[b])) for (var S in g[b]) {
          "undefined" == typeof r[b][S] && (r[b][S] = g[b][S]);
        }
      }var y = this;if (y.params = r, y.originalParams = _, y.classNames = [], "undefined" != typeof t && "undefined" != typeof i && (t = i), ("undefined" != typeof t || (t = "undefined" == typeof i ? window.Dom7 || window.Zepto || __webpack_provided_window_dot_jQuery : i)) && (y.$ = t, y.currentBreakpoint = void 0, y.getActiveBreakpoint = function () {
        if (!y.params.breakpoints) return !1;var e,
            t = !1,
            n = [];for (e in y.params.breakpoints) {
          y.params.breakpoints.hasOwnProperty(e) && n.push(e);
        }n.sort(function (e, t) {
          return parseInt(e, 10) > parseInt(t, 10);
        });for (var i = 0; i < n.length; i++) {
          e = n[i], e >= window.innerWidth && !t && (t = e);
        }return t || "max";
      }, y.setBreakpoint = function () {
        var e = y.getActiveBreakpoint();if (e && y.currentBreakpoint !== e) {
          var t = e in y.params.breakpoints ? y.params.breakpoints[e] : y.originalParams;for (var n in t) {
            y.params[n] = t[n];
          }y.currentBreakpoint = e;
        }
      }, y.params.breakpoints && y.setBreakpoint(), y.container = t(e), 0 !== y.container.length)) {
        if (y.container.length > 1) return void y.container.each(function () {
          new n(this, r);
        });y.container[0].swiper = y, y.container.data("swiper", y), y.classNames.push("swiper-container-" + y.params.direction), y.params.freeMode && y.classNames.push("swiper-container-free-mode"), y.support.flexbox || (y.classNames.push("swiper-container-no-flexbox"), y.params.slidesPerColumn = 1), y.params.autoHeight && y.classNames.push("swiper-container-autoheight"), (y.params.parallax || y.params.watchSlidesVisibility) && (y.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(y.params.effect) >= 0 && (y.support.transforms3d ? (y.params.watchSlidesProgress = !0, y.classNames.push("swiper-container-3d")) : y.params.effect = "slide"), "slide" !== y.params.effect && y.classNames.push("swiper-container-" + y.params.effect), "cube" === y.params.effect && (y.params.resistanceRatio = 0, y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.centeredSlides = !1, y.params.spaceBetween = 0, y.params.virtualTranslate = !0, y.params.setWrapperSize = !1), "fade" === y.params.effect && (y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.watchSlidesProgress = !0, y.params.spaceBetween = 0, "undefined" == typeof v && (y.params.virtualTranslate = !0)), y.params.grabCursor && y.support.touch && (y.params.grabCursor = !1), y.wrapper = y.container.children("." + y.params.wrapperClass), y.params.pagination && (y.paginationContainer = t(y.params.pagination), y.params.paginationClickable && y.paginationContainer.addClass("swiper-pagination-clickable")), y.rtl = s() && ("rtl" === y.container[0].dir.toLowerCase() || "rtl" === y.container.css("direction")), y.rtl && y.classNames.push("swiper-container-rtl"), y.rtl && (y.wrongRTL = "-webkit-box" === y.wrapper.css("display")), y.params.slidesPerColumn > 1 && y.classNames.push("swiper-container-multirow"), y.device.android && y.classNames.push("swiper-container-android"), y.container.addClass(y.classNames.join(" ")), y.translate = 0, y.progress = 0, y.velocity = 0, y.lockSwipeToNext = function () {
          y.params.allowSwipeToNext = !1;
        }, y.lockSwipeToPrev = function () {
          y.params.allowSwipeToPrev = !1;
        }, y.lockSwipes = function () {
          y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !1;
        }, y.unlockSwipeToNext = function () {
          y.params.allowSwipeToNext = !0;
        }, y.unlockSwipeToPrev = function () {
          y.params.allowSwipeToPrev = !0;
        }, y.unlockSwipes = function () {
          y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !0;
        }, y.params.grabCursor && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grab", y.container[0].style.cursor = "-moz-grab", y.container[0].style.cursor = "grab"), y.imagesToLoad = [], y.imagesLoaded = 0, y.loadImage = function (e, t, n, i, r) {
          function a() {
            r && r();
          }var o;e.complete && i ? a() : t ? (o = new window.Image(), o.onload = a, o.onerror = a, n && (o.srcset = n), t && (o.src = t)) : a();
        }, y.preloadImages = function () {
          function e() {
            "undefined" != typeof y && null !== y && (void 0 !== y.imagesLoaded && y.imagesLoaded++, y.imagesLoaded === y.imagesToLoad.length && (y.params.updateOnImagesReady && y.update(), y.emit("onImagesReady", y)));
          }y.imagesToLoad = y.container.find("img");for (var t = 0; t < y.imagesToLoad.length; t++) {
            y.loadImage(y.imagesToLoad[t], y.imagesToLoad[t].currentSrc || y.imagesToLoad[t].getAttribute("src"), y.imagesToLoad[t].srcset || y.imagesToLoad[t].getAttribute("srcset"), !0, e);
          }
        }, y.autoplayTimeoutId = void 0, y.autoplaying = !1, y.autoplayPaused = !1, y.startAutoplay = function () {
          return "undefined" != typeof y.autoplayTimeoutId ? !1 : y.params.autoplay ? y.autoplaying ? !1 : (y.autoplaying = !0, y.emit("onAutoplayStart", y), void c()) : !1;
        }, y.stopAutoplay = function (e) {
          y.autoplayTimeoutId && (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplaying = !1, y.autoplayTimeoutId = void 0, y.emit("onAutoplayStop", y));
        }, y.pauseAutoplay = function (e) {
          y.autoplayPaused || (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplayPaused = !0, 0 === e ? (y.autoplayPaused = !1, c()) : y.wrapper.transitionEnd(function () {
            y && (y.autoplayPaused = !1, y.autoplaying ? c() : y.stopAutoplay());
          }));
        }, y.minTranslate = function () {
          return -y.snapGrid[0];
        }, y.maxTranslate = function () {
          return -y.snapGrid[y.snapGrid.length - 1];
        }, y.updateAutoHeight = function () {
          var e = y.slides.eq(y.activeIndex)[0].offsetHeight;e && y.wrapper.css("height", y.slides.eq(y.activeIndex)[0].offsetHeight + "px");
        }, y.updateContainerSize = function () {
          var e, t;e = "undefined" != typeof y.params.width ? y.params.width : y.container[0].clientWidth, t = "undefined" != typeof y.params.height ? y.params.height : y.container[0].clientHeight, 0 === e && s() || 0 === t && !s() || (e = e - parseInt(y.container.css("padding-left"), 10) - parseInt(y.container.css("padding-right"), 10), t = t - parseInt(y.container.css("padding-top"), 10) - parseInt(y.container.css("padding-bottom"), 10), y.width = e, y.height = t, y.size = s() ? y.width : y.height);
        }, y.updateSlidesSize = function () {
          y.slides = y.wrapper.children("." + y.params.slideClass), y.snapGrid = [], y.slidesGrid = [], y.slidesSizesGrid = [];var e,
              t = y.params.spaceBetween,
              n = -y.params.slidesOffsetBefore,
              i = 0,
              r = 0;"string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * y.size), y.virtualSize = -t, y.rtl ? y.slides.css({ marginLeft: "", marginTop: "" }) : y.slides.css({ marginRight: "", marginBottom: "" });var a;y.params.slidesPerColumn > 1 && (a = Math.floor(y.slides.length / y.params.slidesPerColumn) === y.slides.length / y.params.slidesPerColumn ? y.slides.length : Math.ceil(y.slides.length / y.params.slidesPerColumn) * y.params.slidesPerColumn, "auto" !== y.params.slidesPerView && "row" === y.params.slidesPerColumnFill && (a = Math.max(a, y.params.slidesPerView * y.params.slidesPerColumn)));var o,
              c = y.params.slidesPerColumn,
              d = a / c,
              u = d - (y.params.slidesPerColumn * d - y.slides.length);for (e = 0; e < y.slides.length; e++) {
            o = 0;var p = y.slides.eq(e);if (y.params.slidesPerColumn > 1) {
              var h, f, m;"column" === y.params.slidesPerColumnFill ? (f = Math.floor(e / c), m = e - f * c, (f > u || f === u && m === c - 1) && ++m >= c && (m = 0, f++), h = f + m * a / c, p.css({ "-webkit-box-ordinal-group": h, "-moz-box-ordinal-group": h, "-ms-flex-order": h, "-webkit-order": h, order: h })) : (m = Math.floor(e / d), f = e - m * d), p.css({ "margin-top": 0 !== m && y.params.spaceBetween && y.params.spaceBetween + "px" }).attr("data-swiper-column", f).attr("data-swiper-row", m);
            }"none" !== p.css("display") && ("auto" === y.params.slidesPerView ? (o = s() ? p.outerWidth(!0) : p.outerHeight(!0), y.params.roundLengths && (o = l(o))) : (o = (y.size - (y.params.slidesPerView - 1) * t) / y.params.slidesPerView, y.params.roundLengths && (o = l(o)), s() ? y.slides[e].style.width = o + "px" : y.slides[e].style.height = o + "px"), y.slides[e].swiperSlideSize = o, y.slidesSizesGrid.push(o), y.params.centeredSlides ? (n = n + o / 2 + i / 2 + t, 0 === e && (n = n - y.size / 2 - t), Math.abs(n) < .001 && (n = 0), r % y.params.slidesPerGroup === 0 && y.snapGrid.push(n), y.slidesGrid.push(n)) : (r % y.params.slidesPerGroup === 0 && y.snapGrid.push(n), y.slidesGrid.push(n), n = n + o + t), y.virtualSize += o + t, i = o, r++);
          }y.virtualSize = Math.max(y.virtualSize, y.size) + y.params.slidesOffsetAfter;var g;if (y.rtl && y.wrongRTL && ("slide" === y.params.effect || "coverflow" === y.params.effect) && y.wrapper.css({ width: y.virtualSize + y.params.spaceBetween + "px" }), (!y.support.flexbox || y.params.setWrapperSize) && (s() ? y.wrapper.css({ width: y.virtualSize + y.params.spaceBetween + "px" }) : y.wrapper.css({ height: y.virtualSize + y.params.spaceBetween + "px" })), y.params.slidesPerColumn > 1 && (y.virtualSize = (o + y.params.spaceBetween) * a, y.virtualSize = Math.ceil(y.virtualSize / y.params.slidesPerColumn) - y.params.spaceBetween, y.wrapper.css({ width: y.virtualSize + y.params.spaceBetween + "px" }), y.params.centeredSlides)) {
            for (g = [], e = 0; e < y.snapGrid.length; e++) {
              y.snapGrid[e] < y.virtualSize + y.snapGrid[0] && g.push(y.snapGrid[e]);
            }y.snapGrid = g;
          }if (!y.params.centeredSlides) {
            for (g = [], e = 0; e < y.snapGrid.length; e++) {
              y.snapGrid[e] <= y.virtualSize - y.size && g.push(y.snapGrid[e]);
            }y.snapGrid = g, Math.floor(y.virtualSize - y.size) > Math.floor(y.snapGrid[y.snapGrid.length - 1]) && y.snapGrid.push(y.virtualSize - y.size);
          }0 === y.snapGrid.length && (y.snapGrid = [0]), 0 !== y.params.spaceBetween && (s() ? y.rtl ? y.slides.css({ marginLeft: t + "px" }) : y.slides.css({ marginRight: t + "px" }) : y.slides.css({ marginBottom: t + "px" })), y.params.watchSlidesProgress && y.updateSlidesOffset();
        }, y.updateSlidesOffset = function () {
          for (var e = 0; e < y.slides.length; e++) {
            y.slides[e].swiperSlideOffset = s() ? y.slides[e].offsetLeft : y.slides[e].offsetTop;
          }
        }, y.updateSlidesProgress = function (e) {
          if ("undefined" == typeof e && (e = y.translate || 0), 0 !== y.slides.length) {
            "undefined" == typeof y.slides[0].swiperSlideOffset && y.updateSlidesOffset();var t = -e;y.rtl && (t = e), y.slides.removeClass(y.params.slideVisibleClass);for (var n = 0; n < y.slides.length; n++) {
              var i = y.slides[n],
                  r = (t - i.swiperSlideOffset) / (i.swiperSlideSize + y.params.spaceBetween);if (y.params.watchSlidesVisibility) {
                var a = -(t - i.swiperSlideOffset),
                    o = a + y.slidesSizesGrid[n],
                    s = a >= 0 && a < y.size || o > 0 && o <= y.size || 0 >= a && o >= y.size;s && y.slides.eq(n).addClass(y.params.slideVisibleClass);
              }i.progress = y.rtl ? -r : r;
            }
          }
        }, y.updateProgress = function (e) {
          "undefined" == typeof e && (e = y.translate || 0);var t = y.maxTranslate() - y.minTranslate(),
              n = y.isBeginning,
              i = y.isEnd;0 === t ? (y.progress = 0, y.isBeginning = y.isEnd = !0) : (y.progress = (e - y.minTranslate()) / t, y.isBeginning = y.progress <= 0, y.isEnd = y.progress >= 1), y.isBeginning && !n && y.emit("onReachBeginning", y), y.isEnd && !i && y.emit("onReachEnd", y), y.params.watchSlidesProgress && y.updateSlidesProgress(e), y.emit("onProgress", y, y.progress);
        }, y.updateActiveIndex = function () {
          var e,
              t,
              n,
              i = y.rtl ? y.translate : -y.translate;for (t = 0; t < y.slidesGrid.length; t++) {
            "undefined" != typeof y.slidesGrid[t + 1] ? i >= y.slidesGrid[t] && i < y.slidesGrid[t + 1] - (y.slidesGrid[t + 1] - y.slidesGrid[t]) / 2 ? e = t : i >= y.slidesGrid[t] && i < y.slidesGrid[t + 1] && (e = t + 1) : i >= y.slidesGrid[t] && (e = t);
          }(0 > e || "undefined" == typeof e) && (e = 0), n = Math.floor(e / y.params.slidesPerGroup), n >= y.snapGrid.length && (n = y.snapGrid.length - 1), e !== y.activeIndex && (y.snapIndex = n, y.previousIndex = y.activeIndex, y.activeIndex = e, y.updateClasses());
        }, y.updateClasses = function () {
          y.slides.removeClass(y.params.slideActiveClass + " " + y.params.slideNextClass + " " + y.params.slidePrevClass);var e = y.slides.eq(y.activeIndex);if (e.addClass(y.params.slideActiveClass), e.next("." + y.params.slideClass).addClass(y.params.slideNextClass), e.prev("." + y.params.slideClass).addClass(y.params.slidePrevClass), y.bullets && y.bullets.length > 0) {
            y.bullets.removeClass(y.params.bulletActiveClass);var n;y.params.loop ? (n = Math.ceil(y.activeIndex - y.loopedSlides) / y.params.slidesPerGroup, n > y.slides.length - 1 - 2 * y.loopedSlides && (n -= y.slides.length - 2 * y.loopedSlides), n > y.bullets.length - 1 && (n -= y.bullets.length)) : n = "undefined" != typeof y.snapIndex ? y.snapIndex : y.activeIndex || 0, y.paginationContainer.length > 1 ? y.bullets.each(function () {
              t(this).index() === n && t(this).addClass(y.params.bulletActiveClass);
            }) : y.bullets.eq(n).addClass(y.params.bulletActiveClass);
          }y.params.loop || (y.params.prevButton && (y.isBeginning ? (t(y.params.prevButton).addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(t(y.params.prevButton))) : (t(y.params.prevButton).removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(t(y.params.prevButton)))), y.params.nextButton && (y.isEnd ? (t(y.params.nextButton).addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(t(y.params.nextButton))) : (t(y.params.nextButton).removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(t(y.params.nextButton)))));
        }, y.updatePagination = function () {
          if (y.params.pagination && y.paginationContainer && y.paginationContainer.length > 0) {
            for (var e = "", t = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length, n = 0; t > n; n++) {
              e += y.params.paginationBulletRender ? y.params.paginationBulletRender(n, y.params.bulletClass) : "<" + y.params.paginationElement + ' class="' + y.params.bulletClass + '"></' + y.params.paginationElement + ">";
            }y.paginationContainer.html(e), y.bullets = y.paginationContainer.find("." + y.params.bulletClass), y.params.paginationClickable && y.params.a11y && y.a11y && y.a11y.initPagination();
          }
        }, y.update = function (e) {
          function t() {
            i = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate()), y.setWrapperTranslate(i), y.updateActiveIndex(), y.updateClasses();
          }if (y.updateContainerSize(), y.updateSlidesSize(), y.updateProgress(), y.updatePagination(), y.updateClasses(), y.params.scrollbar && y.scrollbar && y.scrollbar.set(), e) {
            var n, i;y.controller && y.controller.spline && (y.controller.spline = void 0), y.params.freeMode ? (t(), y.params.autoHeight && y.updateAutoHeight()) : (n = ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0), n || t());
          } else y.params.autoHeight && y.updateAutoHeight();
        }, y.onResize = function (e) {
          y.params.breakpoints && y.setBreakpoint();var t = y.params.allowSwipeToPrev,
              n = y.params.allowSwipeToNext;if (y.params.allowSwipeToPrev = y.params.allowSwipeToNext = !0, y.updateContainerSize(), y.updateSlidesSize(), ("auto" === y.params.slidesPerView || y.params.freeMode || e) && y.updatePagination(), y.params.scrollbar && y.scrollbar && y.scrollbar.set(), y.controller && y.controller.spline && (y.controller.spline = void 0), y.params.freeMode) {
            var i = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate());y.setWrapperTranslate(i), y.updateActiveIndex(), y.updateClasses(), y.params.autoHeight && y.updateAutoHeight();
          } else y.updateClasses(), ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0);y.params.allowSwipeToPrev = t, y.params.allowSwipeToNext = n;
        };var E = ["mousedown", "mousemove", "mouseup"];window.navigator.pointerEnabled ? E = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (E = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), y.touchEvents = { start: y.support.touch || !y.params.simulateTouch ? "touchstart" : E[0], move: y.support.touch || !y.params.simulateTouch ? "touchmove" : E[1], end: y.support.touch || !y.params.simulateTouch ? "touchend" : E[2] }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === y.params.touchEventsTarget ? y.container : y.wrapper).addClass("swiper-wp8-" + y.params.direction), y.initEvents = function (e) {
          var n = e ? "off" : "on",
              i = e ? "removeEventListener" : "addEventListener",
              a = "container" === y.params.touchEventsTarget ? y.container[0] : y.wrapper[0],
              o = y.support.touch ? a : document,
              s = y.params.nested ? !0 : !1;y.browser.ie ? (a[i](y.touchEvents.start, y.onTouchStart, !1), o[i](y.touchEvents.move, y.onTouchMove, s), o[i](y.touchEvents.end, y.onTouchEnd, !1)) : (y.support.touch && (a[i](y.touchEvents.start, y.onTouchStart, !1), a[i](y.touchEvents.move, y.onTouchMove, s), a[i](y.touchEvents.end, y.onTouchEnd, !1)), !r.simulateTouch || y.device.ios || y.device.android || (a[i]("mousedown", y.onTouchStart, !1), document[i]("mousemove", y.onTouchMove, s), document[i]("mouseup", y.onTouchEnd, !1))), window[i]("resize", y.onResize), y.params.nextButton && (t(y.params.nextButton)[n]("click", y.onClickNext), y.params.a11y && y.a11y && t(y.params.nextButton)[n]("keydown", y.a11y.onEnterKey)), y.params.prevButton && (t(y.params.prevButton)[n]("click", y.onClickPrev), y.params.a11y && y.a11y && t(y.params.prevButton)[n]("keydown", y.a11y.onEnterKey)), y.params.pagination && y.params.paginationClickable && (t(y.paginationContainer)[n]("click", "." + y.params.bulletClass, y.onClickIndex), y.params.a11y && y.a11y && t(y.paginationContainer)[n]("keydown", "." + y.params.bulletClass, y.a11y.onEnterKey)), (y.params.preventClicks || y.params.preventClicksPropagation) && a[i]("click", y.preventClicks, !0);
        }, y.attachEvents = function (e) {
          y.initEvents();
        }, y.detachEvents = function () {
          y.initEvents(!0);
        }, y.allowClick = !0, y.preventClicks = function (e) {
          y.allowClick || (y.params.preventClicks && e.preventDefault(), y.params.preventClicksPropagation && y.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        }, y.onClickNext = function (e) {
          e.preventDefault(), (!y.isEnd || y.params.loop) && y.slideNext();
        }, y.onClickPrev = function (e) {
          e.preventDefault(), (!y.isBeginning || y.params.loop) && y.slidePrev();
        }, y.onClickIndex = function (e) {
          e.preventDefault();var n = t(this).index() * y.params.slidesPerGroup;y.params.loop && (n += y.loopedSlides), y.slideTo(n);
        }, y.updateClickedSlide = function (e) {
          var n = d(e, "." + y.params.slideClass),
              i = !1;if (n) for (var r = 0; r < y.slides.length; r++) {
            y.slides[r] === n && (i = !0);
          }if (!n || !i) return y.clickedSlide = void 0, void (y.clickedIndex = void 0);if (y.clickedSlide = n, y.clickedIndex = t(n).index(), y.params.slideToClickedSlide && void 0 !== y.clickedIndex && y.clickedIndex !== y.activeIndex) {
            var a,
                o = y.clickedIndex;if (y.params.loop) {
              if (y.animating) return;a = t(y.clickedSlide).attr("data-swiper-slide-index"), y.params.centeredSlides ? o < y.loopedSlides - y.params.slidesPerView / 2 || o > y.slides.length - y.loopedSlides + y.params.slidesPerView / 2 ? (y.fixLoop(), o = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                y.slideTo(o);
              }, 0)) : y.slideTo(o) : o > y.slides.length - y.params.slidesPerView ? (y.fixLoop(), o = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function () {
                y.slideTo(o);
              }, 0)) : y.slideTo(o);
            } else y.slideTo(o);
          }
        };var x,
            D,
            M,
            C,
            L,
            P,
            I,
            k,
            N,
            z,
            O = "input, select, textarea, button",
            A = Date.now(),
            G = [];y.animating = !1, y.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var V, R;if (y.onTouchStart = function (e) {
          if (e.originalEvent && (e = e.originalEvent), V = "touchstart" === e.type, V || !("which" in e) || 3 !== e.which) {
            if (y.params.noSwiping && d(e, "." + y.params.noSwipingClass)) return void (y.allowClick = !0);if (!y.params.swipeHandler || d(e, y.params.swipeHandler)) {
              var n = y.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                  i = y.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;if (!(y.device.ios && y.params.iOSEdgeSwipeDetection && n <= y.params.iOSEdgeSwipeThreshold)) {
                if (x = !0, D = !1, M = !0, L = void 0, R = void 0, y.touches.startX = n, y.touches.startY = i, C = Date.now(), y.allowClick = !0, y.updateContainerSize(), y.swipeDirection = void 0, y.params.threshold > 0 && (k = !1), "touchstart" !== e.type) {
                  var r = !0;t(e.target).is(O) && (r = !1), document.activeElement && t(document.activeElement).is(O) && document.activeElement.blur(), r && e.preventDefault();
                }y.emit("onTouchStart", y, e);
              }
            }
          }
        }, y.onTouchMove = function (e) {
          if (e.originalEvent && (e = e.originalEvent), !(V && "mousemove" === e.type || e.preventedByNestedSwiper)) {
            if (y.params.onlyExternal) return y.allowClick = !1, void (x && (y.touches.startX = y.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, y.touches.startY = y.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, C = Date.now()));if (V && document.activeElement && e.target === document.activeElement && t(e.target).is(O)) return D = !0, void (y.allowClick = !1);if (M && y.emit("onTouchMove", y, e), !(e.targetTouches && e.targetTouches.length > 1)) {
              if (y.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, y.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof L) {
                var n = 180 * Math.atan2(Math.abs(y.touches.currentY - y.touches.startY), Math.abs(y.touches.currentX - y.touches.startX)) / Math.PI;L = s() ? n > y.params.touchAngle : 90 - n > y.params.touchAngle;
              }if (L && y.emit("onTouchMoveOpposite", y, e), "undefined" == typeof R && y.browser.ieTouch && (y.touches.currentX !== y.touches.startX || y.touches.currentY !== y.touches.startY) && (R = !0), x) {
                if (L) return void (x = !1);if (R || !y.browser.ieTouch) {
                  y.allowClick = !1, y.emit("onSliderMove", y, e), e.preventDefault(), y.params.touchMoveStopPropagation && !y.params.nested && e.stopPropagation(), D || (r.loop && y.fixLoop(), I = y.getWrapperTranslate(), y.setWrapperTransition(0), y.animating && y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), y.params.autoplay && y.autoplaying && (y.params.autoplayDisableOnInteraction ? y.stopAutoplay() : y.pauseAutoplay()), z = !1, y.params.grabCursor && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grabbing", y.container[0].style.cursor = "-moz-grabbin", y.container[0].style.cursor = "grabbing")), D = !0;var i = y.touches.diff = s() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY;i *= y.params.touchRatio, y.rtl && (i = -i), y.swipeDirection = i > 0 ? "prev" : "next", P = i + I;var a = !0;if (i > 0 && P > y.minTranslate() ? (a = !1, y.params.resistance && (P = y.minTranslate() - 1 + Math.pow(-y.minTranslate() + I + i, y.params.resistanceRatio))) : 0 > i && P < y.maxTranslate() && (a = !1, y.params.resistance && (P = y.maxTranslate() + 1 - Math.pow(y.maxTranslate() - I - i, y.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !y.params.allowSwipeToNext && "next" === y.swipeDirection && I > P && (P = I), !y.params.allowSwipeToPrev && "prev" === y.swipeDirection && P > I && (P = I), y.params.followFinger) {
                    if (y.params.threshold > 0) {
                      if (!(Math.abs(i) > y.params.threshold || k)) return void (P = I);if (!k) return k = !0, y.touches.startX = y.touches.currentX, y.touches.startY = y.touches.currentY, P = I, void (y.touches.diff = s() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY);
                    }(y.params.freeMode || y.params.watchSlidesProgress) && y.updateActiveIndex(), y.params.freeMode && (0 === G.length && G.push({ position: y.touches[s() ? "startX" : "startY"], time: C }), G.push({ position: y.touches[s() ? "currentX" : "currentY"], time: new window.Date().getTime() })), y.updateProgress(P), y.setWrapperTranslate(P);
                  }
                }
              }
            }
          }
        }, y.onTouchEnd = function (e) {
          if (e.originalEvent && (e = e.originalEvent), M && y.emit("onTouchEnd", y, e), M = !1, x) {
            y.params.grabCursor && D && x && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grab", y.container[0].style.cursor = "-moz-grab", y.container[0].style.cursor = "grab");var n = Date.now(),
                i = n - C;if (y.allowClick && (y.updateClickedSlide(e), y.emit("onTap", y, e), 300 > i && n - A > 300 && (N && clearTimeout(N), N = setTimeout(function () {
              y && (y.params.paginationHide && y.paginationContainer.length > 0 && !t(e.target).hasClass(y.params.bulletClass) && y.paginationContainer.toggleClass(y.params.paginationHiddenClass), y.emit("onClick", y, e));
            }, 300)), 300 > i && 300 > n - A && (N && clearTimeout(N), y.emit("onDoubleTap", y, e))), A = Date.now(), setTimeout(function () {
              y && (y.allowClick = !0);
            }, 0), !x || !D || !y.swipeDirection || 0 === y.touches.diff || P === I) return void (x = D = !1);x = D = !1;var r;if (r = y.params.followFinger ? y.rtl ? y.translate : -y.translate : -P, y.params.freeMode) {
              if (r < -y.minTranslate()) return void y.slideTo(y.activeIndex);if (r > -y.maxTranslate()) return void (y.slides.length < y.snapGrid.length ? y.slideTo(y.snapGrid.length - 1) : y.slideTo(y.slides.length - 1));if (y.params.freeModeMomentum) {
                if (G.length > 1) {
                  var a = G.pop(),
                      o = G.pop(),
                      s = a.position - o.position,
                      l = a.time - o.time;y.velocity = s / l, y.velocity = y.velocity / 2, Math.abs(y.velocity) < y.params.freeModeMinimumVelocity && (y.velocity = 0), (l > 150 || new window.Date().getTime() - a.time > 300) && (y.velocity = 0);
                } else y.velocity = 0;G.length = 0;var c = 1e3 * y.params.freeModeMomentumRatio,
                    d = y.velocity * c,
                    u = y.translate + d;y.rtl && (u = -u);var p,
                    h = !1,
                    f = 20 * Math.abs(y.velocity) * y.params.freeModeMomentumBounceRatio;if (u < y.maxTranslate()) y.params.freeModeMomentumBounce ? (u + y.maxTranslate() < -f && (u = y.maxTranslate() - f), p = y.maxTranslate(), h = !0, z = !0) : u = y.maxTranslate();else if (u > y.minTranslate()) y.params.freeModeMomentumBounce ? (u - y.minTranslate() > f && (u = y.minTranslate() + f), p = y.minTranslate(), h = !0, z = !0) : u = y.minTranslate();else if (y.params.freeModeSticky) {
                  var m,
                      g = 0;for (g = 0; g < y.snapGrid.length; g += 1) {
                    if (y.snapGrid[g] > -u) {
                      m = g;break;
                    }
                  }u = Math.abs(y.snapGrid[m] - u) < Math.abs(y.snapGrid[m - 1] - u) || "next" === y.swipeDirection ? y.snapGrid[m] : y.snapGrid[m - 1], y.rtl || (u = -u);
                }if (0 !== y.velocity) c = y.rtl ? Math.abs((-u - y.translate) / y.velocity) : Math.abs((u - y.translate) / y.velocity);else if (y.params.freeModeSticky) return void y.slideReset();y.params.freeModeMomentumBounce && h ? (y.updateProgress(p), y.setWrapperTransition(c), y.setWrapperTranslate(u), y.onTransitionStart(), y.animating = !0, y.wrapper.transitionEnd(function () {
                  y && z && (y.emit("onMomentumBounce", y), y.setWrapperTransition(y.params.speed), y.setWrapperTranslate(p), y.wrapper.transitionEnd(function () {
                    y && y.onTransitionEnd();
                  }));
                })) : y.velocity ? (y.updateProgress(u), y.setWrapperTransition(c), y.setWrapperTranslate(u), y.onTransitionStart(), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function () {
                  y && y.onTransitionEnd();
                }))) : y.updateProgress(u), y.updateActiveIndex();
              }return void ((!y.params.freeModeMomentum || i >= y.params.longSwipesMs) && (y.updateProgress(), y.updateActiveIndex()));
            }var v,
                _ = 0,
                w = y.slidesSizesGrid[0];for (v = 0; v < y.slidesGrid.length; v += y.params.slidesPerGroup) {
              "undefined" != typeof y.slidesGrid[v + y.params.slidesPerGroup] ? r >= y.slidesGrid[v] && r < y.slidesGrid[v + y.params.slidesPerGroup] && (_ = v, w = y.slidesGrid[v + y.params.slidesPerGroup] - y.slidesGrid[v]) : r >= y.slidesGrid[v] && (_ = v, w = y.slidesGrid[y.slidesGrid.length - 1] - y.slidesGrid[y.slidesGrid.length - 2]);
            }var T = (r - y.slidesGrid[_]) / w;if (i > y.params.longSwipesMs) {
              if (!y.params.longSwipes) return void y.slideTo(y.activeIndex);"next" === y.swipeDirection && (T >= y.params.longSwipesRatio ? y.slideTo(_ + y.params.slidesPerGroup) : y.slideTo(_)), "prev" === y.swipeDirection && (T > 1 - y.params.longSwipesRatio ? y.slideTo(_ + y.params.slidesPerGroup) : y.slideTo(_));
            } else {
              if (!y.params.shortSwipes) return void y.slideTo(y.activeIndex);"next" === y.swipeDirection && y.slideTo(_ + y.params.slidesPerGroup), "prev" === y.swipeDirection && y.slideTo(_);
            }
          }
        }, y._slideTo = function (e, t) {
          return y.slideTo(e, t, !0, !0);
        }, y.slideTo = function (e, t, n, i) {
          "undefined" == typeof n && (n = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), y.snapIndex = Math.floor(e / y.params.slidesPerGroup), y.snapIndex >= y.snapGrid.length && (y.snapIndex = y.snapGrid.length - 1);var r = -y.snapGrid[y.snapIndex];y.params.autoplay && y.autoplaying && (i || !y.params.autoplayDisableOnInteraction ? y.pauseAutoplay(t) : y.stopAutoplay()), y.updateProgress(r);for (var a = 0; a < y.slidesGrid.length; a++) {
            -Math.floor(100 * r) >= Math.floor(100 * y.slidesGrid[a]) && (e = a);
          }return !y.params.allowSwipeToNext && r < y.translate && r < y.minTranslate() ? !1 : !y.params.allowSwipeToPrev && r > y.translate && r > y.maxTranslate() && (y.activeIndex || 0) !== e ? !1 : ("undefined" == typeof t && (t = y.params.speed), y.previousIndex = y.activeIndex || 0, y.activeIndex = e, y.rtl && -r === y.translate || !y.rtl && r === y.translate ? (y.params.autoHeight && y.updateAutoHeight(), y.updateClasses(), "slide" !== y.params.effect && y.setWrapperTranslate(r), !1) : (y.updateClasses(), y.onTransitionStart(n), 0 === t ? (y.setWrapperTranslate(r), y.setWrapperTransition(0), y.onTransitionEnd(n)) : (y.setWrapperTranslate(r), y.setWrapperTransition(t), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function () {
            y && y.onTransitionEnd(n);
          }))), !0));
        }, y.onTransitionStart = function (e) {
          "undefined" == typeof e && (e = !0), y.params.autoHeight && y.updateAutoHeight(), y.lazy && y.lazy.onTransitionStart(), e && (y.emit("onTransitionStart", y), y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeStart", y), a.$emit("$ionicSlides.slideChangeStart", { slider: y, activeIndex: y.getSlideDataIndex(y.activeIndex), previousIndex: y.getSlideDataIndex(y.previousIndex) }), y.activeIndex > y.previousIndex ? y.emit("onSlideNextStart", y) : y.emit("onSlidePrevStart", y)));
        }, y.onTransitionEnd = function (e) {
          y.animating = !1, y.setWrapperTransition(0), "undefined" == typeof e && (e = !0), y.lazy && y.lazy.onTransitionEnd(), e && (y.emit("onTransitionEnd", y), y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeEnd", y), a.$emit("$ionicSlides.slideChangeEnd", { slider: y, activeIndex: y.getSlideDataIndex(y.activeIndex), previousIndex: y.getSlideDataIndex(y.previousIndex) }), y.activeIndex > y.previousIndex ? y.emit("onSlideNextEnd", y) : y.emit("onSlidePrevEnd", y))), y.params.hashnav && y.hashnav && y.hashnav.setHash();
        }, y.slideNext = function (e, t, n) {
          if (y.params.loop) {
            if (y.animating) return !1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex + y.params.slidesPerGroup, t, e, n);
          }return y.slideTo(y.activeIndex + y.params.slidesPerGroup, t, e, n);
        }, y._slideNext = function (e) {
          return y.slideNext(!0, e, !0);
        }, y.slidePrev = function (e, t, n) {
          if (y.params.loop) {
            if (y.animating) return !1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex - 1, t, e, n);
          }return y.slideTo(y.activeIndex - 1, t, e, n);
        }, y._slidePrev = function (e) {
          return y.slidePrev(!0, e, !0);
        }, y.slideReset = function (e, t, n) {
          return y.slideTo(y.activeIndex, t, e);
        }, y.setWrapperTransition = function (e, t) {
          y.wrapper.transition(e), "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTransition(e), y.params.parallax && y.parallax && y.parallax.setTransition(e), y.params.scrollbar && y.scrollbar && y.scrollbar.setTransition(e), y.params.control && y.controller && y.controller.setTransition(e, t), y.emit("onSetTransition", y, e);
        }, y.setWrapperTranslate = function (e, t, n) {
          var i = 0,
              r = 0,
              a = 0;s() ? i = y.rtl ? -e : e : r = e, y.params.roundLengths && (i = l(i), r = l(r)), y.params.virtualTranslate || (y.support.transforms3d ? y.wrapper.transform("translate3d(" + i + "px, " + r + "px, " + a + "px)") : y.wrapper.transform("translate(" + i + "px, " + r + "px)")), y.translate = s() ? i : r;var o,
              c = y.maxTranslate() - y.minTranslate();o = 0 === c ? 0 : (e - y.minTranslate()) / c, o !== y.progress && y.updateProgress(e), t && y.updateActiveIndex(), "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTranslate(y.translate), y.params.parallax && y.parallax && y.parallax.setTranslate(y.translate), y.params.scrollbar && y.scrollbar && y.scrollbar.setTranslate(y.translate), y.params.control && y.controller && y.controller.setTranslate(y.translate, n), y.emit("onSetTranslate", y, y.translate);
        }, y.getTranslate = function (e, t) {
          var n, i, r, a;return "undefined" == typeof t && (t = "x"), y.params.virtualTranslate ? y.rtl ? -y.translate : y.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function (e) {
            return e.replace(",", ".");
          }).join(", ")), a = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = window.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), y.rtl && i && (i = -i), i || 0);
        }, y.getWrapperTranslate = function (e) {
          return "undefined" == typeof e && (e = s() ? "x" : "y"), y.getTranslate(y.wrapper[0], e);
        }, y.observers = [], y.initObservers = function () {
          if (y.params.observeParents) for (var e = y.container.parents(), t = 0; t < e.length; t++) {
            u(e[t]);
          }u(y.container[0], { childList: !1 }), u(y.wrapper[0], { attributes: !1 });
        }, y.disconnectObservers = function () {
          for (var e = 0; e < y.observers.length; e++) {
            y.observers[e].disconnect();
          }y.observers = [];
        }, y.updateLoop = function () {
          var e = y.slides.eq(y.activeIndex);if (angular.element(e).hasClass(y.params.slideDuplicateClass)) {
            for (var t = angular.element(e).attr("data-swiper-slide-index"), n = y.wrapper.children("." + y.params.slideClass), i = 0; i < n.length; i++) {
              if (!angular.element(n[i]).hasClass(y.params.slideDuplicateClass) && angular.element(n[i]).attr("data-swiper-slide-index") === t) {
                y.slideTo(i, 0, !1, !0);break;
              }
            }setTimeout(function () {
              y.createLoop();
            }, 50);
          }
        }, y.getSlideDataIndex = function (e) {
          var t = y.slides.eq(e),
              n = angular.element(t).attr("data-swiper-slide-index");return parseInt(n);
        }, y.createLoop = function () {
          y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove();var e = y.wrapper.children("." + y.params.slideClass);"auto" !== y.params.slidesPerView || y.params.loopedSlides || (y.params.loopedSlides = e.length), y.loopedSlides = parseInt(y.params.loopedSlides || y.params.slidesPerView, 10), y.loopedSlides = y.loopedSlides + y.params.loopAdditionalSlides, y.loopedSlides > e.length && (y.loopedSlides = e.length);var n,
              i,
              r,
              a = [],
              s = [];for (e.each(function (n, i) {
            var r = t(this);n < y.loopedSlides && s.push(i), n < e.length && n >= e.length - y.loopedSlides && a.push(i), r.attr("data-swiper-slide-index", n);
          }), n = 0; n < s.length; n++) {
            r = angular.element(s[n]).clone().addClass(y.params.slideDuplicateClass), r.removeAttr("ng-transclude"), r.removeAttr("ng-repeat"), i = angular.element(s[n]).scope(), r = o(r)(i), angular.element(y.wrapper).append(r);
          }for (n = a.length - 1; n >= 0; n--) {
            r = angular.element(a[n]).clone().addClass(y.params.slideDuplicateClass), r.removeAttr("ng-transclude"), r.removeAttr("ng-repeat"), i = angular.element(a[n]).scope(), r = o(r)(i), angular.element(y.wrapper).prepend(r);
          }
        }, y.destroyLoop = function () {
          y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove(), y.slides.removeAttr("data-swiper-slide-index");
        }, y.fixLoop = function () {
          var e;y.activeIndex < y.loopedSlides ? (e = y.slides.length - 3 * y.loopedSlides + y.activeIndex, e += y.loopedSlides, y.slideTo(e, 0, !1, !0)) : ("auto" === y.params.slidesPerView && y.activeIndex >= 2 * y.loopedSlides || y.activeIndex > y.slides.length - 2 * y.params.slidesPerView) && (e = -y.slides.length + y.activeIndex + y.loopedSlides, e += y.loopedSlides, y.slideTo(e, 0, !1, !0));
        }, y.appendSlide = function (e) {
          if (y.params.loop && y.destroyLoop(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) for (var t = 0; t < e.length; t++) {
            e[t] && y.wrapper.append(e[t]);
          } else y.wrapper.append(e);y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0);
        }, y.prependSlide = function (e) {
          y.params.loop && y.destroyLoop();var t = y.activeIndex + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
            for (var n = 0; n < e.length; n++) {
              e[n] && y.wrapper.prepend(e[n]);
            }t = y.activeIndex + e.length;
          } else y.wrapper.prepend(e);y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0), y.slideTo(t, 0, !1);
        }, y.removeSlide = function (e) {
          y.params.loop && (y.destroyLoop(), y.slides = y.wrapper.children("." + y.params.slideClass));var t,
              n = y.activeIndex;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
            for (var i = 0; i < e.length; i++) {
              t = e[i], y.slides[t] && y.slides.eq(t).remove(), n > t && n--;
            }n = Math.max(n, 0);
          } else t = e, y.slides[t] && y.slides.eq(t).remove(), n > t && n--, n = Math.max(n, 0);y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0), y.params.loop ? y.slideTo(n + y.loopedSlides, 0, !1) : y.slideTo(n, 0, !1);
        }, y.removeAllSlides = function () {
          for (var e = [], t = 0; t < y.slides.length; t++) {
            e.push(t);
          }y.removeSlide(e);
        }, y.effects = { fade: { setTranslate: function setTranslate() {
              for (var e = 0; e < y.slides.length; e++) {
                var t = y.slides.eq(e),
                    n = t[0].swiperSlideOffset,
                    i = -n;y.params.virtualTranslate || (i -= y.translate);var r = 0;s() || (r = i, i = 0);var a = y.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);t.css({ opacity: a }).transform("translate3d(" + i + "px, " + r + "px, 0px)");
              }
            }, setTransition: function setTransition(e) {
              if (y.slides.transition(e), y.params.virtualTranslate && 0 !== e) {
                var t = !1;y.slides.transitionEnd(function () {
                  if (!t && y) {
                    t = !0, y.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) {
                      y.wrapper.trigger(e[n]);
                    }
                  }
                });
              }
            } }, cube: { setTranslate: function setTranslate() {
              var e,
                  n = 0;y.params.cube.shadow && (s() ? (e = y.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), y.wrapper.append(e)), e.css({ height: y.width + "px" })) : (e = y.container.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), y.container.append(e))));for (var i = 0; i < y.slides.length; i++) {
                var r = y.slides.eq(i),
                    a = 90 * i,
                    o = Math.floor(a / 360);y.rtl && (a = -a, o = Math.floor(-a / 360));var l = Math.max(Math.min(r[0].progress, 1), -1),
                    c = 0,
                    d = 0,
                    u = 0;i % 4 === 0 ? (c = 4 * -o * y.size, u = 0) : (i - 1) % 4 === 0 ? (c = 0, u = 4 * -o * y.size) : (i - 2) % 4 === 0 ? (c = y.size + 4 * o * y.size, u = y.size) : (i - 3) % 4 === 0 && (c = -y.size, u = 3 * y.size + 4 * y.size * o), y.rtl && (c = -c), s() || (d = c, c = 0);var p = "rotateX(" + (s() ? 0 : -a) + "deg) rotateY(" + (s() ? a : 0) + "deg) translate3d(" + c + "px, " + d + "px, " + u + "px)";if (1 >= l && l > -1 && (n = 90 * i + 90 * l, y.rtl && (n = 90 * -i - 90 * l)), r.transform(p), y.params.cube.slideShadows) {
                  var h = s() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                      f = s() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");0 === h.length && (h = t('<div class="swiper-slide-shadow-' + (s() ? "left" : "top") + '"></div>'), r.append(h)), 0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (s() ? "right" : "bottom") + '"></div>'), r.append(f));r[0].progress;h.length && (h[0].style.opacity = -r[0].progress), f.length && (f[0].style.opacity = r[0].progress);
                }
              }if (y.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + y.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + y.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + y.size / 2 + "px", "transform-origin": "50% 50% -" + y.size / 2 + "px" }), y.params.cube.shadow) if (s()) e.transform("translate3d(0px, " + (y.width / 2 + y.params.cube.shadowOffset) + "px, " + -y.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + y.params.cube.shadowScale + ")");else {
                var m = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
                    g = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
                    v = y.params.cube.shadowScale,
                    _ = y.params.cube.shadowScale / g,
                    w = y.params.cube.shadowOffset;e.transform("scale3d(" + v + ", 1, " + _ + ") translate3d(0px, " + (y.height / 2 + w) + "px, " + -y.height / 2 / _ + "px) rotateX(-90deg)");
              }var T = y.isSafari || y.isUiWebView ? -y.size / 2 : 0;y.wrapper.transform("translate3d(0px,0," + T + "px) rotateX(" + (s() ? 0 : n) + "deg) rotateY(" + (s() ? -n : 0) + "deg)");
            }, setTransition: function setTransition(e) {
              y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), y.params.cube.shadow && !s() && y.container.find(".swiper-cube-shadow").transition(e);
            } }, coverflow: { setTranslate: function setTranslate() {
              for (var e = y.translate, n = s() ? -e + y.width / 2 : -e + y.height / 2, i = s() ? y.params.coverflow.rotate : -y.params.coverflow.rotate, r = y.params.coverflow.depth, a = 0, o = y.slides.length; o > a; a++) {
                var l = y.slides.eq(a),
                    c = y.slidesSizesGrid[a],
                    d = l[0].swiperSlideOffset,
                    u = (n - d - c / 2) / c * y.params.coverflow.modifier,
                    p = s() ? i * u : 0,
                    h = s() ? 0 : i * u,
                    f = -r * Math.abs(u),
                    m = s() ? 0 : y.params.coverflow.stretch * u,
                    g = s() ? y.params.coverflow.stretch * u : 0;Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(f) < .001 && (f = 0), Math.abs(p) < .001 && (p = 0), Math.abs(h) < .001 && (h = 0);var v = "translate3d(" + g + "px," + m + "px," + f + "px)  rotateX(" + h + "deg) rotateY(" + p + "deg)";if (l.transform(v), l[0].style.zIndex = -Math.abs(Math.round(u)) + 1, y.params.coverflow.slideShadows) {
                  var _ = s() ? l.find(".swiper-slide-shadow-left") : l.find(".swiper-slide-shadow-top"),
                      w = s() ? l.find(".swiper-slide-shadow-right") : l.find(".swiper-slide-shadow-bottom");0 === _.length && (_ = t('<div class="swiper-slide-shadow-' + (s() ? "left" : "top") + '"></div>'), l.append(_)), 0 === w.length && (w = t('<div class="swiper-slide-shadow-' + (s() ? "right" : "bottom") + '"></div>'), l.append(w)), _.length && (_[0].style.opacity = u > 0 ? u : 0), w.length && (w[0].style.opacity = -u > 0 ? -u : 0);
                }
              }if (y.browser.ie) {
                var T = y.wrapper[0].style;T.perspectiveOrigin = n + "px 50%";
              }
            }, setTransition: function setTransition(e) {
              y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            } } }, y.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(e, n) {
            if ("undefined" != typeof e && ("undefined" == typeof n && (n = !0), 0 !== y.slides.length)) {
              var i = y.slides.eq(e),
                  r = i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!i.hasClass("swiper-lazy") || i.hasClass("swiper-lazy-loaded") || i.hasClass("swiper-lazy-loading") || (r = r.add(i[0])), 0 !== r.length && r.each(function () {
                var e = t(this);e.addClass("swiper-lazy-loading");var r = e.attr("data-background"),
                    a = e.attr("data-src"),
                    o = e.attr("data-srcset");y.loadImage(e[0], a || r, o, !1, function () {
                  if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (o && (e.attr("srcset", o), e.removeAttr("data-srcset")), a && (e.attr("src", a), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), i.find(".swiper-lazy-preloader, .preloader").remove(), y.params.loop && n) {
                    var t = i.attr("data-swiper-slide-index");if (i.hasClass(y.params.slideDuplicateClass)) {
                      var s = y.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + y.params.slideDuplicateClass + ")");y.lazy.loadImageInSlide(s.index(), !1);
                    } else {
                      var l = y.wrapper.children("." + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');y.lazy.loadImageInSlide(l.index(), !1);
                    }
                  }y.emit("onLazyImageReady", y, i[0], e[0]);
                }), y.emit("onLazyImageLoad", y, i[0], e[0]);
              });
            }
          }, load: function load() {
            var e;if (y.params.watchSlidesVisibility) y.wrapper.children("." + y.params.slideVisibleClass).each(function () {
              y.lazy.loadImageInSlide(t(this).index());
            });else if (y.params.slidesPerView > 1) for (e = y.activeIndex; e < y.activeIndex + y.params.slidesPerView; e++) {
              y.slides[e] && y.lazy.loadImageInSlide(e);
            } else y.lazy.loadImageInSlide(y.activeIndex);if (y.params.lazyLoadingInPrevNext) if (y.params.slidesPerView > 1) {
              for (e = y.activeIndex + y.params.slidesPerView; e < y.activeIndex + y.params.slidesPerView + y.params.slidesPerView; e++) {
                y.slides[e] && y.lazy.loadImageInSlide(e);
              }for (e = y.activeIndex - y.params.slidesPerView; e < y.activeIndex; e++) {
                y.slides[e] && y.lazy.loadImageInSlide(e);
              }
            } else {
              var n = y.wrapper.children("." + y.params.slideNextClass);n.length > 0 && y.lazy.loadImageInSlide(n.index());var i = y.wrapper.children("." + y.params.slidePrevClass);i.length > 0 && y.lazy.loadImageInSlide(i.index());
            }
          }, onTransitionStart: function onTransitionStart() {
            y.params.lazyLoading && (y.params.lazyLoadingOnTransitionStart || !y.params.lazyLoadingOnTransitionStart && !y.lazy.initialImageLoaded) && y.lazy.load();
          }, onTransitionEnd: function onTransitionEnd() {
            y.params.lazyLoading && !y.params.lazyLoadingOnTransitionStart && y.lazy.load();
          } }, y.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(e) {
            var t = y.scrollbar,
                n = s() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                i = n - t.track.offset()[s() ? "left" : "top"] - t.dragSize / 2,
                r = -y.minTranslate() * t.moveDivider,
                a = -y.maxTranslate() * t.moveDivider;r > i ? i = r : i > a && (i = a), i = -i / t.moveDivider, y.updateProgress(i), y.setWrapperTranslate(i, !0);
          }, dragStart: function dragStart(e) {
            var t = y.scrollbar;t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), y.params.scrollbarHide && t.track.css("opacity", 1), y.wrapper.transition(100), t.drag.transition(100), y.emit("onScrollbarDragStart", y);
          }, dragMove: function dragMove(e) {
            var t = y.scrollbar;t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), y.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), y.emit("onScrollbarDragMove", y));
          }, dragEnd: function dragEnd(e) {
            var t = y.scrollbar;t.isTouched && (t.isTouched = !1, y.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function () {
              t.track.css("opacity", 0), t.track.transition(400);
            }, 1e3)), y.emit("onScrollbarDragEnd", y), y.params.scrollbarSnapOnRelease && y.slideReset());
          }, enableDraggable: function enableDraggable() {
            var e = y.scrollbar,
                n = y.support.touch ? e.track : document;t(e.track).on(y.touchEvents.start, e.dragStart), t(n).on(y.touchEvents.move, e.dragMove), t(n).on(y.touchEvents.end, e.dragEnd);
          }, disableDraggable: function disableDraggable() {
            var e = y.scrollbar,
                n = y.support.touch ? e.track : document;t(e.track).off(y.touchEvents.start, e.dragStart), t(n).off(y.touchEvents.move, e.dragMove), t(n).off(y.touchEvents.end, e.dragEnd);
          }, set: function set() {
            if (y.params.scrollbar) {
              var e = y.scrollbar;e.track = t(y.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = s() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = y.size / y.virtualSize, e.moveDivider = e.divider * (e.trackSize / y.size), e.dragSize = e.trackSize * e.divider, s() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", y.params.scrollbarHide && (e.track[0].style.opacity = 0);
            }
          }, setTranslate: function setTranslate() {
            if (y.params.scrollbar) {
              var e,
                  t = y.scrollbar,
                  n = (y.translate || 0, t.dragSize);e = (t.trackSize - t.dragSize) * y.progress, y.rtl && s() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e), s() ? (y.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = n + "px") : (y.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = n + "px"), y.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function () {
                t.track[0].style.opacity = 0, t.track.transition(400);
              }, 1e3));
            }
          }, setTransition: function setTransition(e) {
            y.params.scrollbar && y.scrollbar.drag.transition(e);
          } }, y.controller = { LinearSpline: function LinearSpline(e, t) {
            this.x = e, this.y = t, this.lastIndex = e.length - 1;var n, i;this.x.length;this.interpolate = function (e) {
              return e ? (i = r(this.x, e), n = i - 1, (e - this.x[n]) * (this.y[i] - this.y[n]) / (this.x[i] - this.x[n]) + this.y[n]) : 0;
            };var r = function () {
              var e, t, n;return function (i, r) {
                for (t = -1, e = i.length; e - t > 1;) {
                  i[n = e + t >> 1] <= r ? t = n : e = n;
                }return e;
              };
            }();
          }, getInterpolateFunction: function getInterpolateFunction(e) {
            y.controller.spline || (y.controller.spline = y.params.loop ? new y.controller.LinearSpline(y.slidesGrid, e.slidesGrid) : new y.controller.LinearSpline(y.snapGrid, e.snapGrid));
          }, setTranslate: function setTranslate(e, t) {
            function i(t) {
              e = t.rtl && "horizontal" === t.params.direction ? -y.translate : y.translate, "slide" === y.params.controlBy && (y.controller.getInterpolateFunction(t), a = -y.controller.spline.interpolate(-e)), a && "container" !== y.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (y.maxTranslate() - y.minTranslate()), a = (e - y.minTranslate()) * r + t.minTranslate()), y.params.controlInverse && (a = t.maxTranslate() - a), t.updateProgress(a), t.setWrapperTranslate(a, !1, y), t.updateActiveIndex();
            }var r,
                a,
                o = y.params.control;if (y.isArray(o)) for (var s = 0; s < o.length; s++) {
              o[s] !== t && o[s] instanceof n && i(o[s]);
            } else o instanceof n && t !== o && i(o);
          }, setTransition: function setTransition(e, t) {
            function i(t) {
              t.setWrapperTransition(e, y), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function () {
                a && (t.params.loop && "slide" === y.params.controlBy && t.fixLoop(), t.onTransitionEnd());
              }));
            }var r,
                a = y.params.control;if (y.isArray(a)) for (r = 0; r < a.length; r++) {
              a[r] !== t && a[r] instanceof n && i(a[r]);
            } else a instanceof n && t !== a && i(a);
          } }, y.hashnav = { init: function init() {
            if (y.params.hashnav) {
              y.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) for (var t = 0, n = 0, i = y.slides.length; i > n; n++) {
                var r = y.slides.eq(n),
                    a = r.attr("data-hash");if (a === e && !r.hasClass(y.params.slideDuplicateClass)) {
                  var o = r.index();y.slideTo(o, t, y.params.runCallbacksOnInit, !0);
                }
              }
            }
          }, setHash: function setHash() {
            y.hashnav.initialized && y.params.hashnav && (document.location.hash = y.slides.eq(y.activeIndex).attr("data-hash") || "");
          } }, y.disableKeyboardControl = function () {
          y.params.keyboardControl = !1, t(document).off("keydown", p);
        }, y.enableKeyboardControl = function () {
          y.params.keyboardControl = !0, t(document).on("keydown", p);
        }, y.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, y.params.mousewheelControl) {
          try {
            new window.WheelEvent("wheel"), y.mousewheel.event = "wheel";
          } catch (H) {}y.mousewheel.event || void 0 === document.onmousewheel || (y.mousewheel.event = "mousewheel"), y.mousewheel.event || (y.mousewheel.event = "DOMMouseScroll");
        }y.disableMousewheelControl = function () {
          return y.mousewheel.event ? (y.container.off(y.mousewheel.event, h), !0) : !1;
        }, y.enableMousewheelControl = function () {
          return y.mousewheel.event ? (y.container.on(y.mousewheel.event, h), !0) : !1;
        }, y.parallax = { setTranslate: function setTranslate() {
            y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              f(this, y.progress);
            }), y.slides.each(function () {
              var e = t(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
                var t = Math.min(Math.max(e[0].progress, -1), 1);f(this, t);
              });
            });
          }, setTransition: function setTransition(e) {
            "undefined" == typeof e && (e = y.params.speed), y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var n = t(this),
                  i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (i = 0), n.transition(i);
            });
          } }, y._plugins = [];for (var Y in y.plugins) {
          var X = y.plugins[Y](y, y.params[Y]);X && y._plugins.push(X);
        }return y.callPlugins = function (e) {
          for (var t = 0; t < y._plugins.length; t++) {
            e in y._plugins[t] && y._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }
        }, y.emitterEventListeners = {}, y.emit = function (e) {
          y.params[e] && y.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var t;if (y.emitterEventListeners[e]) for (t = 0; t < y.emitterEventListeners[e].length; t++) {
            y.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
          }y.callPlugins && y.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }, y.on = function (e, t) {
          return e = m(e), y.emitterEventListeners[e] || (y.emitterEventListeners[e] = []), y.emitterEventListeners[e].push(t), y;
        }, y.off = function (e, t) {
          var n;if (e = m(e), "undefined" == typeof t) return y.emitterEventListeners[e] = [], y;if (y.emitterEventListeners[e] && 0 !== y.emitterEventListeners[e].length) {
            for (n = 0; n < y.emitterEventListeners[e].length; n++) {
              y.emitterEventListeners[e][n] === t && y.emitterEventListeners[e].splice(n, 1);
            }return y;
          }
        }, y.once = function (e, t) {
          e = m(e);var n = function n() {
            t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), y.off(e, n);
          };return y.on(e, n), y;
        }, y.a11y = { makeFocusable: function makeFocusable(e) {
            return e.attr("tabIndex", "0"), e;
          }, addRole: function addRole(e, t) {
            return e.attr("role", t), e;
          }, addLabel: function addLabel(e, t) {
            return e.attr("aria-label", t), e;
          }, disable: function disable(e) {
            return e.attr("aria-disabled", !0), e;
          }, enable: function enable(e) {
            return e.attr("aria-disabled", !1), e;
          }, onEnterKey: function onEnterKey(e) {
            13 === e.keyCode && (t(e.target).is(y.params.nextButton) ? (y.onClickNext(e), y.isEnd ? y.a11y.notify(y.params.lastSlideMessage) : y.a11y.notify(y.params.nextSlideMessage)) : t(e.target).is(y.params.prevButton) && (y.onClickPrev(e), y.isBeginning ? y.a11y.notify(y.params.firstSlideMessage) : y.a11y.notify(y.params.prevSlideMessage)), t(e.target).is("." + y.params.bulletClass) && t(e.target)[0].click());
          }, liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(e) {
            var t = y.a11y.liveRegion;0 !== t.length && (t.html(""), t.html(e));
          }, init: function init() {
            if (y.params.nextButton) {
              var e = t(y.params.nextButton);y.a11y.makeFocusable(e), y.a11y.addRole(e, "button"), y.a11y.addLabel(e, y.params.nextSlideMessage);
            }if (y.params.prevButton) {
              var n = t(y.params.prevButton);y.a11y.makeFocusable(n), y.a11y.addRole(n, "button"), y.a11y.addLabel(n, y.params.prevSlideMessage);
            }t(y.container).append(y.a11y.liveRegion);
          }, initPagination: function initPagination() {
            y.params.pagination && y.params.paginationClickable && y.bullets && y.bullets.length && y.bullets.each(function () {
              var e = t(this);y.a11y.makeFocusable(e), y.a11y.addRole(e, "button"), y.a11y.addLabel(e, y.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
            });
          }, destroy: function destroy() {
            y.a11y.liveRegion && y.a11y.liveRegion.length > 0 && y.a11y.liveRegion.remove();
          } }, y.init = function () {
          y.params.loop && y.createLoop(), y.updateContainerSize(), y.updateSlidesSize(), y.updatePagination(), y.params.scrollbar && y.scrollbar && (y.scrollbar.set(), y.params.scrollbarDraggable && y.scrollbar.enableDraggable()), "slide" !== y.params.effect && y.effects[y.params.effect] && (y.params.loop || y.updateProgress(), y.effects[y.params.effect].setTranslate()), y.params.loop ? y.slideTo(y.params.initialSlide + y.loopedSlides, 0, y.params.runCallbacksOnInit) : (y.slideTo(y.params.initialSlide, 0, y.params.runCallbacksOnInit), 0 === y.params.initialSlide && (y.parallax && y.params.parallax && y.parallax.setTranslate(), y.lazy && y.params.lazyLoading && (y.lazy.load(), y.lazy.initialImageLoaded = !0))), y.attachEvents(), y.params.observer && y.support.observer && y.initObservers(), y.params.preloadImages && !y.params.lazyLoading && y.preloadImages(), y.params.autoplay && y.startAutoplay(), y.params.keyboardControl && y.enableKeyboardControl && y.enableKeyboardControl(), y.params.mousewheelControl && y.enableMousewheelControl && y.enableMousewheelControl(), y.params.hashnav && y.hashnav && y.hashnav.init(), y.params.a11y && y.a11y && y.a11y.init(), y.emit("onInit", y);
        }, y.cleanupStyles = function () {
          y.container.removeClass(y.classNames.join(" ")).removeAttr("style"), y.wrapper.removeAttr("style"), y.slides && y.slides.length && y.slides.removeClass([y.params.slideVisibleClass, y.params.slideActiveClass, y.params.slideNextClass, y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), y.paginationContainer && y.paginationContainer.length && y.paginationContainer.removeClass(y.params.paginationHiddenClass), y.bullets && y.bullets.length && y.bullets.removeClass(y.params.bulletActiveClass), y.params.prevButton && t(y.params.prevButton).removeClass(y.params.buttonDisabledClass), y.params.nextButton && t(y.params.nextButton).removeClass(y.params.buttonDisabledClass), y.params.scrollbar && y.scrollbar && (y.scrollbar.track && y.scrollbar.track.length && y.scrollbar.track.removeAttr("style"), y.scrollbar.drag && y.scrollbar.drag.length && y.scrollbar.drag.removeAttr("style"));
        }, y.destroy = function (e, t) {
          y.detachEvents(), y.stopAutoplay(), y.params.scrollbar && y.scrollbar && y.params.scrollbarDraggable && y.scrollbar.disableDraggable(), y.params.loop && y.destroyLoop(), t && y.cleanupStyles(), y.disconnectObservers(), y.params.keyboardControl && y.disableKeyboardControl && y.disableKeyboardControl(), y.params.mousewheelControl && y.disableMousewheelControl && y.disableMousewheelControl(), y.params.a11y && y.a11y && y.a11y.destroy(), y.emit("onDestroy"), e !== !1 && (y = null);
        }, y.init(), y;
      }
    };n.prototype = { isSafari: function () {
        var e = navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
      }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function isArray(e) {
        return "[object Array]" === Object.prototype.toString.apply(e);
      }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1 }, device: function () {
        var e = navigator.userAgent,
            t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            n = e.match(/(iPad).*OS\s([\d_]+)/),
            i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            r = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);return { ios: n || r || i, android: t };
      }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
          return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
        }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
          var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
        }(), flexbox: function () {
          for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++) {
            if (t[n] in e) return !0;
          }
        }(), observer: function () {
          return "MutationObserver" in window || "WebkitMutationObserver" in window;
        }() }, plugins: {} };for (var i = function () {
      var e = function e(_e2) {
        var t = this,
            n = 0;for (n = 0; n < _e2.length; n++) {
          t[n] = _e2[n];
        }return t.length = _e2.length, this;
      },
          t = function t(_t, n) {
        var i = [],
            r = 0;if (_t && !n && _t instanceof e) return _t;if (_t) if ("string" == typeof _t) {
          var a,
              o,
              s = _t.trim();if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            var l = "div";for (0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), (0 === s.indexOf("<td") || 0 === s.indexOf("<th")) && (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select"), o = document.createElement(l), o.innerHTML = _t, r = 0; r < o.childNodes.length; r++) {
              i.push(o.childNodes[r]);
            }
          } else for (a = n || "#" !== _t[0] || _t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(_t) : [document.getElementById(_t.split("#")[1])], r = 0; r < a.length; r++) {
            a[r] && i.push(a[r]);
          }
        } else if (_t.nodeType || _t === window || _t === document) i.push(_t);else if (_t.length > 0 && _t[0].nodeType) for (r = 0; r < _t.length; r++) {
          i.push(_t[r]);
        }return new e(i);
      };return e.prototype = { addClass: function addClass(e) {
          if ("undefined" == typeof e) return this;for (var t = e.split(" "), n = 0; n < t.length; n++) {
            for (var i = 0; i < this.length; i++) {
              this[i].classList.add(t[n]);
            }
          }return this;
        }, removeClass: function removeClass(e) {
          for (var t = e.split(" "), n = 0; n < t.length; n++) {
            for (var i = 0; i < this.length; i++) {
              this[i].classList.remove(t[n]);
            }
          }return this;
        }, hasClass: function hasClass(e) {
          return this[0] ? this[0].classList.contains(e) : !1;
        }, toggleClass: function toggleClass(e) {
          for (var t = e.split(" "), n = 0; n < t.length; n++) {
            for (var i = 0; i < this.length; i++) {
              this[i].classList.toggle(t[n]);
            }
          }return this;
        }, attr: function attr(e, t) {
          if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var n = 0; n < this.length; n++) {
            if (2 === arguments.length) this[n].setAttribute(e, t);else for (var i in e) {
              this[n][i] = e[i], this[n].setAttribute(i, e[i]);
            }
          }return this;
        }, removeAttr: function removeAttr(e) {
          for (var t = 0; t < this.length; t++) {
            this[t].removeAttribute(e);
          }return this;
        }, data: function data(e, t) {
          if ("undefined" == typeof t) {
            if (this[0]) {
              var n = this[0].getAttribute("data-" + e);return n ? n : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0;
            }return void 0;
          }for (var i = 0; i < this.length; i++) {
            var r = this[i];r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = t;
          }return this;
        }, transform: function transform(e) {
          for (var t = 0; t < this.length; t++) {
            var n = this[t].style;n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e;
          }return this;
        }, transition: function transition(e) {
          "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t++) {
            var n = this[t].style;n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e;
          }return this;
        }, on: function on(e, n, i, r) {
          function a(e) {
            var r = e.target;if (t(r).is(n)) i.call(r, e);else for (var a = t(r).parents(), o = 0; o < a.length; o++) {
              t(a[o]).is(n) && i.call(a[o], e);
            }
          }var o,
              s,
              l = e.split(" ");for (o = 0; o < this.length; o++) {
            if ("function" == typeof n || n === !1) for ("function" == typeof n && (i = arguments[1], r = arguments[2] || !1), s = 0; s < l.length; s++) {
              this[o].addEventListener(l[s], i, r);
            } else for (s = 0; s < l.length; s++) {
              this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []), this[o].dom7LiveListeners.push({ listener: i, liveListener: a }), this[o].addEventListener(l[s], a, r);
            }
          }return this;
        }, off: function off(e, t, n, i) {
          for (var r = e.split(" "), a = 0; a < r.length; a++) {
            for (var o = 0; o < this.length; o++) {
              if ("function" == typeof t || t === !1) "function" == typeof t && (n = arguments[1], i = arguments[2] || !1), this[o].removeEventListener(r[a], n, i);else if (this[o].dom7LiveListeners) for (var s = 0; s < this[o].dom7LiveListeners.length; s++) {
                this[o].dom7LiveListeners[s].listener === n && this[o].removeEventListener(r[a], this[o].dom7LiveListeners[s].liveListener, i);
              }
            }
          }return this;
        }, once: function once(e, t, n, i) {
          function r(o) {
            n(o), a.off(e, t, r, i);
          }var a = this;"function" == typeof t && (t = !1, n = arguments[1], i = arguments[2]), a.on(e, t, r, i);
        }, trigger: function trigger(e, t) {
          for (var n = 0; n < this.length; n++) {
            var i;try {
              i = new window.CustomEvent(e, { detail: t, bubbles: !0, cancelable: !0 });
            } catch (r) {
              i = document.createEvent("Event"), i.initEvent(e, !0, !0), i.detail = t;
            }this[n].dispatchEvent(i);
          }return this;
        }, transitionEnd: function transitionEnd(e) {
          function t(a) {
            if (a.target === this) for (e.call(this, a), n = 0; n < i.length; n++) {
              r.off(i[n], t);
            }
          }var n,
              i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
              r = this;if (e) for (n = 0; n < i.length; n++) {
            r.on(i[n], t);
          }return this;
        }, width: function width() {
          return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
        }, outerWidth: function outerWidth(e) {
          return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
        }, height: function height() {
          return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
        }, outerHeight: function outerHeight(e) {
          return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
        }, offset: function offset() {
          if (this.length > 0) {
            var e = this[0],
                t = e.getBoundingClientRect(),
                n = document.body,
                i = e.clientTop || n.clientTop || 0,
                r = e.clientLeft || n.clientLeft || 0,
                a = window.pageYOffset || e.scrollTop,
                o = window.pageXOffset || e.scrollLeft;return { top: t.top + a - i, left: t.left + o - r };
          }return null;
        }, css: function css(e, t) {
          var n;if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (n = 0; n < this.length; n++) {
                for (var i in e) {
                  this[n].style[i] = e[i];
                }
              }return this;
            }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
          }if (2 === arguments.length && "string" == typeof e) {
            for (n = 0; n < this.length; n++) {
              this[n].style[e] = t;
            }return this;
          }return this;
        }, each: function each(e) {
          for (var t = 0; t < this.length; t++) {
            e.call(this[t], t, this[t]);
          }return this;
        }, html: function html(e) {
          if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;for (var t = 0; t < this.length; t++) {
            this[t].innerHTML = e;
          }return this;
        }, is: function is(n) {
          if (!this[0]) return !1;var i, r;if ("string" == typeof n) {
            var a = this[0];if (a === document) return n === document;if (a === window) return n === window;if (a.matches) return a.matches(n);if (a.webkitMatchesSelector) return a.webkitMatchesSelector(n);if (a.mozMatchesSelector) return a.mozMatchesSelector(n);if (a.msMatchesSelector) return a.msMatchesSelector(n);for (i = t(n), r = 0; r < i.length; r++) {
              if (i[r] === this[0]) return !0;
            }return !1;
          }if (n === document) return this[0] === document;if (n === window) return this[0] === window;if (n.nodeType || n instanceof e) {
            for (i = n.nodeType ? [n] : n, r = 0; r < i.length; r++) {
              if (i[r] === this[0]) return !0;
            }return !1;
          }return !1;
        }, index: function index() {
          if (this[0]) {
            for (var e = this[0], t = 0; null !== (e = e.previousSibling);) {
              1 === e.nodeType && t++;
            }return t;
          }return void 0;
        }, eq: function eq(t) {
          if ("undefined" == typeof t) return this;var n,
              i = this.length;return t > i - 1 ? new e([]) : 0 > t ? (n = i + t, new e(0 > n ? [] : [this[n]])) : new e([this[t]]);
        }, append: function append(t) {
          var n, i;for (n = 0; n < this.length; n++) {
            if ("string" == typeof t) {
              var r = document.createElement("div");for (r.innerHTML = t; r.firstChild;) {
                this[n].appendChild(r.firstChild);
              }
            } else if (t instanceof e) for (i = 0; i < t.length; i++) {
              this[n].appendChild(t[i]);
            } else this[n].appendChild(t);
          }return this;
        }, prepend: function prepend(t) {
          var n, i;for (n = 0; n < this.length; n++) {
            if ("string" == typeof t) {
              var r = document.createElement("div");for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i--) {
                this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
              }
            } else if (t instanceof e) for (i = 0; i < t.length; i++) {
              this[n].insertBefore(t[i], this[n].childNodes[0]);
            } else this[n].insertBefore(t, this[n].childNodes[0]);
          }return this;
        }, insertBefore: function insertBefore(e) {
          for (var n = t(e), i = 0; i < this.length; i++) {
            if (1 === n.length) n[0].parentNode.insertBefore(this[i], n[0]);else if (n.length > 1) for (var r = 0; r < n.length; r++) {
              n[r].parentNode.insertBefore(this[i].cloneNode(!0), n[r]);
            }
          }
        }, insertAfter: function insertAfter(e) {
          for (var n = t(e), i = 0; i < this.length; i++) {
            if (1 === n.length) n[0].parentNode.insertBefore(this[i], n[0].nextSibling);else if (n.length > 1) for (var r = 0; r < n.length; r++) {
              n[r].parentNode.insertBefore(this[i].cloneNode(!0), n[r].nextSibling);
            }
          }
        }, next: function next(n) {
          return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
        }, nextAll: function nextAll(n) {
          var i = [],
              r = this[0];if (!r) return new e([]);for (; r.nextElementSibling;) {
            var a = r.nextElementSibling;n ? t(a).is(n) && i.push(a) : i.push(a), r = a;
          }return new e(i);
        }, prev: function prev(n) {
          return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
        }, prevAll: function prevAll(n) {
          var i = [],
              r = this[0];if (!r) return new e([]);for (; r.previousElementSibling;) {
            var a = r.previousElementSibling;n ? t(a).is(n) && i.push(a) : i.push(a), r = a;
          }return new e(i);
        }, parent: function parent(e) {
          for (var n = [], i = 0; i < this.length; i++) {
            e ? t(this[i].parentNode).is(e) && n.push(this[i].parentNode) : n.push(this[i].parentNode);
          }return t(t.unique(n));
        }, parents: function parents(e) {
          for (var n = [], i = 0; i < this.length; i++) {
            for (var r = this[i].parentNode; r;) {
              e ? t(r).is(e) && n.push(r) : n.push(r), r = r.parentNode;
            }
          }return t(t.unique(n));
        }, find: function find(t) {
          for (var n = [], i = 0; i < this.length; i++) {
            for (var r = this[i].querySelectorAll(t), a = 0; a < r.length; a++) {
              n.push(r[a]);
            }
          }return new e(n);
        }, children: function children(n) {
          for (var i = [], r = 0; r < this.length; r++) {
            for (var a = this[r].childNodes, o = 0; o < a.length; o++) {
              n ? 1 === a[o].nodeType && t(a[o]).is(n) && i.push(a[o]) : 1 === a[o].nodeType && i.push(a[o]);
            }
          }return new e(t.unique(i));
        }, remove: function remove() {
          for (var e = 0; e < this.length; e++) {
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          }return this;
        }, add: function add() {
          var e,
              n,
              i = this;for (e = 0; e < arguments.length; e++) {
            var r = t(arguments[e]);for (n = 0; n < r.length; n++) {
              i[i.length] = r[n], i.length++;
            }
          }return i;
        } }, t.fn = e.prototype, t.unique = function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        }return t;
      }, t;
    }(), r = ["jQuery", "Zepto", "Dom7"], a = 0; a < r.length; a++) {
      window[r[a]] && e(window[r[a]]);
    }var o;o = "undefined" == typeof i ? window.Dom7 || window.Zepto || __webpack_provided_window_dot_jQuery : i, o && ("transitionEnd" in o.fn || (o.fn.transitionEnd = function (e) {
      function t(a) {
        if (a.target === this) for (e.call(this, a), n = 0; n < i.length; n++) {
          r.off(i[n], t);
        }
      }var n,
          i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
          r = this;if (e) for (n = 0; n < i.length; n++) {
        r.on(i[n], t);
      }return this;
    }), "transform" in o.fn || (o.fn.transform = function (e) {
      for (var t = 0; t < this.length; t++) {
        var n = this[t].style;n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e;
      }return this;
    }), "transition" in o.fn || (o.fn.transition = function (e) {
      "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t++) {
        var n = this[t].style;n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e;
      }return this;
    })), ionic.views.Swiper = n;
  }(), function (e) {
    "use strict";
    e.views.Toggle = e.views.View.inherit({ initialize: function initialize(t) {
        var n = this;this.el = t.el, this.checkbox = t.checkbox, this.track = t.track, this.handle = t.handle, this.openPercent = -1, this.onChange = t.onChange || function () {}, this.triggerThreshold = t.triggerThreshold || 20, this.dragStartHandler = function (e) {
          n.dragStart(e);
        }, this.dragHandler = function (e) {
          n.drag(e);
        }, this.holdHandler = function (e) {
          n.hold(e);
        }, this.releaseHandler = function (e) {
          n.release(e);
        }, this.dragStartGesture = e.onGesture("dragstart", this.dragStartHandler, this.el), this.dragGesture = e.onGesture("drag", this.dragHandler, this.el), this.dragHoldGesture = e.onGesture("hold", this.holdHandler, this.el), this.dragReleaseGesture = e.onGesture("release", this.releaseHandler, this.el);
      }, destroy: function destroy() {
        e.offGesture(this.dragStartGesture, "dragstart", this.dragStartGesture), e.offGesture(this.dragGesture, "drag", this.dragGesture), e.offGesture(this.dragHoldGesture, "hold", this.holdHandler), e.offGesture(this.dragReleaseGesture, "release", this.releaseHandler);
      }, tap: function tap() {
        "disabled" !== this.el.getAttribute("disabled") && this.val(!this.checkbox.checked);
      }, dragStart: function dragStart(e) {
        this.checkbox.disabled || (this._dragInfo = { width: this.el.offsetWidth, left: this.el.offsetLeft, right: this.el.offsetLeft + this.el.offsetWidth, triggerX: this.el.offsetWidth / 2, initialState: this.checkbox.checked }, e.gesture.srcEvent.preventDefault(), this.hold(e));
      }, drag: function drag(t) {
        var n = this;this._dragInfo && (t.gesture.srcEvent.preventDefault(), e.requestAnimationFrame(function () {
          if (n._dragInfo) {
            var e = t.gesture.touches[0].pageX - n._dragInfo.left,
                i = n._dragInfo.width - n.triggerThreshold;n._dragInfo.initialState ? e < n.triggerThreshold ? n.setOpenPercent(0) : e > n._dragInfo.triggerX && n.setOpenPercent(100) : e < n._dragInfo.triggerX ? n.setOpenPercent(0) : e > i && n.setOpenPercent(100);
          }
        }));
      }, endDrag: function endDrag() {
        this._dragInfo = null;
      }, hold: function hold() {
        this.el.classList.add("dragging");
      }, release: function release(e) {
        this.el.classList.remove("dragging"), this.endDrag(e);
      }, setOpenPercent: function setOpenPercent(t) {
        if (this.openPercent < 0 || t < this.openPercent - 3 || t > this.openPercent + 3) if (this.openPercent = t, 0 === t) this.val(!1);else if (100 === t) this.val(!0);else {
          var n = Math.round(t / 100 * this.track.offsetWidth - this.handle.offsetWidth);n = 1 > n ? 0 : n, this.handle.style[e.CSS.TRANSFORM] = "translate3d(" + n + "px,0,0)";
        }
      }, val: function val(t) {
        return (t === !0 || t === !1) && ("" !== this.handle.style[e.CSS.TRANSFORM] && (this.handle.style[e.CSS.TRANSFORM] = ""), this.checkbox.checked = t, this.openPercent = t ? 100 : 0, this.onChange && this.onChange()), this.checkbox.checked;
      } });
  }(ionic);
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(1)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Copyright 2015 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.3.5
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function () {
  function e(e, t, n, i, o, r) {
    function a(i, a, c, s, u) {
      function d() {
        N.resizeRequiresRefresh(b.__clientWidth, b.__clientHeight) && g();
      }function f() {
        var e;return e = { dataLength: 0, width: 0, height: 0, resizeRequiresRefresh: function resizeRequiresRefresh(t, n) {
            var i = e.dataLength && t && n && (t !== e.width || n !== e.height);return e.width = t, e.height = n, !!i;
          }, dataChangeRequiresRefresh: function dataChangeRequiresRefresh(t) {
            var n = t.length > 0 || t.length < e.dataLength;return e.dataLength = t.length, !!n;
          } };
      }function h() {
        return T || (T = new e({ afterItemsNode: M[0], containerNode: S, heightData: A, widthData: V, forceRefreshImages: !(!l(c.forceRefreshImages) || "false" === c.forceRefreshImages), keyExpression: I, renderBuffer: D, scope: i, scrollView: s.scrollView, transclude: u }));
      }function p() {
        var e = angular.element(b.__content.querySelector(".collection-repeat-after-container"));if (!e.length) {
          var t = !1,
              n = [].filter.call(b.__content.childNodes, function (e) {
            return ionic.DomUtil.contains(e, S) ? (t = !0, !1) : t;
          });e = angular.element('<span class="collection-repeat-after-container">'), b.options.scrollingX && e.addClass("horizontal"), e.append(n), b.__content.appendChild(e[0]);
        }return e;
      }function v() {
        L ? m(L, A) : A.computed = !0, R ? m(R, V) : V.computed = !0;
      }function g() {
        var e = P.length > 0;if (e && (A.computed || V.computed) && w(), e && A.computed) {
          if (A.value = E.height, !A.value) throw new Error('collection-repeat tried to compute the height of repeated elements "' + k + '", but was unable to. Please provide the "item-height" attribute. http://ionicframework.com/docs/api/directive/collectionRepeat/');
        } else !A.dynamic && A.getValue && (A.value = A.getValue());if (e && V.computed) {
          if (V.value = E.width, !V.value) throw new Error('collection-repeat tried to compute the width of repeated elements "' + k + '", but was unable to. Please provide the "item-width" attribute. http://ionicframework.com/docs/api/directive/collectionRepeat/');
        } else !V.dynamic && V.getValue && (V.value = V.getValue());h().refreshLayout();
      }function m(e, n) {
        if (e) {
          var i;try {
            i = t(e);
          } catch (o) {
            e.trim().match(/\d+(px|%)$/) && (e = '"' + e + '"'), i = t(e);
          }var r = e.replace(/(\'|\"|px|%)/g, "").trim(),
              a = r.length && !/([a-zA-Z]|\$|:|\?)/.test(r);if (n.attrValue = e, a) {
            if (e.indexOf("%") > -1) {
              var c = parseFloat(i()) / 100;n.getValue = n === A ? function () {
                return Math.floor(c * b.__clientHeight);
              } : function () {
                return Math.floor(c * b.__clientWidth);
              };
            } else n.value = parseInt(i());
          } else n.dynamic = !0, n.getValue = n === A ? function (e, t) {
            var n = i(e, t);return n.charAt && "%" === n.charAt(n.length - 1) ? Math.floor(parseFloat(n) / 100 * b.__clientHeight) : parseInt(n);
          } : function (e, t) {
            var n = i(e, t);return n.charAt && "%" === n.charAt(n.length - 1) ? Math.floor(parseFloat(n) / 100 * b.__clientWidth) : parseInt(n);
          };
        }
      }function w() {
        O || u(H = i.$new(), function (e) {
          e[0].removeAttribute("collection-repeat"), O = e[0];
        }), H[I] = (x(i) || [])[0], o.$$phase || H.$digest(), S.appendChild(O);var e = n.getComputedStyle(O);E.width = parseInt(e.width), E.height = parseInt(e.height), S.removeChild(O);
      }var b = s.scrollView,
          y = a[0],
          S = angular.element('<div class="collection-repeat-container">')[0];if (y.parentNode.replaceChild(S, y), b.options.scrollingX && b.options.scrollingY) throw new Error("collection-repeat expected a parent x or y scrollView, not an xy scrollView.");var k = c.collectionRepeat,
          C = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!C) throw new Error("collection-repeat expected expression in form of '_item_ in _collection_[ track by _id_]' but got '" + c.collectionRepeat + "'.");var T,
          I = C[1],
          B = C[2],
          x = t(B),
          A = {},
          V = {},
          E = {},
          P = [],
          _ = c.itemRenderBuffer || c.collectionBufferSize,
          D = angular.isDefined(_) ? parseInt(_) : $,
          L = c.itemHeight || c.collectionItemHeight,
          R = c.itemWidth || c.collectionItemWidth,
          M = p(),
          N = f();v(), s.$element.on("scroll-resize", g), angular.element(n).on("resize", d);var z = o.$on("$ionicExposeAside", ionic.animationFrameThrottle(function () {
        s.scrollView.resize(), d();
      }));r(g, 0, !1), i.$watchCollection(x, function (e) {
        if (P = e || (e = []), !angular.isArray(e)) throw new Error("collection-repeat expected an array for '" + B + "', but got a " + (typeof value === "undefined" ? "undefined" : _typeof(value)));i.$$postDigest(function () {
          h().setData(P), N.dataChangeRequiresRefresh(P) && g();
        });
      }), i.$on("$destroy", function () {
        angular.element(n).off("resize", d), z(), s.$element && s.$element.off("scroll-resize", g), O && O.parentNode && O.parentNode.removeChild(O), H && H.$destroy(), H = O = null, T && T.destroy(), T = null;
      });var O, H;
    }return { restrict: "A", priority: 1e3, transclude: "element", $$tlb: !0, require: "^^$ionicScroll", link: a };
  }function t(e, t, n) {
    var i = { primaryPos: 0, secondaryPos: 0, primarySize: 0, secondarySize: 0, rowPrimarySize: 0 };return function (o) {
      function r() {
        return a(!0);
      }function a(t) {
        if (!a.destroyed) {
          var n,
              o,
              r,
              l,
              u,
              d = ee.getScrollValue(),
              f = d + ee.scrollPrimarySize;ee.updateRenderRange(d, f), F = Math.max(0, F - T), W = Math.min(A.length - 1, W + T);for (n in Z) {
            (F > n || n > W) && (r = Z[n], delete Z[n], G.push(r), r.isShown = !1);
          }for (n = F; W >= n; n++) {
            n >= A.length || Z[n] && !t || (r = Z[n] || (Z[n] = G.length ? G.pop() : j.length ? j.shift() : new s()), K.push(r), r.isShown = !0, u = r.scope, u.$index = n, u[C] = A[n], u.$first = 0 === n, u.$last = n === A.length - 1, u.$middle = !(u.$first || u.$last), u.$odd = !(u.$even = 0 === (1 & n)), u.$$disconnected && ionic.Utils.reconnectScope(r.scope), l = ee.getDimensions(n), (r.secondaryPos !== l.secondaryPos || r.primaryPos !== l.primaryPos) && (r.node.style[ionic.CSS.TRANSFORM] = O.replace(N, r.primaryPos = l.primaryPos).replace(z, r.secondaryPos = l.secondaryPos)), (r.secondarySize !== l.secondarySize || r.primarySize !== l.primarySize) && (r.node.style.cssText = r.node.style.cssText.replace(m, H.replace(N, (r.primarySize = l.primarySize) + 1).replace(z, r.secondarySize = l.secondarySize))));
          }for (W === A.length - 1 && (l = ee.getDimensions(A.length - 1) || i, w.style[ionic.CSS.TRANSFORM] = O.replace(N, l.primaryPos + l.primarySize).replace(z, 0)); G.length;) {
            r = G.pop(), r.scope.$broadcast("$collectionRepeatLeave"), ionic.Utils.disconnectScope(r.scope), j.push(r), r.node.style[ionic.CSS.TRANSFORM] = "translate3d(-9999px,-9999px,0)", r.primaryPos = r.secondaryPos = null;
          }if (y) for (n = 0, o = K.length; o > n && (r = K[n]); n++) {
            if (r.images) for (var h, p = 0, v = r.images.length; v > p && (h = r.images[p]); p++) {
              var $ = h.src;h.src = g, h.src = $;
            }
          }if (t) for (var b = e.$$phase; K.length;) {
            r = K.pop(), b || r.scope.$digest();
          } else c();
        }
      }function c() {
        var t;c.running || (c.running = !0, n(function () {
          for (var n = e.$$phase; K.length;) {
            t = K.pop(), t.isShown && (n || t.scope.$digest());
          }c.running = !1;
        }));
      }function s() {
        var e = this;this.scope = I.$new(), this.id = "item" + J++, x(this.scope, function (t) {
          e.element = t, e.element.data("$$collectionRepeatItem", e), e.node = t[0], e.node.style[ionic.CSS.TRANSFORM] = "translate3d(-9999px,-9999px,0)", e.node.style.cssText += " height: 0px; width: 0px;", ionic.Utils.disconnectScope(e.scope), b.appendChild(e.node), e.images = t[0].getElementsByTagName("img");
        });
      }function l() {
        this.getItemPrimarySize = P, this.getItemSecondarySize = D, this.getScrollValue = function () {
          return Math.max(0, Math.min(B.__scrollTop - q, B.__maxScrollTop - q - U));
        }, this.refreshDirection = function () {
          this.scrollPrimarySize = B.__clientHeight, this.scrollSecondarySize = B.__clientWidth, this.estimatedPrimarySize = v, this.estimatedSecondarySize = $, this.estimatedItemsAcross = R && Math.floor(B.__clientWidth / $) || 1;
        };
      }function u() {
        this.getItemPrimarySize = D, this.getItemSecondarySize = P, this.getScrollValue = function () {
          return Math.max(0, Math.min(B.__scrollLeft - q, B.__maxScrollLeft - q - U));
        }, this.refreshDirection = function () {
          this.scrollPrimarySize = B.__clientWidth, this.scrollSecondarySize = B.__clientHeight, this.estimatedPrimarySize = $, this.estimatedSecondarySize = v, this.estimatedItemsAcross = R && Math.floor(B.__clientHeight / v) || 1;
        };
      }function d() {
        this.getEstimatedSecondaryPos = function (e) {
          return e % this.estimatedItemsAcross * this.estimatedSecondarySize;
        }, this.getEstimatedPrimaryPos = function (e) {
          return Math.floor(e / this.estimatedItemsAcross) * this.estimatedPrimarySize;
        }, this.getEstimatedIndex = function (e) {
          return Math.floor(e / this.estimatedPrimarySize) * this.estimatedItemsAcross;
        };
      }function f() {
        this.getEstimatedSecondaryPos = function () {
          return 0;
        }, this.getEstimatedPrimaryPos = function (e) {
          return e * this.estimatedPrimarySize;
        }, this.getEstimatedIndex = function (e) {
          return Math.floor(e / this.estimatedPrimarySize);
        };
      }function h() {
        this.getContentSize = function () {
          return this.getEstimatedPrimaryPos(A.length - 1) + this.estimatedPrimarySize + q + U;
        };var e = {};this.getDimensions = function (t) {
          return e.primaryPos = this.getEstimatedPrimaryPos(t), e.secondaryPos = this.getEstimatedSecondaryPos(t), e.primarySize = this.estimatedPrimarySize, e.secondarySize = this.estimatedSecondarySize, e;
        }, this.updateRenderRange = function (e, t) {
          F = Math.max(0, this.getEstimatedIndex(e)), W = Math.min(A.length - 1, this.getEstimatedIndex(t) + this.estimatedItemsAcross - 1), Y = Math.max(0, this.getEstimatedPrimaryPos(F)), X = this.getEstimatedPrimaryPos(W) + this.estimatedPrimarySize;
        };
      }function p() {
        function e(e) {
          var t, r, a;for (t = Math.max(0, n); e >= t && (a = c[t]); t++) {
            r = c[t - 1] || i, a.primarySize = o.getItemPrimarySize(t, A[t]), a.secondarySize = o.scrollSecondarySize, a.primaryPos = r.primaryPos + r.primarySize, a.secondaryPos = 0;
          }
        }function t(e) {
          var t, r, a;for (t = Math.max(n, 0); e >= t && (a = c[t]); t++) {
            r = c[t - 1] || i, a.secondarySize = Math.min(o.getItemSecondarySize(t, A[t]), o.scrollSecondarySize), a.secondaryPos = r.secondaryPos + r.secondarySize, 0 === t || a.secondaryPos + a.secondarySize > o.scrollSecondarySize ? (a.secondaryPos = 0, a.primarySize = o.getItemPrimarySize(t, A[t]), a.primaryPos = r.primaryPos + r.rowPrimarySize, a.rowStartIndex = t, a.rowPrimarySize = a.primarySize) : (a.primarySize = o.getItemPrimarySize(t, A[t]), a.primaryPos = r.primaryPos, a.rowStartIndex = r.rowStartIndex, c[a.rowStartIndex].rowPrimarySize = a.rowPrimarySize = Math.max(c[a.rowStartIndex].rowPrimarySize, a.primarySize), a.rowPrimarySize = Math.max(a.primarySize, a.rowPrimarySize));
          }
        }var n,
            o = this,
            r = ionic.debounce(Q, 25, !0),
            a = R ? t : e,
            c = [];this.getContentSize = function () {
          var e = c[n] || i;return (e.primaryPos + e.primarySize || 0) + this.getEstimatedPrimaryPos(A.length - n - 1) + q + U;
        }, this.onDestroy = function () {
          c.length = 0;
        }, this.onRefreshData = function () {
          var e, t;for (e = c.length, t = A.length; t > e; e++) {
            c.push({});
          }n = -1;
        }, this.onRefreshLayout = function () {
          n = -1;
        }, this.getDimensions = function (e) {
          return e = Math.min(e, A.length - 1), e > n && (e > .9 * A.length ? (a(A.length - 1), n = A.length - 1, Q()) : (a(e), n = e, r())), c[e];
        };var s = -1,
            l = -1;this.updateRenderRange = function (e, t) {
          var n, i, o;if (this.getDimensions(2 * this.getEstimatedIndex(t)), -1 === s || 0 === e) n = 0;else if (e >= l) for (n = s, i = A.length; i > n && !((o = this.getDimensions(n)) && o.primaryPos + o.rowPrimarySize >= e); n++) {} else for (n = s; n >= 0; n--) {
            if ((o = this.getDimensions(n)) && o.primaryPos <= e) {
              n = R ? o.rowStartIndex : n;break;
            }
          }F = Math.min(Math.max(0, n), A.length - 1), Y = -1 !== F ? this.getDimensions(F).primaryPos : -1;var r;for (n = F + 1, i = A.length; i > n; n++) {
            if ((o = this.getDimensions(n)) && o.primaryPos + o.rowPrimarySize > t) {
              if (R) for (r = o; i - 1 > n && (o = this.getDimensions(n + 1)).primaryPos === r.primaryPos;) {
                n++;
              }break;
            }
          }W = Math.min(n, A.length - 1), X = -1 !== W ? (o = this.getDimensions(W)).primaryPos + (o.rowPrimarySize || o.primarySize) : -1, l = e, s = F;
        };
      }var v,
          $,
          w = o.afterItemsNode,
          b = o.containerNode,
          y = o.forceRefreshImages,
          S = o.heightData,
          k = o.widthData,
          C = o.keyExpression,
          T = o.renderBuffer,
          I = o.scope,
          B = o.scrollView,
          x = o.transclude,
          A = [],
          V = {},
          E = S.getValue || function () {
        return S.value;
      },
          P = function P(e, t) {
        return V[C] = t, V.$index = e, E(I, V);
      },
          _ = k.getValue || function () {
        return k.value;
      },
          D = function D(e, t) {
        return V[C] = t, V.$index = e, _(I, V);
      },
          L = !!B.options.scrollingY,
          R = L ? k.dynamic || k.value !== B.__clientWidth : S.dynamic || S.value !== B.__clientHeight,
          M = !S.dynamic && !k.dynamic,
          N = "PRIMARY",
          z = "SECONDARY",
          O = L ? "translate3d(SECONDARYpx,PRIMARYpx,0)" : "translate3d(PRIMARYpx,SECONDARYpx,0)",
          H = L ? "height: PRIMARYpx; width: SECONDARYpx;" : "height: SECONDARYpx; width: PRIMARYpx;",
          q = 0,
          U = 0,
          F = -1,
          W = -1,
          X = -1,
          Y = -1,
          j = [],
          G = [],
          K = [],
          Z = {},
          J = 0,
          Q = L ? function () {
        B.setDimensions(null, null, null, ee.getContentSize(), !0);
      } : function () {
        B.setDimensions(null, null, ee.getContentSize(), null, !0);
      },
          ee = L ? new l() : new u();(R ? d : f).call(ee), (M ? h : p).call(ee);var te = L ? "getContentHeight" : "getContentWidth",
          ne = B.options[te];B.options[te] = angular.bind(ee, ee.getContentSize), B.__$callback = B.__callback, B.__callback = function (e, t, n, i) {
        var o = ee.getScrollValue();(-1 === F || o + ee.scrollPrimarySize > X || Y > o) && a(), B.__$callback(e, t, n, i);
      };var ie = !1,
          oe = !1;this.refreshLayout = function () {
        A.length ? (v = P(0, A[0]), $ = D(0, A[0])) : (v = 100, $ = 100);var e = getComputedStyle(w) || {},
            n = w.firstElementChild && getComputedStyle(w.firstElementChild) || {},
            i = w.lastElementChild && getComputedStyle(w.lastElementChild) || {};U = (parseInt(e[L ? "height" : "width"]) || 0) + (n && parseInt(n[L ? "marginTop" : "marginLeft"]) || 0) + (i && parseInt(i[L ? "marginBottom" : "marginRight"]) || 0), q = 0;var o = b;do {
          q += o[L ? "offsetTop" : "offsetLeft"];
        } while (ionic.DomUtil.contains(B.__content, o = o.offsetParent));var a = b.previousElementSibling,
            c = a ? t.getComputedStyle(a) : {},
            l = parseInt(c[L ? "marginBottom" : "marginRight"] || 0);if (b.style[ionic.CSS.TRANSFORM] = O.replace(N, -l).replace(z, 0), q -= l, B.__clientHeight && B.__clientWidth || (B.__clientWidth = B.__container.clientWidth, B.__clientHeight = B.__container.clientHeight), (ee.onRefreshLayout || angular.noop)(), ee.refreshDirection(), Q(), !ie) for (var u = Math.max(20, 3 * T), d = 0; u > d; d++) {
          j.push(new s());
        }ie = !0, ie && oe && ((B.__scrollLeft > B.__maxScrollLeft || B.__scrollTop > B.__maxScrollTop) && B.resize(), r(!0));
      }, this.setData = function (e) {
        A = e, (ee.onRefreshData || angular.noop)(), oe = !0;
      }, this.destroy = function () {
        a.destroyed = !0, j.forEach(function (e) {
          e.scope.$destroy(), e.scope = e.element = e.node = e.images = null;
        }), j.length = K.length = G.length = 0, Z = {}, B.options[te] = ne, B.__callback = B.__$callback, B.resize(), (ee.onDestroy || angular.noop)();
      };
    };
  }function n(e) {
    return ["$ionicGesture", "$parse", function (t, n) {
      var i = e.substr(2).toLowerCase();return function (o, r, a) {
        var c = n(a[e]),
            s = function s(e) {
          o.$apply(function () {
            c(o, { $event: e });
          });
        },
            l = t.on(i, s, r);o.$on("$destroy", function () {
          t.off(l, i, s);
        });
      };
    }];
  }function i(e) {
    return ["$document", "$timeout", function (t, n) {
      return { restrict: "E", controller: "$ionicHeaderBar", compile: function compile(i) {
          function o(t, n, i, o) {
            e ? (t.$watch(function () {
              return n[0].className;
            }, function (e) {
              var n = -1 === e.indexOf("ng-hide"),
                  i = -1 !== e.indexOf("bar-subheader");t.$hasHeader = n && !i, t.$hasSubheader = n && i, t.$emit("$ionicSubheader", t.$hasSubheader);
            }), t.$on("$destroy", function () {
              delete t.$hasHeader, delete t.$hasSubheader;
            }), o.align(), t.$on("$ionicHeader.align", function () {
              ionic.requestAnimationFrame(function () {
                o.align();
              });
            })) : (t.$watch(function () {
              return n[0].className;
            }, function (e) {
              var n = -1 === e.indexOf("ng-hide"),
                  i = -1 !== e.indexOf("bar-subfooter");t.$hasFooter = n && !i, t.$hasSubfooter = n && i;
            }), t.$on("$destroy", function () {
              delete t.$hasFooter, delete t.$hasSubfooter;
            }), t.$watch("$hasTabs", function (e) {
              n.toggleClass("has-tabs", !!e);
            }), o.align(), t.$on("$ionicFooter.align", function () {
              ionic.requestAnimationFrame(function () {
                o.align();
              });
            }));
          }return i.addClass(e ? "bar bar-header" : "bar bar-footer"), n(function () {
            e && t[0].getElementsByClassName("tabs-top").length && i.addClass("has-tabs-top");
          }), { pre: o };
        } };
    }];
  }function o(e) {
    return e.clientHeight;
  }function r(e) {
    e.stopPropagation();
  }var a = angular.module("ionic", ["ngAnimate", "ngSanitize", "ui.router", "ngIOS9UIWebViewPatch"]),
      c = angular.extend,
      s = angular.forEach,
      l = angular.isDefined,
      u = angular.isNumber,
      d = angular.isString,
      f = angular.element,
      h = angular.noop;a.factory("$ionicActionSheet", ["$rootScope", "$compile", "$animate", "$timeout", "$ionicTemplateLoader", "$ionicPlatform", "$ionicBody", "IONIC_BACK_PRIORITY", function (e, t, n, i, o, r, a, s) {
    function l(o) {
      function l(e) {
        e && /icon/.test(e) && (u.$actionSheetHasIcon = !0);
      }var u = e.$new(!0);c(u, { cancel: h, destructiveButtonClicked: h, buttonClicked: h, $deregisterBackButton: h, buttons: [], cancelOnStateChange: !0 }, o || {});for (var d = 0; d < u.buttons.length; d++) {
        l(u.buttons[d].text);
      }l(u.cancelText), l(u.destructiveText);var p = u.element = t('<ion-action-sheet ng-class="cssClass" buttons="buttons"></ion-action-sheet>')(u),
          v = f(p[0].querySelector(".action-sheet-wrapper")),
          g = u.cancelOnStateChange ? e.$on("$stateChangeSuccess", function () {
        u.cancel();
      }) : h;return u.removeSheet = function (e) {
        u.removed || (u.removed = !0, v.removeClass("action-sheet-up"), i(function () {
          a.removeClass("action-sheet-open");
        }, 400), u.$deregisterBackButton(), g(), n.removeClass(p, "active").then(function () {
          u.$destroy(), p.remove(), u.cancel.$scope = v = null, (e || h)(o.buttons);
        }));
      }, u.showSheet = function (e) {
        u.removed || (a.append(p).addClass("action-sheet-open"), n.addClass(p, "active").then(function () {
          u.removed || (e || h)();
        }), i(function () {
          u.removed || v.addClass("action-sheet-up");
        }, 20, !1));
      }, u.$deregisterBackButton = r.registerBackButtonAction(function () {
        i(u.cancel);
      }, s.actionSheet), u.cancel = function () {
        u.removeSheet(o.cancel);
      }, u.buttonClicked = function (e) {
        o.buttonClicked(e, o.buttons[e]) === !0 && u.removeSheet();
      }, u.destructiveButtonClicked = function () {
        o.destructiveButtonClicked() === !0 && u.removeSheet();
      }, u.showSheet(), u.cancel.$scope = u, u.cancel;
    }return { show: l };
  }]), f.prototype.addClass = function (e) {
    var t, n, i, o, r, a;if (e && "ng-scope" != e && "ng-isolate-scope" != e) for (t = 0; t < this.length; t++) {
      if (o = this[t], o.setAttribute) if (e.indexOf(" ") < 0 && o.classList.add) o.classList.add(e);else {
        for (a = (" " + (o.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "), r = e.split(" "), n = 0; n < r.length; n++) {
          i = r[n].trim(), -1 === a.indexOf(" " + i + " ") && (a += i + " ");
        }o.setAttribute("class", a.trim());
      }
    }return this;
  }, f.prototype.removeClass = function (e) {
    var t, n, i, o, r;if (e) for (t = 0; t < this.length; t++) {
      if (r = this[t], r.getAttribute) if (e.indexOf(" ") < 0 && r.classList.remove) r.classList.remove(e);else for (i = e.split(" "), n = 0; n < i.length; n++) {
        o = i[n], r.setAttribute("class", (" " + (r.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + o.trim() + " ", " ").trim());
      }
    }return this;
  }, a.factory("$ionicBackdrop", ["$document", "$timeout", "$$rAF", "$rootScope", function (e, t, n, i) {
    function o() {
      s++, 1 === s && (c.addClass("visible"), i.$broadcast("backdrop.shown"), n(function () {
        s >= 1 && c.addClass("active");
      }));
    }function r() {
      1 === s && (c.removeClass("active"), i.$broadcast("backdrop.hidden"), t(function () {
        0 === s && c.removeClass("visible");
      }, 400, !1)), s = Math.max(0, s - 1);
    }function a() {
      return c;
    }var c = f('<div class="backdrop">'),
        s = 0;return e[0].body.appendChild(c[0]), { retain: o, release: r, getElement: a, _element: c };
  }]), a.factory("$ionicBind", ["$parse", "$interpolate", function (e, t) {
    var n = /^\s*([@=&])(\??)\s*(\w*)\s*$/;return function (i, o, r) {
      s(r || {}, function (r, a) {
        var c,
            s,
            l = r.match(n) || [],
            u = l[3] || a,
            d = l[1];switch (d) {case "@":
            if (!o[u]) return;o.$observe(u, function (e) {
              i[a] = e;
            }), o[u] && (i[a] = t(o[u])(i));break;case "=":
            if (!o[u]) return;s = i.$watch(o[u], function (e) {
              i[a] = e;
            }), i.$on("$destroy", s);break;case "&":
            if (o[u] && o[u].match(RegExp(a + "(.*?)"))) throw new Error('& expression binding "' + a + '" looks like it will recursively call "' + o[u] + '" and cause a stack overflow! Please choose a different scopeName.');c = e(o[u]), i[a] = function (e) {
              return c(i, e);
            };}
      });
    };
  }]), a.factory("$ionicBody", ["$document", function (e) {
    return { addClass: function addClass() {
        for (var t = 0; t < arguments.length; t++) {
          e[0].body.classList.add(arguments[t]);
        }return this;
      }, removeClass: function removeClass() {
        for (var t = 0; t < arguments.length; t++) {
          e[0].body.classList.remove(arguments[t]);
        }return this;
      }, enableClass: function enableClass(e) {
        var t = Array.prototype.slice.call(arguments).slice(1);return e ? this.addClass.apply(this, t) : this.removeClass.apply(this, t), this;
      }, append: function append(t) {
        return e[0].body.appendChild(t.length ? t[0] : t), this;
      }, get: function get() {
        return e[0].body;
      } };
  }]), a.factory("$ionicClickBlock", ["$document", "$ionicBody", "$timeout", function (e, t, n) {
    function i(e) {
      e.preventDefault(), e.stopPropagation();
    }function o() {
      s && (a ? a.classList.remove(l) : (a = e[0].createElement("div"), a.className = "click-block", t.append(a), a.addEventListener("touchstart", i), a.addEventListener("mousedown", i)), s = !1);
    }function r() {
      a && a.classList.add(l);
    }var a,
        c,
        s,
        l = "click-block-hide";return { show: function show(e) {
        s = !0, n.cancel(c), c = n(this.hide, e || 310, !1), o();
      }, hide: function hide() {
        s = !1, n.cancel(c), r();
      } };
  }]), a.factory("$ionicGesture", [function () {
    return { on: function on(e, t, n, i) {
        return window.ionic.onGesture(e, t, n[0], i);
      }, off: function off(e, t, n) {
        return window.ionic.offGesture(e, t, n);
      } };
  }]), a.factory("$ionicHistory", ["$rootScope", "$state", "$location", "$window", "$timeout", "$ionicViewSwitcher", "$ionicNavViewDelegate", function (e, t, n, i, o, r, a) {
    function s(e) {
      return e ? R.views[e] : null;
    }function u(e) {
      return e ? s(e.backViewId) : null;
    }function d(e) {
      return e ? s(e.forwardViewId) : null;
    }function f(e) {
      return e ? R.histories[e] : null;
    }function h(e) {
      var t = p(e);return R.histories[t.historyId] || (R.histories[t.historyId] = { historyId: t.historyId, parentHistoryId: p(t.scope.$parent).historyId, stack: [], cursor: -1 }), f(t.historyId);
    }function p(t) {
      for (var n = t; n;) {
        if (n.hasOwnProperty("$historyId")) return { historyId: n.$historyId, scope: n };n = n.$parent;
      }return { historyId: "root", scope: e };
    }function v(e) {
      R.currentView = s(e), R.backView = u(R.currentView), R.forwardView = d(R.currentView);
    }function g() {
      var e;if (t && t.current && t.current.name) {
        if (e = t.current.name, t.params) for (var n in t.params) {
          t.params.hasOwnProperty(n) && t.params[n] && (e += "_" + n + "=" + t.params[n]);
        }return e;
      }return ionic.Utils.nextUid();
    }function m() {
      var e;if (t && t.params) for (var n in t.params) {
        t.params.hasOwnProperty(n) && (e = e || {}, e[n] = t.params[n]);
      }return e;
    }function $(e) {
      return e && e.length && /ion-side-menus|ion-tabs/i.test(e[0].tagName);
    }function w(e, t) {
      if (t && t.$$state && t.$$state.self.canSwipeBack === !1) return !1;if (e && "false" === e.attr("can-swipe-back")) return !1;var n = e.find("ion-view");return n && "false" === n.attr("can-swipe-back") ? !1 : !0;
    }var b,
        y,
        S,
        k,
        C,
        T = "initialView",
        I = "newView",
        B = "moveBack",
        x = "moveForward",
        A = "back",
        V = "forward",
        E = "enter",
        P = "exit",
        _ = "swap",
        D = "none",
        L = 0,
        R = { histories: { root: { historyId: "root", parentHistoryId: null, stack: [], cursor: -1 } }, views: {}, backView: null, forwardView: null, currentView: null },
        M = function M() {};return M.prototype.initialize = function (e) {
      if (e) {
        for (var t in e) {
          this[t] = e[t];
        }return this;
      }return null;
    }, M.prototype.go = function () {
      if (this.stateName) return t.go(this.stateName, this.stateParams);if (this.url && this.url !== n.url()) {
        if (R.backView === this) return i.history.go(-1);if (R.forwardView === this) return i.history.go(1);n.url(this.url);
      }return null;
    }, M.prototype.destroy = function () {
      this.scope && (this.scope.$destroy && this.scope.$destroy(), this.scope = null);
    }, { register: function register(e, t) {
        var i,
            a,
            c,
            l = g(),
            d = h(e),
            $ = R.currentView,
            M = R.backView,
            N = R.forwardView,
            z = null,
            O = null,
            H = D,
            q = d.historyId,
            U = n.url();if (b !== l && (b = l, L++), C) z = C.viewId, O = C.action, H = C.direction, C = null;else if (M && M.stateId === l) z = M.viewId, q = M.historyId, O = B, M.historyId === $.historyId ? H = A : $ && (H = P, i = f(M.historyId), i && i.parentHistoryId === $.historyId ? H = E : (i = f($.historyId), i && i.parentHistoryId === d.parentHistoryId && (H = _)));else if (N && N.stateId === l) z = N.viewId, q = N.historyId, O = x, N.historyId === $.historyId ? H = V : $ && (H = P, $.historyId === d.parentHistoryId ? H = E : (i = f($.historyId), i && i.parentHistoryId === d.parentHistoryId && (H = _))), i = p(e), N.historyId && i.scope && (i.scope.$historyId = N.historyId, q = N.historyId);else if ($ && $.historyId !== q && d.cursor > -1 && d.stack.length > 0 && d.cursor < d.stack.length && d.stack[d.cursor].stateId === l) {
          var F = d.stack[d.cursor];if (z = F.viewId, q = F.historyId, O = B, H = _, i = f($.historyId), i && i.parentHistoryId === q ? H = P : (i = f(q), i && i.parentHistoryId === $.historyId && (H = E)), i = s(F.backViewId), i && F.historyId !== i.historyId) {
            var W = Object.keys(R.views);W.forEach(function (e) {
              var t = R.views[e];t.backViewId === F.viewId && t.historyId !== F.historyId && (t.backViewId = null);
            }), d.stack[d.cursor].backViewId = $.viewId;
          }
        } else {
          if (c = r.createViewEle(t), this.isAbstractEle(c, t)) return { action: "abstractView", direction: D, ele: c };if (z = ionic.Utils.nextUid(), $) {
            if ($.forwardViewId = z, O = I, N && $.stateId !== N.stateId && $.historyId === N.historyId && (i = f(N.historyId))) {
              for (a = i.stack.length - 1; a >= N.index; a--) {
                var X = i.stack[a];X && X.destroy && X.destroy(), i.stack.splice(a);
              }q = N.historyId;
            }d.historyId === $.historyId ? H = V : $.historyId !== d.historyId && (H = E, i = f($.historyId), i && i.parentHistoryId === d.parentHistoryId ? H = _ : (i = f(i.parentHistoryId), i && i.historyId === d.historyId && (H = P)));
          } else O = T;2 > L && (H = D), R.views[z] = this.createView({ viewId: z, index: d.stack.length, historyId: d.historyId, backViewId: $ && $.viewId ? $.viewId : null, forwardViewId: null, stateId: l, stateName: this.currentStateName(), stateParams: m(), url: U, canSwipeBack: w(c, t) }), d.stack.push(R.views[z]);
        }if (S && S(), o.cancel(k), y) {
          if (y.disableAnimate && (H = D), y.disableBack && (R.views[z].backViewId = null), y.historyRoot) {
            for (a = 0; a < d.stack.length; a++) {
              d.stack[a].viewId === z ? (d.stack[a].index = 0, d.stack[a].backViewId = d.stack[a].forwardViewId = null) : delete R.views[d.stack[a].viewId];
            }d.stack = [R.views[z]];
          }y = null;
        }if (v(z), R.backView && q == R.backView.historyId && l == R.backView.stateId && U == R.backView.url) for (a = 0; a < d.stack.length; a++) {
          if (d.stack[a].viewId == z) {
            O = "dupNav", H = D, a > 0 && (d.stack[a - 1].forwardViewId = null), R.forwardView = null, R.currentView.index = R.backView.index, R.currentView.backViewId = R.backView.backViewId, R.backView = u(R.backView), d.stack.splice(a, 1);break;
          }
        }return d.cursor = R.currentView.index, { viewId: z, action: O, direction: H, historyId: q, enableBack: this.enabledBack(R.currentView), isHistoryRoot: 0 === R.currentView.index, ele: c };
      }, registerHistory: function registerHistory(e) {
        e.$historyId = ionic.Utils.nextUid();
      }, createView: function createView(e) {
        var t = new M();return t.initialize(e);
      }, getViewById: s, viewHistory: function viewHistory() {
        return R;
      }, currentView: function currentView(e) {
        return arguments.length && (R.currentView = e), R.currentView;
      }, currentHistoryId: function currentHistoryId() {
        return R.currentView ? R.currentView.historyId : null;
      }, currentTitle: function currentTitle(e) {
        return R.currentView ? (arguments.length && (R.currentView.title = e), R.currentView.title) : void 0;
      }, backView: function backView(e) {
        return arguments.length && (R.backView = e), R.backView;
      }, backTitle: function backTitle(e) {
        var t = e && s(e.backViewId) || R.backView;return t && t.title;
      }, forwardView: function forwardView(e) {
        return arguments.length && (R.forwardView = e), R.forwardView;
      }, currentStateName: function currentStateName() {
        return t && t.current ? t.current.name : null;
      }, isCurrentStateNavView: function isCurrentStateNavView(e) {
        return !!(t && t.current && t.current.views && t.current.views[e]);
      }, goToHistoryRoot: function goToHistoryRoot(e) {
        if (e) {
          var t = f(e);if (t && t.stack.length) {
            if (R.currentView && R.currentView.viewId === t.stack[0].viewId) return;C = { viewId: t.stack[0].viewId, action: B, direction: A }, t.stack[0].go();
          }
        }
      }, goBack: function goBack(e) {
        if (l(e) && -1 !== e) {
          if (e > -1) return;var t = R.histories[this.currentHistoryId()],
              n = t.cursor + e + 1;1 > n && (n = 1), t.cursor = n, v(t.stack[n].viewId);for (var i = n - 1, r = [], a = s(t.stack[i].forwardViewId); a && (r.push(a.stateId || a.viewId), i++, !(i >= t.stack.length));) {
            a = s(t.stack[i].forwardViewId);
          }var c = this;r.length && o(function () {
            c.clearCache(r);
          }, 300);
        }R.backView && R.backView.go();
      }, removeBackView: function removeBackView() {
        var e = this,
            t = R.histories[this.currentHistoryId()],
            n = t.cursor,
            i = t.stack[n],
            o = t.stack[n - 1],
            r = t.stack[n - 2];o && r && (t.stack.splice(n - 1, 1), e.clearCache([o.viewId]), i.backViewId = r.viewId, i.index = i.index - 1, r.forwardViewId = i.viewId, R.backView = r, t.currentCursor += -1);
      }, enabledBack: function enabledBack(e) {
        var t = u(e);return !(!t || t.historyId !== e.historyId);
      }, clearHistory: function clearHistory() {
        var e = R.histories,
            t = R.currentView;if (e) for (var n in e) {
          e[n].stack && (e[n].stack = [], e[n].cursor = -1), t && t.historyId === n ? (t.backViewId = t.forwardViewId = null, e[n].stack.push(t)) : e[n].destroy && e[n].destroy();
        }for (var i in R.views) {
          i !== t.viewId && delete R.views[i];
        }t && v(t.viewId);
      }, clearCache: function clearCache(e) {
        return o(function () {
          a._instances.forEach(function (t) {
            t.clearCache(e);
          });
        });
      }, nextViewOptions: function nextViewOptions(t) {
        return S && S(), arguments.length && (o.cancel(k), null === t ? y = t : (y = y || {}, c(y, t), y.expire && (S = e.$on("$stateChangeSuccess", function () {
          k = o(function () {
            y = null;
          }, y.expire);
        })))), y;
      }, isAbstractEle: function isAbstractEle(e, t) {
        return t && t.$$state && t.$$state.self["abstract"] ? !0 : !(!e || !$(e) && !$(e.children()));
      }, isActiveScope: function isActiveScope(e) {
        if (!e) return !1;for (var t, n = e, i = this.currentHistoryId(); n;) {
          if (n.$$disconnected) return !1;if (!t && n.hasOwnProperty("$historyId") && (t = !0), i) {
            if (n.hasOwnProperty("$historyId") && i == n.$historyId) return !0;if (n.hasOwnProperty("$activeHistoryId") && i == n.$activeHistoryId) {
              if (n.hasOwnProperty("$historyId")) return !0;if (!t) return !0;
            }
          }t && n.hasOwnProperty("$activeHistoryId") && (t = !1), n = n.$parent;
        }return i ? "root" == i : !0;
      } };
  }]).run(["$rootScope", "$state", "$location", "$document", "$ionicPlatform", "$ionicHistory", "IONIC_BACK_PRIORITY", function (e, t, n, i, o, r, a) {
    function c(e) {
      var t = r.backView();return t ? t.go() : ionic.Platform.exitApp(), e.preventDefault(), !1;
    }e.$on("$ionicView.beforeEnter", function () {
      ionic.keyboard && ionic.keyboard.hide && ionic.keyboard.hide();
    }), e.$on("$ionicHistory.change", function (e, i) {
      if (!i) return null;var o = r.viewHistory(),
          a = i.historyId ? o.histories[i.historyId] : null;if (a && a.cursor > -1 && a.cursor < a.stack.length) {
        var c = a.stack[a.cursor];return c.go(i);
      }!i.url && i.uiSref && (i.url = t.href(i.uiSref)), i.url && (0 === i.url.indexOf("#") && (i.url = i.url.replace("#", "")), i.url !== n.url() && n.url(i.url));
    }), e.$ionicGoBack = function (e) {
      r.goBack(e);
    }, e.$on("$ionicView.afterEnter", function (e, t) {
      t && t.title && (i[0].title = t.title);
    }), o.registerBackButtonAction(c, a.view);
  }]), a.provider("$ionicConfig", function () {
    function e(e, i) {
      a.platform[e] = i, o.platform[e] = {}, t(a, a.platform[e]), n(a.platform[e], o.platform[e], "");
    }function t(e, n) {
      for (var i in e) {
        i != r && e.hasOwnProperty(i) && (angular.isObject(e[i]) ? (l(n[i]) || (n[i] = {}), t(e[i], n[i])) : l(n[i]) || (n[i] = null));
      }
    }function n(e, t, o) {
      s(e, function (c, s) {
        angular.isObject(e[s]) ? (t[s] = {}, n(e[s], t[s], o + "." + s)) : t[s] = function (n) {
          if (arguments.length) return e[s] = n, t;if (e[s] == r) {
            var c = i(a.platform, ionic.Platform.platform() + o + "." + s);return c || c === !1 ? c : i(a.platform, "default" + o + "." + s);
          }return e[s];
        };
      });
    }function i(e, t) {
      t = t.split(".");for (var n = 0; n < t.length; n++) {
        if (!e || !l(e[t[n]])) return null;e = e[t[n]];
      }return e;
    }var o = this;o.platform = {};var r = "platform",
        a = { views: { maxCache: r, forwardCache: r, transition: r, swipeBackEnabled: r, swipeBackHitWidth: r }, navBar: { alignTitle: r, positionPrimaryButtons: r, positionSecondaryButtons: r, transition: r }, backButton: { icon: r, text: r, previousTitleText: r }, form: { checkbox: r, toggle: r }, scrolling: { jsScrolling: r }, spinner: { icon: r }, tabs: { style: r, position: r }, templates: { maxPrefetch: r }, platform: {} };n(a, o, ""), e("default", { views: { maxCache: 10, forwardCache: !1, transition: "ios", swipeBackEnabled: !0, swipeBackHitWidth: 45 }, navBar: { alignTitle: "center", positionPrimaryButtons: "left", positionSecondaryButtons: "right", transition: "view" }, backButton: { icon: "ion-ios-arrow-back", text: "Back", previousTitleText: !0 }, form: { checkbox: "circle", toggle: "large" }, scrolling: { jsScrolling: !0 }, spinner: { icon: "ios" }, tabs: { style: "standard", position: "bottom" }, templates: { maxPrefetch: 30 } }), e("ios", {}), e("android", { views: { transition: "android", swipeBackEnabled: !1 }, navBar: { alignTitle: "left", positionPrimaryButtons: "right", positionSecondaryButtons: "right" }, backButton: { icon: "ion-android-arrow-back", text: !1, previousTitleText: !1 }, form: { checkbox: "square", toggle: "small" }, spinner: { icon: "android" }, tabs: { style: "striped", position: "top" }, scrolling: { jsScrolling: !1 } }), e("windowsphone", { spinner: { icon: "android" } }), o.transitions = { views: {}, navBar: {} }, o.transitions.views.ios = function (e, t, n, i) {
      function o(e, t, n, i) {
        var o = {};o[ionic.CSS.TRANSITION_DURATION] = r.shouldAnimate ? "" : 0, o.opacity = t, i > -1 && (o.boxShadow = "0 0 10px rgba(0,0,0," + (r.shouldAnimate ? .45 * i : .3) + ")"), o[ionic.CSS.TRANSFORM] = "translate3d(" + n + "%,0,0)", ionic.DomUtil.cachedStyles(e, o);
      }var r = { run: function run(i) {
          "forward" == n ? (o(e, 1, 99 * (1 - i), 1 - i), o(t, 1 - .1 * i, -33 * i, -1)) : "back" == n ? (o(e, 1 - .1 * (1 - i), -33 * (1 - i), -1), o(t, 1, 100 * i, 1 - i)) : (o(e, 1, 0, -1), o(t, 0, 0, -1));
        }, shouldAnimate: i && ("forward" == n || "back" == n) };return r;
    }, o.transitions.navBar.ios = function (e, t, n, i) {
      function o(e, t, n, i) {
        var o = {};o[ionic.CSS.TRANSITION_DURATION] = c.shouldAnimate ? "" : "0ms", o.opacity = 1 === t ? "" : t, e.setCss("buttons-left", o), e.setCss("buttons-right", o), e.setCss("back-button", o), o[ionic.CSS.TRANSFORM] = "translate3d(" + i + "px,0,0)", e.setCss("back-text", o), o[ionic.CSS.TRANSFORM] = "translate3d(" + n + "px,0,0)", e.setCss("title", o);
      }function r(e, t, n) {
        if (e && t) {
          var i = (e.titleTextX() + e.titleWidth()) * (1 - n),
              r = t && (t.titleTextX() - e.backButtonTextLeft()) * (1 - n) || 0;o(e, n, i, r);
        }
      }function a(e, t, n) {
        if (e && t) {
          var i = (-(e.titleTextX() - t.backButtonTextLeft()) - e.titleLeftRight()) * n;o(e, 1 - n, i, 0);
        }
      }var c = { run: function run(n) {
          var i = e.controller(),
              o = t && t.controller();"back" == c.direction ? (a(i, o, 1 - n), r(o, i, 1 - n)) : (r(i, o, n), a(o, i, n));
        }, direction: n, shouldAnimate: i && ("forward" == n || "back" == n) };return c;
    }, o.transitions.views.android = function (e, t, n, i) {
      function o(e, t, n) {
        var i = {};i[ionic.CSS.TRANSITION_DURATION] = r.shouldAnimate ? "" : 0, i[ionic.CSS.TRANSFORM] = "translate3d(" + t + "%,0,0)", i.opacity = n, ionic.DomUtil.cachedStyles(e, i);
      }i = i && ("forward" == n || "back" == n);var r = { run: function run(i) {
          "forward" == n ? (o(e, 99 * (1 - i), 1), o(t, -100 * i, 1)) : "back" == n ? (o(e, -100 * (1 - i), 1), o(t, 100 * i, 1)) : (o(e, 0, 1), o(t, 0, 0));
        }, shouldAnimate: i };return r;
    }, o.transitions.navBar.android = function (e, t, n, i) {
      function o(e, t) {
        if (e) {
          var n = {};n.opacity = 1 === t ? "" : t, e.setCss("buttons-left", n), e.setCss("buttons-right", n), e.setCss("back-button", n), e.setCss("back-text", n), e.setCss("title", n);
        }
      }return { run: function run(n) {
          o(e.controller(), n), o(t && t.controller(), 1 - n);
        }, shouldAnimate: i && ("forward" == n || "back" == n)
      };
    }, o.transitions.views.none = function (e, t) {
      return { run: function run(n) {
          o.transitions.views.android(e, t, !1, !1).run(n);
        }, shouldAnimate: !1 };
    }, o.transitions.navBar.none = function (e, t) {
      return { run: function run(n) {
          o.transitions.navBar.ios(e, t, !1, !1).run(n), o.transitions.navBar.android(e, t, !1, !1).run(n);
        }, shouldAnimate: !1 };
    }, o.setPlatformConfig = e, o.$get = function () {
      return o;
    };
  }).config(["$compileProvider", function (e) {
    e.aHrefSanitizationWhitelist(/^\s*(https?|sms|tel|geo|ftp|mailto|file|ghttps?|ms-appx-web|ms-appx|x-wmapp0):/), e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|content|blob|ms-appx|ms-appx-web|x-wmapp0):|data:image\//);
  }]);var p = '<div class="loading-container"><div class="loading"></div></div>';a.constant("$ionicLoadingConfig", { template: "<ion-spinner></ion-spinner>" }).factory("$ionicLoading", ["$ionicLoadingConfig", "$ionicBody", "$ionicTemplateLoader", "$ionicBackdrop", "$timeout", "$q", "$log", "$compile", "$ionicPlatform", "$rootScope", "IONIC_BACK_PRIORITY", function (e, t, n, i, o, r, a, s, l, u, d) {
    function f() {
      return m || (m = n.compile({ template: p, appendTo: t.get() }).then(function (e) {
        return e.show = function (a) {
          var c = a.templateUrl ? n.load(a.templateUrl) : r.when(a.template || a.content || "");e.scope = a.scope || e.scope, e.isShown || (e.hasBackdrop = !a.noBackdrop && a.showBackdrop !== !1, e.hasBackdrop && (i.retain(), i.getElement().addClass("backdrop-loading"))), a.duration && (o.cancel(e.durationTimeout), e.durationTimeout = o(angular.bind(e, e.hide), +a.duration)), $(), $ = l.registerBackButtonAction(h, d.loading), c.then(function (n) {
            if (n) {
              var i = e.element.children();i.html(n), s(i.contents())(e.scope);
            }e.isShown && (e.element.addClass("visible"), ionic.requestAnimationFrame(function () {
              e.isShown && (e.element.addClass("active"), t.addClass("loading-active"));
            }));
          }), e.isShown = !0;
        }, e.hide = function () {
          $(), e.isShown && (e.hasBackdrop && (i.release(), i.getElement().removeClass("backdrop-loading")), e.element.removeClass("active"), t.removeClass("loading-active"), e.element.removeClass("visible"), ionic.requestAnimationFrame(function () {
            !e.isShown && e.element.removeClass("visible");
          })), o.cancel(e.durationTimeout), e.isShown = !1;var n = e.element.children();n.html("");
        }, e;
      })), m;
    }function v(t) {
      t = c({}, e || {}, t || {});var n = t.delay || t.showDelay || 0;return w(), b(), t.hideOnStateChange && (w = u.$on("$stateChangeSuccess", g), b = u.$on("$stateChangeError", g)), o.cancel(y), y = o(h, n), y.then(f).then(function (e) {
        return e.show(t);
      });
    }function g() {
      return w(), b(), o.cancel(y), f().then(function (e) {
        return e.hide();
      });
    }var m,
        $ = h,
        w = h,
        b = h,
        y = r.when();return { show: v, hide: g, _getLoader: f };
  }]), a.factory("$ionicModal", ["$rootScope", "$ionicBody", "$compile", "$timeout", "$ionicPlatform", "$ionicTemplateLoader", "$$q", "$log", "$ionicClickBlock", "$window", "IONIC_BACK_PRIORITY", function (e, t, n, i, o, r, a, s, l, u, d) {
    var p = ionic.views.Modal.inherit({ initialize: function initialize(e) {
        ionic.views.Modal.prototype.initialize.call(this, e), this.animation = e.animation || "slide-in-up";
      }, show: function show(e) {
        var n = this;if (n.scope.$$destroyed) return s.error("Cannot call " + n.viewType + ".show() after remove(). Please create a new " + n.viewType + " instance."), a.when();l.show(600), m.add(n);var r = f(n.modalEl);n.el.classList.remove("hide"), i(function () {
          n._isShown && t.addClass(n.viewType + "-open");
        }, 400, !1), n.el.parentElement || (r.addClass(n.animation), t.append(n.el));var c = r.data("$$ionicScrollController");return c && c.resize(), e && n.positionView && (n.positionView(e, r), n._onWindowResize = function () {
          n._isShown && n.positionView(e, r);
        }, ionic.on("resize", n._onWindowResize, window)), r.addClass("ng-enter active").removeClass("ng-leave ng-leave-active"), n._isShown = !0, n._deregisterBackButton = o.registerBackButtonAction(n.hardwareBackButtonClose ? angular.bind(n, n.hide) : h, d.modal), ionic.views.Modal.prototype.show.call(n), i(function () {
          n._isShown && (r.addClass("ng-enter-active"), ionic.trigger("resize"), n.scope.$parent && n.scope.$parent.$broadcast(n.viewType + ".shown", n), n.el.classList.add("active"), n.scope.$broadcast("$ionicHeader.align"), n.scope.$broadcast("$ionicFooter.align"), n.scope.$broadcast("$ionic.modalPresented"));
        }, 20), i(function () {
          n._isShown && (n.$el.on("touchmove", function (e) {
            var t = ionic.DomUtil.getParentOrSelfWithClass(e.target, "scroll");t || e.preventDefault();
          }), n.$el.on("click", function (e) {
            n.backdropClickToClose && e.target === n.el && m.isHighest(n) && n.hide();
          }));
        }, 400);
      }, hide: function hide() {
        var e = this,
            n = f(e.modalEl);return l.show(600), m.remove(e), e.el.classList.remove("active"), n.addClass("ng-leave"), i(function () {
          e._isShown || (n.addClass("ng-leave-active").removeClass("ng-enter ng-enter-active active"), e.scope.$broadcast("$ionic.modalRemoved"));
        }, 20, !1), e.$el.off("click"), e._isShown = !1, e.scope.$parent && e.scope.$parent.$broadcast(e.viewType + ".hidden", e), e._deregisterBackButton && e._deregisterBackButton(), ionic.views.Modal.prototype.hide.call(e), e.positionView && ionic.off("resize", e._onWindowResize, window), i(function () {
          g.length || t.removeClass(e.viewType + "-open"), e.el.classList.add("hide");
        }, e.hideDelay || 320);
      }, remove: function remove() {
        var e,
            t,
            n = this;return n.scope.$parent && n.scope.$parent.$broadcast(n.viewType + ".removed", n), n._isShown ? t = n.hide() : (e = a.defer(), e.resolve(), t = e.promise), t.then(function () {
          n.scope.$destroy(), n.$el.remove();
        });
      }, isShown: function isShown() {
        return !!this._isShown;
      } }),
        v = function v(t, i) {
      var o = i.scope && i.scope.$new() || e.$new(!0);i.viewType = i.viewType || "modal", c(o, { $hasHeader: !1, $hasSubheader: !1, $hasFooter: !1, $hasSubfooter: !1, $hasTabs: !1, $hasTabsTop: !1 });var r = n("<ion-" + i.viewType + ">" + t + "</ion-" + i.viewType + ">")(o);i.$el = r, i.el = r[0], i.modalEl = i.el.querySelector("." + i.viewType);var a = new p(i);return a.scope = o, i.scope || (o[i.viewType] = a), a;
    },
        g = [],
        m = { add: function add(e) {
        g.push(e);
      }, remove: function remove(e) {
        var t = g.indexOf(e);t > -1 && t < g.length && g.splice(t, 1);
      }, isHighest: function isHighest(e) {
        var t = g.indexOf(e);return t > -1 && t === g.length - 1;
      } };return { fromTemplate: function fromTemplate(e, t) {
        var n = v(e, t || {});return n;
      }, fromTemplateUrl: function fromTemplateUrl(e, t, n) {
        var i;return angular.isFunction(t) && (i = t, t = n), r.load(e).then(function (e) {
          var n = v(e, t || {});return i && i(n), n;
        });
      }, stack: m };
  }]), a.service("$ionicNavBarDelegate", ionic.DelegateService(["align", "showBackButton", "showBar", "title", "changeTitle", "setTitle", "getTitle", "back", "getPreviousTitle"])), a.service("$ionicNavViewDelegate", ionic.DelegateService(["clearCache"])), a.constant("IONIC_BACK_PRIORITY", { view: 100, sideMenu: 150, modal: 200, actionSheet: 300, popup: 400, loading: 500 }).provider("$ionicPlatform", function () {
    return { $get: ["$q", "$ionicScrollDelegate", function (e, t) {
        var n = { onHardwareBackButton: function onHardwareBackButton(e) {
            ionic.Platform.ready(function () {
              document.addEventListener("backbutton", e, !1);
            });
          }, offHardwareBackButton: function offHardwareBackButton(e) {
            ionic.Platform.ready(function () {
              document.removeEventListener("backbutton", e);
            });
          }, $backButtonActions: {}, registerBackButtonAction: function registerBackButtonAction(e, t, i) {
            n._hasBackButtonHandler || (n.$backButtonActions = {}, n.onHardwareBackButton(n.hardwareBackButtonClick), n._hasBackButtonHandler = !0);var o = { id: i ? i : ionic.Utils.nextUid(), priority: t ? t : 0, fn: e };return n.$backButtonActions[o.id] = o, function () {
              delete n.$backButtonActions[o.id];
            };
          }, hardwareBackButtonClick: function hardwareBackButtonClick(e) {
            var t, i;for (i in n.$backButtonActions) {
              (!t || n.$backButtonActions[i].priority >= t.priority) && (t = n.$backButtonActions[i]);
            }return t ? (t.fn(e), t) : void 0;
          }, is: function is(e) {
            return ionic.Platform.is(e);
          }, on: function on(e, t) {
            return ionic.Platform.ready(function () {
              document.addEventListener(e, t, !1);
            }), function () {
              ionic.Platform.ready(function () {
                document.removeEventListener(e, t);
              });
            };
          }, ready: function ready(n) {
            var i = e.defer();return ionic.Platform.ready(function () {
              window.addEventListener("statusTap", function () {
                t.scrollTop(!0);
              }), i.resolve(), n && n();
            }), i.promise;
          } };return n;
      }] };
  }), a.factory("$ionicPopover", ["$ionicModal", "$ionicPosition", "$document", "$window", function (e, t, n, i) {
    function o(e, n) {
      var o = f(e.target || e),
          a = t.offset(o),
          c = n.prop("offsetWidth"),
          s = n.prop("offsetHeight"),
          l = i.innerWidth,
          u = i.innerHeight,
          d = { left: a.left + a.width / 2 - c / 2 },
          h = f(n[0].querySelector(".popover-arrow"));d.left < r ? d.left = r : d.left + c + r > l && (d.left = l - c - r), a.top + a.height + s > u && a.top - s > 0 ? (d.top = a.top - s, n.addClass("popover-bottom")) : (d.top = a.top + a.height, n.removeClass("popover-bottom")), h.css({ left: a.left + a.width / 2 - h.prop("offsetWidth") / 2 - d.left + "px" }), n.css({ top: d.top + "px", left: d.left + "px", marginLeft: "0", opacity: "1" });
    }var r = 6,
        a = { viewType: "popover", hideDelay: 1, animation: "none", positionView: o };return { fromTemplate: function fromTemplate(t, n) {
        return e.fromTemplate(t, ionic.Utils.extend({}, a, n));
      }, fromTemplateUrl: function fromTemplateUrl(t, n) {
        return e.fromTemplateUrl(t, ionic.Utils.extend({}, a, n));
      } };
  }]);var v = '<div class="popup-container" ng-class="cssClass"><div class="popup"><div class="popup-head"><h3 class="popup-title" ng-bind-html="title"></h3><h5 class="popup-sub-title" ng-bind-html="subTitle" ng-if="subTitle"></h5></div><div class="popup-body"></div><div class="popup-buttons" ng-show="buttons.length"><button ng-repeat="button in buttons" ng-click="$buttonTapped(button, $event)" class="button" ng-class="button.type || \'button-default\'" ng-bind-html="button.text"></button></div></div></div>';a.factory("$ionicPopup", ["$ionicTemplateLoader", "$ionicBackdrop", "$q", "$timeout", "$rootScope", "$ionicBody", "$compile", "$ionicPlatform", "$ionicModal", "IONIC_BACK_PRIORITY", function (e, t, n, i, o, r, a, s, l, u) {
    function d(t) {
      t = c({ scope: null, title: "", buttons: [] }, t || {});var s = {};return s.scope = (t.scope || o).$new(), s.element = f(v), s.responseDeferred = n.defer(), r.get().appendChild(s.element[0]), a(s.element)(s.scope), c(s.scope, { title: t.title, buttons: t.buttons, subTitle: t.subTitle, cssClass: t.cssClass, $buttonTapped: function $buttonTapped(e, t) {
          var n = (e.onTap || h).apply(s, [t]);t = t.originalEvent || t, t.defaultPrevented || s.responseDeferred.resolve(n);
        } }), n.when(t.templateUrl ? e.load(t.templateUrl) : t.template || t.content || "").then(function (e) {
        var t = f(s.element[0].querySelector(".popup-body"));e ? (t.html(e), a(t.contents())(s.scope)) : t.remove();
      }), s.show = function () {
        s.isShown || s.removed || (l.stack.add(s), s.isShown = !0, ionic.requestAnimationFrame(function () {
          s.isShown && (s.element.removeClass("popup-hidden"), s.element.addClass("popup-showing active"), m(s.element));
        }));
      }, s.hide = function (e) {
        return e = e || h, s.isShown ? (l.stack.remove(s), s.isShown = !1, s.element.removeClass("active"), s.element.addClass("popup-hidden"), void i(e, 250, !1)) : e();
      }, s.remove = function () {
        s.removed || (s.hide(function () {
          s.element.remove(), s.scope.$destroy();
        }), s.removed = !0);
      }, s;
    }function p() {
      var e = S[S.length - 1];e && e.responseDeferred.resolve();
    }function g(e) {
      function n() {
        S.push(o), i(o.show, a, !1), o.responseDeferred.promise.then(function (e) {
          var n = S.indexOf(o);return -1 !== n && S.splice(n, 1), o.remove(), S.length > 0 ? S[S.length - 1].show() : (t.release(), i(function () {
            S.length || r.removeClass("popup-open");
          }, 400, !1), (k._backButtonActionDone || h)()), e;
        });
      }var o = k._createPopup(e),
          a = 0;return S.length > 0 ? (a = y.stackPushDelay, i(S[S.length - 1].hide, a, !1)) : (r.addClass("popup-open"), t.retain(), k._backButtonActionDone = s.registerBackButtonAction(p, u.popup)), o.responseDeferred.promise.close = function (e) {
        o.removed || o.responseDeferred.resolve(e);
      }, o.responseDeferred.notify({ close: o.responseDeferred.close }), n(), o.responseDeferred.promise;
    }function m(e) {
      var t = e[0].querySelector("[autofocus]");t && t.focus();
    }function $(e) {
      return g(c({ buttons: [{ text: e.okText || "OK", type: e.okType || "button-positive", onTap: function onTap() {
            return !0;
          } }] }, e || {}));
    }function w(e) {
      return g(c({ buttons: [{ text: e.cancelText || "Cancel", type: e.cancelType || "button-default", onTap: function onTap() {
            return !1;
          } }, { text: e.okText || "OK", type: e.okType || "button-positive", onTap: function onTap() {
            return !0;
          } }] }, e || {}));
    }function b(e) {
      var t = o.$new(!0);t.data = {}, t.data.fieldtype = e.inputType ? e.inputType : "text", t.data.response = e.defaultText ? e.defaultText : "", t.data.placeholder = e.inputPlaceholder ? e.inputPlaceholder : "", t.data.maxlength = e.maxLength ? parseInt(e.maxLength) : "";var n = "";return e.template && /<[a-z][\s\S]*>/i.test(e.template) === !1 && (n = "<span>" + e.template + "</span>", delete e.template), g(c({ template: n + '<input ng-model="data.response" type="{{ data.fieldtype }}"maxlength="{{ data.maxlength }}"placeholder="{{ data.placeholder }}">', scope: t, buttons: [{ text: e.cancelText || "Cancel", type: e.cancelType || "button-default", onTap: function onTap() {} }, { text: e.okText || "OK", type: e.okType || "button-positive", onTap: function onTap() {
            return t.data.response || "";
          } }] }, e || {}));
    }var y = { stackPushDelay: 75 },
        S = [],
        k = { show: g, alert: $, confirm: w, prompt: b, _createPopup: d, _popupStack: S };return k;
  }]), a.factory("$ionicPosition", ["$document", "$window", function (e, t) {
    function n(e, n) {
      return e.currentStyle ? e.currentStyle[n] : t.getComputedStyle ? t.getComputedStyle(e)[n] : e.style[n];
    }function i(e) {
      return "static" === (n(e, "position") || "static");
    }var o = function o(t) {
      for (var n = e[0], o = t.offsetParent || n; o && o !== n && i(o);) {
        o = o.offsetParent;
      }return o || n;
    };return { position: function position(t) {
        var n = this.offset(t),
            i = { top: 0, left: 0 },
            r = o(t[0]);r != e[0] && (i = this.offset(f(r)), i.top += r.clientTop - r.scrollTop, i.left += r.clientLeft - r.scrollLeft);var a = t[0].getBoundingClientRect();return { width: a.width || t.prop("offsetWidth"), height: a.height || t.prop("offsetHeight"), top: n.top - i.top, left: n.left - i.left };
      }, offset: function offset(n) {
        var i = n[0].getBoundingClientRect();return { width: i.width || n.prop("offsetWidth"), height: i.height || n.prop("offsetHeight"), top: i.top + (t.pageYOffset || e[0].documentElement.scrollTop), left: i.left + (t.pageXOffset || e[0].documentElement.scrollLeft) };
      } };
  }]), a.service("$ionicScrollDelegate", ionic.DelegateService(["resize", "scrollTop", "scrollBottom", "scrollTo", "scrollBy", "zoomTo", "zoomBy", "getScrollPosition", "anchorScroll", "freezeScroll", "freezeAllScrolls", "getScrollView"])), a.service("$ionicSideMenuDelegate", ionic.DelegateService(["toggleLeft", "toggleRight", "getOpenRatio", "isOpen", "isOpenLeft", "isOpenRight", "canDragContent", "edgeDragThreshold"])), a.service("$ionicSlideBoxDelegate", ionic.DelegateService(["update", "slide", "select", "enableSlide", "previous", "next", "stop", "autoPlay", "start", "currentIndex", "selected", "slidesCount", "count", "loop"])), a.service("$ionicTabsDelegate", ionic.DelegateService(["select", "selectedIndex", "showBar"])), function () {
    var e = [];a.factory("$ionicTemplateCache", ["$http", "$templateCache", "$timeout", function (t, n, i) {
      function o(e) {
        return "undefined" == typeof e ? r() : (d(e) && (e = [e]), s(e, function (e) {
          c.push(e);
        }), void (a && r()));
      }function r() {
        var e;if (o._runCount++, a = !0, 0 !== c.length) {
          for (var s = 0; 4 > s && (e = c.pop());) {
            d(e) && t.get(e, { cache: n }), s++;
          }c.length && i(r, 1e3);
        }
      }var a,
          c = e;return o._runCount = 0, o;
    }]).config(["$stateProvider", "$ionicConfigProvider", function (t, n) {
      var i = t.state;t.state = function (o, r) {
        if ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) {
          var a = r.prefetchTemplate !== !1 && e.length < n.templates.maxPrefetch();if (a && d(r.templateUrl) && e.push(r.templateUrl), angular.isObject(r.views)) for (var c in r.views) {
            a = r.views[c].prefetchTemplate !== !1 && e.length < n.templates.maxPrefetch(), a && d(r.views[c].templateUrl) && e.push(r.views[c].templateUrl);
          }
        }return i.call(t, o, r);
      };
    }]).run(["$ionicTemplateCache", function (e) {
      e();
    }]);
  }(), a.factory("$ionicTemplateLoader", ["$compile", "$controller", "$http", "$q", "$rootScope", "$templateCache", function (e, t, n, i, o, r) {
    function a(e) {
      return n.get(e, { cache: r }).then(function (e) {
        return e.data && e.data.trim();
      });
    }function s(n) {
      n = c({ template: "", templateUrl: "", scope: null, controller: null, locals: {}, appendTo: null }, n || {});var r = n.templateUrl ? this.load(n.templateUrl) : i.when(n.template);return r.then(function (i) {
        var r,
            a = n.scope || o.$new(),
            s = f("<div>").html(i).contents();return n.controller && (r = t(n.controller, c(n.locals, { $scope: a })), s.children().data("$ngControllerController", r)), n.appendTo && f(n.appendTo).append(s), e(s)(a), { element: s, scope: a };
      });
    }return { load: a, compile: s };
  }]), a.factory("$ionicViewService", ["$ionicHistory", "$log", function (e, t) {
    function n(e, n) {
      t.warn("$ionicViewService" + e + " is deprecated, please use $ionicHistory" + n + " instead: http://ionicframework.com/docs/nightly/api/service/$ionicHistory/");
    }n("", "");var i = { getCurrentView: "currentView", getBackView: "backView", getForwardView: "forwardView", getCurrentStateName: "currentStateName", nextViewOptions: "nextViewOptions", clearHistory: "clearHistory" };return s(i, function (t, o) {
      i[o] = function () {
        return n("." + o, "." + t), e[t].apply(this, arguments);
      };
    }), i;
  }]), a.factory("$ionicViewSwitcher", ["$timeout", "$document", "$q", "$ionicClickBlock", "$ionicConfig", "$ionicNavBarDelegate", function (e, t, n, i, o, r) {
    function a(e, t) {
      return u(e)["abstract"] ? u(e).name : t ? t.stateId || t.viewId : ionic.Utils.nextUid();
    }function u(e) {
      return e && e.$$state && e.$$state.self || {};
    }function d(e, t, n, i) {
      var r = u(e),
          a = w || D(t, "view-transition") || r.viewTransition || o.views.transition() || "ios",
          s = o.navBar.transition();return n = b || D(t, "view-direction") || r.viewDirection || n || "none", c(h(i), { transition: a, navBarTransition: "view" === s ? a : s, direction: n, shouldAnimate: "none" !== a && "none" !== n });
    }function h(e) {
      return e = e || {}, { viewId: e.viewId, historyId: e.historyId, stateId: e.stateId, stateName: e.stateName, stateParams: e.stateParams };
    }function p(e, t) {
      return arguments.length > 1 ? void D(e, x, t) : D(e, x);
    }function v(e) {
      if (e && e.length) {
        var t = e.scope();t && (t.$emit("$ionicView.unloaded", e.data(B)), t.$destroy()), e.remove();
      }
    }function g(e, t) {
      var n = e.lastIndexOf("."),
          i = t.lastIndexOf(".");if (0 > n || 0 > i) return !1;var o = e.substring(0, n),
          r = t.substring(0, i);return o === r;
    }function m(e, t) {
      if (!e) return null;var n = angular.element(e).attr("abstract"),
          i = angular.element(e).attr("state");if ("true" !== n) return i === t.stateName ? angular.element(e).scope() : null;for (var o = $(e), r = 0; r < o.length; r++) {
        var a = angular.element(o[r]).attr("state");if (a === t.stateName) return t.abstractView = !0, angular.element(o[r]).scope();
      }return null;
    }function $(e) {
      for (var t = [], n = angular.element(e).find("ion-nav-view"), i = 0; i < n.length; i++) {
        for (var o = angular.element(n[i]).children(), r = [], a = 0; a < o.length; a++) {
          r = r.concat(o[a]);
        }t = t.concat(r);
      }return t;
    }var w,
        b,
        y = "webkitTransitionEnd transitionend",
        S = "$noCache",
        k = "$destroyEle",
        C = "$eleId",
        T = "$accessed",
        I = "$fallbackTimer",
        B = "$viewData",
        x = "nav-view",
        A = "active",
        V = "cached",
        E = "stage",
        P = 0;ionic.transition = ionic.transition || {}, ionic.transition.isActive = !1;var _,
        D = ionic.DomUtil.cachedAttr,
        L = [],
        R = 1100,
        M = { create: function create(t, s, f, $, x, _) {
        var N,
            z,
            O,
            H = ++P,
            q = { init: function init(e, t) {
            M.isTransitioning(!0), q.loadViewElements(e), q.render(e, function () {
              t && t();
            });
          }, loadViewElements: function loadViewElements(e) {
            var n,
                i,
                o,
                r = t.getViewElements(),
                c = a(s, f),
                u = t.activeEleId();for (n = 0, i = r.length; i > n && (o = r.eq(n), o.data(C) === c ? o.data(S) ? (o.data(C, c + ionic.Utils.nextUid()), o.data(k, !0)) : N = o : l(u) && o.data(C) === u && (z = o), !N || !z); n++) {}O = !!N, O || (N = e.ele || M.createViewEle(s), N.data(C, c)), _ && t.activeEleId(c), e.ele = null;
          }, render: function render(e, n) {
            if (O) ionic.Utils.reconnectScope(N.scope());else {
              p(N, E);var i = d(s, N, e.direction, f),
                  r = o.transitions.views[i.transition] || o.transitions.views.none;r(N, null, i.direction, !0).run(0), N.data(B, { viewId: i.viewId, historyId: i.historyId, stateName: i.stateName, stateParams: i.stateParams }), (u(s).cache === !1 || "false" === u(s).cache || "false" == N.attr("cache-view") || 0 === o.views.maxCache()) && N.data(S, !0);var a = t.appendViewElement(N, s);delete i.direction, delete i.transition, a.$emit("$ionicView.loaded", i);
            }N.data(T, Date.now()), n && n();
          }, transition: function transition(a, l, u) {
            function v() {
              p(N, F.shouldAnimate ? "entering" : A), p(z, F.shouldAnimate ? "leaving" : V), F.run(1), r._instances.forEach(function (e) {
                e.triggerTransitionStart(H);
              }), F.shouldAnimate || m();
            }function g(e) {
              e.target === this && m();
            }function m() {
              m.x || (m.x = !0, N.off(y, g), e.cancel(N.data(I)), z && e.cancel(z.data(I)), C && C.resolve(t), H === P && (n.all(L).then(M.transitionEnd), q.emit("after", T, B), q.cleanup(T)), r._instances.forEach(function (e) {
                e.triggerTransitionEnd();
              }), w = b = f = $ = N = z = null);
            }function S(e) {
              e.target === this && k();
            }function k() {
              p(N, V), p(z, A), N.off(y, S), e.cancel(N.data(I)), M.transitionEnd([t]);
            }var C,
                T = d(s, N, a, f),
                B = c(c({}, T), h($));T.transitionId = B.transitionId = H, T.fromCache = !!O, T.enableBack = !!l, T.renderStart = x, T.renderEnd = _, D(N.parent(), "nav-view-transition", T.transition), D(N.parent(), "nav-view-direction", T.direction), e.cancel(N.data(I));var U = o.transitions.views[T.transition] || o.transitions.views.none,
                F = U(N, z, T.direction, T.shouldAnimate && u && _);if (F.shouldAnimate && (N.on(y, g), N.data(I, e(m, R)), i.show(R)), x && (q.emit("before", T, B), p(N, E), F.run(0)), _ && (C = n.defer(), L.push(C.promise)), x && _) e(function () {
              ionic.requestAnimationFrame(v);
            });else {
              if (!_) return p(N, "entering"), p(z, "leaving"), { run: F.run, cancel: function cancel(t) {
                  t ? (N.on(y, S), N.data(I, e(k, R)), i.show(R)) : k(), F.shouldAnimate = t, F.run(0), F = null;
                } };_ && v();
            }
          }, emit: function emit(e, t, n) {
            var i,
                o = m(N, t),
                r = m(z, n);!t.viewId || t.abstractView ? r && (r.$emit("$ionicView.beforeLeave", n), r.$emit("$ionicView.leave", n), r.$emit("$ionicView.afterLeave", n), r.$broadcast("$ionicParentView.beforeLeave", n), r.$broadcast("$ionicParentView.leave", n), r.$broadcast("$ionicParentView.afterLeave", n)) : ("after" == e && (o && (o.$emit("$ionicView.enter", t), o.$broadcast("$ionicParentView.enter", t)), r ? (r.$emit("$ionicView.leave", n), r.$broadcast("$ionicParentView.leave", n)) : o && n && n.viewId && t.stateName !== n.stateName && (i = g(t.stateName, n.stateName), i && o.$emit("$ionicNavView.leave", n))), o && (o.$emit("$ionicView." + e + "Enter", t), o.$broadcast("$ionicParentView." + e + "Enter", t)), r ? (r.$emit("$ionicView." + e + "Leave", n), r.$broadcast("$ionicParentView." + e + "Leave", n)) : o && n && n.viewId && t.stateName !== n.stateName && (i = g(t.stateName, n.stateName), i && o.$emit("$ionicNavView." + e + "Leave", n)));
          }, cleanup: function cleanup(e) {
            z && "back" == e.direction && !o.views.forwardCache() && v(z);var n,
                i,
                r,
                a = t.getViewElements(),
                c = a.length,
                s = c - 1 > o.views.maxCache(),
                l = Date.now();for (n = 0; c > n; n++) {
              i = a.eq(n), s && i.data(T) < l ? (l = i.data(T), r = a.eq(n)) : i.data(k) && p(i) != A && v(i);
            }v(r), N.data(S) && N.data(k, !0);
          }, enteringEle: function enteringEle() {
            return N;
          }, leavingEle: function leavingEle() {
            return z;
          } };return q;
      }, transitionEnd: function transitionEnd(e) {
        s(e, function (e) {
          e.transitionEnd();
        }), M.isTransitioning(!1), i.hide(), L = [];
      }, nextTransition: function nextTransition(e) {
        w = e;
      }, nextDirection: function nextDirection(e) {
        b = e;
      }, isTransitioning: function isTransitioning(t) {
        return arguments.length && (ionic.transition.isActive = !!t, e.cancel(_), t && (_ = e(function () {
          M.isTransitioning(!1);
        }, 999))), ionic.transition.isActive;
      }, createViewEle: function createViewEle(e) {
        var n = t[0].createElement("div");return e && e.$template && (n.innerHTML = e.$template, 1 === n.children.length) ? (n.children[0].classList.add("pane"), e.$$state && e.$$state.self && e.$$state.self["abstract"] ? angular.element(n.children[0]).attr("abstract", "true") : e.$$state && e.$$state.self && angular.element(n.children[0]).attr("state", e.$$state.self.name), f(n.children[0])) : (n.className = "pane", f(n));
      }, viewEleIsActive: function viewEleIsActive(e, t) {
        p(e, t ? A : V);
      }, getTransitionData: d, navViewAttr: p, destroyViewEle: v };return M;
  }]), angular.module("ngIOS9UIWebViewPatch", ["ng"]).config(["$provide", function (e) {
    "use strict";
    e.decorator("$browser", ["$delegate", "$window", function (e, t) {
      function n(e) {
        return (/(iPhone|iPad|iPod).* OS 9_\d/.test(e) && !/Version\/9\./.test(e)
        );
      }function i(e) {
        function t() {
          n = null;
        }var n = null,
            i = e.url;return e.url = function () {
          return arguments.length ? (n = arguments[0], i.apply(e, arguments)) : n || i.apply(e, arguments);
        }, window.addEventListener("popstate", t, !1), window.addEventListener("hashchange", t, !1), e;
      }return n(t.navigator.userAgent) ? i(e) : e;
    }]);
  }]), a.config(["$provide", function (e) {
    e.decorator("$compile", ["$delegate", function (e) {
      return e.$$addScopeInfo = function (e, t, n, i) {
        var o = n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";e.data(o, t);
      }, e;
    }]);
  }]), a.config(["$provide", function (e) {
    function t(e, t) {
      return e.__hash = e.hash, e.hash = function (n) {
        return l(n) && n.length > 0 && t(function () {
          var e = document.querySelector(".scroll-content");e && (e.scrollTop = 0);
        }, 0, !1), e.__hash(n);
      }, e;
    }e.decorator("$location", ["$delegate", "$timeout", t]);
  }]), a.controller("$ionicHeaderBar", ["$scope", "$element", "$attrs", "$q", "$ionicConfig", "$ionicHistory", function (e, t, n, i, o, r) {
    function a(e) {
      return C[e] || (C[e] = t[0].querySelector("." + e)), C[e];
    }var c = "title",
        s = "back-text",
        l = "back-button",
        u = "default-title",
        d = "previous-title",
        f = "hide",
        h = this,
        p = "",
        v = "",
        g = 0,
        m = 0,
        $ = "",
        w = !1,
        b = !0,
        y = !0,
        S = !1,
        k = 0;h.beforeEnter = function (t) {
      e.$broadcast("$ionicView.beforeEnter", t);
    }, h.title = function (e) {
      return arguments.length && e !== p && (a(c).innerHTML = e, p = e, k = 0), p;
    }, h.enableBack = function (e, t) {
      return arguments.length && (w = e, t || h.updateBackButton()), w;
    }, h.showBack = function (e, t) {
      return arguments.length && (b = e, t || h.updateBackButton()), b;
    }, h.showNavBack = function (e) {
      y = e, h.updateBackButton();
    }, h.updateBackButton = function () {
      var e;(b && y && w) !== S && (S = b && y && w, e = a(l), e && e.classList[S ? "remove" : "add"](f)), w && (e = e || a(l), e && (h.backButtonIcon !== o.backButton.icon() && (e = a(l + " .icon"), e && (h.backButtonIcon = o.backButton.icon(), e.className = "icon " + h.backButtonIcon)), h.backButtonText !== o.backButton.text() && (e = a(l + " .back-text"), e && (e.textContent = h.backButtonText = o.backButton.text()))));
    }, h.titleTextWidth = function () {
      var e = a(c);if (e) for (var t = angular.element(e).children(), n = 0; n < t.length; n++) {
        if (angular.element(t[n]).hasClass("nav-bar-title")) {
          e = t[n];break;
        }
      }var i = ionic.DomUtil.getTextBounds(e);return k = Math.min(i && i.width || 30);
    }, h.titleWidth = function () {
      var e = h.titleTextWidth(),
          t = a(c).offsetWidth;return e > t && (e = t + (g - m - 5)), e;
    }, h.titleTextX = function () {
      return t[0].offsetWidth / 2 - h.titleWidth() / 2;
    }, h.titleLeftRight = function () {
      return g - m;
    }, h.backButtonTextLeft = function () {
      for (var e = 0, t = a(s); t;) {
        e += t.offsetLeft, t = t.parentElement;
      }return e;
    }, h.resetBackButton = function (e) {
      if (o.backButton.previousTitleText()) {
        var t = a(d);if (t) {
          t.classList.remove(f);var n = e && r.getViewById(e.viewId),
              i = r.backTitle(n);i !== v && (v = t.innerHTML = i);
        }var c = a(u);c && c.classList.remove(f);
      }
    }, h.align = function (e) {
      var i = a(c);e = e || n.alignTitle || o.navBar.alignTitle();var r = h.calcWidths(e, !1);if (b && v && o.backButton.previousTitleText()) {
        var s = h.calcWidths(e, !0),
            l = t[0].offsetWidth - s.titleLeft - s.titleRight;h.titleTextWidth() <= l && (r = s);
      }return h.updatePositions(i, r.titleLeft, r.titleRight, r.buttonsLeft, r.buttonsRight, r.css, r.showPrevTitle);
    }, h.calcWidths = function (e, n) {
      var i,
          o,
          r,
          h,
          p,
          v,
          g,
          m,
          $,
          w = a(c),
          y = a(l),
          S = t[0].childNodes,
          k = 0,
          C = 0,
          T = 0,
          I = 0,
          B = "",
          x = 0;for (i = 0; i < S.length; i++) {
        if (p = S[i], g = 0, 1 == p.nodeType) {
          if (p === w) {
            $ = !0;continue;
          }if (p.classList.contains(f)) continue;if (b && p === y) {
            for (o = 0; o < p.childNodes.length; o++) {
              if (h = p.childNodes[o], 1 == h.nodeType) {
                if (h.classList.contains(s)) for (r = 0; r < h.children.length; r++) {
                  if (v = h.children[r], n) {
                    if (v.classList.contains(u)) continue;x += v.offsetWidth;
                  } else {
                    if (v.classList.contains(d)) continue;x += v.offsetWidth;
                  }
                } else x += h.offsetWidth;
              } else 3 == h.nodeType && h.nodeValue.trim() && (m = ionic.DomUtil.getTextBounds(h), x += m && m.width || 0);
            }g = x || p.offsetWidth;
          } else g = p.offsetWidth;
        } else 3 == p.nodeType && p.nodeValue.trim() && (m = ionic.DomUtil.getTextBounds(p), g = m && m.width || 0);$ ? C += g : k += g;
      }if ("left" == e) B = "title-left", k && (T = k + 15), C && (I = C + 15);else if ("right" == e) B = "title-right", k && (T = k + 15), C && (I = C + 15);else {
        var A = Math.max(k, C) + 10;A > 10 && (T = I = A);
      }return { backButtonWidth: x, buttonsLeft: k, buttonsRight: C, titleLeft: T, titleRight: I, showPrevTitle: n, css: B };
    }, h.updatePositions = function (e, n, r, c, s, l, p) {
      var v = i.defer();if (e && (n !== g && (e.style.left = n ? n + "px" : "", g = n), r !== m && (e.style.right = r ? r + "px" : "", m = r), l !== $ && (l && e.classList.add(l), $ && e.classList.remove($), $ = l)), o.backButton.previousTitleText()) {
        var w = a(d),
            b = a(u);w && w.classList[p ? "remove" : "add"](f), b && b.classList[p ? "add" : "remove"](f);
      }return ionic.requestAnimationFrame(function () {
        if (e && e.offsetWidth + 10 < e.scrollWidth) {
          var n = s + 5,
              i = t[0].offsetWidth - g - h.titleTextWidth() - 20;r = n > i ? n : i, r !== m && (e.style.right = r + "px", m = r);
        }v.resolve();
      }), v.promise;
    }, h.setCss = function (e, t) {
      ionic.DomUtil.cachedStyles(a(e), t);
    };var C = {};e.$on("$destroy", function () {
      for (var e in C) {
        C[e] = null;
      }
    });
  }]), a.controller("$ionInfiniteScroll", ["$scope", "$attrs", "$element", "$timeout", function (e, t, n, i) {
    function o() {
      ionic.requestAnimationFrame(function () {
        n[0].classList.add("active");
      }), s.isLoading = !0, e.$parent && e.$parent.$apply(t.onInfinite || "");
    }function r() {
      ionic.requestAnimationFrame(function () {
        n[0].classList.remove("active");
      }), i(function () {
        s.jsScrolling && s.scrollView.resize(), (s.jsScrolling && s.scrollView.__container && s.scrollView.__container.offsetHeight > 0 || !s.jsScrolling) && s.checkBounds();
      }, 30, !1), s.isLoading = !1;
    }function a() {
      if (!s.isLoading) {
        var e = {};if (s.jsScrolling) {
          e = s.getJSMaxScroll();var t = s.scrollView.getValues();(-1 !== e.left && t.left >= e.left || -1 !== e.top && t.top >= e.top) && o();
        } else e = s.getNativeMaxScroll(), (-1 !== e.left && s.scrollEl.scrollLeft >= e.left - s.scrollEl.clientWidth || -1 !== e.top && s.scrollEl.scrollTop >= e.top - s.scrollEl.clientHeight) && o();
      }
    }function c(e) {
      var n = (t.distance || "2.5%").trim(),
          i = -1 !== n.indexOf("%");return i ? e * (1 - parseFloat(n) / 100) : e - parseFloat(n);
    }var s = this;s.isLoading = !1, e.icon = function () {
      return l(t.icon) ? t.icon : "ion-load-d";
    }, e.spinner = function () {
      return l(t.spinner) ? t.spinner : "";
    }, e.$on("scroll.infiniteScrollComplete", function () {
      r();
    }), e.$on("$destroy", function () {
      s.scrollCtrl && s.scrollCtrl.$element && s.scrollCtrl.$element.off("scroll", s.checkBounds), s.scrollEl && s.scrollEl.removeEventListener && s.scrollEl.removeEventListener("scroll", s.checkBounds);
    }), s.checkBounds = ionic.Utils.throttle(a, 300), s.getJSMaxScroll = function () {
      var e = s.scrollView.getScrollMax();return { left: s.scrollView.options.scrollingX ? c(e.left) : -1, top: s.scrollView.options.scrollingY ? c(e.top) : -1 };
    }, s.getNativeMaxScroll = function () {
      var e = { left: s.scrollEl.scrollWidth, top: s.scrollEl.scrollHeight },
          t = window.getComputedStyle(s.scrollEl) || {};return { left: !e.left || "scroll" !== t.overflowX && "auto" !== t.overflowX && "scroll" !== s.scrollEl.style["overflow-x"] ? -1 : c(e.left), top: !e.top || "scroll" !== t.overflowY && "auto" !== t.overflowY && "scroll" !== s.scrollEl.style["overflow-y"] ? -1 : c(e.top) };
    }, s.__finishInfiniteScroll = r;
  }]), a.service("$ionicListDelegate", ionic.DelegateService(["showReorder", "showDelete", "canSwipeItems", "closeOptionButtons"])).controller("$ionicList", ["$scope", "$attrs", "$ionicListDelegate", "$ionicHistory", function (e, t, n, i) {
    var o = this,
        r = !0,
        a = !1,
        c = !1,
        s = n._registerInstance(o, t.delegateHandle, function () {
      return i.isActiveScope(e);
    });e.$on("$destroy", s), o.showReorder = function (e) {
      return arguments.length && (a = !!e), a;
    }, o.showDelete = function (e) {
      return arguments.length && (c = !!e), c;
    }, o.canSwipeItems = function (e) {
      return arguments.length && (r = !!e), r;
    }, o.closeOptionButtons = function () {
      o.listView && o.listView.clearDragEffects();
    };
  }]), a.controller("$ionicNavBar", ["$scope", "$element", "$attrs", "$compile", "$timeout", "$ionicNavBarDelegate", "$ionicConfig", "$ionicHistory", function (e, t, n, i, o, r, a, c) {
    function u(e, t) {
      var n = console.warn || console.log;n && n.call(console, "navBarController." + e + " is deprecated, please use " + t + " instead");
    }function d(e) {
      return x[e] ? f(x[e]) : void 0;
    }function h() {
      for (var e = 0; e < B.length; e++) {
        if (B[e].isActive) return B[e];
      }
    }function p() {
      for (var e = 0; e < B.length; e++) {
        if (!B[e].isActive) return B[e];
      }
    }function v(e, t) {
      e && ionic.DomUtil.cachedAttr(e.containerEle(), "nav-bar", t);
    }function g(e) {
      ionic.DomUtil.cachedAttr(t, "nav-swipe", e);
    }var _m,
        $,
        w,
        b = "hide",
        y = "$ionNavBarController",
        S = "primaryButtons",
        k = "secondaryButtons",
        C = "backButton",
        T = "primaryButtons secondaryButtons leftButtons rightButtons title".split(" "),
        I = this,
        B = [],
        x = {},
        A = !0;t.parent().data(y, I);var V = n.delegateHandle || "navBar" + ionic.Utils.nextUid(),
        E = r._registerInstance(I, V);I.init = function () {
      t.addClass("nav-bar-container"), ionic.DomUtil.cachedAttr(t, "nav-bar-transition", a.views.transition()), I.createHeaderBar(!1), I.createHeaderBar(!0), e.$emit("ionNavBar.init", V);
    }, I.createHeaderBar = function (o) {
      function r(e, t) {
        e && ("title" === t ? g.append(e) : "rightButtons" == t || t == k && "left" != a.navBar.positionSecondaryButtons() || t == S && "right" == a.navBar.positionPrimaryButtons() ? (v || (v = f('<div class="buttons buttons-right">'), h.append(v)), t == k ? v.append(e) : v.prepend(e)) : (p || (p = f('<div class="buttons buttons-left">'), m[C] ? m[C].after(p) : h.prepend(p)), t == k ? p.append(e) : p.prepend(e)));
      }var c = f('<div class="nav-bar-block">');ionic.DomUtil.cachedAttr(c, "nav-bar", o ? "active" : "cached");var u = n.alignTitle || a.navBar.alignTitle(),
          h = f("<ion-header-bar>").addClass(n["class"]).attr("align-title", u);l(n.noTapScroll) && h.attr("no-tap-scroll", n.noTapScroll);var p,
          v,
          g = f('<div class="title title-' + u + '">'),
          m = {},
          $ = {};m[C] = d(C), m[C] && h.append(m[C]), h.append(g), s(T, function (e) {
        m[e] = d(e), r(m[e], e);
      });for (var w = 0; w < h[0].children.length; w++) {
        h[0].children[w].classList.add("header-item");
      }c.append(h), t.append(i(c)(e.$new()));var y = h.data("$ionHeaderBarController");y.backButtonIcon = a.backButton.icon(), y.backButtonText = a.backButton.text();var I = { isActive: o, title: function title(e) {
          y.title(e);
        }, setItem: function setItem(e, t) {
          I.removeItem(t), e ? ("title" === t && I.title(""), r(e, t), m[t] && m[t].addClass(b), $[t] = e) : m[t] && m[t].removeClass(b);
        }, removeItem: function removeItem(e) {
          $[e] && ($[e].scope().$destroy(), $[e].remove(), $[e] = null);
        }, containerEle: function containerEle() {
          return c;
        }, headerBarEle: function headerBarEle() {
          return h;
        }, afterLeave: function afterLeave() {
          s(T, function (e) {
            I.removeItem(e);
          }), y.resetBackButton();
        }, controller: function controller() {
          return y;
        }, destroy: function destroy() {
          s(T, function (e) {
            I.removeItem(e);
          }), c.scope().$destroy();for (var e in m) {
            m[e] && (m[e].removeData(), m[e] = null);
          }p && p.removeData(), v && v.removeData(), g.removeData(), h.removeData(), c.remove(), c = h = g = p = v = null;
        } };return B.push(I), I;
    }, I.navElement = function (e, t) {
      return l(t) && (x[e] = t), x[e];
    }, I.update = function (e) {
      var t = !e.hasHeaderBar && e.showNavBar;e.transition = a.views.transition(), t || (e.direction = "none"), I.enable(t);var n = I.isInitialized ? p() : h(),
          i = I.isInitialized ? h() : null,
          o = n.controller();o.enableBack(e.enableBack, !0), o.showBack(e.showBack, !0), o.updateBackButton(), I.title(e.title, n), I.showBar(t), e.navBarItems && s(T, function (t) {
        n.setItem(e.navBarItems[t], t);
      }), I.transition(n, i, e), I.isInitialized = !0, g("");
    }, I.transition = function (n, i, r) {
      function c() {
        for (var e = 0; e < B.length; e++) {
          B[e].isActive = !1;
        }n.isActive = !0, v(n, "active"), v(i, "cached"), I.activeTransition = d = $ = null;
      }var s = n.controller(),
          l = a.transitions.navBar[r.navBarTransition] || a.transitions.navBar.none,
          u = r.transitionId;s.beforeEnter(r);var d = l(n, i, r.direction, r.shouldAnimate && I.isInitialized);ionic.DomUtil.cachedAttr(t, "nav-bar-transition", r.navBarTransition), ionic.DomUtil.cachedAttr(t, "nav-bar-direction", r.direction), d.shouldAnimate && r.renderEnd ? v(n, "stage") : (v(n, "entering"), v(i, "leaving")), s.resetBackButton(r), d.run(0), I.activeTransition = { run: function run(e) {
          d.shouldAnimate = !1, d.direction = "back", d.run(e);
        }, cancel: function cancel(t, o, r) {
          g(o), v(i, "active"), v(n, "cached"), d.shouldAnimate = t, d.run(0), I.activeTransition = d = null;var a;r.showBar !== I.showBar() && I.showBar(r.showBar), r.showBackButton !== I.showBackButton() && I.showBackButton(r.showBackButton), a && e.$apply();
        }, complete: function complete(e, t) {
          g(t), d.shouldAnimate = e, d.run(1), $ = c;
        } }, o(s.align, 16), (_m = function m() {
        w === u && (v(n, "entering"), v(i, "leaving"), d.run(1), $ = function $() {
          w != u && d.shouldAnimate || c();
        }, _m = null);
      })();
    }, I.triggerTransitionStart = function (e) {
      w = e, _m && _m();
    }, I.triggerTransitionEnd = function () {
      $ && $();
    }, I.showBar = function (t) {
      return arguments.length && (I.visibleBar(t), e.$parent.$hasHeader = !!t), !!e.$parent.$hasHeader;
    }, I.visibleBar = function (e) {
      e && !A ? (t.removeClass(b), I.align()) : !e && A && t.addClass(b), A = e;
    }, I.enable = function (e) {
      I.visibleBar(e);for (var t = 0; t < r._instances.length; t++) {
        r._instances[t] !== I && r._instances[t].visibleBar(!1);
      }
    }, I.showBackButton = function (t) {
      if (arguments.length) {
        for (var n = 0; n < B.length; n++) {
          B[n].controller().showNavBack(!!t);
        }e.$isBackButtonShown = !!t;
      }return e.$isBackButtonShown;
    }, I.showActiveBackButton = function (e) {
      var t = h();return t ? arguments.length ? t.controller().showBack(e) : t.controller().showBack() : void 0;
    }, I.title = function (t, n) {
      return l(t) && (t = t || "", n = n || h(), n && n.title(t), e.$title = t, c.currentTitle(t)), e.$title;
    }, I.align = function (e, t) {
      t = t || h(), t && t.controller().align(e);
    }, I.hasTabsTop = function (e) {
      t[e ? "addClass" : "removeClass"]("nav-bar-tabs-top");
    }, I.hasBarSubheader = function (e) {
      t[e ? "addClass" : "removeClass"]("nav-bar-has-subheader");
    }, I.changeTitle = function (e) {
      u("changeTitle(val)", "title(val)"), I.title(e);
    }, I.setTitle = function (e) {
      u("setTitle(val)", "title(val)"), I.title(e);
    }, I.getTitle = function () {
      return u("getTitle()", "title()"), I.title();
    }, I.back = function () {
      u("back()", "$ionicHistory.goBack()"), c.goBack();
    }, I.getPreviousTitle = function () {
      u("getPreviousTitle()", "$ionicHistory.backTitle()"), c.goBack();
    }, e.$on("$destroy", function () {
      e.$parent.$hasHeader = !1, t.parent().removeData(y);for (var n = 0; n < B.length; n++) {
        B[n].destroy();
      }t.remove(), t = B = null, E();
    });
  }]), a.controller("$ionicNavView", ["$scope", "$element", "$attrs", "$compile", "$controller", "$ionicNavBarDelegate", "$ionicNavViewDelegate", "$ionicHistory", "$ionicViewSwitcher", "$ionicConfig", "$ionicScrollDelegate", "$ionicSideMenuDelegate", function (e, t, n, i, o, r, a, s, l, u, d, f) {
    function h(e, n) {
      for (var i, o, r = t.children(), a = 0, c = r.length; c > a; a++) {
        if (i = r.eq(a), V(i) == I) {
          o = i.scope(), o && o.$emit(e.name.replace("Tabs", "View"), n), o && o.$broadcast(e.name.replace("Tabs", "ParentView"), n);break;
        }
      }
    }function p(e) {
      ionic.DomUtil.cachedAttr(t, "nav-swipe", e);
    }function v(e, t) {
      var n = m();n && n.hasTabsTop(t);
    }function g(e, t) {
      var n = m();n && n.hasBarSubheader(t);
    }function m() {
      if (w) for (var e = 0; e < r._instances.length; e++) {
        if (r._instances[e].$$delegateHandle == w) return r._instances[e];
      }return t.inheritedData("$ionNavBarController");
    }var $,
        w,
        b,
        y,
        S,
        k = "$eleId",
        C = "$destroyEle",
        T = "$noCache",
        I = "active",
        B = "cached",
        x = this,
        A = !1,
        V = l.navViewAttr;x.scope = e, x.element = t, x.init = function () {
      var i = n.name || "",
          o = t.parent().inheritedData("$uiView"),
          r = o && o.state ? o.state.name : "";i.indexOf("@") < 0 && (i = i + "@" + r);var c = { name: i, state: null };t.data("$uiView", c);var s = a._registerInstance(x, n.delegateHandle);return e.$on("$destroy", function () {
        s(), x.isSwipeFreeze && d.freezeAllScrolls(!1);
      }), e.$on("$ionicHistory.deselect", x.cacheCleanup), e.$on("$ionicTabs.top", v), e.$on("$ionicSubheader", g), e.$on("$ionicTabs.beforeLeave", h), e.$on("$ionicTabs.afterLeave", h), e.$on("$ionicTabs.leave", h), ionic.Platform.ready(function () {
        ionic.Platform.isWebView() && ionic.Platform.isIOS() && x.initSwipeBack();
      }), c;
    }, x.register = function (t) {
      var n = c({}, s.currentView()),
          i = s.register(e, t);x.update(i);var o = s.getViewById(i.viewId) || {},
          r = y !== i.viewId;x.render(i, t, o, n, r, !0);
    }, x.update = function (e) {
      A = !0, $ = e.direction;var n = t.parent().inheritedData("$ionNavViewController");n && (n.isPrimary(!1), ("enter" === $ || "exit" === $) && (n.direction($), "enter" === $ && ($ = "none")));
    }, x.render = function (e, t, n, i, o, r) {
      var a = l.create(x, t, n, i, o, r);a.init(e, function () {
        a.transition(x.direction(), e.enableBack, !S), y = S = null;
      });
    }, x.beforeEnter = function (e) {
      if (A) {
        w = e.navBarDelegate;var t = m();t && t.update(e), p("");
      }
    }, x.activeEleId = function (e) {
      return arguments.length && (b = e), b;
    }, x.transitionEnd = function () {
      var e,
          n,
          i,
          o = t.children();for (e = 0, n = o.length; n > e; e++) {
        i = o.eq(e), i.data(k) === b ? V(i, I) : ("leaving" === V(i) || V(i) === I || V(i) === B) && (i.data(C) || i.data(T) ? l.destroyViewEle(i) : (V(i, B), ionic.Utils.disconnectScope(i.scope())));
      }p(""), x.isSwipeFreeze && d.freezeAllScrolls(!1);
    }, x.cacheCleanup = function () {
      for (var e = t.children(), n = 0, i = e.length; i > n; n++) {
        e.eq(n).data(C) && l.destroyViewEle(e.eq(n));
      }
    }, x.clearCache = function (e) {
      var n,
          i,
          o,
          r,
          a,
          c,
          s = t.children();for (o = 0, r = s.length; r > o; o++) {
        if (n = s.eq(o), e) for (c = n.data(k), a = 0; a < e.length; a++) {
          c === e[a] && l.destroyViewEle(n);
        } else V(n) == B ? l.destroyViewEle(n) : V(n) == I && (i = n.scope(), i && i.$broadcast("$ionicView.clearCache"));
      }
    }, x.getViewElements = function () {
      return t.children();
    }, x.appendViewElement = function (n, r) {
      var a = i(n);t.append(n);var c = e.$new();if (r && r.$$controller) {
        r.$scope = c;var s = o(r.$$controller, r);r.$$controllerAs && (c[r.$$controllerAs] = s), t.children().data("$ngControllerController", s);
      }return a(c), c;
    }, x.title = function (e) {
      var t = m();t && t.title(e);
    }, x.enableBackButton = function (e) {
      var t = m();t && t.enableBackButton(e);
    }, x.showBackButton = function (e) {
      var t = m();return t ? arguments.length ? t.showActiveBackButton(e) : t.showActiveBackButton() : !0;
    }, x.showBar = function (e) {
      var t = m();return t ? arguments.length ? t.showBar(e) : t.showBar() : !0;
    }, x.isPrimary = function (e) {
      return arguments.length && (A = e), A;
    }, x.direction = function (e) {
      return arguments.length && ($ = e), $;
    }, x.initSwipeBack = function () {
      function n(e) {
        if (A && u.views.swipeBackEnabled() && !f.isOpenRight() && (k = r(e), !(k > T))) {
          v = s.backView();var n = s.currentView();if (v && v.historyId === n.historyId && n.canSwipeBack !== !1) {
            b || (b = window.innerWidth), x.isSwipeFreeze = d.freezeAllScrolls(!0);var a = { direction: "back" };C = [], I = { showBar: x.showBar(), showBackButton: x.showBackButton() };var p = l.create(x, a, v, n, !0, !1);p.loadViewElements(a), p.render(a), c = p.transition("back", s.enabledBack(v), !0), h = m(), $ = ionic.onGesture("drag", i, t[0]), w = ionic.onGesture("release", o, t[0]);
          }
        }
      }function i(e) {
        if (A && c) {
          var t = r(e);if (C.push({ t: Date.now(), x: t }), t >= b - 15) o(e);else {
            var n = Math.min(Math.max(a(t), 0), 1);c.run(n), h && h.activeTransition && h.activeTransition.run(n);
          }
        }
      }function o(e) {
        if (A && c && C && C.length > 1) {
          for (var t = Date.now(), n = r(e), s = C[C.length - 1], l = C.length - 2; l >= 0 && !(t - s.t > 200); l--) {
            s = C[l];
          }var u = n >= C[C.length - 2].x,
              f = a(n),
              g = Math.abs(s.x - n) / (t - s.t);if (y = v.viewId, S = .03 > f || f > .97, u && (f > .5 || g > .1)) {
            var m = g > .5 || .05 > g || n > b - 45 ? "fast" : "slow";p(S ? "" : m), v.go(), h && h.activeTransition && h.activeTransition.complete(!S, m);
          } else p(S ? "" : "fast"), y = null, c.cancel(!S), h && h.activeTransition && h.activeTransition.cancel(!S, "fast", I), S = null;
        }ionic.offGesture($, "drag", i), ionic.offGesture(w, "release", o), b = c = C = null, x.isSwipeFreeze = d.freezeAllScrolls(!1);
      }function r(e) {
        return ionic.tap.pointerCoord(e.gesture.srcEvent).x;
      }function a(e) {
        return (e - k) / b;
      }var c,
          h,
          v,
          g,
          $,
          w,
          b,
          k,
          C,
          T = u.views.swipeBackHitWidth(),
          I = {};g = ionic.onGesture("dragstart", n, t[0]), e.$on("$destroy", function () {
        ionic.offGesture(g, "dragstart", n), ionic.offGesture($, "drag", i), ionic.offGesture(w, "release", o), x.element = c = h = null;
      });
    };
  }]), a.controller("$ionicRefresher", ["$scope", "$attrs", "$element", "$ionicBind", "$timeout", function (e, t, n, i, o) {
    function r(e) {
      e.touches = e.touches || [{ screenX: e.screenX, screenY: e.screenY }], P = Math.floor(e.touches[0].screenY);
    }function a(e) {
      e.touches = e.touches || [{ screenX: e.screenX, screenY: e.screenY }], P = e.touches[0].screenY;
    }function c() {
      P = null, (D || T) && (T ? (T = !1, B = 0, x > A ? ($(), p(A, E)) : (p(0, E, m), I = !1)) : (B = 0, I = !1, h(!1)));
    }function s(e) {
      if (e.touches = e.touches || [{ screenX: e.screenX, screenY: e.screenY }], (P || "mousemove" != e.type) && D && !(e.touches.length > 1)) {
        if (null === P && (P = e.touches[0].screenY), _ = e.touches[0].screenY - P, ionic.Platform.isAndroid() && 4.4 === ionic.Platform.version() && !ionic.Platform.isCrosswalk() && 0 === S.scrollTop && _ > 0 && (T = !0, e.preventDefault()), 0 >= _ - B || 0 !== S.scrollTop) return I && (I = !1, h(!1)), T && f(S, _ - -1 * B), void (0 !== x && d(0));_ > 0 && 0 === S.scrollTop && !I && (B = _), e.preventDefault(), I || (I = !0, h(!0)), T = !0, d((_ - B) / 3), !V && x > A ? (V = !0, ionic.requestAnimationFrame(g)) : V && A > x && (V = !1, ionic.requestAnimationFrame(m));
      }
    }function u(e) {
      D = 0 === e.target.scrollTop || T;
    }function d(e) {
      k.style[ionic.CSS.TRANSFORM] = "translate3d(0px, " + e + "px, 0px)", x = e;
    }function f(e, t) {
      e.scrollTop = t;var n = document.createEvent("UIEvents");n.initUIEvent("scroll", !0, !0, window, 1), e.dispatchEvent(n);
    }function h(e) {
      e ? ionic.requestAnimationFrame(function () {
        k.classList.add("overscroll"), w();
      }) : ionic.requestAnimationFrame(function () {
        k.classList.remove("overscroll"), b(), m();
      });
    }function p(e, t, n) {
      function i(e) {
        return --e * e * e + 1;
      }function o() {
        var c = Date.now(),
            s = Math.min(1, (c - r) / t),
            l = i(s);d(Math.floor(l * (e - a) + a)), 1 > s ? ionic.requestAnimationFrame(o) : (5 > e && e > -5 && (I = !1, h(!1)), n && n());
      }var r = Date.now(),
          a = x;return a === e ? void n() : void ionic.requestAnimationFrame(o);
    }function v() {
      k && (ionic.off(L, a, k), ionic.off(R, s, k), ionic.off(M, c, k), ionic.off("mousedown", r, k), ionic.off("mousemove", s, k), ionic.off("mouseup", c, k)), S && ionic.off("scroll", u, S), S = null, k = null;
    }function g() {
      n[0].classList.add("active"), e.$onPulling();
    }function m() {
      o(function () {
        n.removeClass("active refreshing refreshing-tail"), V && (V = !1);
      }, 150);
    }function $() {
      n[0].classList.add("refreshing");var t = e.$onRefresh();t && t.then && t["finally"](function () {
        e.$broadcast("scroll.refreshComplete");
      });
    }function w() {
      n[0].classList.remove("invisible");
    }function b() {
      n[0].classList.add("invisible");
    }function y() {
      n[0].classList.add("refreshing-tail");
    }var S,
        k,
        C = this,
        T = !1,
        I = !1,
        B = 0,
        x = 0,
        A = 60,
        V = !1,
        E = 500,
        P = null,
        _ = null,
        D = !0;l(t.pullingIcon) || t.$set("pullingIcon", "ion-android-arrow-down"), e.showSpinner = !l(t.refreshingIcon) && "none" != t.spinner, e.showIcon = l(t.refreshingIcon), i(e, t, { pullingIcon: "@", pullingText: "@", refreshingIcon: "@", refreshingText: "@", spinner: "@", disablePullingRotation: "@", $onRefresh: "&onRefresh", $onPulling: "&onPulling" }), e.$on("scroll.refreshComplete", function () {
      o(function () {
        ionic.requestAnimationFrame(y), p(0, E, m), o(function () {
          I && (I = !1, h(!1));
        }, E);
      }, E);
    });var L, R, M;window.navigator.pointerEnabled ? (L = "pointerdown", R = "pointermove", M = "pointerup") : window.navigator.msPointerEnabled ? (L = "MSPointerDown", R = "MSPointerMove", M = "MSPointerUp") : (L = "touchstart", R = "touchmove", M = "touchend"), C.init = function () {
      if (S = n.parent().parent()[0], k = n.parent()[0], !(S && S.classList.contains("ionic-scroll") && k && k.classList.contains("scroll"))) throw new Error("Refresher must be immediate child of ion-content or ion-scroll");ionic.on(L, a, k), ionic.on(R, s, k), ionic.on(M, c, k), ionic.on("mousedown", r, k), ionic.on("mousemove", s, k), ionic.on("mouseup", c, k), ionic.on("scroll", u, S), e.$on("$destroy", v);
    }, C.getRefresherDomMethods = function () {
      return { activate: g, deactivate: m, start: $, show: w, hide: b, tail: y };
    }, C.__handleTouchmove = s, C.__getScrollChild = function () {
      return k;
    }, C.__getScrollParent = function () {
      return S;
    };
  }]), a.controller("$ionicScroll", ["$scope", "scrollViewOptions", "$timeout", "$window", "$location", "$document", "$ionicScrollDelegate", "$ionicHistory", function (e, t, n, i, o, r, a, c) {
    var s = this;s.__timeout = n, s._scrollViewOptions = t, s.isNative = function () {
      return !!t.nativeScrolling;
    };var u,
        d = s.element = t.el,
        h = s.$element = f(d);u = s.isNative() ? s.scrollView = new ionic.views.ScrollNative(t) : s.scrollView = new ionic.views.Scroll(t), (h.parent().length ? h.parent() : h).data("$$ionicScrollController", s);var p = a._registerInstance(s, t.delegateHandle, function () {
      return c.isActiveScope(e);
    });l(t.bouncing) || ionic.Platform.ready(function () {
      u && u.options && (u.options.bouncing = !0, ionic.Platform.isAndroid() && (u.options.bouncing = !1, u.options.deceleration = .95));
    });var v = angular.bind(u, u.resize);angular.element(i).on("resize", v);var g = function g(t) {
      var n = (t.originalEvent || t).detail || {};e.$onScroll && e.$onScroll({ event: t, scrollTop: n.scrollTop || 0, scrollLeft: n.scrollLeft || 0 });
    };h.on("scroll", g), e.$on("$destroy", function () {
      p(), u && u.__cleanup && u.__cleanup(), angular.element(i).off("resize", v), h && h.off("scroll", g), s._scrollViewOptions && (s._scrollViewOptions.el = null), t && (t.el = null), u = s.scrollView = t = s._scrollViewOptions = d = s.$element = h = null;
    }), n(function () {
      u && u.run && u.run();
    }), s.getScrollView = function () {
      return u;
    }, s.getScrollPosition = function () {
      return u.getValues();
    }, s.resize = function () {
      return n(v, 0, !1).then(function () {
        h && h.triggerHandler("scroll-resize");
      });
    }, s.scrollTop = function (e) {
      s.resize().then(function () {
        u && u.scrollTo(0, 0, !!e);
      });
    }, s.scrollBottom = function (e) {
      s.resize().then(function () {
        if (u) {
          var t = u.getScrollMax();u.scrollTo(t.left, t.top, !!e);
        }
      });
    }, s.scrollTo = function (e, t, n) {
      s.resize().then(function () {
        u && u.scrollTo(e, t, !!n);
      });
    }, s.zoomTo = function (e, t, n, i) {
      s.resize().then(function () {
        u && u.zoomTo(e, !!t, n, i);
      });
    }, s.zoomBy = function (e, t, n, i) {
      s.resize().then(function () {
        u && u.zoomBy(e, !!t, n, i);
      });
    }, s.scrollBy = function (e, t, n) {
      s.resize().then(function () {
        u && u.scrollBy(e, t, !!n);
      });
    }, s.anchorScroll = function (e) {
      s.resize().then(function () {
        if (u) {
          var t = o.hash(),
              n = t && r[0].getElementById(t);if (!t || !n) return void u.scrollTo(0, 0, !!e);var i = n,
              a = 0,
              c = 0;do {
            null !== i && (a += i.offsetLeft), null !== i && (c += i.offsetTop), i = i.offsetParent;
          } while (i.attributes != s.element.attributes && i.offsetParent);u.scrollTo(a, c, !!e);
        }
      });
    }, s.freezeScroll = u.freeze, s.freezeScrollShut = u.freezeShut, s.freezeAllScrolls = function (e) {
      for (var t = 0; t < a._instances.length; t++) {
        a._instances[t].freezeScroll(e);
      }
    }, s._setRefresher = function (e, t, n) {
      s.refresher = t;var i = s.refresher.clientHeight || 60;u.activatePullToRefresh(i, n);
    };
  }]), a.controller("$ionicSideMenus", ["$scope", "$attrs", "$ionicSideMenuDelegate", "$ionicPlatform", "$ionicBody", "$ionicHistory", "$ionicScrollDelegate", "IONIC_BACK_PRIORITY", "$rootScope", function (e, t, n, i, o, r, a, c, s) {
    var l,
        d,
        f,
        p,
        v,
        g,
        m,
        $ = this,
        w = !0;$.$scope = e, $.initialize = function (e) {
      $.left = e.left, $.right = e.right, $.setContent(e.content), $.dragThresholdX = e.dragThresholdX || 10, r.registerHistory($.$scope);
    }, $.setContent = function (e) {
      e && ($.content = e, $.content.onDrag = function (e) {
        $._handleDrag(e);
      }, $.content.endDrag = function (e) {
        $._endDrag(e);
      });
    }, $.isOpenLeft = function () {
      return $.getOpenAmount() > 0;
    }, $.isOpenRight = function () {
      return $.getOpenAmount() < 0;
    }, $.toggleLeft = function (e) {
      if (!m && $.left.isEnabled) {
        var t = $.getOpenAmount();0 === arguments.length && (e = 0 >= t), $.content.enableAnimation(), e ? ($.openPercentage(100), s.$emit("$ionicSideMenuOpen", "left")) : ($.openPercentage(0), s.$emit("$ionicSideMenuClose", "left"));
      }
    }, $.toggleRight = function (e) {
      if (!m && $.right.isEnabled) {
        var t = $.getOpenAmount();0 === arguments.length && (e = t >= 0), $.content.enableAnimation(), e ? ($.openPercentage(-100), s.$emit("$ionicSideMenuOpen", "right")) : ($.openPercentage(0), s.$emit("$ionicSideMenuClose", "right"));
      }
    }, $.toggle = function (e) {
      "right" == e ? $.toggleRight() : $.toggleLeft();
    }, $.close = function () {
      $.openPercentage(0), s.$emit("$ionicSideMenuClose", "left"), s.$emit("$ionicSideMenuClose", "right");
    }, $.getOpenAmount = function () {
      return $.content && $.content.getTranslateX() || 0;
    }, $.getOpenRatio = function () {
      var e = $.getOpenAmount();return e >= 0 ? e / $.left.width : e / $.right.width;
    }, $.isOpen = function () {
      return 0 !== $.getOpenAmount();
    }, $.getOpenPercentage = function () {
      return 100 * $.getOpenRatio();
    }, $.openPercentage = function (e) {
      var t = e / 100;$.left && e >= 0 ? $.openAmount($.left.width * t) : $.right && 0 > e && $.openAmount($.right.width * t), o.enableClass(0 !== e, "menu-open"), $.content.setCanScroll(0 == e);
    }, $.openAmount = function (e) {
      var t = $.left && $.left.width || 0,
          n = $.right && $.right.width || 0;return ($.left && $.left.isEnabled || !(e > 0)) && ($.right && $.right.isEnabled || !(0 > e)) ? d && e > t ? void $.content.setTranslateX(t) : l && -n > e ? void $.content.setTranslateX(-n) : ($.content.setTranslateX(e), d = e > 0, l = 0 > e, void (e > 0 ? ($.right && $.right.pushDown && $.right.pushDown(), $.left && $.left.bringUp && $.left.bringUp()) : ($.right && $.right.bringUp && $.right.bringUp(), $.left && $.left.pushDown && $.left.pushDown()))) : void $.content.setTranslateX(0);
    }, $.snapToRest = function (e) {
      $.content.enableAnimation(), f = !1;var t = $.getOpenRatio();if (0 === t) return void $.openPercentage(0);var n = .3,
          i = e.gesture.velocityX,
          o = e.gesture.direction;t > 0 && .5 > t && "right" == o && n > i ? $.openPercentage(0) : t > .5 && "left" == o && n > i ? $.openPercentage(100) : 0 > t && t > -.5 && "left" == o && n > i ? $.openPercentage(0) : .5 > t && "right" == o && n > i ? $.openPercentage(-100) : "right" == o && t >= 0 && (t >= .5 || i > n) ? $.openPercentage(100) : "left" == o && 0 >= t && (-.5 >= t || i > n) ? $.openPercentage(-100) : $.openPercentage(0);
    }, $.enableMenuWithBackViews = function (e) {
      return arguments.length && (w = !!e), w;
    }, $.isAsideExposed = function () {
      return !!m;
    }, $.exposeAside = function (e) {
      ($.left && $.left.isEnabled || $.right && $.right.isEnabled) && ($.close(), m = e, $.left && $.left.isEnabled && $.right && $.right.isEnabled ? $.content.setMarginLeftAndRight(m ? $.left.width : 0, m ? $.right.width : 0) : $.left && $.left.isEnabled ? $.content.setMarginLeft(m ? $.left.width : 0) : $.right && $.right.isEnabled && $.content.setMarginRight(m ? $.right.width : 0), $.$scope.$emit("$ionicExposeAside", m));
    }, $.activeAsideResizing = function (e) {
      o.enableClass(e, "aside-resizing");
    }, $._endDrag = function (e) {
      m || (f && $.snapToRest(e), p = null, v = null, g = null);
    }, $._handleDrag = function (t) {
      !m && e.dragContent && (p ? v = t.gesture.touches[0].pageX : (p = t.gesture.touches[0].pageX, v = p), !f && Math.abs(v - p) > $.dragThresholdX && (p = v, f = !0, $.content.disableAnimation(), g = $.getOpenAmount()), f && $.openAmount(g + (v - p)));
    }, $.canDragContent = function (t) {
      return arguments.length && (e.dragContent = !!t), e.dragContent;
    }, $.edgeThreshold = 25, $.edgeThresholdEnabled = !1, $.edgeDragThreshold = function (e) {
      return arguments.length && (u(e) && e > 0 ? ($.edgeThreshold = e, $.edgeThresholdEnabled = !0) : $.edgeThresholdEnabled = !!e), $.edgeThresholdEnabled;
    }, $.isDraggableTarget = function (t) {
      var n = $.edgeThresholdEnabled && !$.isOpen(),
          i = t.gesture.startEvent && t.gesture.startEvent.center && t.gesture.startEvent.center.pageX,
          o = !n || i <= $.edgeThreshold || i >= $.content.element.offsetWidth - $.edgeThreshold,
          a = r.backView(),
          c = w ? !0 : !a;if (!c) {
        var s = r.currentView() || {};return o && a.historyId !== s.historyId;
      }return (e.dragContent || $.isOpen()) && o && !t.gesture.srcEvent.defaultPrevented && c && !t.target.tagName.match(/input|textarea|select|object|embed/i) && !t.target.isContentEditable && !(t.target.dataset ? t.target.dataset.preventScroll : "true" == t.target.getAttribute("data-prevent-scroll"));
    }, e.sideMenuContentTranslateX = 0;var b = h,
        y = angular.bind($, $.close);e.$watch(function () {
      return 0 !== $.getOpenAmount();
    }, function (e) {
      b(), e && (b = i.registerBackButtonAction(y, c.sideMenu));
    });var S = n._registerInstance($, t.delegateHandle, function () {
      return r.isActiveScope(e);
    });e.$on("$destroy", function () {
      S(), b(), $.$scope = null, $.content && ($.content.setCanScroll(!0), $.content.element = null, $.content = null);
    }), $.initialize({ left: { width: 275 }, right: { width: 275 } });
  }]), function (e) {
    function t(e, i, o, r) {
      var a,
          c,
          s,
          l = document.createElement(f[e] || e);for (a in i) {
        if (angular.isArray(i[a])) for (c = 0; c < i[a].length; c++) {
          if (i[a][c].fn) for (s = 0; s < i[a][c].t; s++) {
            t(a, i[a][c].fn(s, r), l, r);
          } else t(a, i[a][c], l, r);
        } else n(l, a, i[a]);
      }o.appendChild(l);
    }function n(e, t, n) {
      e.setAttribute(f[t] || t, n);
    }function i(e, t) {
      var n = e.split(";"),
          i = n.slice(t),
          o = n.slice(0, n.length - i.length);return n = i.concat(o).reverse(), n.join(";") + ";" + n[0];
    }function o(e, t) {
      return e /= t / 2, 1 > e ? .5 * e * e * e : (e -= 2, .5 * (e * e * e + 2));
    }var r = "translate(32,32)",
        c = "stroke-opacity",
        s = "round",
        l = "indefinite",
        u = "750ms",
        d = "none",
        f = { a: "animate", an: "attributeName", at: "animateTransform", c: "circle", da: "stroke-dasharray", os: "stroke-dashoffset", f: "fill", lc: "stroke-linecap", rc: "repeatCount", sw: "stroke-width", t: "transform", v: "values" },
        h = { v: "0,32,32;360,32,32", an: "transform", type: "rotate", rc: l, dur: u },
        p = { sw: 4, lc: s, line: [{ fn: function fn(e, t) {
          return { y1: "ios" == t ? 17 : 12, y2: "ios" == t ? 29 : 20, t: r + " rotate(" + (30 * e + (6 > e ? 180 : -180)) + ")", a: [{ fn: function fn() {
                return { an: c, dur: u, v: i("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1", e), rc: l };
              }, t: 1 }] };
        }, t: 12 }] },
        v = { android: { c: [{ sw: 6, da: 128, os: 82, r: 26, cx: 32, cy: 32, f: d }] }, ios: p, "ios-small": p, bubbles: { sw: 0, c: [{ fn: function fn(e) {
            return { cx: 24 * Math.cos(2 * Math.PI * e / 8), cy: 24 * Math.sin(2 * Math.PI * e / 8), t: r, a: [{ fn: function fn() {
                  return { an: "r", dur: u, v: i("1;2;3;4;5;6;7;8", e), rc: l };
                }, t: 1 }] };
          }, t: 8 }] }, circles: { c: [{ fn: function fn(e) {
            return { r: 5, cx: 24 * Math.cos(2 * Math.PI * e / 8), cy: 24 * Math.sin(2 * Math.PI * e / 8), t: r, sw: 0, a: [{ fn: function fn() {
                  return { an: "fill-opacity", dur: u, v: i(".3;.3;.3;.4;.7;.85;.9;1", e), rc: l };
                }, t: 1 }] };
          }, t: 8 }] }, crescent: { c: [{ sw: 4, da: 128, os: 82, r: 26, cx: 32, cy: 32, f: d, at: [h] }] }, dots: { c: [{ fn: function fn(e) {
            return { cx: 16 + 16 * e, cy: 32, sw: 0, a: [{ fn: function fn() {
                  return { an: "fill-opacity", dur: u, v: i(".5;.6;.8;1;.8;.6;.5", e), rc: l };
                }, t: 1 }, { fn: function fn() {
                  return { an: "r", dur: u, v: i("4;5;6;5;4;3;3", e), rc: l };
                }, t: 1 }] };
          }, t: 3 }] }, lines: { sw: 7, lc: s, line: [{ fn: function fn(e) {
            return { x1: 10 + 14 * e, x2: 10 + 14 * e, a: [{ fn: function fn() {
                  return { an: "y1", dur: u, v: i("16;18;28;18;16", e), rc: l };
                }, t: 1 }, { fn: function fn() {
                  return { an: "y2", dur: u, v: i("48;44;36;46;48", e), rc: l };
                }, t: 1 }, { fn: function fn() {
                  return { an: c, dur: u, v: i("1;.8;.5;.4;1", e), rc: l };
                }, t: 1 }] };
          }, t: 4 }] }, ripple: { f: d, "fill-rule": "evenodd", sw: 3, circle: [{ fn: function fn(e) {
            return { cx: 32, cy: 32, a: [{ fn: function fn() {
                  return { an: "r", begin: -1 * e + "s", dur: "2s", v: "0;24", keyTimes: "0;1", keySplines: "0.1,0.2,0.3,1", calcMode: "spline", rc: l };
                }, t: 1 }, { fn: function fn() {
                  return { an: c, begin: -1 * e + "s", dur: "2s", v: ".2;1;.2;0", rc: l };
                }, t: 1 }] };
          }, t: 2 }] }, spiral: { defs: [{ linearGradient: [{ id: "sGD", gradientUnits: "userSpaceOnUse", x1: 55, y1: 46, x2: 2, y2: 46, stop: [{ offset: .1, "class": "stop1" }, { offset: 1, "class": "stop2" }] }] }], g: [{ sw: 4, lc: s, f: d, path: [{ stroke: "url(#sGD)", d: "M4,32 c0,15,12,28,28,28c8,0,16-4,21-9" }, { d: "M60,32 C60,16,47.464,4,32,4S4,16,4,32" }], at: [h] }] } },
        g = { android: function android(t) {
        function i() {
          if (!r.stop) {
            var t = o(Date.now() - a, 650),
                d = 1,
                f = 0,
                h = 188 - 58 * t,
                p = 182 - 182 * t;c % 2 && (d = -1, f = -64, h = 128 - -58 * t, p = 182 * t);var v = [0, -101, -90, -11, -180, 79, -270, -191][c];n(u, "da", Math.max(Math.min(h, 188), 128)), n(u, "os", Math.max(Math.min(p, 182), 0)), n(u, "t", "scale(" + d + ",1) translate(" + f + ",0) rotate(" + v + ",32,32)"), s += 4.1, s > 359 && (s = 0), n(l, "t", "rotate(" + s + ",32,32)"), t >= 1 && (c++, c > 7 && (c = 0), a = Date.now()), e.requestAnimationFrame(i);
          }
        }var r = {};this.stop = !1;var a,
            c = 0,
            s = 0,
            l = t.querySelector("g"),
            u = t.querySelector("circle");return function () {
          return a = Date.now(), i(), r;
        };
      } };a.controller("$ionicSpinner", ["$element", "$attrs", "$ionicConfig", function (e, n, i) {
      var o, r;this.init = function () {
        o = n.icon || i.spinner.icon();var r = document.createElement("div");return t("svg", { viewBox: "0 0 64 64", g: [v[o]] }, r, o), e.html(r.innerHTML), this.start(), o;
      }, this.start = function () {
        g[o] && (r = g[o](e[0])());
      }, this.stop = function () {
        g[o] && (r.stop = !0);
      };
    }]);
  }(ionic), a.controller("$ionicTab", ["$scope", "$ionicHistory", "$attrs", "$location", "$state", function (e, t, n, i, o) {
    this.$scope = e, this.hrefMatchesState = function () {
      return n.href && 0 === i.path().indexOf(n.href.replace(/^#/, "").replace(/\/$/, ""));
    }, this.srefMatchesState = function () {
      return n.uiSref && o.includes(n.uiSref.split("(")[0]);
    }, this.navNameMatchesState = function () {
      return this.navViewName && t.isCurrentStateNavView(this.navViewName);
    }, this.tabMatchesState = function () {
      return this.hrefMatchesState() || this.srefMatchesState() || this.navNameMatchesState();
    };
  }]), a.controller("$ionicTabs", ["$scope", "$element", "$ionicHistory", function (e, t, n) {
    var i,
        o = this,
        r = null,
        a = null,
        c = !0;o.tabs = [], o.selectedIndex = function () {
      return o.tabs.indexOf(r);
    }, o.selectedTab = function () {
      return r;
    }, o.previousSelectedTab = function () {
      return a;
    }, o.add = function (e) {
      n.registerHistory(e), o.tabs.push(e);
    }, o.remove = function (e) {
      var t = o.tabs.indexOf(e);if (-1 !== t) {
        if (e.$tabSelected) if (o.deselect(e), 1 === o.tabs.length) ;else {
          var n = t === o.tabs.length - 1 ? t - 1 : t + 1;o.select(o.tabs[n]);
        }o.tabs.splice(t, 1);
      }
    }, o.deselect = function (e) {
      e.$tabSelected && (a = r, r = i = null, e.$tabSelected = !1, (e.onDeselect || h)(), e.$broadcast && e.$broadcast("$ionicHistory.deselect"));
    }, o.select = function (t, a) {
      var c;if (u(t)) {
        if (c = t, c >= o.tabs.length) return;t = o.tabs[c];
      } else c = o.tabs.indexOf(t);1 === arguments.length && (a = !(!t.navViewName && !t.uiSref)), r && r.$historyId == t.$historyId ? a && n.goToHistoryRoot(t.$historyId) : i !== c && (s(o.tabs, function (e) {
        o.deselect(e);
      }), r = t, i = c, o.$scope && o.$scope.$parent && (o.$scope.$parent.$activeHistoryId = t.$historyId), t.$tabSelected = !0, (t.onSelect || h)(), a && e.$emit("$ionicHistory.change", { type: "tab", tabIndex: c, historyId: t.$historyId, navViewName: t.navViewName, hasNavView: !!t.navViewName, title: t.title, url: t.href, uiSref: t.uiSref }), e.$broadcast("tabSelected", { selectedTab: t, selectedTabIndex: c }));
    }, o.hasActiveScope = function () {
      for (var e = 0; e < o.tabs.length; e++) {
        if (n.isActiveScope(o.tabs[e])) return !0;
      }return !1;
    }, o.showBar = function (e) {
      return arguments.length && (e ? t.removeClass("tabs-item-hide") : t.addClass("tabs-item-hide"), c = !!e), c;
    };
  }]), a.controller("$ionicView", ["$scope", "$element", "$attrs", "$compile", "$rootScope", function (e, t, n, i, o) {
    function r() {
      var t = l(n.viewTitle) && "viewTitle" || l(n.title) && "title";t && (a(n[t]), $.push(n.$observe(t, a))), l(n.hideBackButton) && $.push(e.$watch(n.hideBackButton, function (e) {
        f.showBackButton(!e);
      })), l(n.hideNavBar) && $.push(e.$watch(n.hideNavBar, function (e) {
        f.showBar(!e);
      }));
    }function a(e) {
      l(e) && e !== v && (v = e, f.title(v));
    }function s() {
      for (var e = 0; e < $.length; e++) {
        $[e]();
      }$ = [];
    }function u(t) {
      return t ? i(t)(e.$new()) : void 0;
    }function d(t) {
      return !!e.$eval(n[t]);
    }var f,
        h,
        p,
        v,
        g = this,
        m = {},
        $ = [],
        w = e.$on("ionNavBar.init", function (e, t) {
      e.stopPropagation(), h = t;
    });g.init = function () {
      w();var n = t.inheritedData("$ionModalController");f = t.inheritedData("$ionNavViewController"), f && !n && (e.$on("$ionicView.beforeEnter", g.beforeEnter), e.$on("$ionicView.afterEnter", r), e.$on("$ionicView.beforeLeave", s));
    }, g.beforeEnter = function (t, i) {
      if (i && !i.viewNotified) {
        i.viewNotified = !0, o.$$phase || e.$digest(), v = l(n.viewTitle) ? n.viewTitle : n.title;var r = {};for (var a in m) {
          r[a] = u(m[a]);
        }f.beforeEnter(c(i, { title: v, showBack: !d("hideBackButton"), navBarItems: r, navBarDelegate: h || null, showNavBar: !d("hideNavBar"), hasHeaderBar: !!p })), s();
      }
    }, g.navElement = function (e, t) {
      m[e] = t;
    };
  }]), a.directive("ionActionSheet", ["$document", function (e) {
    return { restrict: "E", scope: !0, replace: !0, link: function link(t, n) {
        var i = function i(e) {
          27 == e.which && (t.cancel(), t.$apply());
        },
            o = function o(e) {
          e.target == n[0] && (t.cancel(), t.$apply());
        };t.$on("$destroy", function () {
          n.remove(), e.unbind("keyup", i);
        }), e.bind("keyup", i), n.bind("click", o);
      }, template: '<div class="action-sheet-backdrop"><div class="action-sheet-wrapper"><div class="action-sheet" ng-class="{\'action-sheet-has-icons\': $actionSheetHasIcon}"><div class="action-sheet-group action-sheet-options"><div class="action-sheet-title" ng-if="titleText" ng-bind-html="titleText"></div><button class="button action-sheet-option" ng-click="buttonClicked($index)" ng-class="b.className" ng-repeat="b in buttons" ng-bind-html="b.text"></button><button class="button destructive action-sheet-destructive" ng-if="destructiveText" ng-click="destructiveButtonClicked()" ng-bind-html="destructiveText"></button></div><div class="action-sheet-group action-sheet-cancel" ng-if="cancelText"><button class="button" ng-click="cancel()" ng-bind-html="cancelText"></button></div></div></div></div>' };
  }]), a.directive("ionCheckbox", ["$ionicConfig", function (e) {
    return { restrict: "E", replace: !0, require: "?ngModel", transclude: !0, template: '<label class="item item-checkbox"><div class="checkbox checkbox-input-hidden disable-pointer-events"><input type="checkbox"><i class="checkbox-icon"></i></div><div class="item-content disable-pointer-events" ng-transclude></div></label>', compile: function compile(t, n) {
        var i = t.find("input");s({ name: n.name, "ng-value": n.ngValue, "ng-model": n.ngModel, "ng-checked": n.ngChecked, "ng-disabled": n.ngDisabled, "ng-true-value": n.ngTrueValue, "ng-false-value": n.ngFalseValue, "ng-change": n.ngChange, "ng-required": n.ngRequired, required: n.required }, function (e, t) {
          l(e) && i.attr(t, e);
        });var o = t[0].querySelector(".checkbox");o.classList.add("checkbox-" + e.form.checkbox());
      } };
  }]), a.directive("collectionRepeat", e).factory("$ionicCollectionManager", t);var g = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      m = /height:.*?px;\s*width:.*?px/,
      $ = 3;e.$inject = ["$ionicCollectionManager", "$parse", "$window", "$$rAF", "$rootScope", "$timeout"], t.$inject = ["$rootScope", "$window", "$$rAF"], a.directive("ionContent", ["$timeout", "$controller", "$ionicBind", "$ionicConfig", function (e, t, n, i) {
    return { restrict: "E", require: "^?ionNavView", scope: !0, priority: 800, compile: function compile(e, o) {
        function r(e, i, r) {
          function u() {
            e.$onScrollComplete({ scrollTop: c.scrollView.__scrollTop, scrollLeft: c.scrollView.__scrollLeft });
          }var d = e.$parent;if (e.$watch(function () {
            return (d.$hasHeader ? " has-header" : "") + (d.$hasSubheader ? " has-subheader" : "") + (d.$hasFooter ? " has-footer" : "") + (d.$hasSubfooter ? " has-subfooter" : "") + (d.$hasTabs ? " has-tabs" : "") + (d.$hasTabsTop ? " has-tabs-top" : "");
          }, function (e, t) {
            i.removeClass(t), i.addClass(e);
          }), e.$hasHeader = e.$hasSubheader = e.$hasFooter = e.$hasSubfooter = e.$hasTabs = e.$hasTabsTop = !1, n(e, r, { $onScroll: "&onScroll", $onScrollComplete: "&onScrollComplete", hasBouncing: "@", padding: "@", direction: "@", scrollbarX: "@", scrollbarY: "@", startX: "@", startY: "@", scrollEventInterval: "@" }), e.direction = e.direction || "y", l(r.padding) && e.$watch(r.padding, function (e) {
            (a || i).toggleClass("padding", !!e);
          }), "false" === r.scroll) ;else {
            var f = {};s ? (i.addClass("overflow-scroll"), f = { el: i[0], delegateHandle: o.delegateHandle, startX: e.$eval(e.startX) || 0, startY: e.$eval(e.startY) || 0, nativeScrolling: !0 }) : f = { el: i[0], delegateHandle: o.delegateHandle, locking: "true" === (o.locking || "true"), bouncing: e.$eval(e.hasBouncing), startX: e.$eval(e.startX) || 0, startY: e.$eval(e.startY) || 0, scrollbarX: e.$eval(e.scrollbarX) !== !1, scrollbarY: e.$eval(e.scrollbarY) !== !1, scrollingX: e.direction.indexOf("x") >= 0, scrollingY: e.direction.indexOf("y") >= 0, scrollEventInterval: parseInt(e.scrollEventInterval, 10) || 10, scrollingComplete: u }, c = t("$ionicScroll", { $scope: e, scrollViewOptions: f }), e.scrollCtrl = c, e.$on("$destroy", function () {
              f && (f.scrollingComplete = h, delete f.el), a = null, i = null, o.$$element = null;
            });
          }
        }var a, c;e.addClass("scroll-content ionic-scroll"), "false" != o.scroll ? (a = f('<div class="scroll"></div>'), a.append(e.contents()), e.append(a)) : e.addClass("scroll-content-false");var s = "false" !== o.overflowScroll && ("true" === o.overflowScroll || !i.scrolling.jsScrolling());return s && (s = !e[0].querySelector("[collection-repeat]")), { pre: r };
      } };
  }]), a.directive("exposeAsideWhen", ["$window", function (e) {
    return { restrict: "A", require: "^ionSideMenus", link: function link(t, n, i, o) {
        function r() {
          var t = "large" == i.exposeAsideWhen ? "(min-width:768px)" : i.exposeAsideWhen;o.exposeAside(e.matchMedia(t).matches), o.activeAsideResizing(!1);
        }function a() {
          o.activeAsideResizing(!0), l();
        }var c = e.innerWidth,
            s = e.innerHeight;ionic.on("resize", function () {
          (c !== e.innerWidth || s !== e.innerHeight) && (c = e.innerWidth, s = e.innerHeight, a());
        }, e);var l = ionic.debounce(function () {
          t.$apply(r);
        }, 300, !1);t.$evalAsync(r);
      } };
  }]);var w = "onHold onTap onDoubleTap onTouch onRelease onDragStart onDrag onDragEnd onDragUp onDragRight onDragDown onDragLeft onSwipe onSwipeUp onSwipeRight onSwipeDown onSwipeLeft".split(" ");w.forEach(function (e) {
    a.directive(e, n(e));
  }), a.directive("ionHeaderBar", i(!0)).directive("ionFooterBar", i(!1)), a.directive("ionInfiniteScroll", ["$timeout", function (e) {
    return { restrict: "E", require: ["?^$ionicScroll", "ionInfiniteScroll"],
      template: function template(e, t) {
        return t.icon ? '<i class="icon {{icon()}} icon-refreshing {{scrollingType}}"></i>' : '<ion-spinner icon="{{spinner()}}"></ion-spinner>';
      }, scope: !0, controller: "$ionInfiniteScroll", link: function link(t, n, i, o) {
        var r = o[1],
            a = r.scrollCtrl = o[0],
            c = r.jsScrolling = !a.isNative();if (c) r.scrollView = a.scrollView, t.scrollingType = "js-scrolling", a.$element.on("scroll", r.checkBounds);else {
          var s = ionic.DomUtil.getParentOrSelfWithClass(n[0].parentNode, "overflow-scroll");if (r.scrollEl = s, !s) throw "Infinite scroll must be used inside a scrollable div";r.scrollEl.addEventListener("scroll", r.checkBounds);
        }var u = l(i.immediateCheck) ? t.$eval(i.immediateCheck) : !0;u && e(function () {
          r.checkBounds();
        });
      } };
  }]);var b = -1;a.directive("ionInput", [function () {
    return { restrict: "E", controller: ["$scope", "$element", function (e, t) {
        this.$scope = e, this.$element = t, this.setInputAriaLabeledBy = function (e) {
          var n = t[0].querySelectorAll("input,textarea");n.length && n[0].setAttribute("aria-labelledby", e);
        }, this.focus = function () {
          var e = t[0].querySelectorAll("input,textarea");e.length && e[0].focus();
        };
      }] };
  }]), a.directive("ionLabel", [function () {
    return { restrict: "E", require: "?^ionInput", compile: function compile() {
        return function (e, t, n, i) {
          var o = t[0];t.addClass("input-label"), t.attr("aria-label", t.text());var r = o.id || "_label-" + ++b;o.id || t.attr("id", r), i && (i.setInputAriaLabeledBy(r), t.on("click", function () {
            i.focus();
          }));
        };
      } };
  }]), a.directive("inputLabel", [function () {
    return { restrict: "C", require: "?^ionInput", compile: function compile() {
        return function (e, t, n, i) {
          var o = t[0];t.attr("aria-label", t.text());var r = o.id || "_label-" + ++b;o.id || t.attr("id", r), i && i.setInputAriaLabeledBy(r);
        };
      } };
  }]), a.directive("ionItem", ["$$rAF", function (e) {
    return { restrict: "E", controller: ["$scope", "$element", function (e, t) {
        this.$scope = e, this.$element = t;
      }], scope: !0, compile: function compile(t, n) {
        var i = l(n.href) || l(n.ngHref) || l(n.uiSref),
            o = i || /ion-(delete|option|reorder)-button/i.test(t.html());if (o) {
          var r = f(i ? "<a></a>" : "<div></div>");r.addClass("item-content"), (l(n.href) || l(n.ngHref)) && (r.attr("ng-href", "{{$href()}}"), l(n.target) && r.attr("target", "{{$target()}}")), r.append(t.contents()), t.addClass("item item-complex").append(r);
        } else t.addClass("item");return function (t, n, i) {
          t.$href = function () {
            return i.href || i.ngHref;
          }, t.$target = function () {
            return i.target;
          };var o = n[0].querySelector(".item-content");o && t.$on("$collectionRepeatLeave", function () {
            o && o.$$ionicOptionsOpen && (o.style[ionic.CSS.TRANSFORM] = "", o.style[ionic.CSS.TRANSITION] = "none", e(function () {
              o.style[ionic.CSS.TRANSITION] = "";
            }), o.$$ionicOptionsOpen = !1);
          });
        };
      } };
  }]);var y = '<div class="item-left-edit item-delete enable-pointer-events"></div>';a.directive("ionDeleteButton", function () {
    function e(e) {
      e.stopPropagation();
    }return { restrict: "E", require: ["^^ionItem", "^?ionList"], priority: Number.MAX_VALUE, compile: function compile(t, n) {
        return n.$set("class", (n["class"] || "") + " button icon button-icon", !0), function (t, n, i, o) {
          function r() {
            c = c || n.controller("ionList"), c && c.showDelete() && s.addClass("visible active");
          }var a = o[0],
              c = o[1],
              s = f(y);s.append(n), a.$element.append(s).addClass("item-left-editable"), n.on("click", e), r(), t.$on("$ionic.reconnectScope", r);
        };
      } };
  }), a.directive("itemFloatingLabel", function () {
    return { restrict: "C", link: function link(e, t) {
        var n = t[0],
            i = n.querySelector("input, textarea"),
            o = n.querySelector(".input-label");if (i && o) {
          var r = function r() {
            i.value ? o.classList.add("has-input") : o.classList.remove("has-input");
          };i.addEventListener("input", r);var a = f(i).controller("ngModel");a && (a.$render = function () {
            i.value = a.$viewValue || "", r();
          }), e.$on("$destroy", function () {
            i.removeEventListener("input", r);
          });
        }
      } };
  });var S = '<div class="item-options invisible"></div>';a.directive("ionOptionButton", [function () {
    function e(e) {
      e.stopPropagation();
    }return { restrict: "E", require: "^ionItem", priority: Number.MAX_VALUE, compile: function compile(t, n) {
        return n.$set("class", (n["class"] || "") + " button", !0), function (t, n, i, o) {
          o.optionsContainer || (o.optionsContainer = f(S), o.$element.prepend(o.optionsContainer)), o.optionsContainer.prepend(n), o.$element.addClass("item-right-editable"), n.on("click", e);
        };
      } };
  }]);var k = '<div data-prevent-scroll="true" class="item-right-edit item-reorder enable-pointer-events"></div>';a.directive("ionReorderButton", ["$parse", function (e) {
    return { restrict: "E", require: ["^ionItem", "^?ionList"], priority: Number.MAX_VALUE, compile: function compile(t, n) {
        return n.$set("class", (n["class"] || "") + " button icon button-icon", !0), t[0].setAttribute("data-prevent-scroll", !0), function (t, n, i, o) {
          var r = o[0],
              a = o[1],
              c = e(i.onReorder);t.$onReorder = function (e, n) {
            c(t, { $fromIndex: e, $toIndex: n });
          }, i.ngClick || i.onClick || i.onclick || (n[0].onclick = function (e) {
            return e.stopPropagation(), !1;
          });var s = f(k);s.append(n), r.$element.append(s).addClass("item-right-editable"), a && a.showReorder() && s.addClass("visible active");
        };
      } };
  }]), a.directive("keyboardAttach", function () {
    return function (e, t) {
      function n(e) {
        if (!ionic.Platform.isAndroid() || ionic.Platform.isFullScreen) {
          var n = e.keyboardHeight || e.detail && e.detail.keyboardHeight;t.css("bottom", n + "px"), r = t.controller("$ionicScroll"), r && (r.scrollView.__container.style.bottom = n + o(t[0]) + "px");
        }
      }function i() {
        (!ionic.Platform.isAndroid() || ionic.Platform.isFullScreen) && (t.css("bottom", ""), r && (r.scrollView.__container.style.bottom = ""));
      }ionic.on("native.keyboardshow", n, window), ionic.on("native.keyboardhide", i, window), ionic.on("native.showkeyboard", n, window), ionic.on("native.hidekeyboard", i, window);var r;e.$on("$destroy", function () {
        ionic.off("native.keyboardshow", n, window), ionic.off("native.keyboardhide", i, window), ionic.off("native.showkeyboard", n, window), ionic.off("native.hidekeyboard", i, window);
      });
    };
  }), a.directive("ionList", ["$timeout", function (e) {
    return { restrict: "E", require: ["ionList", "^?$ionicScroll"], controller: "$ionicList", compile: function compile(t, n) {
        var i = f('<div class="list">').append(t.contents()).addClass(n.type);return t.append(i), function (t, i, o, r) {
          function a() {
            function o(e, t) {
              t() && e.addClass("visible") || e.removeClass("active"), ionic.requestAnimationFrame(function () {
                t() && e.addClass("active") || e.removeClass("visible");
              });
            }var r = c.listView = new ionic.views.ListView({ el: i[0], listEl: i.children()[0], scrollEl: s && s.element, scrollView: s && s.scrollView, onReorder: function onReorder(t, n, i) {
                var o = f(t).scope();o && o.$onReorder && e(function () {
                  o.$onReorder(n, i);
                });
              }, canSwipe: function canSwipe() {
                return c.canSwipeItems();
              } });t.$on("$destroy", function () {
              r && (r.deregister && r.deregister(), r = null);
            }), l(n.canSwipe) && t.$watch("!!(" + n.canSwipe + ")", function (e) {
              c.canSwipeItems(e);
            }), l(n.showDelete) && t.$watch("!!(" + n.showDelete + ")", function (e) {
              c.showDelete(e);
            }), l(n.showReorder) && t.$watch("!!(" + n.showReorder + ")", function (e) {
              c.showReorder(e);
            }), t.$watch(function () {
              return c.showDelete();
            }, function (e, t) {
              if (e || t) {
                e && c.closeOptionButtons(), c.canSwipeItems(!e), i.children().toggleClass("list-left-editing", e), i.toggleClass("disable-pointer-events", e);var n = f(i[0].getElementsByClassName("item-delete"));o(n, c.showDelete);
              }
            }), t.$watch(function () {
              return c.showReorder();
            }, function (e, t) {
              if (e || t) {
                e && c.closeOptionButtons(), c.canSwipeItems(!e), i.children().toggleClass("list-right-editing", e), i.toggleClass("disable-pointer-events", e);var n = f(i[0].getElementsByClassName("item-reorder"));o(n, c.showReorder);
              }
            });
          }var c = r[0],
              s = r[1];e(a);
        };
      } };
  }]), a.directive("menuClose", ["$ionicHistory", "$timeout", function (e, t) {
    return { restrict: "AC", link: function link(n, i) {
        i.bind("click", function () {
          var n = i.inheritedData("$ionSideMenusController");n && (e.nextViewOptions({ historyRoot: !0, disableAnimate: !0, expire: 300 }), t(function () {
            e.nextViewOptions({ historyRoot: !1, disableAnimate: !1 });
          }, 300), n.close());
        });
      } };
  }]), a.directive("menuToggle", function () {
    return { restrict: "AC", link: function link(e, t, n) {
        e.$on("$ionicView.beforeEnter", function (e, n) {
          if (n.enableBack) {
            var i = t.inheritedData("$ionSideMenusController");i.enableMenuWithBackViews() || t.addClass("hide");
          } else t.removeClass("hide");
        }), t.bind("click", function () {
          var e = t.inheritedData("$ionSideMenusController");e && e.toggle(n.menuToggle);
        });
      } };
  }), a.directive("ionModal", [function () {
    return { restrict: "E", transclude: !0, replace: !0, controller: [function () {}], template: '<div class="modal-backdrop"><div class="modal-backdrop-bg"></div><div class="modal-wrapper" ng-transclude></div></div>' };
  }]), a.directive("ionModalView", function () {
    return { restrict: "E", compile: function compile(e) {
        e.addClass("modal");
      } };
  }), a.directive("ionNavBackButton", ["$ionicConfig", "$document", function (e, t) {
    return { restrict: "E", require: "^ionNavBar", compile: function compile(n, i) {
        function o(e) {
          return (/ion-|icon/.test(e.className)
          );
        }var r = t[0].createElement("button");for (var a in i.$attr) {
          r.setAttribute(i.$attr[a], i[a]);
        }i.ngClick || r.setAttribute("ng-click", "$ionicGoBack()"), r.className = "button back-button hide buttons " + (n.attr("class") || ""), r.innerHTML = n.html() || "";for (var c, s, l, u, d = o(n[0]), f = 0; f < n[0].childNodes.length; f++) {
          c = n[0].childNodes[f], 1 === c.nodeType ? o(c) ? d = !0 : c.classList.contains("default-title") ? l = !0 : c.classList.contains("previous-title") && (u = !0) : s || 3 !== c.nodeType || (s = !!c.nodeValue.trim());
        }var h = e.backButton.icon();if (!d && h && "none" !== h && (r.innerHTML = '<i class="icon ' + h + '"></i> ' + r.innerHTML, r.className += " button-clear"), !s) {
          var p = t[0].createElement("span");p.className = "back-text", !l && e.backButton.text() && (p.innerHTML += '<span class="default-title">' + e.backButton.text() + "</span>"), !u && e.backButton.previousTitleText() && (p.innerHTML += '<span class="previous-title"></span>'), r.appendChild(p);
        }return n.attr("class", "hide"), n.empty(), { pre: function pre(e, t, n, i) {
            i.navElement("backButton", r.outerHTML), r = null;
          } };
      } };
  }]), a.directive("ionNavBar", function () {
    return { restrict: "E", controller: "$ionicNavBar", scope: !0, link: function link(e, t, n, i) {
        i.init();
      } };
  }), a.directive("ionNavButtons", ["$document", function (e) {
    return { require: "^ionNavBar", restrict: "E", compile: function compile(t, n) {
        var i = "left";/^primary|secondary|right$/i.test(n.side || "") && (i = n.side.toLowerCase());var o = e[0].createElement("span");o.className = i + "-buttons", o.innerHTML = t.html();var r = i + "Buttons";return t.attr("class", "hide"), t.empty(), { pre: function pre(e, t, n, i) {
            var a = t.parent().data("$ionViewController");a ? a.navElement(r, o.outerHTML) : i.navElement(r, o.outerHTML), o = null;
          } };
      } };
  }]), a.directive("navDirection", ["$ionicViewSwitcher", function (e) {
    return { restrict: "A", priority: 1e3, link: function link(t, n, i) {
        n.bind("click", function () {
          e.nextDirection(i.navDirection);
        });
      } };
  }]), a.directive("ionNavTitle", ["$document", function (e) {
    return { require: "^ionNavBar", restrict: "E", compile: function compile(t, n) {
        var i = "title",
            o = e[0].createElement("span");for (var r in n.$attr) {
          o.setAttribute(n.$attr[r], n[r]);
        }return o.classList.add("nav-bar-title"), o.innerHTML = t.html(), t.attr("class", "hide"), t.empty(), { pre: function pre(e, t, n, r) {
            var a = t.parent().data("$ionViewController");a ? a.navElement(i, o.outerHTML) : r.navElement(i, o.outerHTML), o = null;
          } };
      } };
  }]), a.directive("navTransition", ["$ionicViewSwitcher", function (e) {
    return { restrict: "A", priority: 1e3, link: function link(t, n, i) {
        n.bind("click", function () {
          e.nextTransition(i.navTransition);
        });
      } };
  }]), a.directive("ionNavView", ["$state", "$ionicConfig", function (e, t) {
    return { restrict: "E", terminal: !0, priority: 2e3, transclude: !0, controller: "$ionicNavView", compile: function compile(n, i, o) {
        return n.addClass("view-container"), ionic.DomUtil.cachedAttr(n, "nav-view-transition", t.views.transition()), function (t, n, i, r) {
          function a(t) {
            var n = e.$current && e.$current.locals[s.name];n && (t || n !== c) && (c = n, s.state = n.$$state, r.register(n));
          }var c;o(t, function (e) {
            n.append(e);
          });var s = r.init();t.$on("$stateChangeSuccess", function () {
            a(!1);
          }), t.$on("$viewContentLoading", function () {
            a(!1);
          }), a(!0);
        };
      } };
  }]), a.config(["$provide", function (e) {
    e.decorator("ngClickDirective", ["$delegate", function (e) {
      return e.shift(), e;
    }]);
  }]).factory("$ionicNgClick", ["$parse", function (e) {
    return function (t, n, i) {
      var o = angular.isFunction(i) ? i : e(i);n.on("click", function (e) {
        t.$apply(function () {
          o(t, { $event: e });
        });
      }), n.onclick = h;
    };
  }]).directive("ngClick", ["$ionicNgClick", function (e) {
    return function (t, n, i) {
      e(t, n, i.ngClick);
    };
  }]).directive("ionStopEvent", function () {
    return { restrict: "A", link: function link(e, t, n) {
        t.bind(n.ionStopEvent, r);
      } };
  }), a.directive("ionPane", function () {
    return { restrict: "E", link: function link(e, t) {
        t.addClass("pane");
      } };
  }), a.directive("ionPopover", [function () {
    return { restrict: "E", transclude: !0, replace: !0, controller: [function () {}], template: '<div class="popover-backdrop"><div class="popover-wrapper" ng-transclude></div></div>' };
  }]), a.directive("ionPopoverView", function () {
    return { restrict: "E", compile: function compile(e) {
        e.append(f('<div class="popover-arrow">')), e.addClass("popover");
      } };
  }), a.directive("ionRadio", function () {
    return { restrict: "E", replace: !0, require: "?ngModel", transclude: !0, template: '<label class="item item-radio"><input type="radio" name="radio-group"><div class="radio-content"><div class="item-content disable-pointer-events" ng-transclude></div><i class="radio-icon disable-pointer-events icon ion-checkmark"></i></div></label>', compile: function compile(e, t) {
        if (t.icon) {
          var n = e.find("i");n.removeClass("ion-checkmark").addClass(t.icon);
        }var i = e.find("input");return s({ name: t.name, value: t.value, disabled: t.disabled, "ng-value": t.ngValue, "ng-model": t.ngModel, "ng-disabled": t.ngDisabled, "ng-change": t.ngChange, "ng-required": t.ngRequired, required: t.required }, function (e, t) {
          l(e) && i.attr(t, e);
        }), function (e, t, n) {
          e.getValue = function () {
            return e.ngValue || n.value;
          };
        };
      } };
  }), a.directive("ionRefresher", [function () {
    return { restrict: "E", replace: !0, require: ["?^$ionicScroll", "ionRefresher"], controller: "$ionicRefresher", template: '<div class="scroll-refresher invisible" collection-repeat-ignore><div class="ionic-refresher-content" ng-class="{\'ionic-refresher-with-text\': pullingText || refreshingText}"><div class="icon-pulling" ng-class="{\'pulling-rotation-disabled\':disablePullingRotation}"><i class="icon {{pullingIcon}}"></i></div><div class="text-pulling" ng-bind-html="pullingText"></div><div class="icon-refreshing"><ion-spinner ng-if="showSpinner" icon="{{spinner}}"></ion-spinner><i ng-if="showIcon" class="icon {{refreshingIcon}}"></i></div><div class="text-refreshing" ng-bind-html="refreshingText"></div></div></div>', link: function link(e, t, n, i) {
        var o = i[0],
            r = i[1];!o || o.isNative() ? r.init() : (t[0].classList.add("js-scrolling"), o._setRefresher(e, t[0], r.getRefresherDomMethods()), e.$on("scroll.refreshComplete", function () {
          e.$evalAsync(function () {
            o.scrollView && o.scrollView.finishPullToRefresh();
          });
        }));
      } };
  }]), a.directive("ionScroll", ["$timeout", "$controller", "$ionicBind", "$ionicConfig", function (e, t, n, i) {
    return { restrict: "E", scope: !0, controller: function controller() {}, compile: function compile(e, o) {
        function r(e, i, o) {
          function r() {
            e.$onScrollComplete && e.$onScrollComplete({ scrollTop: d.scrollView.__scrollTop, scrollLeft: d.scrollView.__scrollLeft });
          }n(e, o, { direction: "@", paging: "@", $onScroll: "&onScroll", $onScrollComplete: "&onScrollComplete", scroll: "@", scrollbarX: "@", scrollbarY: "@", zooming: "@", minZoom: "@", maxZoom: "@" }), e.direction = e.direction || "y", l(o.padding) && e.$watch(o.padding, function (e) {
            a.toggleClass("padding", !!e);
          }), e.$eval(e.paging) === !0 && a.addClass("scroll-paging"), e.direction || (e.direction = "y");var s = e.$eval(e.paging) === !0;c && i.addClass("overflow-scroll"), i.addClass("scroll-" + e.direction);var u = { el: i[0], delegateHandle: o.delegateHandle, locking: "true" === (o.locking || "true"), bouncing: e.$eval(o.hasBouncing), paging: s, scrollbarX: e.$eval(e.scrollbarX) !== !1, scrollbarY: e.$eval(e.scrollbarY) !== !1, scrollingX: e.direction.indexOf("x") >= 0, scrollingY: e.direction.indexOf("y") >= 0, zooming: e.$eval(e.zooming) === !0, maxZoom: e.$eval(e.maxZoom) || 3, minZoom: e.$eval(e.minZoom) || .5, preventDefault: !0, nativeScrolling: c, scrollingComplete: r };s && (u.speedMultiplier = .8, u.bouncing = !1);var d = t("$ionicScroll", { $scope: e, scrollViewOptions: u });
        }e.addClass("scroll-view ionic-scroll");var a = f('<div class="scroll"></div>');a.append(e.contents()), e.append(a);var c = "false" !== o.overflowScroll && ("true" === o.overflowScroll || !i.scrolling.jsScrolling());return { pre: r };
      } };
  }]), a.directive("ionSideMenu", function () {
    return { restrict: "E", require: "^ionSideMenus", scope: !0, compile: function compile(e, t) {
        return angular.isUndefined(t.isEnabled) && t.$set("isEnabled", "true"), angular.isUndefined(t.width) && t.$set("width", "275"), e.addClass("menu menu-" + t.side), function (e, n, i, o) {
          e.side = i.side || "left";var r = o[e.side] = new ionic.views.SideMenu({ width: t.width, el: n[0], isEnabled: !0 });e.$watch(i.width, function (e) {
            var t = +e;t && t == e && r.setWidth(+e);
          }), e.$watch(i.isEnabled, function (e) {
            r.setIsEnabled(!!e);
          });
        };
      } };
  }), a.directive("ionSideMenuContent", ["$timeout", "$ionicGesture", "$window", function (e, t, n) {
    return { restrict: "EA", require: "^ionSideMenus", scope: !0, compile: function compile(i, o) {
        function r(r, a, c, s) {
          function u(e) {
            0 !== s.getOpenAmount() ? (s.close(), e.gesture.srcEvent.preventDefault(), v = null, g = null) : v || (v = ionic.tap.pointerCoord(e.gesture.srcEvent));
          }function d(e) {
            s.isDraggableTarget(e) && "x" == p(e) && (s._handleDrag(e), e.gesture.srcEvent.preventDefault());
          }function f(e) {
            "x" == p(e) && e.gesture.srcEvent.preventDefault();
          }function h(e) {
            s._endDrag(e), v = null, g = null;
          }function p(e) {
            if (g) return g;if (e && e.gesture) {
              if (v) {
                var t = ionic.tap.pointerCoord(e.gesture.srcEvent),
                    n = Math.abs(t.x - v.x),
                    i = Math.abs(t.y - v.y),
                    o = i > n ? "y" : "x";return Math.max(n, i) > 30 && (g = o), o;
              }v = ionic.tap.pointerCoord(e.gesture.srcEvent);
            }return "y";
          }var v = null,
              g = null;l(o.dragContent) ? r.$watch(o.dragContent, function (e) {
            s.canDragContent(e);
          }) : s.canDragContent(!0), l(o.edgeDragThreshold) && r.$watch(o.edgeDragThreshold, function (e) {
            s.edgeDragThreshold(e);
          });var m = { element: i[0], onDrag: function onDrag() {}, endDrag: function endDrag() {}, setCanScroll: function setCanScroll(e) {
              var t = a[0].querySelector(".scroll");if (t) {
                var n = angular.element(t.parentElement);if (n) {
                  var i = n.scope();i.scrollCtrl && i.scrollCtrl.freezeScrollShut(!e);
                }
              }
            }, getTranslateX: function getTranslateX() {
              return r.sideMenuContentTranslateX || 0;
            }, setTranslateX: ionic.animationFrameThrottle(function (t) {
              var n = m.offsetX + t;a[0].style[ionic.CSS.TRANSFORM] = "translate3d(" + n + "px,0,0)", e(function () {
                r.sideMenuContentTranslateX = t;
              });
            }), setMarginLeft: ionic.animationFrameThrottle(function (e) {
              e ? (e = parseInt(e, 10), a[0].style[ionic.CSS.TRANSFORM] = "translate3d(" + e + "px,0,0)", a[0].style.width = n.innerWidth - e + "px", m.offsetX = e) : (a[0].style[ionic.CSS.TRANSFORM] = "translate3d(0,0,0)", a[0].style.width = "", m.offsetX = 0);
            }), setMarginRight: ionic.animationFrameThrottle(function (e) {
              e ? (e = parseInt(e, 10), a[0].style.width = n.innerWidth - e + "px", m.offsetX = e) : (a[0].style.width = "", m.offsetX = 0), a[0].style[ionic.CSS.TRANSFORM] = "translate3d(0,0,0)";
            }), setMarginLeftAndRight: ionic.animationFrameThrottle(function (e, t) {
              e = e && parseInt(e, 10) || 0, t = t && parseInt(t, 10) || 0;var i = e + t;i > 0 ? (a[0].style[ionic.CSS.TRANSFORM] = "translate3d(" + e + "px,0,0)", a[0].style.width = n.innerWidth - i + "px", m.offsetX = e) : (a[0].style[ionic.CSS.TRANSFORM] = "translate3d(0,0,0)", a[0].style.width = "", m.offsetX = 0);
            }), enableAnimation: function enableAnimation() {
              r.animationEnabled = !0, a[0].classList.add("menu-animated");
            }, disableAnimation: function disableAnimation() {
              r.animationEnabled = !1, a[0].classList.remove("menu-animated");
            }, offsetX: 0 };s.setContent(m);var $ = { stop_browser_behavior: !1 };$.prevent_default_directions = ["left", "right"];var w = t.on("tap", u, a, $),
              b = t.on("dragright", d, a, $),
              y = t.on("dragleft", d, a, $),
              S = t.on("dragup", f, a, $),
              k = t.on("dragdown", f, a, $),
              C = t.on("release", h, a, $);r.$on("$destroy", function () {
            m && (m.element = null, m = null), t.off(y, "dragleft", d), t.off(b, "dragright", d), t.off(S, "dragup", f), t.off(k, "dragdown", f), t.off(C, "release", h), t.off(w, "tap", u);
          });
        }return i.addClass("menu-content pane"), { pre: r };
      } };
  }]), a.directive("ionSideMenus", ["$ionicBody", function (e) {
    return { restrict: "ECA", controller: "$ionicSideMenus", compile: function compile(t, n) {
        function i(t, n, i, o) {
          o.enableMenuWithBackViews(t.$eval(i.enableMenuWithBackViews)), t.$on("$ionicExposeAside", function (n, i) {
            t.$exposeAside || (t.$exposeAside = {}), t.$exposeAside.active = i, e.enableClass(i, "aside-open");
          }), t.$on("$ionicView.beforeEnter", function (e, n) {
            n.historyId && (t.$activeHistoryId = n.historyId);
          }), t.$on("$destroy", function () {
            e.removeClass("menu-open", "aside-open");
          });
        }return n.$set("class", (n["class"] || "") + " view"), { pre: i };
      } };
  }]), a.directive("ionSlideBox", ["$animate", "$timeout", "$compile", "$ionicSlideBoxDelegate", "$ionicHistory", "$ionicScrollDelegate", function (e, t, n, i, o, r) {
    return { restrict: "E", replace: !0, transclude: !0, scope: { autoPlay: "=", doesContinue: "@", slideInterval: "@", showPager: "@", pagerClick: "&", disableScroll: "@", onSlideChanged: "&", activeSlide: "=?", bounce: "@" }, controller: ["$scope", "$element", "$attrs", function (e, n, a) {
        function c(e) {
          e && !s.isScrollFreeze ? r.freezeAllScrolls(e) : !e && s.isScrollFreeze && r.freezeAllScrolls(!1), s.isScrollFreeze = e;
        }var s = this,
            u = e.$eval(e.doesContinue) === !0,
            d = e.$eval(e.bounce) !== !1,
            f = l(a.autoPlay) ? !!e.autoPlay : !1,
            h = f ? e.$eval(e.slideInterval) || 4e3 : 0,
            p = new ionic.views.Slider({ el: n[0], auto: h, continuous: u, startSlide: e.activeSlide, bouncing: d, slidesChanged: function slidesChanged() {
            e.currentSlide = p.currentIndex(), t(function () {});
          }, callback: function callback(n) {
            e.currentSlide = n, e.onSlideChanged({ index: e.currentSlide, $index: e.currentSlide }), e.$parent.$broadcast("slideBox.slideChanged", n), e.activeSlide = n, t(function () {});
          }, onDrag: function onDrag() {
            c(!0);
          }, onDragEnd: function onDragEnd() {
            c(!1);
          } });p.enableSlide(e.$eval(a.disableScroll) !== !0), e.$watch("activeSlide", function (e) {
          l(e) && p.slide(e);
        }), e.$on("slideBox.nextSlide", function () {
          p.next();
        }), e.$on("slideBox.prevSlide", function () {
          p.prev();
        }), e.$on("slideBox.setSlide", function (e, t) {
          p.slide(t);
        }), this.__slider = p;var v = i._registerInstance(p, a.delegateHandle, function () {
          return o.isActiveScope(e);
        });e.$on("$destroy", function () {
          v(), p.kill();
        }), this.slidesCount = function () {
          return p.slidesCount();
        }, this.onPagerClick = function (t) {
          e.pagerClick({ index: t });
        }, t(function () {
          p.load();
        });
      }], template: '<div class="slider"><div class="slider-slides" ng-transclude></div></div>', link: function link(t, i, o) {
        function r() {
          if (!a) {
            var e = t.$new();a = f("<ion-pager></ion-pager>"), i.append(a), a = n(a)(e);
          }return a;
        }e.enabled(i, !1), l(o.showPager) || (t.showPager = !0, r().toggleClass("hide", !1)), o.$observe("showPager", function (e) {
          void 0 !== e && (e = t.$eval(e), r().toggleClass("hide", !e));
        });var a;
      } };
  }]).directive("ionSlide", function () {
    return { restrict: "E", require: "?^ionSlideBox", compile: function compile(e) {
        e.addClass("slider-slide");
      } };
  }).directive("ionPager", function () {
    return { restrict: "E", replace: !0, require: "^ionSlideBox", template: '<div class="slider-pager"><span class="slider-pager-page" ng-repeat="slide in numSlides() track by $index" ng-class="{active: $index == currentSlide}" ng-click="pagerClick($index)"><i class="icon ion-record"></i></span></div>', link: function link(e, t, n, i) {
        var o = function o(e) {
          for (var n = t[0].children, i = n.length, o = 0; i > o; o++) {
            o == e ? n[o].classList.add("active") : n[o].classList.remove("active");
          }
        };e.pagerClick = function (e) {
          i.onPagerClick(e);
        }, e.numSlides = function () {
          return new Array(i.slidesCount());
        }, e.$watch("currentSlide", function (e) {
          o(e);
        });
      } };
  }), a.directive("ionSlides", ["$animate", "$timeout", "$compile", function (e, t, n) {
    return { restrict: "E", transclude: !0, scope: { options: "=", slider: "=" }, template: '<div class="swiper-container"><div class="swiper-wrapper" ng-transclude></div><div ng-hide="!showPager" class="swiper-pagination"></div></div>', controller: ["$scope", "$element", function (e, i) {
        var o = this;this.update = function () {
          t(function () {
            if (o.__slider) {
              o.__slider.update(), o._options.loop && o.__slider.createLoop();var t = o.__slider.slides.length;t > 10 && (e.showPager = !1), o.__slider.activeIndex > t - 1 && o.__slider.slideTo(t - 1);
            }
          });
        }, this.rapidUpdate = ionic.debounce(function () {
          o.update();
        }, 50), this.getSlider = function () {
          return o.__slider;
        };var r = e.options || {},
            a = angular.extend({ pagination: i.children().children()[1], paginationClickable: !0, lazyLoading: !0, preloadImages: !1 }, r);this._options = a, t(function () {
          var t = new ionic.views.Swiper(i.children()[0], a, e, n);e.$emit("$ionicSlides.sliderInitialized", { slider: t }), o.__slider = t, e.slider = o.__slider, e.$on("$destroy", function () {
            t.destroy(), o.__slider = null;
          });
        }), t(function () {
          o.rapidUpdate();
        }, 200);
      }], link: function link(e) {
        e.showPager = !0;
      } };
  }]).directive("ionSlidePage", [function () {
    return { restrict: "E", require: "?^ionSlides", transclude: !0, replace: !0, template: '<div class="swiper-slide" ng-transclude></div>', link: function link(e, t, n, i) {
        i.rapidUpdate(), e.$on("$destroy", function () {
          i.rapidUpdate();
        });
      } };
  }]), a.directive("ionSpinner", function () {
    return { restrict: "E", controller: "$ionicSpinner", link: function link(e, t, n, i) {
        var o = i.init();t.addClass("spinner spinner-" + o), t.on("$destroy", function () {
          i.stop();
        });
      } };
  }), a.directive("ionTab", ["$compile", "$ionicConfig", "$ionicBind", "$ionicViewSwitcher", function (e, t, n, i) {
    function o(e, t) {
      return l(t) ? " " + e + '="' + t + '"' : "";
    }return { restrict: "E", require: ["^ionTabs", "ionTab"], controller: "$ionicTab", scope: !0, compile: function compile(r, a) {
        for (var c = "<ion-tab-nav" + o("ng-click", a.ngClick) + o("title", a.title) + o("icon", a.icon) + o("icon-on", a.iconOn) + o("icon-off", a.iconOff) + o("badge", a.badge) + o("badge-style", a.badgeStyle) + o("hidden", a.hidden) + o("disabled", a.disabled) + o("class", a["class"]) + "></ion-tab-nav>", s = document.createElement("div"), l = 0; l < r[0].children.length; l++) {
          s.appendChild(r[0].children[l].cloneNode(!0));
        }var u = s.childElementCount;r.empty();var d, h;return u && ("ION-NAV-VIEW" === s.children[0].tagName && (d = s.children[0].getAttribute("name"), s.children[0].classList.add("view-container"), h = !0), 1 === u && (s = s.children[0]), h || s.classList.add("pane"), s.classList.add("tab-content")), function (o, r, a, l) {
          function h() {
            w.tabMatchesState() && $.select(o, !1);
          }function p(n) {
            n && u ? (b || (g = o.$new(), m = f(s), i.viewEleIsActive(m, !0), $.$element.append(m), e(m)(g), b = !0), i.viewEleIsActive(m, !0)) : b && m && (t.views.maxCache() > 0 ? i.viewEleIsActive(m, !1) : v());
          }function v() {
            g && g.$destroy(), b && m && m.remove(), s.innerHTML = "", b = g = m = null;
          }var g,
              m,
              $ = l[0],
              w = l[1],
              b = !1;o.$tabSelected = !1, n(o, a, { onSelect: "&", onDeselect: "&", title: "@", uiSref: "@", href: "@" }), $.add(o), o.$on("$destroy", function () {
            o.$tabsDestroy || $.remove(o), y.isolateScope().$destroy(), y.remove(), y = s = m = null;
          }), r[0].removeAttribute("title"), d && (w.navViewName = o.navViewName = d), o.$on("$stateChangeSuccess", h), h();var y = f(c);y.data("$ionTabsController", $), y.data("$ionTabController", w), $.$tabsElement.append(e(y)(o)), o.$watch("$tabSelected", p), o.$on("$ionicView.afterEnter", function () {
            i.viewEleIsActive(m, o.$tabSelected);
          }), o.$on("$ionicView.clearCache", function () {
            o.$tabSelected || v();
          });
        };
      } };
  }]), a.directive("ionTabNav", [function () {
    return { restrict: "E", replace: !0, require: ["^ionTabs", "^ionTab"], template: "<a ng-class=\"{'has-badge':badge, 'tab-hidden':isHidden(), 'tab-item-active': isTabActive()}\" " + ' ng-disabled="disabled()" class="tab-item"><span class="badge {{badgeStyle}}" ng-if="badge">{{badge}}</span><i class="icon {{getIcon()}}" ng-if="getIcon()"></i><span class="tab-title" ng-bind-html="title"></span></a>', scope: { title: "@", icon: "@", iconOn: "@", iconOff: "@", badge: "=", hidden: "@", disabled: "&", badgeStyle: "@", "class": "@" }, link: function link(e, t, n, i) {
        var o = i[0],
            r = i[1];t[0].removeAttribute("title"), e.selectTab = function (e) {
          e.preventDefault(), o.select(r.$scope, !0);
        }, n.ngClick || t.on("click", function (t) {
          e.$apply(function () {
            e.selectTab(t);
          });
        }), e.isHidden = function () {
          return "true" === n.hidden || n.hidden === !0 ? !0 : !1;
        }, e.getIconOn = function () {
          return e.iconOn || e.icon;
        }, e.getIconOff = function () {
          return e.iconOff || e.icon;
        }, e.isTabActive = function () {
          return o.selectedTab() === r.$scope;
        }, e.getIcon = function () {
          return o.selectedTab() === r.$scope ? e.iconOn || e.icon : e.iconOff || e.icon;
        };
      } };
  }]), a.directive("ionTabs", ["$ionicTabsDelegate", "$ionicConfig", function (e, t) {
    return { restrict: "E", scope: !0, controller: "$ionicTabs", compile: function compile(n) {
        function i(t, n, i, o) {
          function a(e, t) {
            e.stopPropagation();var n = o.previousSelectedTab();n && n.$broadcast(e.name.replace("NavView", "Tabs"), t);
          }var c = e._registerInstance(o, i.delegateHandle, o.hasActiveScope);o.$scope = t, o.$element = n, o.$tabsElement = f(n[0].querySelector(".tabs")), t.$watch(function () {
            return n[0].className;
          }, function (e) {
            var n = -1 !== e.indexOf("tabs-top"),
                i = -1 !== e.indexOf("tabs-item-hide");t.$hasTabs = !n && !i, t.$hasTabsTop = n && !i, t.$emit("$ionicTabs.top", t.$hasTabsTop);
          }), t.$on("$ionicNavView.beforeLeave", a), t.$on("$ionicNavView.afterLeave", a), t.$on("$ionicNavView.leave", a), t.$on("$destroy", function () {
            t.$tabsDestroy = !0, c(), o.$tabsElement = o.$element = o.$scope = r = null, delete t.$hasTabs, delete t.$hasTabsTop;
          });
        }function o(e, t, n, i) {
          i.selectedTab() || i.select(0);
        }var r = f('<div class="tab-nav tabs">');return r.append(n.contents()), n.append(r).addClass("tabs-" + t.tabs.position() + " tabs-" + t.tabs.style()), { pre: i, post: o };
      } };
  }]), a.directive("ionTitle", [function () {
    return { restrict: "E", compile: function compile(e) {
        e.addClass("title");
      } };
  }]), a.directive("ionToggle", ["$timeout", "$ionicConfig", function (e, t) {
    return { restrict: "E", replace: !0, require: "?ngModel", transclude: !0, template: '<div class="item item-toggle"><div ng-transclude></div><label class="toggle"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></div>', compile: function compile(e, n) {
        var i = e.find("input");return s({ name: n.name, "ng-value": n.ngValue, "ng-model": n.ngModel, "ng-checked": n.ngChecked, "ng-disabled": n.ngDisabled, "ng-true-value": n.ngTrueValue, "ng-false-value": n.ngFalseValue, "ng-change": n.ngChange, "ng-required": n.ngRequired, required: n.required }, function (e, t) {
          l(e) && i.attr(t, e);
        }), n.toggleClass && e[0].getElementsByTagName("label")[0].classList.add(n.toggleClass), e.addClass("toggle-" + t.form.toggle()), function (e, t) {
          var n = t[0].getElementsByTagName("label")[0],
              i = n.children[0],
              o = n.children[1],
              r = o.children[0],
              a = f(i).controller("ngModel");e.toggle = new ionic.views.Toggle({ el: n, track: o, checkbox: i, handle: r, onChange: function onChange() {
              a && (a.$setViewValue(i.checked), e.$apply());
            } }), e.$on("$destroy", function () {
            e.toggle.destroy();
          });
        };
      } };
  }]), a.directive("ionView", function () {
    return { restrict: "EA", priority: 1e3, controller: "$ionicView", compile: function compile(e) {
        return e.addClass("pane"), e[0].removeAttribute("title"), function (e, t, n, i) {
          i.init();
        };
      } };
  });
}();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(0);


__WEBPACK_IMPORTED_MODULE_0__app__["a" /* app */].config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.templates.maxPrefetch(0);

  $stateProvider.state('test', {
    url: '/test',
    templateUrl: "./component/test/test.html"
  });

  $urlRouterProvider.otherwise("/test");
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__testController__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_html__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__test_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__test_scss__);




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(0);

__WEBPACK_IMPORTED_MODULE_0__app__["a" /* app */].controller("testCtrl", function ($scope) {});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var path = './component/test/test.html';
var html = "<ion-view ng-controller=\"testCtrl\">\n  <div class=\"test\"></div>\n</ion-view>\n";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map