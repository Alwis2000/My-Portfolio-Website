//basic
const cont = document.getElementsByClassName("InfoContainer")[0];
const contovr = document.getElementsByClassName("ContainerOverlay")[0];
//quirky
export const prof = document.getElementById("ProfileImage");
const socT = document.getElementById("socialTwitter");
const socD = document.getElementById("socialDiscord");
const socR = document.getElementById("socialReddit");
const socL = document.getElementById("socialLinkedin");
const BGText = document.getElementById("TextClass");
const hoverClass = document.getElementById("HoverClass");
//aboutme
const abouttext = document.getElementsByClassName("AboutMeText")[0];
export const aboutme = document.getElementsByClassName("AboutMe")[0];
const aboutBod = document.getElementsByClassName("AboutBody")[0];
const aboutbody = document.getElementById("AboutImage");
//feedback
const contact = document.getElementsByClassName("FeedbackText")[0];
const contain = document.getElementsByClassName("ContainerDropdown")[0];
const dgtitle = document.getElementById("DGTitle");
//Gallery
const gallimgs = document.getElementsByClassName("image");

// get theme on page load

let social1X, social1Y, social2X, social2Y;
let hovered = false;
let animating = false;

const hoverAnimDur = 400; // milliseconds
const NormalTime = {
  duration: 300,
  iterations: 1,
  fill: "forwards",
  direction: "normal",
  easing: "ease",
};
const NormalTimeSlower = {
  duration: 400,
  iterations: 1,
  fill: "forwards",
  direction: "normal",
  easing: "ease",
};
const ReverseTime = {
  duration: 250,
  iterations: 1,
  fill: "forwards",
  direction: "reverse",
  easing: "ease",
};
const Scaleintime = {
  duration: 400,
  iterations: 1,
  fill: "forwards",
  direction: "normal",
  easing: "ease",
};

let twitter, instagram, reddit, linkedin;

function resize() {
  if (window.innerWidth < 400) {
    social1X = 170;
    social1Y = 190;
    social2X = 240;
    social2Y = 40;
  } else {
    social1X = 170;
    social1Y = 190;
    social2X = 240;
    social2Y = 40;
  }
  twitter = [
    { transform: "translate(0px, 0px) scale(.5)" },
    { transform: `translate(${-social1X}px,${social1Y}px) scale(.9)` },
  ];
  instagram = [
    { transform: "translate(0px, 0px) scale(.5)" },
    { transform: `translate(${social1X}px,${social1Y}px) scale(.9)` },
  ];
  reddit = [
    { transform: "translate(0px, 0px) scale(.5)" },
    { transform: `translate(${-social2X}px, ${social2Y}px) scale(.8)` },
  ];
  linkedin = [
    { transform: "translate(0px, 0px) scale(.5)" },
    { transform: `translate(${social2X}px, ${social2Y}px) scale(.8)` },
  ];
  NHover();
}

resize();
window.addEventListener("resize", resize);
document.getElementById("HoverClass").addEventListener('mouseenter', () => Hover(true))
document.getElementById("HoverClass").addEventListener('mouseleave', () => NHover(true))
export function Hover(real) {
  // console.log(`${real ? "Real" : "Fake"} Hovered`);
  hovered = true;
  //here we have this check so that we don't restart the animation
  if (animating) return;
  animating = true;
  //the animation data itself
  socT.animate(twitter, NormalTime);
  socD.animate(instagram, NormalTime);
  socR.animate(reddit, NormalTimeSlower);
  socL.animate(linkedin, NormalTimeSlower).onfinish = () => {
    animating = false;
    if (!hovered) NHover(false);
  };
  // console.log(socL);
}

export function NHover(real) {
  // console.log(`${real ? "Real" : "Fake"} Stopped Hovering`);
  hovered = false;
  if (animating) return;
  animating = true;
  socT.animate(twitter, ReverseTime);
  socD.animate(instagram, ReverseTime);
  socR.animate(reddit, ReverseTime);
  socL.animate(linkedin, ReverseTime).onfinish = () => {
    animating = false;
    if (hovered) Hover(false);
  };
}



const viewer = new Viewer(document.getElementById("GalleryWrap"), {
  view: () => {
    const viewerTitle = document.getElementById("viewerTitle0");
    const observer = new MutationObserver(() => {
      if (viewerTitle.innerText.trim().length === 0) return;
      viewerTitle.innerHTML = viewerTitle.innerText;
      observer.disconnect();
    });
    observer.observe(viewerTitle, {
      characterData: false,
      childList: true,
      attributes: false,
    });
  },
  toolbar: {
    
    prev: {
      show: 0,
      size: "large",
    },
    zoomIn: 0,
    zoomOut: 0,
    oneToOne: 0,
    reset: {
      show: 1,
      size: "large",
    },
    play: {
      show: 0,
      size: "large",
    },
    next: {
      show: 0,
      size: "large",
    },
    rotateLeft: 0,
    rotateRight: 0,
    flipHorizontal: 0,
    flipVertical: 0,
  },
  title: [1, (image, imageData) => `${image.alt}`],
  zoomRatio: [0.2],
  toggleOnDblclick: [false],
});

const infButton = document.querySelector("#infoToggle");
const infBubble = document.querySelector(".infoBubble");

infButton.addEventListener('click',showMessage)
let isVisible = false
function showMessage() {
  if (isVisible == false) {
    isVisible = true
    infBubble.classList.remove("classClose");
  } else {
    isVisible = false
    infBubble.classList.add("classClose");
  }
  
}

