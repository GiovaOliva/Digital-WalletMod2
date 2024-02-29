
//creamos la funcion para cargar la tabla de movimientos
function tablaMovimientos(movimientos) {
    try {
        let filas = ""
        movimientos.forEach((movimiento) => {
            filas += `<tr>
                        <td>${movimiento.tipo}</td>
                        <td>${movimiento.monto}</td>
                    </tr>`

        });
        document.getElementById("tablaMovimientos").innerHTML = filas;
    } catch (e) {
        console.log(e);
        alert("Error al cargar la tabla.");
    }
}


//creamos la funcion para ingresar un objeto movimiento al arreglo movimientos
function ingresoMovimiento(tipo, monto) {
        //creamos un "movimiento" que recibe tipo y monto mendiante la funcion
        let mov = {"tipo":tipo,"monto": monto}
        //dependiendo de que inicio de que usuario haya iniciado sesion añadimos elementos al JSON correspondiente
        if(sessionStorage.inicioDeSesion == 1){
            
            //para poder trabajar el JSON como array ocupamos el metodo "JSON.parse"
            let movimientos = JSON.parse(sessionStorage.movimientosUser1)
            //añadimos nuestro movimiento al principio de array
            movimientos.unshift(mov);
            //para poder guardar el array en sessionStorage lo transformamos con el metodo JSON.stringify
            sessionStorage.movimientosUser1 = JSON.stringify(movimientos);
        
            //replicamos los pasos anteriores pero para el usuario 2
        }else if(sessionStorage.inicioDeSesion == 2){

            let movimientos = JSON.parse(sessionStorage.movimientosUser2);
            movimientos.unshift(mov);
            sessionStorage.movimientosUser2 = JSON.stringify(movimientos);
        }
}

//funcion que nos permite cargar el saldo dependiendo de que usuario inicie sesion

function actualizarSaldo(){
    if (sessionStorage.getItem("inicioDeSesion") == 1 ){
        document.getElementById("balance").innerHTML = sessionStorage.getItem('saldoUser1');
    }else if (sessionStorage.getItem("inicioDeSesion") == 2 ){
        document.getElementById("balance").innerHTML = sessionStorage.getItem('saldoUser2');
    }
}






//identifica la ventana Menu
if (document.title == "Menu"){
    actualizarSaldo()
}
//identifica la ventana Depositos
if (document.title == "Depositar"){
    $("#deposito").submit(function(e){
        //previene el submit
        e.preventDefault();
        //captura el monto del formulario y lo vuelve numerico
        let monto = parseFloat($("#depositAmount").val());
        //comprueba que el monto exista y sea mayor a 0
        if(!isNaN(monto) && monto > 0){
            //actualiza el saldo en memoria del usuario 1
            if(sessionStorage.getItem("inicioDeSesion") == 1){

                let balance = parseFloat(sessionStorage.saldoUser1) + monto;
                sessionStorage.setItem("saldoUser1", balance);
                //agrega el deposito al arreglo movimientosUser1
                ingresoMovimiento("Deposito", monto);
               
            }else{

                 //si no actualiza el saldo en memoria el usuario 2  
                let balance = parseFloat(sessionStorage.saldoUser2) + monto;
                sessionStorage.setItem("saldoUser2", balance);  
                //agrega el deposito al arreglo movimientoUser2
                ingresoMovimiento("Deposito", monto)
            }
            alert("Deposito realizado")
            //vacia el input
            $("#depositAmount").val('');
        }else{
            alert("Ingrese un monto valido.")
            $("#depositAmount").val('');
        }}
    )
}


//identifica la pantalla Ultimos Movimientos
if (document.title == "Ultimos movimientos"){
    if (sessionStorage.getItem("inicioDeSesion") == 1){
        let movimientos = JSON.parse(sessionStorage.movimientosUser1)
        tablaMovimientos(movimientos);
    }else if (sessionStorage.getItem("inicioDeSesion") == 2){
        let movimientos = JSON.parse(sessionStorage.movimientosUser2);
        tablaMovimientos(movimientos);
    }
}


