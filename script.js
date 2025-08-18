document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO MENU PRINCIPAL (QUEM SOMOS / JOGOS) ---
    const primaryLinks = document.querySelectorAll('.primary-nav-link');
    const mainSections = document.querySelectorAll('.main-content-section');

    primaryLinks.forEach(link => {
        // Menu principal funciona com CLIQUE
        link.addEventListener('mouseover', function(e) {
            e.preventDefault();
            const targetId = this.dataset.target;

            primaryLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            mainSections.forEach(section => {
                section.classList.remove('active');
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // --- LÓGICA DO MENU SECUNDÁRIO (SELEÇÃO DE JOGOS) ---
    const gameMenuLinks = document.querySelectorAll('.game-menu-link');
    const gamePreviews = document.querySelectorAll('.game-preview');

    gameMenuLinks.forEach(link => {
        // Menu de jogos continua com MOUSEOVER
        link.addEventListener('mouseover', function() {
            const targetId = this.dataset.target;

            gameMenuLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            gamePreviews.forEach(preview => {
                preview.classList.remove('active');
            });

            const targetPreview = document.getElementById(targetId);
            if (targetPreview) {
                targetPreview.classList.add('active');
            }
        });
    });
    tsParticles.load("tsparticles", {
  fpsLimit: 120,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: { enable: true, minimumValue: 1 },
    },
    links: { // A mágica das linhas de conexão
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5, // Velocidade bem lenta
      direction: "none",
      out_mode: "bounce",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab", // Puxa as partículas com o mouse
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
});