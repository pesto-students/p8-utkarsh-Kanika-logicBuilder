'use strict';
// 1 . Intialize a Map 
// 2 . map keys will be elment of array  and map value will be frequency of that element in array 
//3. Check if given num = 0 and any value in map is 2 return 1
//4 if n equal to zero return 0
//5 . iterate through array 
// 5.1 check wether array each elemet + n exist in map keys if yes return 1
//5. Return 0
function pairwithGivenDifference(arr,n){
    let map = new Map();
    for (let  i in arr){
        if(map.has(arr[i]))
        map.set(arr[i],map.get(arr[i])+1);
        else
        map.set(arr[i],1);
        if(n==0 && map.get(arr[i])>1)
        return 1;


    }
    if(n==0)
    return 0;
    for(let i in arr){
        if(map.has(arr[i]+n))
            return 1;
        
    }
    return 0;
    
}
console.log(pairwithGivenDifference([1, 8, 30, 40, 100],-60));
console.log(pairwithGivenDifference([1, 8, 30, 40, 100],60));
console.log(pairwithGivenDifference( [5, 10, 10, 2, 50, 80],0));
