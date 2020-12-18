const CharacterBuilder = require("./charBuilder");

let goblinOne = new CharacterBuilder("Goblin One")
    .isEnemy()
    .hasHealth("75")
    .hasStamina("75")
    .hasAtk(10)
    .hasItems(["Potion", "Knife"])
    .canFight()
    .build();

let goblinTwo = new CharacterBuilder("Goblin Two")
    .isEnemy()
    .hasHealth("75")
    .hasStamina("75")
    .hasAtk(10)
    .canFight()
    .build();

let ogre = new CharacterBuilder("Ogre")
    .isEnemy()
    .hasHealth("200")
    .hasAtk(35)
    .hasItems(["Club", "Crystal"])
    .canFight()
    .build();

module.exports = {
    goblinOne,
    goblinTwo,
    ogre
};
