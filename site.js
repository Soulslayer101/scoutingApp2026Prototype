document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('Subjective').addEventListener('click', function () {
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('sub').style.display = 'flex';
      });

      document.getElementById('Objective').addEventListener('click', function () {
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('obj').style.display = 'flex';
      });

      document.getElementById('play-off').addEventListener('click', function () {
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('play').style.display = 'flex';
      });

      const backButtons = document.querySelectorAll('.back-btn');
      backButtons.forEach(button => {
        button.addEventListener('click', function () {
          document.getElementById('sub').style.display = 'none';
          document.getElementById('obj').style.display = 'none';
          document.getElementById('play').style.display = 'none';
          document.getElementById('main-screen').style.display = 'flex';
        });
      });

      const coralButtons = document.querySelectorAll('.coral-buttons button');
      coralButtons.forEach(button => {
        button.dataset.count = 0;
        button.dataset.originalText = button.textContent;

        button.addEventListener('click', function () {
          let count = parseInt(button.dataset.count) + 1;
          button.dataset.count = count;
          button.textContent = `${button.dataset.originalText}: ${count}`;
        });
      });

      document.getElementById('resetCounts').addEventListener('click', function () {
        coralButtons.forEach(button => {
          button.dataset.count = 0;
          button.textContent = button.dataset.originalText;
        });
      });
    });
