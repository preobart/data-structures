const DoubleLinkedList = require('./DoubleLinkedList');
class Queue1 {
    #data;
    #size;

    constructor() {
        this.#data = new DoubleLinkedList();
        this.#size = 0;
    }

    unshift(item) {
        this.#data.insert(0, item)
        this.#size = this.#data.size
    }

    shift() {
        this.#data.remove(0)
        this.#size = this.#data.size
    }
}
