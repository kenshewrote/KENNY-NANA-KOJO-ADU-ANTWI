
let footer = document.createElement("footer");
document.body.appendChild(footer);


let today = new Date();
let thisYear = today.getFullYear();


let footerSelected = document.querySelector("footer");


let copyright = document.createElement("p");
copyright.innerHTML = `Kenny Nana Kojo Adu Antwi &copy; ${thisYear}`;


footerSelected.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

let skillsSection = document.querySelector("#Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}