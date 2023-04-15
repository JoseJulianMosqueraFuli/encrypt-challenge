function procesar() {
    var entrada = document.getElementById("entrada").value;
    var accion = document.getElementById("accion").value;
    var resultado = document.getElementById("resultado");

    if (accion === "encriptar") {
        resultado.value = encriptar(entrada);
    } else if (accion === "desencriptar") {
        resultado.value = desencriptar(entrada);
    }
}

function encriptar(texto) {
    // Reemplazar letras según la regla de encriptación
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

function desencriptar(texto) {
    // Reemplazar letras según la regla de desencriptación
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

function limitarMinusculas(input) {
    var inputValue = input.value;
    var regex = /[^a-z\s!]/g;
    var newValue = inputValue.replace(regex, '').toLowerCase();
    input.value = newValue;
}


function copiarTexto() {
    /* Obtener el elemento de entrada de texto encriptado */
    var resultadoInput = document.getElementById("resultado");

    /* Seleccionar el texto en el input */
    resultadoInput.select();
    resultadoInput.setSelectionRange(0, 99999); /* Para dispositivos móviles */

    /* Copiar el texto al portapapeles */
    document.execCommand("copy");

    /* Mostrar un mensaje de éxito */
    alert("Texto resultado copiado al portapapeles: " + resultadoInput.value);
}

