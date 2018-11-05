 const intro = document.getElementById("intro");
    const offset = intro.offsetTop;
    let progress = 0;

function scroll() {
    progress += 40;
    window.scrollTo(0,progress);
    if (progress < offset) {
        requestAnimationFrame(scroll)
    }
    else {progress=0}
}

document.getElementById("lesMer").addEventListener("click", scroll);
