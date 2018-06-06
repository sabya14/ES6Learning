let colors = ['red', 'blue', 'green'];

// Classic For Loops
// Prone to typos, more pieces of code
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

// with array helper
colors.forEach(function (color) {
    console.log(color)
});

//create an array of numbers
let numbers = [1,2,3,4,5];

// create variable to hold the sum
let sum = 0;

// Loop over the array, incrementing the sum variable
// inner function may be anonymous or may not
numbers.forEach(function (number) {
    sum += number
});

// print tne sum variable
console.log(sum);

// re initialize sum
sum = 0;

// Separate function
function adder(number) {
    sum += number;
}

// TODO can we pass multiple parameters to the forEach function ???
// without anonymous functions
numbers.forEach(adder);

// print sum
console.log(sum);