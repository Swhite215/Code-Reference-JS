class Storage {
    constructor(name, inventory, deliveryTime = 0) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;

        this.next = null;
    }

    setNext(storage) {
        this.next = storage;
    }

    lookInLocalInventory(itemName) {
        var index = this.inventory.map(item => item.name).indexOf(itemName);
        return this.inventory[index];
    }
    find(itemName) {
        var found = this.lookInLocalInventory(itemName);
        if (found) {
            return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime:
                    this.deliveryTime === 0
                        ? "now"
                        : `${this.deliveryTime} days`
            };
        } else if (this.next) {
            return this.next.find(itemName);
        } else {
            return "We do not carry this item";
        }
    }
}

module.exports = Storage;
