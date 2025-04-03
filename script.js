document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    // Append value to display
    function appendValue(value) {
        if (display.value === "0" && value !== ".") {
            display.value = value;
        } else {
            display.value += value;
        }
    }

    // Clear display
    function clearDisplay() {
        display.value = "0";
    }

    // Delete last character
    function deleteLast() {
        display.value = display.value.slice(0, -1);
        if (display.value === "") {
            display.value = "0";
        }
    }

    // Calculate result
    function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
            setTimeout(() => {
                display.value = "0";
            }, 1000);
        }
    }

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === "AC") {
                clearDisplay();
            } else if (value === "DEL") {
                deleteLast();
            } else if (value === "=") {
                calculate();
            } else {
                appendValue(value);
            }
        });
    });

    // Keyboard support
    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key)) {
            appendValue(key);
        } else if (key === "Enter") {
            calculate();
        } else if (key === "Backspace") {
            deleteLast();
        } else if (key === "Escape") {
            clearDisplay();
        }
    });
});



