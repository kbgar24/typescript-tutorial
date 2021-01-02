
const json = '{"x": 10, "y": 20}';

const coordinates: {x: number, y: number} = JSON.parse(json)

console.log(coordinates)

// 2) When we declare variable on noe line and initialize it later
let words = ['red', 'green', 'blue'];

let foundWord = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green'){
        foundWord = true;
    }
}

//  3 Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}