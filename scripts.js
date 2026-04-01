

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotão() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}


function esconderform() {
    mascara.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
}