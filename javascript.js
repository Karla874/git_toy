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

//Cambiar color
let cambiarColor = function() {
	selectorSquare.forEach((coloreado) => {
		coloreado.addEventListener("mouseover", event => {
			coloreado.style.backgroundColor = RGBcolor();
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
		container.style.width = valor*10+"px";
		if (valor > 50) {
			container.style.width = valor*5+"px";
			selectorSquare.forEach((ajustar) => {
				ajustar.style.width = "5px";
				ajustar.style.height = "5px";
			});			
		}
		
		cambiarColor();
	} else {
		alert("Nope! Don't be a troll and insert a value between 16 and 100. Thanks you very much!");
	}
});

