class Deque {
    #size;
    #deque;

    constructor() {
        this.#size = 0;
        this.#deque = {};
    }

    push(item) {
        this.#deque[this.#size] = item;
        this.#size++;
    }

    shift() {
        if (this.#size === 0) {
            return;
        }
        const output = this.#deque[0];

        for (let i = 0; i < this.#size - 1; i++) {
            this.#deque[i] = this.#deque[i + 1];
        }

        delete this.#deque[this.#size - 1];
        this.#size--;

        return output;
    }

    pop() {
        if (this.#size === 0) {
            return;
        }
        const output = this.#deque[this.#size - 1];

        delete this.#deque[this.#size - 1];
        this.#size--;

        return output;
    }

    unshift(item) {
        for (let i = this.#size; i > 0; i--) {
            this.#deque[i] = this.#deque[i - 1];
        }

        this.#deque[0] = item;
        this.#size++;
    }

    get size() {
        return this.#size;
    }
}

module.exports.Deque = Deque;
