let reviewsNumber = window.localStorage.getItem("forms") || 0

const span = document.querySelector("span")
span.textContent = `Reviews Sended: ${reviewsNumber}`;

//footer content
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last-modified: " + document.lastModified;
