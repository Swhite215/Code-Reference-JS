const Character = require("./character");

class CharacterBuilder {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.abilities = [];
    }

    //Attributes
    hasHealth(health = 100) {
        this.health = Number(health);
        return this;
    }
    hasMana(mana = 100) {
        this.mana = Number(mana);
        return this;
    }
    hasStamina(stamina = 100) {
        this.stamina = Number(stamina);
        return this;
    }
    hasItems(items = []) {
        this.items = [...this.items, ...items];
        return this;
    }
    isEnemy() {
        this.isEnemy = true;
        return this;
    }
    hasAtk(attack = 10) {
        this.attackPower = attack;
        return this;
    }
    hasMagic(magic = 10) {
        this.magicPower = magic;
        return this;
    }

    //Abilities
    canFight() {
        this.fight = function(enemy) {
            console.log(`${state.name} attacks ${enemy.name}!`);
            state.stamina--;
            //Deal with decrementing enemy health
        };
        this.abilities.push("Fight");
        return this;
    }

    canCast() {
        this.cast = function(spell, enemy) {
            console.log(`${state.name} casts ${spell} on ${enemy.name}!`);
            state.mana--;
            //Deal with decrementing enemy health
        };
        this.abilities.push("Cast");
        return this;
    }

    canSteal() {
        this.steal = function(enemy) {
            if (enemy.items.length > 0) {
                console.log(`${state.name} steals from ${enemy.name}`);
                state.items.push(enemy.items.shift());
            } else {
                console.log(`${enemy.name} has nothing to steal`);
            }
        };
        this.abilities.push("Steal");
        return this;
    }

    canHeal() {
        this.heal = function(char) {
            console.log(`${state.name} heals ${char.name}`);
            char.health++;
        };
        this.abilities.push("Heal");
        return this;
    }

    //Build
    build() {
        return new Character(this);
    }
}

module.exports = CharacterBuilder;
