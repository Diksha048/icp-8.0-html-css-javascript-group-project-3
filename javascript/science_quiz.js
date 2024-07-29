window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  document.getElementById('dropdown-items').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});



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
        themeIcon.src = './../../images/arts-page-image/moon.png';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.src = './../../images/arts-page-image/sun.png';
    }
});

// Get the button and tooltip elements by their IDs
const button = document.getElementById('button');
const tooltip = document.getElementById('tooltip-degree');

// Add event listener for mouseover
button.addEventListener('mouseover', function() {
    // Show the tooltip
    tooltip.style.display = 'block';
});

// Add event listener for mouseout
button.addEventListener('mouseout', function() {
    // Hide the tooltip
    tooltip.style.display = 'none';
});
