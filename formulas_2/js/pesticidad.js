function calcularPesticida() {
    const baseMenor = parseFloat(document.getElementById("param1").value);
    const baseMayor = parseFloat(document.getElementById("param2").value);
    const altura = parseFloat(document.getElementById("param3").value);
    const ladoDerecho = parseFloat(document.getElementById("param4").value);
    const ladoInquierdo = parseFloat(document.getElementById("param5").value);


    if (isNaN(baseMenor) || isNaN(baseMayor) || isNaN(altura)) {
        alert("Por favor, ingrese todos los valores correctamente.");
        return;
    }

    const area = ((baseMenor + baseMayor) / 2) * altura;
    const litrosPorM2 = 1.5;
    const litrosPesticida = area * litrosPorM2;
    const metrosCerca = baseMenor + baseMayor + ladoDerecho + ladoInquierdo;

    document.getElementById("answer1").value = area.toFixed(2);
    document.getElementById("answer2").value = litrosPesticida.toFixed(2);
    document.getElementById("answer3").value = metrosCerca.toFixed(2);
}