function createStack() 
{// Write your code here...
    var items =[];
     return function push(item){
        itemm =2
        items.push(item);
        return(items);

        
    };

    

}
const stack=createStack();
console.log(stack(10));
console.log(stack(5));

// console.log(stack.x);
console.log(stack.itemm);
// stack.pop();
    // => 5stack.items;// => undefined



