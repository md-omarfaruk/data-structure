class Queue {
    constructor() {
        this.structure = []
    }
    enqueue(name){
        this.structure.push(name)
    }
    dequeue(){
        if(this.structure.length){
            return this.structure.shift()
        }
    }
}

const chequeReceivedFrom = new Queue();
    chequeReceivedFrom.enqueue('Md. Jashim');
    chequeReceivedFrom.enqueue('Md. Hassan');
    chequeReceivedFrom.enqueue('Md. Hossain');
    chequeReceivedFrom.enqueue('Md. Habib');
    chequeReceivedFrom.enqueue('Md. Omar Faruk');

console.log(chequeReceivedFrom.structure);

const paymentDoneTo = chequeReceivedFrom.dequeue();

console.log(paymentDoneTo);

console.log(chequeReceivedFrom.structure);









