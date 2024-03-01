"use strict";


let rightBar = document.querySelector(".right-bar");
let openIcon = document.querySelector(".open-icon");
let closeIcon = document.querySelector(".close-icon");

openIcon.addEventListener("click",function(){
    rightBar.classList.remove("move-bar");
    this.classList.add("d-none");
    this.previousElementSibling.classList.remove("d-none");
})

closeIcon.addEventListener("click",function(){
    rightBar.classList.add("move-bar");
    this.classList.add("d-none");
    this.nextElementSibling.classList.remove("d-none");
})