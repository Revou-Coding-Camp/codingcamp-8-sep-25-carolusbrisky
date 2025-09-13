document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded for:', window.location.pathname);
    
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const namePrompt = prompt("Masukkan nama Anda:");
        const userNameElement = document.getElementById("user-name");
        if (namePrompt && userNameElement) {
            userNameElement.textContent = namePrompt;
        }
    }
    
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav') && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        navMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    }
    
    const closeModal = document.getElementById('close-modal');
    const modal = document.getElementById('modal');
    
    if (closeModal && modal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

function handleFormSubmit(form) {
    const name = form.querySelector('input[type="text"][placeholder="Name"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const dob = form.querySelector('input[type="date"]').value;
    const gender = form.querySelector('input[name="gender"]:checked')?.value;
    const message = form.querySelector('textarea').value.trim();

    if(!name || !email || !dob || !gender || !message){
        alert("Please fill in all fields!");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Please enter a valid email!");
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalBody) {
        modalBody.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
        modal.style.display = 'flex';
    } else {
        alert('Form submitted successfully!');
    }

    form.reset();
}