prof.addEventListener("click", ToggleDisplay);

function ToggleDisplay() {
  if (aboutme.classList.contains("CurrentItem")) {
    var CurrentlyDisplayed = document.querySelectorAll(".CurrentItem");

    for (var e = 0; e < CurrentlyDisplayed.length; e++) {
      CurrentlyDisplayed[e].classList.remove("CurrentItem");
      console.log("Removed .CurrentItem");
    }
  } else {
    aboutme.classList.add("CurrentItem");
  }
}

dgtitle.addEventListener("click", ToggleContainer);

function ToggleContainer() {
    
  if (contain.classList.contains("CurrentCont")) {
    var CurrentlyDisplayed = document.querySelectorAll(".CurrentCont");

    for (var e = 0; e < CurrentlyDisplayed.length; e++) {
      CurrentlyDisplayed[e].classList.remove("CurrentCont");
      console.log("Removed .CurrentCont Container");
    }
  } else {
    contain.classList.add("CurrentCont");
    console.log("added .CurrentCont Container");
  }
}
