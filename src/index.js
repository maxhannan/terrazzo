import { heroFactory } from './heroConstructor';
import {NavBar} from './NavBar'

const content = document.querySelector('.content')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const tabswitch = async(e) =>{
    console.log(e.target.id)
    NavBar.toggleActive(e.target.id)
    content.classList.toggle('hide')
    await sleep(1000);
    content.innerHTML = ''
    let hero = heroFactory(e.target.id, e.target.id).hero;
    content.appendChild(hero)
    content.classList.toggle('hide')
    
}
const pageLoad = (()=>{
    const navlinks = document.querySelectorAll('.navlink');
    navlinks.forEach(link => {
        link.addEventListener('click', tabswitch)
    })
    let hero = heroFactory('home', 'Terrazzo').hero;
    content.appendChild(hero)
})();

