const capitalize = require("./capitalize");

test("Capitalizes first letter of 'string' and returns 'String'", () => {
  expect(capitalize("string")).toBe("String");  
})