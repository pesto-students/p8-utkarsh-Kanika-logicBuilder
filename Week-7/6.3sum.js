'use strict';
// Sort the given array.
// Loop over the array and fix the first element of the possible triplet, arr[i].
// Then fix two pointers, one at I + 1 and the other at n – 1. And look at the sum, 
// If the sum is smaller than the sum we need to get to, we increase the first pointer.
// Else, If the sum is bigger, Decrease the end pointer to reduce the sum.
// Update the closest sum found so far.
// SC - O(1)
// TC -O(n^2)
function ThreeSumClosest(arr,target){
    arr.sort((a,b)=>a-b);
    let closestSum=Infinity
    for(let i=0;i<arr.length-2;i++)
    {
        let fixed=arr[i];
        let pointerLeft=i+1;
        let pointerRight=arr.length-1;
       
        while(pointerLeft<pointerRight){
            let sum = fixed+arr[pointerLeft]+arr[pointerRight];
            if(Math.abs(sum-target) < Math.abs(closestSum-target) )closestSum=sum;
            if(sum<target)
            {
                pointerLeft++;
            }
            else {
                pointerRight--;
            }

            

            
        }

        
    }
    return closestSum;
    
    


}

let arr=[-4,-1,1,2];
console.log(ThreeSumClosest( arr,1));
let arr1 =[1, 2, 3, 4, -5]
console.log(ThreeSumClosest(arr1,10));