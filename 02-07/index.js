const nav = document.querySelector('nav');
const menu = document.querySelector('span');
const header = document.querySelector('header');
const box = document.querySelector('.box');

menu.addEventListener('click', ()=>{
    nav.classList.toggle('showNav');
    nav.classList.toggle('ativo');
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        header.classList.add('change');
    }else{
        header.classList.remove('change');
    }
})

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});
observer.observe(box);

