import {sleep} from './index'
const NavBar = (()=>{
    let nav = document.createElement('div');
    nav.classList.add('navBar');
    
    const home = document.createElement('a');
     home.classList.add('navlink');
     home.classList.add('active');
     home.id = 'home'
     home.href = '#'
     home.innerHTML = 'home'
    const menu = document.createElement('a');
     menu.classList.add('navlink');
     menu.id = 'menu'
     menu.href = '#'
     menu.innerHTML = 'menu'
    const about = document.createElement('a');
     about.classList.add('navlink');
     about.id = 'about'
     about.href = '#'
     about.innerHTML = 'about'
     nav.appendChild(home)
     nav.appendChild(menu)
     nav.appendChild(about)
    document.body.appendChild(nav);
    
    
    let currentpage = 'home'
    const getcurrent = () =>{
        return currentpage;
    }
    
    const toggleActive = async(section)=>{
        currentpage = section;
        console.log({currentpage}, 'NAV');
        switch(section){
            case 'menu':
                menu.classList.add('menupage')
                about.classList.add('menupage')
                home.classList.add('menupage')
                about.classList.remove('active');
                menu.classList.add('active');
                home.classList.remove('active');
                await sleep(1500);
                nav.classList.add('whiteBack')
                break;
            case 'about':
                menu.classList.add('menupage')
                about.classList.add('menupage')
                home.classList.add('menupage')
                menu.classList.remove('active');
                about.classList.add('active');
                home.classList.remove('active');
                await sleep(1500);
                nav.classList.add('whiteBack')
                break;
            case 'home':
                nav.classList.remove('whiteBack')
                menu.classList.remove('menupage')
                about.classList.remove('menupage')
                home.classList.remove('menupage')
                menu.classList.remove('active');
                about.classList.remove('active');
                home.classList.add('active');
                break;
        }
        
    }
    return{
        toggleActive,
        getcurrent
    }
})();


export{
    NavBar
}