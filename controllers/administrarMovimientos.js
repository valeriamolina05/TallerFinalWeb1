let saldoElement = document.getElementById("saldoDisponible");
let fechaActual
let saldoActual
let nuevoSaldo
let usuarioActual = parseInt(JSON.parse(localStorage.getItem("NumeroCuentaActual")))
let usuario = JSON.parse(localStorage.getItem(usuarioActual));
saldoElement.textContent = usuario.saldo

let claves = []
for (let i = 0; i < localStorage.length; i++) {
    claves.push(localStorage.key(i));
}

let retirar = document.getElementById("montoRetirar");
let botonRetirar = document.getElementById("botonRetirar2");

botonRetirar.addEventListener("click", function () {
    saldoActual = parseInt(saldoElement.textContent);
    let montoARetirar = parseInt(retirar.value);
    if (saldoActual > 0 && montoARetirar <= saldoActual && montoARetirar >= 50) {
        saldoActual -= montoARetirar;
        usuario.saldo -= montoARetirar;
        localStorage.setItem(usuarioActual,JSON.stringify(usuario))
        saldoElement.textContent = saldoActual;
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
    else if (montoARetirar < 50){
        retirar.value = '';
        Swal.fire("El monto minimo a retirar son 50 pesos")
    }
});


let consignar = document.getElementById("montoConsignar")
let botonConsignar = document.getElementById("botonConsignar2");

botonConsignar.addEventListener("click", function () {
    saldoActual = parseInt(saldoElement.textContent);
    let montoAConsignar = parseInt(consignar.value);
    if (montoAConsignar >= 50){
        saldoActual += montoAConsignar;
        usuario.saldo += montoAConsignar;
        localStorage.setItem(usuarioActual,JSON.stringify(usuario))
        saldoElement.textContent = saldoActual;
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
    else if (montoAConsignar < 50){
        consignar.value = '';
        Swal.fire("El monto minimo a retirar son 50 pesos")
    }
});


let transferir = document.getElementById("montoTransferir");
let botonTransferir = document.getElementById("botonTransferir2");
let cuentaDestino = document.getElementById("cuentaDestino");

botonTransferir.addEventListener("click", function () {
    saldoActual = parseInt(saldoElement.textContent);
    let montoATransferir = parseInt(transferir.value);
    let usuarioTranferir = JSON.parse(localStorage.getItem(parseInt(cuentaDestino.value)));

    if (saldoActual > 0 && montoATransferir <= saldoActual  &&  montoATransferir >= 50) {
        if (cuentaDestino !== usuarioActual.toString() && claves.includes(cuentaDestino.value)){
            saldoActual -= montoATransferir;
            usuarioTranferir.saldo += montoATransferir;
            localStorage.setItem(cuentaDestino.value, JSON.stringify(usuarioTranferir))
            usuario.saldo -= montoATransferir;
            localStorage.setItem(usuarioActual, JSON.stringify(usuario))
            saldoElement.textContent = usuario.saldo
            saldoElement.textContent = saldoActual;
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
        }else{
            Swal.fire({
                icon: 'error',
                title: '¡Transferencia Invalida!',
                text: 'Cuenta de destino invalida',
                showConfirmButton: false,
                timer: 2000
            })
            cuentaDestino.value = '';
        }
    }
    else if (montoATransferir < 50){
        transferir.value = '';
        Swal.fire("El monto minimo a retirar son 50 pesos")
    }
});


let cerrarSeccion = document.getElementById("cerrar-seccion");

cerrarSeccion.addEventListener("click", function () {
    localStorage.setItem("NumeroCuentaActual","")
});