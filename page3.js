console.log("Hello, Console!");

function toggleText() {
  const foldedText = document.getElementById("foldedText");
  const toggleButton = document.getElementById("toggleButton");
    
    if (foldedText.classList.contains("folded-text")) {
      foldedText.classList.remove("folded-text");
      foldedText.classList.add("unfolded-text");
      foldedText.style.maxHeight = null;
      toggleButton.textContent = "Hide";
    } else {
      foldedText.classList.remove("unfolded-text");
      foldedText.classList.add("folded-text");
      foldedText.style.maxHeight = "100px"; 
      toggleButton.textContent = "Show";
    }
  }