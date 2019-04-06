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

//Available Beers
const beers = [
    {
        id: 0,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278679-7ecb1800-52dd-11e9-94d1-99960ee6e9d1.png",
        name: "HaramBAE",
        description: 'This beer will probably kill you. 99.9% alcohol. Beware.',
        ingredients: ['good stuff', 'great stuff', 'awesome stuff']
        
    },
    
    {
        id: 1,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278677-7bd02780-52dd-11e9-8043-3dbdae7ef11b.png",    
        name: "MoJo JoJo Brew",
        description: 'Beer and energy drink combined. You will be unstoppable.',
        ingredients: ['good stuff', 'great stuff', 'awesome stuff']

    },

    {
        id: 2,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278678-7d015480-52dd-11e9-9bea-a8832cc1699a.png",
        name: "Curious George",
        description: 'In case you were curious, this is our non-alcoholic beer.',
        ingredients: ['good stuff', 'great stuff', 'awesome stuff']
        
    },
    
    {
        id: 3,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278680-8094db80-52dd-11e9-848d-faa1662464ba.png",
        name: "King Kong",
        description: "This beer will beer will have you beating your chest because of the hoppy taste...This is the best-seller",
        ingredients: ['good stuff', 'great stuff', 'awesome stuff']

    },

    {
        id: 4,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278682-82f73580-52dd-11e9-9adc-53299453725e.png",
        name: "Rafiki",
        description: 'This IPA has an incredible taste of spices and herbs. Very unique...',
        ingredients: ['good stuff', 'great stuff', 'awesome stuff']

    },

    {
        id: 5,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278683-84286280-52dd-11e9-9a78-67c61c0c2e8e.png",
        name: "Ceasar",
        description: "This beer help you pass NSS with less assistance as possible",
        ingredients: ['good stuff', 'great stuff', 'awesome stuff']

    }
];




const beerBuilder = () => {
    let beerString = '';
    beers.forEach((beer) => {
        let ingredientString = '';
        beer.ingredients.forEach(ingredient => {
            // loop thru ingredients and build html
            ingredientString += `<p>${beer.ingredients}</p>`;
        });
        console.log(ingredientString);
        beerString += `<div class="card mt-1 mb-2 col-4">`;
        beerString += `<div class="card-body">`;
        beerString += `<h2 class="card-title">${beer.name}</h2>`;
        beerString += `<img class="card-img-top" src=${beer.imageUrl} alt="Card image cap" ></img>`
        beerString += `<p class="card-text" id=${beer.name}>${beer.description}</p>`;
        beerString += `<div class='d-none'>${ingredientString}</div>`;
        beerString +=  `<a href="javascript:void(0)" class="btn btn-primary infoButton" id=beer${beer.id}>Info</a>`;
        beerString += `</div>`;
        beerString += `</div>`;
        // add event listener for the a tag, traverse the dom to find the div with the d-none, remove the class
    });
    printToDom('myBeer', beerString);

};

const deleteFunction = (e) => {
    const buttonId = e.target.previousSibling;
    ingredients.forEach((ingredient, index) => {
        if(ingredient.id === buttonId){
            ingredients.splice(index, 1);
        }
    });
    beerBuilder(ingredients);
    addDeleteEvents();
};

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('infoButton');
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
};

// const myFunction = () => {
//     var x = document.getElementById("text");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }



    

//Brew Master's (begin)
const brewMasters = [
    {
        image: `https://raw.githubusercontent.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/master/img/dm-img.jpg`,
        name: `David`,
        jobTitle: `Bystander`,
        responsibilities: `Alcohol content tester`
    },
    {
        image: `https://raw.githubusercontent.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/master/img/bio.jpg`,
        name: `Jeressia`,
        jobTitle: `CEO`,
        responsibilities: `Finances, keeps the lights on (bc she's scared of the dark)`
    },
    {
        image: `https://raw.githubusercontent.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/master/img/IMG_2230.JPG`,
        name: `Lakia`,
        jobTitle: `Lead Scientist`,
        responsibilities: `Adds spice to everything including beer`
    },
    {
        image: `https://raw.githubusercontent.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/master/img/calvin-img.jpg`,
        name: `Calvin`,
        jobTitle: `CTO`,
        responsibilities: `Responsible for site malfunctions`
    },
];

const brewMastersBuilder = (x) => {
    let message = '';
    x.forEach((brewMaster) => {
        message += `<div class="card col-5" style="width: 18rem;">
        <h2 class="card-title"><b>${brewMaster.name}</b></h2>
        <img src='${brewMaster.image}' class="card-img-top rounded mx-auto" style="height: 60%;" alt="...">
        <div class="card-body">
          <h5 class="card-title"><b>${brewMaster.jobTitle}</b></h5>
          <p class="card-text">${brewMaster.responsibilities}</p>
        </div>
      </div>`
    });
    printToDom('brewMastersDiv', message);
};
//Brew Master's (end)

const init = () => {
    // submitButton.addEventListener("click", submitEmail);

    if (document.getElementById('topThreeDiv')){
    topThree();
    };
    //Brew Master's (begin)
    if (document.getElementById('brewMastersDiv')){
    brewMastersBuilder(brewMasters);
    }; //Brew Master's (end)
    //Available Beer's Page (begin)
    if(document.getElementById('myBeer')){
        beerBuilder();
    };
    

};

init();















