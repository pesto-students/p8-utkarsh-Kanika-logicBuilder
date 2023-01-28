'use strict'

//1 . Have 3 countres count0 (for counting no of zero)  ,count0 (for counting no of one),count0 (for counting no of two)\
//2. Travesrse through array - if element is 0 count the increase of count0 by 1 , if elemet is 1 count1 increase by 1
// if element is 2 count2 is increased by 1
//3. Again traverse the array replace first count0 elmebt with 0 , than Count1 elemet by 1 and at end count2 element by 2
function sortArrayOf012(arr){
    let count1=0,count2=0,count0=0;
    for (let i in arr){
        if(arr[i]===1)
        count1=count1+1;
        if(arr[i]==2)
         count2=count2+1;
        if(arr[i]==0)
        count0=count0+1;
                
    }
    let i=0;
    while(count1>0 || count2>0 || count0>0){
        if(count0>0){
            arr[i]=0;
            i++;
            count0=count0-1;
        }
        else if(count1>0){
            arr[i]=1;
            i++;
            count1=count1-1;
        }
        else if(count2>0){
            arr[i]=2;
            i++;
            count2=count2-1;
        }
    }

}
let arr=[1,1,0,0,2,0,1,2,0,0,1,1,0,0];
console.log("before sort arr values:",arr)
sortArrayOf012(arr);
console.log(" after sort arr values:",arr);
let arr2=[1,1,0,0]
console.log("before sort arr2 values:",arr2)
sortArrayOf012(arr);
console.log(" after sort arr2 values:",arr2);