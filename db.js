const authors = [
    { id: 1, name: "Ion"},
    { id: 2, name: "Brent"},
    { id: 3, name: "Norah"}
];

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorById };