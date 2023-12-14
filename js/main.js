
let choice = ["pierre", "papier", "ciseaux"]
let playerPoints = 0
let aiPoints = 0
let round = 0


function rpc() {
}


// choose a random option for the computer
function ai() {
    let choice = ["rock", "paper", "cisors"]
    return (choice[Math.floor(Math.random()*choice.length)])
}





while (playerPoints >= 3 || aiPoints >=3 || round >= 5) {
    let player_choice = prompt("choose your next move (rock, paper, cisors")
    let ai_choice = ai()
    console.log(ai_choice)

    switch (player_choice) {
        case "rock":
            if (ai_choice == "rock") {
                console.log("draw")
            }
    }
}