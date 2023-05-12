// ========== CHANGE THEME
const body = document.querySelector("body")
const themeBtn = document.querySelector("#switchThemeBtn")

function theme(){
    
    if(localStorage.getItem("theme")){
        document.querySelector("body").classList.add("dark_theme")
    }else{
        document.querySelector("body").classList.remove("dark_theme")

    }

}

theme()

themeBtn.addEventListener("click",function(){

    if(localStorage.getItem("theme")){
        localStorage.clear()
        theme()

    }else{
        localStorage.setItem("theme",true)
        theme()

    }
})


// ================== NAVIGATION FOR RESPONSIVE
const nav = document.querySelector("nav")
const navBtn = document.querySelector(".navBtn")
const closeBtnNav = document.querySelector(".closeBtnNav")

// nav bg layer
const bgLayer = document.querySelector(".bg_layer_nav")

const navToggle_show = () => {
    
    nav.classList.add("nav_show")
    navBtn.classList.add("display_hide")
    bgLayer.classList.add("bg_layer_nav_show")
    closeBtnNav.style.transform = `rotate(0deg)`

}

const navToggle_hide = () => {
    
    nav.classList.remove("nav_show")
    navBtn.classList.remove("display_hide")
    bgLayer.classList.remove("bg_layer_nav_show")
    
}

// Show 
navBtn.addEventListener("click",navToggle_show)

//Close nav 
closeBtnNav.addEventListener('click',function(){
    closeBtnNav.style.transform = `rotate(360deg)`
    
    setTimeout(()=>{
        navToggle_hide()
    },700)
})
bgLayer.addEventListener("click",function(){
    closeBtnNav.style.transform = `rotate(360deg)`

    setTimeout(()=>{
        navToggle_hide()
    },700)
})