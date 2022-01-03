let ethers = require('ethers');
const contractABI = require("./ERC20_abi.json");

let rpcEndpoint = "http://domain:port/";
let contractAddress = "0x20AC05f9A184757DA5440Ff2b528f1Ed18b4822E";

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint);

    let blockNum = await provider.getBlockNumber();
    console.log(blockNum);
    
    let tokenContract = new ethers.Contract(contractAddress, contractABI, provider);
    console.log(tokenContract);

    let name = await tokenContract.name;
    console.log("Name: ", name);

    let symbol = await tokenContract.symbol;
    console.log("Symbol: ", symbol);

    let decimals = await tokenContract.decimals;
    console.log("Decimals: ", decimals);

    let totalSupply = await tokenContract.totalSupply();
    let supplyInt = parseInt(totalSupply);
    console.log("Total Supply: ", supplyInt);

    let balance = await tokenContract.balanceOf("0x8401Eb5ff34cc943f096A32EF3d5113FEbE8D4Eb");
    balance = parseInt(balance);
    console.log("Balance: ", balance);
  }


main();