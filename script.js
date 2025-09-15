 const html = document.documentElement;
        const modeToggle = document.getElementById("modeToggle");
        const socialIcons = document.querySelectorAll('.social-icon');

        function updateIconColors() {
            socialIcons.forEach(icon => {
                if (html.classList.contains('dark')) {
                    icon.style.filter = 'brightness(0) invert(1)';
                } else {
                    icon.style.filter = 'none';
                }
            });
        }

        // Check for theme preference on page load
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            html.classList.add('dark');
        }
        updateIconColors();

        // Event listener to toggle the theme
        modeToggle.addEventListener("click", () => {
            html.classList.toggle('dark');
            
            // Update local storage and icon colors
            if (html.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                modeToggle.innerHTML="Light";
            } else {
                localStorage.setItem('theme', 'light');
                modeToggle.innerHTML="Dark";
            }
            
            updateIconColors();
        });

        

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to set active link
    function setActiveLink(targetSection) {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('text-deep-teal', 'underline');
            link.classList.add('hover:text-deep-teal');
        });
        
        // Add active class to target link
        const activeLink = document.querySelector(`[data-section="${targetSection}"]`);
        if (activeLink) {
            activeLink.classList.add('text-deep-teal', 'underline');
            activeLink.classList.remove('hover:text-deep-teal');
        }
    }
    
    // Set home as active by default
    setActiveLink('home');
    
    // Add click event to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            
            if (targetElement) {
                // Set active link
                setActiveLink(targetSection);
                
                // Smooth scroll to section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// dropdown
const menu = document.getElementById("hamburger");
const dropdown=document.getElementById("dropdown");
menu.addEventListener("click",()=>{
    document.getElementById("ham1").classList.toggle("ham1-open");
    document.getElementById("ham2").classList.toggle("ham2-open");
    document.getElementById("ham3").classList.toggle("ham3-open");

    dropdown.classList.toggle("ham");

   
})