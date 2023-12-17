function combat() {
    let choice = ["rock", "paper", "scissors"]
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
                    pcPoints++
                    alert("the pc chose paper, you've lost this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                } else {
                    playerPoints++
                    alert("the pc chose scissors, you've won this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                }
                break;
            case "paper":
                if (pc_choice == "rock") {
                    playerPoints++
                    alert("the pc chose rock,you've won this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)                            
                } else if (pc_choice == "paper") {
                    alert("the pc chose paper, it's a draw. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                } else {
                    pcPoints++
                    alert("the pc chose scissors, you've lost this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                }
                break;
            case "scissors":
                if (pc_choice == "rock") {
                    pcPoints++
                    alert("the pc chose rock,you've lost this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                } else if (pc_choice == "paper") {
                    playerPoints++
                    alert("the pc chose paper, you've won this round. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                } else {
                    alert("the pc chose scissors, it's a draw. \n\nplayer score: " + playerPoints + "\npc score: " + pcPoints)
                }
                break;
            default:
                alert("I don't understand that, try again.")
        } 
    }

    if (playerPoints >= 3 || playerPoints > pcPoints) {
        alert("You've won " + playerPoints + " to " + pcPoints + ", nice job.")
        win=true
    } else if (pcPoints >= 3 || pcPoints > playerPoints) {
        alert("You've lost " + playerPoints + " to " + pcPoints + ", better luck next time.")
    } else {
        alert("It's a draw. " + playerPoints + " to " + pcPoints)
    }

    return win
}