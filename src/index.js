import { heroFactory } from './heroConstructor';
import { menuFactory } from './menu';
import {aboutFactory} from './about'
import {NavBar} from './NavBar'
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import { pageLoad } from './home';

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
    }else if(target === 'home'){
        let hero = heroFactory('home').hero;
        content.appendChild(hero) 
    }else{
        aboutFactory(content);
    }
    content.classList.toggle('close')
    await sleep(200);
    content.classList.toggle('hide')
    
    
}
pageLoad(content);

export{
    sleep,
    tabswitch
}