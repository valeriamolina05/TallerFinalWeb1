let saldoElement = document.getElementById("saldoDisponible");
let retirar = document.getElementById("montoRetirar");
let botonRetirar = document.getElementById("botonRetirar2");
let cuentaDestino = document.querySelectorAll("#cuentaDestino");

botonRetirar.addEventListener("click", function () {
    let saldoActual = parseInt(saldoElement.textContent);
    let montoARetirar = parseInt(retirar.value);

    if (saldoActual > 0 && montoARetirar <= saldoActual) {
        saldoActual -= montoARetirar;
        saldoElement.textContent = saldoActual.toString();
        retirar.value = ''

        let movimientosRealizadosElement = document.getElementById("movimientosRealizados");
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1;
        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados;
    }
});

let consignar = document.getElementById("montoConsignar");
let botonConsignar = document.getElementById("botonConsignar2");

botonConsignar.addEventListener("click", function () {
    let saldoActual = parseInt(saldoElement.textContent);
    let montoAConsignar = parseInt(consignar.value);

    if (saldoActual > 0 && montoAConsignar <= saldoActual) {
        saldoActual -= montoAConsignar;
        saldoElement.textContent = saldoActual.toString();
        consignar.value = ''
        cuentaDestino[0].value = ''

        let movimientosRealizadosElement = document.getElementById("movimientosRealizados");
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1;
        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados;
    }
});


let transferir = document.getElementById("montoTransferir");
let botonTransferir = document.getElementById("botonTransferir2");

botonTransferir.addEventListener("click", function () {
    let saldoActual = parseInt(saldoElement.textContent);
    let montoATransferir = parseInt(transferir.value);

    if (saldoActual > 0 && montoATransferir <= saldoActual) {
        saldoActual -= montoATransferir;
        saldoElement.textContent = saldoActual.toString();
        transferir.value = ''
        cuentaDestino[1].value = ''

        let movimientosRealizadosElement = document.getElementById("movimientosRealizados");
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1;
        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados;
    }
});