
const slides = document.querySelectorAll(".slide");
let current = 0;

document.querySelector(".next").addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  slides[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
});



/*********************** */
function cambiarImagen(ruta, titulo) {
  document.getElementById("imagenDestacada").src = ruta;
  document.getElementById("tituloDestacado").textContent = titulo;
}




/********************* */


const eventos = [
  {
    nombre: "Fecha 1 - Gran Premio de Brasil",
    fecha: "31 de Marzo del 2025",
    resultados: [
      "imagenes/Fecha 1 Q.jpg"
    ],
    mundial: "imagenes/Mundial Ronda 1 Q.jpg"
  },
  {
    nombre: "Fecha 2 - Gran Premio de Belgica",
    fecha: "7 de Abril del 2025",
    resultados: [
      "imagenes/Fecha 2 Q.jpg"
    ],
    mundial: "imagenes/Mundial Ronda 2 Q.jpg"
  },
  {
    nombre: "Fecha 3 - Gran Premio de Italia",
    fecha: "14 de Abril del 2025",
    resultados: [
      "imagenes/Fecha 4 Q.jpg"
    ],
    mundial: "imagenes/Mundial Ronda 4 Q.jpg"
  }

];

let panelActual = 0;
let resultadoActual = 0;

function renderizarPanel() {
  const evento = eventos[panelActual];
  document.getElementById("nombreEvento").textContent = evento.nombre;
  document.getElementById("fechaEvento").textContent = evento.fecha;
  document.getElementById("imagenMundial").src = evento.mundial;

  const imagenes = document.querySelectorAll(".subcarrusel .resultado");
  imagenes.forEach((img, index) => {
    img.classList.remove("activo");
    img.src = evento.resultados[index] || "";
    if (index === resultadoActual) {
      img.classList.add("activo");
    }
  });
}

function cambiarPanel(direccion) {
  panelActual += direccion;
  if (panelActual < 0) panelActual = eventos.length - 1;
  if (panelActual >= eventos.length) panelActual = 0;
  resultadoActual = 0;
  renderizarPanel();
}

function cambiarResultado(direccion) {
  const evento = eventos[panelActual];
  resultadoActual += direccion;
  if (resultadoActual < 0) resultadoActual = evento.resultados.length - 1;
  if (resultadoActual >= evento.resultados.length) resultadoActual = 0;
  renderizarPanel();
}


document.addEventListener("DOMContentLoaded", () => {
  renderizarPanel();
});



function ampliarImagen(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("imagenAmpliada");
  img.src = src;
  lightbox.style.display = "flex";
}


function cerrarLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
