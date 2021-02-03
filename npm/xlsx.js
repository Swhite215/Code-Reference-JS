const XLSX = require('xlsx')

var workbook = XLSX.readFile("Name.xlsx")

let sheet = workbook.Sheets.Sheet1
const json = XLSX.utils.sheet_to_json(sheet)

// Create a map
const m = new Map();

for (let row of json) {
    let stringName = row['Name'].toString();
    if (m[stringName] !== undefined) {
        m[stringName] =  m[stringName] + row.Count
    } else {
        m[stringName] = row.Count
    }
}

let maxArray = [0,0,0,0,0];
let dealerArray = ["","","","",""]

for (let [key, value] of Object.entries(m)) {

    if (maxArray.length == 0) {
        maxArray.push(value)
    }

    for (i = 0; i < 5; i++) {
        if (value > maxArray[i]) {
            maxArray.splice(i, 0, value)
            dealerArray.splice(i,0, key)
            break;
        }
    }
}

console.log(maxArray.slice(0, 5))
console.log(dealerArray.slice(0, 5))

// Write File
let wb = XLSX.utils.book_new();
let ws = XLSX.utils.json_to_sheet(json)
XLSX.utils.book_append_sheet(wb, ws, "Example File")

console.log(wb)

XLSX.writeFile(wb, 'example_file.xlsx');
