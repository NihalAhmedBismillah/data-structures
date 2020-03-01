/**
 * Stack class
 */

export class Stack {

    private items: Array<any> = [];
    private firstIndex = 0;
    constructor() {
        this.items = [];
        return this;
    }
    /**
     * 
     */
    private isEmpty(): boolean {
        return this.items.length === 0;
    }
/**
 * Push new element into stack
 * @param element 
 */
    public push<T>(element: T): T {
        if (this.isEmpty()) {
            this.items[this.firstIndex] = element;
            return element;
        } else {
            this.items[this.items.length] = element;
            return element;
        }
    }
    /**
     * Return top most element in the stack and removes it from the stack 
     */
    public pop<T>(): T {
        if (this.isEmpty()) throw ('Stack underflow');
        const element = this.items[this.items.length - 1] as T;
        this.items.length = this.items.length - 1;
        return element;
    }

    /**
     * Return queue elements in string
     */
    public printStack(): string {
        let list = '';
        this.items.forEach((element) => list = list + JSON.stringify(element) + ' ');
        return list;
    }

    /**
     * Return the top most element from the stack but does'nt delete it. 
     */
    peek<T>():T{
        if(this.isEmpty()) throw('Stack underflow')
        const element =  this.items[this.items.length-1] as T;
        return element;
    }
}

// const obj = new Stack();
// obj.push<number>(333);
// obj.push<number>(555);
// obj.push<Object>({ name: 'Nihal Ahmed' });
// console.log(obj.pop<object>());
// console.log(obj.peek<number>());
// console.log(obj.printStack())

// Performs Postfix Evaluation on a given exp 
