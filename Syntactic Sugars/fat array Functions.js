let add = (a ,b) => { return a + b };
console.log(add(2,3));

add = (a ,b) => a + b; // implicit return, i.e whenever there is a javascript expression its simply returned
console.log(add(2,3));

// more on arrow functions
let double = a => 2*a; // we can emit parenthesis if there is a single expression
console.log(double(2));

// No Parenthesis
double = () => 2*2;
console.log(double());


// Usage Continued
const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map(member => `${member} is on team ${this.teamName}`) // fat arrow function makes use of lexical this
    }
};
console.log(team.teamSummary());