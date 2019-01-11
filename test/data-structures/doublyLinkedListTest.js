const chai = require("chai");
const testObj = require("../../src/data-structures/doublyLinkedList");

describe("Testing doubly Linked Lists", function() {
  it("should test that a node is created", function() {
    let node = new testObj.Node("Criss");
    chai.expect(node.value).to.equal("Criss");
  });

  it("should test that a new node is pushed correctly to the list", function() {
    let dll = new testObj.DoublyLinkedList();

    dll.push("first");
    dll.push("second");
    chai.expect(dll.size).to.equal(2);
    chai.expect(dll.head.value).to.equal("first");
    chai.expect(dll.tail.value).to.equal("second");
  });

  it("should test that pop removes an item correctly", function() {
    let dll = new testObj.DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    let removed = dll.pop();
    chai.expect(dll.size).to.equal(2);
    chai.expect(removed.value).to.equal(3);
    dll.pop();
    dll.pop();
    chai.expect(dll.size).to.equal(0);
    chai.expect(dll.head).to.be.null;
    chai.expect(dll.tail).to.be.null;
    chai.expect(dll.pop()).to.be.undefined;
  });

  it("should test that a node is shifted correctly", function() {
    let dll = new testObj.DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    let removed = dll.shift();
    chai.expect(removed.value).to.equal(1);
    chai.expect(dll.size).to.equal(2);
    chai.expect(dll.head.value).to.equal(2);
    dll.shift();
    dll.shift();
    chai.expect(dll.head).to.be.null;
    chai.expect(dll.tail).to.be.null;
    chai.expect(dll.size).to.equal(0);
    chai.expect(dll.shift()).to.be.undefined;
  });

  it("should test that a node is unshifted or added to the beginning of the list", function() {
    let dll = new testObj.DoublyLinkedList();
    dll.push(2);
    dll.push(3);
    dll.unshift(1);
    chai.expect(dll.size).to.equal(3);
    chai.expect(dll.head.next.value).to.equal(2);
    chai.expect(dll.head.value).to.equal(1);
    chai.expect(dll.tail.value).to.equal(3);
    dll.pop();
    dll.pop();
    dll.pop();
    dll.unshift("new");
    chai.expect(dll.head.value).to.equal("new");
    chai.expect(dll.tail.value).to.equal("new");
    chai.expect(dll.head.next).to.be.null;
  });

  it("should test that get returns the desired element", function() {
    let dll = new testObj.DoublyLinkedList();
    dll.push(1);
    chai.expect(dll.get(0).value).to.equal(1);
    chai.expect(dll.get(3)).to.be.null;
    chai.expect(dll.get(-1)).to.be.null;
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    chai.expect(dll.get(1).value).to.equal(2);
    chai.expect(dll.get(4).value).to.equal(5);
    dll.push(6);
    dll.push(7);
    dll.push(8);
    dll.push(9);
    dll.push(10);
    chai.expect(dll.get(8).value).to.equal(9);
    chai.expect(dll.get(5).value).to.equal(6);
  });

  it("should test that set correctly updates the Node value", function() {
    let dll = new testObj.DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    dll.push(4);
    let change = dll.set(2, "new");
    chai.expect(change).to.be.true;
    chai.expect(dll.get(2).value).to.equal("new");
  });

  it("should test that insert correctly adds a Node at a specific location", function() {
    let dll = new testObj.DoublyLinkedList();
    dll.push(1);
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    let insertStatus = dll.insert(2, "yikes");
    chai.expect(insertStatus).to.be.true;
    chai.expect(dll.get(2).value).to.equal("yikes");
    chai.expect(dll.get(2).previous.value).to.equal(2);
    chai.expect(dll.get(2).next.value).to.equal(3);
  });

  it("should test that an element is removed correctly at the desired location", function() {
    let dll = new testObj.DoublyLinkedList();
    dll.push(0);
    chai.expect(dll.remove(-1)).to.be.undefined;
    chai.expect(dll.remove(3)).to.be.undefined;
    chai.expect(dll.remove(0).value).to.equal(0);
    dll.push(0);
    dll.push(1);
    dll.push(2);
    dll.push(3);
    dll.push(4);
    dll.push(5);
    chai.expect(dll.remove(5).value).to.equal(5);
    chai.expect(dll.remove(2).value).to.equal(2);
    chai.expect(dll.size).to.equal(4);
    dll.print();
  });
});
