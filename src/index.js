import { menuFactory, slideshowtog } from './menu';
import {aboutFactory} from './about'
import {NavBar} from './NavBar'
import '../node_modules/@fortawesome/fontawesome-free/js/all';
import { homeFactory, pageLoad } from './home';

const content = document.querySelector('.content')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const tabswitch = async(e) =>{
    let target = e.target.id;
    let current = NavBar.getcurrent();
    
    NavBar.toggleActive(target)
    
    if(target === current){
        return;
    }
    if(current === 'menu'){
        slideshowtog();
    }
    content.classList.toggle('hide')
    await sleep(200);
    content.classList.toggle('close')
    await sleep(700);
    
    content.innerHTML = ''
    switch(target){
        case 'menu':
            menuFactory(content);
            slideshowtog();
            break;
        case 'home':
            homeFactory(content)
            break;
        case 'about':
            aboutFactory(content);
            break;
    }
    content.classList.toggle('close')
    await sleep(200);
    content.classList.toggle('hide')
    await sleep(400);    
}
    
//initial page load
pageLoad(content);

export{
    sleep,
    tabswitch
}