const stringLength = (string) => {
    const length = string.length;
    if (length === 0) {
        throw new Error("String must be at least 1 character long");
      }
    
      if (length > 10) {
        throw new Error("String cannot be longer than 10 characters");
      }
    
      return length;
}

const capitalize = (string) => {
    const firstChar = string.charAt(0).toUpperCase();
    const restString = string.slice(1);

    return firstChar + restString;
}


const reverseString = (string) => {
    return string.split('').reverse().join('');
  };

  class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      return a / b;
    }
  }
  
  module.exports = {
    stringLength,
    reverseString,
    capitalize,
    Calculator
  };