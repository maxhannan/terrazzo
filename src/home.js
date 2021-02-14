import {heroFactory} from './heroConstructor'
import {tabswitch} from './index'
const pageLoad = (content)=>{
    const navlinks = document.querySelectorAll('.navlink');
    navlinks.forEach(link => {
        link.addEventListener('click', tabswitch)
    })
    let hero = heroFactory('home').hero;
    content.appendChild(hero)
};
export{
    pageLoad
}