// Function to open the envelope and play background music
function openEnvelope() {
    document.getElementById("popup").classList.add("show");
    document.getElementById("bgm").play();
  }
  
  // Function to create heart shapes when mouse hovers over the screen
  document.addEventListener("mousemove", function(event) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = event.pageX + "px";
    heart.style.top = event.pageY + "px";
    document.getElementById("heart-container").appendChild(heart);
  
    // Remove the heart shape after a short delay
    setTimeout(() => {
      heart.remove();
    }, 2000);
  });
  