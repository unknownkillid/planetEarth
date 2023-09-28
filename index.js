const startButton = document.getElementById('startBtn')
const loadingDiv = document.getElementById('loadingDiv')


startButton.addEventListener('click', () => {
    startButton.classList.add('startNone')
    setTimeout(() => {

        loadingDiv.style.display = 'flex'
        startButton.style.display = 'none'

        setTimeout(() => {
            loadingDiv.classList.add('loadingDisplay')
            document.getElementById('startContainer').classList.add('containerOpac')
        }, 700);
    }, 500);

    function updateProgressBar(progressBar, targetWidth, interval) {
      let currentWidth = 0;
      const step = 1;
      const progressBarElement = progressBar.querySelector(".progress-bar");

      const update = () => {
          currentWidth += step;
          progressBarElement.style.width = currentWidth + "%";
          progressBarElement.textContent = currentWidth + "%";

          if (currentWidth < targetWidth) {
              requestAnimationFrame(update);
          } else if (currentWidth === 100) {
            progressBarElement.classList.add("progress-bar-green");
        }
      };

      setTimeout(update, interval);
  }

  const progressBarElements = document.querySelectorAll(".progress");
  const intervals = [1500, 3000, 4500, 6000];

  progressBarElements.forEach((progressBar, index) => {
      const targetWidth = 100;
      updateProgressBar(progressBar, targetWidth, intervals[index]);
  });
})





