//TURN PROMPT BACK ON. I TURNED THIS OFF TEMPORARILY WHILE WORKING.
class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }
}

const babyYoda = new Tamagotchi (`tamagotchiName`, 1, 1, 1, 50)

//FEED FUNCTIONS
let getHungerNumerator = document.getElementById('hungerNumerator')
function startHungerNumerator() {
    getHungerNumerator.innerText = `Hunger = ${babyYoda.hunger}`
}

startHungerNumerator()

function feedGrogu () {
    if (babyYoda.hunger > 1){
        getHungerNumerator.innerText = `Hunger = ${babyYoda.hunger -= 1}`
    } return babyYoda.hunger
}

//SLEEP FUNCTIONS
let getSleepinessNumerator = document.getElementById('sleepinessNumerator')
function startSleepinessNumerator() {
    getSleepinessNumerator.innerText = `Sleepiness = ${babyYoda.sleepiness}`
}

startSleepinessNumerator()


//lights off function related to sleep
function tireGrogu () {
    if (babyYoda.sleepiness < 10){
    getSleepinessNumerator.innerText = `Sleepiness = ${babyYoda.sleepiness += 1}`
    } 
    if (babyYoda.sleepiness === 10){
        alert(`Tamagrogu has fainted!`)
    }
}

//lights on function related to sleep
function rejuvenateGrogu () {
    if (babyYoda.sleepiness > 1){
    getSleepinessNumerator.innerText = `Sleepiness = ${babyYoda.sleepiness -= 2}`
    } return babyYoda.sleepiness
}
//the webpage is returning NaN even though teh timer function appears as the same as the timer functions for the others
//i get undefined when i console.log the line that's directly above

//REFBOOT
let lightSwitchClickCount = 0
function increaselightSwitchClickCount(){
    lightSwitchClickCount += 1
if (lightSwitchClickCount % 2 === 0){
    const tireTimer = setInterval(tireGrogu, 5000)
    document.body.style.backgroundImage = "url('/images/background-lights-on.webp')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
        if (lightSwitchClickCount % 2 != 0){
            clearInterval(tireTimer)
        }
} else if (lightSwitchClickCount % 2 != 0){
    const rejuvenateTimer = setInterval(rejuvenateGrogu, 4000)
    document.body.style.backgroundImage = "url('/images/background-lights-off.jpeg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    if (lightSwitchClickCount % 2 === 0){
            clearInterval(rejuvenateTimer)
        }
    }
}

// function sleepCountPreLightClick () {
//     if (lightSwitchClickCount === 0){
//     setInterval(tireGrogu, 5000)
//     } else {
//     clearInterval(tireGrogu)
//     }
// }

//created light switch variable and declared it as equal to 0
// function makeGroguSleep () {
//     //start of my function linked to the kill lights button
//     lightSwitchClickCount += 1;
//     //adding one to the click count each time the button is clicked
//     //sleepiness numerator is decreased by one with every click
//     // let timerRejuvinateGrogu = setInterval(rejuvinateGrogu, 5000)
    
//     if (lightSwitchClickCount % 2 === 0){
//         //an if function to display the background when the lights are on, i.e, the click count is even.
//     let timerTireGrogu = setInterval(tireGrogu, 5000);
//     document.body.style.backgroundImage = "url('/images/background-lights-on.webp')";
//     document.body.style.backgroundSize = 'cover';
//     document.body.style.backgroundRepeat = 'no-repeat';
//     // clearInterval(timerRejuvinateGrogu)
//     }
//     //add something to kill interval increase
//     if (lightSwitchClickCount % 2 != 0){
//     clearInterval(timerTireGrogu);
//     // timerRejuvinateGrogu = setInterval(rejuvinateGrogu, 5000);
//     //add something to kill interval decrease
//     document.body.style.backgroundImage = "url('/images/background-lights-off.jpeg')";
//     //e.g.: JavaScript syntax:	object.style.backgroundImage="url(img_tree.gif)"
//     //try background-image
//         //then try the below
//     //i change the background image
//     // changeBackground.height = '100%';
//     // changeBackground.width = '100%';
//     // i attempt to change the image properties by setting the height to fill the screen, which doesn't work.
//     document.body.style.backgroundSize = 'cover';
//     // i attempt to change the image properties to make it fill the screen a different way, with "cover", which doesn't work.
//     // changeBackground.backgroundPosition = 'center';
//     // i attempt to center the image, which doesn't work.
//     document.body.style.backgroundRepeat = 'no-repeat';
//     //TODO: make the 'off' background dimmer. There's a way to do this, i've seen it. Research it.
//     // i attempt to force image to not repeat, which doesn't work.
//     }
//     //source: https://www.w3schools.com/howto/howto_css_full_page.asp
//     //QUESTION: why is my background image tiled all over hte screen instead of filling it based on the above code that I specified?
// }
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
    getBoredomNumerator.innerText = `Boredom = ${babyYoda.boredom}`
}
startBoredomNumerator()

function playWithGrogu () {
    if (babyYoda.boredom > 1){
    getBoredomNumerator.innerText = `Boredom = ${babyYoda.boredom -= 1}`
    }
}

//INCREASE PET'S AGE EVERY X MINUTES

//TIMER FUNCTIONS
//AGE
//need a button to START that the player needs to push. That will trigger:
    //1. the name prompt.
    //2. An alert that the timers will start/that the game will begin.
let getAgeNumerator = document.getElementById('ageNumerator')
getAgeNumerator.innerText = `Age = ${babyYoda.age} years`

function ageGrogu () {
    if (babyYoda.age < 66){
    getAgeNumerator.innerText = `Age = ${babyYoda.age += 1} years`
    }
    if (babyYoda.age === 52){
        document.getElementById('groguTamagotchi').src='images/evolve_grogu_and_din.jpg'
        //add something here to change from original image to next image
        //start with grogu in pod, then upgrade to grogu in either chain mail or with din djarin.
        //the alert should follow after the evolution or be at the same time.
        alert(`Tamagrogu has gained a pal.`)
    }
    if (babyYoda.age === 60){
        document.getElementById('groguTamagotchi').src='images/grogu_and_din.jpg'
        alert(`Tamagrogu has chosen Din over Luke.`)
    }
    if (babyYoda.age === 65){
        document.body.style.backgroundImage = 'url("images/Final-Image.webp")'
        alert('You win!')
    }
}


function makeGroguHungry () {
    if (babyYoda.hunger < 10){
    getHungerNumerator.innerText = `Hunger = ${babyYoda.hunger += 1}`
    } 
    if(babyYoda.hunger === 10){
         alert(`Tamagrogu has fainted!`)
    }
}

function makeGroguBored () {
    if (babyYoda.boredom < 10){
    getBoredomNumerator.innerText = `Boredom = ${babyYoda.boredom += 1}`
    } 
    if (babyYoda.boredom === 10){
        alert(`Tamagrogu has fainted!`)
    }
}

//EVENT LISTENERS FOR BUTTONS

document.getElementById('startButton').addEventListener('click',() => {
    let tamagotchiName = prompt("Enter Grogu's nickname")
    function promptForName(){
    if (tamagotchiName != null) {
    document.getElementById('nameGrogu').innerText = `Tamagrogu AKA ${tamagotchiName}`
        }
    }
    promptForName()
    // sleepCountPreLightClick ()
    setInterval(ageGrogu, 5000)
    setInterval(makeGroguHungry, 5000)
    setInterval(makeGroguBored, 5000)
    setInterval(tireGrogu, 5000)
    //insert future startGame method that will run timers
    //is there a way to prevent the buttons from being clicked before the start button is clicked?
})

    document.getElementById('Feed').addEventListener('click', () => {feedGrogu()})
    // document.getElementById('Sleep').addEventListener('click', () => {makeGroguSleep()})
    document.getElementById('Sleep').addEventListener('click', () => {increaselightSwitchClickCount()})
    document.getElementById('Play').addEventListener('click', () => {playWithGrogu()})

setTimeout(function welcomeIntro(){
    alert(
`Welcome to Tamagrogu! Prevent Grogu's hunger, sleepiness and boredom from reaching 10 by feeding him, turning off the lights and giving him a silver ball.

Grogu is aging and will eventually evolve. You win when Grogu turns 65 years old! Click 'START' to begin!`)
    }, 100)

//FAINT FUNCTION
// function faint(num) {
// if (babyYoda.hunger === num || babyYoda.sleepiness === num || babyYoda.boredom === num){
//     alert(`Tamagrogu has fainted!`)
//     }
// }

// faint(10)

//EVOLVE FUNCTIONS
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