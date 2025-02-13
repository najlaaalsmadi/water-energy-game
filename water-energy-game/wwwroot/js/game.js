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
// Constants for localStorage keys
const selectedOptionKey = "selectedOption_popup";
const selectedOptionDataKey = "selectedOptionData_popup";

// اختيار خيار
function selectOption(option, value, imagePath, description) {
    window.selectedOptionData = { option, value, imagePath, description };

    document.getElementById("new-popup-title").textContent = `You selected option ${option}`;
    document.getElementById("new-popup-description").textContent = description;
    document.getElementById("new-popup-image").src = imagePath;
    document.getElementById("new-popup-tool-one").textContent = value;
    document.getElementById("new-popup-wrench-one").textContent = calculateWrenchValue2(option);
    document.getElementById("calculateValue").textContent = calculateValue(option);

    document.getElementById("new-popup").classList.add("active");
    document.getElementById("popup").classList.remove("active");
}
debugger;
function calculateWrenchValue2(option) {
    let wrenchValue2 = 0;
    switch (option) {
        case "A": wrenchValue2 = 800; localStorage.setItem("wrenchValueKey2", wrenchValue2);
        break;
        case "B": wrenchValue2 = 800 + 200; localStorage.setItem("wrenchValueKey2", wrenchValue2);
        break;
        case "C": wrenchValue2 = 1000 + 500; localStorage.setItem("wrenchValueKey2", wrenchValue2);
        break;
        case "X": wrenchValue2 = 0; localStorage.setItem("wrenchValueKey2", wrenchValue2);
        break;
        default: wrenchValue2 = 0; localStorage.setItem("wrenchValueKey2", wrenchValue2);

    }
    localStorage.setItem("wrenchValueKey2", wrenchValue2);
    return `${wrenchValue2}`;
}
function calculateValue(option) {
    let calculateValue = 0;
    switch (option) {
        case "A": calculateValue = 2000; localStorage.setItem("calculateValue", calculateValue);
            break;
        case "B": calculateValue = 3000; localStorage.setItem("calculateValue", calculateValue );
            break;
        case "C": calculateValue = 4000; localStorage.setItem("calculateValue", calculateValue);
            break;
        case "X": calculateValue = 0; localStorage.setItem("calculateValue", calculateValue);
            break;
        default: calculateValue = 0; localStorage.setItem("calculateValue", calculateValue);

    }
    localStorage.setItem("calculateValue", calculateValue);
    return `${calculateValue}`;
}

function handleYes() {
    const { option, value, imagePath, description } = window.selectedOptionData;
    localStorage.setItem(selectedOptionKey, option);
    localStorage.setItem(selectedOptionDataKey, JSON.stringify({ option, value, imagePath, description }));
    disableOptions("popup");
    updatePopupWithSavedOption({ option, value, description });
    document.getElementById("new-popup").classList.remove("active");
}

function disableOptions(popupId) {
    document.querySelectorAll(`#${popupId} .option`).forEach(option => {
        option.style.pointerEvents = "none";
        option.style.opacity = "0.5";
    });
}

function updatePopupWithSavedOption(savedData) {
    const { option, value, description } = savedData;
    document.getElementById("popup-title").textContent = `You previously selected option ${option}`;
    document.getElementById("popup-description").textContent = `Description: ${description}.`;
    document.getElementById("new-popup-tool-one").textContent = value;
    document.getElementById("new-popup-wrench-one").textContent = calculateWrenchValue2(option);
    document.getElementById("calculateValue").textContent = calculateValue(option);

}

document.addEventListener("DOMContentLoaded", () => {
    const savedOptionData = JSON.parse(localStorage.getItem(selectedOptionDataKey));
    if (savedOptionData) {
        disableOptions("popup");
        updatePopupWithSavedOption(savedOptionData);
    }
});

///////////////////////////////////////////////////////
// Constants for localStorage keys
const selectedOptionKey2 = "selectedOption_popup2";
const selectedOptionDataKey2 = "selectedOptionData_popup2";

// إظهار النافذة المنبثقة
function showInitialPopup2() {
    const popup = document.getElementById("popup2");
    popup.classList.add("active");
}

// إخفاء جميع النوافذ المنبثقة
function hidePopup() {
    document.querySelectorAll(".popup").forEach(popup => popup.classList.remove("active"));
}

// اختيار خيار
function selectOption2(option, value, imagePath, description) {
    window.selectedOptionData2 = { option, value, imagePath, description };

    // تحديث بيانات التأكيد
    document.getElementById("new-popup-title2").textContent = `You selected option ${option}`;
    document.getElementById("new-popup-description2").textContent = description;
    document.getElementById("new-popup-image2").src = imagePath;

    // تحديث قيمة الأموال
    document.getElementById("new-popup-tool").textContent = `${value} Coins`;

    // تحديث قيمة new-popup-wrench
    document.getElementById("new-popup-wrench").textContent = calculateWrenchValue(option);

    // إظهار النافذة الجديدة وإخفاء القديمة
    document.getElementById("new-popup2").classList.add("active");
    document.getElementById("popup2").classList.remove("active");
}

// دالة حساب قيمة `new-popup-wrench`
function calculateWrenchValue(option) {
    let wrenchValue = 0;
    switch (option) {
        case "A2":
            wrenchValue = 250;
            localStorage.setItem("wrenchValueKey", wrenchValue); // تخزين `wrenchValue`

            break;
        case "B2":
            wrenchValue = 250 * 2;
            localStorage.setItem("wrenchValueKey", wrenchValue); // تخزين `wrenchValue`

            break;
        case "C2":
            wrenchValue = 250 * 4;
            localStorage.setItem("wrenchValueKey", wrenchValue); // تخزين `wrenchValue`

            break;
        case "X2":
            wrenchValue = 250 * 0;
            localStorage.setItem("wrenchValueKey", wrenchValue); // تخزين `wrenchValue`

            break;
        default:
            wrenchValue = 0;
            localStorage.setItem("wrenchValueKey", wrenchValue); // تخزين `wrenchValue`

    }
    return `${wrenchValue}`;
}



// تأكيد الاختيار عند الضغط على Yes
function handleYes2() {
    const { option, value, imagePath, description } = window.selectedOptionData2;

    // حفظ البيانات في localStorage
    const savedData = { option, value, imagePath, description };
    localStorage.setItem(selectedOptionKey2, option);
    localStorage.setItem(selectedOptionDataKey2, JSON.stringify(savedData));

    // تحديث النصوص
    document.getElementById("new-popup-tool").textContent = `${value} Coins`;
    document.getElementById("new-popup-wrench").textContent = calculateWrenchValue(option);

    // تعطيل الخيارات وإخفاء النافذة
    disableOptions("popup2");
    updatePopupWithSavedOption(savedData);
    document.getElementById("new-popup2").classList.remove("active");
}

// تعطيل الخيارات بعد الاختيار
function disableOptions(popupId) {
    document.querySelectorAll(`#${popupId} .option`).forEach(option => {
        option.style.pointerEvents = "none"; // تعطيل الضغط
        option.style.opacity = "0.5"; // تقليل الشفافية
    });
}

// تحديث النافذة بالقيمة المحفوظة
function updatePopupWithSavedOption(savedData) {
    const { option, value, description } = savedData;
    document.getElementById("popup-title2").textContent = `You previously selected option ${option}`;
    document.getElementById("popup-description2").textContent = `Description: ${description}.`;
    document.getElementById("new-popup-tool").textContent = `${value} `;
    document.getElementById("new-popup-wrench").textContent = calculateWrenchValue(option);
}

// تحميل القيم المحفوظة عند فتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const savedOptionData = JSON.parse(localStorage.getItem(selectedOptionDataKey2));
    if (savedOptionData) {
        disableOptions("popup2");
        updatePopupWithSavedOption(savedOptionData);
    }
});


// تمكين الزر بعد 3 ثوانٍ كمثال
//setTimeout(() => {
//    const button = document.querySelector('.button2');
//    button.classList.add('active');
//}, 3000); // بعد 3 ثوانٍ
