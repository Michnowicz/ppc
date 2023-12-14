
function rpc() {
    let choice = ["rock", "paper", "cisors"]
    let playerFinalScore = 0
    let pcFinalScore = 0
    let run = prompt("do you want to play? (y?n)")

    

   

    while (run != "n") {
        
        while (run == "y") {
            let playerPoints = 0
            let pcPoints = 0
            let round = 0
            let win = false
    
            while (playerPoints < 3 && pcPoints < 3 && round < 6) {
            
                let pc_choice = (choice[Math.floor(Math.random()*choice.length)])
                console.log(pc_choice)
                let player_choice = prompt("Round " + round + ". Choose your next move (rock, paper, cisors)")
            
                switch (player_choice) {
                    case "rock":
                        if (pc_choice == "rock") {
                            alert("the pc chose rock,it's a draw")
                        } else if (pc_choice == "paper") {
                            alert("the pc chose paper, you've lost this round.")
                            pcPoints++
                        } else {
                            alert("the pc chose cisors, you've won this round.")
                            playerPoints++
                        }
                        alert("player score: " + playerPoints + " | pc score: " + pcPoints)
                        break;
                    case "paper":
                        if (pc_choice == "rock") {
                            alert("the pc chose rock,you've won this round.")
                            playerPoints++
                        } else if (pc_choice == "paper") {
                            alert("the pc chose paper, it's a draw.")
                        } else {
                            alert("the pc chose cisors, you've lost this round.")
                            pcPoints++
                        }
                        alert("player score: " + playerPoints + " | pc score: " + pcPoints)
                        break;
                    case "cisors":
                        if (pc_choice == "rock") {
                            alert("the pc chose rock,you've lost this round.")
                            pcPoints++
                        } else if (pc_choice == "paper") {
                            alert("the pc chose paper, you've won this round.")
                            playerPoints++
                        } else {
                            alert("the pc chose cisors, it's a draw.")
                        }
                        alert("player score: " + playerPoints + " | pc score: " + pcPoints)
                        break;
                    default:
                        alert("I don't understand that, try again.")
                }
                if (choice.includes(player_choice) == true ) {
                    round++
                }
            }
            
            if (playerPoints >= 3 || playerPoints > pcPoints) {
                alert("You've won " + playerPoints + " to " + pcPoints + ", nice job.")
                win=true
                playerFinalScore++
            } else if (pcPoints >= 3 || pcPoints > playerPoints) {
                alert("You've lost " + playerPoints + " to " + pcPoints + ", better luck next time.")
                pcFinalScore++
            } else {
                alert("It's a draw. " + playerPoints + " to " + pcPoints)
            }
    
            run = prompt("another round? (y?n)")
            while (run != "n" && run != "y") {
                alert("wrong command, try again")
                run = prompt("do you want to play? (y?n)")
            }
        }
        if (run != "y" && run != "n") {
            alert("wrong command, try again")
            run = prompt("do you want to play? (y?n)")
        }
    }

    if (playerFinalScore > 0 || pcFinalScore >0) {
        alert("final score: \n Player: " + playerFinalScore + " \n pc: " + pcFinalScore)
    }

    alert("Have a nice day.")
}


rpc()
