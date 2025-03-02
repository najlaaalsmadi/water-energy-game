////const player = document.getElementById("player");
////const gameContainer = document.getElementById("game-container");
////const waterScoreDisplay = document.getElementById("water-score");
////const energyScoreDisplay = document.getElementById("energy-score");
////const levelDisplay = document.getElementById("level-count");
////const timerDisplay = document.getElementById("timer-count");
////const messageDisplay = document.getElementById("message");
////const bgMusic = document.getElementById("bg-music");
////const collectWaterSound = document.getElementById("collect-water");
////const collectEnergySound = document.getElementById("collect-energy");
////const errorSound = document.getElementById("error-sound");
////const restartBtn = document.getElementById("restart-btn");

////let waterScore = 0;
////let energyScore = 0;
////let level = 1;
////let fallSpeed = 50;
////let itemInterval = 1000;
////let timeLeft = 30;
////let playerPosition = gameContainer.offsetWidth / 2;
////let gameRunning = true;

////// تشغيل الموسيقى عند بدء اللعبة
////bgMusic.play();

////// حركة اللاعب باستخدام الأسهم
////document.addEventListener("keydown", (event) => {
////    if (event.key === "ArrowLeft" && playerPosition > 10) {
////        playerPosition -= 20;
////        player.src = "/img/game4/l.png";
////    } else if (event.key === "ArrowRight" && playerPosition < gameContainer.offsetWidth - 80) {
////        playerPosition += 20;
////        player.src = "/img/game4/r.png";
////    }
////    player.style.left = playerPosition + "px";
////});

////// إعادة الصورة الأصلية بعد الحركة
////document.addEventListener("keyup", () => {
////    player.src = "/img/game4/r.png";
////});

////// إنشاء العناصر المتساقطة
////function createFallingItem(type, imageSrc) {
////    if (!gameRunning) return;

////    const item = document.createElement("img");
////    item.classList.add("item");
////    item.src = imageSrc;
////    item.style.left = Math.random() * (gameContainer.offsetWidth - 80) + "px";
////    item.style.top = "0px";
////    gameContainer.appendChild(item);

////    let fallInterval = setInterval(() => {
////        let currentTop = parseInt(item.style.top);
////        if (currentTop > gameContainer.offsetHeight - 80) {
////            let playerX = player.offsetLeft;
////            let itemX = item.offsetLeft;

////            if (Math.abs(playerX - itemX) < 80) {
////                if (type === "water") {
////                    waterScore += 10;
////                    collectWaterSound.play();
////                    player.src = "/img/game4/success.png";
////                } else if (type === "energy") {
////                    energyScore += 10;
////                    collectEnergySound.play();
////                    player.src = "/img/game4/success.png";
////                } else if (type === "trash") {
////                    errorSound.play();
////                    player.src = "/img/game4/error.png";
////                }
////                updateScore();
////                gameContainer.removeChild(item);
////                clearInterval(fallInterval);
////                setTimeout(() => player.src = "/img/game4/r.png", 500);
////            } else {
////                gameContainer.removeChild(item);
////                clearInterval(fallInterval);
////            }
////        } else {
////            item.style.top = currentTop + 5 + "px";
////        }
////    }, fallSpeed);
////}

////// تحديث النقاط والمستوى
////function updateScore() {
////    waterScoreDisplay.textContent = waterScore;
////    energyScoreDisplay.textContent = energyScore;

////    if (waterScore + energyScore >= 50 && level === 1) {
////        levelUp(2, 40, 800, "💡 Tip: Fix leaks to save water!");
////    }
////    if (waterScore + energyScore >= 100 && level === 2) {
////        levelUp(3, 30, 600, "⚡ Tip: Use LED bulbs to save energy!");
////    }
////}

////// ترقية المستوى
////function levelUp(newLevel, newSpeed, newInterval, tip) {
////    level = newLevel;
////    levelDisplay.textContent = level;
////    fallSpeed = newSpeed;
////    itemInterval = newInterval;
////    messageDisplay.textContent = tip;

////    clearInterval(spawnInterval);
////    spawnInterval = setInterval(spawnItems, itemInterval);
////}

////// تشغيل اللعبة وإسقاط العناصر
////function spawnItems() {
////    let randomType = Math.random() < 0.4 ? "water" : Math.random() < 0.8 ? "energy" : "trash";
////    let imgSrc = randomType === "water" ? "/img/game4/12.png" : randomType === "energy" ? "/img/game4/10.png" : "/img/game4/11.png";
////    createFallingItem(randomType, imgSrc);
////}

////let spawnInterval = setInterval(spawnItems, itemInterval);

////// تشغيل المؤقت
////let timerInterval = setInterval(() => {
////    timeLeft--;
////    timerDisplay.textContent = timeLeft;
////    if (timeLeft <= 0) endGame();
////}, 1000);

////// إنهاء اللعبة
////function endGame() {
////    clearInterval(spawnInterval);
////    clearInterval(timerInterval);
////    messageDisplay.textContent = "🎉 Game Over!";
////    gameRunning = false;
////    restartBtn.style.display = "block";
////}

////// إعادة تشغيل اللعبة
////restartBtn.addEventListener("click", () => location.reload());
//const player = document.getElementById("player");
//const gameContainer = document.getElementById("game-container");
//const waterScoreDisplay = document.getElementById("water-score");
//const energyScoreDisplay = document.getElementById("energy-score");
//const levelDisplay = document.getElementById("level-count");
//const timerDisplay = document.getElementById("timer-count");
//const messageDisplay = document.getElementById("message");
//const bgMusic = document.getElementById("bg-music");
//const collectWaterSound = document.getElementById("collect-water");
//const collectEnergySound = document.getElementById("collect-energy");
//const errorSound = document.getElementById("error-sound");
//const gameOverPopup = document.getElementById("game-over-popup");
//const finalScore = document.getElementById("final-score");
//const restartBtn = document.getElementById("restart-btn");

//let waterScore = 0;
//let energyScore = 0;
//let level = 1;
//let fallSpeed = 50;
//let itemInterval = 1000;
//let timeLeft = 30;
//let playerPosition = gameContainer.offsetWidth / 2;
//let gameRunning = true;

//// تشغيل الموسيقى عند بدء اللعبة
//bgMusic.play();

//// حركة اللاعب باستخدام الأسهم
//document.addEventListener("keydown", (event) => {
//    if (event.key === "ArrowLeft" && playerPosition > 10) {
//        playerPosition -= 20;
//        player.src = "/img/game4/l.png";
//    } else if (event.key === "ArrowRight" && playerPosition < gameContainer.offsetWidth - 80) {
//        playerPosition += 20;
//        player.src = "/img/game4/r.png";
//    }
//    player.style.left = playerPosition + "px";
//});

//// إعادة الصورة الأصلية بعد الحركة
//document.addEventListener("keyup", () => {
//    player.src = "/img/game4/r.png";
//});

//// إنشاء العناصر المتساقطة
//function createFallingItem(type, imageSrc) {
//    if (!gameRunning) return;

//    const item = document.createElement("img");
//    item.classList.add("item");
//    item.src = imageSrc;
//    item.style.left = Math.random() * (gameContainer.offsetWidth - 80) + "px";
//    item.style.top = "0px";
//    gameContainer.appendChild(item);

//    let fallInterval = setInterval(() => {
//        let currentTop = parseInt(item.style.top);
//        if (currentTop > gameContainer.offsetHeight - 80) {
//            let playerX = player.offsetLeft;
//            let itemX = item.offsetLeft;

//            if (Math.abs(playerX - itemX) < 80) {
//                if (type === "water") {
//                    waterScore += 10;
//                    collectWaterSound.play();
//                } else if (type === "energy") {
//                    energyScore += 10;
//                    collectEnergySound.play();
//                } else if (type === "trash") {
//                    errorSound.play();
//                }
//                updateScore();
//                gameContainer.removeChild(item);
//                clearInterval(fallInterval);
//            } else {
//                gameContainer.removeChild(item);
//                clearInterval(fallInterval);
//            }
//        } else {
//            item.style.top = currentTop + 5 + "px";
//        }
//    }, fallSpeed);
//}

//// تحديث النقاط والمستوى
//function updateScore() {
//    waterScoreDisplay.textContent = waterScore;
//    energyScoreDisplay.textContent = energyScore;

//    if (waterScore + energyScore >= 50 && level === 1) {
//        levelUp(2, 40, 800, "💡 Tip: Fix leaks to save water!");
//    }
//    if (waterScore + energyScore >= 100 && level === 2) {
//        levelUp(3, 30, 600, "⚡ Tip: Use LED bulbs to save energy!");
//    }
//}

//// إنهاء اللعبة وعرض نافذة النهاية
//function endGame() {
//    gameRunning = false;
//    clearInterval(spawnInterval);
//    clearInterval(timerInterval);
//    finalScore.textContent = `Final Score: Water ${waterScore} | Energy ${energyScore}`;
//    gameOverPopup.style.display = "block";
//}

//// تشغيل اللعبة وإسقاط العناصر
//function spawnItems() {
//    let randomType = Math.random() < 0.5 ? "water" : "energy";
//    let imgSrc = randomType === "water" ? "/img/game4/12.png" : "/img/game4/10.png";
//    createFallingItem(randomType, imgSrc);
//}

//let spawnInterval = setInterval(spawnItems, itemInterval);
//let timerInterval = setInterval(() => {
//    timeLeft--;
//    timerDisplay.textContent = timeLeft;
//    if (timeLeft <= 0) endGame();
//}, 1000);

//// إعادة تشغيل اللعبة
//restartBtn.addEventListener("click", () => location.reload());
const player = document.getElementById("player");
const gameContainer = document.getElementById("game-container");
const waterScoreDisplay = document.getElementById("water-score");
const energyScoreDisplay = document.getElementById("energy-score");
const levelDisplay = document.getElementById("level-count");
const timerDisplay = document.getElementById("timer-count");
const messageDisplay = document.getElementById("message");
const bgMusic = document.getElementById("bg-music");
const collectWaterSound = document.getElementById("collect-water");
const collectEnergySound = document.getElementById("collect-energy");
const errorSound = document.getElementById("error-sound");
const gameOverPopup = document.getElementById("game-over-popup");
const finalScore = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

let waterScore = 0;
let energyScore = 0;
let level = 1;
let fallSpeed = 50;
let itemInterval = 1000;
let timeLeft = 30;
let playerPosition = gameContainer.offsetWidth / 2;
let gameRunning = true;

// تشغيل موسيقى الخلفية
bgMusic.play();

// تحريك اللاعب باستخدام الأسهم
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && playerPosition > 10) {
        playerPosition -= 20;
        player.src = "/img/game4/l.png";
    } else if (event.key === "ArrowRight" && playerPosition < gameContainer.offsetWidth - 80) {
        playerPosition += 20;
        player.src = "/img/game4/r.png";
    }
    player.style.left = playerPosition + "px";
});

document.addEventListener("keyup", () => {
    player.src = "/img/game4/r.png";
});

// إنشاء العناصر المتساقطة
function createFallingItem(type, imageSrc) {
    if (!gameRunning) return;

    const item = document.createElement("img");
    item.classList.add("item");
    item.src = imageSrc;
    item.style.left = Math.random() * (gameContainer.offsetWidth - 80) + "px";
    item.style.top = "0px";
    gameContainer.appendChild(item);

    let fallInterval = setInterval(() => {
        let currentTop = parseInt(item.style.top);
        if (currentTop > gameContainer.offsetHeight - 80) {
            let playerX = player.offsetLeft;
            let itemX = item.offsetLeft;

            if (Math.abs(playerX - itemX) < 80) {
                if (type === "water") {
                    waterScore += 10;
                    collectWaterSound.play();
                } else if (type === "energy") {
                    energyScore += 10;
                    collectEnergySound.play();
                } else if (type === "trash") {
                    errorSound.play();
                    waterScore -= 5; // خسارة نقاط عند التقاط القمامة
                }
                updateScore();
                gameContainer.removeChild(item);
                clearInterval(fallInterval);
            } else {
                gameContainer.removeChild(item);
                clearInterval(fallInterval);
            }
        } else {
            item.style.top = currentTop + 5 + "px";
        }
    }, fallSpeed);
}

// تحديث النقاط والمستوى
function updateScore() {
    waterScoreDisplay.textContent = waterScore;
    energyScoreDisplay.textContent = energyScore;

    let totalScore = waterScore + energyScore;

    if (totalScore >= 50 && level === 1) {
        levelUp(2, 40, 800, "💡 Tip: Fix leaks to save water!");
    }
    if (totalScore >= 100 && level === 2) {
        levelUp(3, 30, 600, "⚡ Tip: Use LED bulbs to save energy!");
    }
    if (totalScore >= 150 && level === 3) {
        levelUp(4, 20, 400, "🚨 Warning: Avoid picking up trash!");
    }
    if (totalScore >= 200 && level === 4) {
        winGame();
    }
}

// رفع مستوى اللعبة
function levelUp(newLevel, newFallSpeed, newItemInterval, message) {
    level = newLevel;
    fallSpeed = newFallSpeed;
    itemInterval = newItemInterval;
    levelDisplay.textContent = level;
    messageDisplay.textContent = message;
    clearInterval(spawnInterval);
    spawnInterval = setInterval(spawnItems, itemInterval);
}

// إنهاء اللعبة
function endGame() {
    gameRunning = false;
    clearInterval(spawnInterval);
    clearInterval(timerInterval);
    finalScore.textContent = `Final Score: Water ${waterScore} | Energy ${energyScore}`;
    gameOverPopup.style.display = "block";
}

// الفوز باللعبة
function winGame() {
    gameRunning = false;
    clearInterval(spawnInterval);
    clearInterval(timerInterval);
    gameOverPopup.innerHTML = `<h2>🎉 Congratulations! You Won! 🎉</h2>
                               <p id="final-score">Final Score: Water ${waterScore} | Energy ${energyScore}</p>
                               <button id="restart-btn">Play Again</button>`;
    gameOverPopup.style.display = "block";
    document.getElementById("restart-btn").addEventListener("click", () => location.reload());
}

// تشغيل اللعبة وإسقاط العناصر
function spawnItems() {
    let randomValue = Math.random();
    let type, imgSrc;

    if (randomValue < 0.45) {
        type = "water";
        imgSrc = "/img/game4/12.png";
    } else if (randomValue < 0.9) {
        type = "energy";
        imgSrc = "/img/game4/10.png";
    } else {
        type = "trash";
        imgSrc = "/img/game4/11.png"; // عنصر خاطئ يجب تجنبه
    }

    createFallingItem(type, imgSrc);
}

let spawnInterval = setInterval(spawnItems, itemInterval);
let timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
}, 1000);

// إعادة تشغيل اللعبة
restartBtn.addEventListener("click", () => location.reload());
