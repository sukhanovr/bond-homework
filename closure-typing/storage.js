function storage() {
    let assassinsList = {};

    function store(key, value) {
        if (key && value){
            assassinsList[key] = value;
        }
        if (key && !value){
            if (key in assassinsList){
                return assassinsList[key];
            } else {
                return "Not found";
            }
        }

        return assassinsList;
    }

    //I believe I am doing something wrong
    //I need more time to deal with js objects and storing them in memory
    store.clear = function () {
        assassinsList = {};
    };

    return store;
}

module.exports = storage;