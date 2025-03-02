function updateWalletAndExpenses() {
    let initialWallet = 12000;
    let wallet = initialWallet;
    let totalIncome = initialWallet;
    let totalExpenses = 0;
    let toolCost = 0;

    let selectedOptionData = JSON.parse(localStorage.getItem("selectedOptionData_popup")) || { value: 0 };
    let selectedOptionData2 = JSON.parse(localStorage.getItem("selectedOptionData_popup2")) || { value: 0 };
    let wrenchValue1 = parseInt(localStorage.getItem("wrenchValueKey")) || 0;
    let wrenchValue2 = parseInt(localStorage.getItem("wrenchValueKey2")) || 0;
    let selectedOption = localStorage.getItem("selectedOption_popup") || "";
    let selectedOption2 = localStorage.getItem("selectedOption_popup2") || "";

    totalExpenses = selectedOptionData.value + selectedOptionData2.value + wrenchValue1 + wrenchValue2;
    wallet -= totalExpenses;
    totalIncome += toolCost;
    let finalAmount = totalIncome - totalExpenses;

    document.querySelector(".wallet-box span").textContent = wallet.toLocaleString();
    document.querySelector(".income-item:nth-child(2) span").textContent = toolCost;
    document.querySelector(".income-item:nth-child(3) span").textContent = `-${Math.abs(wrenchValue1 + wrenchValue2)}`;
    document.querySelector(".income-item:nth-child(4) span").textContent = `-${Math.abs(totalExpenses)}`;
    document.querySelector(".footer-box span").textContent = finalAmount.toLocaleString();

    let wallet2 = initialWallet - selectedOptionData2.value;
    document.getElementById("Wallet2").textContent = wallet2.toLocaleString();

    let button2 = document.querySelector(".button2");
    let button1 = document.querySelector(".button1");
    let button3 = document.querySelector(".button3");

    if (selectedOption && selectedOption2) {
        button2.style.opacity = "1";
        button2.style.pointerEvents = "auto";
        button2.style.cursor = "pointer";
        button1.style.backgroundColor = "green";
        button3.style.backgroundColor = "green";
    } else {
        button2.style.opacity = "0.5";
        button2.style.pointerEvents = "none";
        button2.style.cursor = "not-allowed";
        button1.style.backgroundColor = "gray";
        button3.style.backgroundColor = "gray";
    }
}

window.addEventListener("storage", updateWalletAndExpenses);
document.addEventListener("DOMContentLoaded", updateWalletAndExpenses);

document.querySelector(".button2").addEventListener("click", function () {
    showSweetAlertSequence();
    updateWalletAndExpenses();
});

function updateWalletAndExpenses() {
    let initialWallet = 12000;
    let wallet = initialWallet;
    let totalIncome = initialWallet;
    let totalExpenses = 0;
    let toolCost = 0;

    let selectedOptionData = JSON.parse(localStorage.getItem("selectedOptionData_popup")) || { value: 0 };
    let selectedOptionData2 = JSON.parse(localStorage.getItem("selectedOptionData_popup2")) || { value: 0 };
    let wrenchValue1 = parseInt(localStorage.getItem("wrenchValueKey")) || 0;
    let wrenchValue2 = parseInt(localStorage.getItem("wrenchValueKey2")) || 0;
    let selectedOption = localStorage.getItem("selectedOption_popup") || "";
    let selectedOption2 = localStorage.getItem("selectedOption_popup2") || "";

    totalExpenses = selectedOptionData.value + selectedOptionData2.value + wrenchValue1 + wrenchValue2;
    wallet -= totalExpenses;
    totalIncome += toolCost;
    let finalAmount = totalIncome - totalExpenses;

    document.querySelector(".wallet-box span").textContent = wallet.toLocaleString();
    document.querySelector(".income-item:nth-child(2) span").textContent = toolCost;
    document.querySelector(".income-item:nth-child(3) span").textContent = `-${Math.abs(wrenchValue1 + wrenchValue2)}`;
    document.querySelector(".income-item:nth-child(4) span").textContent = `-${Math.abs(totalExpenses)}`;
    document.querySelector(".footer-box span").textContent = finalAmount.toLocaleString();

    let wallet2 = initialWallet - selectedOptionData2.value;
    document.getElementById("Wallet2").textContent = wallet2.toLocaleString();

    let button2 = document.querySelector(".button2");
    let button1 = document.querySelector(".button1");
    let button3 = document.querySelector(".button3");

    if (selectedOption && selectedOption2) {
        button2.style.opacity = "1";
        button2.style.pointerEvents = "auto";
        button2.style.cursor = "pointer";
        button1.style.backgroundColor = "green";
        button3.style.backgroundColor = "green";
    } else {
        button2.style.opacity = "0.5";
        button2.style.pointerEvents = "none";
        button2.style.cursor = "not-allowed";
        button1.style.backgroundColor = "gray";
        button3.style.backgroundColor = "gray";
    }
}

window.addEventListener("storage", updateWalletAndExpenses);
document.addEventListener("DOMContentLoaded", updateWalletAndExpenses);

document.querySelector(".button2").addEventListener("click", function () {
    showSweetAlertSequence();
});

function showSweetAlertSequence() {
    let alerts = [
        { title: "WEATHERTON TRIBUNE", text: "THE HEAT IS HERE TO STAY\nlasting for three days...", icon: "info", imageUrl: "../../img/sun.svg" },
        { title: "WEATHERTON TRIBUNE", text: "SPORTS CELEB DIES\nWeatherthon’s asphalt soft proved too much...", icon: "warning", imageUrl: "../../img/sad.svg" },
        { title: "WEATHERTON TRIBUNE", text: "THE RAINS CONTINUE\nResidents of the Drydale area complained...", icon: "info", imageUrl: "../../img/tree.svg" },
        { title: "Summary 2020 to 2030", text: "Extreme weather\nDuring the period, the following extreme weather occurred...", icon: "info", imageUrl: "" },
        { title: "Summary 2020 to 2030", text: "Results\nSaved lives: 0 / 1. The global goals were affected...", icon: "error", imageUrl: "" }
    ];

    let index = 0;
    function showNextAlert() {
        if (index >= alerts.length) {
            proceedAfterAlerts();
            return;
        }
        Swal.fire({
            title: alerts[index].title,
            text: alerts[index].text,
            icon: alerts[index].icon,
            imageUrl: alerts[index].imageUrl,
            imageWidth: 100,
            imageHeight: 100,
            confirmButtonText: "Next"
        }).then(() => {
            index++;
            showNextAlert();
        });
    }
    showNextAlert();
}

function proceedAfterAlerts() {
    let button2 = document.querySelector(".button2");
    button2.style.filter = "blur(5px)";
    button2.style.pointerEvents = "none";
    showNewButtons();
    updateWalletAndExpenses();
    updateYearTo2030();
}

function showNewButtons() {
    let newButtonsContainer = document.createElement("div");
    newButtonsContainer.className = "new-buttons-container";
    newButtonsContainer.innerHTML = `
        <button class="new-button1" onclick="handleNewButton1()">New Action 1</button>
        <button class="new-button2" onclick="handleNewButton2()">New Action 2</button>
    `;
    document.body.appendChild(newButtonsContainer);
}

function updateYearTo2030() {
    let yearElement = document.querySelector(".year-box span");
    if (yearElement) {
        yearElement.textContent = "2030";
    }
}

function handleNewButton1() {
    Swal.fire({
        title: "New Action 1 Executed",
        text: "This action has been performed successfully!",
        icon: "success"
    });
}

function handleNewButton2() {
    Swal.fire({
        title: "New Action 2 Executed",
        text: "Another action has been performed!",
        icon: "success"
    });
}

