const DoubleLinkedList = require('./DoubleLinkedList');

class Stack1 {
    #data;

    get size(){
        return this.#data.size;
    }

    constructor() {
        this.#data = new DoubleLinkedList();
    }

    push(item) {
        this.#data.insert(this.#data.size, item)
    }

    pop() {
        return this.#data.remove(this.#data.size-1)
    }
}
