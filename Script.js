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
// const ClickOpacity = [{ opacity: "0" }, { opacity: "1" }];

const ScaleOut = [{ transform: "scale(0.5)" }, { transform: `scale(2)` }];

const MaxWidth1 = 1000;

function resize() {
  if (window.innerWidth < 400) {
    social1X = 60;
    social1Y = 60;
    social2X = 70;
    social2Y = -100;
  } else {
    social1X = 140;
    social1Y = 142;
    social2X = 185;
    social2Y = 110;
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

window.addEventListener("scroll", function () {
  // soc.style.opacity = 1 - +window.pageYOffset / 200 + '';
  socT.style.scale = 100 - window.pageYOffset / 5 + "%";
  socI.style.scale = 100 - window.pageYOffset / 5 + "%";
  socR.style.scale = 100 - window.pageYOffset / 5 + "%";
  socL.style.scale = 100 - window.pageYOffset / 5 + "%";
  prof.style.scale = 100 - window.pageYOffset / 12 + "%";
  clickMe.style.scale = 100 - window.pageYOffset / 12 + "%";
  if (window.innerWidth > 1000) {
    aboutbody.style.backgroundPositionY = 70 - window.pageYOffset / 30 + "%";
  }
  // prof.style.opacity = 1 - +window.pageYOffset / 300 + '';
  prof.style.blur = 10 - +window.pageYOffset + "px";
  contovr.style.opacity = 0 + window.pageYOffset / 300 + "";
  // contact.style.opacity = 0 + (window.pageYOffset-2000) / 300 + '';
});

function Hover(real) {
  console.log(`${real ? "Real" : "Fake"} Hovered`);
  hovered = true;
  //here we have this check so that we don't restart the animation
  if (animating) return;
  animating = true;
  //the animation data itself
  socT.animate(twitter, NormalTime);
  socI.animate(instagram, NormalTime);
  // if (window.innerWidth > 700){
  //   clickMe.animate(ClickOpacity, NormalTime);
  // }
  socR.animate(reddit, NormalTimeSlower);
  socL.animate(linkedin, NormalTimeSlower).onfinish = () => {
    animating = false;
    if (!hovered) NHover(false);
  };
  // BGText.animate(ScaleOut, NormalTime)
}

function NHover(real) {
  console.log(`${real ? "Real" : "Fake"} Stopped Hovering`);
  hovered = false;
  if (animating) return;
  animating = true;
  socT.animate(twitter, ReverseTime);
  socI.animate(instagram, ReverseTime);
  // if (window.innerWidth > 700){
  //   clickMe.animate(ClickOpacity, ReverseTime);
  // }
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

const span = document.getElementsByClassName("Close")[0];

const feedback = document.getElementById("FormFill");
const feedbackStatus = document.getElementById("FormStatus");

function submitFeedback() {
  console.log(feedback.value);
  feedbackStatus.innerHTML = "sending feedback";
  fetch(
    `https://docs.google.com/forms/d/e/1FAIpQLSf7x_6sWhFNFuHPvO4hW5yxx788PpVLbbSzWcoixIffAQjQjw/formResponse?&entry.1498250176=${feedback.value}&submit=SUBMIT`,
    {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      referrer: "no-referrer",
    }
  )
    .then((res) => {
      console.log(res);
      feedbackStatus.innerHTML = "received response";
    })
    .catch((err) => {
      console.log(err);
      feedbackStatus.innerHTML = "response not received";
    });
  console.log("beans");
}

// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 2000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("loaderback").style.display = "none";
//   cont.style.display = "Flex";
// }

