class CatalogItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    //access this method with instance.total
    get total() {
        return this.price;
    }

    print() {
        console.log(`${this.name} $${this.price} `);
    }
}

module.exports = CatalogItem;
