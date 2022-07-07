class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
    evolve(){
        //add something here to change from original image to next image
        //start with grogu in pod, then upgrade to grogu in either chain mail or with din djarin.
        //the alert should follow after the evolution or be at the same time.
        alert('Grogu is evolving. He has gained a pal.')
    }
}

const babyYoda = new Tamagotchi ("Grogu", 1, 1, 1, 0)

//FEED FUNCTIONS
let getHungerNumerator = document.getElementById('hungerNumerator')
function startHungerNumerator() {
    getHungerNumerator.innerText = `Hunger = ${0}`
}

startHungerNumerator()

function feedGrogu () {
    getHungerNumerator.innerText = `Hunger = ${babyYoda.hunger -= 1}`
}

//SLEEP FUNCTIONS
//SETUP FOR QUESTION BELOW
// let getSleepinessNumerator = document.getElementById('sleepinessNumerator')
// // let changeBackgroundImage = document.getElementById('#background')
//         //I write this variable to change the background to represent the lights turning off.
//         //I grab the background by its Id.

// function startSleepinessNumerator() {
//     getSleepinessNumerator.innerText = `Sleepiness = ${0}`
//     // changeBackgroundImage = "url('/images/grogu.jpg')"
//         //I invoke the variable and add as its innerhtml the link above to put the picture as the background. This does not work.
//         //QUESTION 1: How can I replace my current background when I hit the button for turning off the lights?
// }

// startSleepinessNumerator()

//REPEAT OF ABOVE SETUP FOR QUESTION 1: WORKING COPY

let getSleepinessNumerator = document.getElementById('sleepinessNumerator')

function startSleepinessNumerator() {
    getSleepinessNumerator.innerText = `Sleepiness = ${0}`
    
}

startSleepinessNumerator()

function makeGroguSleep () {
    getSleepinessNumerator.innerText = `Sleepiness = ${babyYoda.sleepiness -= 1}`
    let changeBackground = document.body.style.background = "url('/images/background-lights-off.jpeg')"
    changeBackground.style.display = 'block';
    changeBackground.style.objectFit = 'cover';
    //source for objectfit and cover: https://stackoverflow.com/questions/24650218/image-in-full-screen-with-img-tag
}

//PLAY FUNCTIONS    

let getBoredomNumerator = document.getElementById('boredomNumerator')
function startBoredomNumerator() {
    getBoredomNumerator.innerText = `Boredom = ${0}`
}

startBoredomNumerator()

function playWithGrogu () {
    getBoredomNumerator.innerText = `Boredom = ${babyYoda.boredom -= 1}`
}

// document.body.appendChild (i'll append the results of my for loop that runs through the array of 1-10)

//AGE
//INCREASE PET'S AGE EVERY X MINUTES

//EVENT LISTENERS FOR BUTTONS
document.getElementById('Feed').addEventListener('click', () => {feedGrogu()})
document.getElementById('Sleep').addEventListener('click', () => {makeGroguSleep()})
document.getElementById('Play').addEventListener('click', () => {playWithGrogu()})

//for the lights button, i need to find a way to change the background image to something darker or just change the color to black.

//over time, the values of hunger, sleep and boredom need to decrease at a certain interval so that the player must keep hitting buttons so Grogu doesn't faint