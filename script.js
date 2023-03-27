function calcularimc() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const imc = peso / (altura ** 2)

    if (isNaN(imc)) {
        document.getElementById("resultado").textContent = "Digite um valor válido";
        document.getElementById("indice").style.display = "none";
        document.getElementById("resultado").style.fontSize = "1em";
    } else {
        document.getElementById("resultado").textContent = imc.toFixed(2);
    }

    document.getElementById("calculadora").style.display = "none";
    document.getElementById("reply").style.display = "inline";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("subtitle").style.display = "inline";

    if(imc < 18.5){
        document.getElementById("indice").style.display = "inline";
        document.getElementById("indice").textContent = "Abaixo do peso"
    }
   
    if(imc >= 18.5){
        document.getElementById("indice").style.display = "inline";
        document.getElementById("indice").textContent = "Peso ideal" 
    }

    if(imc >= 25){
        document.getElementById("indice").style.display = "inline";
        document.getElementById("indice").textContent = "Levemente acima do peso" 
    }
    if(imc >= 30){
        document.getElementById("indice").style.display = "inline";
        document.getElementById("indice").textContent = "Obesidade" 
    }

    if(imc >= 35){
        document.getElementById("indice").style.display = "inline";
        document.getElementById("indice").textContent = "Obesidade Severa";
    }

    if(imc >= 40){
        document.getElementById("indice").style.display = "inline";
        document.getElementById("indice").textContent = "Obesidade Mórbida";
    }


}

function back() {
    document.getElementById("calculadora").style.display = "inline";
    document.getElementById("reply").style.display = "none";

}
