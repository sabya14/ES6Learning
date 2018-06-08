let expense = {
    type: 'business',
    amount: '$45 USD'
};

// let type = expense.type;
// let amount = expense.amount;

// refactoring to es6

// const { type } = expense;
// const { amount } = expense;

const { type, amount } = expense;
console.log(type, amount);

// More examples

let savedFiled = {
    extension: '.jpg',
    name: 'repost',
    size: 14040
};

// function fileSummary(file) {
//     return `The file ${file.name}${file.extension} is of size ${file.size}`;
// }

// Refactored using destructuring
function fileSummary( { name, extension, size } ) {
    return `The file ${name}${extension} is of size ${size}`;
}

console.log(fileSummary(savedFiled));

// More Complex destructuring

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [ name, name1] = companies;
console.log( name, name1);

const [ name2, ...rest ] = companies;
console.log(name2, ...rest);



