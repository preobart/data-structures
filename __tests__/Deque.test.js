const { Deque } = require('../src/Deque.js');

const array = Array.from({ length: 10 }, (_, index) => Math.random() * 10);
const deque = new Deque();

describe('Deque.js tests', function () {
    test('should equals 0', function () {
        expect(deque.size).toBe(0);
    });

    test(`should equals ${array.length}`, function () {
        array.forEach((item) => deque.push(item));

        expect(deque.size).toBe(array.length);
    });

    test(`lasts should equal twice`, function () {
        expect(deque.pop()).toBe(array.pop());
        expect(deque.pop()).toBe(array.pop());
    });

    test(`firsts should equal twice`, function () {
        expect(deque.shift()).toBe(array.shift());
        expect(deque.shift()).toBe(array.shift());
    });
});
