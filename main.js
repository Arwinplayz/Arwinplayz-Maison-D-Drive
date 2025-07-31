const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".overlay h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".Learn_More", {
  ...scrollRevealOptions,
  delay: 500,
});


ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});


ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal('.history-section', {
  origin: 'left',
  distance: '50px',
  duration: 700,
  easing: 'ease-out',
  interval: 200,
  cleanup: true, 
  beforeReveal: function(el) {
    el.classList.add('revealed');
  },
  reset: false 
});

document.querySelectorAll('.history-section').forEach(section => {
  ScrollReveal().reveal(section, {
    origin: section.classList.contains('reverse') ? 'right' : 'left',
    distance: '50px',
    duration: 700,
    easing: 'ease-out',
    interval: 200,
    cleanup: true,
    reset: false
  });
});

ScrollReveal().reveal('.history-text', {
  duration: 600,
  distance: '10px',
  origin: 'bottom',
  easing: 'ease-out',
  beforeReveal: el => el.classList.add('revealed'),
  reset: false
});


ScrollReveal().reveal('.brand-row', {
  distance: '40px',
  origin: 'bottom',
  interval: 200,
  duration: 800,
  easing: 'ease-in-out'
});

document.addEventListener("DOMContentLoaded", function () {
  const selector = document.getElementById('ambient-audio');
  const audioPlayer = document.getElementById('ambient-player');

  selector.addEventListener('change', function () {
    const selected = this.value;

    if (selected === 'none') {
      audioPlayer.pause();
      audioPlayer.removeAttribute('src');
    } else {
      audioPlayer.src = selected;
      audioPlayer.volume = 0.5;
      audioPlayer.play();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('ambient-audio');
  const audioPlayer = document.getElementById('ambient-player');

  const savedAudio = localStorage.getItem('ambientAudio');
  const savedTime = localStorage.getItem('ambientAudioTime');

  if (savedAudio && savedAudio !== 'none') {
    selector.value = savedAudio;
    audioPlayer.src = savedAudio;
    audioPlayer.volume = 0.5;
    audioPlayer.loop = true;

    audioPlayer.addEventListener('loadedmetadata', () => {
      if (savedTime) {
        audioPlayer.currentTime = parseFloat(savedTime);
      }
      audioPlayer.play();
    });
  } else if (savedAudio === 'none') {
    selector.value = 'none';
  }

  selector.addEventListener('change', () => {
    const selected = selector.value;
    localStorage.setItem('ambientAudio', selected);
    if (selected === 'none') {
      audioPlayer.pause();
      audioPlayer.removeAttribute('src');
    } else {
      audioPlayer.src = selected;
      audioPlayer.volume = 0.5;
      audioPlayer.loop = true;
      audioPlayer.play();
    }
  });

  setInterval(() => {
    if (!audioPlayer.paused && audioPlayer.src) {
      localStorage.setItem('ambientAudioTime', audioPlayer.currentTime);
    }
  }, 2000);
});

ScrollReveal().reveal(".brands-carousel", {
  ...scrollRevealOptions,
});

