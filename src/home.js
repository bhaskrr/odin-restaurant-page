export default function homeComponent(){
    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('class', 'home');

    homeDiv.textContent = 'The homepage content goes in this page'

    return homeDiv;
}