let dark = document.getElementById("dark");
let moon = document.getElementById("moon");

dark.addEventListener("click",function(){
    document.body.classList.toggle("dark-themes");
    if(document.body.classList.contains("dark-themes")){
        moon.classList.add("fa-sun");
        moon.classList.remove("fa-moon");
    }
    else{
        moon.classList.add("fa-moon");
        moon.classList.remove("fa-sun");
    }
})