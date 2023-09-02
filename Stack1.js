const DoubleLinkedList = require('./DoubleLinkedList');
class Stack1 {
    #data;
    #size;

    constructor() {
        this.#data = new DoubleLinkedList();
        this.#size = 0;
    }

    push(item) {
        this.#data.insert(this.#data.size, item)
        this.#size = this.#data.size
    }

    pop() {
        this.#data.remove(this.#data.size-1)
        this.#size = this.#data.size
    }
}
