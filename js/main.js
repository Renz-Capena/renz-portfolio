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