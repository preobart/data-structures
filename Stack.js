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

const stack = new Stack();
const array = [];

for (let i = 0; i < 10; i++) {
    const num = {
        x: Math.random()
    }

    stack.push(num);
    array.push(num);
}

console.log(array);

for (let i = 0; i < 11; i++) {
    console.log(stack.pop(), array.pop());
}