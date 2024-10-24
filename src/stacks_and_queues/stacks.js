/**
 * The stack data structure is a LIFO (last in first out) data structure.
 */
class Stack {
	constructor() {
		this.items = [];
	}

	// Add an item to the stack (top of the stack)
	push(item) {
		return this.items.push(item);
	}

	// Remove the top item from the stack
	pop() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		return this.items.pop(); // Removes the last item
	}

	// View the top item of the stack without removing it
	peek() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		return this.items[this.items.length - 1]; // Last item in the array
	}

	// Check if the stack is empty
	isEmpty() {
		return this.items.length === 0;
	}

	// Get the size of the stack
	size() {
		return this.items.length;
	}

	// Clear all items from the stack
	clear() {
		this.items = [];
	}

	// Print the stack items
	print() {
		return this.items;
	}
}

module.exports = { Stack };
