"use strict";
// function check given parathesis is balanced or not
function parenthesisChecker(paranthesisArr){
    // create a new stack
    let st= new stack()
    // iterate through each bracket
    for(let i=0;i<paranthesisArr.length;i++){
        // if bracket is opening bracket push it into the stack
        if(paranthesisArr[i]==="(" || paranthesisArr[i]==="["|| paranthesisArr[i]==="{"){
            st.push(paranthesisArr[i])
        }
        else{
            // if it closing brcaket pop the elment from stack 
            // Do reverse of poped elment
            let rev=ReverseOfBracket(paranthesisArr[i]);
            if(rev === st.pop())continue;
            else return false;
            
        }
    }
    if(st.IsEmpty()===true) return true;
    return false;

}
// function for finding closing symbol of openinig bracket 
function ReverseOfBracket(el){
    if(el==")") 
    return "(";
    else if(el=="]") return "[";
    else if(el=="}") return "{";
}
// stack implemetation
class stack {
    constructor(){
        this.items=[];
        this.top=-1;
        
    }
    push(el){
        this.top++
        this.items[this.top]=el;
        

    }
    pop(){
        if(this.top===-1){
            console.log("stack is empty")
            return -1;
        }
        let x= this.items[this.top];
        this.items[this.top]=undefined;
        this.top--
        return x;

    }
    peek(){
        return this.items[this.top]
    }
    IsEmpty(){
        if(this.top===-1){
            console.log("stack is empty");
            return true;
        }
        else{
            return false;
        }
    }

}
let paranthesisArr="{[{]}";
console.log(parenthesisChecker(paranthesisArr));
// function MakeStack(arr){
//     st = new stack();
//     for(i=0;i<arr.length;i++){
//         st.push(arr[i]);
//     }
// }

