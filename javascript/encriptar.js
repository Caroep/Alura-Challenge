function encriptado() {

    var mje = document.getElementById("mje").value.toLowerCase();
    console.log(mje);

    var mCifrado = mje.replace(/e/img,"enter");
    var mCifrado = mCifrado.replace(/o/img,"ober");
    var mCifrado = mCifrado.replace(/i/img,"imes");
    var mCifrado = mCifrado.replace(/a/img,"ai");
    var mCifrado = mCifrado.replace(/u/img,"ufat");

    document.getElementById("imagen1").style.display = "none";

    document.getElementById("texto1").style.display = "none";

    document.getElementById("texto2").innerHTML = mCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptado() {

    var mje = document.getElementById("mje").value.toLowerCase();
    console.log(mje);
    var mCifrado = mje.replace(/enter/img,"e");
    var mCifrado = mCifrado.replace(/ober/img,"o");
    var mCifrado = mCifrado.replace(/imes/img,"i");
    var mCifrado = mCifrado.replace(/ai/img,"a");
    var mCifrado = mCifrado.replace(/ufat/img,"u");

    document.getElementById("imagen1").style.display = "none";

    document.getElementById("texto1").style.display = "none";

    document.getElementById("texto2").innerHTML = mCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar() {
    var copiado = document.querySelector("#texto2")
    copiado.select();
    document.execCommand("copy");
    alert("el mje fue copiado");
}