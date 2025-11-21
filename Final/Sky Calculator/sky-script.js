let isShown = true;

//create the event listener
document.getElementById("menu").addEventListener("click", hideBar);


//
function hideBar(){
    
    
    let sideBarHideShow = document.getElementsByClassName('nav')[0];

    let content = document.getElementsByClassName('content')[0];

    if(isShown) { //if currently shown, hide it
        sideBarHideShow.style.display = 'none'

        content.style.position = "absolute"
        content.style.left = "50px"
        content.style.width = "calc(100%-50px)"

        isShown = false;
    }
    else{ //if currently hidden, show it
        sideBarHideShow.style.display = "block"

        content.style.position = "absolute"
        content.style.left = "25vw"
        content.style.width = "65vw"
        isShown = true;
    }
    console.log(sideBarHideShow)
}


//onClick, calculate button
function calculate() {

    // input number of friends you are sending daily hearts to
    let trades = parseInt(document.getElementById('tradesInput').value);
    console.log(typeof trades);
    //let hearts = trades * 3;

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
    let candPerDay = (((candGoal + ((trades * 3) * days)) - currentCand) / days);


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

