// Basic interactivity used by all pages

// Show current year in footer placeholders
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  const ids = ['year','year2','year3','year4'];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // Mobile nav toggle
  const btn = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click', ()=> {
      const visible = nav.style.display === 'flex';
      nav.style.display = visible ? 'none' : 'flex';
    });
  }

  // Contact form handling (client-side only)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // simple validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        alert('Please fill in required fields: name, email and message.');
        return;
      }
      // display fake "sent" message (no backend)
      alert('Thank you, ' + name + '! Your message has been received. We will contact you soon.');
      form.reset();
    });
  }
});
