
    function toggleMenu() {
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        menu.classList.toggle('open');
        icon.classList.toggle('open');
    }

    // Close the menu when a link is clicked
    document.querySelectorAll('.menu-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.menu-links').classList.remove('open');
            document.querySelector('.hamburger-icon').classList.remove('open');
        });
    });
