document.getElementById("btnCalcular").addEventListener("click", function () {
    const pesoActual = parseFloat(document.getElementById("param1").value);
    const alturaActualCm = parseFloat(document.getElementById("param2").value);
    const alturaActual = alturaActualCm / 100;

    if (isNaN(pesoActual) || isNaN(alturaActual)) {
        alert("Por favor, ingrese un valor numérico en todos los campos");
        return;
    }

    const masaCorporal = pesoActual / (alturaActual * alturaActual);
    console.log("Masa corporal calculada:", masaCorporal);

    let rango;

    if (masaCorporal < 16) {
        rango = "Delgadez Severa";
    } else if (masaCorporal >= 16 && masaCorporal < 17) {
        rango = "Delgadez Moderada";
    } else if (masaCorporal >= 17 && masaCorporal <= 18.49) {
        rango = "Delgadez Aceptable";
    } else if (masaCorporal >= 18.5 && masaCorporal <= 24.99) {
        rango = "Peso Normal";
    } else if (masaCorporal >= 25 && masaCorporal <= 29.99) {
        rango = "Sobrepeso";
    } else if (masaCorporal >= 30 && masaCorporal <= 34.99) {
        rango = "Obesidad Clase I";
    } else if (masaCorporal >= 35 && masaCorporal <= 39.99) {
        rango = "Obesidad Clase II";
    } else if (masaCorporal >= 40 && masaCorporal <= 49.99) {
        rango = "Obesidad Clase III (Obesidad Mórbida)";
    } else {
        rango = "Obesidad Clase IV (Obesidad Extrema)";
    }

    document.getElementById("masa").value = masaCorporal.toFixed(2);
    document.getElementById("rango").value = rango;
});