let counting = 0;
let timer = 0;
runSlides(0, false);


  function runSlides(n, isClicked) {
    /*If the arrows have been clicked, it adds 1 or -1 to counting,
    clears the timer and starts the timer again. If it has not been clicked, it adds 1 to counting*/
    if (isClicked) {
      counting += n;
      clearTimeout(timer);
      timer = setTimeout(runSlides, 6000);
    } else {
      counting++;
    }

    /*Runs through all the slides and adds display to none*/
    let slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    /*Connects the start and the end of the slideshow, makes it possible
    to go from the last to the first slide and the other way around*/
    if (counting > slides.length) {
      counting = 1;
    } else if (counting < 1) {
      counting = slides.length;
    }

    /*Shows one of the slides in 6 sec, before starting the function over again
    if the arrows have not been clicked*/
    slides[counting - 1].style.display = 'block';
    if (!isClicked) {
      timer = setTimeout(runSlides, 6000);
    }
  }
