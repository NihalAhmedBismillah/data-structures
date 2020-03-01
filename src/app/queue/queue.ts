
/**
 * Queue class
 */
export class Queue {

    private items: Array<any> = [];
    private firstIndex = 0;
    constructor() {
        this.items = [];
        return this;
    }
    /**
     * Add new element into queue
     * @param element 
     */
    public add<T>(element: T): T {

        if (!element) return;
        if (this.isEmpty()) {
            this.items[this.firstIndex] = element;
            return element;
        }
        let unshift = [];
        unshift[this.firstIndex] = element;
        this.items.forEach((item, index: number) => unshift[index + 1] = item);
        this.items = unshift;
        return element;
    }
    /**
     * Helper method to check for queue is empty
     */
    private isEmpty(): boolean {
        return this.items.length === 0;
    }
    /**
     * Return queue elements in string
     */
    public printQueue(): string {
        let list = '';
        this.items.forEach((element) => list = list + JSON.stringify(element) + ' ');
        return list;
    }
    /**
     * Remove last element from queue
     */
    public remove(): void {
        if (this.isEmpty()) throw ('No elements in Queue');
        let length = this.items.length - 1;
        this.items.length = length;
    }
    /**
     *Get the queue size
     */
    public size(): number {
        return this.items.length;
    }
    /**
     * Get the first element from queue
     */
    public first<T>(): T {
        if (this.isEmpty()) throw ('No elements in Queue');
        return this.items[this.firstIndex] as T;
    }
    /**
     * Get the last element from queue
     */
    public last<T>(): T {
        if (this.isEmpty()) throw ('No elements in Queue');
        return this.items[this.items.length - 1];
    }
}

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