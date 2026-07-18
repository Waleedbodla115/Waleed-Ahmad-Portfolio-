

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}




const darkBtn = document.querySelector("#darkModeBtn");


if(darkBtn){

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");


        if(document.body.classList.contains("dark")){

            darkBtn.innerHTML = "☀️ Light Mode";

        }
        else{

            darkBtn.innerHTML = "🌙 Dark Mode";

        }


    });

}








const form = document.querySelector("#contactForm");
const successMessage = document.querySelector("#successMessage");


if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();


        if(successMessage){

            successMessage.innerHTML =
            "Thank you Waleed! Your message has been received.";

        }


        form.reset();


    });

}