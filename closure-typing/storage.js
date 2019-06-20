function storage() {
  let container = {};
  return function put(key,value){
    if(value){
      container[key] = value;
    }else if (key && ! value) {
      for (k in container){
        if (k === key){return container[key];break}
      }
      return 'Not found';
    }else{
      return container;
    };
    put.clear = function(){container= {}; return container;}
  }
}


module.exports = storage;
