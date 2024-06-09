document.addEventListener("mousemove", parallax);

function myFunction(Hoverable) {
  if (Hoverable.matches) {
    // If media query matches
    // console.log("naurParallax");
    document.removeEventListener("mousemove", parallax);
  } else {
    document.addEventListener("mousemove", parallax);
  }
}

// Create a MediaQueryList object
var Hoverable = window.matchMedia("(hover: none) and (max-width: 650px)");

myFunction(Hoverable);

Hoverable.addEventListener("change", function () {
  myFunction(Hoverable);
});

function parallax(e) {
  let w = window.innerWidth / 2;
  let h = window.innerHeight / 2;
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let depth1 = `${(mouseX - w) * -0.0005}% ${(mouseY - h) * -0.00075}%`;
  let depth2 = `${(mouseX - w) * -0.0003}% ${(mouseY - h) * -0.0003}%`;
  let depth3 = `${mouseX}px ${mouseY}px`;
  // let x = `${_depth2}, ${_depth1}`;

  // document.getElementById("Home").style.backgroundPosition = x;
  document.getElementById("smooth").style.setProperty("--x", `${depth1}`);
  // document.body.style.setProperty("--x", `${depth1}`);
  document.getElementById("smooth").style.setProperty("--y", `${depth2}`);
  document.getElementById("cursor").style.setProperty("--z", `${depth3}`);
}
