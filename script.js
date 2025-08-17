document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.game-menu-link');
    const gamePreviews = document.querySelectorAll('.game-preview');

    menuLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            const targetId = this.dataset.target;

            menuLinks.forEach(item => item.classList.remove('active'));
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