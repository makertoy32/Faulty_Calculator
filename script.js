let expression = '';
let display = document.querySelector(".display");

// Handle input buttons
const handleInput = (e) => {
    let value = e.target.innerText;

    // Clear all
    if (value === 'AC') {
        expression = '';
        display.value = '';
        return;
    }

    // Prevent multiple decimal points in the same number
    if (value === '.') {
        let lastNumber = expression.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes('.')) return;
    }

    // Add input to expression
    expression += value;
    display.value = expression;
};


const calculate = () => {
    try {
        let result = Function(`"use strict"; return (${expression})`)();

        if (Math.random() < 0.1) {
           
            result = result + (Math.floor(Math.random() * 10) - 5); 
        }

        display.value = result;
        expression = result.toString(); 
    } catch {
        display.value = "Error";
        expression = '';
    }
};

// Dark mode toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});