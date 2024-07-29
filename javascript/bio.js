function showDetails(cardId) {
    const details = document.getElementById(cardId);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}
/* Theme change */
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () =>
   {
    if (body.classList.contains('dark-theme'))
       {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.src = './../../images/arts-page-image/moon.png';
    } 
    else
     {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.src = './../../images/arts-page-image/sun.png';
    }
}
);