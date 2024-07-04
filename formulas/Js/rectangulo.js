function calcularRectangulo() {

    let num1 = parseFloat(document.getElementById("param1").value);
    let num2 = parseFloat(document.getElementById("param2").value);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        alert("Por favor, ingresa valores válidos para la base y la altura.");
        return;
    }

    let area = num1 * num2;
    document.getElementById("input1").value = area;

    let perimetro = 2 * (num1 + num2);
    document.getElementById("input2").value = perimetro;

    let disgonal = Math.sqrt((num1 * num1) + (num2 + num2)).toFixed(2);
    document.getElementById("input3").value = disgonal;
}
