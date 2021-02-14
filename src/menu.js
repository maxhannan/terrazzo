import { heroFactory } from './heroConstructor';

const menuFactory =(content)=>{
    let hero = heroFactory('menu', '').hero;
    content.appendChild(hero)
    let menuBox = document.createElement('div');
    menuBox.classList.add('menuBox')
    menuBox.innerHTML = '<img class = "menuImg" src = "./assets/winterMenu.jpg">'
    content.appendChild(menuBox)
    let openBtn = document.querySelector('#openBtn');

    const openMenu = async()=>{
        menuBox.classList.toggle('open')
       
    }
    openBtn.addEventListener('click', openMenu);
} 

export{
    menuFactory
}