

const printToDom = (divId, textToPrint) => {
    const selectDiv= document.getElementById(divId).innerHTML = textToPrint;
    //selectDiv.innerHTML += textToPrint;
};

// Mailing list Modal
const submitEmail = (e) => {
    e.preventDefault();
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
};
const submitButton = 
document.getElementById('submitButton')

// Brewery events
const events = [
    {
        title: 'Yoga & Brew',
        date: '04/06/2019',
        time:  '9:00 am',
        description: 'Come and join us for yoga. Price is free with purchase of our very own HaramBAE beer.',
        price: '$10',
        imageUrl: 'https://i1.wp.com/jackalopebrew.com/wp-content/uploads/2018/09/IMG_4122.jpg?zoom=2&fit=1472%2C1840&ssl=1',
    },
    {
        title: 'Brew-Trivia',
        date: 'Every Thursday',
        time:  '7:00 pm',
        description: 'Join us for Trivia nights at PurplemonkeydishwashrBrewery on Thursdays from 7:00-10:00pm! Test your knowledge all while drinking our ver own in house beer. Cash Prizes paid in Beer!',
        price: '$10',
        imageUrl: 'https://github.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/blob/master/TRIVIANOV18.png?raw=true',
    },
    {
        title: 'Pickup for a Pint',
        date: 'Every Sunday',
        time:  '8:00am-11:00am',
        description: 'Every Sunday our team participates in Community Cleanup. Please come by and join us for a for a free pint of beer and Brunch after cleanup. Brunch not included.',
        price: 'Participation is free!',
        imageUrl: 'https://i1.wp.com/jackalopebrew.com/wp-content/uploads/2018/09/IMG_4122.jpg?zoom=2&fit=1472%2C1840&ssl=1',
    },
    {
        title: 'Yoga & Brew',
        date: '04/01/2019',
        time:  '9:00 am',
        description: 'Come and join us for yoga. Price is free with purchase of our very own HaramBAE beer.',
        price: '$10',
        imageUrl: 'https://i1.wp.com/jackalopebrew.com/wp-content/uploads/2018/09/IMG_4122.jpg?zoom=2&fit=1472%2C1840&ssl=1',
    },
    {
        title: 'Yoga & Brew',
        date: '04/01/2019',
        time:  '9:00 am',
        description: 'Come and join us for yoga. Price is free with purchase of our very own HaramBAE beer.',
        price: '$10',
        imageUrl: 'https://i1.wp.com/jackalopebrew.com/wp-content/uploads/2018/09/IMG_4122.jpg?zoom=2&fit=1472%2C1840&ssl=1',
    },
    {
        title: 'Book a Private Event',
        date: 'We offer a full catering menu, designed and prepared in-house by our own chef for up to 200 guests.',
        time:  'Morning Noon or Night',
        description: 'Book your own special event at PurplemonkeydishwashrBrewery. Our space provides a unique experience for any event and we cater to any occasion!',
        price: 'Please call us for booking!',
        imageUrl: 'https://static1.squarespace.com/static/58673aa9d1758e37151d6a60/t/587fc5c4893fc0950e08add9/1484768711656/Beerdinner.jpg?format=1000w',
    },
];
const eventType = (l) => {
    let domString = '';
    l.forEach((event) => {
        domString += `<div class="row">`;
      domString += `<div class="col-4">`;
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




// //Index - Top 3 Beers Loops 
// allBeers = [
//     {
//         headline:'Best Seller',
//         name:'MoJo JoJo Brew',
//         imageUrl:'https://github.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/blob/master/img/1beer.png?raw=true',
//         description:'Beer and energy drink combined. You will be unstoppable.',
//         color: 'light',
//     },
//     {
//         headline:'Lightweights Welcome',
//         name:'The Curious George',
//         imageUrl:'https://github.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/blob/master/img/2beer.png?raw=true',
//         description:'In case you were curious, this is our non-alcoholic beer.',
//         color: 'medium',
//     },
//     {
//         headline:'The Champ Is Here',
//         name:'HaramBAE',
//         imageUrl:'https://github.com/nss-evening-cohort-9/foundations-group-project-purplemonkeydishwashr/blob/master/img/3beer.png?raw=true',
//         description:'This beer will probably kill you. 99.9% alcohol. Beware.',
//         color: 'dark',
//     },
// ]
// const topThree = () => {
//     let domString = '';
// allBeers.forEach((beer) => {
//     domString += `<div class="card mt-1 mb-2">`
//     domString += `<h5 class="card-header ${beer.color}">${beer.headline}</h5>`
//     domString += `<div class="card-body">`
//     domString += `<h5 class="card-title">${beer.name}</h5>`
//     domString += `<a href="./html/availBeers.html"><img src="${beer.imageUrl}" class="card-img-top" alt="..."></a>`
//     domString += `<p class="card-text">${beer.description}</p>`
//     domString += `</div>`
//     domString += `</div>`
// });
// printToDom('topThreeDiv',domString);
// };

const init = () => {
    submitButton.addEventListener("click", submitEmail);
    //topThree();
    eventType(events);
};
init();















