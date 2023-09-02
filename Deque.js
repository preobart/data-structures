class Deque {
    size;
    #deque;

    constructor() {
        this.size = 0;
        this.#deque = {};
    }

    push(item) {
        this.#deque[this.size] = item;
        this.size++;
    }

    shift() {
        if (this.size === 0) {
            return;
        }
        const output = this.#deque[0];

        for (let i = 0; i < this.size - 1; i++) {
            this.#deque[i] = this.#deque[i + 1];
        }

        delete this.#deque[this.size - 1]
        this.size--;

        return output;
    }

    pop() {
        if (this.size === 0) {
            return;
        }
        const output = this.#deque[this.size - 1];

        delete this.#deque[this.size - 1]
        this.size--;

        return output;
    }

    unshift(item) {
        for (let i = this.size; i > 0; i--) {
            this.#deque[i] = this.#deque[i - 1];
        }

        this.#deque[0] = item
        this.size++
    }
}

const deque = new Deque();
deque.unshift(1);
deque.unshift(5);
deque.unshift(7);

const size = deque.size

for (let i = 0; i < size; i++) {
    console.log(deque.shift())
}


//[1]
//[1, 5]
//[1, 5, 7]

//7
//5
//1

