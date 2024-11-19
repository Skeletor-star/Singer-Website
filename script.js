document.getElementById('enquiry-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  });

// Toggle Social Profiles
const menuBtn = document.getElementById('menu-btn');
const profiles = document.getElementById('social-profiles');

menuBtn.addEventListener('click', () => {
  profiles.classList.toggle('show');
});
