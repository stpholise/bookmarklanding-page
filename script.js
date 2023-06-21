const menuBtn = document.getElementById("menu-btn");
const mainNav = document.getElementById("main-nav");
const logo = document.getElementById("logo");
const featuresBtns  = document.querySelectorAll(".btn-feature");
const content = document.querySelectorAll(".content");
const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer")
const arrow = document.querySelector(".arrow")
const contactBtn = document.querySelector(".contact-btn")
const email =  document.getElementById("email")
const emailBox = document.querySelector(".email-box")
const errMsg = document.querySelector(".err-msg")
const errIcon = document.querySelector(".err-icon")

// ======================
// MENU BUTTON FUNCTION
// ======================
menuBtn.addEventListener("click", (e)=>{
    mainNav.classList.toggle("show");
    menuBtn.classList.toggle("close");
    logo.classList.toggle("invert");
    if(menuBtn.classList.contains("close")){
        menuBtn.lastElementChild.src = "./images/icon-close.svg";   
    }else{
        menuBtn.lastElementChild.src = "./images/icon-hamburger.svg";
    }
})

// ======================
// FEATURES SELECTION
// ======================
function removeShow(){
    content.forEach((x) => {
        x.classList.remove("show")
    })
    featuresBtns.forEach((x)=>{
        x.classList.remove("atv")
    })
}

featuresBtns.forEach((a)=>{
    a.addEventListener("click", (b)=>{
        removeShow()
        let atvBtn =  b.currentTarget.id;
        b.currentTarget.classList.add("atv")
     let atvContent =   document.querySelector(`.${atvBtn}-content`)
     atvContent.classList.add("show")
        
    } )
})

// ======================
// FREQUENTLY ASKED QUESTIONS
// ======================
function removeAns(){
    answers.forEach((ans)=>{
        ans.classList.remove("show")
    })
    questions.forEach((x)=>{
        x.classList.remove("atv")
    })
}
const arrowSrc = arrow.src
questions.forEach((q)=>{
    q.addEventListener("click", (e) =>{

            if(e.currentTarget.classList.contains("atv")){
             removeAns()
            }else{
                removeAns()
                e.currentTarget.classList.add("atv")
               e.currentTarget.nextElementSibling.classList.add("show")
            }
    })
})

// ==================
// CONTACT EMAIL
// ==================
const emailRegex = /^([a-zA=Z0-9_-]+)@([a-zA-Z0-9]+)(\.[a-zA-Z]+)(\.[a-zA-Z]+)?$/g

contactBtn.addEventListener("click", (e)=>{
    if(email.value.match(emailRegex)){
        email.style.border = "2px solid hsl(0, 56%, 90%)";
        errMsg.style.display = "none"
    }
    else if(email.value === ""){
        errMsg.textContent = "Email cannot be empty"
        errMsg.style.display = "block"
        errIcon.style.display = "block" 
        setTimeout(()=>{
        errMsg.style.display = "none"
        errIcon.style.display = "none"
        },1500 )
    }
    else{
        errMsg.textContent = "Woops, make sure it's an email"
        errIcon.style.fontStyle = "italic"
        errMsg.style.display = "block"
        errIcon.style.display = "block" 
        setTimeout(()=>{
        errMsg.style.display = "none"
        errIcon.style.display = "none"
        },1500 )
      
    }
})