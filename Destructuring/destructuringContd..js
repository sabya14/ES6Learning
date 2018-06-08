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
