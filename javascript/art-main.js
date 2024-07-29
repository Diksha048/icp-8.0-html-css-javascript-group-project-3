
/**Navbar0 */
document.getElementById('dropdown-items').addEventListener('click', function() {
  document.getElementById('navMenu').classList.toggle('active');
});
function ChangeVideo(num){
  let mainVideo = document.getElementById("main-video");
    if (num == 1) {
        mainVideo.src = "../../art-video/career.mp4";
      }
       else if (num == 2) 
        {
        mainVideo.src = "../../art-video/after10inart.mp4";
      } 
      else if (num == 3) {
        mainVideo.src = "../../art-video/career12.mp4";
      }
      mainVideo.load();
      mainVideo.play(); 
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
        body.classList.remove('dark-h1')
        body.classList.add('light-h1')
        body.classList.remove('dark-writer')
        body.classList.add('light-writer')
        body.classList.remove('dark-card')
        body.classList.add('light-card')
       
        themeIcon.src = './../../images/arts-page-image/moon.png';
    } 
    else
     {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        body.classList.remove('light-h1')
        body.classList.add('dark-h1')
        body.classList.remove('light-writer')
        body.classList.add('dark-writer')
        body.classList.remove('light-card')
        body.classList.add('dark-card')
        themeIcon.src = './../../images/arts-page-image/sun.png';
    }
}
);
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
