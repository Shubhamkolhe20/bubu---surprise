// ---------------- MUSIC ----------------

function playMusic() {
  const music = document.getElementById("bgMusic");

  if (music) {
      music.play().catch(() => {
          console.log("Music blocked until user taps screen");
      });
  }
}

// ---------------- OPEN INDEX1 PAGE ----------------

function openStory() {
  playMusic();

  setTimeout(() => {
    window.location.href = "love-surprise/index1.html";
  }, 600);
}

// ---------------- RANDOM MOVE BUTTON (OPTIONAL) ----------------

function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 80 + 10) + "%";
  elm.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.addEventListener("click", (e) => {
      moveRandomEl(e.target);
  });
}

// ---------------- COUNTDOWN ----------------

const targetDate = new Date("June 26, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const el = document.getElementById("countdown");

  if (el) {
      el.innerHTML = `
      ⏳ ${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds
      `;
  }
}, 1000);

// ---------------- TYPEWRITER ----------------

const message = `Dear Bubu,

Thank you for filling my life with happiness,
laughter and beautiful memories.

Every day with you feels special.

No matter where life takes us,
you will always have a special place in my heart.

I Love You Forever ❤️`;

let i = 0;

function typeWriter() {
  const el = document.getElementById("typewriter");

  if (!el) return;

  if (i < message.length) {
      el.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, 60);
  }
}

window.addEventListener("load", typeWriter);

// ---------------- SURPRISE BUTTON ----------------

const btn = document.getElementById("surpriseBtn");

if (btn) {
  btn.addEventListener("click", () => {
      alert("❤️ Bubu, Thank You For Being The Best Part Of My Life ❤️");
  });
}

// ---------------- FLOATING HEARTS ----------------

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => {
      heart.remove();
  }, 5000);

}, 600);