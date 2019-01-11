let chai = require("chai");
let testObj = require("../../src/data-structures/stack");

describe("Testing Stack functionality", function() {
  it("should test that a Node is created", function() {
    let node = new testObj.Node(1);
    chai.expect(node.value).to.equal(1);
  });

  it("should test that a new wlement is pushed correctly", function() {
    let stack = new testObj.Stack();
    chai.expect(stack.push("elm")).to.equal(1);
  });
  it("should test that an element is popped from the stack", function() {
    let stack = new testObj.Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    let popped = stack.pop();
    chai.expect(popped.value).to.equal(3);
    chai.expect(stack.size).to.equal(2);
  });
});
