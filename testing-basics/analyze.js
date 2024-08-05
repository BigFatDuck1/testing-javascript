
let analyze = (array) => {
    let object = {};

    let sum = array.reduce((accumulator, current_value) => accumulator + current_value);

    object["average"] = sum / array.length;

    object.min = Math.min(...array);
    object.max = Math.max(...array);
    object.length = array.length;


    return object;
}   
module.exports = analyze;

let sample = analyze([1,8,3,4,2,6]);
// console.log(sample);
