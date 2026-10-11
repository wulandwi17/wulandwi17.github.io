const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
 filters.forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
 document.querySelectorAll('[data-category]').forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; });
}));
const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
 const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) document.querySelectorAll('nav a').forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id)); }); }, {rootMargin:'-15% 0px -65% 0px'});
 sections.forEach(section => observer.observe(section));
}
