function storage ( ) {
    let data= {};

     function store (paramName, paramValue) {

         switch (arguments.length) {
             case 2:
                 data[paramName] = paramValue;
                 break;
             case 1:
                 return ((paramName in data)? data[paramName] : "Not found");
             default:
                 return data;
         }
    }

    store.clear = function(){
        data = {};
    }

    return store;
}

module.exports = storage;