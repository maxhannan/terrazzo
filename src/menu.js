import { heroFactory } from './heroConstructor';

const menuFactory =(content)=>{
    let hero = heroFactory('menu', 'Menu').hero;
    content.appendChild(hero)
    let menuBox = document.createElement('div');
    menuBox.classList.add('menuBox')
    content.appendChild(menuBox)
    let openBtn = document.querySelector('#openBtn');

    const openMenu = ()=>{
        menuBox.classList.toggle('open')
    }
    openBtn.addEventListener('click', openMenu);
} 

export{
    menuFactory
}