let computers = [
    { name: 'Apple', ram : 4 },
    { name: 'Asus', ram : 16 },
    { name: 'Predator', ram : 8 }
];

// Can computers run program with ram requirements of 8gb or more
// No need of this default values if using every and some instead of for loop.

let allcomputersCanRunProgram = true;
let onlySomeCompurtersCanRunProgram = false;

allcomputersCanRunProgram = computers.every(computer => computer.ram > 8);
console.log(allcomputersCanRunProgram);

onlySomeCompurtersCanRunProgram = computers.some(computer => computer.ram > 8);
console.log(onlySomeCompurtersCanRunProgram);

// More Examples
let names = [
    'Neel',
    'Shubham',
    'Vivek'
];

console.log(names.every( name => name.length >= 4 ));
console.log(names.some( name => name.length > 5 ));


function Field(value) {
    this.value = value
}

Field.prototype.validate = function () {
    return this.value.length > 10;
};

let username = new Field("2cool");
let password = new Field("my_password");
let birthdate = new Field("10/10/2018");

let fields = [username, password, birthdate];

let formIsValid = fields.every(field => field.validate());
if (formIsValid) {
    console.log('Valid')
} else {
    console.log('Invalid')
}