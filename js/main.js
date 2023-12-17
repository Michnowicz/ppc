import { walk } from "./walk.js";
import { combat } from "./combat.js";
import { bum } from "./bum.js";

// player object
let player = {
    first_name: "",
    last_name: "",
    difficulty: "",
    inventory: [],
    position: "",
    life: 1
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


/*////////// character location //////////*/
player.position = walk()
let choice = ""

while (player.inventory.length < 3 && player.life > 0) {
    if (bum_position.includes(player.position)) {
        choice = prompt("A bum is squatting this place, he's trying to pick up a fight with you.\nWhat do you do?\n\n fight\n search\n walk").toLowerCase()
        while (bum_position.includes(player.position) && player.life > 0) {
            if (choice == "fight") {
                alert("The bum is rushing you with his hand behind his back.\nPrepare to fight!")
                let win = combat(player)
                if (win == false) {
                    player.life--
                    player.position=""
                    alert("The bum won.\n In this fight, you've lost not only your life but also your dignity.")
                } else {
                    alert("The bum is lying dead in a pile of blood.\n The cops will get there soon, don't stay here for too long.")
                    bum_position.splice(bum_position.indexOf(player.position), 1)
                }
            } else if (choice == 'walk') {
                alert("The bum is blocking the way out. Your only choice is to fight him")
                choice = prompt("What do you do?\n\n fight\n search\n walk").toLowerCase()
            } else if (choice == "search") {
                alert("There is a bum in front of you. You cannot do this right now.")
                choice = prompt("What do you do?\n\n fight\n search\n walk").toLowerCase()
            } else {
                alert("Wrong command, please try again.")
                choice = prompt("What do you do?\n\n fight\n search\n walk").toLowerCase()
            }     
        } 
    }
    choice = prompt("You're at the " + player.position + "\n What do you do?\n\n walk\n search \n wait").toLowerCase()
    if (choice == "walk") {
        let place = walk()
        while (place == player.position) {
            alert("You're already there. select a valid destination.")
            place = walk()
        }
        player.position = place
        alert("You rush through the exit and in no time you arrive at your new destination.")
    } else if (choice == "search") {
        if (player.position == "house") {
            if (player.inventory.includes("keys")) {
                alert("You're searching the area but find nothing")
            } else {
                alert("You're searching the area and find some keys")
                player.inventory.push("keys")
            }
        } else if (player.position == "workplace") {
            if (player.inventory.includes("binder")) {
                alert("You're searching the area but find nothing")
            } else {
                alert("You're searching the area and find a binder")
                player.inventory.push("binder")
            }
        } else if (player.position == "metro") {
            if (player.inventory.includes("needle")) {
                alert("You're searching the area but find nothing")
            } else {
                alert("You're searching the area and find a needle")
                player.inventory.push("needle")
            }
        }
    } else if (choice == "wait") {
        alert("You're contemplating the place. You've just wasted some time")
    } else {
        alert("Wrong command, please try again.")
    }
}
if(player.inventory.length == 3) {
    alert("You found all the items.\nYou won the game, nice job.")
} else {
    alert("You have no life left. \nGame over.")
}  



