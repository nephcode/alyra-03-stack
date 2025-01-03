// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

/**
 * @title Storage
 * @dev store in variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */

contract Storage {
    uint256 private number;

    // Constructor payable qui accepte des ETH et initialise 'number'
    constructor(uint256 _number) payable {
        require(msg.value > 0, "ETH requis pour deployer");
        number = _number;
        console.log("Contrat deploye avec %o wei et valeur initiale de number: %o", msg.value, _number);
    }

    /**
     * @dev store in variable
     * @param num value to store
     */
    function store(uint256 num) public {
        console.log("Valeur avant %o", number);
        number = num;
        console.log("Valeur apres %o", number);
    }

    /**
     * @dev retrieve the value
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256) {
        return number;
    }
}