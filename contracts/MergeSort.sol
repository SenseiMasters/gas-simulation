// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MergeSort {
    function sort(uint[] memory array) public pure returns (uint[] memory) {
        uint n = array.length;
        if (n <= 1) return array;

        uint[] memory tempArray = new uint[](n);
        for (uint size = 1; size < n; size *= 2) {
            for (uint leftStart = 0; leftStart < n; leftStart += 2 * size) {
                uint mid = min(leftStart + size, n);
                uint rightEnd = min(leftStart + 2 * size, n);
                merge(array, tempArray, leftStart, mid, rightEnd);
            }
            (array, tempArray) = (tempArray, array);
        }
        return array;
    }

    function merge(uint[] memory array, uint[] memory tempArray, uint left, uint mid, uint right) internal pure {
        uint i = left;
        uint j = mid;
        uint k = left;

        while (i < mid && j < right) {
            if (array[i] <= array[j]) {
                tempArray[k++] = array[i++];
            } else {
                tempArray[k++] = array[j++];
            }
        }

        while (i < mid) {
            tempArray[k++] = array[i++];
        }
        while (j < right) {
            tempArray[k++] = array[j++];
        }
    }

    function min(uint a, uint b) internal pure returns (uint) {
        return a < b ? a : b;
    }
}
