"use strict";

// let h1 = document.querySelector("h1");

// console.log(h1.closest(".product").children);



// let elem = document.querySelector("h1");

// console.log(elem.parentNode.parentNode.nextElementSibling.firstElementChild);

// console.log(elem.nextElementSibling.lastElementChild);


// let btns = document.querySelectorAll("button");
// let elem = document.querySelector("h1")

// btns.forEach(btn => {
//     btn.addEventListener("click",function(e){
//          this.nextElementSibling.style.backgroundColor = "red";

//     })
// });


// document.addEventListener("keydown",function(e){
//     if(e.keyCode == 13){
//         document.querySelector("body").style.backgroundColor = "black";
//     }
// })

let sideBar = document.querySelector(".sidebar");
let openIcon = document.querySelector(".open-icon");
let closeIcon = document.querySelector(".close-icon");

openIcon.addEventListener("click",function(){
    sideBar.classList.remove("move-sidebar");
    this.classList.add("d-none");
    this.previousElementSibling.classList.remove("d-none");
})

closeIcon.addEventListener("click",function(){
    sideBar.classList.add("move-sidebar");
    this.classList.add("d-none");
    this.nextElementSibling.classList.remove("d-none");
})


// let sendBtn = document.querySelector(".send");
// let warning = document.querySelector(".warning");

// sendBtn.addEventListener("mouseover",function(){
//     warning.classList.remove("btn-warning");
//     warning.classList.add("btn-success");
// })

// sendBtn.addEventListener("mouseout",function(){
//     warning.classList.add("btn-warning");
//     warning.classList.remove("btn-success");
// })


// let input = document.querySelector("input");

// input.addEventListener("keypress",function(){
//     console.log("Agshin");
// })


// document.querySelector(".form-select").addEventListener("change",function(){
//     console.log(this.value);
// })



// console.log(document.querySelector("a").hasAttribute("href"));

// document.querySelector("a").setAttribute("href","salam")


// let linkedinBtn = document.querySelector(".linkedin");

// let googleBtn = document.querySelector(".google");



// linkedinBtn.addEventListener("click",function(){
//     document.querySelector("a").setAttribute("href","https://www.linkedin.com/feed/");
//     document.querySelector("a").innerText = "Go to linkedin";
// })

// googleBtn.addEventListener("click",function(){
//     document.querySelector("a").setAttribute("href","https://www.google.com/");
//     document.querySelector("a").innerText = "Go to google";
// })