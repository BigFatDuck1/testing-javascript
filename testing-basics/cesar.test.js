const cesar = require("./cesar");

test("(HeLLo, 3) should return 'KhOOr'", () => {
    expect(cesar("HeLLo", 3)).toBe('KhOOr');
});

test("caesar('Hello, World!', 3) should return 'Khoor, Zruog!'", () => {
    expect(cesar('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

