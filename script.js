// ============================================
// Agir pour notre village — Cinqueux 2026
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation mobile (burger menu) ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu mobile au clic sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    const updateActiveNav = () => {
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // --- Programme cards toggle ---
    document.querySelectorAll('.card-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.programme-card');
            const details = card.querySelector('.card-details');
            const isOpen = details.classList.toggle('open');

            btn.setAttribute('aria-expanded', isOpen);
            btn.textContent = isOpen ? 'Réduire' : 'En savoir plus';
        });
    });

    // --- Scroll animations (fade-in) ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animer les cartes programme, les membres de l'équipe et les sections
    document.querySelectorAll('.programme-card, .membre-card, .equipe-groupe, .contact-form, .contact-info').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });


});
