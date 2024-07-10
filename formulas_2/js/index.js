document.addEventListener("DOMContentLoaded", () => {
    const formulas = [
        { title: "Sacar el promedio de distancia de un nadador", url: "../../Pages/Ecuaciones/promedio_temporal.html" },
        { title: "Calcular cuanto pesticida debe usarse", url: "#" },
        { title: "Calcular cuantos ladrillos deben usarse para hacer una pared", url: "#" },
        { title: "Calcular cuanta masa corporal tiene una persona", url: "#" },
        { title: "Calcular la liquidación para tus empleados", url: "#" }
    ];
    const container = document.querySelector(".container__cards");

    formulas.forEach(formula => {
        const card = document.createElement("a");
        card.className = "card";
        card.textContent = formula.title;
        card.href = formula.url;

        container.appendChild(card);
    });
});