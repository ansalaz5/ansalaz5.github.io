//updateTabs function source reference: Ishrat Lallmamode

//switch between tabs/pages
function updateTabs(id){
  console.log(id) 

  let about = document.getElementById("aboutPage")
  let calc = document.getElementById("calcPage")
  let season = document.getElementById("seasonPage")

  //stores which page user is currently on
  let activeButton = document.getElementsByClassName("active")[0];
  
  //removes active button look after leaving the page
  activeButton.classList.remove("active")

  //toggles between tabs/pages
  switch (id) {
    case "aboutTab":
      about.style.display = "block"
      document.getElementById("aboutTab").classList.add("active")
      calc.style.display = "none"
      season.style.display = "none"

      break;
    case "calcTab":
      calc.style.display = "block"
      document.getElementById("calcTab").classList.add("active")
      about.style.display = "none"
      season.style.display = "none"
      break;

    case "seasonTab":
      season.style.display = "block"
      document.getElementById("seasonTab").classList.add("active")
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
    let hearts = trades * 3; //amount of candles spent on hearts per day

    //input number of days left until deadline
    let days = parseInt(document.getElementById('daysInput').value);
    console.log(typeof days);

    //input number of total desired candles by end of time period
    let candGoal = parseInt(document.getElementById('candGoalInput').value);
    console.log(typeof candGoal);

    //input number of current candles
    let currentCand = parseInt(document.getElementById('currentCandInput').value);
    console.log(typeof currentCand);


    //calculation
    let candPerDay = (((candGoal + (hearts * days)) - currentCand) / days);


    // EXAMPLE HERE
    // trades = 2 (hearts = trades * 3)
    // days = 6
    // candGoal = 80
    // currentCand = 40
    // calculation should equal 12.66666667

    let message = document.getElementById('message');

    //change message to output result 
    message.innerHTML = candPerDay.toFixed(1) + " candles needed per day";

    console.log(candPerDay);


}
