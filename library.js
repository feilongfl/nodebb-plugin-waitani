(function(waitani) {
	"use strict";
	waitani.addScripts = function (scripts, callback){
		//console.log("o.o...");
		scripts.push('/src/waiting-ani-o.js');
		callback(null,scripts);
	}
})(module.exports);
