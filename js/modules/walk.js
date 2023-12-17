


function walk() {
    let place = prompt("Where do you want to go? (house/workplace/metro)").toLowerCase()
    
    // case of wrong place
    while (place != "house" && place != "workplace" && place != "metro") {
        alert("Wrong command, please try again.")
        place = prompt("Where do you want to go? (house/workplace/metro)").toLowerCase()
    }
    
    return place
}

export {walk};
