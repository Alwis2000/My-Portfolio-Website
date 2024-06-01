import scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { ScrollbarPlugin } from 'smooth-scrollbar';

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

    scrollbar.scrollIntoView(document.querySelector(hash), {
      offsetTop: 120,
      alignToTop: true,
      onlyScrollIfNeeded: false,
    });
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

const options = {
  plugins: {
    overscroll: true,
    anchor: true,
  },
  'damping' : 0.05,
  'renderByPixels' : false
};


scrollbar.use(AnchorPlugin);      
scrollbar.use(OverscrollPlugin)     







function myFunction(Hoverable) {
  if (Hoverable.matches) { // If media query matches
    console.log("naur")
  } else {
    scrollbar.init(document.querySelector('.main'), options);
  }
}

// Create a MediaQueryList object
var Hoverable = window.matchMedia("(hover: none)")

// Call listener function at run time
myFunction(Hoverable);

// Attach listener function on state changes
Hoverable.addEventListener("change", function() {
  myFunction(Hoverable);
});



//YxN