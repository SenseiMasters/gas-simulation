// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract QuickSort {
    function sort(uint[] memory arr) public pure returns (uint[] memory) {
        uint[] memory stack = new uint[](arr.length);
        uint top = 0;

        stack[top++] = 0;
        stack[top++] = arr.length - 1;

        while (top > 0) {
            uint end = stack[--top];
            uint start = stack[--top];

            uint pivotIndex = partition(arr, start, end);

            if (pivotIndex > start + 1) {
                stack[top++] = start;
                stack[top++] = pivotIndex - 1;
            }

            if (pivotIndex + 1 < end) {
                stack[top++] = pivotIndex + 1;
                stack[top++] = end;
            }
        }
        return arr;
    }

    function partition(
        uint[] memory arr,
        uint left,
        uint right
    ) internal pure returns (uint) {
        uint pivot = arr[right];
        uint i = left;

        for (uint j = left; j < right; j++) {
            if (arr[j] < pivot) {
                (arr[i], arr[j]) = (arr[j], arr[i]);
                i++;
            }
        }

        (arr[i], arr[right]) = (arr[right], arr[i]);
        return i;
    }
}
