class Shopper {
    constructor(name = "unnamed person") {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(", ");
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    clone() {
        //Copy object structure, getters, setters, methods, and values
        var proto = Object.getPrototypeOf(this); // Returns prototype of current object
        var cloned = Object.create(proto); //Copies methods of the current object

        cloned._name = this._name; //Copies name value
        cloned._shoppingList = [...this._shoppingList]; //Copies shopping list

        return cloned;
    }
}

module.exports = Shopper;
