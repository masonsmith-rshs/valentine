let size = 1;

function growYes() {
	 size += 0.2;
	 document.getElementById("yesBtn").style.transform =
	     "scale(" + size + ")";
}

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("music");

const noTexts = [
    "Are you sure?",
    "Really sure?",
    "Pookie please",
    "Don't do this to me",
    "I'm gonna cry...",
    "You're breaking my heart :("
];

let teleportCount = 0;
let clickCount = 0;
const teleportLimit = 10;

// Teleport NO button first
noBtn.addEventListener("mouseenter", () => {
    if (teleportCount < teleportLimit) {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
        teleportCount++;
    }
});

// After teleporting → guilt phase
noBtn.addEventListener("click", () => {
    if (teleportCount >= teleportLimit) {
        if (clickCount < noTexts.length) {
            noBtn.textContent = noTexts[clickCount];
            yesBtn.style.transform = `scale(${1 + 0.25 * (clickCount + 2)})`;
            clickCount++;
        } else {
            yesBtn.style.width = "100vw";
            yesBtn.style.height = "100vh";
            yesBtn.style.fontSize = "80px";
            yesBtn.style.borderRadius = "0";
            noBtn.style.display = "none";
            yesBtn.textContent = "YES 💗";
        }
    }
});

yesBtn.addEventListener("click", () => {
    document.getElementById("mainPage").style.display = "none";

    const yesPage = document.getElementById("yesPage");
    yesPage.classList.add("show");

    music.play();
    spawnHearts();
});

