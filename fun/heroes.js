const CharacterBuilder = require("./charBuilder");

//Heroes
let joxos = new CharacterBuilder("Joxos")
    .hasHealth("250")
    .hasStamina("150")
    .hasAtk(25)
    .hasItems(["Unity Stone"])
    .canFight()
    .build();

let rokh = new CharacterBuilder("Rokh")
    .hasHealth("100")
    .hasStamina("125")
    .hasAtk(15)
    .hasItems(["Aegis Core"])
    .canFight()
    .canSteal()
    .build();

let vi = new CharacterBuilder("Vi")
    .hasHealth("75")
    .hasMana("150")
    .hasAtk(5)
    .hasMagic(25)
    .hasItems(["Tetrahedron", "Octahedron", "Cube", "Icosahedron"])
    .canCast()
    .canFight()
    .build();

let beatrix = new CharacterBuilder("Beatrix")
    .hasHealth("125")
    .hasMana("125")
    .hasMagic(20)
    .hasAtk(15)
    .hasItems(["Emory Mantle"])
    .canCast()
    .canFight()
    .canHeal()
    .build();

let tranquility = new CharacterBuilder("Tranquility")
    .hasHealth("125")
    .hasStamina("100")
    .hasAtk(20)
    .hasItems(["Serenity Key"])
    .canFight()
    .build();

module.exports = {
    joxos,
    rokh,
    vi,
    beatrix,
    tranquility
};
