function getMessage() {
    const year = new Date().getFullYear();
    return "The year is " + year;
}
console.log(getMessage());

// Using Template String
function getMessageModified() {
    const year = new Date().getFullYear();
    return `The year is ${year}`; // we can give any valid javascript expression, like year - 1, year * 2
}
console.log(getMessageModified());