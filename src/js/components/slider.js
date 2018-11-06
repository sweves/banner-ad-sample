/**
 *
 * S L I D E R
 *
 */

(() => {
  const slider = document.getElementsByClassName('content__slider')[0],
    slides = document.querySelectorAll('.slider__slide');
  let slideshowOn = setInterval(slideshow, 1000),
    current,
    next;

  function slideshow() {
    Array.prototype.map.call(slides, function(slide, idx) {
      if (! slide.classList.contains('hidden')) {
        current = idx;
        next = idx + 1 > slides.length - 1 ? 0 : idx + 1;
      }
    });
    slides[current].classList.add('hidden');
    slides[next].classList.remove('hidden');
  }
})();
