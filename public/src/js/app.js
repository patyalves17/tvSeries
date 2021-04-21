inputSearch = document.getElementById('search');
cards = document.getElementById('cards');
// {
//     id: 1,
//     title:"teste 1",
//     image: "src/images/movie1.png"
// }

let series = [];


 clearCards = () => {
    while ( cards.hasChildNodes() ) {
        cards.removeChild( cards.lastChild );
    }
  }

  showDetails= (data) =>{
    console.log("showDetails --> ", data);
  }


  emptyCards = () => {
      let emptyWrapper = document.createElement('div');
      emptyWrapper.className = 'empty';

      let emptyImage =  document.createElement( 'img' );
      emptyImage.src= 'src/images/illustration-empty-state.png';

      emptyWrapper.appendChild( emptyImage );
      cards.appendChild( emptyWrapper );
  }

createCars = (data) =>{
    var cardWrapper = document.createElement( 'a' );
    cardWrapper.className = 'mdl-cell mdl-cell--2-col mdl-cell--12-col-phone card';
    cardWrapper.href=`details.html?id=${data.imdbID}`

    var cardImage = document.createElement( 'img' );
    if(data.Poster !== "N/A"){
        cardImage.src = data.Poster;
    }else{
        cardImage.src = 'src/images/no-image.png';
    }
    

    cardWrapper.appendChild( cardImage );

    // cardWrapper.addEventListener('click', showDetails.bind(null, data));


    componentHandler.upgradeElement( cardWrapper );
    cards.appendChild( cardWrapper );
}


 showCards = () => {
    clearCards();

    if(series && series.length > 0){
        series.forEach( (t, i) => {
            createCars(t);
        })
    } else {
        emptyCards();
    }
    
  
  }

  doSearch = (search) =>{
    fetch( `http://www.omdbapi.com/?apikey=bb33a52&s=${search}&type=series`)
    .then(  (resp)  => resp.json())
    .then(  ( data ) => {
          console.log( 'Sent data', data );
          console.log( 'Sent results', data.Search );
          series =   data.Search ;
          showCards();
        } )
  }
  
const debounce = (func, wait) => {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  inputSearch.addEventListener('keypress', debounce(() => {
    const searchValue =  inputSearch.value.trim()
    if(searchValue.length >0 ){
        doSearch(searchValue);
    }
  }, 800));


showCards();