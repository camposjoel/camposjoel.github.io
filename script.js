const translations = {
    en: {
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': 'Full Stack Developer',
        'hero.description': 'Building modern web applications with Angular, Node.js and .NET — from responsive interfaces to robust backend systems.',
        'hero.projects': 'View Projects',
        'hero.contact': 'Get in Touch',
        'about.title': 'About',
        'about.p1': `I'm a Full Stack Developer based in Mexico with 6+ years of experience, specializing in building modern web applications with Angular, Node.js and .NET. I focus on creating responsive, user-friendly interfaces and robust backend solutions.`,
        'about.p2': 'With experience in both frontend and backend development, I enjoy tackling challenging projects that require creative problem-solving. I\'m particularly interested in real-time applications and emerging web technologies.',
        'about.location': 'Location',
        'about.focus': 'Focus',
        'about.experience': 'Experience',
        'skills.title': 'Skills & Technologies',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Tools & Others',
        'projects.title': 'Featured Projects',
        'projects.cryptoAngular.desc': 'Real-time cryptocurrency monitoring application built with Angular, fetching live data from the Coincap API with beautiful charts and statistics.',
        'projects.cryptoRN.desc': 'Mobile application for tracking cryptocurrency prices on the go, built with React Native for both iOS and Android platforms.',
        'projects.pokedex.desc': 'A Pokedex application showcasing Pokemon information with beautiful UI and smooth animations, built with React Native.',
        'projects.handDetection.desc': 'Hand detection demonstration using TensorFlow\'s pretrained handpose model. Real-time hand tracking and gesture recognition.',
        'projects.viewCode': 'View Code',
        'projects.viewAll': 'View All Repositories',
        'contact.title': "Let's Build Something",
        'contact.text': "I'm open to new projects and collaborations.",
        'contact.email': 'Send an Email',
        'footer.designed': 'Designed & Built by Joel Campos'
    },
    es: {
        'nav.about': 'Acerca de',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'hero.title': 'Desarrollador Full Stack',
        'hero.description': 'Construyendo aplicaciones web modernas con Angular, Node.js y .NET — desde interfaces responsivas hasta sistemas backend robustos.',
        'hero.projects': 'Ver Proyectos',
        'hero.contact': 'Contacto',
        'about.title': 'Acerca de Mí',
        'about.p1': `Soy un Desarrollador Full Stack radicado en México con más de 6 años de experiencia, especializado en construir aplicaciones web modernas con Angular, Node.js y .NET. Me enfoco en crear interfaces responsivas, fáciles de usar y soluciones robustas de backend.`,
        'about.p2': 'Con experiencia en desarrollo frontend y backend, disfruto enfrentar proyectos desafiantes que requieren pensamiento creativo. Estoy particularmente interesado en aplicaciones en tiempo real y tecnologías web emergentes.',
        'about.location': 'Ubicación',
        'about.focus': 'Enfoque',
        'about.experience': 'Experiencia',
        'skills.title': 'Habilidades y Tecnologías',
        'skills.frontend': 'Frontend',
        'skills.backend': 'Backend',
        'skills.tools': 'Herramientas y Otros',
        'projects.title': 'Proyectos Destacados',
        'projects.cryptoAngular.desc': 'Aplicación de monitoreo de criptomonedas en tiempo real construida con Angular, obteniendo datos en vivo de la API de Coincap con gráficos y estadísticas.',
        'projects.cryptoRN.desc': 'Aplicación móvil para rastrear precios de criptomonedas en cualquier lugar, construida con React Native para plataformas iOS y Android.',
        'projects.pokedex.desc': 'Una aplicación Pokedex que muestra información de Pokemon con una interfaz hermosa y animaciones fluidas, construida con React Native.',
        'projects.handDetection.desc': 'Demostración de detección de manos usando el modelo handpose preentrenado de TensorFlow. Seguimiento de manos y reconocimiento de gestos en tiempo real.',
        'projects.viewCode': 'Ver Código',
        'projects.viewAll': 'Ver Todos los Repositorios',
        'contact.title': 'Construyamos Algo',
        'contact.text': 'Estoy abierto a nuevos proyectos y colaboraciones.',
        'contact.email': 'Enviar un Correo',
        'footer.designed': 'Diseñado y Desarrollado por Joel Campos'
    }
};

let currentLang = sessionStorage.getItem('lang') || 'es';
let currentTheme = sessionStorage.getItem('theme') || 'dark';

function setLanguage(lang) {
    currentLang = lang;
    sessionStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.getElementById('lang-select').value = lang;
    document.documentElement.lang = lang;
}

function setTheme(theme) {
    currentTheme = theme;
    sessionStorage.setItem('theme', theme);

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const themeToggle = document.querySelector('.theme-toggle');
    const langSelect = document.getElementById('lang-select');

    setTheme(currentTheme);
    setLanguage(currentLang);

    // Theme toggle with view transition
    themeToggle?.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        const switchTheme = () => setTheme(newTheme);

        if (!document.startViewTransition) {
            switchTheme();
        } else {
            document.startViewTransition(switchTheme);
        }
    });

    // Language selector
    langSelect?.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Mobile nav toggle
    navToggle?.addEventListener('click', () => {
        const isActive = navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive.toString());
    });

    // Close mobile nav on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle?.setAttribute('aria-expanded', 'false');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scrollspy: sync aria-current when CSS :target-current is supported
    if (CSS.supports('scroll-target-group: auto')) {
        const syncAriaCurrent = () => {
            const currentLink = document.querySelector('.nav__menu a:target-current');
            document.querySelectorAll('.nav__menu a').forEach(link => {
                link.setAttribute('aria-current', link === currentLink ? 'true' : 'false');
            });
        };
        syncAriaCurrent();
        document.addEventListener('scrollend', syncAriaCurrent);
    } else {
        // IntersectionObserver fallback for browsers without scroll-target-group
        const navLinks = document.querySelectorAll('.nav__menu a');
        const sections = document.querySelectorAll('section[id], footer[id]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        const isActive = link.getAttribute('href') === `#${id}`;
                        link.classList.toggle('target-current', isActive);
                        link.setAttribute('aria-current', isActive ? 'true' : 'false');
                    });
                }
            });
        }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

        sections.forEach(section => observer.observe(section));
    }

    // Scroll-driven reveals fallback for browsers without animation-timeline support
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)') &&
        matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        const revealElements = document.querySelectorAll('.section--reveal > .wrap, .closing--reveal > .wrap');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity 600ms ease, transform 600ms ease';
            revealObserver.observe(el);
        });
    }

    // Print styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .header, .nav__toggle, .hero__actions, .card__footer, .projects-more, .nav__controls {
                display: none !important;
            }
            .section, .closing, .hero {
                padding: 20px 0;
            }
            body {
                background: white;
                color: black;
            }
        }
    `;
    document.head.appendChild(printStyles);
});
