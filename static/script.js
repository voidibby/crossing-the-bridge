let titleSVG;
const shrinkFont = () => {
    titleSVG.classList.remove("title-svg-expanded");
    titleSVG.classList.add("title-svg-shrinked");
}

const expandFont = () => {
    titleSVG.classList.remove("title-svg-shrinked");
    titleSVG.classList.add("title-svg-expanded");
}

window.onload = (event) => {
    titleSVG = document.getElementById("title-svg");

    window.addEventListener("scroll", function () {
        const parallax = document.getElementsByClassName("parallax");
        let offset = window.pageYOffset;
        for (let i = 0; i < parallax.length; i++) {
            parallax[i].style.backgroundPositionY = offset * 0.4 + "px";
        }

        if(window.pageYOffset > 0) {
            shrinkFont();
        } else {
            expandFont();
        }
    });
}
