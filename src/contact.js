export default function contactComponent(){
    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('class', 'contact');

    contactDiv.textContent = 'The contact information goes in this page';

    return contactDiv;
}