// VidyaLink Client-side App Core Logic
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
});

// Navigation & View Routing
function initNavigation() {
    const tabs = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.view-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Update active state in navigation buttons
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show target section, hide others
            sections.forEach(sec => {
                if (sec.id === `view-${targetTab}`) {
                    sec.classList.add('active');
                } else {
                    sec.classList.remove('active');
                }
            });
        });
    });
}
