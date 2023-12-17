function combat(player) {
    let choice = ["rock", "paper", "scissors"]
    let playerPoints = 0
    let bumPoints = 0
    let round = 0
    let win = false

    while (playerPoints < 3 && bumPoints < 3 && round < 6) {
    
        let bum_choice = (choice[Math.floor(Math.random()*choice.length)])
        console.log(bum_choice)
        let player_choice = prompt("Round " + round + ". Choose your next move (rock, paper, scissors)").toLowerCase()
    
        switch (player_choice) {
            case "rock":
                if (bum_choice == "rock") {
                    alert("the bum chose rock,it's a draw. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)
                } else if (bum_choice == "paper") {
                    bumPoints++
                    alert("the bum chose paper, you've lost this round. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)
                } else {
                    playerPoints++
                    alert("the bum chose scissors, you've won this round. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)
                }
                break;
            case "paper":
                if (bum_choice == "rock") {
                    playerPoints++
                    alert("the bum chose rock,you've won this round. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)                            
                } else if (bum_choice == "paper") {
                    alert("the bum chose paper, it's a draw. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)
                } else {
                    bumPoints++
                    alert("the bum chose scissors, you've lost this round. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)
                }
                break;
            case "scissors":
                if (bum_choice == "rock") {
                    bumPoints++
                    alert("the bum chose rock,you've lost this round. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)
                } else if (bum_choice == "paper") {
                    playerPoints++
                    alert("the bum chose paper, you've won this round. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)
                } else {
                    alert("the bum chose scissors, it's a draw. \n\n"+ player.first_name +" score: " + playerPoints + "\nbum score: " + bumPoints)
                }
                break;
            default:
                alert("I don't understand that, try again.")
        } 
    }

    if (playerPoints >= 3 || playerPoints > bumPoints) {
        alert("You've won " + playerPoints + " to " + bumPoints + ", nice job.")
        win=true
    } else if (bumPoints >= 3 || bumPoints > playerPoints) {
        alert("You've' lost " + playerPoints + " to " + bumPoints)
    } else {
        alert("It's a draw. " + playerPoints + " to " + bumPoints + "\nThe bum is still standing and ready to fight.\nYou have no other option but to fight again. \nGet ready for another round!")
        combat()
    }

    return win
}

export {combat}