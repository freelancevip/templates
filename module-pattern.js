var MyModule = function () {
	
	var myPrivateVar = "Private property";
	
	var myPrivateMethod = function() {
		console.log(myPrivateVar);
	}
	
	var module = {};

	module.myPublicProperty = "Public property";

	module. myPublicMethod = function() {
		console.log(myPrivateVar);
		console.log(myPrivateMethod());
	}

	return module;
	
}();