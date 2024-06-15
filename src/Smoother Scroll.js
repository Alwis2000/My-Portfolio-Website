const { prof } = require('./Script');

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let clicked = false;

prof.addEventListener('click', () => {
  if (clicked == false) {
    clicked = true;
    lenis.scrollTo('#AboutHere', { offset: -200, duration: 2 });
  } else {
    clicked = false;
  }
});
