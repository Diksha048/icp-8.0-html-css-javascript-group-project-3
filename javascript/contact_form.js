document.getElementById('submitBtn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    // var number = document.getElementById('num').value;
    var message = document.getElementById('msg').value;
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields before submitting. ');
    }
});

/* Theme change */
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.src = './images/arts-page-image/moon.png';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.src = './images/arts-page-image/sun.png';
    }
});