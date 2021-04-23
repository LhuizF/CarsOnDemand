let Ncars = 0;
let i;
next()
function next() {
    let slides = document.getElementsByClassName("cars");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    Ncars=Ncars+1;
    if(Ncars > slides.length){
        Ncars=1;
    }
    slides[Ncars-1].style.display="block";
    setTimeout(next, 2000);
}

