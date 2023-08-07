const boton_iniciar_sesion = document.querySelector("#btn-iniciar-sesion");
const boton_registrarse = document.querySelector("#btn-registrarse");
const contenedor = document.querySelector(".contenedor");

boton_registrarse.addEventListener('click', () => {
  contenedor.classList.add("formulario-registrar-mode");
});

boton_iniciar_sesion.addEventListener('click', () => {
  contenedor.classList.remove("formulario-registrar-mode");
});






