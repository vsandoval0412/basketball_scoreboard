//Home Functions

let homeScoreBtnOne = document.getElementById("home1")
let storeHomeEl = document.getElementById("homescore")
let homePoints = 0

function homeScoreOne() {
    homePoints += 1
    storeHomeEl.textContent = homePoints
}

function homeScoreTwo() {
    homePoints += 2
    storeHomeEl.textContent = homePoints
}

function homeScoreThree() {
    homePoints += 3
    storeHomeEl.textContent = homePoints
}

//Guest Functions
let guestScoreBtnOne = document.getElementById("guest1")
let storeGuestEl = document.getElementById("guestscore")
let guestPoints = 0

function guestScoreOne() {
    guestPoints += 1
    storeGuestEl.textContent = guestPoints
}

function guestScoreTwo() {
    guestPoints += 2
    storeGuestEl.textContent = guestPoints
}

function guestScoreThree () {
    guestPoints += 3
    storeGuestEl.textContent = guestPoints
}


//Reset Function
let resetScoreBTN = document.getElementById("resetbtn")

function reset() {
    storeHomeEl.textContent = 0
    storeGuestEl.textContent = 0
    homePoints = 0
    guestPoints = 0

}
   