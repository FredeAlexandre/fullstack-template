export const contract_definition = `
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2;
contract Storage {}
`;

export const contract_storage_variables_easy = `
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2;
contract Storage {
  uint256 public publicUint = 1;
  int256 private privateInt = -1;
  bool internal internalBool = true;
  address public constant constantAddress = 0x000000000000000000000000000000000000dEaD;
  uint256 immutable immutableUint;
}
`;

export const contract_storage_variables_medium = `
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2;
contract Storage {
  uint256 public publicUint = 1;
  int256 private privateInt = -1;
  bool internal internalBool = true;
  address public constant constantAddress = 0x000000000000000000000000000000000000dEaD;
  uint256 immutable immutableUint;
  uint256[] public dynamicArray;
  uint256[5] internal fixedArray = [1, 2, 3, 4, 5];
  mapping(address => uint256) public balances;
  mapping(address => mapping(uint256 => bool)) internal nestedMapping;
}
`;
