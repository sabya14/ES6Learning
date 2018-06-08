const companies = [
    { name: 'Google', location: 'Mountain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Fransisco' }
];

const [ {location} ] = companies;
console.log(location);

const [ { name } ] = companies;
console.log(name);

const Google = {
    locations1: ['Mountain View', 'New York', 'London']
};

const { locations1: [ location1 ] } = Google;

console.log(location1);

function signup ( {name, location, ...rest} ) {
    console.log( name, location, rest)
}

const user = {
    name: 'neel',
    location: 'maithon',
    email: 'abc@abc.com',
    dob: '14/04/1994'
};

signup(user);

const points = [
    [4, 5],
    [5, 6],
    [6, 3]
];

newArray = points.map( ([x, y]) => {
    return { x, y }
});
console.log(newArray);