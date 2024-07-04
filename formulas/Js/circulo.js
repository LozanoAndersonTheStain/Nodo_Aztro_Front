function calcularCirculo() {

    let num1 = parseFloat(document.getElementById("param1").value);

    if (isNaN(num1) || num1 <= 0) {
        alert("Por favor, ingresa un valor válido para el radio.");
        return;
    }

    let area = Math.PI * num1 * num1;
    document.getElementById("input1").value = area.toFixed(2);

    let perimetro = 2 * Math.PI * num1;
    document.getElementById("input2").value = perimetro.toFixed(2);
}
