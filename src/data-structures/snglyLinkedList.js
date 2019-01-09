class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = null;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = current.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.size) return null;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (node === null) return false;
    node.value = value;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.size) return false;
    if (index === this.size - 1) this.push(val);
    if (index === 0) this.unshift(val);
    let prevNode = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.size++;
  }

  remove(index) {
    if (index < 0 || index > this.size) return false;
    if (index === this.size - 1) this.pop();
    if (index === 0) this.unshift();
    let prevNode = this.get(index - 1);
    let nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    nodeToRemove.next = null;
    this.size--;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.size; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

module.exports = {
  Node: Node,
  singlyLinkedList: singlyLinkedList
};
