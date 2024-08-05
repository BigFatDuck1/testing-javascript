const analyze = require("./analyze");

// let object = {
//     average: 4,
//     min: 1,
//     max: 8,
//     length: 6
// }

test(`analyze([1,8,3,4,2,6]) should return {average: 4,
    min: 1,
    max: 8,
    length: 6}`, () => {
    let result = analyze([1,8,3,4,2,6]);
    console.log(result);

    expect(result.average).toBe(4);
    expect(result.min).toBe(1);
    expect(result.max).toBe(8);
    expect(result["length"]).toBe(6);
})