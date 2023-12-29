let api = 'http://www.omdbapi.com/?apikey=61e576a4&t='




function searchMovie(){
    let query = document.getElementById('movieName').value;
    let search = api + query;
    fetch(search).then(function(data){
        return data.json()
    }).then(function(data){
        document.getElementById('title').innerText = data.Title;
        document.getElementById('desc').innerText = data.Plot;
        document.getElementById('genre').innerText = data.Genre;
        document.getElementById('actors').innerText = data.Actors;
        document.getElementById('directors').innerText = data.Director;
        document.getElementById('awards').innerText = data.Awards;
        document.getElementById('collection').innerText = data.BoxOffice;
        document.getElementById('ratings').innerText = data.imdbRating;
        document.getElementById('writers').innerText = data.Writer;
        document.getElementById('poster').src = data.Poster;
    })
}