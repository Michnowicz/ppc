import { walk } from "./modules/walk.js";
import { combat } from "./modules/combat.js";
import { bum } from "./modules/bum.js";

// player object
let player = {
    first_name: "",
    last_name: "",
    difficulty: "",
    inventory: []
}

// all places
let places = ["house", "workplace", "metro"]

// player input 
player.first_name = prompt("What's your name?")
player.last_name = prompt("what's your last name?")

// difficulty selection
player.difficulty = prompt("select a difficulty.(easy / hard)").toLowerCase()
// input error
while (player.difficulty != "easy" && player.difficulty != "hard") {
    alert("Wrong command, please try again.")
    player.difficulty = prompt("select a difficulty.(easy / hard)").toLowerCase()
}




/*////////// bum creation //////////*/
let bum_position = bum(player.difficulty)



/*////////// player action //////////*/
let choice = prompt("What do you want to do? (walk / quit / wait)").toLowerCase()
// input error and wait
while (choice != "walk" && choice != "quit") {
    if (choice = "wait") {
        alert("You're contemplating the place. You're just wasting time but oddly it feels good.")
    } else {
        alert("Wrong command, please try again.")
    }
    choice = prompt("What do you want to do? (walk / quit / wait)").toLowerCase()
}



if (choice == "walk") {
    choice = walk()
    
} 
