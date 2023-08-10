const registroForm = document.querySelector('.formulario-registrar');

// Expresiones regulares para validar campos
const nombreUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
const numeroCuenta = /^\d{5}$/;
const correoElectronico = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const contrasenia = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function mostrarMensajeError(campo, mensaje) {
  const errorElement = document.getElementById(`error-${campo.id}`);
  errorElement.textContent = mensaje;
}

registroForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  const nombreUsuarioInput = document.getElementById('nombre-usuario');
  const numeroCuentaInput = document.getElementById('numero-cuenta');
  const correoElectronicoInput = document.getElementById('correo-electronico');
  const contraseniaInput = document.getElementById('contrasenia');

  // Validación de campos
  if (!nombreUsuario.test(nombreUsuarioInput.value)) {
    mostrarMensajeError(nombreUsuarioInput,'Nombre de usuario inválido');
    return;
  }

  if (!numeroCuenta.test(numeroCuentaInput.value)) {
    mostrarMensajeError(numeroCuentaInput,'Número de cuenta inválido');
    return;
  }

  if (!correoElectronico.test(correoElectronicoInput.value)) {
    mostrarMensajeError(correoElectronicoInput,'Correo electrónico inválido');
    return;
  }

  if (!contrasenia.test(contraseniaInput.value)) {
    mostrarMensajeError(contraseniaInput,'Contraseña inválida');
    return;
  }

  // Crear nuevo usuario
  const nuevoUsuario = {
    nombreUsuario: nombreUsuarioInput.value,
    numeroCuenta: numeroCuentaInput.value,
    correoElectronico: correoElectronicoInput.value,
    contrasenia: contraseniaInput.value
  };
  usuarios.push(nuevoUsuario);

  // Limpia los campos del formulario después del registro exitoso
  nombreUsuarioInput.value = '';
  numeroCuentaInput.value = '';
  correoElectronicoInput.value = '';
  contraseniaInput.value = '';

  // Mostrar mensaje de éxito
  Swal.fire({
    icon: 'success',
    title: '¡Registro Exitoso!',
    text: 'Redirigiendo a la página de movimientos...',
    showConfirmButton: false,
    timer: 1500
  }).then(() => {
    // Redirigir al usuario a la página de movimientos después de mostrar el mensaje
    window.location.href = 'Movimientos.html'; // Cambia esto a la URL correcta
  });
});


