
import { Stack } from "./../../app/stack/stack";

describe('Test for stack ', () => {
    beforeAll(async (done) => {
        // TODO: some operation before test started
        done();
    });

    test('Scenario: Push element at fist position', async (done) => {
        const stack = new Stack();
        stack.push(200);
        expect(stack.peek()).toBe(200)
        done();
    });
    test('Scenario: Push elements and pop element', async (done) => {
        const stack = new Stack();
        stack.push<number>(333);
        stack.push<number>(555);
        expect(stack.pop()).toBe(555);
        expect(stack.printStack()).toBe('333 ');
        done();
    });

    test('Scenario: check stack is empty', async (done) => {
        try {
            const stack = new Stack();
            stack.peek();
            done();
        } catch (error) {
            expect(error).toEqual('Stack underflow');
            done();
        }
    });
});


