const printToDom = (divId, textToPrint) => {
    const selectDiv= document.getElementById(divId).innerHTML = textToPrint;
    // selectDiv.innerHTML += textToPrint;
};

// Mailing list Modal
const submitEmail = (e) => {
    e.preventDefault();
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
};
const submitButton = 
document.getElementById('submitButton');


// Brewery events
const events = [
    {
        title: 'Yoga & Brew',
        date: 'Every Saturday',
        time:  '9:00am',
        description: 'Come and join us for yoga. Free HaramBAE beer with purchase of yoga.',
        price: '$10',
        imageUrl: 'https://i1.wp.com/jackalopebrew.com/wp-content/uploads/2018/09/IMG_4122.jpg?zoom=2&fit=1472%2C1840&ssl=1',
    },
    {
        title: 'Brew-Trivia',
        date: 'Every Thursday',
        time:  '7:00pm',
        description: 'Join us for Trivia nights at PurplemonkeydishwashrBrewery on Thursdays from 7:00-10:00pm! Test your knowledge all while drinking our ver own in house beer. Cash Prizes paid in Beer!',
        price: '$10',
        imageUrl: '../img/trivia.png',
    },
    {
        title: 'Pickup for a Pint',
        date: 'Sunday April 21st',
        time:  '8:00am - 11:00am',
        description: 'Help us celebrate Earthday this year by participating in a Community Cleanup! Please come by and join us for a for a free pint of beer and Brunch after cleanup. Brunch will be served at regular price.',
        price: 'Participation is free!',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhN_JiRqWQu7vYc3Zu-p8Vk_AhiUKeBD433ucEG81RBKdmrb3',
    },
    {
        title: 'Tasting Tuesday',
        date: '04/16/2019',
        time:  '7:00pm',
        description: 'Every 3rd Tuesday of the Month, come join us for a beer and cheese tasting. Try our very own PurplemonkeydishwashrBrewery beer with your favorite local cheeses.',
        price: '$35',
        imageUrl: 'https://d3tv8y14ogpztx.cloudfront.net/pulses/images/000/033/531/show_box/beer-tasting.jpg',
    },
    {
        title: 'Tour the Brew',
        date: 'Monday - Saturday',
        time:  '9:00am - 3:00pm',
        description: 'You’ll hear about the history of our little brewery, and learn about the different styles of beer we brew. Tours include a 5oz souvenir logo glass and samples of our beers during the tour',
        price: '$15',
        imageUrl: 'https://raw.githubusercontent.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/master/img/dm-img.jpg',
    },
    {
        title: 'Book a Private Event',
        date: 'We offer a full catering menu, designed and prepared in-house by our own chef for up to 200 guests.',
        time:  '',
        description: 'Book your special event at PurplemonkeydishwashrBrewery! Our space provides a unique experience for any event and we cater to any occasion!',
        price: 'Call us for booking!',
        imageUrl: 'https://static1.squarespace.com/static/58673aa9d1758e37151d6a60/t/587fc5c4893fc0950e08add9/1484768711656/Beerdinner.jpg?format=1000w',
    },
];
const eventType = (l) => {
    let domString = '';
    l.forEach((event) => {
        domString += `<div class="row">`;
      domString += `<div class="col-3">`;
      domString += `<div class= "eventcard" style="width: 25rem;">`;
      domString += `<h2>${event.title}</h2>`; 
      domString += `<image id="eventimg" class="card-img-top" src=${event.imageUrl}></img>`;
      domString += `<p>${event.description}</p>`; 
      domString += `<p>${event.date}</p>`; 
      domString += `<div>${event.time}</div>`; 
      domString += `<div>${event.price}</div>`; 
      domString += `</div>`;
      domString += `</div>`;
      domString += `</div>`;
    });

    printToDom('eventContainer', domString);
    //console.log(domString);
};

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
];
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
};

//Available Beers
const beers = [
    {
        id: 0,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278679-7ecb1800-52dd-11e9-94d1-99960ee6e9d1.png",
        name: "HaramBAE",
        description: 'This beer will probably kill you. 99.9% alcohol. Beware.',
        ingredients: ['Citrus', 'Isopropyl Alcohol', 'Cinnamon']
        
    },
    
    {
        id: 1,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278677-7bd02780-52dd-11e9-8043-3dbdae7ef11b.png",    
        name: "MoJo JoJo Brew",
        description: 'Beer and energy drink combined. You will be unstoppable.',
        ingredients: ['Sugar', 'Spice', 'Chemical X']

    },

    {
        id: 2,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278678-7d015480-52dd-11e9-9bea-a8832cc1699a.png",
        name: "Curious George",
        description: 'In case you were curious, this is our non-alcoholic beer.',
        ingredients: ['Banana', 'Honey', 'Cherry']
        
    },
    
    {
        id: 3,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278680-8094db80-52dd-11e9-848d-faa1662464ba.png",
        name: "King Kong",
        description: "This beer will beer will have you beating your chest because of the strong taste.",
        ingredients: ['People', 'Vanilla', 'High Fructose Corn Syrup']

    },

    {
        id: 4,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278682-82f73580-52dd-11e9-9adc-53299453725e.png",
        name: "Rafiki",
        description: 'This IPA has an incredible taste of spices and herbs. Very unique.',
        ingredients: ['Zazu', 'Timon', 'Pumba']

    },

    {
        id: 5,
        imageUrl: "https://user-images.githubusercontent.com/43094838/55278683-84286280-52dd-11e9-9a78-67c61c0c2e8e.png",
        name: "Ceasar",
        description: "This beer help you pass NSS with ease",
        ingredients: ['Lime', 'Kiwi', 'Brain Power']

    }
];



const beerBuilder = () => {
    let beerString = '';
    beers.forEach((beer) => {
        let ingredientString = '';
        beer.ingredients.forEach(ingredient => {
            // loop thru ingredients and build html
            ingredientString += `<p>${ingredient}</p>`;
        });
        console.log(ingredientString);
        beerString += `<div class="card">`;
        beerString += `<div class="card-body">`;
        beerString += `<h2 class="card-titles">${beer.name}</h2>`;
        beerString += `<img class="card-img-top" src=${beer.imageUrl} alt="Card image cap" ></img>`
        beerString += `<p class="card-text" id=${beer.name}>${beer.description}</p>`;
        beerString += `<div class='d-none'>${ingredientString}</div>`;
        beerString +=  `<a href="javascript:void(0)" class="btn btn-primary infoButton" id=beer${beer.id}>Ingredients</a>`;
        beerString += `</div>`;
        beerString += `</div>`;
        // add event listener for the a tag, traverse the dom to find the div with the d-none, remove the class
    });
    printToDom('myBeer', beerString);
    addDeleteEvents();

};

const deleteFunction = (e) => {
    const IngredientsDiv = e.target.previousSibling;
    IngredientsDiv.classList.remove('d-none');
   
};

const addDeleteEvents = () => {
    const deleteButtons = document.getElementsByClassName('infoButton');
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteFunction);
    }
};



    

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
        message += `<div class="cards">
        <h2 class="card-title"><b>${brewMaster.name}</b></h2>
        <img src='${brewMaster.image}' class="card-img-top rounded mx-auto" >
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

    submitButton.addEventListener('click', submitEmail);
    if (document.getElementById('eventContainer')){
        eventType(events);
    };
    if (document.getElementById('topThreeDiv')){
    topThree();
    };
    //Brew Master's (begin)
    if (document.getElementById('brewMastersDiv')){
    brewMastersBuilder(brewMasters);
    };
    if(document.getElementById('myBeer')){
        beerBuilder();
    };
    

};


init();