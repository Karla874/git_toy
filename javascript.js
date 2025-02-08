//Seleccionados
const container = document.querySelector(".squad_container");
const botton = document.querySelector("#size");
const limpiar = document.querySelector("#clean");

let valor = 0;

// Función tomada de internet
function RGBcolor() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  return randomcolor = "rgb(" + R + "," + G + "," + B + ")";
}

//Creados
const square = document.createElement("div");

square.classList.add("squares");

//Default square
for (x=0; x<256; x++) {
	container.appendChild(square.cloneNode(true));
}

let selectorSquare = document.querySelectorAll(".squares");

//Cambiar opacidad
const ajustarOpacidad = function(grado) {
	let opActual = grado.style.opacity;
	if (opActual == "") {
		grado.style.opacity = 0.1;
	} else if (opActual < 1) {
		grado.style.opacity = parseFloat(opActual) + 0.1;
	}
}

//Cambiar color
let cambiarColor = function() {
	selectorSquare.forEach((coloreado) => {
		coloreado.addEventListener("mouseover", event => {
			coloreado.style.backgroundColor = RGBcolor();
			ajustarOpacidad(coloreado);
		})
	});
}
cambiarColor();

//Limpiar
limpiar.addEventListener("click", event => {
	selectorSquare.forEach((limpiado) => {
		limpiado.style.backgroundColor = "white";
	});
});

//Cambiar tamaño
botton.addEventListener("click", event => {
	valor = document.querySelector(".campo").value;
	if (valor >= 16 && valor <= 100) {
		selectorSquare.forEach((eliminar) => {
			container.removeChild(eliminar);
		});
		
		for (x=0; x<valor*valor; x++) {
			container.appendChild(square.cloneNode(true));
		}
		
		selectorSquare = document.querySelectorAll(".squares");
		
		selectorSquare.forEach((ajustar) => {
			ajustar.style.width = "calc(100% / "+valor+")";
			ajustar.style.height = "calc(100% / "+valor+")";
		});
		
		cambiarColor();
	} else {
		alert("Nope! Don't be a troll and insert a value between 16 and 100. Thanks you very much!");
	}
});

