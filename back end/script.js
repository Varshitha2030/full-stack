let author = {
    name: "J.K. Rowling",
    age: 58,
    books: [
        {
            title: "Harry Potter and the Sorcerer's Stone",
            year: 1997,
            genre: "Fantasy"
        },
        {
            title: "Harry Potter and the Chamber of Secrets",
            year: 1998,
            genre: "Fantasy"
        },
        {
            title: "Harry Potter and the Prisoner of Azkaban",
            year: 1999,
            genre: "Fantasy"
        }
    ]
};
let authorJSON = JSON.stringify(author);
console.log("JSON String:", authorJSON);

let booksJsonString = '{"name":"George Orwell","age":46,"books":[{"title":"1984","year":1949,"genre":"Dystopian"},{"title":"Animal Farm","year":1945,"genre":"Political Satire"},{"title":"Homage to Catalonia","year":1938,"genre":"Memoir"}]}';
let parsedAuthor = JSON.parse(booksJsonString);
console.log("Parsed Object:", parsedAuthor);