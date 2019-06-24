const Unit = require('./Unit');

function Soldier() {
    Unit.apply(this, arguments)
    this._attackPower = 15;
}

Soldier.prototype = Object.create(Unit.prototype);

Soldier.prototype.handAttack = function (char) {
    if (this.isAlive() && char.isAlive()) {
        let damage = this._attackPower + (this._attackPower * (this._level * 0.1));
        char.takeDamage(damage);
        this.earnExperience(250);
        console.log(this.getName() + ' нанес удар персонажу ' + char.getName() + ' на ' + damage + ' ед. здоровья');
    }
}

module.exports = Soldier;