
function bum(difficulty) {
    let possibility = ["house", "workplace", "metro"]
    let bum_position = []
    let position = ""
    
    if (difficulty == "easy") {
        position = possibility[Math.floor(Math.random()*possibility.length)]
        bum_position.push(position)
    } else if (difficulty == "hard") {
        for (let index = 1; index <= 2; index++) {
            position = possibility[Math.floor(Math.random()*possibility.length)]
            while (bum_position.includes(position) == true) {
                position = possibility[Math.floor(Math.random()*possibility.length)]
            }
            bum_position.push(position)
            possibility.splice(possibility.indexOf(position), 1)
        }
    }
    console.log(possibility)
    return bum_position
    
}
export {bum}