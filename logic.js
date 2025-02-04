// script.js

// Function to handle the bot's response
function getResponse() {
    const userInput = document.getElementById('user-input').value.trim();
    const chatBox = document.getElementById('chat-box');
    
    if (userInput === "") return; // Don't process if input is empty
    
    // Display user's message
    displayMessage(userInput, 'user-message');
    
    // Clear the input field
    document.getElementById('user-input').value = "";

    // Process and generate bot response
    const botResponse = generateResponse(userInput);
    displayMessage(botResponse, 'bot-message');
    
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to display messages
function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', className);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
}

// Improved response generation logic
function generateResponse(input) {
    input = input.toLowerCase();

    // Check for basic greetings
    if (/hello|hi|hey/.test(input)) {
        return "Hello! How can I assist you today?";
    }

    // Math problem-solving using regular expressions
    if (/(\d+)\s*(\+|\-|\*|\/)\s*(\d+)/.test(input)) {
        const match = input.match(/(\d+)\s*(\+|\-|\*|\/)\s*(\d+)/);
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);

        switch (operator) {
            case '+':
                return `The result of ${num1} + ${num2} is ${num1 + num2}`;
            case '-':
                return `The result of ${num1} - ${num2} is ${num1 - num2}`;
            case '*':
                return `The result of ${num1} * ${num2} is ${num1 * num2}`;
            case '/':
                if (num2 === 0) {
                    return "Cannot divide by zero!";
                }
                return `The result of ${num1} / ${num2} is ${num1 / num2}`;
            default:
                return "I can only help with basic math operations (+, -, *, /).";
        }
    }

    // Square root calculation
    if (/sqrt\s+(\d+)/.test(input)) {
        const match = input.match(/sqrt\s+(\d+)/);
        const num = parseFloat(match[1]);
        return `The square root of ${num} is ${Math.sqrt(num)}`;
    }

    // Handle unknown questions
    return "Sorry, I couldn't understand that. Please try asking a math question or a greeting.";
}
