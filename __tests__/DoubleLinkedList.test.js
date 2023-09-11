const { DoubleLinkedList } = require('../src/DoubleLinkedList.js');

const array = Array.from({ length: 10 }, (_, index) => Math.random() * 10);
const list = new DoubleLinkedList();

describe('DoubleLinkedList.js tests', function () {
    test('should equals 0', function () {
        expect(list.size).toBe(0);
    });

    test('should throw bounds error', function () {
        expect(() => list.remove(0)).toThrow(Error);
    });

    test('should equals 0', function () {
        array.forEach((item) => list.insert(list.size, item));

        expect(list.size).toBe(array.length);
    });

    test('each item should equals', function () {
        array.forEach((item) => {
            expect(list.remove(0)).toBe(item);
        });
    });

    test('should throw bounds error', function () {
        expect(() => list.remove(0)).toThrow(Error);
    });
});
