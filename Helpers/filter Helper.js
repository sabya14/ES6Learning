let products = [
    {name: 'monitor', type: 'Computer'},
    {name: 'mobile', type: 'Phones'},
    {name: 'mouse', type: 'Computer'},
    {name: 'cases', type: 'Phones'}
];

// classic forEach implementation
let filterProducts = [];
products.forEach(function (product) {
    if (product.type === 'Phones') {
        filterProducts.push(product)
    }
});
console.log(filterProducts);

// Using Filter Helper
filterProducts = products.filter(function (product) {
    if (product.type === 'Phones') {  // this is not correct because statement itself returns an truthy value
        return product
    }
});
console.log(filterProducts);

// Using Filter Helper, better way
filterProducts = products.filter(function (product) {
    return product.type === 'Phones';
});
console.log(filterProducts);

// More Complex Example
products = [
    {name: 'monitor', type: 'Computer', 'quantity': 32, 'price': 30},
    {name: 'mobile', type: 'Phones', 'quantity': 32, 'price': 30},
    {name: 'mouse', type: 'Computer', 'quantity': 30, 'price': 20},
    {name: 'cases', type: 'Phones', 'quantity': 40, 'price': 50}
];

// Phones Price less than 50 and quantity more that 30
filterProducts = products.filter(function (product) {
    return product.type === 'Phones'
        && product.quantity > 30
        && product.price < 50;
});
console.log(filterProducts);

// More Complex Example

let post = {id: 2, comment: 'Hey man'};
let comments = [
    {postId: 2, content: 'Hello buddy'},
    {postId: 5, content: 'I am fine'},
    {postId: 6, content: 'Looking good'}
];

function commnetForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    })
}
console.log(commnetForPost(post, comments));