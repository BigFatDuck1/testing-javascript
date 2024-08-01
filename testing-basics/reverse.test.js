const reverse = require("./reverse");

test("Reverses 'Desserts' to 'stresseD'", () => {
    expect(reverse("Desserts")).toBe('stresseD');
})