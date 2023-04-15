function process() {
    var input = document.getElementById("entrada").value;
    var action = document.getElementById("accion").value;
    var result = document.getElementById("resultado");

    if (action === "encriptar") {
        result.value = encrypt(input);
    } else if (action === "desencriptar") {
        result.value = Decrypt(input);
    }
}

function encrypt(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    return texto;
}

function Decrypt(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    return texto;
}

function inputLimit(input) {
    var inputValue = input.value;
    var regex = /[^a-z\s!]/g;
    var newValue = inputValue.replace(regex, '').toLowerCase();
    input.value = newValue;
}


function copyText() {
    var resultInput = document.getElementById("resultado");
    resultInput.select();
    resultInput.setSelectionRange(0, 99999); //Para dispositivos móviles

    //Research why execCommand is Deprecated
    document.execCommand("copy");

    alert("Texto resultado copiado al portapapeles: " + resultInput.value);
}

