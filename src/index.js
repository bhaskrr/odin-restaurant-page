import homeComponent from "./home";
import menuComponent from "./menu";
import aboutComponent from "./about";
import contactComponent from "./contact";

const content = document.querySelector('.content');

//default page is homepage
window.addEventListener('load',()=>{
    content.appendChild(homeComponent());
});

const btns = document.querySelectorAll('nav button');
btns.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        //removes style from currently active button
        const activeBtn = document.querySelector('.active');
        activeBtn.classList.remove('active');

        //adds style to clicked button
        btn.classList.add('active');

        //gets the data attribute from the clicked button
        const page = e.target.getAttribute('data');
        
        //tab switching logic
        if(page == 1){
            content.innerHTML = '';
            content.appendChild(homeComponent());
        }
        else if(page == 2){
            content.innerHTML = '';
            content.appendChild(menuComponent());
        }
        else if(page == 3){
            content.innerHTML = '';
            content.appendChild(aboutComponent());
        }
        else{ //page = 4
            content.innerHTML = '';
            content.appendChild(contactComponent());
        }
    })
});