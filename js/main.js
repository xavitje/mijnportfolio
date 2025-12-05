document.addEventListener('DOMContentLoaded', () => {
    // 1. Actieve Pagina Markeren in Navigatie

    // Haal de huidige bestandsnaam op (bijv. "index.html" of "portfolio.html")
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/');
    const currentPage = pathParts[pathParts.length - 1] || 'index.html'; // Standaard op index.html

    // Selecteer alle navigatielinks
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Haal de href van de link op
        const linkHref = link.getAttribute('href');

        // Controleer of de link href overeenkomt met de huidige pagina
        if (linkHref === currentPage) {
            link.classList.add('active'); // Voeg de 'active' class toe voor styling
        }
    });

    // 2. Optioneel: Voorbeeld van een Scroll Event (voor toekomstige animaties)
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        // Voeg een schaduw toe aan de navbar wanneer er gescrolld wordt
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px var(--color-shadow)';
        } else {
            navbar.style.boxShadow = '0 2px 10px var(--color-shadow)';
        }
    });
});

// Toekomstige interactiviteit (bijv. Intersection Observer voor scroll-animaties) kan hier worden toegevoegd.
