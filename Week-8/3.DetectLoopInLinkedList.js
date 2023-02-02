function DetecLoopInLinkedList(list){
    let fast=list.head;
    let slow=list.head;
    while(slow!==null && fast!==null){
        fast=fast.next.next;
        if(slow===fast){
            return true
        }
        slow=slow.next;
    }
    return false;
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
console.log("is list cycle:",DetecLoopInLinkedList(list));
let list2 =MakeLinkedList([1,2,3,4]);
//make list2 circular
let lastElOFList2=list2.head;
while(lastElOFList2.next===null){
    lastElOFList2=lastElOFList2.next;
}
// adding head in the last elmenent 
// so last elemet of list2 is attached with first element of list2
// hence list is circuler
lastElOFList2.next=list2.head;
console.log("is list cycle:",DetecLoopInLinkedList(list2));










