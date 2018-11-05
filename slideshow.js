  let counting = 0;
  let timer = 0;
  runSlides(0, false);

  function runSlides(n, isClicked) {
    if (isClicked) {
      counting += n;
      clearTimeout(timer);
      timer = setTimeout(runSlides, 4000);
    } else {
      counting++;
    }

    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    if (counting > slides.length) {
      counting = 1;
    } else if (counting < 1) {
      counting = slides.length;
    }

    slides[counting - 1].style.display = 'block';
    if (!isClicked) {
      timer = setTimeout(runSlides, 4000);
    }
  }