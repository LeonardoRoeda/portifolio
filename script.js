document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#site-nav');
  const topButton = document.querySelector('#backToTop');

  const closeMenu = () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Abrir menu');
    const icon = toggle?.querySelector('i');
    icon?.classList.add('bx-menu');
    icon?.classList.remove('bx-x');
  };

  toggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open') ?? false;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.querySelector('i')?.classList.toggle('bx-menu', !open);
    toggle.querySelector('i')?.classList.toggle('bx-x', open);
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  const updateTopButton = () => topButton?.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', updateTopButton, { passive: true });
  updateTopButton();
  topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const filterButtons = [...document.querySelectorAll('.filter-button')];
  const projectCards = [...document.querySelectorAll('.project-card[data-category]')];
  const projectCount = document.querySelector('#project-count');
  document.querySelectorAll('.project-card .text-link').forEach((link) => {
    if (link.textContent.includes('Explorar no GitHub')) link.firstChild.textContent = 'Ver projeto no GitHub ';
  });
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visible = 0;
    filterButtons.forEach((item) => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
    projectCards.forEach((card) => {
      const show = filter === 'all' || card.dataset.category.split(' ').includes(filter);
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (projectCount) projectCount.textContent = `${visible} ${visible === 1 ? 'projeto exibido' : 'projetos exibidos'}`;
  }));

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const status = document.createElement('p');
    status.className = 'form-status';
    status.setAttribute('aria-live', 'polite');
    contactForm.append(status);
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const submit = contactForm.querySelector('button[type="submit"]');
      if (submit) { submit.disabled = true; submit.dataset.originalText = submit.textContent; submit.textContent = 'Enviando…'; }
      status.textContent = 'Enviando sua mensagem…';
      status.className = 'form-status is-loading';
      try {
        const response = await fetch(contactForm.action, { method: 'POST', body: new FormData(contactForm), headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error('request-failed');
        contactForm.reset();
        status.textContent = 'Mensagem enviada. Obrigado pelo contato!';
        status.className = 'form-status is-success';
      } catch {
        status.textContent = 'Não foi possível enviar agora. Tente novamente ou use o e-mail direto.';
        status.className = 'form-status is-error';
      } finally {
        if (submit) { submit.disabled = false; submit.textContent = submit.dataset.originalText; }
      }
    });
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if (sections.length && links.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => { const selected = link.getAttribute('href') === `#${entry.target.id}`; link.classList.toggle('active', selected); link.setAttribute('aria-current', selected ? 'page' : 'false'); });
    }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
  }
});
