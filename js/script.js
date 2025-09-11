const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


function validateForm() {
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Basic Email Format Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone Number Validation for 10 Digits
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a 10-digit phone number.");
        return false;
    }

    return true;
}




const bookButton = document.getElementById('bookButton');
const bookModal = document.getElementById('bookModal');
const closeModal = document.getElementById('closeModal');
const bookNowButtons = document.querySelectorAll('.book-now-btn'); // Selects all "Book Now" buttons

// Function to open the modal with a fade-in effect
const openModal = (e) => {
    e.preventDefault();
    bookModal.style.display = 'flex';
    bookModal.classList.add('fade-in');
    bookModal.classList.remove('fade-out');
};

// Function to close the modal with a fade-out effect
const closeModalFunc = () => {
    bookModal.classList.remove('fade-in');
    bookModal.classList.add('fade-out');
    setTimeout(() => {
        bookModal.style.display = 'none';
    }, 300); // Matches the duration of the fade-out effect
};

// Show modal when the main book button is clicked
bookButton.addEventListener('click', openModal);

// Show modal when any car "Book Now" button is clicked
bookNowButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Hide modal when the close button is clicked
closeModal.addEventListener('click', closeModalFunc);

// Hide modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === bookModal) {
        closeModalFunc();
    }
});

// Close modal on pressing the "Esc" key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookModal.style.display === 'flex') {
        closeModalFunc();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('confirmEmail');
    const emailError = document.getElementById('emailError');
    
    // Function to check if email and confirmEmail match
    function validateEmailMatch() {
        if (emailInput.value !== confirmEmailInput.value) {
            emailError.style.display = 'block';
            confirmEmailInput.setCustomValidity('Emails do not match');
        } else {
            emailError.style.display = 'none';
            confirmEmailInput.setCustomValidity('');
        }
    }

    // Listen for changes in both email fields
    emailInput.addEventListener('input', validateEmailMatch);
    confirmEmailInput.addEventListener('input', validateEmailMatch);
});


function hideSplash() {
    document.getElementById('video-splash').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}