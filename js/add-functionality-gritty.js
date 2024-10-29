
// DOM elements
const rotateLeftButton = document.getElementById('rotate-left-button');
const rotateRightButton = document.getElementById('rotate-right-button');
const grittyBorder = document.getElementById('gritty-border');
const gritterForm = document.getElementById('gritter-form');

// Global variables
let rotation = 0;

// Event handlers
const toggleGritty = () => {
    console.log('FIRING');
    const gritty = document.getElementById('toggle-gritty');
    toggleVisibility(gritty);
};

const rotateGritty = (event) => {
    const gritty = document.getElementById('small-gritty');
    rotate(gritty, event);
};

const addGreet = (event) => {
    event.preventDefault();
    const greet = gritterForm.greet.value;
    const newGreetLi = document.createElement('li');
    const newGreetAvatar = document.createElement('div');
    newGreetAvatar.className = "avatar";
    const newGreetText = document.createElement('span');
    newGreetText.innerText = greet;

    const greets = document.getElementById('greets').getElementsByTagName('ul')[0];
    const newerGreetLi = greets.appendChild(newGreetLi);
    newerGreetLi.appendChild(newGreetAvatar);
    newerGreetLi.appendChild(newGreetText);
    gritterForm.greet.value = "";
};

// Helpers
// Change the visibility style property from hidden to visible for a given DOM element
const toggleVisibility = (element) => {
    element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
};

// Rotate the element in a given direction
const rotate = (element, event) => {
    rotation += (event.target.id === 'rotate-left-button') ? -15 : 15;
    element.style.transform = `rotate(${rotation}deg)`;
};

// Add event handlers when mouse events are triggered
grittyBorder.onmouseenter = toggleGritty;
grittyBorder.onmouseleave = toggleGritty;
rotateLeftButton.onclick = rotateGritty;
rotateRightButton.onclick = rotateGritty;
gritterForm.onsubmit = addGreet;
