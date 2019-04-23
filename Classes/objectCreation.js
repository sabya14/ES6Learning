let dog = {
    sound: 'woof',
    talk: function () {
        console.log('Entering');
        console.log(this.sound);
    }
};

dog.talk();
// Assigning function to a variable, because it is a functional programming.It has higher order functions support.
let talkFunction = dog.talk;
talkFunction();
let boundFunction = talkFunction.bind(dog);
boundFunction();

// // Practical example
// let button = document.getElementById("myNiceButton");
// button.addEventListener(
//     'click',
//     dog.talk.bind(dog)
// );

let talk = function () {
    console.log(this.sound)
};

let person = {
    sound: 'Make some sound'
};
talk.bind(person)();

let person1 = {
    speak: talk,
    sound: 'Make some sound'
};
person1.speak();