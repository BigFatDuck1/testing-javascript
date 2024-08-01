// A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(string) {
    let first_letter = string[0].toUpperCase();

    let remaining = string.substring(1);

    return first_letter + remaining;
}
module.exports = capitalize;