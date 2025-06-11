function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  const btn = document.getElementById('hamburgerBtn');
  menu.classList.toggle('show');
  btn.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document
      .querySelector(anchor.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    const menu = document.getElementById('navbarMenu');
    const btn = document.getElementById('hamburgerBtn');
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      btn.classList.remove('active');
    }
  });
});
