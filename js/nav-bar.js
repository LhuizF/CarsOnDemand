let cont = false
const menuBtn = document.querySelector(".menu-btn");

document.querySelector(".menu-btn-icon").addEventListener("click", ()=>{
    if(cont === false){
        menuBtn.style.display = "flex"
        cont = true
    }else{
        menuBtn.style.display = "none"
        cont = false
    }
})






setInterval(()=>{
    if(window.innerWidth > 755){
        menuBtn.style.display = "flex"
        cont = true
    }
}, 2)