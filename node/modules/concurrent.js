//Concurrent Task Queue Execution
const logUpdate = require("log-update");
const toX = () => "X";

const delay = seconds =>
    new Promise((resolves, rejects) => {
        setTimeout(resolves, seconds * 1000);
    });

//Queue of Tasks
var tasks = [
    delay(4),
    delay(6),
    delay(4),
    delay(3),
    delay(5),
    delay(7),
    delay(9),
    delay(10),
    delay(3),
    delay(5)
];

class PromiseQueue {
    constructor(promises = [], concurrentCount = 1) {
        this.concurrent = concurrentCount;
        this.total = promises.length;
        this.todo = promises;
        this.running = [];
        this.complete = [];
    }

    get runAnother() {
        return this.running.length < this.concurrent && this.todo.length;
    }

    graphTasks() {
        const { todo, running, complete } = this;
        logUpdate(`
            todo: [${todo.map(toX)}]
            running: [${running.map(toX)}]
            complete: [${complete.map(toX)}]
        `);
    }
    run() {
        while (this.runAnother) {
            var promise = this.todo.shift();
            promise.then(() => {
                this.complete.push(this.running.shift());
                this.graphTasks();
                this.run();
            });
            this.running.push(promise);
            this.graphTasks();
        }
    }
}

const delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();
