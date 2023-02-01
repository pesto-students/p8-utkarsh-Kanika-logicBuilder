
'use strict'
//I approach - using Kadane algorithm 
// kadane algo - is iterative dynamic algo 
// We calcluate the max sub sum array at one location by looking previous point max sub array location
//1. Define two-variable currSum which stores maximum sum ending here and maxSum which stores maximum sum so far.
// 2.Initialize currSum with 0 and maxSum with -Infinity.
// 3. iterate over the array and add the value of the current element to currSum and check
// 4.If currSum is greater than maxSum, update maxSum equals to currSum.
// 5.If currSum is less than zero, make currSum equal to zero.
// 6.Finally, return the value of maxSum.
// space complexity is o(1)
// time complexity os o(n)
function maxContagiousSubArray(arr){

    let currSum=0;
    let maxSum=-Infinity

    for(let i=0;i<arr.length;i++){
        currSum=currSum+arr[i];
        if(currSum>maxSum){
            maxSum=currSum;
        }
        if(currSum<0){
            currSum=0;
        }

    }
    return maxSum;
}
console.log( "max sub array sum for [1, 2, 3, 4, -10] is:",maxContagiousSubArray([1, 2, 3, 4, -10]));
console.log("max sub array sum for [-2, 1, -3, 4, -1, 2, 1, -5, 4] is:",maxContagiousSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4] ));
console.log("max sub array sum for [4,-1,2,1] is:",maxContagiousSubArray([4,-1,2,1]));

// 2nd approach 
// calculating contagious sub array sum for all the possible sub array
//Time complexity = O(N^2)
//space complexity = O(1)
function maxContagiousSubArray2(arr){
    let maxSum=0
    for(let i=0;i<arr.length;i++){
        let currSum=0;
        for (let j=i;j<arr.length;j++){
            currSum=currSum+arr[j];
            if(currSum>maxSum){
                maxSum=currSum
            }
        }
        
    }
    return maxSum;
}
console.log("Approach 2-max sub array sum for [1, 2, 3, 4, -10] is:",maxContagiousSubArray2([1, 2, 3, 4, -10]));
console.log("Approach 2-max sub array sum for [-2, 1, -3, 4, -1, 2, 1, -5, 4] is:",maxContagiousSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4] ));
console.log("Approach 2-max sub array sum for [4,-1,2,1] is:",maxContagiousSubArray2([4,-1,2,1]));