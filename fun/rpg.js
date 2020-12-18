//Node Modules
const { createInterface } = require("readline");
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
const srl = createInterface({
    input: process.stdin,
    output: process.stdout
});
const spawn = require("child_process").spawn;

//Utility Functions
const { sortActorOrder, randomOrder, buildTeam } = require("./utilities");

//Heroes
const { joxos, vi, rokh, beatrix, tranquility } = require("./heroes");

// //Enemies
const { goblinOne, goblinTwo, ogre } = require("./enemies");

//Program
//Task 1 - Generate Heroes and Enemies
let heroes = buildTeam(joxos, vi, rokh, beatrix, tranquility);
let enemies = buildTeam(goblinOne, goblinTwo, ogre);

//Task 2 - Randomly Assign Acting Order and Sort
let actorStack = [...heroes.members, ...enemies.members];
randomOrder(actorStack);
actorStack = sortActorOrder(actorStack);
orderedNames = actorStack.map(actor => actor.name);

//Task 3 - Preparation
let heroesNames = heroes.members.map(hero => hero.name);
let enemyNames = enemies.members.map(enemy => enemy.name);

console.log(
    `Heroes: ${heroesNames.join(" | ")} vs Enemies: ${enemyNames.join(" | ")}`
);

const enemyTurn = actorStack => {
    if (actorStack[0].isEnemy === true) {
        //Perform Enemy Action
        console.log(`${actorStack[0].name} attacks!`);
        //Shift Array
        actorStack.push(actorStack.shift());
        return enemyTurn(actorStack);
    } else {
        return;
    }
};

// //Task 3 - Game
const fightFlow = function() {
    //Run Enemy First Check
    enemyTurn(actorStack);

    let currentActorAbilities = [...actorStack[0].abilities].join(" | ");
    let question = `${actorStack[0].name}'s turn. What should ${
        actorStack[0].name
    } do? Command - ${currentActorAbilities}`;
    console.log(question);
    rl.prompt();

    rl.on("line", input => {
        let action = input.toLowerCase();

        //Current Hero
        console.log(actorStack[0].name);
        console.log(actorStack[0].abilities);

        //Deal with INPUT
        if (action === "fight") {
            //Select an enemy
            //Decrement Individual Enemy Health
            //Decrement Enemy Team Health
        } else if (action === "heal") {
            //Select a Team Member
            //Increment Individual Team Health
            //Increment Hero Team Health
        } else if (action === "steal") {
            //Select an Enemy
            //Steal and Add Item to Inventory
        } else if (action === "cast") {
            //Select an Enemy
            //Decrement Individual Enemy Health
            //Decrement Enemy Team Health
        }

        //Adjust Health
        enemies.health = enemies.health - 100;

        //Deal with End Game Conditions
        if (heroes.health < 0) {
            console.log("Enemies Win!");
            rl.close();
        } else if (enemies.health < 0) {
            console.log("Heroes Win!");
            rl.close();
        } else {
            actorStack.push(actorStack.shift());
            enemyTurn(actorStack);
            let currentActorAbilities = [...actorStack[0].abilities].join(
                " | "
            );
            let question = `${actorStack[0].name}'s turn. What should ${
                actorStack[0].name
            } do? Command - ${currentActorAbilities}`;
            console.log(question);
            rl.prompt();
        }
    });
};

fightFlow();
