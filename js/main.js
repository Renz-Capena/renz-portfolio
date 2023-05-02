const body = document.querySelector("body")
const btn = document.querySelector("#switchThemeBtn")


btn.addEventListener("click",()=>{
    body.classList.toggle("dark_theme")
    // alert()
})