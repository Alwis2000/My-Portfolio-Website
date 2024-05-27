

let mousePos = { x: undefined, y: undefined };

for (let gallimg of gallimgs) {
  let gallrect = gallimg.getBoundingClientRect();
  let deeltaY = (gallrect.y + gallrect.height/2);
  let deeltaX = (gallrect.x + gallrect.width/2);
  gallimg.onmousemove = transformPanel;
  gallimg.onmouseenter = handleMouseEnter;
  gallimg.onmouseleave = handleMouseLeave;

  let mouseX, mouseY;

  let transformAmount = 1;

  function transformPanel(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = gallimg.offsetLeft + gallimg.clientWidth / 2;
    const centerY = gallimg.offsetTop + gallimg.clientHeight / 2;

    const percentX = (mouseX - deeltaX) / (gallimg.clientWidth / 2);
    const percentY = -((mouseY - deeltaY) / (gallimg.clientHeight / 2));

    gallimg.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY *transformAmount + "deg)";
  }

  function handleMouseEnter() {
    setTimeout(() => {
        gallimg.style.transition = "";
    }, 100);
    gallimg.style.transition = "transform 0.1s";
  }

  function handleMouseLeave() {
    gallimg.style.transition = "transform 0.1s";
    setTimeout(() => {
        gallimg.style.transition = "";
    }, 100);

    gallimg.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
  }
}

// window.addEventListener('mousemove', (event) => {
//   for (let gallimg of gallimgs) {
//     gallimg.style.transform = "" ;
//     let gallrect = gallimg.getBoundingClientRect();
//     let deeltaY = (gallrect.y + gallrect.height/2);
//     let deeltaX = (gallrect.x + gallrect.width/2);

//     let mousePosX = (event.clientX - window.innerWidth/2);
//     let mousePosY = (event.clientY - window.innerHeight/2);


    

    

//     function transformPanel(mouseEvent) {
//         mouseX = mouseEvent.pageX;
//         mouseY = mouseEvent.pageY;

//         const centerX = gallimg.offsetLeft + gallimg.clientWidth / 2;
//         const centerY = gallimg.offsetTop + gallimg.clientHeight / 2;

//         const percentX = (mouseX - centerX) / (gallimg.clientWidth / 2);
//         const percentY = -((mouseY - centerY) / (gallimg.clientHeight / 2));

//         gallimg.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
//     }

//     function handleMouseEnter() {
//         setTimeout(() => {
//             gallimg.style.transition = "";
//         }, 100);
//         gallimg.style.transition = "transform 0.1s";
//     }

//     function handleMouseLeave() {
//         gallimg.style.transition = "transform 0.1s";
//         setTimeout(() => {
//             gallimg.style.transition = "";
//         }, 100);

//         gallimg.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
//     } 
//     // console.log(mousePosX);
//     // gallimg.style.transform = `translate(${mousePosX*0.1}px, ${mousePosY*0.1}px)`;
    
//     // gallimg.style.filter = `saturate(${1-Math.abs(deeltaa**0.5)*0.1})`;
//   } 
// });


// alt+up cool

// gallimg.style.transform = `translateY(${(gallrect.y / 10) * -1}px)`;


