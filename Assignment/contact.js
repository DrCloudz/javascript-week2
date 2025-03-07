function generateRandomNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}

function sendMessage(event) {
    event.preventDefault();

    const userEmail = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();
    const freeItem = document.getElementById("free-item").value;

    if (!userEmail || !userMessage) {
        document.getElementById("error-message").innerText = "Please fill in all required fields.";
        return;
    }

    const randomNumber = generateRandomNumber();
    const subject = `Contact Request #${randomNumber}`;
    const businessEmail = "Markellspann9@gmail.com";
    const ccEmail = "Markellspann9@gmail.com";

    const mailtoLink = `mailto:${businessEmail}?cc=${ccEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Message: ${userMessage}\nFree Item: ${freeItem}\nFrom: ${userEmail}`)}`;

    
    window.location.href = mailtoLink;

    
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("success-message").style.display = "block";

   
    setTimeout(() => {
        window.location.href = "index.html";
    }, 5000);
}
