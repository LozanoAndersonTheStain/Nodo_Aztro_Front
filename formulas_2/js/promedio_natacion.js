document.addEventListener("DOMContentLoaded", () => {
    const inputsContainer = document.getElementById("container__inputs");
    const btnCalcular = document.getElementById("btnCalcular");
    const btnAgregar = document.getElementById("btnAgregar");
    const btnEliminar = document.getElementById("btnEliminar");

    let inputCount = 1;

    btnAgregar.addEventListener('click', () => {
        inputCount++;

        const newLabel = document.createElement("label");
        newLabel.className = "label";
        newLabel.setAttribute("for", `param${inputCount}`);
        newLabel.textContent = `Segundos prueba ${inputCount}`;

        const newInput = document.createElement("input");
        newInput.id = `param${inputCount}`;
        newInput.className = `input input${inputCount}`;
        newInput.type = "number";
        newInput.placeholder = `Segundos: P${inputCount}`;

        inputsContainer.appendChild(newLabel);
        inputsContainer.appendChild(newInput);
    });

    btnEliminar.addEventListener("click", () => {
        if (inputCount > 1) {
            inputsContainer.removeChild(inputsContainer.lastChild);
            inputsContainer.removeChild(inputsContainer.lastChild);
            inputCount--;
        }
    });

    btnCalcular.addEventListener("click", () => {
        let total = 0;
        for (let i = 1; i <= inputCount; i++) {
            const input = document.getElementById(`param${i}`);
            total += parseInt(input.value) || 0;
        }
        const average = total / inputCount;
        document.getElementById("answer").value = average.toFixed(2);
    });
})