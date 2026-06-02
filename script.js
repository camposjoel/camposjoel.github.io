const translations = {
    en: {
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.greeting': "Hello, I'm",
        'hero.title': 'Full Stack Developer',
        'hero.description': 'Passionate about building modern web applications for businesses and individuals.',
        'hero.github': 'GitHub',
        'hero.linkedin': 'LinkedIn',
        'about.title': 'About Me',
        'about.p1': `I'm a Full Stack Developer based in Mexico with 6+ years of experience, specializing in building modern web applications with Angular, Node.js and .NET. I focus on creating responsive, user-friendly interfaces and robust backend solutions.`,
        'about.p2': 'With experience in both frontend and backend development, I enjoy tackling challenging projects that require creative problem-solving. I\'m particularly interested in real-time applications and emerging web technologies.',
        'about.p3': "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or working on personal projects to sharpen my skills.",
        'about.location': 'Location',
        'about.company': 'Company',
        'about.focus': 'Focus',
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
        'contact.title': 'Get In Touch',
        'contact.text': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        'footer.designed': 'Designed & Built by Joel Campos',
        'footer.rights': 'All rights reserved.'
    },
    es: {
        'nav.about': 'Acerca de',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'hero.greeting': 'Hola, soy',
        'hero.title': 'Desarrollador Full Stack',
        'hero.description': 'Apasionado por construir aplicaciones web modernas con las últimas tecnologías.',
        'hero.github': 'GitHub',
        'hero.linkedin': 'LinkedIn',
        'about.title': 'Acerca de Mí',
        'about.p1': `Soy un Desarrollador Full Stack radicado en México con más de 6 años de experiencia, especializado en construir aplicaciones web modernas con Angular, Node.js y .NET. Me enfoco en crear interfaces responsivas, fáciles de usar y soluciones robustas de backend.`,
        'about.p2': 'Con experiencia en desarrollo frontend y backend, disfruto enfrentar proyectos desafiantes que requieren pensamiento creativo. Estoy particularmente interesado en aplicaciones en tiempo real y tecnologías web emergentes.',
        'about.p3': 'Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo a código abierto, o trabajando en proyectos personales para mejorar mis habilidades.',
        'about.location': 'Ubicación',
        'about.company': 'Empresa',
        'about.focus': 'Enfoque',
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
        'contact.title': 'Ponte en Contacto',
        'contact.text': 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas, u oportunidades para ser parte de tu visión.',
        'footer.designed': 'Diseñado y Desarrollado por Joel Campos',
        'footer.rights': 'Todos los derechos reservados.'
    }
};

let currentLang = sessionStorage.getItem('lang') || 'es';
let currentTheme = sessionStorage.getItem('theme') || 'light';

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
        document.documentElement.removeAttribute('data-theme');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    const themeToggle = document.querySelector('.theme-toggle');
    const langSelect = document.getElementById('lang-select');

    setTheme(currentTheme);
    setLanguage(currentLang);

    themeToggle?.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        const switchTheme = () => setTheme(newTheme);

        if (!document.startViewTransition) {
            switchTheme();
        } else {
            document.startViewTransition(switchTheme);
        }
    });

    langSelect?.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    navToggle?.addEventListener('click', () => {
        const isActive = navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive.toString());
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('active');
            navMenu.classList.remove('active');
            navToggle?.setAttribute('aria-expanded', 'false');
        });
    });

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .about-content, .contact-content');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `
        .skill-category.visible,
        .project-card.visible,
        .about-content.visible,
        .contact-content.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const projectsGrid = document.querySelector('.projects-grid');

    if (projectsGrid) {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
                }
            });
        };

        const handleMouseLeave = () => {
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.transform = '';
            });
        };

        projectsGrid.addEventListener('mousemove', handleMouseMove);
        projectsGrid.addEventListener('mouseleave', handleMouseLeave);
    }

    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .header, .nav-toggle, .hero-links, .project-links, .projects-more, .header-controls {
                display: none !important;
            }
            
            .section {
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
