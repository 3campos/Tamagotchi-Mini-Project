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

let getSleepinessNumerator = document.getElementById('sleepinessNumerator')

function startSleepinessNumerator() {
    getSleepinessNumerator.innerText = `Sleepiness = ${0}`
}

startSleepinessNumerator()

let lightSwitchClickCount = 0;
//created light switch variable and declared it as equal to 0

function makeGroguSleep () {
    //start of my function linked to the kill lights button
    lightSwitchClickCount += 1;
    //adding one to the click count each time the button is clicked
    getSleepinessNumerator.innerText = `Sleepiness = ${babyYoda.sleepiness -= 1}`
    //sleepiness numerator is decreased by one with every click
    if (lightSwitchClickCount % 2 === 0){
        //an if function to display the background when the lights are on, i.e, the click count is even.
    let changeBackground = document.body.style.background = "url('/images/background-lights-on.webp')"
    //i add a background to display when the lights are on after the sleep button is clicked
    changeBackground.backgroundSize = 'cover';
    // changeBackground.width = '100%';
    // //i adjust the width of the background
    // changeBackground.height = '100%';
    //pseudocode: 
    //QUESTION: Why is there still a space at the bottom of the page when I've specified that I want the height to be 100%????!!!
    }
    else {
    changeBackground = document.body.style.background = "url('/images/background-lights-off.jpeg')"
    //i change the background image
    changeBackground.height = '100%';
    changeBackground.width = '100%';
    // i attempt to change the image properties by setting the height to fill the screen, which doesn't work.
    changeBackground.backgroundSize = 'cover';
    // i attempt to change the image properties to make it fill the screen a different way, with "cover", which doesn't work.
    changeBackground.backgroundPosition = 'center';
    // i attempt to center the image, which doesn't work.
    changeBackground.backgroundRepeat = 'no-repeat';
    // i attempt to force image to not repeat, which doesn't work.
    }
    //source: https://www.w3schools.com/howto/howto_css_full_page.asp
    //QUESTION: why is my background image tiled all over hte screen instead of filling it based on the above code that I specified?
}
//     //source for objectfit and cover: https://stackoverflow.com/questions/24650218/image-in-full-screen-with-img-tag
//QUESTION: How do I make the lights off background fit the whole screen? The lightsoff background is displaying in tiles. I used the code above to try to accomplish this: changeBackground.style.objectFit = 'cover';
//         //That did not work. Any other ideas?

//     //TO DO: need to incorporate a timer that will increase sleepiness while lights are on only. A while loop can be used to continuously add sleepiness points until the max of 10 is hit and therefore causing Grogu to faint (faint via alert to player).
//         //e.g.: 
//     //function lightStatus (){
//         //if click count on light button is an odd number, which will turn the light off, then run: if background image = y), then {run timer function to decrease sleepiness.}
//         //if click count on light button is an even number, which will turn the light on, (here, if background image = x), then {run timer function to increase sleepiness}
                   

//PLAY FUNCTIONS    

let getBoredomNumerator = document.getElementById('boredomNumerator')
function startBoredomNumerator() {
    getBoredomNumerator.innerText = `Boredom = ${0}`
}

startBoredomNumerator()

function playWithGrogu () {
    getBoredomNumerator.innerText = `Boredom = ${babyYoda.boredom -= 1}`
}

//AGE
//INCREASE PET'S AGE EVERY X MINUTES

//EVENT LISTENERS FOR BUTTONS
document.getElementById('Feed').addEventListener('click', () => {feedGrogu()})
document.getElementById('Sleep').addEventListener('click', () => {makeGroguSleep()})
document.getElementById('Play').addEventListener('click', () => {playWithGrogu()})

//for the lights button, i need to find a way to change the background image to something darker or just change the color to black.

//over time, the values of hunger, sleep and boredom need to decrease at a certain interval so that the player must keep hitting buttons so Grogu doesn't faint


//IGNORE; for personal reference
//SLEEP FUNCTIONS
//IGNORE START
//SETUP FOR QUESTION BELOW
// let getSleepinessNumerator = document.getElementById('sleepinessNumerator')
// // let changeBackgroundImage = document.getElementById('#background')
//         //I write this variable to change the background to represent the lights turning off.
//         //I grab the background by its Id.

// function startSleepinessNumerator() {
//     getSleepinessNumerator.innerText = `Sleepiness = ${0}`
//     // changeBackgroundImage = "url('/images/grogu.jpg')"
//         //I invoke the variable and add as its innerhtml the link above to put the picture as the background. This does not work.
// }

// startSleepinessNumerator()
//IGNORE END