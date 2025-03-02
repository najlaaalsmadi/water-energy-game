let currentYear = 2025;
let waterLevel = 100;
let gameArea = document.getElementById("game-area");
let weatherEffect = document.getElementById("weather-effect");
let difficultyLevel = "easy";
let score = 0;

const weatherTypes = ["rain", "sunny", "storm", "snow"];

const scenarios = {
    easy: [
        {
            year: 2025,
            question: "🚰 You have the opportunity to install water-saving systems in the city. Do you want to proceed?",
            options: [
                { text: "Yes, it will save a lot of water!", impact: 20, score: 10 },
                { text: "No, it's too expensive!", impact: -10, score: -5 }
            ]
        },
        {
            year: 2027,
            question: "💦 A new factory wants to consume large amounts of water. Do you agree?",
            options: [
                { text: "Yes, because it will create new jobs", impact: -15, score: -10 },
                { text: "No, water must be used wisely", impact: 10, score: 15 }
            ]
        }
    ]
};

function startGame(level) {
    currentYear = 2025;
    waterLevel = 100;
    score = 0;
    difficultyLevel = level;
    gameArea.innerHTML = "";
    animateWeather();
    animateWaterLevel();
    playSound("start");
    nextScenario();
}

function nextScenario() {
    if (currentYear > 2035) {
        endGame();
        return;
    }

    changeWeather();

    let scenario = scenarios[difficultyLevel].find(s => s.year === currentYear);
    if (!scenario) {
        currentYear += 2;
        nextScenario();
        return;
    }

    gameArea.innerHTML = `<h3 class='fade-in'>${scenario.question}</h3>`;
    scenario.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option.text;
        button.classList.add("btn", "btn-primary", "m-2", "pulse");
        button.onclick = function () {
            playSound("click");
            waterLevel += option.impact;
            score += option.score;
            currentYear += 2;
            updateGameStatus();
            animateWaterLevel();
            nextScenario();
        };
        gameArea.appendChild(button);
    });
}

function updateGameStatus() {
    gameArea.innerHTML += `<p class='slide-in'>🚰 Water Level Now: ${waterLevel}% | 🌟 Score: ${score}</p>`;
}

function animateWaterLevel() {
    let waterElement = document.createElement("div");
    waterElement.classList.add("water-animation");
    waterElement.style.height = `${Math.max(waterLevel, 0)}%`;
    document.body.appendChild(waterElement);
    setTimeout(() => waterElement.remove(), 2000);
}

function playSound(action) {
    let sound;
    switch (action) {
        case "start":
            sound = new Audio("/sounds/start.wav");
            break;
        case "click":
            sound = new Audio("/sounds/click.wav");
            break;
        case "win":
            sound = new Audio("/sounds/win.wav");
            break;
        case "lose":
            sound = new Audio("/sounds/lose.wav");
            break;
    }
    sound.play();
}

function changeWeather() {
    let randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    weatherEffect.className = `weather-effect ${randomWeather}`;
}

function endGame() {
    let resultMessage = waterLevel > 50 ? `🎉 Great Job! You saved the water! Your Score: ${score}` : `😢 Unfortunately, your water consumption was excessive! Your Score: ${score}`;
    gameArea.innerHTML = `<h2 class='zoom-in'>${resultMessage}</h2>`;
    playSound(waterLevel > 50 ? "win" : "lose");
}
