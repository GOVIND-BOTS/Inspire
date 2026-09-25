// ===== Create Stars (Universe) =====
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 120; i++) {
  const star = document.createElement("div");
  star.className = "star";
  const size = Math.random() * 2.5 + 0.5;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.setProperty("--dur", (Math.random() * 3 + 2) + "s");
  star.style.animationDelay = Math.random() * 5 + "s";
  starsContainer.appendChild(star);
}

// ===== Heart Animation (smaller) =====
const ui = document.getElementById("ui");
const totalItems = 80;

for (let i = 1; i <= totalItems; i++) {
  const love = document.createElement("div");
  love.className = "love";
  love.style.setProperty("--i", i);

  love.innerHTML = `
    <div class="love_horizontal">
      <div class="love_vertical">
        <div class="love_word">I love you</div>
      </div>
    </div>
  `;

  ui.appendChild(love);
}

// ===== Screen Navigation =====
function goToScreen(num) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById("screen" + num);
  if (target) {
    target.classList.add("active");
  }
}
