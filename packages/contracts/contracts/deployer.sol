// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Auth, Authority } from "solmate/src/auth/Auth.sol";

import { CREATE3 } from "solmate/src/utils/CREATE3.sol";

/// @notice A contract to be able to deploy contracts on behalf of the users with predictable addresses
contract Deployer is Auth {
    constructor(address _owner, Authority _authority) Auth(_owner, _authority) {}

    function deploy(bytes32 salt, bytes memory creationCode)
        requiresAuth
        external
        payable
        returns (address deployed)
    {
        return CREATE3.deploy(salt, creationCode, msg.value);
    }

    function getDeployed(bytes32 salt)
        external
        view
        returns (address deployed)
    {
        return CREATE3.getDeployed(salt);
    }
}