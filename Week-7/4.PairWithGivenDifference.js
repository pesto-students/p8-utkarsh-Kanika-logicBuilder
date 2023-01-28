'use strict'
'use strict';
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
