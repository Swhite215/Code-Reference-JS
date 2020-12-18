class InventoryItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${item.name} costs ${item.price}`);
    }
}

//Decorator One
class GoldenInventoryItem {
    constructor(baseItem) {
        this.name = `Golden ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }
}

//Decorator Two
class DiamondInventoryItem {
    constructor(baseItem) {
        this.name = `Diamond ${baseItem.name}`;
        this.price = 10000 + baseItem.price;
        this.cutsGlass = true;
    }

    print() {
        console.log(`${this.name} costs a lot of money`);
    }
}

//Exporting multiple classes within same module
module.exports = { InventoryItem, GoldenInventoryItem, DiamondInventoryItem };
