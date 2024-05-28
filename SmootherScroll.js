let Scrollbar = window.Scrollbar;

Scrollbar.use(window.OverscrollPlugin);

const options = {
      plugins: {
        overscroll: true,
        anchor: true,
      },
      'damping' : 0.05,
      'renderByPixels' : false
    }



function myFunction(Hoverable) {
  if (Hoverable.matches) { // If media query matches
    console.log("naur")
  } else {
    Scrollbar.init(document.querySelector('.main'), options);
  }
}

// Create a MediaQueryList object
var Hoverable = window.matchMedia("(hover: none)")

// Call listener function at run time
myFunction(Hoverable);

// Attach listener function on state changes
Hoverable.addEventListener("change", function() {
  myFunction(Hoverable);
});

//YxN