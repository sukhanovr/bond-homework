function Magic() {

}

Magic.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = Magic;