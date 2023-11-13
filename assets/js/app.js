const btn = document.getElementById("toggleDark");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
} 

btn.addEventListener("click", function(){
    setTheme();
})

function setTheme() {
    let currentTheme = document.body.getAttribute("theme")

    if (currentTheme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    btn.classList.remove("ri-moon-line")
    btn.classList.add("ri-sun-line")
}

function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");
    btn.classList.remove("ri-sun-line")
    btn.classList.add("ri-moon-line")
    
}