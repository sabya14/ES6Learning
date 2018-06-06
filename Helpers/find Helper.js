let users = [
    {name: 'Neel'},
    {name: 'Shubham'},
    {name: 'Vivek'}
];

let user;
// Find helper
user = users.find(function (product) {
    return product.name === 'Neel'
});
console.log(user);

// More Complex
function Car(model) {
    this.model = model;
}

let cars = [
    new Car('Ferrari'),
    new Car('BMW'),
    new Car('Mercedes')
];

let car = cars.find(function (car) {
    return car.model === 'BMW'
});
console.log(car);

// Continued
let posts = [
    {id: 2, comment: 'Hey man'},
    {id: 3, comment: 'Good Morning'}
];

let comment = { postId: 2, content: 'Hey, hello' };

function PostForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId
    })
}
console.log(new PostForComment(posts, comment));

//Implemented using arrow functions
function PostForCommentArrow(posts, comment) {
    return posts.find(post => post.id === comment.postId)
}
console.log(new PostForCommentArrow(posts, comment));
