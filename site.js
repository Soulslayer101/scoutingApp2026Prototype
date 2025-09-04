document.addEventListener('DOMContentLoaded', function () {
  const screens = {
    main: document.getElementById('main-screen'),
    sub: document.getElementById('sub'),
    obj: document.getElementById('obj'),
    play: document.getElementById('play'),
    dataScreen: document.getElementById('dataScreen') // Make sure this element exists!
  };

  let subjectiveCompleted = false;
  let playCompleted = false;

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

  document.getElementById('robotData').addEventListener('click', () => {
    if (subjectiveCompleted) {
      showScreen('dataScreen');
    } else {
      alert("Please complete both Subjective and Play-Off screens before proceeding to Robot Data.");
    }
  });

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
    } else if (!strategyNotes) {
      alert("Please enter the team's strategy.");
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

    // These variables must be defined somewhere before being used
    const data2 = {
      algae,
      l1Coral,
      l2Coral,
      l3Coral,
      l4Coral,
      NetScore,
      Proccessor
    };

    console.log("Subjective Data Submitted:", data);
    alert("Subjective data saved!");
    subjectiveCompleted = true;

    document.getElementById('outputData').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    document.getElementById('outputData2').innerHTML = `<pre>${JSON.stringify(data2, null, 2)}</pre>`;
  });

  // Objective submit logic
  document.getElementById('submitObjective').addEventListener('click', () => {
    // Add validation here if needed
    alert("Objective data saved!");
    objectiveCompleted = true;
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
});
