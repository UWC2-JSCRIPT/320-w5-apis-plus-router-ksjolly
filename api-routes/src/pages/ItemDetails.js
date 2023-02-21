import React, { useEffect } from 'react'
import { useParams } from 'react-router'

// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/books/v3/reviews.json?'
const API_KEY = 'CzgFs866JsEt87jzvQ5K7IgbR7TrLAqR';

export const ItemDetails = () => {
    const params = useParams();

    useEffect(() => {
        const url = `${BASE_URL}isbn=${params?.id}&api-key=${API_KEY}`;
        console.log('the url is as follows');
        console.log(url);
        fetch(url)
            .then(function (data) {
                return data.json();
            })
            .then(function (responseJson) {
                console.log(responseJson);
                // for empty returns
                let noresults = {"book_title": "Try a different book- no info available",
                                "summary": "No summary available",
                                "byline": "no byline"};
                let results = responseJson.results[0] ? responseJson.results[0]  : noresults;
                console.log('what are our results');
                console.log(results);
                return results;
      
            })
            .then(function (results) {
                console.log('did we get here');
                console.log(results);
                const bookEl = document.getElementById('book-container');
                bookEl.innerHTML 
                  = `<section> <div class = "flex-container">
                  <div class = "card"></a> <div class = "container"> <h3 class = "h3-title"> ${results.book_title} </h3>  <h5> ${results.byline} </h5> <p class = "cardp"> ${results.summary} </p> </div> </div>
                  </div> </section>`
            })
        console.log('we got here');
    })
   
    return (
        <div>
           <h2>This is the Item Detail page</h2> 
            <p>The id is {params?.id}</p>
            <div id='book-container'>
                display books here
            </div>
        </div>
    )
}