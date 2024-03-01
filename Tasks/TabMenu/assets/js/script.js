"use strict";

let eyeIcon = document.querySelector(".eye");
let heartIcon = document.querySelector(".heart");
let brainIcon = document.querySelector(".brain");

let eyeText = document.querySelector(".eye-text");
let heartText = document.querySelector(".heart-text");
let brainText = document.querySelector(".brain-text");


eyeIcon.addEventListener("click",function(){

    brainText.classList.add("d-none");
    heartText.classList.add("d-none");
    eyeText.classList.remove("d-none");
    brainIcon.style.color = "#212529";
    heartIcon.style.color = "#212529";
    this.style.color = "blue";

});

heartIcon.addEventListener("click",function(){

    eyeText.classList.add("d-none");
    brainText.classList.add("d-none");
    heartText.classList.remove("d-none");
    brainIcon.style.color = "#212529";
    eyeIcon.style.color = "#212529";
    this.style.color = "red";

});


brainIcon.addEventListener("click",function(){

    eyeText.classList.add("d-none");
    heartText.classList.add("d-none");
    brainText.classList.remove("d-none");
    heartIcon.style.color = "#212529";
    eyeIcon.style.color = "#212529";
    this.style.color = "#EC825A"

});

