//// تحديث القيم بناءً على الاختيارات من localStorage
//function updateWalletAndExpenses() {
//    let wallet = parseInt(document.querySelector(".wallet-box span").textContent.replace(',', '')) || 12000;
//    let toolCost = 0;
//    let wrenchCost = 0;
//    let totalIncome = 12000; // المجموع الأساسي قبل التعديلات
//    let totalExpenses = 0;

//    // جلب القيم من localStorage
//    let selectedOptionData = JSON.parse(localStorage.getItem("selectedOptionData_popup")) || { value: 0 };
//    let selectedOptionData2 = JSON.parse(localStorage.getItem("selectedOptionData_popup2")) || { value: 0 };
//    let selectedOption = localStorage.getItem("selectedOption_popup");
//    let selectedOption2 = localStorage.getItem("selectedOption_popup2");
//    let wrenchValue1 = parseInt(localStorage.getItem("wrenchValueKey")) || 0;
//    let wrenchValue2 = parseInt(localStorage.getItem("wrenchValueKey2")) || 0;
//    let calculateValue = parseInt(localStorage.getItem("calculateValue")) || 0;

//    if (selectedOptionData) {
//        wallet -= selectedOptionData.value;
//        toolCost += calculateValue;
//        totalExpenses += selectedOptionData.value;
//    }
//    if (selectedOptionData2) {
//        wallet -= selectedOptionData2.value;
//        wrenchCost -= wrenchValue2;
//        totalExpenses += selectedOptionData2.value;
//    }

//    // تحديث إجمالي الدخل والمصاريف بناءً على التعديلات
//    totalIncome += toolCost; // إضافة الأدوات كمصدر دخل
//    let finalAmount = totalIncome - Math.abs(totalExpenses);

//    // تحديث القيم في الواجهة
//    document.querySelector(".wallet-box span").textContent = wallet.toLocaleString();
//    document.querySelector(".income-item:nth-child(2) span").textContent = toolCost;
//    document.querySelector(".income-item:nth-child(3) span").textContent = wrenchCost;
//    document.querySelector(".income-item:nth-child(4) span").textContent = `-${totalExpenses}`;

//    // تحديث القيمة النهائية في الأسفل
//    document.querySelector(".footer-box span").textContent = finalAmount.toLocaleString();

//    // تفعيل أو تعطيل الزر بناءً على القيم المختارة
//    let button2 = document.querySelector(".button2");
//    if (["A", "B", "C", "D"].includes(selectedOption) && ["A2", "B2", "C2", "D2"].includes(selectedOption2)) {
//        button2.style.opacity = "1";
//        button2.style.pointerEvents = "auto";
//        button2.style.cursor = "pointer";
//    } else {
//        button2.style.opacity = "0.5";
//        button2.style.pointerEvents = "none";
//        button2.style.cursor = "not-allowed";
//    }
//}

//// تحديث القيم فورًا عند تغيير localStorage
//window.addEventListener("storage", updateWalletAndExpenses);

//// عند تحميل الصفحة يتم تحديث القيم تلقائيًا
//document.addEventListener("DOMContentLoaded", updateWalletAndExpenses);

//// عند اختيار خيار معين
//function selectOption(option, value) {
//    localStorage.setItem("selectedOption_popup", option);
//    updateWalletAndExpenses();
//}

//// عند الضغط على الزر .button2 يتم فتح النوافذ وتحديث البيانات وتغيير السنة إلى 2030
//document.querySelector(".button2").addEventListener("click", function () {
//    // تعطيل الزر بعد الضغط عليه
//    this.disabled = true;
//    this.style.opacity = "0.5";
//    this.style.pointerEvents = "none";
//    this.style.cursor = "not-allowed";

//    // إنشاء النوافذ كـ popups وإضافتها إلى الصفحة
//    let newsPopup1 = document.createElement("div");
//    newsPopup1.className = "popup news-popup";
//    newsPopup1.innerHTML = `
//        <div class='popup-content'>
//            <h2>CROPS WITHERING</h2>
//            <p>Farmers are complaining about the drought that is currently affecting Weatherton...</p>
//            <button onclick='this.parentElement.parentElement.remove()'>Close</button>
//        </div>`;
//    document.body.appendChild(newsPopup1);

//    let newsPopup2 = document.createElement("div");
//    newsPopup2.className = "popup news-popup";
//    newsPopup2.innerHTML = `
//        <div class='popup-content'>
//            <h2>HALF OF HARVEST WIPED OUT!</h2>
//            <p>A long drought has affected Weatherton...</p>
//            <button onclick='this.parentElement.parentElement.remove()'>Close</button>
//        </div>`;
//    document.body.appendChild(newsPopup2);

//    let summaryPopup = document.createElement("div");
//    summaryPopup.className = "popup summary-popup";
//    summaryPopup.innerHTML = `
//        <div class='popup-content'>
//            <h2>Summary 2020 to 2030</h2>
//            <p>Extreme weather conditions occurred...</p>
//            <button onclick='this.parentElement.parentElement.remove()'>Close</button>
//        </div>`;
//    document.body.appendChild(summaryPopup);

//    // تغيير السنة إلى 2030 في العنصر الصحيح
//    document.querySelector(".box .bottom").textContent = "2030";


//    // تحديث القيم بعد تغيير العام
//    updateWalletAndExpenses();
//});




/*///////////////////////////////////////////////////// */
// تحديث القيم بناءً على الاختيارات من localStorage
function updateWalletAndExpenses() {
    let wallet = parseInt(document.querySelector(".wallet-box span").textContent.replace(',', '')) || 12000;
    let toolCost = 0;
    let wrenchCost = 0;
    let totalIncome = 12000; // المجموع الأساسي قبل التعديلات
    let totalExpenses = 0;

    // جلب القيم من localStorage
    let selectedOptionData = JSON.parse(localStorage.getItem("selectedOptionData_popup"));
    let selectedOptionData2 = JSON.parse(localStorage.getItem("selectedOptionData_popup2"));
    let selectedOption = localStorage.getItem("selectedOption_popup");
    let selectedOption2 = localStorage.getItem("selectedOption_popup2");
    let wrenchValue1 = parseInt(localStorage.getItem("wrenchValueKey")) || 0;
    let wrenchValue2 = parseInt(localStorage.getItem("wrenchValueKey2")) || 0;
    let calculateValue = parseInt(localStorage.getItem("calculateValue")) || 0;

    if (selectedOptionData) {
        wallet -= selectedOptionData.value;
        toolCost += calculateValue;
        totalExpenses += selectedOptionData.value;
    }
    if (selectedOptionData2) {
        wallet -= selectedOptionData2.value;
        wrenchCost -= wrenchValue2;
        totalExpenses += selectedOptionData2.value;
    }

    // تحديث إجمالي الدخل والمصاريف بناءً على التعديلات
    totalIncome += toolCost; // إضافة الأدوات كمصدر دخل
    let finalAmount = totalIncome - Math.abs(totalExpenses);

    // تحديث القيم في الواجهة
    document.querySelector(".wallet-box span").textContent = wallet.toLocaleString();
    document.querySelector(".income-item:nth-child(2) span").textContent = toolCost;
    document.querySelector(".income-item:nth-child(3) span").textContent = wrenchCost;
    document.querySelector(".income-item:nth-child(4) span").textContent = `-${totalExpenses}`;

    // تحديث القيمة النهائية في الأسفل
    document.querySelector(".footer-box span").textContent = finalAmount.toLocaleString();

    // تفعيل أو تعطيل الزر بناءً على القيم المختارة
    let button2 = document.querySelector(".button2");
    if (["A", "B", "C", "D"].includes(selectedOption) && ["A2", "B2", "C2", "D2"].includes(selectedOption2)) {
        button2.style.opacity = "1";
        button2.style.pointerEvents = "auto";
        button2.style.cursor = "pointer";
    } else {
        button2.style.opacity = "0.5";
        button2.style.pointerEvents = "none";
        button2.style.cursor = "not-allowed";
    }
}

// تحديث القيم فورًا عند تغيير localStorage
window.addEventListener("storage", updateWalletAndExpenses);

// عند تحميل الصفحة يتم تحديث القيم تلقائيًا
document.addEventListener("DOMContentLoaded", updateWalletAndExpenses);

// عند اختيار خيار معين
function selectOption(option, value) {
    localStorage.setItem("selectedOption_popup", option);
    updateWalletAndExpenses();
}

// عند الضغط على الزر .button2 يتم فتح النوافذ وتحديث البيانات وتغيير السنة إلى 2030 لمرة واحدة
function handleButtonClick() {
    if (!document.querySelector(".popup-container")) {
        let popupContainer = document.createElement("div");
        popupContainer.className = "popup-container";
        popupContainer.innerHTML = `
            <div class='popup'>
                <h2>CROPS WITHERING</h2>
                <p>Farmers are complaining about the drought that is currently affecting Weatherton...</p>
                <button onclick='this.parentElement.remove()'>Close</button>
            </div>
            <div class='popup'>
                <h2>HALF OF HARVEST WIPED OUT!</h2>
                <p>A long drought has affected Weatherton...</p>
                <button onclick='this.parentElement.remove()'>Close</button>
            </div>
            <div class='popup'>
                <h2>Summary 2020 to 2030</h2>
                <p>Extreme weather conditions occurred...</p>
                <button onclick='this.parentElement.remove()'>Close</button>
            </div>
        `;
        document.body.appendChild(popupContainer);
    }

    // تغيير السنة إلى 2030 في العنصر الصحيح
    document.querySelector(".box .bottom").textContent = "2030";
    updateWalletAndExpenses();

    // تعطيل الزر بعد الضغط عليه مرة واحدة
    let button2 = document.querySelector(".button2");
    button2.style.opacity = "0.5";
    button2.style.pointerEvents = "none";
    button2.style.cursor = "not-allowed";
    button2.removeEventListener("click", handleButtonClick);
}

document.querySelector(".button2").addEventListener("click", handleButtonClick);


