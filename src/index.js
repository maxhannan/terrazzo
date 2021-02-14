import { heroFactory } from './heroConstructor';
import { menuFactory } from './menu';
import {NavBar} from './NavBar'

const content = document.querySelector('.content')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const tabswitch = async(e) =>{
    let target = e.target.id;
    let current = NavBar.getcurrent();
    NavBar.toggleActive(target)
   
    console.log({target, current})
    if(target === current){
        return;
    }

    
    content.classList.toggle('hide')
    await sleep(200);
    content.classList.toggle('close')
    await sleep(1000);
    content.innerHTML = ''
    if(target === 'menu'){
        menuFactory(content);
    }else{
        let hero = heroFactory('home', 'Terrazzo').hero;
        content.appendChild(hero) 
    }
    content.classList.toggle('close')
    await sleep(200);
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

