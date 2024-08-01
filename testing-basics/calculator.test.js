const calculator = require("./calculator");

test("Test each function", () => {

    //Add
    let add = calculator.add(3,4);
    expect(add).toBe(7);

    //Subtract
    let subtract = calculator.subtract(9,2);
    expect(subtract).toBe(7);

    //Multiply
    let multiply = calculator.multiply(5,6);
    expect(multiply).toBe(30);
})