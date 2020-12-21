// Version of Solidity
pragma solidity ^0.5.2;

// Contracts are similar to classes
contract ExampleContract {

    address creator;
    address payable public target;

    event SayHello(address target);
    event SayGoodbye(address target);

    constructor() public {
        creator = msg.sender;
    }

    function sayHello() payable public{
        require(msg.sender != creator);

        emit SayHello(msg.sender);
    }

        function SayGoodbye() payable public{
        require(msg.sender == creator);

        emit SayGoodbye(msg.creator);
    }

}