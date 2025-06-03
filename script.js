document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav'); // The <nav class="main-nav"> element

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open'); 
            const isExpanded = mainNav.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (isExpanded) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Filter Accordion Toggle
    const filterToggles = document.querySelectorAll('.filter-toggle');
    filterToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            this.classList.toggle('active'); 
            const options = this.nextElementSibling;
            if (options && options.classList.contains('filter-options')) {
                options.classList.toggle('open'); 
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && href !== "#" && document.querySelector(href)) { 
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // "Show per page" dropdown
    const showCountSelect = document.getElementById('show-count');
    if (showCountSelect) {
        showCountSelect.addEventListener('change', function() {
            console.log(`Show ${this.value} items per page.`);
        });
    }

    // Quick job search tag click
    const quickSearchTags = document.querySelectorAll('.quick-job-search .tag');
    if (quickSearchTags) {
        quickSearchTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const searchTerm = this.textContent.replace('#', '');
                const keywordsInput = document.getElementById('keywords');
                if (keywordsInput) {
                    keywordsInput.value = searchTerm;
                    console.log(`Quick search for: ${searchTerm}`);
                }
            });
        });
    }
});