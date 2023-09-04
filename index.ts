import { SinglyLinkedList } from "./linked-list/singly-linked-list"
import { FullBinaryTree, BinaryTreeNode } from "./tree/binary-tree/full-binary-tree"
import { DS } from "./enum"

const tryDS = {
	[DS.SINGLY_LINKED_LIST]:  function() {
		const singlyLinkedList = new SinglyLinkedList()
		
		singlyLinkedList.insertAtHead(19)
		singlyLinkedList.insertAtHead(45)
		singlyLinkedList.insertAtHead(27)
		singlyLinkedList.insertAtHead(81)
		
		singlyLinkedList.print()
		console.log("Size: ", singlyLinkedList.size())
		
		singlyLinkedList.insertAtHead(99)
		singlyLinkedList.insertAtHead(12)
		
		// Printing to see what's added new
		singlyLinkedList.print()
		console.log("Size: ", singlyLinkedList.size())
		
		// Prinitng last node
		console.log("Last Node: ", singlyLinkedList.getLast())
	},

	[DS.FULL_BIINARY_TREE]:  function() {
		const fullBinaryTree = new FullBinaryTree()
		fullBinaryTree.insert(0)
		fullBinaryTree.insert(1)
		fullBinaryTree.insert(2)
		fullBinaryTree.insert(3)
		fullBinaryTree.insert(4)
		fullBinaryTree.insert(5)
		fullBinaryTree.print()
	}
}

tryDS[DS.FULL_BIINARY_TREE]()