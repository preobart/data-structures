const { Stack } = require("../src/Stack1.js");

const array = Array.from({ length: 10 }, (_, index) => Math.random() * 10);
const stack = new Stack();

describe("Stack.js tests", function () {
    test("should equals 0", function () {
        expect(stack.size).toBe(0);
    });

    test(`should equals ${array.length}`, function () {
        array.forEach((item) => stack.push(item));

        expect(stack.size).toBe(array.length);
    });

    test(`lasts should equal twice`, function () {
        expect(stack.pop()).toBe(array.pop());
        expect(stack.pop()).toBe(array.pop());
    });
});
