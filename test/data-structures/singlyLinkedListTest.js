const chai = require("chai");
const testObj = require("../../src/data-structures/snglyLinkedList");

describe("Testing Singly Linked List DS", function() {
  it("should test that a Node is created", function() {
    let result = new testObj.Node("Criss");
    chai.expect(result.value).to.equal("Criss");
  });

  it("should test that a new item is pushed", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push("Criss");
    linkedList.push("David");
    linkedList.push("John");
    chai.expect(linkedList.size).to.equal(3);
  });

  it("should test that pop function removes an element from the end of the list", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push("One");
    linkedList.push("Two");
    linkedList.push("Three");
    linkedList.push("Four");
    linkedList.pop();
    chai.expect(linkedList.tail.value).to.equal("Three");
    chai.expect(linkedList.size).to.equal(3);
  });

  it("should test the shift option", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push("One");
    linkedList.push("Two");
    linkedList.push("Three");
    linkedList.push("Four");
    let result = linkedList.shift();
    chai.expect(linkedList.head.value).to.equal("Two");
    chai.expect(result.value).to.equal("One");
  });

  it("should test that unshift function adds an element at the beginning of the list", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push("One");
    linkedList.push("Two");
    linkedList.push("Three");
    linkedList.unshift("Zero");
    chai.expect(linkedList.head.value).to.equal("Zero");
    chai.expect(linkedList.size).to.equal(4);
  });

  it("should test that get returns element at provided index", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    let result = linkedList.get(3);
    chai.expect(result.value).to.equal(4);
  });

  it("should test that set function correctly updates a value", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push("BONY");
    linkedList.push("Goldman");
    linkedList.push("BOA");
    let result = linkedList.set(1, "Wells Fargo");
    chai.expect(result).to.be.true;
    chai.expect(linkedList.get(1).value).to.equal("Wells Fargo");
  });

  it("should test the insert function and add element at the right place", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push("1");
    linkedList.push("2");
    linkedList.push("3");
    linkedList.push("4");
    linkedList.insert(2, "insert");
    chai.expect(linkedList.size).to.equal(5);
    chai.expect(linkedList.get(2).value).to.equal("insert");
    chai.expect(linkedList.get(2).next.value).to.equal("3");
  });

  it("should test that a node is deleted at a given position", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push("first");
    linkedList.push("second");
    linkedList.push("third");
    linkedList.push("fourth");
    linkedList.remove(2);
    chai.expect(linkedList.size).to.equal(3);
  });

  it("should test that linked list gets reversed", function() {
    let linkedList = new testObj.singlyLinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.reverse();
    let arr = [];
    for (let i = 0; i < linkedList.size; i++) {
      arr.push(linkedList.get(i).value);
    }
    chai.expect(arr).to.eql([3, 2, 1]);
  });
});
