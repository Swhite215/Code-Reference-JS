class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
}

/* Singleton Class Solution
class Singleton {
    constructor() {
        //Checks if there is an instance of this Singleton
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }

    getInstance() {
        return Singleton.instance;
    }
}

module.exports = Singleton;
*/

//Exported Instance Solution - Runs once, instantiates Logger and saves it in the Cache
module.exports = new Logger();
