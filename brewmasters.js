const printToDom = (divId, textToPrint) => {
    document.getElementById(divId).innerHTML = textToPrint
};

const brewMasters = [
    {
        image: `../img/dm-img.jpg`,
        name: `David`,
        jobTitle: `Bystander`,
        responsibilities: `Alcohol content tester`
    },
    {
        image: ``,
        name: `Jeressia`,
        jobTitle: `CEO`,
        responsibilities: `Finances, keeps the lights on (bc she's scared of the dark)`
    },
    {
        image: ``,
        name: `Lakia`,
        jobTitle: `Lead Scientist`,
        responsibilities: `Adds spice to everything including beer`
    },
    {
        image: ``,
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
    printToDom('printDiv', message);
};

const init = () => {
    brewMastersBuilder(brewMasters);
};

init();