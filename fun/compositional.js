//Classes
const fighter = name => {
    let state = {
        name,
        health: 100,
        stamina: 100,
        items: []
    };

    return Object.assign(state, canFight(state));
};

const mage = name => {
    let state = {
        name,
        health: 100,
        mana: 100,
        items: []
    };

    return Object.assign(state, canCast(state));
};

const paladin = name => {
    let state = {
        name,
        health: 110,
        mana: 75,
        items: []
    };

    return Object.assign(state, canFight(state), canCast(state));
};

const thief = name => {
    let state = {
        name,
        health: 75,
        stamina: 115,
        items: []
    };

    return Object.assign(state, canFight(state), canSteal(state));
};

//Abilities
const canFight = state => {
    return {
        fight: function() {
            console.log(`${state.name} attacks the foe!`);
            state.stamina--;
        }
    };
};

const canCast = state => {
    return {
        cast: function(spell) {
            console.log(`${state.name} casts ${spell}!`);
            state.mana--;
        }
    };
};

const canHeal = state => {
    return {
        heal: function(char) {
            console.log(`${state.name} heals ${char.name}`);
            char.health++;
        }
    };
};

const canSteal = state => {
    return {
        steal: function(enemy) {
            if (enemy.items.length > 0) {
                console.log(`${state.name} steals from ${enemy.name}`);
                state.items.push(enemy.items.shift());
            } else {
                console.log(`${enemy.name} has nothing to steal`);
            }
        }
    };
};
