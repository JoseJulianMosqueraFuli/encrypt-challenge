function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var outputText = "";

    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        var encryptedCharCode = charCode + 10; // Shift by 10 character
        outputText += String.fromCharCode(encryptedCharCode);
    }

    document.getElementById("outputText").value = outputText;
}
