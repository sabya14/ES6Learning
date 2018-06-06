let numbers = [1, 2, 3];
let doubledNumbers = [];

// restrain from mutating in same arrays
numbers.forEach(function (number) {
    doubledNumbers.push(number*2)
});
console.log(doubledNumbers);

// map helper functions
let doubled = numbers.map(function (number) {
    return number * 2
});
console.log(doubled);

let cars = [
    { model: 'Black', price: 'Cheap'},
    { model: 'Red', price: 'Expensive'},
];

let prices = cars.map(function (car) {
    return car.price
});

