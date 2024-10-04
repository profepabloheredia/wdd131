const mainnav = document.querySelector('.menu');
const hambutton = document.querySelector('#menuButton');


hambutton.addEventListener('click', () =>{
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    
   
});
const divElement = document.querySelector('div');
divElement.innerHTML ="<strong>babygender</strong>";

// Get the current year
const currentYear = new Date().getFullYear();
document.querySelector('#currentyear').innerHTML = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Select the element with id 'modified-date' and set its innerHTML
document.querySelector('#modified-date').innerHTML = lastModified;

*/
/*
document.getElementById("burger").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const isActive = menu.classList.toggle("active");
    this.innerHTML = isActive ? '✖' : '&#9776;';
});



const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = `${currentYear}`;
}

const lastModifiedDate = document.lastModified;

const modifiedElement = document.getElementById('modify');
if (modifiedElement) {
    modifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
}
