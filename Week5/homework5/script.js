let isShown = true;

//create the event listener
document.getElementById("menu").addEventListener("click", hideBar);


//
function hideBar(){
    
    
    let sideBarHideShow = document.getElementsByClassName('navStyle')[0];

    let content = document.getElementsByClassName('container-content')[0];

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