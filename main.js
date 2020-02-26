document.getElementById('nav-toggle').onclick = function () {
  document.getElementById('nav-container').classList.toggle('active');
  document.getElementById('nav-toggle').classList.toggle('active');
}

var typedconfig = {
  strings: ["",
    "I'm a <strong>game</strong> developer.",
    "I'm a <strong>web</strong> developer.",
    "I'm a <strong>3D</strong> artist.",
    "I make <strong>websites</strong>.",
    "I make <strong>video games</strong>.",
    "I made <strong>Dice's world</strong>"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  cursorChar: '|',
  smartBackspace: true,
  loop: true
}

var typed = new Typed('.typewrite', typedconfig);