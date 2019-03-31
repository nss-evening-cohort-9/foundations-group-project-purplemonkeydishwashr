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

const init = () => {
    submitButton.addEventListener("click", submitEmail);
    topThree();
};
init();















