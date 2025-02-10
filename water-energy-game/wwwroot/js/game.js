const goals = {
    health: {
        title: "Good Health and Wellbeing",
        description: "Good health is a requirement for human wellbeing, development and the ability to contribute to society. You have reached level 1 for this goal. To settle the goal you have to reach level 2.",
    },
    water: {
        title: "Clean water and sanitation",
        description: "Water is the basis for all life on earth. Climate change can be seen early and clearly when it comes to access to water. You have reached level 1 for this goal. To settle the goal you have to reach level 2.",
    },
    energy: {
        title: "Affordable and clean energy",
        description: "Almost 80% of the world’s energy comes from fossil sources. We need powerful interventions to accelerate the transition towards a sustainable system. You have reached level 1 for this goal. To settle the goal you have to reach level 2.",
    },
    cities: {
        title: "Sustainable cities and communities",
        description: "Cities develop and often grow quickly. Rapid, massive urbanisation creates new problems. You have reached level 1 for this goal. To settle the goal you have to reach level 2.",
    },
    land: {
        title: "Life on Land",
        description: "Using our forests sustainably and reducing deforestation contributes to a better climate. Biodiversity contributes to a more resilient natural environment. You have reached level 1 for this goal. To settle the goal you have to reach level 2.",
    }
};

document.querySelectorAll(".goal").forEach(goal => {
    goal.addEventListener("click", () => {
        const goalKey = goal.dataset.goal;
        const details = goals[goalKey];

        document.getElementById("goal-title").textContent = details.title;
        document.getElementById("goal-description").textContent = details.description;

        document.getElementById("details-popup").style.display = "block";
    });
});

document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("details-popup").style.display = "none";
});


       // وظيفة لإظهار البوبب
        function showPopup() {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        // وظيفة لإخفاء البوبب
        function hidePopup() {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
}




function showInitialPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('active');
}

function hidePopup() {
    document.querySelectorAll('.popup').forEach(popup => popup.classList.remove('active'));
}

function selectOption(option, value) {
    // تخزين البيانات في LocalStorage
    localStorage.setItem('selectedOption', option);
    localStorage.setItem('optionValue', value);

    // إعداد النافذة الجديدة
    const newPopup = document.getElementById('new-popup');
    const title = document.getElementById('new-popup-title');
    const description = document.getElementById('new-popup-description');

    title.textContent = `You selected option ${option}`;
    description.textContent = `The value associated with this option is ${value}.`;

    // إظهار النافذة الجديدة وإخفاء القديمة
    hidePopup();
    newPopup.classList.add('active');
} 

function showInitialPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('active');
}

function hidePopup() {
    document.querySelectorAll('.popup').forEach(popup => popup.classList.remove('active'));
}

function selectOption(option, value, imagePath, description) {
    // تخزين البيانات في LocalStorage
    localStorage.setItem('selectedOption', option);
    localStorage.setItem('optionValue', value);
    localStorage.setItem('optionImage', imagePath);
    localStorage.setItem('optionDescription', description);

    // إعداد النافذة الجديدة
    showNewPopup();
}

function showNewPopup() {
    const option = localStorage.getItem('selectedOption');
    const value = localStorage.getItem('optionValue');
    const imagePath = localStorage.getItem('optionImage');
    const description = localStorage.getItem('optionDescription');

    const newPopup = document.getElementById('new-popup');
    const title = document.getElementById('new-popup-title');
    const image = document.getElementById('new-popup-image');
    const desc = document.getElementById('new-popup-description');

    title.textContent = `You selected option ${option}`;
    image.src = imagePath;
    desc.textContent = `${description} The value associated with this option is ${value}.`;

    hidePopup();
    newPopup.classList.add('active');
}

// البيانات المحفوظة
const selectedOptionKey = "selectedOption";

// التحقق من وجود خيار محفوظ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const savedOption = localStorage.getItem(selectedOptionKey);
    if (savedOption) {
        disableOptions(); // تعطيل الخيارات وعرض الملاحظة
    }


});

// إخفاء البوب أب
function hidePopup() {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("new-popup").classList.remove("active");
}

// اختيار خيار
function selectOption(option, value, image, description) {
    // ملء نافذة التفاصيل بالبيانات
    document.getElementById("new-popup-title").textContent = `You selected option ${option}`;
    document.getElementById("new-popup-description").textContent = description;
    document.getElementById("new-popup-image").src = image;

    // عرض النافذة الجديدة
    document.getElementById("new-popup").classList.add("active");

    // تخزين البيانات في حالة الضغط على Yes
    window.selectedOptionData = { option, value };
}

// عند الضغط على Yes
function handleYes() {
    const { option } = window.selectedOptionData;

    // حفظ الخيار في localStorage
    localStorage.setItem(selectedOptionKey, option);

    // إخفاء البوب أب وتعطيل الخيارات
    hidePopup();
    disableOptions();
}

// تعطيل الخيارات وإظهار الملاحظة
function disableOptions() {
    // تعطيل الخيارات
    document.querySelectorAll(".option").forEach(option => {
        option.style.pointerEvents = "none"; // تعطيل الضغط
        option.style.opacity = "0.5"; // تغيير الشفافية
    });

    // جلب الخيار المحفوظ من localStorage
    const savedOption = localStorage.getItem(selectedOptionKey);
    if (savedOption) {
        // تحديث نافذة البوب أب بملاحظة الخيار المحفوظ
        document.getElementById("popup-title").textContent = `You previously selected option ${savedOption}`;
        document.getElementById("popup-description").textContent = `You have already selected option ${savedOption}. You cannot change it anymore.`;
    }
}

// تمكين الزر بعد 3 ثوانٍ كمثال
//setTimeout(() => {
//    const button = document.querySelector('.button2');
//    button.classList.add('active');
//}, 3000); // بعد 3 ثوانٍ
