function imgSlider(cambio) {
    document.querySelector("body > div > div.flex > div > img").src = cambio;
    let img =  document.querySelector("body > div > div.flex > div > img")
    img.style.height = "38rem"
}


function changeCircleColor(color) {
    const circle = document.querySelector(".circle")
    circle.style.backgroundColor = color;
    
}

