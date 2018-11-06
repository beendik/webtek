

const intro = document.getElementById("intro");
const offsetLesMer = intro.offsetTop;
let progressLesMer = 0;

function scrollLesMer() {
    progressLesMer += 40;
    window.scrollTo(0,progressLesMer);
    if (progressLesMer < offsetLesMer) {
        requestAnimationFrame(scrollLesMer)
    }
    else {progressLesMer=0}
}
document.getElementById("lesMer").addEventListener("click", scrollLesMer);


