class Shopper {
    constructor(name) {
        this.name = name;
    }

    //Method on observer that the observed will call
    notify(storeName, discount) {
        console.log(
            `${
                this.name
            }, there is a sale at ${storeName}! ${discount}% off everything!`
        );
    }
}

module.exports = Shopper;
