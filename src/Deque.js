const { DoubleLinkedList } = require('./DoubleLinkedList.js');

class Deque {
    #data;

    constructor() {
        this.#data = new DoubleLinkedList();
    }

    get size() {
        return this.#data.size;
    }

    push(item) {
        this.#data.insert(this.#data.size, item);
    }

    pop() {
        return this.#data.remove(this.#data.size - 1);
    }

    shift() {
        return this.#data.remove(0);
    }

    unshift(item) {
        this.#data.insert(0, item);
    }
}

module.exports.Deque = Deque;
