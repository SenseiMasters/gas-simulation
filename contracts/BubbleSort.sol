// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract BubbleSort {
    function sort(uint[] memory data) public pure returns (uint[] memory) {
        uint len = uint(data.length);
        uint i;
        uint j;
        for (i = 0; i < len - 1; i++) {
            for (j = 0; j < len - 1; j++) {
                if (data[j] > data[j + 1]) {
                    uint t = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = t;
                }
            }
        }
        return data;
    }
}
