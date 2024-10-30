const mainnav = document.querySelector('.menu');
const hambutton = document.querySelector('#menuButton');


hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    
});

function pullup(){
    
}
function clearBmi(){
    window.localStorage.setItem("bmi", 0);
}

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;