'use strict';
function findNextGreaterElement(arr) {
    let ptr1 = 0;
    let ptr2 = 1
    let result = [];
    if (arr.length <= 1) {
        return -1
    }
    while (ptr1 != arr.length - 1) {
        if (arr[ptr2] > arr[ptr1]) {
            result.push(arr[ptr2]);
            ptr1 = ptr1 + 1;
            ptr2 = ptr1 + 1;
            continue;
        }

        else if (ptr2 === arr.length - 1) {
            result.push(-1);
            ptr1 = ptr1 + 1;
            ptr2 = ptr1 + 1;

        } else{
            ptr2=ptr2+1;
        }
        
    }
    result.push(-1);
    return result;
}
console.log( findNextGreaterElement([6, 8, 0, 1, 3]));//[ 8, -1, 1, 3, -1 ]
console.log(findNextGreaterElement([1,3,2,4]));//[ 3, 4, 4, -1 ]
console.log(findNextGreaterElement([1]));//-1
console.log(findNextGreaterElement([2,1]));//[ -1, -1 ]
console.log(findNextGreaterElement([]));//-1
console.log(findNextGreaterElement([13,1,3,2,4,7,8,0,5,9,12,0]));//[-1,  3, 4, 4,  7, 8,  9, 5, 9, 12,  -1, -1]
