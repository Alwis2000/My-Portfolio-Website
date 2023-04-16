let constrain = 200;
let mouseOverContainer = document
let ex1Layer = document.querySelectorAll(".GalleryContainer");
// let ex1Layer = document.querySelector(".GalleryContainer");
// console.log(ex1Layer)


function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;
    
    return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg) ";
  };
  
   function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
  }
  
  mouseOverContainer.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);
  
    window.requestAnimationFrame(function(){
      transformElement(ex1Layer, position);
    });
  }; 