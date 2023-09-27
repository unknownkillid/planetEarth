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

    const loadingItems = document.querySelectorAll('.percentLoading');
    const headers = document.querySelectorAll('.loadingDiv h1');
    const loadingCenter = document.querySelectorAll('.loadingcenter');
    let currentIndex = 0;

    function animateLoading() {
        const currentLoadingItem = loadingItems[currentIndex];
        const currentHeader = headers[currentIndex];
        const loadingGreen = loadingCenter[currentIndex]
        let currentPercentage = 0;

        const animationInterval = setInterval(() => {
            currentPercentage += 1;
            currentLoadingItem.textContent = currentPercentage + '%';
            loadingGreen.style.width += 1


            if (currentPercentage >= 100) {
                clearInterval(animationInterval);
                currentLoadingItem.style.opacity = 1;
                currentIndex++;
                const activate = new Audio()
                activate.src = 'assets/sounds/Audio systems activa.m4a'
                activate.play()

                if (currentIndex < loadingItems.length) {
                    setTimeout(animateLoading, 1500);

                }
                currentHeader.style.border = '3px solid green';
            }
        }, 20);

    }

    animateLoading();
})





