// Basic of generators
function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
    const stuffFromStore = yield 'cash';
    const clothes = yield 'bought clothes';

    // go back to home
    return [stuffFromStore, clothes]
}

const gen = shopping();
console.log(gen.next()); // leaving our home
// walked into the store
// walking up down the aisles;
// purchase out stuff
console.log(gen.next('groceries')); // leaving the store with groceries
console.log(gen.next('clothes'));


function* colors() {
    yield 'red';
    yield 'blue';
}

const mycolors = [];

for (let color of colors()) {
    mycolors.push(color)
}
console.log(mycolors);


const testingTeam = {
    lead: 'Amanda',
    tester: 'Mad Max',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeams = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.department;
        yield* this.testingTeam;
    }
};

// function* TeamIterator(team) {
//     yield team.lead;
//     yield team.manager;
//     yield team.department;
//     //  // yield * testingTeamGenerator;
// }


const names = [];
for (let name of engineeringTeams) {
    names.push(name);
}
console.log(names);