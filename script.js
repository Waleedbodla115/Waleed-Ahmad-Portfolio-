const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

        });

    });

}





const darkBtn = document.querySelector("#darkModeBtn");


if(darkBtn){

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");


        if(document.body.classList.contains("dark")){

            darkBtn.innerHTML="☀️ Light Mode";

        }
        else{

            darkBtn.innerHTML="🌙 Dark Mode";

        }

    });

}





const form = document.querySelector("#contactForm");
const successMessage = document.querySelector("#successMessage");


if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();


        if(successMessage){

            successMessage.innerHTML="Thank you! Your message has been sent successfully.";

        }


        form.reset();


    });

}





const typingText = document.querySelector("#typing");


const words = [
    "Front-End Web Developer",
    "JavaScript Developer",
    "Full Stack Learner"
];


let wordIndex = 0;
let charIndex = 0;


function type(){

    if(!typingText) return;


    if(charIndex < words[wordIndex].length){

        typingText.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }
    else{

        setTimeout(erase,1500);

    }

}



function erase(){

    if(charIndex > 0){

        typingText.textContent = words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }
    else{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex=0;

        }


        setTimeout(type,500);

    }

}


if(typingText){

    type();

}





const revealElements = document.querySelectorAll(
"section, .project-card, .skill-card, .service-card"
);


revealElements.forEach(element=>{

    element.classList.add("reveal");

});



function reveal(){

    revealElements.forEach(element=>{

        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < window.innerHeight - 100){

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll",reveal);


reveal();const topBtn = document.querySelector("#topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        topBtn.classList.add("show");

    }
    else{

        topBtn.classList.remove("show");

    }


});



if(topBtn){

    topBtn.addEventListener("click",()=>{


        window.scrollTo({

            top:0,
            behavior:"smooth"

        });


    });

}const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});window.addEventListener("load",()=>{


    const loader = document.querySelector("#loader");


    if(loader){

        loader.classList.add("hide");

    }


});