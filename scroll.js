let progress = 0

function setOffset (scrollTil) {
    offset = scrollTil;
}

function scrollUntil() {
    progress += 40;
    window.scrollTo(0,progress);
    if (progress < offset) {
        requestAnimationFrame(scrollUntil)
    }
    else {progress=0}
}



