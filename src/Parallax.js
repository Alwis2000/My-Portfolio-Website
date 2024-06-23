document.addEventListener('mousemove', parallax);

function myFunction(Hoverable) {
  if (Hoverable.matches) {
    // If media query matches
    document.removeEventListener('mousemove', parallax);
  } else {
    document.addEventListener('mousemove', parallax);
  }
}

var Hoverable = window.matchMedia('(hover: none) and (max-width: 650px)');

myFunction(Hoverable);

Hoverable.addEventListener('change', function () {
  myFunction(Hoverable);
});

function parallax(e) {
  let w = window.innerWidth / 2;
  let h = window.innerHeight / 2;
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let depth1 = `${(mouseX - w) / 5000}%, ${(mouseY - h) / 5000}%`;
  let depth2 = `${(mouseX - w) / 5000}%, ${(mouseY - h) / 5000}%`;

  document.getElementById('smooth').style.setProperty('--x', `${depth1}`);
  document.getElementById('smooth').style.setProperty('--y', `${depth2}`);
}
