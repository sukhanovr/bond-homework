function storage() {
  //define empty object
	var results = {};
	
	function store(objektKey, objectValue) {
      //console.log(store.arguments.length);
	  if (arguments.length == 2){
		results[objektKey] = objectValue;
		
	  }
	  else if (arguments.length == 1){
		if (objektKey in results) {
		  return results[objektKey];
		}
		else{
		  return 'Not found';
		}
	  }
	  else {
		return results;  
	  }
    }
	
	store.clear = function() {
      results = {};	  
    };
  
    return store;
}

module.exports = storage;