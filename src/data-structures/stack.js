class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let nodeToRemove = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return nodeToRemove;
  }
}

module.exports = {
  Node: Node,
  Stack: Stack
};
