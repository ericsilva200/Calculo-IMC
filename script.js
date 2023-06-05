function calc() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("result");
    let result = peso / (altura * altura);
    resultado.value = result;
}