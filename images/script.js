const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", function(){
        navLinks.classList.toggle("active");
    });
}


const form = document.querySelector("#contactForm");

if(form){
    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you Waleed! Your message has been received.");

        form.reset();

    });
}


alert("JavaScript Working!");


const darkBtn = document.querySelector("#darkModeBtn");

if(darkBtn){

    darkBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark");

    });

}


console.log("Waleed Portfolio Website JavaScript Connected!");