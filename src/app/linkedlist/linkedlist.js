"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data, next) {
        if (next === void 0) { next = null; }
        this.data = null;
        this.data = data;
        this.next = next;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.head = null;
    }
    LinkedList.prototype.insertAtBeginning = function (data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    };
    LinkedList.prototype.insertAtEnd = function (data) {
        var newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }
        var tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    };
    LinkedList.prototype.getAt = function (index) {
        var counter = 0;
        var node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    };
    LinkedList.prototype.insertAt = function (data, index) {
        if (!this.head) {
            var newNode_1 = new Node(data);
            newNode_1.next = this.head;
            this.head = newNode_1;
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        var previous = this.getAt(index - 1);
        var newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;
        return this.head;
    };
    LinkedList.prototype.deleteFirstNode = function () {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next;
        return this.head;
    };
    LinkedList.prototype.deleteLastNode = function () {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            return this.head = null;
        }
        var previous = this.head;
        var tail = this.head.next;
        while (tail.next !== null) {
            previous = tail;
            tail = tail.next;
        }
        previous.next = null;
        return this.head;
    };
    LinkedList.prototype.deleteAt = function (index) {
        if (!this.head) {
            this.head = null;
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        var previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
        return this.head;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
// let obj = new LinkedList();
// obj.insertAtBeginning(10);
// obj.insertAtEnd(20);
// obj.insertAtEnd(30);
// obj.insertAtEnd(40);
// obj.insertAtEnd(50);
// obj.insertAt(60, 2);
// console.log('return index:', obj.getAt(1))
// console.log(obj)
