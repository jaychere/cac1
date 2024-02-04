document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resetBtn = document.getElementById('reset-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        calculateCompoundInterest();
    });

    resetBtn.addEventListener('click', function() {
        form.reset();
        clearResult();
    });
});

function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const monthlyAddition = parseFloat(document.getElementById('monthlyAddition').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(monthlyAddition)) {
        displayResult("Please enter valid numbers.");
        return;
    }

    const n = time * 12;
    const r = rate / 100 / 12;

    const amount = principal * Math.pow(1 + r, n) + (monthlyAddition * ((Math.pow(1 + r, n) - 1) / r));
    const interest = amount - principal - (monthlyAddition * n);

    displayResult(`After ${time} years, at an interest rate of ${rate}%, with a monthly addition of ₹${monthlyAddition.toFixed(2)}, the total amount will be ₹${amount.toFixed(2)} and the interest earned will be ₹${interest.toFixed(2)}.`);
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}

function clearResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
}
