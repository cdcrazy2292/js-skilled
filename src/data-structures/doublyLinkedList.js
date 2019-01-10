class Node {
  constructor(val) {
    this.next = null;
    this.previous = null;
    this.value = val;
  }
}

class DoublyLinkedList {
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
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    let nodeToRemove = this.tail;
    if (this.size === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = nodeToRemove.previous;
      this.tail.next = null;
      nodeToRemove.previous = null;
    }
    this.size--;
    return nodeToRemove;
  }

  shift() {
    if (!this.head) return undefined;
    let nodeToRemove = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let next = this.head.next;
      this.head = next;
      next.previous = null;
      nodeToRemove.next = null;
    }

    this.size--;
    return nodeToRemove;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.size) return null;
    let count, current;
    if (index <= this.size / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.size - 1;
      current = this.tail;
      while (count !== index) {
        current = current.previous;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    let nodeToUpdate = this.get(index);
    if (!nodeToUpdate) return false;
    nodeToUpdate.value = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index >= this.size) return false;
    if (index === 0) this.unshift(val);
    if (index === this.size - 1) this.push(val);
    let nodeToInsert = new Node(val);
    let prevNode = this.get(index - 1);
    let current = this.get(index);
    prevNode.next = nodeToInsert;
    current.previous = nodeToInsert;
    nodeToInsert.previous = prevNode;
    nodeToInsert.next = current;
    this.size++;
    return true;
  }
}

module.exports = {
  Node: Node,
  DoublyLinkedList: DoublyLinkedList
};
