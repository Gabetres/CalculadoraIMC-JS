function calcularimc() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const imc = peso / (altura ** 2)

    if (isNaN(imc)) {
        document.getElementById("resultado").textContent = "Digite um valor válido";
        document.getElementById("resultado").style.fontSize = "1em";
    } else {
        document.getElementById("resultado").textContent = imc.toFixed(2);
    }

    document.getElementById("calculadora").style.display = "none";
    document.getElementById("reply").style.display = "inline";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("subtitle").style.display = "inline";
}

function back() {
    document.getElementById("calculadora").style.display = "inline";
    document.getElementById("reply").style.display = "none";

}





