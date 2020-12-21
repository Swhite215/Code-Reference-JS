const pem = require('pem')
const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);        
        
// Generates and Stores CSR
const generateCSR = async (enrollmentID) => {

    console.log(`Generating and Storing CSR`)

    try {

        // Get Key
        let keyPath = path.join(__dirname, "deviceSecret", "devicePrivateKey.pem");
        let key = await readFile(keyPath, 'utf8'); // Replace with JSONStore

        // Configure CSR
        let csrPath = path.join(__dirname, "deviceSecret", "test.csr");
        let csrOptions = {
            clientKey: key,
            country: "US",
            state: "Michigan",
            locality: "Michigan",
            organizations: "Organization",
            organizationUnit: "Unit 5",
            commonName: enrollmentID
        }

        // Generate and Store CSR
        pem.createCSR(csrOptions, (err, data) => {
            if (err) throw err;
            console.log(data);

            // Replace with JSONStore
            fs.writeFile(csrPath, data.csr, (err) => {
                if (err) throw err;
                console.log('CSR Generated!')
            });
        });

    } catch(e) {
        console.log(`Error generating CSR: ${e}`);
    }
}

if (!process.argv[2]) {
    console.warn(`Error, required CLI arguments <enrollmentID> is missing.`)
}

let enrollmentID = process.argv[2];

generateCSR(enrollmentID);