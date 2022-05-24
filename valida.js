entrada.addEventListener("keypress", function (e) {
    if (!validaTexto(e)) {
        e.preventDefault();
    }
});


function validaTexto(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const regEx = "[a-z0-9 ]";

    if (caracter.match(regEx)) {
        return true;
    } else {
        return false;
    }
}

