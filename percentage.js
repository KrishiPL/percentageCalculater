// Function to calculate the percentage
const percentageCalculator = (percentage, number) => {
    let division = number / 100;
    let result = percentage * division;
    return result;
}

// Function to handle the calculation and update the result
function calculatePercentage() {
    // Get values from the input fields
    const percentage = parseFloat(document.getElementById('percentage').value);
    const number = parseFloat(document.getElementById('number').value);
    
    // Validate input values
    if (isNaN(percentage) || isNaN(number)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    // Perform the calculation
    const output = percentageCalculator(percentage, number);

    // Update the result in the UI
    document.getElementById('result').textContent = `The result is: ${output.toFixed(2)}% `;
}
