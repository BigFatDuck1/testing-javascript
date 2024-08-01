// A reverseString function that takes a string and returns it reversed.

function reverse(string) {
    let array = [...string];
    let reversed = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }

    return reversed.join("");
    
}
module.exports = reverse;