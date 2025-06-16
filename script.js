document.addEventListener("DOMContentLoaded", function() {
    // Função para revelar seções ao rolar
    const revealSections = () => {
        const sections = document.querySelectorAll('section');
        
        const options = {
            root: null, // usa a viewport como área de observação
            rootMargin: '0px',
            threshold: 0.1 // a seção é revelada quando 10% dela está visível
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Se a seção está na viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Para de observar a seção uma vez que ela já está visível
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    // Função para navegação suave
    const smoothScroll = () => {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // Inicia as funções
    revealSections();
    smoothScroll();
});