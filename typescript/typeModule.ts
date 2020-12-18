export class modulePoint {
    constructor(
        private _x: number,
        private _y: number,
        private optional?: number,
        private privateVar?: string
    ) {}

    //Method to Get X value
    getX = () => {
        return this._x;
    };

    //Method to set X Value
    setX = value => {
        this._x = value;
    };

    //Getter
    get x() {
        return this._x;
    }

    //Setter
    set x(value) {
        this._x = value;
    }
}

let pointFour = new modulePoint(1, 3);
console.log(pointFour.x);
pointFour.x = 10;
