const heartBtns = document.querySelectorAll(".heartBtn");
const copyBtns = document.querySelectorAll(".copyBtn");
const callBtns = document.querySelectorAll(".callBtn");
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Default Values
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

//Heart Functionality
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

// Copy Functionality
copyBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const number = card.querySelector(".serviceNumber").textContent;
    navigator.clipboard.writeText(number);
    alert(`Number ${number} copied!`);
    copyCount++;
    copyCountEl.textContent = copyCount;
  });
});

// Call Functionality
callBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const serviceName = card.querySelector(".serviceName").textContent;
    const serviceNumber = card.querySelector(".serviceNumber").textContent;

    if (coinCount < 20) {
      alert("Not enough coins! You need at least 20 to make a call.");
      return;
    }

    // Deduct coins
    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    // Alert
    alert(`Calling ${serviceName} at ${serviceNumber}...`);

    // Add to Call History
    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.className = "p-2 border-b";
    li.textContent = `${serviceName} - ${serviceNumber} (at ${time})`;
    historyList.appendChild(li);
  });
});

// Clear History
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
