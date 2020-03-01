class Node {
    data: any = null;
    next: any;
    constructor(data: any, next = null) {
        this.data = data;
        this.next = next;
    }
}
export class LinkedList {

    private head: any = null;
    constructor() {
        this.head = null;
    }
    public insertAtBeginning(data: any): any {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    public insertAtEnd(data: any) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    }

    public getAt(index: number) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    public insertAt(data: any, index: number) {
        if (!this.head) {
            let newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        let previous = this.getAt(index - 1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;
        return this.head
    }

    public deleteFirstNode() {
        if (!this.head) {
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }

    public deleteLastNode() {
        if (!this.head) {
            return null;
        }
        if (!this.head.next) {
            return this.head = null;
        }
        let previous = this.head;
        let tail = this.head.next;
        while (tail.next !== null) {
            previous = tail;
            tail = tail.next;
        }
        previous.next = null;
        return this.head;
    }

    public deleteAt(index: number) {
        if (!this.head) {
            this.head = null;
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
        return this.head
    }

}
// let obj = new LinkedList();
// obj.insertAtBeginning(10);
// obj.insertAtEnd(20);
// obj.insertAtEnd(30);
// obj.insertAtEnd(40);
// obj.insertAtEnd(50);
// obj.insertAt(60, 2);
// console.log('return index:', obj.getAt(1))
// console.log(obj)