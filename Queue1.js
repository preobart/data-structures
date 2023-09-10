const DoubleLinkedList = require('./DoubleLinkedList');

class Queue1 {
    #data;

    constructor() {
        this.#data = new DoubleLinkedList();
    }

    get size(){
        return this.#data.size;
    }

    shift() {
        return this.#data.remove(0)
    }

    unshift(item) {
        this.#data.insert(0, item)
    }
}
