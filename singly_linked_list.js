class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value){
       const newElement = new Node(value);
            
        let current = this.head;
        while(current.next != null)
        {
            current = head.next;
        }
            current.next = newElement;      
    }
}

const head = new Node('kacchi');
const linkedList = new LinkedList(head);

linkedList.add('kabab');
linkedList.add('borhani');
linkedList.add('dim');

console.log(new Node())
console.log(new LinkedList())

console.log(linkedList)
