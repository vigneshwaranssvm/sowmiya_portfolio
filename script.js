document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Work With Me')) {
      button.addEventListener('click', function () {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

});

/* expose functions for inline HTML usage */
window.toggleFAQ = function (button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle('active');
};

window.handleSubmit = function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
};
