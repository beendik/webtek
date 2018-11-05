    const intro = document.getElementById("intro");
    const pris = document.getElementById("pris");
    const offsetLesMer = intro.offsetTop;
    const offsetPris = pris.offsetTop;
    let progressLesMer = 0;
    let progressPris = 0;

function scrollLesMer() {
    progressLesMer += 40;
    window.scrollTo(0,progressLesMer);
    if (progressLesMer < offsetLesMer) {
        requestAnimationFrame(scrollLesMer)
    }
    else {progressLesMer=0}
}

function scrollPris() {
    progressPris += 40;
    window.scrollTo(0,progressPris);
    if (progressPris < offsetPris) {
        requestAnimationFrame(scrollPris)
    }
    else {progressPris=0}
}

document.getElementById("lesMer").addEventListener("click", scrollLesMer);
document.getElementById("lesMer").addEventListener("click", scrollPris);