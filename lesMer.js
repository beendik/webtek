 const intro = document.getElementById("intro");
    const offset = intro.offsetTop;
    let progress = 0;

function scroll() {
    progress += 10;
    window.scrollTo(0,progress);
    if (progress < offset) {
        requestAnimationFrame(scroll)
    }
}

document.getElementById("lesMer").addEventListener("click", scroll);
document.getElementById("lesMer").addEventListener("click", function() {progress=0});