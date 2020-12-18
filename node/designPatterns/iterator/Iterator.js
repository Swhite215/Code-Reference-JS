class Iterator {
    constructor(iterable = []) {
        this.index = 0;
        this.iterable = iterable;
    }

    first() {
        let [first] = this.iterable;
        return first;
    }

    last() {
        let [last] = [...this.iterable].reverse();
        return last;
    }

    hasNext() {
        return this.index < this.iterable.length - 1;
    }

    next() {
        if (this.hasNext()) {
            this.index += 1;
        }
        return this.current();
    }

    prev() {
        if (this.index !== 0) {
            this.index -= 1;
        }
        return this.current();
    }

    current() {
        return this.iterable[this.index];
    }

    writeLn() {}
}

module.exports = Iterator;
