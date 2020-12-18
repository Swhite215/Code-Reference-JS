class Store {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    sale(discount) {
        console.log(
            `Announce sale at ${this.name}, ${discount}% off everything!`
        );
        this.subscribers.forEach(observer =>
            observer.notify(this.name, discount)
        );
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }
}

module.exports = Store;
