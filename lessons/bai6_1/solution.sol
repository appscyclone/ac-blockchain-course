// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        // Mint 1,000,000 token cho deployer
        // ERC20 mặc định có 18 decimals, nên nhân với 10^18
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }
}
