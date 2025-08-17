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
});