// PC dropdown
const dropdownLinks = document.querySelectorAll('.nav-link.has-dropdown');
const dropdowns = document.querySelectorAll('.dropdown');
        
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownId = link.dataset.dropdown;
        const dropdown = document.getElementById(dropdownId);
                
        // Close all other dropdowns
        dropdowns.forEach(d => {
            if (d.id !== dropdownId) {
                d.classList.remove('active');
                document.querySelector(`[data-dropdown="${d.id}"]`).classList.remove('active');
            }
        });
                
        // Toggle current dropdown
        dropdown.classList.toggle('active');
        link.classList.toggle('active');
    });
});
        
// Mobile toggle functionality        
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
        
mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});
        
// Mobile dropdown functionality
const mobileDropdownLinks = document.querySelectorAll('[data-mobile-dropdown]');
const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
        
mobileDropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownId = link.dataset.mobileDropdown;
        const dropdown = document.getElementById(dropdownId);
                
        // Close all other mobile dropdowns
        mobileDropdowns.forEach(d => {
            if (d.id !== dropdownId) {
                d.classList.remove('active');
            }
        });
                
        // Toggle current mobile dropdown
        dropdown.classList.toggle('active');
    });
});
        
// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        dropdownLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
});
        
// Close mobile nav when clicking on mobile dropdown items
document.querySelectorAll('.mobile-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});








//Scroll Annimation
const observerOptions={
    threshold:0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=> {
        if(entry.isIntersecting){
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions)

document.querySelectorAll('.scroll-reveal').forEach(e1=>{
    observer.observe(e1)
});

document.documentElement.style.scrollBehavior='smooth';
