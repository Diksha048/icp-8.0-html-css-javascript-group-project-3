const questions = {
    science: [
        "Do you enjoy conducting experiments?",
        "Are you interested in learning about the natural world?",
        "Do you like solving complex problems?",
        "Are you good at mathematics?",
        "Do you enjoy reading scientific articles?"
    ],
    commerce: [
        "Are you interested in business and finance?",
        "Do you enjoy working with numbers?",
        "Do you like analyzing market trends?",
        "Are you good at managing money?",
        "Do you enjoy learning about economics?"
    ],
    arts: [
        "Do you enjoy creative activities like painting or writing?",
        "Are you interested in history and culture?",
        "Do you like expressing yourself through art?",
        "Do you enjoy reading literature?",
        "Are you interested in performing arts?"
    ]
};

const answers = {
    science: 0,
    commerce: 0,
    arts: 0
};

let currentFieldIndex = 0;
let currentQuestionIndex = 0;
const fields = Object.keys(questions);

function loadQuestion() {
    const field = fields[currentFieldIndex];
    const questionText = questions[field][currentQuestionIndex];
    document.getElementById("question1").innerHTML = `<p>${questionText}</p><button class="btn" onclick="answer('yes')">Yes</button><button class="btn" onclick="answer('no')">No</button>`;
}

function answer(response) {
    const field = fields[currentFieldIndex];
    if (response === 'yes') {
        answers[field]++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < 5) {
        loadQuestion();
    } else {
        currentFieldIndex++;
        currentQuestionIndex = 0;

        if (currentFieldIndex < fields.length) {
            loadQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    let recommendedField = '';
    let maxYes = 0;

    for (const field in answers) {
        if (answers[field] > maxYes) {
            maxYes = answers[field];
            recommendedField = field;
        }
    }

    document.getElementById("quiz").style.display = 'none';
    document.getElementById("result").innerHTML =`<h2>We recommend you to choose: ${recommendedField}</h2>`;
    
}

window.onload = loadQuestion;







document.getElementById('dropdown-items').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});



const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeIcon.src = '../images/arts-page-image/moon.png';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeIcon.src = '../images/arts-page-image/sun.png';
    }
});