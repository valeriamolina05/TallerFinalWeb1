const botones = document.querySelectorAll('.acciones button');
const formularios = document.querySelectorAll('.formulario-container');

botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        formularios.forEach(formulario => formulario.style.display = 'none');
        formularios[index].style.display = 'block';
    });
});
