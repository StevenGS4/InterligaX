
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
    nombre: "Fecha 1 - Gran Premio de México y Brasil",
    fecha: "31 de Marzo del 2025",
    resultados: [
      "imagenes/Fecha 1 - 1.jpg",
      "imagenes/Fecha 1 - 2.jpg",
      "imagenes/Fecha 1 - 3.jpg",
      "imagenes/Fecha 1 - 4.jpg"
    ],
    mundial: "imagenes/Mundial - 1.jpg"
  },
  {
    nombre: "Fecha 2 - Gran Premio de Paises Bajos y Monza",
    fecha: "7 de Abril del 2025",
    resultados: [
      "imagenes/Fecha 2 - 1.jpg",
      "imagenes/Fecha 2 - 2.jpg",
      "imagenes/Fecha 2 - 3.jpg",
      "imagenes/Fecha 2 - 4.jpg"
    ],
    mundial: "imagenes/Mundial - 2.jpg"
  },
  {
    nombre: "Fecha 3 - Gran Premio de Bélgica y Australia",
    fecha: "14 de Abril del 2025",
    resultados: [
      "imagenes/Fecha 3 - 1.jpg",
      "imagenes/Fecha 3 - 2.jpg",
      "imagenes/Fecha 3 - 3.jpg",
      "imagenes/Fecha 3 - 4.jpg"
    ],
    mundial: "imagenes/Mundial - 3.jpg"
  },
  {
    nombre: "Fecha 4 - Gran Premio de Austria y Singapur",
    fecha: "21 de Abril del 2025",
    resultados: [
      "imagenes/Fecha 4 - 1.jpg",
      "imagenes/Fecha 4 - 2.jpg",
      "imagenes/Fecha 4 - 3.jpg",
      "imagenes/Fecha 4 - 4.jpg"
    ],
    mundial: "imagenes/Mundial - 4.jpg"
  },
  {
    nombre: "Fecha 5 - Gran Premio de Bahrein y Texas",
    fecha: "28 de Abril del 2025",
    resultados: [
      "imagenes/Fecha 5 - 1.jpg",
      "imagenes/Fecha 5 - 2.jpg",
      "imagenes/Fecha 5 - 3.jpg",
      "imagenes/Fecha 5 - 4.jpg"
    ],
    mundial: "imagenes/Mundial - 5.jpg"
  },
  {
    nombre: "Fecha 6 - Gran Premio de Miami y Las Vegas",
    fecha: "5 de Mayo del 2025",
    resultados: [
      "imagenes/Fecha 6 - 1.jpg",
      "imagenes/Fecha 6 - 2.jpg",
      "imagenes/Fecha 6 - 3.jpg",
      "imagenes/Fecha 6 - 4.jpg"
    ],
    mundial: "imagenes/Mundial - 6.jpg"
  },
  {
    nombre: "Fecha 7 - Gran Premio de Qatar y Gran Bretaña",
    fecha: "12 de Mayo del 2025",
    resultados: [
      "imagenes/Fecha 7 - 1.jpg",
      "imagenes/Fecha 7 - 2.jpg",
      "imagenes/Fecha 7 - 3.jpg",
      "imagenes/Fecha 7 - 4.jpg"
    ],
    mundial: "imagenes/Mundial - 7.jpg"
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
