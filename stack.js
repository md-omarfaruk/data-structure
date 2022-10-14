class Stack {
    constructor() {
        this.structure = []
    }
    add(name) {
        this.structure.push(name)
    }
    remove() {
        if (this.structure.length) {
            return this.structure.pop()
        }
    }
}

const cashInFrom = new Stack();
cashInFrom.add('Md. Jashim');
cashInFrom.add('Md. Hassan');
cashInFrom.add('Md. Hossain');
cashInFrom.add('Md. Habib');
cashInFrom.add('Md. Omar Faruk');

console.log(cashInFrom.structure)

const cashOutFrom = cashInFrom.remove();

console.log(cashOutFrom)
console.log(cashInFrom.structure)
