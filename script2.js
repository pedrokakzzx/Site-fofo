var myMusic= document.getElementById("music");

function revealMessage() {
    var message = document.getElementById("message");
    message.style.display = "block";
    myMusic.play();
    myMusic.volume = 0.1;
    myMusic.currentTime = 10;
  }