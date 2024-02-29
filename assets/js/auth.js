const inicioDeSesion = sessionStorage.getItem('inicioDeSesion');

if(!inicioDeSesion){
    location.href = '../html/login.html';
}