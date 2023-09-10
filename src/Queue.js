class Queue {
    #queue;
    size;

    constructor() {
        this.size = 0;
        this.#queue = {};
    }

    push(item) {
        this.#queue[this.size] = item;
        this.size++;
    }

    shift() {
        if (this.size === 0) {
            return;
        }

        const output = this.#queue[0];

        for (let i = 0; i < this.size - 1; i++) {
            this.#queue[i] = this.#queue[i + 1];
        }

        delete this.#queue[this.size - 1];

        this.size--;

        return output;
    }
}

module.exports.Queue = Queue;