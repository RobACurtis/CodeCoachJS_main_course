const { LinkedList } = require('./linked_list');

describe('linked list', () => {
	it('can add nodes to the list', () => {
		const ll = new LinkedList(4);

		ll.addNode(3);
		ll.addNode(2);
		ll.addNode(1);

		expect(ll).toEqual({
			head: {
				next: {
					next: {
						next: {
							next: null,
							node: 1,
						},
						node: 2,
					},
					node: 3,
				},
				node: 4,
			},
		});
	});

	it('can add remove nodes from a list', () => {
		const ll = new LinkedList(4);

		ll.addNode(3);
		ll.addNode(2);
		ll.addNode(1);

		ll.removeNode(3);

		expect(ll).toEqual({
			head: {
				next: {
					next: {
						next: null,
						node: 1,
					},
					node: 2,
				},
				node: 4,
			},
		});
	});
});
