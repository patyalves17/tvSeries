inputSearch = document.getElementById('search');
cards = document.getElementById('cards');


let series = [
    {
        id: 1,
        title:"teste 1",
        image: "src/images/movie1.png"
    },
    {
        id: 2,
        title:"teste 2",
        image: "src/images/movie2.png"
    },
    {
        id: 3,
        title:"teste 3",
        image: "src/images/movie3.png"
    },
    {
        id: 4,
        title:"teste 4",
        image: "src/images/movie1.png"
    },
    {
        id: 5,
        title:"teste 5",
        image: "src/images/movie2.png"
    },
    {
        id: 6,
        title:"teste 6",
        image: "src/images/movie3.png"
    },{
        id: 7,
        title:"teste 7",
        image: "src/images/movie1.png"
    },
    {
        id: 8,
        title:"teste 8",
        image: "src/images/movie2.png"
    },
    {
        id: 9,
        title:"teste 9",
        image: "src/images/movie3.png"
    },
    {
        id: 10,
        title:"teste 10",
        image: "src/images/movie1.png"
    },
    {
        id: 11,
        title:"teste 11",
        image: "src/images/movie2.png"
    },
    {
        id: 12,
        title:"teste 12",
        image: "src/images/movie3.png"
    }
];

 clearCards = () => {
    while ( cards.hasChildNodes() ) {
        cards.removeChild( cards.lastChild );
    }
  }

  showDetails= (data) =>{
    console.log("showDetails --> ", data);
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
    series.forEach( (t, i) => {
        createCars(t);
    })
  
  }

  doSearch = (search) =>{
    fetch( `http://www.omdbapi.com/?apikey=XXXXX&s=${search}&type=series`)
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
        // showCards();
    }
  }, 800));