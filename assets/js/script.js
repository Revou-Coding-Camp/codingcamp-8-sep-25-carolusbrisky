const namePrompt = prompt("Masukkan nama Anda:");
if (namePrompt) {
    document.getElementById("user-name").textContent = namePrompt;
}

const form = document.querySelector('form');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

form.addEventListener('submit', function(e){
    e.preventDefault();

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

    modalBody.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    modal.style.display = 'flex';
});

closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
});
