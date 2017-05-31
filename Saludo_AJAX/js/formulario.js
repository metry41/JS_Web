class Formulario {

	constructor () {

	// Creamos el "modelo" corespondiente a todos los elemetos existentes en el DOM

		this.oDOM = {
			btnSaludar :  document.querySelector("#btnSaludar"),
			pSaludo : document.querySelector("#saludo"),
			
		}; // fin del objeto oDOM

		// AJAX 1 : Instanciamos objeto XMLHttpRequest
		this.oAjax = new XMLHttpRequest();

		// Valores por defencto que actualizan el DOM
	}

	controller () {
		// Definicion de los manejadores de eventos
		this.oDOM.btnSaludar.addEventListener("click",this.pedirAjax.bind(this))

		// AJAX 2a Definis la funciÃ³n de respuesta
		this.oAjax.onreadystatechange = this.actualizarVista.bind(this)
	}
	// AJAX 3: realizar la peticiÃ³n al servidor
	pedirAjax() {

		this.oAjax.open("GET", "http://10.202.150.20:8008/HTML_CSS/Alvaro_de_la_Chicaa.txt");
		this.oAjax.send(null);
	}

	// AJAX 2b Preparar la funciÃ³n de respuesta
	actualizarVista () {			
		if(this.oAjax.readyState == 4) {
			if(this.oAjax.status == 200) {
				this.oDOM.pSaludo.innerHTML = this.oAjax.responseText;
			}else {this.oDOM.pSaludo.innerHTML = 
                this.oAjax.status + " : " + this.oAjax.statusText
                
            }
		}
	} // Fin de la funcion actualizarVista
} 