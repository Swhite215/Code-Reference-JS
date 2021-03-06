var Storage = require("./Storage");

class Store {
    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;

        //Create storage objects
        var floor = new Storage("store floor", inventory.floor);
        var backroom = new Storage("backroom", inventory.backroom);
        var localStore = new Storage("nearby store", inventory.localStore, 1);
        var warehouse = new Storage("warehouse", inventory.warehouse, 5);

        //Set the next object responsible
        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);
        this.storage = floor;
    }

    find(itemName) {
        return this.storage.find(itemName);
    }
}

module.exports = Store;
