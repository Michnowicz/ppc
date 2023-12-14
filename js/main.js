
function rpc() {
    let choice = ["rock", "paper", "scissors"]
    let playerFinalScore = 0
    let pcFinalScore = 0
    let run = prompt("do you want to play? (y?n)").toLowerCase()

    

   

    while (run != "n") {
        
        while (run == "y") {
            let playerPoints = 0
            let pcPoints = 0
            let round = 0
            let win = false
    
            while (playerPoints < 3 && pcPoints < 3 && round < 6) {
            
                let pc_choice = (choice[Math.floor(Math.random()*choice.length)])
                console.log(pc_choice)
                let player_choice = prompt("Round " + round + ". Choose your next move (rock, paper, scissors)").toLowerCase()
            
                switch (player_choice) {
                    case "rock":
                        if (pc_choice == "rock") {
                            alert("the pc chose rock,it's a draw. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                        } else if (pc_choice == "paper") {
                            alert("the pc chose paper, you've lost this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                            pcPoints++
                        } else {
                            alert("the pc chose scissors, you've won this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                            playerPoints++
                        }
                        break;
                    case "paper":
                        if (pc_choice == "rock") {
                            alert("the pc chose rock,you've won this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                            playerPoints++
                        } else if (pc_choice == "paper") {
                            alert("the pc chose paper, it's a draw. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                        } else {
                            alert("the pc chose scissors, you've lost this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                            pcPoints++
                        }
                        break;
                    case "scissors":
                        if (pc_choice == "rock") {
                            alert("the pc chose rock,you've lost this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                            pcPoints++
                        } else if (pc_choice == "paper") {
                            alert("the pc chose paper, you've won this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                            playerPoints++
                        } else {
                            alert("the pc chose scissors, it's a draw. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                        }
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
    
            run = prompt("another round? (y?n)").toLowerCase()
            while (run != "n" && run != "y") {
                alert("wrong command, try again")
                run = prompt("do you want to play? (y?n)").toLowerCase()
            }
        }
        if (run != "y" && run != "n") {
            alert("wrong command, try again")
            run = prompt("do you want to play? (y?n)").toLowerCase()
        }
    }

    if (playerFinalScore > 0 || pcFinalScore > 0) {
        alert("final score: \n\nPlayer: " + playerFinalScore + " \npc: " + pcFinalScore)
    }

    alert("Have a nice day.")
}


rpc()
