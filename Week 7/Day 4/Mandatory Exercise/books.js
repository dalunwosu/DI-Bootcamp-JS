const allBooks = {
  book1: {
    Title: "Harry Potter and the Half-Blood Prince",
    Author: "J.K. Rowling",
    Image:
      "https://media.harrypotterfanzone.com/half-blood-prince-us-childrens-edition.jpg",
    alreadyRead: true,
  },
  book2: {
    Title: "The Lord of the Rings",
    Author: "J.R.R. Tolkien",
    Image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
    alreadyRead: false,
  },
};

let table = document.createElement("table");
table.innerHTML = `
<style>
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }

</style>
<table>
  <thead>
    <tr>
    <th colspan ="3">My Book List</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  <td style="color: ${allBooks.book1.alreadyRead ? "red" : "inherit"}">${
  allBooks.book1.Title
} written by ${allBooks.book1.Author} </td>
  <td>
  <img src = "${allBooks.book1.Image}" width = "100px">
  </td>
  <td style="color: ${
    allBooks.book1.alreadyRead ? "red" : "inherit"
  }">Already Read: ${allBooks.book1.alreadyRead}</td>
  </tr>
  <tr>
  <td style="color: ${allBooks.book2.alreadyRead ? "red" : "inherit"}">${
  allBooks.book2.Title
} written by ${allBooks.book2.Author} </td>
  <td>
  <img src = "${allBooks.book2.Image}" width = "100px">
  </td>
  <td style="color: ${
    allBooks.book2.alreadyRead ? "red" : "inherit"
  }">Already Read: ${allBooks.book2.alreadyRead}</td>
  </tr>
  </tbody>
</table>
`;
let bookList = document.getElementsByClassName("listBooks")[0];
bookList.appendChild(table);
let color = document.body;
