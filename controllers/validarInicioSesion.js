let intentosFallidos = 0;
const maxIntentos = 3;

// Array de usuarios con sus credenciales
const usuarios = [
  { numeroDeCuenta: '12345', pin: '54321' },
  { numeroDeCuenta: '67890', pin: '09876' },
  { numeroDeCuenta: '56789', pin: 'Password123'},
  { numeroDeCuenta: '25643', pin: 'SecureP@ssw0rd'}
];

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtener elementos de entrada
  const accountNumberInput = document.getElementById('account-number');
  const pinInput = document.getElementById('pin');

   // Obtener los valores ingresados
  const accountNumber = accountNumberInput.value;
  const pin = pinInput.value;

  // Buscar usuario que coincida con las credenciales ingresadas
  const usuarioEncontrado = usuarios.find(user => user.numeroDeCuenta === accountNumber && user.pin === pin);

  if (usuarioEncontrado) {
    // Inicio de sesión exitoso
    intentosFallidos = 0; // Reiniciar contador de intentos fallidos
    accountNumberInput.value = ''; // Limpiar el campo del número de cuenta
    pinInput.value = ''; // Limpiar el campo del PIN
    //redirigir al usuario a la página de movimientos después del inicio de sesión
    window.location.href = 'Movimientos.html';
  } else {
    intentosFallidos++;
    Swal.fire('Credenciales inválidas.')

    if (intentosFallidos >= maxIntentos) {
      // Bloquear el formulario después de superar el número máximo de intentos
      Swal.fire('Has superado el número máximo de intentos. ¡Inténtalo más tarde!');
      loginForm.style.display = 'none'; // Ocultar formulario de inicio de sesión
    }
  };
});