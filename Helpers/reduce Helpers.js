let numbers = [1, 2, 3];
let sum = 0;

sum = numbers.reduce(function (value, number) {
    return value + number
}, 0); // the initial value that will be always passed on to the iterator function
console.log(sum);


let primary_colors = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'green'}
];

colors = primary_colors.reduce(function (accumulator, color) {
    accumulator.push(color.color); // returning in one line fails, because mutations takes place in the accumulator array
    return accumulator
}, []);
console.log(colors);


// Balanced char check by reduce
let string = "((dsf((fsd))sd)";
let list = string.split('');

// Naive way
let check = list.reduce(function (previous, char) {
    console.log('Previous', previous);
    if (previous.length > 0) {
        let last = previous[previous.length - 1];
        if ( last === '(' && char === ')') {
            previous.pop()
        }
        else {
            if (char === '(' || char === ')') {
                previous.push(char);
                return previous
            }
        }
    } else {
        previous.push(char)
    }
    console.log('value', previous);
    return previous
}, []);
console.log(!Boolean(check.length));

// Elegant Way

check = !string.split("").reduce(function (previous, char) {
    if (previous < 0) { return previous }
    if (char === '(') { return ++previous}
    if (char === ')') { return --previous}
    return previous
}, 0);
console.log(check);
