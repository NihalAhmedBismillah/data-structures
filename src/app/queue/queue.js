"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Queue class
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
        this.firstIndex = 0;
        this.items = [];
        return this;
    }
    /**
     * Add new element into queue
     * @param element
     */
    Queue.prototype.add = function (element) {
        if (!element)
            return;
        if (this.isEmpty()) {
            this.items[this.firstIndex] = element;
            return element;
        }
        var unshift = [];
        unshift[this.firstIndex] = element;
        this.items.forEach(function (item, index) { return unshift[index + 1] = item; });
        this.items = unshift;
        return element;
    };
    /**
     * Helper method to check for queue is empty
     */
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    /**
     * Return queue elements in string
     */
    Queue.prototype.printQueue = function () {
        var list = '';
        this.items.forEach(function (element) { return list = list + JSON.stringify(element) + ' '; });
        return list;
    };
    /**
     * Remove last element from queue
     */
    Queue.prototype.remove = function () {
        if (this.isEmpty())
            throw ('No elements in Queue');
        var length = this.items.length - 1;
        this.items.length = length;
    };
    /**
     *Get the queue size
     */
    Queue.prototype.size = function () {
        return this.items.length;
    };
    /**
     * Get the first element from queue
     */
    Queue.prototype.first = function () {
        if (this.isEmpty())
            throw ('No elements in Queue');
        return this.items[this.firstIndex];
    };
    /**
     * Get the last element from queue
     */
    Queue.prototype.last = function () {
        if (this.isEmpty())
            throw ('No elements in Queue');
        return this.items[this.items.length - 1];
    };
    return Queue;
}());
exports.Queue = Queue;
//const obj = new Queue();
// obj.add({name});
// obj.add(2)
// obj.add(3)
// obj.add(4)
// obj.add(5)
// console.log(obj.printQueue())
//console.log(obj.remove());
// console.log(obj.printQueue())
// console.log(obj.size())
// console.log(obj.first())
// console.log(obj.last())
// class Person {
//     name: string;
//     address: string
//     constructor() {
//         this.name = 'Nihal Ahmed';
//         this.address = 'Pune'
//     }
// }
// obj.add<number>(10)
// obj.add<string>('20');
// obj.add<Person>(new Person());
// obj.add(40);
// obj.add(50);
// obj.add(60);
// console.log(obj.printQueue())
// let data = obj.first<Person>();
// console.log(obj.first())
