//document.getElementById("btn_1").classList.add("show");


window.onload = function () {

    let aParrafos = document.querySelectorAll("visible")
    
    let oBoton = document.querySelector("#btn_1")    
    oBoton.innerHTML = "Ver más"
    oBoton.addEventListener("click", camviarVista)
    
    function camviarVista () {
        for (var i = 0; i < aParrafos.length ; i++) {        
            aParrafos[i].classList.toggle("oculto")
        }
        oBoton.innerHTML = oBoton.innerHTML=="Ver más" ? "Ver menos" : "Ver más";
    }

}

//classlist.add(show)
//document.getElementsByClassName("hide").classList.toggle("show");