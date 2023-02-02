'use strict';
//TC - O(n)
//SC - O(n)
function ReverseLinkedList(list){
    let currentNode=list.head;
    let prevNode=null;

    
    while(currentNode!==null){
        let temp=currentNode.next;
        currentNode.next=prevNode;
        prevNode=currentNode;
        currentNode=temp;
        
        
    }
    list.head=prevNode;
    return list;
    

}
class ListNode{
    constructor(val,next){
        this.val= (val===undefined?0:val);
        this.next=(next===undefined?null:next)
    }
   
}
class LinkedList{
    constructor(head){
        this.head=(head===undefined?null:head);
    }
}
function MakeLinkedList(arr){
    let list=new LinkedList();
    let prevNode=null;
    for (let i in arr){
        let node = new ListNode()
        if(i==0){
            let node = new ListNode(arr[i]);
            list.head=node;
            prevNode=node;
        }
        else{
            let node=new ListNode(arr[i]);
            prevNode.next=node;
            prevNode=node;

        }
        
    }

    return list;
    
}


let list = MakeLinkedList([1,2,3,4]);
console.log("Insitial list",list);
ReverseLinkedList(list);
console.log("reverse list",list)