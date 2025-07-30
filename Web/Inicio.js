function irASeccion(select) {
  const seccionID = select.value;
  const seccion = document.querySelector(`.${seccionID}`);
  if (seccion) {
    seccion.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}



/*************************** */

function enviarMensaje(e) {
  e.preventDefault();

  const input = document.getElementById('mensaje');
  const chat = document.getElementById('chat-mensajes');

  if (input.value.trim() !== "") {
    const nuevoMensaje = document.createElement('div');
    nuevoMensaje.textContent = "💎 Tú: " + input.value;
    chat.appendChild(nuevoMensaje);
    chat.scrollTop = chat.scrollHeight;
    input.value = "";
  }
}


const contenedor = document.getElementById("contenedor-videos");
let tarjetas = Array.from(contenedor.querySelectorAll(".tarjeta-video"));
let index = 1;

const primera = tarjetas[0].cloneNode(true);
const ultima = tarjetas[tarjetas.length - 1].cloneNode(true);

contenedor.appendChild(primera);
contenedor.insertBefore(ultima, tarjetas[0]);

tarjetas = Array.from(contenedor.querySelectorAll(".tarjeta-video"));

window.addEventListener("load", () => {
  const tarjetaAncho = tarjetas[0].offsetWidth + 30;
  contenedor.style.transform = `translateX(-${tarjetaAncho * index}px)`;

  function moverCarrusel(direccion) {
    if (contenedor.isAnimating) return;
    contenedor.isAnimating = true;

    index += direccion;
    contenedor.style.transition = "transform 0.4s ease-in-out";
    contenedor.style.transform = `translateX(-${tarjetaAncho * index}px)`;

    setTimeout(() => {
      if (index === 0) {
        contenedor.style.transition = "none";
        index = tarjetas.length - 2;
        contenedor.style.transform = `translateX(-${tarjetaAncho * index}px)`;
      } else if (index === tarjetas.length - 1) {
        contenedor.style.transition = "none";
        index = 1;
        contenedor.style.transform = `translateX(-${tarjetaAncho * index}px)`;
      }
      contenedor.isAnimating = false;
    }, 450);
  }

  window.moverCarrusel = moverCarrusel;
});

/******************************************* */

function toggleFAQ(btn) {
  const item = btn.parentElement;
  item.classList.toggle('abierto');
}



