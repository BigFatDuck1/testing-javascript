// A calculator object that contains functions for the basic operations: 
// add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and return the correct calculation.

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

module.exports = {add, subtract, multiply};