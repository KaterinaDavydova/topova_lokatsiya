document.querySelectorAll('.prime__btn, .prime__link').forEach(button => {
    button.addEventListener('touchstart', () => {
        button.classList.add('active');
    });

    button.addEventListener('touchend', () => {
        button.classList.remove('active');
    });

    button.addEventListener('mousedown', () => {
        button.classList.add('active');
    });

    button.addEventListener('mouseup', () => {
        button.classList.remove('active');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('active');
    });
});