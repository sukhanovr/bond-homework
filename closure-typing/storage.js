function storage() {
    var result = {};

    function store(key, value) {
        if (arguments.length == 2) {
            result[key] = value;
        }
        if (arguments.length == 1) {
            var storageValue = result[key];
            if (storageValue) {
                return storageValue;
            }
            else return 'Not found';
        }
        return result;
    }
    store.clear = function() {
        result = {};
    };
    return store;
}

module.exports = storage;