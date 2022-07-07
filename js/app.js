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

function startHungerNumerator() {
    let getHungerNumerator = document.getElementById('hungerNumerator')
    getHungerNumerator.innerText = `Hunger = ${babyYoda.hunger}`
    }
    
startHungerNumerator()
    
function startSleepinessNumerator() {
        let getSleepinessNumerator = document.getElementById('sleepNumerator')
        getSleepinessNumerator.innerText = `Sleepiness = ${babyYoda.sleepiness}`
        }
        
startSleepinessNumerator()
    
function startBoredomNumerator() {
        let getBoredomNumerator = document.getElementById('boredomNumerator')
        getBoredomNumerator.innerText = `Boredom = ${babyYoda.boredom}`
        }
        
startBoredomNumerator()

function feedGrogu () {
    console.log(babyYoda.hunger)
    babyYoda.hunger--
    console.log('test feeding')
}

function makeGroguSleep () {
    babyYoda.sleepiness -= 1
}

function playWithGrogu () {
    babyYoda.boredom -= 1
}

// document.body.appendChild (i'll append the results of my for loop that runs through the array of 1-10)

//AGE
//INCREASE PET'S AGE EVERY X MINUTES
//
//EVENT LISTENERS FOR BUTTONS
document.getElementById('Feed').addEventListener('click', () => {feedGrogu()})
document.getElementById('Sleep').addEventListener('click', makeGroguSleep)
document.getElementById('Play').addEventListener('click', playWithGrogu)


//for reference:
//for (let i = 0; i<lands.length; i++){

    // console.log(lands[i])
//     let article = document.createElement("article")

//     article.setAttribute('id', lands[i])

//     let h1 = document.createElement("h1")
//     let h1Text = h1.innerText = lands[i]
//     article.innerText = h1Text
//     realmSec.appendChild(article)

//   document.body.appendChild(realmSec)