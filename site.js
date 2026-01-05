document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // FAQ Logic
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const arrow = btn.querySelector('span:last-child');
            
            // Toggle current
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                if(arrow) arrow.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                if(arrow) arrow.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (lightbox) {
        // Open
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const fullSrc = item.getAttribute('data-full');
                const title = item.getAttribute('data-title');
                const desc = item.getAttribute('data-desc');
                const alt = item.querySelector('img').getAttribute('alt');

                if (fullSrc) {
                    lightboxImg.src = fullSrc;
                    lightboxImg.alt = alt; // Keep SEO alt context
                    lightboxTitle.textContent = title;
                    lightboxDesc.textContent = desc;
                    lightbox.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling bg
                }
            });
        });

        // Close functions
        const closeLightbox = () => {
            lightbox.classList.add('hidden');
            lightboxImg.src = ''; // Clear src to stop memory usage
            document.body.style.overflow = '';
        };

        lightboxClose.addEventListener('click', closeLightbox);
        
        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
                closeLightbox();
            }
        });
    }
});