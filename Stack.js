class Stack {
    #stack;
    size;

    constructor() {
        this.size = 0;
        this.#stack = {};
    }

    push(item) {
        this.#stack[this.size] = item;
        this.size++;
    }

    pop() {
        if (this.size === 0) {
            return;
        }

        const output = this.#stack[this.size - 1];

        delete this.#stack[this.size - 1];

        this.size--;

        return output;
    }
}