const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelectorAll('.skill-line').forEach((row) => {
  if (row.querySelector('strong')?.textContent.trim() === 'Certifications') row.remove();
});
document.querySelector('.certification-heading')?.remove();
document.querySelector('.certification-list')?.remove();

const certificateSection = document.querySelector('#toolkit');
const certificateHeading = document.createElement('div');
certificateHeading.className = 'certification-heading reveal';
certificateHeading.innerHTML = '<span>Proof of learning</span><strong>My certifications</strong>';
const certificateList = document.createElement('div');
certificateList.className = 'certification-list reveal delay-1';
const certificates = [
  ['certificate-workshop.pdf', 'Workshop · 01', 'Workshop E-Certificate'],
  ['certificate-networking-web-technology.pdf', 'Technology · 02', 'Networking and Web Technology'],
  ['certificate-css3.pdf', 'Web development · 03', 'CSS 3'],
  ['certificate-html5.pdf', 'Web development · 04', 'HTML 5'],
  ['certificate-learning-path.pdf', 'Learning path · 05', 'Learning Path Certificate'],
  ['certificate-ethical-hacker.pdf', 'Cybersecurity · 06', 'Ethical Hacker'],
  ['certificate-international.pdf', 'Professional · 07', 'International Certificate'],
  ['certificate-introduction-cybersecurity.pdf', 'Cybersecurity · 08', 'Introduction to Cybersecurity'],
  ['certificate-ibm-design.pdf', 'Design · 09', 'IBM Design Thinking'],
  ['certificate-ssn-hackathon.jpeg', 'SSN IEEE · 10', 'SSN Hackathon — Vision to Venture 2.0 2026']
];

certificates.forEach(([file, category, title]) => {
  const link = document.createElement('a');
  link.className = 'certification-item';
  link.href = file;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.innerHTML = `<span><small>${category}</small>${title}</span><b>Open certificate ↗</b>`;
  certificateList.append(link);
});

certificateSection.append(certificateHeading, certificateList);
certificateHeading.classList.add('visible');
certificateList.classList.add('visible');

document.querySelector('#year').textContent = new Date().getFullYear();
