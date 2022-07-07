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

function feedGrogu {
    babyYoda.hunger -= 1
}

function makeGroguSleep {
babyYoda.sleepiness -= 1
}

function playWithGrogu {
    babyYoda.boredom -= 1
}

//first create an array of 1-10
//hold off: array may not be needed for enumerated values here

// document.body.appendChild (i'll append the results of my for loop that runs through the array of 1-10)

//AGE
//INCREASE PET'S AGE EVERY X MINUTES

//EVENT LISTENERS FOR BUTTONS
document.getElementById('Feed').addEventListener('click', feedGrogu)
document.getElementById('Sleep').addEventListener('click', makeGroguSleep)
document.getElementById('Play').addEventListener('click', playWithGrogu)