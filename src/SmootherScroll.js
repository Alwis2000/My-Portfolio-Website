import scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { ScrollbarPlugin } from 'smooth-scrollbar';
import easing from './easing';



import { Scrollbar } from 'smooth-scrollbar/scrollbar'; // NOTICE: not the default entry


const setMomentum = Scrollbar.prototype.setMomentum;

//fix Random X movement
Scrollbar.prototype.setMomentum = function(x, y) {
    setMomentum.call(this, 0, y);
}

class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = 'disableScroll';

  static defaultOptions = {
    direction: '',
  };

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction] = 0;
    }

    return { ...delta };
  }
}



class AnchorPlugin extends ScrollbarPlugin {
  static pluginName = 'anchor';

  onHashChange = () => {
    this.jumpToHash(window.location.hash);
  };

  onClick = (event) => {
    const { target } = event;

    if (target.tagName !== 'A') {
      return;
    }

    const hash = target.getAttribute('href');

    if (!hash || hash.charAt(0) !== '#') {
      return;
    }

    this.jumpToHash(hash);
  };

  jumpToHash = (hash) => {
    const { scrollbar } = this;

    if (!hash) {
      return;
    }    

    // reset scrollTop
    scrollbar.containerEl.scrollTop = 0;

    // scrollbar.scrollIntoView(document.querySelector(hash), {
    //   offsetTop: 120,
    //   alignToTop: true,
    //   onlyScrollIfNeeded: false,
    // });
    height();

    function height(){
      const heightvar = document.getElementById("AboutMeWrap").offsetTop;
      const heightoffset = heightvar - 100;
      // console.log(heightvar);

      scrollbar.scrollTo(0, heightoffset, 1200, {
        callback: () => console.log('done!'),
        easing: easing.easeInOutCubic,
      });
    }


    
    
  };

  onInit() {
    this.jumpToHash(window.location.hash);

    window.addEventListener('hashchange', this.onHashChange);

    this.scrollbar.contentEl.addEventListener('click', this.onClick);
  }

  onDestory() {
    window.removeEventListener('hashchange', this.onHashChange);

    this.scrollbar.contentEl.removeEventListener('click', this.onClick);
  }
}


// load the plugin


const options = {
  plugins: {
    overscroll: true,
    anchor: true,
    disableScroll: {
      direction: 'x',
    },
  },
  'damping' : 0.05,
  'renderByPixels' : false
};




scrollbar.use(AnchorPlugin);
// scrollbar.use(OverscrollPlugin);     
scrollbar.use(DisableScrollPlugin);    
// scrollbar.addListener((s) => {console.log(s)});




function myFunction(Hoverable) {
  if (Hoverable.matches) { // If media query matches
    // console.log("naur")
  } else {
    scrollbar.init(document.querySelector('#smooth'), options);
    
  }
}

// document.addEventListener("scroll", scrolled)

// if (scrollbar.IsVisible(document.querySelector('.Image'))) {
//   console.log("yes");
// };


// Create a MediaQueryList object
var Hoverable = window.matchMedia("(hover: none) and (max-width: 650px)")

// Call listener function at run time
myFunction(Hoverable);

// Attach listener function on state changes
Hoverable.addEventListener("change", function() {
  myFunction(Hoverable);
});



//YxN