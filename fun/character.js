class Character {
    constructor(builder) {
        this.name = builder.name;
        this.health = builder.health;
        this.stamina = builder.stamina || 0;
        this.mana = builder.mana || 0;
        this.items = builder.items || [];
        this.fight = builder.fight || null;
        this.cast = builder.cast || null;
        this.steal = builder.steal || null;
        this.heal = builder.heal || null;
        this.abilities = [...builder.abilities];
        this.isEnemy = builder.isEnemy || false;
        this.attackPower = builder.attackPower || 0;
        this.magicPower = builder.magicPower || 0;
    }
}

module.exports = Character;
