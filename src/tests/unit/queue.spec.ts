
import { Queue } from "./../../app/queue/queue";

describe('Test for queue ', () => {
    beforeAll(async (done) => {
        // TODO: some operation before test started
        done();
    });

    test('Scenario: add element at fist position', async (done) => {
        const queue = new Queue();
        const data = new Object({ name: 'new test', address: 'pune' });
        const result = queue.add(data);
        console.log('data: ', result['name'])
        expect(queue.size()).toEqual(1);
        done();
    });
    test('Scenario: get first element from queue', async (done) => {
        const queue = new Queue();
        queue.add<number>(10);
        queue.add<number>(20);
        queue.add<number>(30);
        expect(queue.size()).toEqual(3);
        expect(queue.first()).toEqual(30);
        done();
    });
    test('Scenario: get last element from queue', async (done) => {
        const queue = new Queue();
        queue.add<number>(10);
        queue.add<number>(20);
        queue.add<number>(30);
        expect(queue.size()).toEqual(3);
        expect(queue.last()).toEqual(10);
        done();
    });

    test('Scenario: remove element from queue', async (done) => {
        const queue = new Queue();
        queue.add<number>(10);
        queue.add<number>(20);
        queue.add<number>(30);
        expect(queue.size()).toEqual(3);
        queue.remove();
        expect(queue.size()).toEqual(2);
        done();
    });
});


