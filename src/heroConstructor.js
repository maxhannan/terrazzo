const heroFactory = (section)=>{
    const hero = document.createElement('div')
    let msg
    switch(section){
        case 'menu':
            hero.id = 'imgBoxMenu'
            hero.classList.add('imgBoxMenu');
            msg = '';
            break;
        case 'about':
            hero.id = 'imgBoxAbout'
            msg = 'about'
            break;
        case 'home':
            hero.id = 'imgBox'
            msg = 'terrazzo<br><h6>modern italian</h6>'
            break;
    }
    const titleText = document.createElement('div')
    titleText.classList.add('titleText');
    const textContent = document.createElement('h3');
    textContent.innerHTML = msg
    titleText.appendChild(textContent);
    hero.appendChild(titleText);

    return {
        hero
    }
}
export{
    heroFactory
}