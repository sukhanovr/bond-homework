function storage() {
    let obj = {};

    const store = function(...args) {
        if (args.length === 1) {
            return (obj[args[0]] || 'Not found');
        } else if (args.length === 2) {
            obj[args[0]] = args[1];
        }
        return obj;
    }

    store.clear = function() {
        obj = {};
    }

    store.getObj = function() {
        return obj;
    }

    return store;
}

module.exports = storage;