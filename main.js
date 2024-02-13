function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const container = document.querySelector(".container");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        noButton.style.position = "absolute";

        document.getElementsByClassName("image")[0].src = "images/gun.gif";

        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        const message = document.getElementById("question");
        message.textContent = "NO NO NO! Try Again!";
        message.style.fontStyle = "normal";
        message.style.fontSize = "60px";
        message.style.display = "block";

        document.getElementById("name").style.display = "none";
        
        
        
    }

    if (response === "Yes") {
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();

        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "LESGOOO BabyGirl";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        yesMessage.style.fontSize = "80px";
        yesMessage.style.textAlign = "center";
        document.getElementsByClassName("image")[0].src = "images/dance.gif";

        document.getElementById("yesButton").remove();
    }
}
