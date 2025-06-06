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
  
  // Subjective submit logic
document.getElementById('submitSubjective').addEventListener('click', () => {
  const teamNumber = document.getElementById('teamNumber').value;
  const strategyNotes = document.getElementById('strategyNotes').value;
  const driverSkill = document.getElementById('driverSkill').value;
  const communication = document.getElementById('communication').value;
  const reliability = document.getElementById('reliability').value;

  const selectedAlliance = document.getElementById('redAlliance').classList.contains('selected') ? 'Red' :
                           document.getElementById('blueAlliance').classList.contains('selected') ? 'Blue' :
                           'None';

  if (!teamNumber) {
    alert("Please enter a team number.");
    return;
  }

  const data = {
    teamNumber,
    selectedAlliance,
    strategyNotes,
    driverSkill,
    communication,
    reliability
  };

  console.log("Subjective Data Submitted:", data);
  alert("Subjective data saved!");
});

// Alliance button logic
function clearAllianceSelection() {
  document.getElementById('redAlliance').classList.remove('selected');
  document.getElementById('blueAlliance').classList.remove('selected');
}

document.getElementById('redAlliance').addEventListener('click', () => {
  clearAllianceSelection();
  document.getElementById('redAlliance').classList.add('selected');
});

document.getElementById('blueAlliance').addEventListener('click', () => {
  clearAllianceSelection();
  document.getElementById('blueAlliance').classList.add('selected');
});
