"use strict";
/**
 * Stack class
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
        this.firstIndex = 0;
        this.items = [];
        return this;
    }
    /**
     *
     */
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    /**
     * Push new element into stack
     * @param element
     */
    Stack.prototype.push = function (element) {
        if (this.isEmpty()) {
            this.items[this.firstIndex] = element;
            return element;
        }
        else {
            this.items[this.items.length] = element;
            return element;
        }
    };
    /**
     * Return top most element in the stack and removes it from the stack
     */
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            throw ('Stack underflow');
        var element = this.items[this.items.length - 1];
        this.items.length = this.items.length - 1;
        return element;
    };
    /**
     * Return queue elements in string
     */
    Stack.prototype.printStack = function () {
        var list = '';
        this.items.forEach(function (element) { return list = list + JSON.stringify(element) + ' '; });
        return list;
    };
    /**
     * Return the top most element from the stack but does'nt delete it.
     */
    Stack.prototype.peek = function () {
        if (this.isEmpty())
            throw ('Stack underflow');
        var element = this.items[this.items.length - 1];
        return element;
    };
    return Stack;
}());
exports.Stack = Stack;
// const obj = new Stack();
// obj.push<number>(333);
// obj.push<number>(555);
// obj.push<Object>({ name: 'Nihal Ahmed' });
// console.log(obj.pop<object>());
// console.log(obj.peek<number>());
// console.log(obj.printStack())
// Performs Postfix Evaluation on a given exp 
