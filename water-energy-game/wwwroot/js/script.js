// إظهار النافذة المنبثقة
document.getElementById("info").addEventListener("click", () => {
    document.getElementById("info-modal").style.display = "flex";
});

// إخفاء النافذة عند الضغط على زر الإغلاق
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("info-modal").style.display = "none";
});

// التحكم في علامات التبويب
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(btn => btn.classList.remove("active"));
        tab.classList.add("active");

        contents.forEach(content => content.classList.add("hidden"));
        document.getElementById(tab.dataset.tab).classList.remove("hidden");
    });
});


// إظهار النافذة عند الضغط على Start Game
document.getElementById("start-game").addEventListener("click", () => {
    document.getElementById("game-options-modal").style.display = "flex";
});

// إغلاق النافذة عند الضغط على زر الإغلاق
document.getElementById("close-options").addEventListener("click", () => {
    document.getElementById("game-options-modal").style.display = "none";
});

// تغيير الصعوبة
const difficultyButtons = document.querySelectorAll(".difficulty-btn");
difficultyButtons.forEach(button => {
    button.addEventListener("click", () => {
        difficultyButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});

// تأكيد بدء اللعبة
document.getElementById("confirm-start").addEventListener("click", () => {
    const selectedDifficulty = document.querySelector(".difficulty-btn.active").dataset.level;
    const skipIntro = document.getElementById("skip-intro").checked;
    const showNews = document.getElementById("show-news").checked;

    // بناء رابط الصفحة الجديدة مع إضافة الخيارات كـ Query Parameters
    const newPageUrl = `/Home/game?difficulty=${selectedDifficulty}&skipIntro=${skipIntro}&showNews=${showNews}`;

    // الانتقال إلى الصفحة الجديدة
    window.location.href = newPageUrl;
});

