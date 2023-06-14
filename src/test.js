const string = require("./index.js");
const Calculator = require("./index.js").Calculator;

test("length of the word is 5", () => {
  expect(string.stringLength("zuheb")).toBe(5);
});

test("stringLength throws an error for an empty string", () => {
  expect(() => {
    string.stringLength("");
  }).toThrow("String must be at least 1 character long");
});

test("stringLength throws an error for a string longer than 10 characters", () => {
  expect(() => {
    string.stringLength("This string is too long. So it will not work");
  }).toThrow("String cannot be longer than 10 characters");
});

test("Reverse word", () => {
  expect(string.reverseString("zuheb")).toBe("behuz");
});

test('Capitalize string', () => {
    expect(string.capitalize('zuheb')).toBe('Zuheb');
  });

describe("Calculator numbers", () => {
  test("Addition", () => {
    expect(Calculator.add(9, 6)).toBe(15);
  });

  test("Subtract", () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
  });

  test("Multiply", () => {
    expect(Calculator.multiply(7, 8)).toBe(56);
  });

  test("Divide", () => {
    expect(Calculator.divide(12, 4)).toBe(3);
  });
});
