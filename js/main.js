document.addEventListener('DOMContentLoaded', () => {

    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    const currentPage = pathParts[pathParts.length - 1] || 'index.html';


    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px var(--color-shadow)';
        } else {
            navbar.style.boxShadow = '0 2px 10px var(--color-shadow)';
        }
    });
});

