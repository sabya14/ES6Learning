class Comment {
    constructor(content, children) {
        this.content = content,
        this.children = children
    }

    *[Symbol.iterator] () {
        yield this.content;
        for ( let child of this.children) {
            yield* child
        }
    }
}

const Children = [
    new Comment('good comment ', []),
    new Comment('lets see', []),
    new Comment('nah', []),
];

const Tree = new Comment('Root Comment', Children);
const comments = [];
for ( let values of Tree) {
    comments.push(values)
}
console.log(comments);