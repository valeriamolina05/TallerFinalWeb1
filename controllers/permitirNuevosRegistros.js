const registroForm = document.querySelector('.formulario-registrar');

// Expresiones regulares para validar los campos
const nombreUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
const numeroCuenta = /^\d{5}$/;
const correoElectronico = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const contrasenia = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function mostrarMensajeError(campo, mensaje) {
  const errorElement = document.getElementById(`error-${campo.id}`);
  errorElement.textContent = mensaje;
}

registroForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nombreUsuarioInput = document.getElementById('nombre-usuario');
  const numeroCuentaInput = document.getElementById('numero-cuenta');
  const correoElectronicoInput = document.getElementById('correo-electronico');
  const contraseniaInput = document.getElementById('contrasenia');

  if (!nombreUsuario.test(nombreUsuarioInput.value)) {
    mostrarMensajeError(nombreUsuarioInput, 'Nombre de usuario inválido');
    return;
  }

  if (!numeroCuenta.test(numeroCuentaInput.value)) {
    mostrarMensajeError(numeroCuentaInput, 'Número de cuenta inválido');
    return;
  }

  if (!correoElectronico.test(correoElectronicoInput.value)) {
    mostrarMensajeError(correoElectronicoInput, 'Correo electrónico inválido');
    return;
  }

  if (!contrasenia.test(contraseniaInput.value)) {
    mostrarMensajeError(contraseniaInput, 'Contraseña inválida');
    return;
  }

  const nuevoUsuario = {
    nombreUsuario: nombreUsuarioInput.value,
    numeroCuenta: numeroCuentaInput.value,
    correoElectronico: correoElectronicoInput.value,
    contrasenia: contraseniaInput.value,
    saldo: 0
  };

  const usuarioPorDefecto = {
    nombreUsuario: 'usuario-defecto',
    numeroCuenta: 99999,
    correoElectronico: 'ejemplo@gmail.com',
    contrasenia: 'Prueb@123',
    saldo: 0
  }

  localStorage.setItem("NumeroCuentaActual", numeroCuentaInput.value);
  localStorage.setItem(usuarioPorDefecto.numeroCuenta, JSON.stringify(usuarioPorDefecto));
  localStorage.setItem(numeroCuentaInput.value, JSON.stringify(nuevoUsuario));

  nombreUsuarioInput.value = '';
  numeroCuentaInput.value = '';
  correoElectronicoInput.value = '';
  contraseniaInput.value = '';

  Swal.fire({
    icon: 'success',
    title: '¡Registro Exitoso!',
    text: 'Redirigiendo a la página de movimientos...',
    showConfirmButton: false,
    timer: 1500
  }).then(() => {

    window.location.href = 'Movimientos.html';
  });
});