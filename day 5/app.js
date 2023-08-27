// promises

// console.log('task 1')
// // task 2 will now execute in 3 sec
// setTimeout(() => {
//     console.log('task 2')
// }, 3000);
// console.log('task 3')

let title = document.getElementById('title');
let collection = document.getElementById('collection');
let genre = document.getElementById('genre');
let desc = document.getElementById('desc');
let date = document.getElementById('date');
let director = document.getElementById('director');
let actors = document.getElementById('actors');
let awards = document.getElementById('awards');
let ratings = document.getElementById('ratings');
let poster = document.getElementById('poster');
let writer = document.getElementById('writer');

let api = 'http://www.omdbapi.com/?apikey=61e576a4&t='


function searchMovie(){
let movieName = document.getElementById('movieName')
let url = api+movieName.value;  
fetch(url).then((data)=>{
    // console.log(data)
    return data.json()
}).then((data)=>{
    title.innerText = data.Title;
    date.innerText = data.Released;
    director.innerText = data.Director;
    actors.innerText = data.Actors;
    desc.innerText = data.Plot;
    genre.innerText = data.Genre;
    awards.innerText = data.Awards;
    writer.innerText = data.Writer;
    ratings.innerText = data.imdbRating;
    title.innerText = data.Title;
    collection.innerText = data.BoxOffice;
    poster.src = data.Poster;
})

}






