document.addEventListener("DOMContentLoaded", () => {
    const formulas = [
        "Sacar el promedio de distancia de un nadador", "Calcular cuanto pesticida debe usarse",
        "Calcular cuantos ladrillos deben usarse para hacer una pared", "Calcular cuanta masa corporal tiene una persona",
        "Calcular la liquidación para tus empleados"
    ]
    const container = document.querySelector(".container__cards");

    formulas.forEach(formmula => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = formmula;

        container.appendChild(card)
    })
})