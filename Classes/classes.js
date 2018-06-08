function Car (options) {
    this.title = options.title;
}

// We define methods to a constructor function like this.
Car.prototype.drive = function () {
    return 'vroom'
};


function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

const toyota = new Toyota({ color: 'Nano', title: 'Daily'});
console.log(toyota.drive());
console.log(toyota);

// Refactoring with class

class NewCar {
    constructor ({ title, color}) {
        this.title = title
    }
    drive () {
        return 'vro' + this.title;
    }
}

class NewToyota extends NewCar{

    constructor (options) {
        super (options);
        this.color = options.color
    }
    honk () {
        return 'vroomasd';
    }
}

const newcar = new NewToyota({ title: 'New', color: 'red'});
console.log(newcar, newcar.honk(), newcar.drive());