// Stars
const sc = document.getElementById("stars");
for (let i = 0; i < 90; i++) {
  const s = document.createElement("div");
  s.className = "star";
  const sz = Math.random() * 2 + 0.4;
  s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${(Math.random()*3+2).toFixed(1)}s;animation-delay:${(Math.random()*4).toFixed(1)}s`;
  sc.appendChild(s);
}

// Heart
const ui = document.getElementById("ui");
for (let i = 1; i <= 85; i++) {
  const d = document.createElement("div");
  d.className = "love";
  d.style.setProperty("--i", i);
  d.innerHTML = `<div class="love_horizontal"><div class="love_vertical"><div class="love_word">I love you</div></div></div>`;
  ui.appendChild(d);
}

// Nav
function goToScreen(n) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen" + n).classList.add("active");
}
