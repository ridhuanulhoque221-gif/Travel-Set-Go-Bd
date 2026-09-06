// ===== Header scroll state + progress bar =====
const header = document.getElementById('siteHeader');
const progressFill = document.getElementById('progressFill');

function onScroll(){
  const scrollY = window.scrollY;
  header.classList.toggle('scrolled', scrollY > 40);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
  progressFill.style.width = pct + '%';
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Populate European country grid =====
const europeanCountries = [
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Portugal', flag: '🇵🇹' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'Romania', flag: '🇷🇴' },
  { name: 'Hungary', flag: '🇭🇺' },
  { name: 'Croatia', flag: '🇭🇷' },
  { name: 'Czech Republic', flag: '🇨🇿' },
  { name: 'Lithuania', flag: '🇱🇹' },
  { name: 'Latvia', flag: '🇱🇻' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'Sweden', flag: '🇸🇪' },
  { name: 'Ireland', flag: '🇮🇪' },
  { name: 'Finland', flag: '🇫🇮' },
  { name: 'Denmark', flag: '🇩🇰' },
  { name: 'Austria', flag: '🇦🇹' },
  { name: 'Belgium', flag: '🇧🇪' },
  { name: 'Slovakia', flag: '🇸🇰' },
  { name: 'Slovenia', flag: '🇸🇮' },
  { name: 'Estonia', flag: '🇪🇪' },
  { name: 'Bulgaria', flag: '🇧🇬' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Cyprus', flag: '🇨🇾' },
  { name: 'Malta', flag: '🇲🇹' },
  { name: 'Luxembourg', flag: '🇱🇺' },
  { name: 'Iceland', flag: '🇮🇸' }
];

const VISIBLE_COUNT = 8;
const countryGrid = document.getElementById('countryGrid');
const showAllBtn = document.getElementById('showAllCountries');

function renderCountries(){
  countryGrid.innerHTML = europeanCountries.map((c, i) => `
    <div class="country-card ${i >= VISIBLE_COUNT ? 'hidden' : ''}" data-index="${i}">
      <span class="flag-emoji" aria-hidden="true">${c.flag}</span>
      <div>
        <h4>${c.name}</h4>
        <span>Student &amp; Work Opportunities</span>
      </div>
    </div>
  `).join('');
}
renderCountries();

let expanded = false;
showAllBtn.addEventListener('click', () => {
  expanded = !expanded;
  countryGrid.querySelectorAll('.country-card').forEach((card, i) => {
    if (i >= VISIBLE_COUNT) card.classList.toggle('hidden', !expanded);
  });
  showAllBtn.textContent = expanded ? 'Show Fewer Countries' : 'Explore All European Countries';
});

// ===== Contact form (front-end only demo handling) =====
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!contactForm.checkValidity()){
    formNote.textContent = 'Please fill in the required fields before submitting.';
    formNote.style.color = '#C0392B';
    return;
  }
  const name = document.getElementById('fullName').value.trim();
  formNote.style.color = '#2AA9A0';
  formNote.textContent = `Thank you, ${name}. Our team will contact you shortly.`;
  contactForm.reset();
});
