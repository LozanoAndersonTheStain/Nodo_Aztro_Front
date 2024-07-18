document.getElementById("btnCalcular").addEventListener("click", function () {
    const largoLadrillo = parseFloat(document.getElementById("param1").value) * 100;
    const altoLadrillo = parseFloat(document.getElementById("param2").value) * 100;
    const alturaPared = parseFloat(document.getElementById("param3").value) * 100;
    const anchoPared = parseFloat(document.getElementById("param4").value) * 100;
    const grosorVertical = parseFloat(document.getElementById("param5").value) || 0;
    const grosorLateral = parseFloat(document.getElementById("param6").value) || 0;

    if (isNaN(largoLadrillo) || isNaN(altoLadrillo) || isNaN(alturaPared) || isNaN(anchoPared)) {
        alert("Por favor, ingrese valores numéricos en todos los campos");
        return;
    }

    const areaLadrillo = largoLadrillo * altoLadrillo;
    const areaPared = (alturaPared + 2 * grosorLateral) * (anchoPared + 2 * grosorVertical);
    const cantidadLadrillos = Math.ceil(areaPared / areaLadrillo);

    document.getElementById("answer").value = cantidadLadrillos;
});