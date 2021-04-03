
var url = new URL(window.location.href);
var imdbID = url.searchParams.get("id");
console.log(imdbID);

let serie = null;


fetch( `http://www.omdbapi.com/?apikey=XXXXX&i=${imdbID}&type=series`)
    .then(  (resp)  => resp.json())
    .then(  ( data ) => {
          console.log( 'Sent data', data );
        //   console.log( 'Sent results', data.Search );
        serie =   data ;
        } )