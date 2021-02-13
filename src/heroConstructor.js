const heroFactory = (section,msg)=>{
    const hero = document.createElement('div')
    hero.id = 'imgBox'
    hero.style.backgroundImage = `url('./assets/${section}.jpg')`
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