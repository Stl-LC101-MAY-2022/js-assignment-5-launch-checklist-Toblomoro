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
}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty"
    } else if (isNaN(testInput)){

        return "Not a Number"
    } else {
        return "Is a NUmber"
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||  validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert(" All fields are required!")
    }
    if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" ){
        alert('You must enter a valid input')

   
}
}
let launchStatus = document.getElementById('launchStatus');
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let cargoStatus = document.getElementById('cargoStatus');
let fuelStatus = document.getElementById('fuelStatus')



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
