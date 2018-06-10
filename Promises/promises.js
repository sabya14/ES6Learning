promise = new Promise((resolve, reject) => {
    resolve('Passed')
});
promise.then(() => {
    console.log('Done')
}).catch(() => {
    console.log('Rejected')
});

let url = 'https://jsonplaceholder/typicode.com/posts/';
let response = fetch(url);
console.log(response);
