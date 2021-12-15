let hit = 0
let gameHits = 0
let noDouble = 0
let end = 0
let newEntryPress = document.getElementById("hit-grid")
let nextPeriodPress = document.getElementById("entry")
let playerNumber = 1
let periodOne = 1
let periodTwo = 2
let periodThree = 3
let periodIncrement = 14
let player = "player" + playerNumber

function pressHit() {
    hit += 1
    gameHits += 1
}

function newEntry() {
   playerName = document.getElementById("playername").value 
    
    if (noDouble == 0) {
   nextPeriodPress.innerHTML += '<div class="entry-cell">' + playerName + '</div>'
   noDouble = 1
   console.log("This is nodouble" + noDouble)
   console.log("this is the end" + end)
   console.log(nextPeriodPress.innerHTML)
    } else (noDouble == 1)
        console.log("no go, partner")
}

function pressEnd() {
    end += 1
    if (noDouble == 0) {
        console.log("Can't do that I'm afraid.")
        end = 0
    } else if (end == 1) {
       nextPeriodPress.innerHTML +=  '<div class="entry-cell">' + hit + '</div>'
       hit = 0
       console.log("The end of Period 1" + end)
    } else if (end == 2) {
        periodIncrement += 1
        nextPeriodPress.innerHTML += '<div class="entry-cell">' + hit + '</div>'
        hit = 0
        console.log("The end of Period 2" + end)
    } else if (end == 3) {
        periodIncrement +=1
        end = 0
        nextPeriodPress.innerHTML += '<div class="entry-cell">' + hit + '</div> <div class="entry-cell">' + gameHits + '</div>'
        hit = 0 
        gameHits = 0
        noDouble = 0
        console.log("NoDouble at end of game" + noDouble)
        console.log("The end of the Game" + end)
    } else {
        console.log("something is seriously wrong")
        console.log(end)
    }
}
