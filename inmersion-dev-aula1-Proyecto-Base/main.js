let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');// Elemento para almacenar la contraseña generada
let botonLimpiar = document.getElementById('limpiar'); // Elemento para limpiar los campos cantidad y vontraseña
let seguridad = document.getElementById('nivelSeguridad'); // Elemento para mostrar el nivel de seguridad

const  cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&@*';

function evaluarSeguridad(password) {
    let longitud = password.length;
    let tieneMayusculas = /[A-Z]/.test(password);  // Verifica si hay mayúsculas
    let tieneMinusculas = /[a-z]/.test(password);  // Verifica si hay minúsculas
    let tieneNumeros = /\d/.test(password);        // Verifica si hay números
    let tieneSimbolos = /[#$%&@*]/.test(password); // Verifica si hay símbolos especiales

    // Clasificar según el uso de caracteres
    if (longitud >= 12 && tieneMayusculas && tieneMinusculas && tieneNumeros && tieneSimbolos) {
        return "alta";  // Contraseña segura
    } else if (longitud >= 8 && ((tieneMayusculas && tieneMinusculas) || (tieneNumeros && tieneSimbolos))) {
        return "media";  // Contraseña moderadamente segura
    } else {
        return "baja";  // Contraseña insegura
    }
}

function generar(){
    
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    if ( numeroDigitado < 8){
        alert("La cantidad de caracteres debe ser mayor de 8");
        return;
    }
    
    let password ='';
    for(let i=0; i<numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        password +=caracterAleatorio;
    }
    contrasena.value = password;//asigno el valor del password generado a la contraseña
    
    let nivel = evaluarSeguridad(password);// creo una variable para guardar el resultado de evaluar el nivel de seguridad
    nivelSeguridad.value = `Nivel de seguridad: ${nivel}`;// Mostrar el nivel de seguridad en el campo correspondiente
}

function limpiarCampos() {
    cantidad.value = '';      // Limpiar el campo de cantidad de caracteres
    contrasena.value = '';    // Limpiar el campo de contraseña generada
    seguridad.value = ''; // Limpiar el nivel de seguridad
}

















