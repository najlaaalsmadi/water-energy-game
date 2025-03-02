const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ضبط حجم الشاشة
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// تحميل الصور
const playerImgHappy = new Image();
playerImgHappy.src = "../../img/face_happy.png"; // صورة اللاعب السعيد
const playerImgSad = new Image();
playerImgSad.src = "../../img/face_sad.png"; // صورة اللاعب الغاضب
const ballImg = new Image();
ballImg.src = "../../img/bullet.png"; // صورة الكرة

// اللاعب
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 50,
    image: playerImgHappy, // الافتراضي سعيد
};

// الكرات
const balls = [];
const numBalls = Math.floor(1000 + Math.random() * 2000); // عدد الكرات بين 1000 و 3000

for (let i = 0; i < numBalls; i++) {
    balls.push({
        x: canvas.width + Math.random() * 100, // تبدأ من خارج الشاشة على اليمين
        y: Math.random() * canvas.height, // عشوائية في الارتفاع
        radius: 6 + Math.random() * 6, // حجم عشوائي بين 6 و 12
        speedX: -2 - Math.random() * 5, // تتحرك لليسار بسرعات مختلفة
        speedY: (Math.random() - 0.5) * 2 // حركة طفيفة لأعلى وأسفل
    });
}

// تحريك اللاعب بالماوس
document.addEventListener("mousemove", (event) => {
    player.x = event.clientX;
    player.y = event.clientY;
});

// دالة للكشف عن التصادم
function checkCollision(ball, player) {
    let dx = ball.x - player.x;
    let dy = ball.y - player.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    return distance < ball.radius + player.size / 2;
}

// تحديث اللعبة
function update() {
    let isColliding = false;

    // تحريك الكرات
    for (let i = balls.length - 1; i >= 0; i--) {
        let ball = balls[i];
        ball.x += ball.speedX;
        ball.y += ball.speedY;

        // ارتداد بسيط عند الحواف العمودية
        if (ball.y <= 0 || ball.y >= canvas.height) ball.speedY *= -1;

        // التحقق من التصادم مع اللاعب
        if (checkCollision(ball, player)) {
            isColliding = true;
        }

        // حذف الكرات التي تخرج من الجهة اليسرى
        if (ball.x < -ball.radius) {
            balls.splice(i, 1);
        }
    }

    // تغيير صورة اللاعب حسب التصادم
    player.image = isColliding ? playerImgSad : playerImgHappy;

    // إضافة كرات جديدة بشكل دوري
    if (balls.length < 3000) {
        balls.push({
            x: canvas.width + Math.random() * 50,
            y: Math.random() * canvas.height,
            radius: 6 + Math.random() * 6,
            speedX: -2 - Math.random() * 5,
            speedY: (Math.random() - 0.5) * 2
        });
    }
}

// رسم المشهد
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // رسم الكرات
    balls.forEach((ball) => {
        ctx.drawImage(ballImg, ball.x, ball.y, ball.radius * 2, ball.radius * 2);
    });

    // رسم اللاعب
    ctx.drawImage(player.image, player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);
}

// حلقة اللعبة
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// تشغيل اللعبة
gameLoop();
