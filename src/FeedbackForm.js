const feedback = document.getElementById("FormFill");
const feedbackStatus = document.getElementById("FormStatus");
const feedbackButton = document.getElementById("FormButton");
let spamtext = '';

feedbackButton.addEventListener("click", submitFeedback);

function enableButton() {
  feedbackButton.removeAttribute("disabled");
  feedbackButton.innerHTML = "Submit";
};


function disableButton() {
  feedbackButton.setAttribute("disabled", null);
  if (feedback.value != '') {
    feedbackButton.innerHTML = "Submitted";
    feedbackStatus.innerHTML = "Thank you for the feedback!";
  }
};

function submitFeedback() {
  
  
  // console.log(feedback.value);
  feedbackStatus.innerHTML = "Sending feedback...";
  
  if (feedback.value = 'You and Me') {
    showSecret();
  } else {
    fetch(
      `https://docs.google.com/forms/u/0/d/e/1FAIpQLSf7x_6sWhFNFuHPvO4hW5yxx788PpVLbbSzWcoixIffAQjQjw/formResponse?&entry.1863945483=${feedback.value}&submit=SUBMIT`,
      {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        referrer: "no-referrer",
      }
    )
      .then((res) => {
        console.log(res);
        feedbackStatus.innerHTML = "Thank you for the feedback!";
        spamtext = feedback.value;
      })
      .catch((err) => {
        console.log(err);
        feedbackStatus.innerHTML = "Response not received.";
      });
    disableButton();
  }
  
  
}

feedback.addEventListener('input',() => {
  if (feedback.value == spamtext) {
    disableButton();

  } else {
    enableButton();
    feedbackStatus.innerHTML = "Not Sent";
  };
  if (feedback.value.includes('June 11th') || feedback.value.includes('06 11')) {
    feedbackStatus.innerHTML = "I love you Nesi <3";
  };

  if (feedback.value == 'April 28th') {
    feedbackStatus.innerHTML = "WHAT ARE YOU CHECKING FOR...? ;)";
  }

  // if (feedback.value == 'You and Me') {
  //   showSecret();
  // }
    
  } 
);

function showSecret() {
  var audio = document.getElementById('audio');
  setTimeout(()=>{
    document.getElementsByClassName('alwaysForever')[0].classList.remove("classClose");
    audio.play();
  },50);
  document.querySelector('.alwaysForever.classClose').style.setProperty("display", 'flex');
}

