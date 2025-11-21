// showing the easy way before the simple way :)  The elegant way is actually finding all buttons, and then for each of them in a loop adding an Event Listener.  

function updateTabs(id){
  console.log(id) 

  let about = document.getElementById("aboutPage")
  let calc = document.getElementById("calcPage")
  let three = document.getElementById("three")
  // unlike in the homework where we put everything into an event listener, sometimes it's just easier to put everything into one function and have 1 switch statement. 

  let activeButton = document.getElementsByClassName("active")[0]//because all our buttons have their own unique ids, we can actually 
  
  // let's remove the active button look 

  activeButton.classList.remove("active")

switch (id) {
  case "aboutTab":
    about.style.display = "block"
    document.getElementById("aboutTab").classList.add("active")
    calc.style.display = "none"
    three.style.display = "none"

    break;
  case "calcTab":
    calc.style.display = "block"
    document.getElementById("calcTab").classList.add("active")
    about.style.display = "none"
    three.style.display = "none"
    break;
  case "three-btn":
  three.style.display = "block"
    document.getElementById("three-btn").classList.add("active")
    about.style.display = "none"
    calc.style.display = "none"
  
    break;
     
  default:
    console.log ("error! if you see this, that means that there is an error in the switch statement and it's not passing the correct button id ")
}


}


//onClick, calculate button
function calculate() {

    // input number of friends you are sending daily hearts to
    let trades = parseInt(document.getElementById('tradesInput').value);
    console.log(typeof trades);
    let hearts = trades * 3;

    //input number of days left until deadline
    let days = parseInt(document.getElementById('daysInput').value);
    console.log(typeof days);

    // input number of total desired candles by end of time period
    let candGoal = parseInt(document.getElementById('candGoalInput').value);
    console.log(typeof candGoal);

    //input number of current candles
    let currentCand = parseInt(document.getElementById('currentCandInput').value);
    console.log(typeof currentCand);


    //calculation
    let candPerDay = (((candGoal + (hearts * days)) - currentCand) / days);


    // //EXAMPLE HERE
    // let trades = 2
    // let hearts = trades * 3;
    // let days = 6;
    // let candGoal = 80;
    // let currentCand = 40;

    // let candPerDay = ((candGoal + (hearts * days) - currentCand) / days);
    // //calculation should equal 12.66666667 something


    let message = document.getElementById('message');

    message.innerHTML = candPerDay.toFixed(1) + " testing";

    console.log(candPerDay);


}

