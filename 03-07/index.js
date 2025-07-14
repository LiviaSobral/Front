const btn = document.getElementById('btn');
const btnHover = document.getElementById('btn-hover');
const title = document.getElementById('title');


btn.addEventListener('click',()=>{alert("Você tem Virus agora!! :)")})
btnHover.addEventListener('mouseover',()=>{console.log("Você tem MAIS Virus agora!! :)"); 
title.textContent = "Pão";
})

btnHover.addEventListener('mouseout', ()=> {
    title.textContent = "Titulo";
})

const btn1 = document.getElementsByClassName('btn1');
for(let i =0; i < btn1.length; i++){
    btn1[i].addEventListener('click',() => {alert("BOTão "+ i + " CLICADO")})
}