const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

(async() => {
    // Read the Compiled ABI and BIN as Buffers
    const abiBuffer = fs.readFileSync(path.join(__dirname, "__solc-contract_sol_ExampleContract.abi"));
    const binBuffer = fs.readFileSync(path.join(__dirname, "__solc-contract_sol_ExampleContract.bin"));

    // Convert the Buffers to Strings
    const abiString = abiBuffer.toString();
    const binString = binBuffer.toString();

    // Use Truffle as Provider for Web3
    const provider = new HDWalletProvider(
        'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat',
        'http://127.0.0.1:7545'
    );
    const web3 = new Web3(provider);

    // Create a Contract Interface
    let contract = new web3.eth.Contract(JSON.parse(abiString));

    // Get List of Accounts and Choose One
    let accounts = await web3.eth.getAccounts();
    let account = accounts[2];

    // Deploy the Contract to Ganache
    contract.deploy({
        data: "0x" + binString
    }).send({
        from: account,
        gas: 1500000,
        gasPrice: '1000000'
    }).on('error', function (e) { 

        console.log(`Error: ${e}`) 

    }).on('confirmation', function (confirmationNumber, receipt) { 

        console.log(`Confirmation Number: ${confirmationNumber}`)
        console.log(`New Contract Address: ${receipt.contractAddress}`)

    })

})();