import React, { useEffect } from 'react'
// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/'
//const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = 'CzgFs866JsEt87jzvQ5K7IgbR7TrLAqR';




export const ItemsPage = ({ Items }) => {

    useEffect(() => {
        const url = `${BASE_URL}current/hardcover-fiction.json?api-key=${API_KEY}`;
        console.log('the url is as follows');
        console.log(url);
        fetch(url)
            .then(function (data) {
                return data.json();
            })
            .then(function (responseJson) {
                console.log(responseJson);
                let books = responseJson.results.books;
                return books;
            })
            .then(function (books) {
                console.log('did we get here');
                console.log(books);
                const bookEl = document.getElementById('books-container');
                bookEl.innerHTML 
                  = `<section> <div class = "flex-container">
                  <div class = "card"> <a href="/itemdetails/${books[0].isbns[0].isbn10}"> <img class="dogimage" src="${books[0].book_image}"> </a> <div class = "container"> <h3 class = "h3-title"> ${books[0].title} </h3>  <h5> ${books[0].author} </h5></div> </div>
                  <div class = "card"> <a href="/itemdetails/${books[1].isbns[0].isbn10}"> <img class="dogimage" src="${books[1].book_image}"> </a> <div class = "container"> <h3 class = "h3-title"> ${books[1].title} </h3> <h5> ${books[1].author} </h5></div> </div>
                  <div class = "card"> <a href="/itemdetails/${books[2].isbns[0].isbn10}"> <img class="dogimage" src="${books[2].book_image}"> </a><div class = "container"> <h3 class = "h3-title"> ${books[2].title} </h3> <h5> ${books[2].author} </h5></div> </div>
                  <div class = "card"> <a href="/itemdetails/${books[3].isbns[0].isbn10}"> <img class="dogimage" src="${books[3].book_image}"> </a><div class = "container"> <h3 class = "h3-title"> ${books[3].title} </h3>  <h5> ${books[3].author} </h5></div></div>
                  <div class = "card"> <a href="/itemdetails/${books[4].isbns[0].isbn10}"> <img class="dogimage" src="${books[4].book_image}"> </a><div class = "container"> <h3 class = "h3-title"> ${books[4].title} </h3> <h5> ${books[4].author} </h5></div></div> 
                  </div> </section>`
            });
        console.log('we got to the items page');
    })
    return (
        <div>
            <h1>Items Page!</h1>
            <div id='books-container'>
                display books here

            </div>

        </div>
    )
}