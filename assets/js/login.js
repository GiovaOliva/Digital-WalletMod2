//Primer usuario valido
const userValido1 = "admin@alkewallet.com";
const passValida1 = "12345";

//Segundo usuario valido
const userValido2 = "admin2@alkewallet.com";
const passValida2 = "56789";

//fijamos un saldo inicial a cada usuario
sessionStorage.setItem('saldoUser1', 70000);
sessionStorage.setItem('saldoUser2', 80000);

//iniciamos JSON de movimientos usuarios
let movimientosUser1 = [
    {"tipo": "Bono Inicial", "monto": 70000}
]
sessionStorage.movimientosUser1 = JSON.stringify(movimientosUser1);
let movimientosUser2 = [
    {"tipo": "Bono Inicial", "monto": 80000}
]
sessionStorage.movimientosUser2 = JSON.stringify(movimientosUser2)

//Rescatando datos del form para inicio de sesion
const formulario = document.getElementById("inicioDeSesion");
const email = document.getElementById("email");
const password = document.getElementById("password");

//Funcion que inicia el login
function login(e){

    //primero previene el evento submit
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);
    
    //valida si los datos capturados coinciden con el primer usuario valido
    if(email.value == userValido1 && password.value == passValida1){
        
        //para así dirigirlo al menu principal y settear nuestro item de inicioDeSesion
        location.href = '../html/menu.html';
        sessionStorage.setItem("inicioDeSesion", 1);
    } else{
        
        //Si el primer usuario no es correcto prueba con el segundo y realiza los mismos pasos que el anterior
        if(email.value == userValido2 && password.value == passValida2){
            location.href = '../html/menu.html';
            sessionStorage.setItem("inicioDeSesion", 2);
        
        }else{
            //si ninguno de lo usuarios coincidio muestra el mensaje de error.
            alert("Email y/o contraseña erroneos");
        }
    }

}

//ejecuta la funcion login al detectar el submit del formulario inicioDeSesion
formulario.addEventListener("submit", login)



