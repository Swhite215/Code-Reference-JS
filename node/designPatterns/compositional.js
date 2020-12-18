//Three Different Types of Prototypal Object Oriented
//1. Concatenative Inheritance - Process of inheriting features directly from one object to another by copying the source objects properties.
//2. Prototype Delegation -
//3. Functional Inheritance - Produce an object from a factory, and extend the produced object by assigning properties to it directly, using concatenative inheritance.

//Function that returns an object with cast method
const canCast = state => {
    return {
        cast: spell => {
            console.log(`${state.name} casts ${spell}!`);
            state.mana--;
        }
    };
};

//Function that returns an object with fight method
const canFight = state => {
    return {
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    };
};

//Fighter function
const fighter = name => {
    let state = {
        name,
        health: 100,
        stamina: 100
    };

    return Object.assign(state, canFight(state));
};

//Mage function
const mage = name => {
    let state = {
        name,
        health: 100,
        mana: 100
    };

    return Object.assign(state, canCast(state));
};

//Paladin Function - Using Composition
const paladin = name => {
    let state = {
        name,
        health: 100,
        mana: 100,
        stamina: 100
    };

    //Return an object composed of all the actions a paladin can perform
    return Object.assign(state, canFight(state), canCast(state));
};

let scorcher = mage("Scorcher");
scorcher.cast("fireball");
console.log(scorcher.mana);

let slasher = fighter("Slasher");
slasher.fight();
console.log(slasher.stamina);

let pali = paladin("Paladin");
pali.fight();
pali.cast("Blizzard");
console.log(paladin.stamina);
console.log(paladin.mana);
