const prof = document.getElementById('ProfileImage');
const socT = document.getElementById('SocialTwitter');
const socI = document.getElementById('SocialInstagram');
const socR = document.getElementById('SocialReddit');
const socL = document.getElementById('SocialLinkedin');
const cont = document.getElementsByClassName('InfoContainer')[0];
const contovr = document.getElementsByClassName('ContainerOverlay')[0];
const contact = document.getElementsByClassName('FeedbackText')[0];
const abouttext = document.getElementsByClassName('AboutMeText')[0];
const aboutme = document.getElementsByClassName('AboutMe')[0]
const aboutbody = document.getElementsByClassName('AboutBody')[0]

let social1X = 130;
let social1Y = 110;
let social2X = 165;
let social2Y = 0;
let hovered = false;

const NormalTime = {
    duration: 300,
    iterations: 1,
    fill: 'forwards',
    direction: "normal",
    easing:"ease",
}
const NormalTime1 = {
    duration: 400,
    iterations: 1,
    fill: 'forwards',
    direction: "normal",
    easing:"ease",
}
const ReverseTime = {
    duration: 250,
    iterations: 1,
    fill: 'forwards',
    direction: "reverse",
    easing:"ease",
}
const Scaleintime = {
    duration: 400,
    iterations: 1,
    fill: 'forwards',
    direction: "normal",
    easing:"ease",
}

const twitter = [{transform: 'translate(0px, 0px) scale(1)'}, {transform: `translate(${-social1X}px,${social1Y}px) scale(0.7)`}];
const instagram = [{transform: 'translate(0px, 0px) scale(1)' }, {transform: `translate(${social1X}px,${social1Y}px) scale(0.7)`}];
const reddit = [{transform: 'translate(0px, 0px) scale(1)' }, {transform: `translate(${-social2X}px, ${social2Y}px) scale(0.7)`}];
const linkedin = [{transform: 'translate(0px, 0px) scale(1)' }, {transform: `translate(${social2X}px, ${social2Y}px) scale(0.7)`}];

const ScaleOut = [{width: '100%', height: '100%'}, {width: 'calc(100% + 15px)',height: 'calc(100% + 15px)'}];

window.addEventListener('scroll', function () {
    // soc.style.opacity = 1 - +window.pageYOffset / 200 + '';
    socT.style.scale = 100 - window.pageYOffset / 5 + '%';
    socI.style.scale = 100 - window.pageYOffset / 5 + '%';
    socR.style.scale = 100 - window.pageYOffset / 5 + '%';
    socL.style.scale = 100 - window.pageYOffset / 5 + '%';
    prof.style.scale = 100 - window.pageYOffset / 12 + '%';
    abouttext.style.paddingTop = 1 + window.pageYOffset /75 + '%';
    aboutbody.style.backgroundPositionY =  70 - window.pageYOffset /50 + '%';
    // prof.style.opacity = 1 - +window.pageYOffset / 300 + '';
    prof.style.blur = 10 - +window.pageYOffset + 'px';
    contovr.style.opacity = 0 + window.pageYOffset / 300 + '';
    // contact.style.opacity = 0 + (window.pageYOffset-2000) / 300 + '';

});

function Hover() {
    console.log("bullshit");
    if (hovered) return
    hovered = true;
    socT.animate(twitter, NormalTime);
    socI.animate(instagram, NormalTime);
    socR.animate(reddit, NormalTime1);
    socL.animate(linkedin, NormalTime1);
}

function NHover() {

    console.log("bullshitted");
    hovered = false;
    socT.animate(twitter, ReverseTime);
    socI.animate(instagram, ReverseTime);

    socR.animate(reddit, ReverseTime);
    socL.animate(linkedin, ReverseTime);
}


prof.addEventListener("click", ToggleDisplay)

function ToggleDisplay() {


    if (aboutme.classList.contains('CurrentItem')) {

        var CurrentlyDisplayed = document.querySelectorAll('.CurrentItem');

        for (var e=0; e<CurrentlyDisplayed.length; e++) {
            
            CurrentlyDisplayed[e].classList.remove('CurrentItem');
            console.log("bullshitting"); 
        } 



    } else {

        aboutme.classList.add('CurrentItem');
    }
}


// modal
const modal = document.getElementById("MyModal");
const imgs = document.getElementsByClassName("MyImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");


for (const img of imgs){
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        console.log(modalImg)
    }
}

const span = document.getElementsByClassName("Close")[0];

span.onclick = function() {
    console.log("bullshi");
    modal.style.display = "none";
}


const clickedmodal = document.getElementById("ModalContentWrap");
let clicked

clickedmodal.onclick = function(){
    clicked=!clicked;
    if (clicked){
        console.log("scaled")
        modalImg.style.scale = 2 ;
    } else {
        console.log("unscaled")
        modalImg.style.scale = 1 ;
    }
}

// image size

// const gallery = document.getElementsByClassName('image')[0]

// gallery.addEventListener("onmouseover", scalesize)

// function scalesize(){
//     image.style.width 
// }
const feedback = document.getElementById('FormFill');
const feedbackStatus = document.getElementById('FormStatus');

function submitFeedback(){
    // console.log('clicked')
    console.log(feedback.value)
    feedbackStatus.innerHTML= "sending feedback"
    fetch(
        `https://docs.google.com/forms/d/e/1FAIpQLSf7x_6sWhFNFuHPvO4hW5yxx788PpVLbbSzWcoixIffAQjQjw/formResponse?&entry.1498250176=${feedback.value}&submit=SUBMIT`,
        {
            method: 'POST',
            mode: 'no-cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        },
    ).then((res) => {
        console.log(res)
        feedbackStatus.innerHTML= "received response"
    }).catch((err) => {
        console.log(err)
        feedbackStatus.innerHTML= "response not received"
    })
    console.log("beans")
}

// galleryitem.addEventListener("mouseover", ScaleOutFunc)

// function ScaleOutFunc(){
//     console.log('scaled');
//     galleryitem.animate(ScaleOut, Scaleintime);
// }