const display1 = document.getElementById("car1");
const display2 = document.getElementById("car2");
const display3 = document.getElementById("car3");
const display4 = document.getElementById("car4");
const display5 = document.getElementById("car5");
const display6 = document.getElementById("car6");
const display7 = document.getElementById("car7");
const display8 = document.getElementById("car8");
const display9 = document.getElementById("car9");

const arrow1 = document.getElementById("car1-arrow");
const arrow2 = document.getElementById("car2-arrow");
const arrow3 = document.getElementById("car3-arrow");
const arrow4 = document.getElementById("car4-arrow");
const arrow5 = document.getElementById("car5-arrow");
const arrow6 = document.getElementById("car6-arrow");
const arrow7 = document.getElementById("car7-arrow");
const arrow8 = document.getElementById("car8-arrow");
const arrow9 = document.getElementById("car9-arrow");

let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let cont4 = 0;
let cont5 = 0;
let cont6 = 0;
let cont7 = 0;
let cont8 = 0;
let cont9 = 0;

function expandir(car){

    switch (car){
        case "car1" :if(cont1 == 0){
            display1.style.display = "block"; arrow1.style.transform = "rotate(180deg)"; cont1 = 1; break
        } else{
            display1.style.display = "none"; arrow1.style.transform = "rotate(0deg)"; cont1 = 0; break
        };

        case "car2" : if(cont2 == 0 ){
            display2.style.display = "block"; arrow2.style.transform += "rotate(180deg)"; cont2 = 1; break
        } else{
            display2.style.display = "none"; arrow2.style.transform = "rotate(0deg)"; cont2 = 0; break
        };

        case "car3" : if(cont3 == 0){
            display3.style.display = "block"; arrow3.style.transform = "rotate(180deg)"; cont3 = 1; break
        } else{
            display3.style.display = "none"; arrow3.style.transform = "rotate(0deg)"; cont3 = 0; break
        };

        case "car4" : if(cont4 == 0){
            display4.style.display = "block"; arrow4.style.transform = "rotate(180deg)"; cont4 = 1; break
        } else{
            display4.style.display = "none"; arrow4.style.transform = "rotate(0deg)"; cont4 = 0; break
        };

        case "car5" :if(cont5 == 0){
            display5.style.display = "block"; arrow5.style.transform = "rotate(180deg)"; cont5 = 1; break
        } else{
            display5.style.display = "none"; arrow5.style.transform = "rotate(0deg)"; cont5 = 0; break
        };

        case "car6" : if(cont6 == 0){
            display6.style.display = "block"; arrow6.style.transform = "rotate(180deg)"; cont6 = 1; break
        } else{
            display6.style.display = "none"; arrow6.style.transform = "rotate(0deg)"; cont6 = 0; break
        };

        case "car7" : if(cont7 == 0){
            display7.style.display = "block"; arrow7.style.transform = "rotate(180deg)"; cont7 = 1; break
        } else{
            display7.style.display = "none"; arrow7.style.transform = "rotate(0deg)"; cont7 = 0; break
        };

        case "car8" :if(cont8 == 0){
            display8.style.display = "block"; arrow8.style.transform = "rotate(180deg)"; cont8 = 1; break
        } else{
            display8.style.display = "none"; arrow8.style.transform = "rotate(0deg)"; cont8 = 0; break
        };

        case "car9" : if(cont9 == 0){
            display9.style.display = "block"; arrow9.style.transform = "rotate(180deg)"; cont9 = 1; break
        } else{
            display9.style.display = "none"; arrow9.style.transform = "rotate(0deg)"; cont9 = 0; break
        };
    }
};