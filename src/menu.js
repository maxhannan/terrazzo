import { sleep } from '.';
import { heroFactory } from './heroConstructor';

const menuFactory =(content)=>{
    let hero = heroFactory('menu', '').hero;
    content.appendChild(hero)
    let menuBox = document.createElement('div');
    menuBox.classList.add('menuBox')
    menuBox.innerHTML = '<img class = "menuImg" src = "./assets/winterMenu.jpg">'
    content.appendChild(menuBox)


    const titleText = document.createElement('div')
    titleText.classList.add('titleTextArrow');
    const textContent = document.createElement('h3');
    textContent.innerHTML = `
    <a id = 'openBtn' href ='#'>
        <i class="far fa-snowflake"></i>
    </a>`
    
    titleText.appendChild(textContent);
    content.appendChild(titleText);
    let openBtn = document.querySelector('#openBtn');

    const openMenu = async()=>{
        menuBox.classList.toggle('open')
       
    }
    openBtn.addEventListener('click', openMenu);
}

let i;
let menuStat
const slideshowtog = () =>{
    menuStat = !menuStat;
    slideshow();
}
const slideshow = async function(){
    if(menuStat){
        let element = document.querySelector('.imgBoxMenu')
        let i = 0;
        const backgrounds = [
            "url('./assets/lobster.jpg')",
            "url('./assets/petit.jpg')",
            "url('./assets/firsts.jpg')",
            "url('./assets/about.jpg')",
            "url('./assets/menu.jpg')",
        ]
        while(menuStat){
            await sleep(2000)
            element.style.opacity = 0;
            await sleep(1000)
            element.style.backgroundImage = backgrounds[i]
            console.log(backgrounds[i])
            await sleep(1000)
            element.style.opacity = 1;
            i++
            if(i === backgrounds.length){
                i = 0;
            }
        }
    
    };
      
}

export{
    menuFactory,
    slideshowtog
}