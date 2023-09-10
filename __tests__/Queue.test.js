const { Queue } = require("../src/Queue1.js");

const array = Array.from({ length: 10 }, (_, index) => Math.random() * 10);
const queue = new Queue();

describe("Queue.js tests", function () {
    test("should equals 0", function () {
        expect(queue.size).toBe(0);
    });

    test(`should equals ${array.length}`, function () {
        array.forEach((item) => queue.unshift(item));

        expect(queue.size).toBe(array.length);
    });

    test(`lasts should equal twice`, function () {
        expect(queue.shift()).toBe(array.pop());
        expect(queue.shift()).toBe(array.pop());
    });
});
