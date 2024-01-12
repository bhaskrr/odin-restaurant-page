export default function menuComponent(){
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('class', 'menu');

    menuDiv.textContent = 'The menu content goes in this page';

    return menuDiv;
}