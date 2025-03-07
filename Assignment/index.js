document.addEventListener("DOMContentLoaded", function () {
    
    let userName = prompt("Welcome! What's your name?");
    
   
    if (!userName || userName.trim() === "") {
        userName = "Guest";
    }

    
    const greetingMessage = document.createElement("h2");
    greetingMessage.textContent = `Hello, ${userName}! Welcome to the Juice WRLD Tribute.`;
    greetingMessage.style.textAlign = "center";
    greetingMessage.style.color = "#ffcc00";

    
    document.querySelector("main").prepend(greetingMessage);
});
