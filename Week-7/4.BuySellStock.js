// we solved this with help of two pointer approach
// intialize two pointer - leftPointer  with zero and rightpointer with one
// we move left pointer to right pointer only when price from of right pointer is less than left 
// we move right pointer by one in evry iteration
// time complexity = O(n)
//space complexity = O(1)
function buySellStock(prices){
    let maxProfit=0;
    let leftPointer=0;
    let rightPointer=1;
    while(rightPointer< prices.length){
        if(prices[leftPointer]<prices[rightPointer]){
            profit=prices[rightPointer]-prices[leftPointer];
            if(profit>maxProfit)
            maxProfit=profit
        }
        else{
            leftPointer=rightPointer;
        }
        rightPointer=rightPointer+1;
    }
    return maxProfit;
}

console.log(buySellStock([7,1,5,3,6,4]));
console.log(buySellStock([1,2,3,1,7,9,8,3,6,13]));