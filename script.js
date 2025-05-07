const texts = ["ux/ui", "website", "empathetic", "graphic"];
const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D"];
let currentIndex = 0;
const dynamicText = document.getElementById('dynamicText');

function changeTextAndColor() {
  dynamicText.style.opacity = 0; 
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    dynamicText.textContent = texts[currentIndex];
    dynamicText.style.backgroundColor = colors[currentIndex]; 
    dynamicText.style.opacity = 1; 
  }, 500); 
}

dynamicText.style.backgroundColor = colors[currentIndex]; 
setInterval(changeTextAndColor, 3000); 
