function storage() {
    var storage = {};

    function store (inputKey, inputValue) {
        if(arguments.length === 1){
            var value = storage[inputKey];
            if(value)
                return value;
            else
                return 'Not found';
        } else if(arguments.length === 2){
            storage[inputKey] = inputValue;
        }



        return storage;
    }

    store.clear = function () {
        storage = {};
        return storage;
    };

    return store;
}

module.exports = storage;