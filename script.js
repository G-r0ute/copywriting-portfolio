// Scroll Animation with Active Links
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const options = {
    root: null,
    threshold: 0.7,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`a[href="#${entry.target.id}"]`).classList.add('active');
        }
    });
}, options);

sections.forEach(section => observer.observe(section));

// Modal Functionality
const viewBtns = document.querySelectorAll('.view-project-btn');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = document.getElementById(btn.dataset.modal);
        modal.style.display = 'flex';
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.style.display = 'none';
    });
});

window.onclick = (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
};
