
console.log('console and debugger statements are red.');

var a = new Array();
var b = new Date();
var c = "A string is green.";
var d = [1,2,3,4];
var e = undefined;
var f = null;

var hidden = function YouCannotSeeMe() {
    //
}

/**
 * A block comment is green.
 *
 * Functions have a grey background, allowing to easily
 * spot anonymous functions.
 *
 */
var myFunction = function(param1, param2) {
    if(param1 === undefined || param2 === undefined) {
        throw 'Throw is a keyword.'
    }
    return [param1, param2].join('');
}

jQuery.fn = jQuery.prototype = {
	jquery: version,
    re : /123\/456/ // Regex-escapes have a yellow background

	toArray: function() {
		return slice.call( this );

        function() {} // every function has a grey background
	},

	get: function( num ) {
        debugger;
        // this is written in italics
		return num != null ?
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :
			slice.call( this );
	}
}

String.prototype.doSomething = function () {
    // A line comment is grey.
};

module.exports = myFunction;
