let saldoElement = document.getElementById("saldoDisponible");
let retirar = document.getElementById("montoRetirar");
let botonRetirar = document.getElementById("botonRetirar2");
let cuentaDestino = document.getElementById("cuentaDestino");

botonRetirar.addEventListener("click", function () {
    let saldoActual = parseInt(saldoElement.textContent);
    let montoARetirar = parseInt(retirar.value);
    if (saldoActual > 0 && montoARetirar <= saldoActual && montoARetirar > 0) {
        saldoActual -= montoARetirar;
        saldoElement.textContent = saldoActual.toString();
        retirar.value = '';

        let movimientosRealizadosElement = document.getElementById("movimientosRealizados");
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1;

        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados;

        const nuevoElemento = document.createElement("p");
        fechaActual = new Date().toLocaleString()
        nuevoElemento.innerHTML = `Retiro<br>Valor: ${montoARetirar}<br>${fechaActual}`
        document.getElementById("formularioConsultar").appendChild(nuevoElemento)

        Swal.fire({
            icon: 'success',
            title: '¡Retiro Exitoso!',
            text: 'Retiro completado con exito',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else if (montoARetirar < 0){
        retirar.value = '';
        Swal.fire("No se aceptan valores negativos")
    }
});


let consignar = document.getElementById("montoConsignar")
let botonConsignar = document.getElementById("botonConsignar2");

botonConsignar.addEventListener("click", function () {
    let saldoActual = parseInt(saldoElement.textContent);
    let montoAConsignar = parseInt(consignar.value);
    if (montoAConsignar > 0){
        saldoActual += montoAConsignar;
        saldoElement.textContent = saldoActual.toString();
        consignar.value = '';

        let movimientosRealizadosElement = document.getElementById("movimientosRealizados")
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1

        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados

        const nuevoElemento = document.createElement("p");
        fechaActual = new Date().toLocaleString()
        nuevoElemento.innerHTML = `Consignacion<br>Valor: ${montoAConsignar}<br>${fechaActual}`
        document.getElementById("formularioConsultar").appendChild(nuevoElemento)
        Swal.fire({
            icon: 'success',
            title: '¡Consignacion Exitosa!',
            text: 'Consignacion completada con exito',
            showConfirmButton: false,
            timer: 2000
        });
    }
    else if (montoAConsignar < 0){
        consignar.value = '';
        Swal.fire("No se aceptan valores negativos")
    }
});


let transferir = document.getElementById("montoTransferir");
let botonTransferir = document.getElementById("botonTransferir2");

botonTransferir.addEventListener("click", function () {
    let saldoActual = parseInt(saldoElement.textContent);
    let montoATransferir = parseInt(transferir.value);
    if (saldoActual > 0 && montoATransferir <= saldoActual  &&  montoATransferir > 0) {
        saldoActual -= montoATransferir;
        saldoElement.textContent = saldoActual.toString();
        transferir.value = '';
        cuentaDestino.value = '';

        let movimientosRealizadosElement = document.getElementById("movimientosRealizados");
        let movimientosRealizados = parseInt(movimientosRealizadosElement.textContent.split(":")[1]) + 1;

        movimientosRealizadosElement.textContent = "Movimientos realizados: " + movimientosRealizados;

        const nuevoElemento = document.createElement("p");
        fechaActual = new Date().toLocaleString()
        nuevoElemento.innerHTML = `Transferencia<br>Valor: ${montoATransferir}<br>${fechaActual}`
        document.getElementById("formularioConsultar").appendChild(nuevoElemento)
        Swal.fire({
            icon: 'success',
            title: '¡Transferencia Exitosa!',
            text: 'Transferencia completada con exito',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else if (montoATransferir < 0){
        transferir.value = '';
        Swal.fire("No se aceptan valores negativos")
    }
});