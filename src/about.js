import {heroFactory} from './heroConstructor'
const aboutFactory = (content) =>{
    let hero = heroFactory('about').hero;
    content.appendChild(hero) 
}
export{
    aboutFactory

}