import { aboutme, prof } from './Script.js'

function ToggleDisplay() {
  if (aboutme.classList.contains('CurrentItem')) {
    var CurrentlyDisplayed = document.querySelectorAll('.CurrentItem')

    for (var e = 0; e < CurrentlyDisplayed.length; e++) {
      CurrentlyDisplayed[e].classList.remove('CurrentItem')
      // setTimeout(heightChange, 1000);
      console.log('Removed .CurrentItem')
    }
  } else {
    aboutme.classList.add('CurrentItem')
    // setTimeout(heightChange, 1000);
  }
}

let Scrollable = true

function ToggleSmoothScroll() {
  console.log(Scrollable)
  if (Scrollable) {
    // document.getElementById("Exclude").href = "#AboutHere";
    Scrollable = false
  } else {
    // document.getElementById("Exclude").href = "#";
    Scrollable = true
  }
  console.log(document.querySelector('#AboutHere'))
}

prof.addEventListener('click', () => {
  ToggleDisplay()
  ToggleSmoothScroll()
})
