// promises

// console.log('start download')
// // this will execute in 2s
// setTimeout(() => {
//     console.log('downloading')
// }, 3000);
// console.log('complete')


let demo = new Promise((resolve, reject)=>{
    console.log('downloading started')
    setTimeout(()=>{
        console.log('downloading...');
        reject()
    },3000)
}).then(()=>{
    console.log('download complete')
})



let api = 'http://www.omdbapi.com/?apikey=61e576a4&t=';
let title = document.getElementById('title');
let year = document.getElementById('year');
let genre = document.getElementById('genre');
let desc = document.getElementById('desc');
let actors = document.getElementById('actors');
let directors = document.getElementById('directors');
let date = document.getElementById('date');
let collection = document.getElementById('collection');
let ratings = document.getElementById('ratings');
let poster = document.getElementById('poster');
let awards = document.getElementById('awards');
let writer = document.getElementById('writer');






function searchMovie(){
    let query = document.getElementById('movieQuery');
    let movieQuery = api+query.value;
    console.log(movieQuery)
    fetch(movieQuery).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        title.innerText = data.Title;
        year.innerText = data.Year;
        date.innerText = data.Released;
        desc.innerText = data.Plot;
        genre.innerText = data.Genre;
        actors.innerText = data.Actors;
        directors.innerText = data.Director;
        awards.innerText = data.Awards;
        collection.innerText = data.BoxOffice;
        writer.innerText = data.Writer;
        ratings.innerText = data.imdbRating;
        poster.src = data.Poster;

    })
}

// fetch is an promise which is used to fetch data 
// from an url
