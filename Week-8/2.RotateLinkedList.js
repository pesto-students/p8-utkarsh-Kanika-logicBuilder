'use strict';
//TC O(n)
//SC 0(1)
function RotateLinkedList(list,k){
    if(list=== null || k===0 || list.head.next==null) return
    let tail=list.head;
    let len=0
    let count=0;
    // want the adrress of last node so we will stop the loop at tail.next
    while(tail.next!==null){
        tail=tail.next;
        len=len+1;
    }
    len++;

    tail.next=list.head
    let newHead=list.head
    while(count < (k%len)-1){
        newHead=newHead.next
        count=count+1

    }

    list.head=newHead.next;
    newHead.next=null
    return list.head

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
console.log("Initial list \n",list);
console.log("Rotate List \n", RotateLinkedList(list,3));
console.log(list);
let list1=MakeLinkedList([2, 4, 7, 8, 9]);
console.log("intial list \n",list1)
console.log("rotated list \n",RotateLinkedList(list1,3));

