"use strict"


let wins = 0;
let losses = 0;
let ties = 0;



function letsPlay(){
    
    
    //win conditions

    const rock = {
        "R":"Tie",
        "P":"Lose",
        "S":"Win",
    };

    const paper = {
        "R":"Win",
        "P":"Tie",
        "S":"Lose",
    };

    const scissors = {
        "R":"Lose",
        "P":"Win",
        "S":"Tie",
    };

    const outcomes = [rock, paper, scissors];



    //game setup

    let p1;

    let p2;



    //game start

    function pickRPS() {
        const myChoiceNum = Math.floor(Math.random()*3)
        const letterChoices = ["R", "P", "S"];
        return letterChoices[myChoiceNum]
    };

    function fullWord(letter) {
        const wordDict = {"R":"Rock", "P":"Paper", "S":"Scissors"};
        return wordDict[letter]
    };

    p1 = prompt("Choose R, P, or S for rock, paper, or scissors!").toUpperCase();

    p2 = pickRPS();


    alert(`You chose ${fullWord(p1)}!`)
    alert(`The computer chose ${fullWord(p2)}!`)



    //compare

    function turnIntoNum(info) {
        const numberMap = {"R":0, "P":1, "S":2,}
        return numberMap[info]
    };

    let p1NumberValue = turnIntoNum(p1);

    let doesP1Win = outcomes[p1NumberValue][p2];




    //turn into generic win message

    if (doesP1Win === "Tie") {
        ties += 1
        document.getElementById("ties").innerHTML = "Ties: " + ties;
        alert("You tied!")

    }

    else if (doesP1Win === "Win") {
        wins += 1
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        alert("You won!")
    }

    else {
        losses += 1
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        alert("You lost!")
    }
}


