//Functions:
//String.fromCharCode() returns letter from the given code
//String.charCodeAt() returns character code (UTF-16) from letter

//Small letter 'a-z' is 97 to 122
//Capital letter 'A-Z' is 65 to 90

function cesar(string, shift) {
    if (shift <= 0) {
        return "Error, shift cannot be 0 or negative";
    }

    let new_string = [];

    for (i = 0; i < string.length; i++) {
        let charCode = string[i].charCodeAt();
        
        if (charCode >= 97 && charCode <= charCode <= 122 || charCode >= 65 && charCode <= 90) {
            if (charCode == 90) { //It is Z, shift back to A
                charCode = 64;
            }
            else if (charCode == 122) {
                charCode = 96;
            }

            charCode += shift;
            if (charCode > 122) {
                charCode = 96 + (charCode - 122);
            }
            else if (charCode > 90 && charCode < 97) {
                charCode = 64 + (charCode - 90);
            }
            
            new_string.push(String.fromCharCode(charCode));
        }
        else {
            new_string.push(string[i]);
        }
    }

    return new_string.join("");
}
module.exports = cesar;

let result = cesar("Hello", 3);
console.log(result);

let result2 = cesar("Hello, world!", 3);
console.log(result2);