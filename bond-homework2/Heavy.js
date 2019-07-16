const Soldier = require('./Soldier');

function Heavy() {
    Soldier.apply(this, arguments);
    this.damageResist = 0.2;
}

Heavy.prototype = Object.create(Soldier.prototype);

Heavy.prototype.machineGunAttack = function (char, amountOfShots) {
    if (this.isAlive() && char.isAlive()) {
        let damage = this._attackPower + (this._attackPower * (this._level * 0.1));
        char.takeDamage(damage * amountOfShots)
        console.log(this.getName() + ' нанес удар персонажу ' + char.getName() + ' на ' + (damage * amountOfShots) + ' ед. здоровья');
    }
}
Heavy.prototype.takeDamage = function (amount) {
    this._health -= amount - this.damageResist;
    this.earnExperience(250);
}

module.exports = Heavy;