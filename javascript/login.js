/**Navbar0 */
document.getElementById('dropdown-items').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
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
        body.classList.remove('dark-h1')
        body.classList.add('light-h1')
        body.classList.remove('dark-writer')
        body.classList.add('light-writer')
        body.classList.remove('dark-card')
        body.classList.add('light-card')
       
        themeIcon.src = '../images/arts-page-image/moon.png';
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
        themeIcon.src = '../images/arts-page-image/sun.png';
    }
}
);



/**login from */
const form = document.querySelector("form");
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}