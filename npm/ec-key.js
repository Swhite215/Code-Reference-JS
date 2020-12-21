const fs = require('fs');
const path = require('path');
const ECKey = require('ec-key');


// Generates and Stores Key
const generatePrivateKey = async () => {

    console.log(`Generating and Storing Private Key`)

    try {

        // Generate Key
        let key = ECKey.createECKey('prime256v1');
        let pemKey = key.toString('pem');

        // Store Key
        let keyPath = path.join(__dirname, "deviceSecret", "devicePrivateKey.pem"); // Replace with JSONStore
        fs.writeFile(keyPath, pemKey, (err) => {
            if (err) throw err;
            console.log('Private Key Generated!')
        });
        
    } catch(e) {
        console.log(`Error generating Private Key: ${e}`);
    }

}

generatePrivateKey();