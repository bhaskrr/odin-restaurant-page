export default function aboutComponent(){
    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('class', 'about');

    const firstPara = document.createElement('p');
    firstPara.textContent = 
    "Welcome to Bare Bones! We're a neighborhood restaurant dedicated to serving up the best food in town, using fresh, locally sourced ingredients and time-honored recipes. Whether you're in the mood for a hearty steak, a delicate fish dish, or a satisfying vegetarian meal, we have something for everyone.";

    const secondPara = document.createElement('p');
    secondPara.textContent = 
    "Our warm and inviting atmosphere is perfect for a casual lunch, a romantic dinner, or a night out with friends. We also offer a great selection of wines and beers to complement your meal."

    const thirdPara = document.createElement('p');
    thirdPara.textContent = 
    "So come on down and experience Bare Bones for yourself. We can't wait to meet you!";

    aboutDiv.appendChild(firstPara);
    aboutDiv.appendChild(secondPara);
    aboutDiv.appendChild(thirdPara);

    // console.log('i got called from about.js')
    return aboutDiv;
};