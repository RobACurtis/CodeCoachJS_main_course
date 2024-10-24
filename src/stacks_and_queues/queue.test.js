const { Queue } = require('./queue');

describe('Queue', () => {
	it('should enqueue an item', () => {
		const queue = new Queue();
		queue.enqueue(1);
		expect(queue.items).toEqual([1]);
	});

	it('should dequeue an item', () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);

		expect(queue.dequeue()).toBe(1);
		expect(queue.items).toEqual([2]);
	});

	it('should return the front item', () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);

		expect(queue.front()).toBe(1);
		expect(queue.items).toEqual([1, 2]);
	});

	it('should return true if the queue is empty', () => {
		const queue = new Queue();

		expect(queue.isEmpty()).toBe(true);
	});

	it('should return the length of the queue', () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.dequeue(1);

		expect(queue.size()).toEqual(1);
	});
});
