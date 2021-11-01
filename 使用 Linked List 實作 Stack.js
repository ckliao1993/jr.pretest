/* 使用 Linked List 實作 Stack 實作需包含以下方法。 push() : 添加新元素。
pop()：移除元素並返回被移除的元素。size()：返回所有元素數量。
const myStack = new Stack() 
myStack.push(1) 
myStack.push(2) 
myStack.push(3) 
myStack.pop() // 3
myStack.size() // 2
 */

//Ans
class Stack {
	constructor(){
		this.first = null;
		this.size = 0;
	}
	push(element){
		let node = new Node(element);
		if(!this.first){
			this.first = node;
		} else {
			let temp = this.first;
			this.first = node;
			this.first.next = temp;
		}
		this.size ++;
	}
	pop(){
		if(!this.first){
			return null;
		}
		let temp = this.first;
		this.first = this.first.next;
		this.size -- ;
		return temp.val;
	}
	size(){
		return this.size;
	}
}

class Node {
	constructor(val){
		this.val = val;
		this.next = null;
	}
}