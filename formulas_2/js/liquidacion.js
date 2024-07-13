document.getElementById("btnCalcular").addEventListener("click", () => {
    const diasTrabajados = parseInt(document.getElementById("param1").value);
    const horasExtrasDiurnas = parseInt(document.getElementById("param3").value);
    const horasExtrasNocturnas = parseInt(document.getElementById("param4").value);
    const horasExtrasFestivas = parseInt(document.getElementById("param5").value);

    if (isNaN(diasTrabajados) || isNaN(horasExtrasDiurnas) || isNaN(horasExtrasNocturnas) || isNaN(horasExtrasFestivas)) {
        alert("Por favor, ingrese un valor numérico en todos los campos");
        return;
    }

    const valorDia = 43000;
    const valorHoraDiurna = 6915;
    const valorHoraNocturna = 9681;
    const valorHoraFestiva = 11064;

    const salarioBruto = (diasTrabajados * valorDia) +
        (horasExtrasDiurnas * valorHoraDiurna) +
        (horasExtrasNocturnas * valorHoraNocturna) +
        (horasExtrasFestivas * valorHoraFestiva);

    const descuentoSalud = salarioBruto * 0.04;
    const descuentoPension = salarioBruto * 0.04;
    const descuentoAlimentacion = salarioBruto * 0.03;
    const totalDescuentos = descuentoSalud + descuentoPension + descuentoAlimentacion;

    const salarioTotal = salarioBruto - totalDescuentos;

    document.getElementById("answer1").value = salarioBruto.toLocaleString('es-ES');
    document.getElementById("answer2").value = totalDescuentos.toLocaleString('es-ES');
    document.getElementById("answer3").value = salarioTotal.toLocaleString('es-ES');
});