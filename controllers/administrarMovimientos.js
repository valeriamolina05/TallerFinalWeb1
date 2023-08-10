let saldoElement = document.getElementById("saldoDisponible"); // Selecciona el elemento del DOM con el id "saldoDisponible"
let retirar = document.getElementById("montoRetirar"); // Selecciona el elemento del DOM con el id "montoRetirar"
let botonRetirar = document.getElementById("botonRetirar2"); // Selecciona el elemento del DOM con el id "botonRetirar2"
let cuentaDestino = document.querySelectorAll("#cuentaDestino"); // Selecciona todos los elementos del DOM con el id "cuentaDestino"

botonRetirar.addEventListener("click", function () { // Agrega un evento de click al botón "botonRetirar"
    let saldoActual = parseInt(saldoElement.textContent); // Obtiene el saldo actual del elemento "saldoElement" y lo convierte a entero
    let montoARetirar = parseInt(retirar.value); // Obtiene el monto a retirar del elemento "retirar" y lo convierte a entero

    if (saldoActual > 0 && montoARetirar <= saldoActual) { // Verifica si el saldo actual es mayor a cero y si el monto a retirar es menor o igual al saldo actual
        saldoActual -= montoARetirar; // Resta el monto a retirar al saldo actual
        saldoElement.textContent = saldoActual.toString(); // Actualiza el contenido del elemento "saldoElement" con el nuevo saldo actual convertido a cadena de texto
        retirar.value = ''; // Borra el valor del elemento "retirar"

        let movimientosRealizadosElement = document.getElementById("movimientosRealizados"); // Selecciona el elemento del DOM con el id "movimientosRealizados"
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1; // Obtiene el número de movimientos realizados del elemento "movimientosRealizadosElement" y le suma 1
        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados; // Actualiza el contenido del elemento "movimientosRealizadosElement" con el nuevo número de movimientos realizados
    }
});


// Obtener el elemento con el id "montoConsignar"
let consignar = document.getElementById("montoConsignar");

// Obtener el elemento con el id "botonConsignar2"
let botonConsignar = document.getElementById("botonConsignar2");

// Agregar un evento de click al botón "botonConsignar"
botonConsignar.addEventListener("click", function () {
    // Obtener el saldo actual del elemento "saldoElement" y convertirlo a entero
    let saldoActual = parseInt(saldoElement.textContent);

    // Obtener el monto a consignar del elemento "consignar" y convertirlo a entero
    let montoAConsignar = parseInt(consignar.value);

    // Verificar si el saldo actual es mayor a 0 y el monto a consignar es menor o igual al saldo actual
    if (saldoActual > 0 && montoAConsignar <= saldoActual) {
        // Restar el monto a consignar al saldo actual
        saldoActual -= montoAConsignar;

        // Actualizar el texto del elemento "saldoElement" con el saldo actual convertido a cadena
        saldoElement.textContent = saldoActual.toString();

        // Limpiar el valor del elemento "consignar"
        consignar.value = '';

        // Limpiar el valor del elemento "cuentaDestino[0]"
        cuentaDestino[0].value = '';

        // Obtener el elemento con el id "movimientosRealizados"
        let movimientosRealizadosElement = document.getElementById("movimientosRealizados");

        // Obtener el número de movimientos realizados del texto del elemento "movimientosRealizados" y convertirlo a entero
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1;

        // Actualizar el texto del elemento "movimientosRealizados" con el número de movimientos realizados
        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados;
    }
});


// Obtenemos el elemento del HTML con el id "montoTransferir"
let transferir = document.getElementById("montoTransferir");

// Obtenemos el elemento del HTML con el id "botonTransferir2"
let botonTransferir = document.getElementById("botonTransferir2");

// Agregamos un evento de click al botón de transferir
botonTransferir.addEventListener("click", function () {
    // Obtenemos el saldo actual del elemento con el id "saldoElement" y lo convertimos a un número entero
    let saldoActual = parseInt(saldoElement.textContent);

    // Obtenemos el monto a transferir del elemento con el id "transferir" y lo convertimos a un número entero
    let montoATransferir = parseInt(transferir.value);

    // Verificamos si el saldo actual es mayor a 0 y si el monto a transferir es menor o igual al saldo actual
    if (saldoActual > 0 && montoATransferir <= saldoActual) {
        // Restamos el monto a transferir al saldo actual
        saldoActual -= montoATransferir;

        // Actualizamos el saldo en el elemento con el id "saldoElement"
        saldoElement.textContent = saldoActual.toString();

        // Limpiamos el campo de transferir
        transferir.value = '';

        // Limpiamos el campo de cuenta destino
        cuentaDestino[1].value = '';

        // Obtenemos el elemento del HTML con el id "movimientosRealizados"
        let movimientosRealizadosElement = document.getElementById("movimientosRealizados");

        // Obtenemos la cantidad de movimientos realizados y la incrementamos en 1
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1;

        // Actualizamos el elemento con la cantidad de movimientos realizados
        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados;
    }
});