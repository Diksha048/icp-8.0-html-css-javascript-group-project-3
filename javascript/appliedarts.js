document.querySelectorAll('.text ul li').forEach(item => 
  {
  item.addEventListener('click', () => 
    {
      const scrollToId = item.getAttribute('data-scroll-to');
      const scrollToElement = document.getElementById(scrollToId);
      if (scrollToElement) {
          scrollToElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});  
document.getElementById('btn-graduation-professional').addEventListener('mouseenter', () => 
{
  document.getElementById('tooltip-professional').style.display = 'block';
});
document.getElementById('btn-graduation-professional').addEventListener('mouseleave', () => 
{
  document.getElementById('tooltip-professional').style.display = 'none';
});

document.getElementById('btn-graduation-graduation').addEventListener('mouseenter', () => 
  {
  document.getElementById('tooltip-graduation').style.display = 'block';
});
document.getElementById('btn-graduation-graduation').addEventListener('mouseleave', () =>
 {
  document.getElementById('tooltip-graduation').style.display = 'none';
});
document.getElementById('btn-graduation-degree').addEventListener('mouseenter', () => 
{
  document.getElementById('tooltip-degree').style.display = 'block';
});
document.getElementById('btn-graduation-degree').addEventListener('mouseleave', () => 
{
  document.getElementById('tooltip-degree').style.display = 'none';
});
document.getElementById('btn-graduation-management').addEventListener('mouseenter', () => 
{
  document.getElementById('tooltip-management').style.display = 'block';
});
document.getElementById('btn-graduation-management').addEventListener('mouseleave', () =>
{
  document.getElementById('tooltip-management').style.display = 'none';
});

document.getElementById('btn-graduation-architecture').addEventListener('mouseenter', () => 
{
  document.getElementById('tooltip-architecture').style.display = 'block';
});
document.getElementById('btn-graduation-architecture').addEventListener('mouseleave', () =>
 {
  document.getElementById('tooltip-architecture').style.display = 'none';
});
/* Theme change */
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () =>
   {
    if (body.classList.contains('dark-theme'))
       {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        body.classList.remove('dark-themeheader');
        body.classList.add('light-themeheader');
        body.classList.remove('h1dark');
        body.classList.add('h1light');
        themeIcon.src = './../../images/arts-page-image/moon.png';
    } 
    else
     {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        body.classList.remove('light-themeheader');
        body.classList.add('dark-themeheader');
        body.classList.remove('h1light');
        body.classList.add('h1dark');

        themeIcon.src = './../../images/arts-page-image/sun.png';
    }
}
);

