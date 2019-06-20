function storage() {
    var storObj = {}
    
    function store (keyParam, valueParam){
        if (arguments.length == 1) return storObj[keyParam] == undefined ? "Not found" : storObj[keyParam]
        if (arguments.length == 2) storObj[keyParam] = valueParam            
        return storObj
    }

    store.clear = () => {storObj = {}}
    return store
}

module.exports = storage;
