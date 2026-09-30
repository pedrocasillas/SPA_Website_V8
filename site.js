const menu=document.querySelector('.menu');const links=document.querySelector('.links');if(menu&&links){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));links.classList.toggle('open',!open)});links.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');links.classList.remove('open')})}
const params=new URLSearchParams(location.search);if(params.get('type')==='investor'){const select=document.querySelector('#type');if(select)select.value='investor'}

