"use strict";


let downBar = document.querySelector(".footer");
let openIcon = document.querySelector(".open-icon");
let closeIcon = document.querySelector(".close-icon");

openIcon.addEventListener("click",function(){
    downBar.classList.remove("move-bar");
    this.classList.add("d-none");
    this.nextElementSibling.classList.remove("d-none");
})

closeIcon.addEventListener("click",function(){
    downBar.classList.add("move-bar");
    this.classList.add("d-none");
    this.previousElementSibling.classList.remove("d-none");
})