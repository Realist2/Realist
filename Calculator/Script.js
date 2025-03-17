const calcScreen = document.getElementById("calc-screen");
const buttons = document.querySelector(".calc-buttoms"); // Corrected selector

// Initialize display value
calcScreen.value = "";

// Event delegation for all button clicks
buttons.addEventListener("click", (e) => {
    const button = e.target;
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action) {
        handleAction(action);
    } else if (value) {
        appendValue(value);
    }
});

function appendValue(value) {
    calcScreen.value += value;
}

function handleAction(action) {
    switch (action) {
        case "clear":
            calcScreen.value = "";
            break;
        case "delete":
            calcScreen.value = calcScreen.value.slice(0, -1);
            break;
        case "equals":
            try {
                // Safer calculation using Function constructor
                calcScreen.value = new Function('return ' + calcScreen.value.replace('%', '/100'))();
            } catch (e) {
                calcScreen.value = "Error";
            }
            break;
    }
}