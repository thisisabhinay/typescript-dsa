class BinaryTreeNode {
	public value: any
	public left: BinaryTreeNode
	public right: BinaryTreeNode

	constructor(value: any) {
		this.value = value
		this.left = null
    	this.right = null
	}
}

// Full binary tree class
class FullBinaryTree {
	public root: BinaryTreeNode

	constructor() {
		this.root = null
	}

	insert(value: any) {
		let currentNode: BinaryTreeNode
		const newNode = new BinaryTreeNode(value)

		if (!this.root) {
			this.root = newNode
			return
		}

		currentNode = this.root

		while (true) {
			if (currentNode.left && currentNode.right) {
				currentNode = currentNode.left
			}

			if (!currentNode.left) {
				currentNode.left = newNode
				break
			}

			if (!currentNode.right) {
				currentNode.right = newNode
				break
			}
		}
	}

	print() {
		let level = 0
		let q = [this.root]
		while (q.length) {
			const currentNode = q.shift()
			console.log(`value: ${currentNode.value}`)
			if (currentNode.left)
				q.push(currentNode.left)

			if (currentNode.right)
				q.push(currentNode.right)

		}
	}
}

export { FullBinaryTree, BinaryTreeNode }