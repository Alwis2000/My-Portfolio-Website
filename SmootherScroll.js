var Scrollbar = window.Scrollbar;

const options = {
  plugins:{
    overscroll: true,
  },
  'damping' : 0.05,
  'renderByPixels' : false
}

Scrollbar.use(window.OverscrollPlugin);
Scrollbar.init(document.querySelector('.main'), options);

//YxN