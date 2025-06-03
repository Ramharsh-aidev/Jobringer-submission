document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open');
            const isExpanded = mainNav.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.innerHTML = isExpanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Filter Accordion Toggle
    const filterToggles = document.querySelectorAll('.filter-toggle');
    filterToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            this.classList.toggle('active');
            const options = this.nextElementSibling;
            if (options.classList.contains('filter-options')) {
                options.classList.toggle('open');
            }
        });
    });

    // Smooth scroll for anchor links (optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a page anchor, not just "#" or an external link
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Log selected value from "Show per page" dropdown
    const showCountSelect = document.getElementById('show-count');
    if (showCountSelect) {
        showCountSelect.addEventListener('change', function() {
            console.log(`Show ${this.value} items per page.`);
            // Here you would typically trigger a re-fetch or re-render of job listings
        });
    }

    // Example: Quick job search tag click
    const quickSearchTags = document.querySelectorAll('.quick-job-search .tag');
    if (quickSearchTags) {
        quickSearchTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const searchTerm = this.textContent.replace('#', '');
                const keywordsInput = document.getElementById('keywords');
                if (keywordsInput) {
                    keywordsInput.value = searchTerm;
                    // Optionally, trigger a search action here
                    console.log(`Quick search for: ${searchTerm}`);
                }
            });
        });
    }
});