// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Multisig.sol";

contract MultiSigFactory {
    //a factory contract that create multiple clones of multisig.sol
    //a function that create a new multisig
    //an array that holds contract addresses created
    //a function that calls the approve function in multisig.sol
    // a function that calls the withdraw function in multisig.sol

    MultiSig[] multiSigAddresses;
    event newClone(MultiSig indexed, uint256 indexed position);
    event anotherClone(MultiSig indexed, uint256 indexed position);

    function cloneMultiSig(address[] memory _validOwners) external returns(MultiSig NewMS, uint256 _length)
    {
        NewMS = new MultiSig(_validOwners); // This is the only line for factory contract

        multiSigAddresses.push(NewMS);
        _length = multiSigAddresses.length;
        
        emit newClone(NewMS, _length);
        emit anotherClone(NewMS, _length);
    }

    function ClonedAddresses() external view returns (MultiSig[] memory _multisig)
    {
        _multisig = multiSigAddresses;
    }
}