
var url = new URL(window.location.href);
var imdbID = url.searchParams.get("id");
console.log(imdbID);

time = document.getElementById('time');
title = document.getElementById('title');
plot = document.getElementById('plot');

cast = document.getElementById('cast');
genre = document.getElementById('genre');
director = document.getElementById('director');

poster = document.getElementById('poster');

rateImdb = document.getElementById('rate-imdb');
rateValueImdb = document.getElementById('rate-value-imdb');

rateTv= document.getElementById('rate-tv');
rateValueTv= document.getElementById('rate-value-tv');

let serie = null;

updateDetaisls = () => {
  time.innerHTML = `${serie.Runtime} - ${serie.Year}`;
  title.innerHTML = serie.Title;
  rateValueImdb.innerHTML = `${serie.imdbRating}/10`;
  rateValueTv.innerHTML = `${(10*(serie.imdbRating/100)*100).toFixed(0)} %`;
  plot.innerHTML=serie.Plot;

  if(serie.Poster !== "N/A"){
    poster.src = serie.Poster;
  }else{
    poster.src = 'src/images/no-image.png';
}

  actorsArray = serie.Actors.split(',');
  genreArray = serie.Genre.split(',');
  directorArray = serie.Director.split(',');

  actorsArray.forEach(item => {
    let actorsli = document.createElement('li');
    actorsli.textContent = item;
    cast.appendChild(actorsli);
  });


  genreArray.forEach(item => {
    let genreli = document.createElement('li');
    genreli.textContent = item;
    genre.appendChild(genreli);
  });


  directorArray.forEach(item => {
    let directorli = document.createElement('li');
    directorli.textContent = item;
    director.appendChild(directorli);
  });

  

  // let actorsList = document.createElement('ul');



}

fetch( `http://www.omdbapi.com/?apikey=bb33a52&i=${imdbID}&type=series`)
    .then(  (resp)  => resp.json())
    .then(  ( data ) => {
          console.log( 'Sent data', data );
        //   console.log( 'Sent results', data.Search );
        serie =   data ;
        updateDetaisls();
        } )