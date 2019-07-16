const Doctor = require('./Doctor');
const Soldier = require('./Soldier');
const Heavy = require('./Heavy');
const Magic = require('./Magic');

var doc = new Doctor('Санчо');
var soldier = new Soldier('Дон Кихот');
var heavy = new Heavy('Мельница');

while (soldier.isAlive() && heavy.isAlive()) {
    soldier.handAttack(heavy);
    heavy.stats();
    heavy.machineGunAttack(soldier, Magic.getRandomInt(0, 4));
    soldier.stats();
    doc.heal(soldier);
}
if (!soldier.isAlive()) {
    console.log('Было ожидаемо, что победа будет за персонажем ' + heavy.getName())
} else
    console.log('Невероятно, Персонаж ' + soldier.getName() + ' победил и уходит живым')