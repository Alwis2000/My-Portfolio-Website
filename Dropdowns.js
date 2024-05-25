prof.addEventListener("click", ToggleDisplay );
// prof.addEventListener("click", ToggleSmoothScroll );

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

// function ToggleSmoothScroll() {
//   if (aboutBod.classList.contains("AboutHere")) {
//     // var CurrentlyDisplayed = document.querySelectorAll(".CurrentItem");
//     var Aboutme = document.querySelector(".AboutHere");
//     console.log(Aboutme);

//     for (var e = 0; e < CurrentlyDisplayed.length; e++) {
//       CurrentlyDisplayed[e].classList.add("AboutHere");
//       // setTimeout(heightChange, 1000); 
//       console.log("added .AboutHere");
//     }
//   } else {
//     aboutme.classList.remove("AboutHere");

//     // setTimeout(heightChange, 1000);
//   }
// }