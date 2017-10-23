(function(waitani) {
	"use strict";
	waitani.addScripts = function (scripts, callback){
		//console.log("o.o...");
		scripts.push('/assets/src/waitingani.js');
		callback(null,scripts);
	}
})(module.exports);
