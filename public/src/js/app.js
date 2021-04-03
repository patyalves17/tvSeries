inputSearch = document.getElementById('search');
cards = document.getElementById('cards');


let series = [
    {
        title:"teste 1",
        image: "src/images/movie1.png"
    },
    {
        title:"teste 2",
        image: "src/images/movie2.png"
    },
    {
        title:"teste 3",
        image: "src/images/movie3.png"
    },
    {
        title:"teste 4",
        image: "src/images/movie1.png"
    },
    {
        title:"teste 5",
        image: "src/images/movie2.png"
    },
    {
        title:"teste 6",
        image: "src/images/movie3.png"
    },{
        title:"teste 7",
        image: "src/images/movie1.png"
    },
    {
        title:"teste 8",
        image: "src/images/movie2.png"
    },
    {
        title:"teste 9",
        image: "src/images/movie3.png"
    },
    {
        title:"teste 10",
        image: "src/images/movie1.png"
    },
    {
        title:"teste 11",
        image: "src/images/movie2.png"
    },
    {
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
    var cardWrapper = document.createElement( 'div' );
    cardWrapper.className = 'mdl-cell mdl-cell--2-col mdl-cell--12-col-phone card';

    var cardImage = document.createElement( 'img' );
    cardImage.src = data.image;

    cardWrapper.appendChild( cardImage );

    cardWrapper.addEventListener('click', showDetails.bind(null, data));

    componentHandler.upgradeElement( cardWrapper );
    cards.appendChild( cardWrapper );
}

 showCards = () => {
    clearCards();
    series.forEach( (t, i) => {
        createCars(t);
    })
  
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
    if((inputSearch.value.trim()).length >0 ){
        console.log("do search", inputSearch.value.trim());
        showCards();
    }
  }, 800));