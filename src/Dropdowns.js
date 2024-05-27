function ToggleDisplay() {
  if (aboutme.classList.contains("CurrentItem")) {
    var CurrentlyDisplayed = document.querySelectorAll(".CurrentItem");


    for (var e = 0; e < CurrentlyDisplayed.length; e++) {
      CurrentlyDisplayed[e].classList.remove("CurrentItem");
      // setTimeout(heightChange, 1000); 
      console.log("Removed .CurrentItem");
    }
  } else {
    aboutme.classList.add("CurrentItem");
    // setTimeout(heightChange, 1000);
  }
}


let Scrollable = true;
let HashAdded = document.querySelector("#AboutHere");

function ToggleSmoothScroll() {
  console.log(Scrollable);
  if (Scrollable) {
    HashAdded.setAttribute('id', 'AboutHere');
    Scrollable = false;
  } else {
    
    HashAdded.removeAttribute('id');
    
    Scrollable = true;
    // setTimeout(heightChange, 1000);
  }
  console.log(document.querySelector("#AboutHere"));
}

prof.addEventListener("click", () => {
  ToggleDisplay();
  ToggleSmoothScroll();
});