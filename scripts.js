function showMessage(response){
    if(response === 'No'){
        const noButton = document.getElementById("noButton");
        const container = document.querySelector("container");
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        noButton.style.position = "absolute";

        document.getElementsByClassName("image")[0].src = "images/catGun.jpg";

        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        document.getElementById("question").textContent = 
        "This button does not work... Wompidi Wompada Womp";
        document.getElementById("name").style.display = "none";
    }

    if(response === 'Yes'){
        document.getElementById("name").remove();
        document.getElementById("noButton").remove();

        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "YAYAYAYYA I'll see you on the 14th!!"
        yesMessage.style.display = "block";
        yesMessage.style.fontSize = "normal";

        document.getElementsByClassName("image")[0].src = "images/danceCat.gif";

        document.getElementById("yesButton").remove();
    }
}