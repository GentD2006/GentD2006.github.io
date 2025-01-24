


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function showPopupMessage() {
    alert('Thank you for visiting Radio Ylberi!');
}


document.querySelector('#contact button[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault();
    showPopupMessage();
});

console.log("News Portal Loaded");


console.log("Faqja e lajmeve u ngarkua!");


document.querySelectorAll(".social-icons img").forEach(icon => {
    icon.addEventListener("click", () => {
        alert("Ndaje këtë artikull në rrjetin social!");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    
    if (name === "" || email === "" || message === "") {
        event.preventDefault(); 
        alert("Ju lutem plotësoni të gjitha fushat.");
    }
});

