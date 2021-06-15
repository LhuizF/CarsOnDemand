const prevBtn = document.getElementById("prev-btn");
const nextbtn = document.getElementById("next-btn");
const mainCar = document.getElementById("cars");
const outputImg = document.querySelector(".section2 div img");
const outputNome = document.getElementById("name");

let carNumber = 0;
let autoTime;

const cars = [
    {
        "name": "Renault Duster",
        "img" : "https://www.minasfrance.com.br/uploads/products/versions/colors/renault-duster-zen-cvt-preto-nacre.png"
    },

    {
        "name": "Chevrolet Onix",
        "img" : "https://static.wixstatic.com/media/0a1729_89ab724db89a4de694b52ae7b58035a6~mv2.png/v1/fill/w_408,h_253,al_c,q_80,usm_0.66_1.00_0.01/0a1729_89ab724db89a4de694b52ae7b58035a6~mv2.png"
    },

    {
        "name": "Hyundai HB20 ",
        "img" : "https://static.wixstatic.com/media/ecaeac_67b6d3ea7e9143d2a1013052f7983f41~mv2.png/v1/fill/w_640,h_289,al_c/ecaeac_67b6d3ea7e9143d2a1013052f7983f41~mv2.png"
    },

    {
        "name": "Volkswagen Amarok",
        "img" : "https://static.virgola.com.br/images/fd4ae2b6759e8eca4bd706c0b4224c0540dcf6e1f52b054f9d2ecb22cac8009b.png"
    },
    {
        "name": "Renault Sandero",
        "img" : "https://static.wixstatic.com/media/0a1729_124c40d409b5473f9d89f968a0c4c7eb~mv2.png/v1/crop/x_8,y_0,w_760,h_419/fill/w_450,h_248,al_c,q_85,usm_0.66_1.00_0.01/BrancoGlacier-1.webp",
    }
]



function exibir(ord) {
    switch (ord) {
        case "next": carNumber++
            if (carNumber == cars.length) {carNumber = 0 }; break;

        case "prev": if (carNumber == 0) {carNumber = cars.length };
            carNumber--; break;
    }
    display();
};

function display(){
    let imgNow = cars[carNumber].img
    outputImg.src = imgNow

    let nameNow = cars[carNumber].name
    outputNome.textContent = nameNow
};

function timeInterval(){
    autoTime = setInterval(()=>{
        exibir("next")
    }, 2000)
    display();
};

function stopTime(){
    clearInterval(autoTime)
};

prevBtn.addEventListener("mouseover", stopTime);
prevBtn.addEventListener("mouseout", timeInterval);

nextbtn.addEventListener("mouseover", stopTime);
nextbtn.addEventListener("mouseout", timeInterval);

mainCar.addEventListener("mouseover", stopTime);
mainCar.addEventListener("mouseout", timeInterval);

timeInterval()