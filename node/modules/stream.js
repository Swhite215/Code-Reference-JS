//Streams - Moving from a Source to a Destination
//Readable Stream - Gathers the data
//Writable Stream - Receives the data
const fs = require("fs");
const { PassThrough, Duplex, Transform } = require("stream");

//Readable Stream
const { Readable } = require("stream");

const peaks = [
    "Tallac",
    "Ralston",
    "Rubicon",
    "Twin Peaks",
    "Castle Peak",
    "Rose",
    "Freel Peak"
];

class StreamFromArray extends Readable {
    constructor(array) {
        //super({ encoding: "UTF-8" }); //Invokes Readable Stream
        super({ objectMode: true });
        this.array = array;
        this.index = 0;
    }

    _read() {
        if (this.index <= this.array.length) {
            //const chunk = this.array[this.index];
            const chunk = {
                data: this.array[this.index],
                index: this.index
            };
            this.push(chunk);
            this.index += 1;
        } else {
            this.push(null); //Signals to readable stream is over
        }
    }
}

const peakStream = new StreamFromArray(peaks);

//Listens for data event
peakStream.on("data", chunk => {
    console.log(chunk);
});

//Listens for end event
peakStream.on("end", () => {
    console.log("Done!");
});

//Writable Stream
const writeStream = fs.createWriteStream("writeTest.txt");
writeStream.write(`Hello, this is random text \n`);
writeStream.write(`Hello, this is more random text \n`);
// writeStream.end();
// writeStream.on("drain", () => {
//     stream.resume();
// });
// writeStream.on("close", () => {
//     console.log("Writable stream closing.");
// });

//Flowing - Automatically sends data vs. Non-Flowing - Ask for data
peakStream.pause(); //To make it non-flowing
peakStream.read(); //To initiate reading of the stream
peakStream.resume(); //Converts back to flowing mode

//Backpressure - Writable  Stream is unable to take all the data being supplied
//highWaterMark - Size of hose sending data to writable stream
//Piping - Manages sending data from any readable stream to any writeable stream
//Duplex Streams - Help us compose streams into pipelines, PassThrough, Throttle
peakStream.pipe(writeStream).on("error", console.error);
const report = new PassThrough();

//Example Throttle Duplex stream
class Throttle extends Duplex {
    constructor(ms) {
        super();
        this.delay = ms;
    }
    _write(chunk, encoding, callback) {
        this.push(chunk);
        this.setTimeout(callback, this.delay);
    }
    _read() {}
    _final() {
        this.push(null);
    }
}

const throttle = new Throttle();

peakStream
    .pipe(report)
    .pipe(throttle)
    .pipe(writeStream);

//Transform Streams - Change the data from readable streams before they are sent to writeable streams
//Z-Lib - Zips incoming data from read stream and sends compressed data to write stream
//Crypto - Encrypt or Decrypt data from read stream and pass to write stream
class ReplaceText extends Transform {
    constructor(char) {
        super();
        this.replaceChar = char;
    }
    _transform(chunk, encoding, callback) {
        const transformChunk = chunk
            .toString()
            .replace(/[a-z]|[A-Z]|[0-9]/g, this.replaceChar);
        this.push(transformChunk);
        callback();
    }

    _flush(callback) {
        this.push("More stuff is being passed...");
        callback();
    }
}

const xStream = new ReplaceText("x");
process.stdin.pipe(xStream).pipe(process.stdout);
