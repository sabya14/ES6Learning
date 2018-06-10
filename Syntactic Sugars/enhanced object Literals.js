function createBookShop(invertory) {
    return {
        inventory: invertory,
        inventoryValue: function () {
            return this.inventory.reduce((total, value) => total + value.price, 0)
        },
        priceForTitle: function(title){
            return this.inventory.find(book => book.title === title.price)
        }
    }
}

function createBookShopModified(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, value) => total + value.price, 0)
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title.price)
        }
    }
}
const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'C++', price: 100 }
];

let bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());

bookShop = createBookShopModified(inventory);
console.log(bookShop.inventoryValue());