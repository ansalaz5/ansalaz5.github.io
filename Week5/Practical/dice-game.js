//focus
function inputFocus(id){
    id.style.backgroundColor = "white"
    id.style.color = "black"
}

//USERNAME INTERACTIVITY

function saveName(){
    let name = document.getElementById("username");

    //error input
    if (name.value == "" || name.value == " " || name.value == "Character's Name" || name.value == "Please provide valid name")
    {
        name.style.backgroundColor = "white"
        name.style.color = "red"
        name.style.border = "2px red solid"
        name.value = "Please provide valid name"
    }

    //valid input
    else {
        name.style.backgroundColor = "white"
        name.style.color = "black"
        name.style.border = "0px white solid"

        let welcome = document.getElementById("welcome")
        welcome.innerHTML = `Welcome ${name.value}`
        return name.value
    }

}


//NAME GENERATION
function generateName(){
    
    let name = document.getElementById("username")
    
    const firstName = ["Shah", "Lara", "Master", "Zelda", "Isaac", "Karlach"]
    const lastName = ["Rukh-Khan", "Croft", "Chief", "Hyrule", "Clarke", "Cliffgate"]

    let stringName = firstName[Math.floor(Math.random()*6)] + " " + lastName[Math.floor(Math.random()*6)]
    if(stringName.includes("undefined")){
        name.value = "Leeroy Jenkins"
    }

    else{
        name.value = stringName; 
    }
}
 

//DICE ROLL
function diceRoll(id){
    let diceRoll = Math.floor(Math.random()*20+1)
    let diceSvg = document.getElementById('dice')
    let name = document.getElementById("username");
    id.innerHTML = diceRoll


    if(name.value == "" || name.value == " " || name.value == "Character's Name" || name.value == "Please provide valid name")
    {
        alert("Please provide a name before continuing.")

    } else {

        narrativeOutcome(diceRoll)

        //Roll Color
        if(diceRoll == 1){ //nat 1
            diceSvg.style.stroke = "red"
            diceSvg.style.strokeWidth = "5px"
            id.innerHTML = `CRITICAL FAILURE <br/> ${diceRoll}`
        }

        else if(diceRoll == 20){ //nat 20
            diceSvg.style.stroke = "green"
            diceSvg.style.strokeWidth = "5px"
            id.innerHTML = `CRITICAL SUCCESS <br/> ${diceRoll}`       
        }

        else { //average roll
            diceSvg.style.stroke = "green"
            diceSvg.style.strokeWidth = "0px"
            id.innerHTML = diceRoll
        }
    }

}


//NARRATIVE
function narrativeOutcome(){
    let outcome = document.getElementById("outcome")

    if (dice == 1){
        outcome.innerHTML = `You rolled a ${dice} <p>Critical Failure <br/> You get so mad that you walk into the dragon's fire and you ask why do you do this?</p>`
    }

    else if(dice >= 2 && dice <= 11){
        outcome.innerHTML = `You rolled a ${dice} <p>You realize that you're in Skyrim and you hate it. You really wanted to be in Fallout.</p>`
    }

    else if(dice >= 12 && dice <= 19){
        outcome.innerHTML = `You rolled a ${dice} <p>You're in Skyrom, and you've played this game sooo many times it's modded and you're already trying to break it.</p>`
    }

    else if(dice == 20){
        outcome.innerHTML = `You rolled a ${dice} <p><b>Critical Success<b><p>You turn off your PC/Xbox.Switch/PS/Fridge</p>`
    }

}
/*
function diceRoll(id){
  let name = document.getElementById("username");
  if(name.value == "" || name.value == " " || name.value == "Character's Name" || name.value == "Please provide valid name")
    {
    alert("Please provide a name before continuing.");
  } else {
    let d20 = document.getElementById("dice");
    let roll = Math.floor(Math.random() * 20 + 1);
    id.innerHTML = roll;

    switch (roll) {
      case 1:
        d20.style.stroke = "red";
        d20.style.strokeWidth = "10px";
        break;
      case 20:
        d20.style.stroke = "green";
        d20.style.strokeWidth = "10px";
        break;
      default:
        d20.style.stroke = "white";
        d20.style.strokeWidth = "1px";
        break;
    }

    narrativeOutcome(roll); 

    
  }
}
*/