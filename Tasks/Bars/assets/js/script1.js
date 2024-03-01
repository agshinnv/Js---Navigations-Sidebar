"use script";


let upBar = document.querySelector(".up-bar");
let openIcon = document.querySelector(".open-icon");
let closeIcon = document.querySelector(".close-icon");


openIcon.addEventListener("click",function(){
    upBar.classList.remove("move-bar");
    this.classList.add("d-none");
    this.previousElementSibling.classList.remove("d-none");
})

closeIcon.addEventListener("click",function(){
    upBar.classList.add("move-bar");
    this.classList.add("d-none");
    this.nextElementSibling.classList.remove("d-none");
})

