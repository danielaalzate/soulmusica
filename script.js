const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

const translations={es:{navCourses:'Cursos',navPrices:'Precios',navTeachers:'Profesores',navMedia:'Audiovisual',navContact:'Contacto',trial:'Reserva tu prueba ↗',hero:'Tu música|empieza aquí.',intro:'Aprender música|se siente diferente.',course:'Cursos para|encontrar tu voz.',teachers:'Profesores que|te hacen avanzar.',contact:'Estamos en|el corazón de Gandia.'},va:{navCourses:'Cursos',navPrices:'Preus',navTeachers:'Professorat',navMedia:'Audiovisual',navContact:'Contacte',trial:'Reserva la teua prova ↗',hero:'La teua música|comença ací.',intro:'Aprendre música|se sent diferent.',course:'Cursos per a|trobar la teua veu.',teachers:'Professors que|et fan avançar.',contact:'Estem al|cor de Gandia.'},en:{navCourses:'Courses',navPrices:'Prices',navTeachers:'Teachers',navMedia:'Audio & video',navContact:'Contact',trial:'Book a trial class ↗',hero:'Your music|starts here.',intro:'Learning music|feels different.',course:'Courses to|find your voice.',teachers:'Teachers who|help you grow.',contact:'We are in|the heart of Gandia.'}};
const splitText=(selector,text)=>{const el=document.querySelector(selector);if(el)el.innerHTML=text.split('|').join('<br><em>')+'</em>';};
document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>{const lang=btn.dataset.lang,c=translations[lang];document.documentElement.lang=lang==='va'?'ca':lang;document.querySelectorAll('[data-i18n]').forEach(el=>{if(c[el.dataset.i18n])el.textContent=c[el.dataset.i18n]});splitText('.hero h1',c.hero);splitText('.intro h2',c.intro);splitText('.courses h2',c.course);splitText('.teachers h2',c.teachers);splitText('.location h2',c.contact);document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b===btn));}));

