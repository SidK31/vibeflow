const title = document.querySelector("#title");
const statusText = document.querySelector("#status");

const blueBtn = document.querySelector("#blueBtn");
const greenBtn = document.querySelector("#greenBtn");
const resetBtn = document.querySelector("#resetBtn");
const darkBtn = document.querySelector("#darkBtn");

const nameInput = document.querySelector("#nameInput");
const greetBtn = document.querySelector("#greetBtn");

blueBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#1e3a8a";
    title.innerText = "Blue Mode";
    statusText.innerText = "Calm, focused vibes.";
});

greenBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#14532d";
    title.innerText = "Green Mode";
    statusText.innerText = "Fresh and clean.";
});

darkBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#000000";
    title.innerText = "Dark Mode";
    statusText.innerText = "Easy on the eyes.";
});

resetBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "#0f172a";
    title.innerText = "Welcome to VibeFlow";
    statusText.innerText = "Click something to get started.";
});

greetBtn.addEventListener("click", function () {
    const userName = nameInput.value.trim();

    if (userName === "") {
        statusText.innerText = "Enter a name first.";
    } else {
        title.innerText = `Hey, ${userName}`;
        statusText.innerText = `Good to see you.`;
        nameInput.value = "";
    }
});

// Mood switcher logic
const happyBtn = document.querySelector("#happyBtn");
const focusBtn = document.querySelector("#focusBtn");
const chillBtn = document.querySelector("#chillBtn");
const darkMoodBtn = document.querySelector("#darkMoodBtn");

// Helper function to set active mood button
function setActiveMood(activeButton) {
    // Remove active class from all mood buttons
    happyBtn.classList.remove("active-mood");
    focusBtn.classList.remove("active-mood");
    chillBtn.classList.remove("active-mood");
    darkMoodBtn.classList.remove("active-mood");

    // Add active class to the clicked button
    activeButton.classList.add("active-mood");
}

happyBtn.addEventListener("click", function () {
    setActiveMood(happyBtn);
    document.body.style.backgroundColor = "#fbbf24";
    title.innerText = "Happy Mode";
    statusText.innerText = "Bright and cheerful.";
});

focusBtn.addEventListener("click", function () {
    setActiveMood(focusBtn);
    document.body.style.backgroundColor = "#1e40af";
    title.innerText = "Focus Mode";
    statusText.innerText = "Time to lock in.";
});

chillBtn.addEventListener("click", function () {
    setActiveMood(chillBtn);
    document.body.style.backgroundColor = "#059669";
    title.innerText = "Chill Mode";
    statusText.innerText = "Relax and unwind.";
});

darkMoodBtn.addEventListener("click", function () {
    setActiveMood(darkMoodBtn);
    document.body.style.backgroundColor = "#0a0a0a";
    title.innerText = "Dark Mode";
    statusText.innerText = "Sleek and minimal.";
});
