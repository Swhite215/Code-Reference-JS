class Mall {
    constructor() {
        this.sales = [];
    }

    notify(storeName, discount) {
        this.sales.push({ storeName: storeName, discount: discount });
    }
}

module.exports = Mall;
