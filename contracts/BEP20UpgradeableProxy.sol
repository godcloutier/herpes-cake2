//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;
import "../node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

contract BEP20UpgradeableProxy is TransparentUpgradeableProxy {

    constructor(address logic, address admin, bytes memory data) TransparentUpgradeableProxy(logic, admin, data) public {

    }

}