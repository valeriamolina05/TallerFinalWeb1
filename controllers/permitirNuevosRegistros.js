const registroForm = document.querySelector('.formulario-registrar');

// Expresiones regulares para validar los campos
const nombreUsuario = /^[a-zA-Z0-9_-]{3,16}$/;
const numeroCuenta = /^[1-9]\d{4}$/;
const correoElectronico = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const pin = /^(?!([0-9])\1{3})\d{4}$/;

function mostrarMensajeError(campo, mensaje) {
  const errorElement = document.getElementById(`error-${campo.id}`);
  errorElement.textContent = mensaje;
}

registroForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const nombreUsuarioInput = document.getElementById('nombre-usuario');
  const numeroCuentaInput = document.getElementById('numero-cuenta');
  const correoElectronicoInput = document.getElementById('correo-electronico');
  const pinInput = document.getElementById('contrasenia');

  if (!nombreUsuario.test(nombreUsuarioInput.value)) {
    mostrarMensajeError(nombreUsuarioInput, 'Nombre de usuario inválido');
    return;
  }

  if (!numeroCuenta.test(numeroCuentaInput.value)) {
    if (/^0\d*/.test(numeroCuentaInput.value)) {
      mostrarMensajeError(numeroCuentaInput, 'Número de cuenta no puede iniciar con un 0');
    } else {
      mostrarMensajeError(numeroCuentaInput, 'Número de cuenta inválido');
    }
    return;
  }

  if (!correoElectronico.test(correoElectronicoInput.value)) {
    mostrarMensajeError(correoElectronicoInput, 'Correo electrónico inválido');
    return;
  }

  if (!pin.test(pinInput.value)) {
    if (/(\d)\1{3}/.test(pinInput.value)) {
      mostrarMensajeError(pinInput, 'No puede tener 4 numeros repetidos');
    } else {
      mostrarMensajeError(pinInput, 'Pin inválido');
    }
    return;
  }

  if (localStorage.getItem(99999) === null) {
    const usuarioPorDefecto = {
      nombreUsuario: 'usuario-defecto',
      numeroCuenta: 99999,
      correoElectronico: 'ejemplo@gmail.com',
      pin: '1234',
      saldo: 0
    }
    localStorage.setItem(usuarioPorDefecto.numeroCuenta, JSON.stringify(usuarioPorDefecto));
  }

  if (localStorage.getItem(numeroCuentaInput.value) === null) {
    const nuevoUsuario = {
      nombreUsuario: nombreUsuarioInput.value,
      numeroCuenta: numeroCuentaInput.value,
      correoElectronico: correoElectronicoInput.value,
      pin: pinInput.value,
      saldo: 0
    };

    localStorage.setItem("NumeroCuentaActual", JSON.stringify(numeroCuentaInput.value));
    localStorage.setItem(numeroCuentaInput.value, JSON.stringify(nuevoUsuario));

    nombreUsuarioInput.value = '';
    numeroCuentaInput.value = '';
    correoElectronicoInput.value = '';
    pinInput.value = '';

    Swal.fire({
      icon: 'success',
      title: '¡Registro Exitoso!',
      text: 'Redirigiendo a la página de movimientos...',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {

      window.location.href = 'Movimientos.html';
    });
  } else if (localStorage.getItem(numeroCuentaInput.value) !== null) {
    Swal.fire({
      icon: 'error',
      title: 'Cuenta ya existe',
      text: 'El numero de cuenta que ingresaste ya esta registrado. Ingrese uno nuevo',
      showConfirmButton: false,
      timer: 4000
    })
    numeroCuentaInput.value = '';
  }else {
    Swal.fire('Ocurrio un error inesperado')
  }
});