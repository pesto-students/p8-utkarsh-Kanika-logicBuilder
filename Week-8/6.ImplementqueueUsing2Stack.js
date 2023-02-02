'use strict';
// TC - O(n^2)
//SC - O(1)
function printPopedElementFromQueue(input){
    let queue = new Queue();
    for (let i=0;i<input.length;i++){
        if(input[i]===String(1)){
            queue.push(input[i+1]);
            i=i+1;
            
        }
        else if(input[i]===String(2)){
            console.log(queue.pop());
        }
    }
}

//push TC -O(n) SC - 0(1);
//pop TC - o(n) SC - 0(1);
class Queue{
    constructor(){
        this.st1=new stack();
        this.st2=new stack();
    }
    push(el){
        this.st1.push(el)
    }
    pop(){
        if(this.st1.IsEmpty() && this.st2.IsEmpty()) return -1;
        if(this.st2.IsEmpty()){
          while(!this.st1.IsEmpty()){
            let el= this.st1.pop();
            this.st2.push(el);
            
          }
        }
        return this.st2.pop();
    }



    
}


class stack {
    constructor(){
        this.items=[];
        this.top=-1;
        
    }
    push(el){
        this.top++;
        this.items[this.top]=el;
        

    }
    pop(){
        if(this.top===-1){
            //console.log("stack is empty")
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
           // console.log("stack is empty");
            return true;
        }
        else{
            return false;
        }
    }

}

console.log("output is");
printPopedElementFromQueue("122214");
console.log("output is"); 
printPopedElementFromQueue("12132142");
