import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

const viewer = new Viewer(document.getElementById('GalleryWrap'), {
  view: () => {
    const viewerTitle = document.getElementById('viewerTitle0');
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
  viewed() {
    insertLenis();
    // All methods are available here except "show".
    // this.viewer.zoomTo(1).rotateTo(180);
  },
  toolbar: {
    prev: {
      show: 0,
      size: 'large',
    },
    zoomIn: 0,
    zoomOut: 0,
    oneToOne: 0,
    reset: {
      show: 1,
      size: 'large',
    },
    play: {
      show: 0,
      size: 'large',
    },
    next: {
      show: 0,
      size: 'large',
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

//TO-DO intialise data-prevent-lenis onto viewer-container class

function insertLenis() {
  const viewerContainer =
    document.getElementsByClassName('viewer-container')[0];
  // console.log(viewerContainer);
  viewerContainer.setAttribute('data-lenis-prevent', 'true');
}
