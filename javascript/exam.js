document.getElementById('dropdown-items').addEventListener('click', function()
 {
    document.getElementById('navMenu').classList.toggle('active');
}
);
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

const exams = [
    {
     name: 'UPSC', description: 'The Civil Services Examination (CSE) is a standardized test in India conducted by the Union Public Service Commission for recruitment to higher civil services in the Government of India, such as the All India Services and Central Civil Services (Group A and a few Group B posts).'
     },
    {
         name: 'MPSC', description: 'The Maharashtra Public Service Commission (MPSC) is a body created by the Constitution of India under article 315 to select Group "A" and Group "B" civil servants for the Indian state of Maharashtra according to the merits of the applicants and the rules of reservation.'
    },
    {
     name: 'CDS', description: 'The CDS (Combined Defence Services) exam is a national-level exam conducted by the Union Public Service Commission (UPSC) twice a year to recruit candidates for officer posts in the Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), and Officers Training Academy (OTA)' 
    },
  {
     name: 'NDA', description: 'The National Defence Academy (NDA) is the joint defence service training institute of the Indian Armed Forces, where cadets of the Indian Army, Indian Navy, and Indian Air Force train together before they go on to their respective service academy for further pre-commission training. The NDA is located in Khadakwasla, Pune, Maharashtra. It is the first tri-service academy in the world.' 
    },
  {
     name: 'SSC', description: 'Staff Selection Commission (SSC) is an organisation under the Government of India to recruit staff for various posts in the various ministries and departments of the government of India and in subordinate offices and agencies.' 
    },
  {
     name: 'CU CET', description: 'The Common University Entrance Test (CUET), formerly Central Universities Common Entrance Test (CUCET) is a standardised test in India conducted by the National Testing Agency at various levels—CUET (UG), CUET (PG), and CUET (PhD), for admission to undergraduate, postgraduate, and doctorate programmes in Central Universities and other participating institutes.' 
    },
  { 
    name: 'CAPF', description: 'In India, the Central Armed Police Forces (CAPF) is the collective designation for the central police organizations under the Ministry of Home Affairs. These forces, previously known as the Central Para-Military Forces, are technically paramilitary in nature.'
 },
  {
     name: 'NRA CET', description: 'NRA CET 2024 is a  recruitment exam conducted by NRA. Govt. of India for SSC, Railways, Bank Po, IBPS, RRB, Police.  The Government has established the National Recruitment Agency to conduct preliminary/ Phase-I written test (CBT) in three levels.'
     },
  {
     name: 'RRB', description: 'Railway Recruitment Control Board is a government recruitment agency for Group C and Group D non-gazetted civil service and engineering posts in Indian Railways under Ministry of Railways, Government of India.'
     }, 
];

const searchExams = () => 
    {
  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm === '') return; 
  searchResults.innerHTML = '';
  const results = exams.filter(exam => exam.name.toLowerCase().includes(searchTerm));
  if (results.length > 0) 
    {
    results.forEach(result =>
         {
      const resultDiv = document.createElement('div');
      resultDiv.textContent = `${result.name} - ${result.description}`;
      searchResults.appendChild(resultDiv);
    }
);
  }
   else 
   {
    const noResultsDiv = document.createElement('div');
    noResultsDiv.textContent = 'No results found.';
    searchResults.appendChild(noResultsDiv);
  }
  searchInput.value = '';
  window.location.hash = '#ias-sc-anchor';
};

searchBtn.addEventListener('click', searchExams);

searchInput.addEventListener('keydown', (event) => 
    {
  if (event.key === 'Enter')
     {
    searchExams();
  }
}
);
document.addEventListener('click', (event) => {
  if (event.target !== searchInput && event.target !== searchBtn) {
    searchResults.innerHTML = '';
  }
});
document.addEventListener('scroll', () => {
  searchResults.innerHTML = '';
});
searchBtn.addEventListener('click', () => {
  searchExams();
  const infoPage = document.getElementById('info-page');
  infoPage.scrollIntoView({ behavior: 'smooth' });
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