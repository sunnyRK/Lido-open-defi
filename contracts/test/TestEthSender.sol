// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.7.0;

contract TestEthSender {
    function sendEth(address payable to) external payable {
        to.transfer(msg.value);
    }
}
