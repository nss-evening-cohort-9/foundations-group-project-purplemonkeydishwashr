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
    submitButton.addEventListener("click", submitEmail);

    if (document.getElementById('topThreeDiv')){
    topThree();
    };
    //Brew Master's (begin)
    if (document.getElementById('brewMastersDiv')){
    brewMastersBuilder(brewMasters);
    };
    //Brew Master's (end)
};
init();















