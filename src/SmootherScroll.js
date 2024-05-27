let Scrollbar = window.Scrollbar;

Scrollbar.use(window.OverscrollPlugin);

const options = {
      plugins: {
        overscroll: true,
        anchor: true,
      },
      'damping' : 0.05,
      'renderByPixels' : false
    }

Scrollbar.init(document.querySelector('.main'), options);

//YxN