// beh. of javascript

let api = 'http://www.omdbapi.com/?apikey=61e576a4&t='
function searchMovie(){
    let movieName = document.getElementById('movieName');
    let query = api+ movieName.value;
    
    fetch(query).then((data)=>{
        return data.json()
    }).then((data)=>{
        document.getElementById('title').innerText = data.Title;
        document.getElementById('poster').src = data.Poster;
        document.getElementById('desc').innerText = data.Plot;
        document.getElementById('writer').innerText = data.Writer;
        document.getElementById('awards').innerText = data.Awards;
        document.getElementById('date').innerText = data.Released;
        document.getElementById('actors').innerText = data.Actors;
        document.getElementById('directors').innerText = data.Director;
        document.getElementById('collection').innerText = data.BoxOffice;
        document.getElementById('ratings').innerText = data.imdbRating;

    })
}