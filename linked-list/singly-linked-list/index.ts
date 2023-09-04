class SinglyListNode {
	data: any
	next: SinglyListNode
	
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class SinglyLinkedList {
	private head: SinglyListNode

	constructor() {
		this.head = null
	}

	private traverseList(nodeCallback: Function) {
		
		let node = this.head
		while (node.next) {
			if(nodeCallback) nodeCallback(node)
			node = node.next
		}

		// For last node since it's next is null the corresponding callback
		// will not run in while so running it here
		if(!node.next && nodeCallback) nodeCallback(node)
	}

	print() {
		let result = "HEAD-"
		this.traverseList((currentNode) => {
			result+= `-[${currentNode.data}]-`
		})

		result += "-NULL"

		console.log(result)
	}

	size() {
		let count = 0
		this.traverseList(() => count += 1)
		return count
	}

	clear() {
		this.head = null
	}

	getFirst() {
		return this.head
	}

	getLast() {
		let lastNode = null
		this.traverseList((currentNode) => {
			if (!currentNode.next) lastNode = currentNode
		})

		return lastNode
	}

	insertAtHead(data) {
		const newNode = new SinglyListNode(data)
		newNode.next = this.head 
		this.head = newNode
		
	}
}

export { SinglyListNode, SinglyLinkedList}