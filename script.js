// Load stored theme color on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedColor = localStorage.getItem('themeColor');
  if (storedColor) {
    document.body.style.setProperty('--bg-color', storedColor);
    document.getElementById('color-picker').value = storedColor;
  }
});

// Save user color preference
document.getElementById('save-color').addEventListener('click', () => {
  const color = document.getElementById('color-picker').value;
  document.body.style.setProperty('--bg-color', color);
  localStorage.setItem('themeColor', color);
});

// Trigger CSS animation on button click
const animateBtn = document.getElementById('animate-btn');
animateBtn.addEventListener('click', () => {
  animateBtn.classList.remove('animate'); // Reset if already animated
  void animateBtn.offsetWidth; // Trigger reflow
  animateBtn.classList.add('animate');
});
