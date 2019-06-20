function storage() {
    var container = {};

    function store(key, value) {
        if (key && value) container[key] = value;
        if (key && !value) return key in container ? container[key] : "Not found";
        return container;
    }
    store.clear = function () {
        container = {}
        };


    return store;
}

module.exports = storage;