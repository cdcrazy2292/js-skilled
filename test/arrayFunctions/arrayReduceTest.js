const expect = require("chai").expect;
const array = require("../../src/arrayFunctions/arrayReduce");

describe("array.reduce() functionality", () => {
  it("should check that we get all the sum of all the elements in the array", () => {
    const testArr = [0, 1, 2, 3, 4];
    const sum = 10;
    expect(array.sumAllElementsInArray(testArr)).to.eql(sum);
  });

  it("should check that fn adds every elem in array to an initial value of 20", () => {
    const testArr = [0, 1, 2, 3, 4];
    const sum = 30;
    expect(array.sumAllElemsTo(testArr)).to.eql(sum);
  });

  it("should check that fn returns a flattened array", () => {
    const testArr = [[0, 1], [2, 3], [4, 5]];
    const flatArr = [0, 1, 2, 3, 4, 5];
    expect(array.flattenArr(testArr)).to.eql(flatArr);
  });

  it("should check that fn returns the number of instances in an array", () => {
    const testArr = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
    const count = { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 };
    expect(array.countElsInArr(testArr)).to.eql(count);
  });

  it("should group an array/obj by property", () => {
    const testArr = [
      { name: "Alice", age: 21 },
      { name: "Max", age: 20 },
      { name: "Jane", age: 20 }
    ];
    const expectedResult = {
      20: [{ name: "Max", age: 20 }, { name: "Jane", age: 20 }],
      21: [{ name: "Alice", age: 21 }]
    };
    expect(array.groupBy(testArr, "age")).to.eql(expectedResult);
  });

  it("should check that we get a list of all the books that each person has read", () => {
    let testArr = [
      {
        name: "Anna",
        books: ["Bible", "Harry Potter"],
        age: 21
      },
      {
        name: "Bob",
        books: ["War and peace", "Romeo and Juliet"],
        age: 26
      },
      {
        name: "Alice",
        books: ["The Lord of the Rings", "The Shining"],
        age: 18
      }
    ];
    const allbooks = [
      "Alphabet",
      "Bible",
      "Harry Potter",
      "War and peace",
      "Romeo and Juliet",
      "The Lord of the Rings",
      "The Shining"
    ];
    expect(array.getAllBooks(testArr)).to.eql(allbooks);
  });

  it("should check that fn removes duplicates in array", () => {
    const testArr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
    const expectedResult = [1, 2, 3, 4, 5];
    expect(array.removeDuplicates(testArr)).to.eql(expectedResult);
  });
});
