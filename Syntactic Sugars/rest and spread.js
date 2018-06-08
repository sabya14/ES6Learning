const defualtColors = ['red', 'blue'];
const userFavouriteColors = ['orange', 'yellow'];

// joining to array..
let newArray = defualtColors.concat(userFavouriteColors);

// Using spread ..
// This is more helpful when no of arrays for concatenation is more
newArray = [...defualtColors, ...userFavouriteColors];
console.log(newArray);

// adding other element is easy
newArray  = [ 'yellow', ...defualtColors, ...userFavouriteColors]
console.log(newArray);

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return [ 'milk', ...items];
    }
    return items
}

const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply (a, b) {
        return a * b;
    }
};

console.log(MathLibrary.multiply(2,5));
