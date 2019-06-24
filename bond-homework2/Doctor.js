const Unit = require('./Unit');

function Doctor() {
    Unit.apply(this, arguments);
    this._healPower = 10;
}

Doctor.prototype = Object.create(Unit.prototype);

Doctor.prototype.heal = function (char) {
    if (char.isAlive()) {
        let healPoints = this._healPower + (this._healPower * (this._level * 0.1))
        char.addHealth(healPoints);
        this.earnExperience(250);
        console.log(this.getName() + ' исцелил персонажа ' + char.getName() + ' на ' + healPoints + ' ед. здоровья');
    }
}

module.exports = Doctor;