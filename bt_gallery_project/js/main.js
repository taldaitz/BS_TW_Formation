// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const cards = document.getElementsByClassName('card');

for (const card of cards) {
  card.addEventListener('click', function () {

    const imgSrc = this.children[0].src;
  
    const imageZoomModal = document.getElementById("imageZoomModal");
    imageZoomModal.src = imgSrc
  
    const zoomModal = new bootstrap.Modal(document.getElementById('zoomModal'));
    zoomModal.show();
  });
}



// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })
