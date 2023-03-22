const prof = document.getElementById("ProfileImage");
const socT = document.getElementById("SocialTwitter");
const socI = document.getElementById("SocialInstagram");
const socR = document.getElementById("SocialReddit");
const socL = document.getElementById("SocialLinkedin");
const cont = document.getElementsByClassName("InfoContainer")[0];
const contovr = document.getElementsByClassName("ContainerOverlay")[0];
const contact = document.getElementsByClassName("FeedbackText")[0];
const abouttext = document.getElementsByClassName("AboutMeText")[0];
const aboutme = document.getElementsByClassName("AboutMe")[0];
const aboutbody = document.getElementsByClassName("AboutBody")[0];
const BGText = document.getElementById("TextClass");
const clickMe = document.getElementById("AboutMeHint");
const hoverClass = document.getElementById("HoverClass");

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
const ClickOpacity = [{ opacity: "0" }, { opacity: "1" }];

const ScaleOut = [{ transform: "scale(1)" }, { transform: `scale(0.9)` }];

const MaxWidth1 = 1000;

function resize() {
  console.log("Resized?");
  if (window.innerWidth < 400) {
    social1X = 60;
    social1Y = 60;
    social2X = 70;
    social2Y = -100;
  } else {
    social1X = 115;
    social1Y = 122;
    social2X = 170;
    social2Y = 0;
  }
  twitter = [
    { transform: "translate(0px, 0px) scale(1)" },
    { transform: `translate(${-social1X}px,${social1Y}px) scale(0.7)` },
  ];
  instagram = [
    { transform: "translate(0px, 0px) scale(1)" },
    { transform: `translate(${social1X}px,${social1Y}px) scale(0.7)` },
  ];
  reddit = [
    { transform: "translate(0px, 0px) scale(1)" },
    { transform: `translate(${-social2X}px, ${social2Y}px) scale(0.7)` },
  ];
  linkedin = [
    { transform: "translate(0px, 0px) scale(1)" },
    { transform: `translate(${social2X}px, ${social2Y}px) scale(0.7)` },
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
    abouttext.style.paddingBottom = 0 + window.pageYOffset / 120 + "%";
    aboutbody.style.backgroundPositionY = 70 - window.pageYOffset / 50 + "%";
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
  if (window.innerWidth > 700){
    clickMe.animate(ClickOpacity, NormalTime);
  }
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
  if (window.innerWidth > 700){
    clickMe.animate(ClickOpacity, ReverseTime);
  }
  socR.animate(reddit, ReverseTime);
  socL.animate(linkedin, ReverseTime).onfinish = () => {
    animating = false;
    if (hovered) Hover(false);
  };
  // BGText.animate(ScaleOut, ReverseTime)
}

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

// modal
const modal = document.getElementById("MyModal");
const imgs = document.getElementsByClassName("MyImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("Caption");

const viewer = new Viewer(document.getElementById("Gallery"), {
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
      show: 1,
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
      show: 1,
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
