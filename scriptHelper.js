// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 let missionTargetText = document.getElementById("missionTarget")
 
 
 missionTargetText.innerHTML = `
 <h2>Mission Destination</h2>
 <ol>
    <li>Name: ${name}</li>
    <li>Diameter: ${diameter}</li>
    <li>Star: ${star}</li>
    <li>Distance from Earth: ${distance}</li>
    <li>Number of Moons: ${moons}</li>
 </ol>
 <img src="${imageUrl}">
 `
             
 }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||  validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert(" All fields are required!")
    }
    if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" ){
        alert('You must enter a valid input')

   
}

let launchStatus = document.getElementById('launchStatus');
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById('copilotStatus');
let cargoStatus = document.getElementById('cargoStatus');
let fuelStatus = document.getElementById('fuelStatus');

pilotStatus.innerText = `Pilot ${pilot} is ready for launch.`;
copilotStatus.innerText = `Copilot ${Copilot} is ready for launch.`

list = document.getElementById('faultyItems');
list.style.visibility = 'visible';

if (fuelLevel < 10000) {
    fuelStatus.innerText = 'There is not enough fuel for the journey.';
    launchStatus.innerText = "Shuttle not ready for launch";
    launchStatus.style.color = 'red';

}

if (cargoLevel > 10000){
    cargoStatus.innerText = 'There is too much mass for the shuttle to take off.';
    launchStatus.innerText = "Shuttle not ready for launch";
    launchStatus.style.color = 'red';
}
if (fuelLevel > 10000 && cargoLevel < 10000){
    cargoStatus.innerText = 'There is adequate cargo for the shuttle to take off.';
    fuelStatus.innerText =  'Fuel level adequate for launch'
    launchStatus.innerText = "Shuttle is ready for launch";
    launchStatus.style.color = 'green';

}
}



async function myFetch(){
        let planetsReturned;

        planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
        planetsReturned = await planetsReturned.json();

        return planetsReturned;
    }

    function pickPlanet(planets) {
        let destinationPlanet = Math.floor(Math.random()*planets.length); 
        
        return planets[destinationPlanet]
        }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
