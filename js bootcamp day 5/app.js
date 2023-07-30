// sync and async


// console.log('download requested')
// setTimeout(()=>{
//     console.log('donwnload complete')
// }, 2000)
// console.log('download notification send')


// promises =? i promise i will not execute the next task 
// until the previos one is done!!

// let fetchData = new Promise((resolve, reject)=>{
    
//         setTimeout(() => {
//             reject()
//             console.log('data fetched')
//         }, 3000);
    
// })


// fetchData.then(()=>{
//     console.log('task successful')
// }, ()=>{
//     console.log('failed')
// })



// promise
// setTimeout(() => {
//     console.log('fetching data')
// }, 2000);


// console.log('successful')


// let fetchData = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('fetching done!')
//         reject()
//     }, 2000);
// })


// fetchData.then(()=>{
//     console.log('Successful')
// }, ()=>{
//     console.log('failed')
// })



let apiKey = "http://www.omdbapi.com/?apikey=61e576a4&t="

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let date = document.getElementById('date');
let ratings = document.getElementById('ratings');
let actors = document.getElementById('actors');
let director = document.getElementById('director');
let collection = document.getElementById('collection');
let genre = document.getElementById('genre');
let poster = document.getElementById('poster');
 


function search(){
    let query = document.getElementById('movieSearch').value;
    let api = apiKey+query
    console.log(api)
    fetch(api).then((movieData)=>{
        // console.log(movieData)
        return movieData.json()
    }).then((movie)=>{
        // console.log(movie);
        title.innerText = movie.Title;
        date.innerText = movie.Released;
        desc.innerText = movie.Plot;
        actors.innerText = movie.Actors;
        director.innerText = movie.Director;
        ratings.innerText = movie.imdbRating;
        collection.innerText = movie.BoxOffice;
        genre.innerText = movie.Genre;
        poster.src = movie.Poster
    
    })
}


