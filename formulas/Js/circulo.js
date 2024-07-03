function calcularCirculo() {

    let num1 = parseFloat(document.getElementById("param1").value);

    let area = Math.PI * num1 * num1;
    document.getElementById("input1").value = area.toFixed(2);

    let perimetro = 2 * Math.PI * num1;
    document.getElementById("input2").value = perimetro.toFixed(2);
}
