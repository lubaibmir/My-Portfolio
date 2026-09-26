// Achievement Image Sliders Logic
const sliders = {
    codeissance: {
        images: ['codescience1.jpeg', 'codeiscance2.jpeg'],
        currentIndex: 0,
        imgId: 'codeissance-img',
        dotsId: 'codeissance-dots'
    },
    mosaic: {
        images: ['Mosaic1.jpeg', 'Mosaic2.jpeg', 'Mosaic3.jpeg'],
        currentIndex: 0,
        imgId: 'mosaic-img',
        dotsId: 'mosaic-dots'
    }
};

function updateSlide(key) {
    const slider = sliders[key];
    const imgEl = document.getElementById(slider.imgId);
    if (imgEl) {
        imgEl.src = slider.images[slider.currentIndex];
    }
    const dotsContainer = document.getElementById(slider.dotsId);
    if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('button');
        dots.forEach((dot, idx) => {
            if (idx === slider.currentIndex) {
                dot.className = 'w-3 h-3 rounded-full bg-deep-teal transition-all scale-110';
            } else {
                dot.className = 'w-3 h-3 rounded-full bg-gray-400/50 transition-all';
            }
        });
    }
}

function nextSlide(key) {
    const slider = sliders[key];
    slider.currentIndex = (slider.currentIndex + 1) % slider.images.length;
    updateSlide(key);
}

function prevSlide(key) {
    const slider = sliders[key];
    slider.currentIndex = (slider.currentIndex - 1 + slider.images.length) % slider.images.length;
    updateSlide(key);
}

function setSlide(key, index) {
    const slider = sliders[key];
    slider.currentIndex = index;
    updateSlide(key);
}

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
    if (modeToggle) modeToggle.innerHTML = "Light";
} else {
    if (modeToggle) modeToggle.innerHTML = "Dark";
}
updateIconColors();

// Event listener to toggle the theme
if (modeToggle) {
    modeToggle.addEventListener("click", () => {
        html.classList.toggle('dark');
        
        // Update local storage and icon colors
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            modeToggle.innerHTML = "Light";
        } else {
            localStorage.setItem('theme', 'light');
            modeToggle.innerHTML = "Dark";
        }
        
        updateIconColors();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdown = document.getElementById("dropdown");
    const ham1 = document.getElementById("ham1");
    const ham2 = document.getElementById("ham2");
    const ham3 = document.getElementById("ham3");
    
    // Function to set active link
    function setActiveLink(targetSection) {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('text-deep-teal', 'underline');
            link.classList.add('hover:text-deep-teal');
        });
        
        // Add active class to target link (matches desktop & mobile)
        const activeLinks = document.querySelectorAll(`[data-section="${targetSection}"]`);
        activeLinks.forEach(link => {
            link.classList.add('text-deep-teal', 'underline');
            link.classList.remove('hover:text-deep-teal');
        });
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
                
                // Close dropdown if open
                if (dropdown && !dropdown.classList.contains("ham")) {
                    dropdown.classList.add("ham");
                    if (ham1) ham1.classList.remove("ham1-open");
                    if (ham2) ham2.classList.remove("ham2-open");
                    if (ham3) ham3.classList.remove("ham3-open");
                }

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
const dropdown = document.getElementById("dropdown");
if (menu) {
    menu.addEventListener("click", () => {
        document.getElementById("ham1")?.classList.toggle("ham1-open");
        document.getElementById("ham2")?.classList.toggle("ham2-open");
        document.getElementById("ham3")?.classList.toggle("ham3-open");
        dropdown?.classList.toggle("ham");
    });
}