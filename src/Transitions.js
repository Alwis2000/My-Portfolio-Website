document.addEventListener("DOMContentLoaded", () => {
  setTimeout(Loader, 1000);
});
// document.onload(Loader());

function Loader() {
  const transition_el = document.querySelector(".transition");
  const anchors = document.querySelectorAll("a:not(#Exclude)");
  console.log(anchors);

  setTimeout(() => {
    transition_el.classList.remove("is_active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    console.log(anchor.href);

    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      console.log(anchor.href);

      transition_el.classList.add("is_active");

      setTimeout(() => {
        window.location.href = anchor.href;
      }, 500);
    });
  }
}
