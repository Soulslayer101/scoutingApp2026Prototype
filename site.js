document.addEventListener('DOMContentLoaded', function () {
    const screens = {
      main: document.getElementById('main-screen'),
      sub: document.getElementById('sub'),
      obj: document.getElementById('obj'),
      play: document.getElementById('play')
    };
  
    function showScreen(screenName) {
      // Hide all screens
      Object.values(screens).forEach(screen => screen.style.display = 'none');
      // Show requested screen
      screens[screenName].style.display = 'flex';
    }
  
    // Navigation buttons
    document.getElementById('Subjective').addEventListener('click', () => showScreen('sub'));
    document.getElementById('Objective').addEventListener('click', () => showScreen('obj'));
    document.getElementById('play-off').addEventListener('click', () => showScreen('play'));
  
    // Back buttons return to main
    document.querySelectorAll('.back-btn').forEach(button => {
      button.addEventListener('click', () => showScreen('main'));
    });
  
    // Coral buttons logic
    const coralButtons = document.querySelectorAll('.coral-buttons button');
    coralButtons.forEach(button => {
      button.dataset.count = 0;
      button.dataset.originalText = button.textContent;
  
      button.addEventListener('click', () => {
        let count = parseInt(button.dataset.count) + 1;
        button.dataset.count = count;
        button.textContent = `${button.dataset.originalText}: ${count}`;
      });
    });
  
    // Reset counts
    document.getElementById('resetCounts').addEventListener('click', () => {
      coralButtons.forEach(button => {
        button.dataset.count = 0;
        button.textContent = button.dataset.originalText;
      });
    });
  });
  
