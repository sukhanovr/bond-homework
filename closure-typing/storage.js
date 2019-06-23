function storage() {

    let storageObj = {};

    function store(key, value) {

        if (arguments.length === 0) {
            storageObj = {};
        }

        if (arguments.length === 1) {
            if (storageObj[key] !== undefined) {
                return storageObj[key];
            } else {
                return 'Not found';
            }
        }

        if (arguments.length === 2) {
            if (key) {
                storageObj[key] = value;
            } else {
                return 'Wrong key';
            }
        }
    }

    return store;
}

module.exports = storage;