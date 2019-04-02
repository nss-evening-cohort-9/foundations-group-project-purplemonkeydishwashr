//Global Javascript

const printToDom = (divId, textToPrint) => {
    const selectDiv= document.getElementById(divId);
    selectDiv.innerHTML =textToPrint;
}

const submitEmail = (e) => {
    e.preventDefault();
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
};
const submitButton = 
document.getElementById('submitButton')




//Index - Top 3 Beers Loops 
allBeers = [
    {
        headline:'Best Seller',
        name:'MoJo JoJo Brew',
        imageUrl:'https://github.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/blob/master/img/1beer.png?raw=true',
        description:'Beer and energy drink combined. You will be unstoppable.',
        color: 'light',
    },
    {
        headline:'Lightweights Welcome',
        name:'The Curious George',
        imageUrl:'https://github.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/blob/master/img/2beer.png?raw=true',
        description:'In case you were curious, this is our non-alcoholic beer.',
        color: 'medium',
    },
    {
        headline:'The Champ Is Here',
        name:'HaramBAE',
        imageUrl:'https://github.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/blob/master/img/3beer.png?raw=true',
        description:'This beer will probably kill you. 99.9% alcohol. Beware.',
        color: 'dark',
    },
]
const topThree = () => {
    let domString = '';
allBeers.forEach((beer) => {
    domString += `<div class="card mt-1 mb-2">`
    domString += `<h5 class="card-header ${beer.color}">${beer.headline}</h5>`
    domString += `<div class="card-body">`
    domString += `<h5 class="card-title">${beer.name}</h5>`
    domString += `<a href="./html/availBeers.html"><img src="${beer.imageUrl}" class="card-img-top" alt="..."></a>`
    domString += `<p class="card-text">${beer.description}</p>`
    domString += `</div>`
    domString += `</div>`
});
printToDom('topThreeDiv',domString);
}

//AvailBeers
const beers = [
    {
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278679-7ecb1800-52dd-11e9-94d1-99960ee6e9d1.png",
        name: "HaramBAE",
        description: 'This beer will probably kill you. 99.9% alcohol. Beware.',
        
    },
    
    {
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278677-7bd02780-52dd-11e9-8043-3dbdae7ef11b.png",    
        name: "Curious George",
        description: 'In case you were curious, this is our non-alcoholic beer.',

    },

    {
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278678-7d015480-52dd-11e9-9bea-a8832cc1699a.png",
        name: "MoJo JoJo Brew",
        description: 'Beer and energy drink combined. You will be unstoppable.',

    },

    {
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278680-8094db80-52dd-11e9-848d-faa1662464ba.png",
        name: "King Kong",
        description: "This beer will beer will have you beating your chest because of the hoppy taste...This is the best-seller",

    },

    {
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278682-82f73580-52dd-11e9-9adc-53299453725e.png",
        name: "Rafiki",
        description: 'This IPA has an incredible taste of spices and herbs. Very unique...',

    },

    {
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278683-84286280-52dd-11e9-9a78-67c61c0c2e8e.png",
        name: "Ceasar",
        description: "This beer help you pass NSS with assistance as possible",
    }
];




const beerBuilder = () => {
    let beerString = '';
    beers.forEach((beer) => {
        beerString += `<div class="card mt-1 mb-2 col-4">`;
        beerString += `<div class="card-body">`;
        beerString += `<h2 class="card-title">${beer.name}</h2>`;
        beerString += `<img class="card-img-top" src=${beer.imageUrl} alt="Card image cap" ></img>`
        beerString += `<p class="card-text id="text">${beer.description}</p>`;
        beerString +=  `<a href="#" class="btn btn-primary">Info</a>`;
        beerString += `</div>`;
        beerString += `</div>`;
    });
    printToDom('myBeer', beerString);

};


const buttonEvents = () => {
    document.getElementById('btn').addEventListener('click', 'text');
};

const init = () => {
    beerBuilder();
    // topThree();
    // submitButton.addEventListener("click", submitEmail);
    
};

init();















