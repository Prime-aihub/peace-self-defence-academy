/* =====================================
   THEME TOGGLE
===================================== */

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");

    if(themeToggle){
        themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
    }
}

themeToggle?.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    const isDark =
    document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

    themeToggle.innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

});


/* =====================================
   BELT POPUP
===================================== */

const beltCards =
document.querySelectorAll(".belt-card");

const beltPopup =
document.getElementById("beltPopup");

const beltTitle =
document.getElementById("beltTitle");

const beltDesc =
document.getElementById("beltDesc");

const closePopup =
document.getElementById("closePopup");

beltCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const title =
        card.dataset.title;

        const desc =
        card.dataset.desc;

        beltTitle.textContent = title;
        beltDesc.textContent = desc;

        beltPopup.style.display = "flex";
    });

});

closePopup?.addEventListener("click",()=>{

    beltPopup.style.display = "none";

});

window.addEventListener("click",(e)=>{

    if(e.target === beltPopup){

        beltPopup.style.display = "none";
    }

});


/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

    counters.forEach(counter=>{

        const target =
        +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 120;

        const updateCounter = ()=>{

            count += speed;

            if(count < target){

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";
            }

        }

        updateCounter();

    });

}

const achievementSection =
document.querySelector(".achievements");

window.addEventListener("scroll",()=>{

    if(!achievementSection) return;

    const sectionTop =
    achievementSection.getBoundingClientRect().top;

    const trigger =
    window.innerHeight - 150;

    if(sectionTop < trigger && !counterStarted){

        counterStarted = true;

        startCounters();
    }

});


/* =====================================
   SMOOTH SCROLL
===================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});


/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === `#${current}`
        ){

            link.classList.add("active");
        }

    });

});


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
document.querySelectorAll(

'.feature-card,\
.program-card,\
.belt-card,\
.counter-box,\
.schedule-card,\
.gallery-grid img,\
.coach-card,\
.review-card'

);

const revealOnScroll = ()=>{

    revealElements.forEach(element=>{

        const top =
        element.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 80;

        if(top < trigger){

            element.classList.add("show");
        }

    });

};

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =====================================
   HEADER EFFECT
===================================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.padding =
        "12px 8%";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.15)";

    }else{

        header.style.padding =
        "18px 8%";

        header.style.boxShadow =
        "none";
    }

});


/* =====================================
   TRIAL FORM VALIDATION
===================================== */

const form =
document.querySelector("form");

form?.addEventListener("submit",(e)=>{

    e.preventDefault();

    const studentName =
    form.querySelector('input[type="text"]');

    const age =
    form.querySelector('input[type="number"]');

    const phone =
    form.querySelector('input[type="tel"]');

    if(
        studentName.value.trim() === "" ||
        age.value.trim() === "" ||
        phone.value.trim() === ""
    ){

        alert("Please fill all fields");

        return;
    }

    const whatsappMessage =

`🥋 New Trial Class Enquiry

Student Name: ${studentName.value}

Age: ${age.value}

Phone Number: ${phone.value}

Interested In:
Peace Self-Defence Academy Trial Class`;

    const whatsappURL =

`https://wa.me/919004130508?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(
        whatsappURL,
        "_blank"
    );

    form.reset();

});


/* =====================================
   HERO PARALLAX EFFECT
===================================== */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    let offset =
    window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY =
        offset * 0.5 + "px";
    }

});


/* =====================================
   BELT HOVER GLOW
===================================== */

beltCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-10px) scale(1.05)";
    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0) scale(1)";
    });

});


/* =====================================
   LOADER READY
===================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* =====================================
   CONSOLE BRANDING
===================================== */

console.log(
"%c🥋 Peace Self-Defence Academy",
"font-size:18px;color:red;font-weight:bold"
);

console.log(
"%cPowered By PrimeAiHub",
"font-size:14px;color:#9b5cff"
);
