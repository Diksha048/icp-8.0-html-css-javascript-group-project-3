/* navbar dropdown list */
document.getElementById('dropdown-items').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});


/* course preview */
function changeImage(imageName) {
    const mainImage = document.getElementById('main-product-img');
    mainImage.src=imageName;
}


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