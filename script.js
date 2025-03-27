// script.js

function askQuestion() {
    var userInput = document.getElementById("user-input").value;
    
    if (userInput.trim() !== "") {
        // Show the user's message in the chat window
        var chatWindow = document.getElementById("chat-window");
        var userMessage = document.createElement("div");
        userMessage.classList.add("message");
        userMessage.textContent = "You: " + userInput;
        chatWindow.appendChild(userMessage);
        
        // Clear the input field
        document.getElementById("user-input").value = "";
        
        // Show AI response (simulated for now)
        var aiMessage = document.createElement("div");
        aiMessage.classList.add("message");
        aiMessage.textContent = "AI: Let me find the answer for you!";
        chatWindow.appendChild(aiMessage);
        
        // Scroll the chat window to the bottom
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
