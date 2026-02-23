document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            // navbar.style.background = 'rgba(244, 239, 234, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.padding = '1rem 0';
            // navbar.style.background = 'rgba(244, 239, 234, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .service-card, .about-image').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Simple Form Submission (Mock)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Enviando...';
            btn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('¡Gracias! Tu mensaje ha sido enviado con éxito.');
                    contactForm.reset();
                } else {
                    alert('Ups... Hubo un problema al enviar tu mensaje. Por favor, intentá de nuevo.');
                }
            } catch (error) {
                alert('Ups... Hubo un problema al enviar tu mensaje. Por favor, intentá de nuevo.');
            } finally {
                btn.textContent = originalText;
                btn.disabled = false;
            }
        });
    }
});
