const DoubleLinkedList = require('./DoubleLinkedList');
class Deque1 {
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
    shift() {
        this.#data.remove(0)
        this.#size = this.#data.size
    }

    unshift(item) {
        this.#data.insert(0, item)
        this.#size = this.#data.size
    }
}

