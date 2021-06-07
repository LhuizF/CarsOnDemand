const prevBtn = document.getElementById("prev-btn");
const nextbtn = document.getElementById("next-btn");
const mainCar = document.getElementById("cars");
const outputImg = document.querySelector(".section2 div img");
const outputNome = document.getElementById("name");

let carNumber = 0;
let autoTime;
let cars = [
    {
        "img": "https://static.wixstatic.com/media/0a1729_89ab724db89a4de694b52ae7b58035a6~mv2.png/v1/fill/w_408,h_253,al_c,q_80,usm_0.66_1.00_0.01/0a1729_89ab724db89a4de694b52ae7b58035a6~mv2.png",
        "nome": "Onix joy 1.0 2018",
        "id": "car1"
    },
    {
        "img": "https://static.wixstatic.com/media/0a1729_124c40d409b5473f9d89f968a0c4c7eb~mv2.png/v1/crop/x_8,y_0,w_760,h_419/fill/w_450,h_248,al_c,q_85,usm_0.66_1.00_0.01/BrancoGlacier-1.webp",
        "nome": "Sandero Authetique 1.0 2018",
        "id": "car2"
    },
    {
        "img": "https://static.wixstatic.com/media/0a1729_154cf7d34ad749b2b80567a05e44041f~mv2.png/v1/crop/x_0,y_99,w_440,h_242/fill/w_450,h_248,al_c,lg_1,q_85/voyage440.webp",
        "nome": "Voyage 1.6 trend line 2018",
        "id": "car3"
    },
    {
        "img": "https://static.wixstatic.com/media/0a1729_40ed1f4746904e1596ffd1fdbf45cc02~mv2.png/v1/crop/x_0,y_64,w_1400,h_772/fill/w_423,h_232,al_c,q_85,usm_0.66_1.00_0.01/69573_1522076091.webp",
        "nome": "Renault Logan 1.0 Authetique Prata 2018",
        "id": "car4"
    },
    {
        "img": ".././Img/audi a8.png",
        "nome": "Audi a8",
        "id": "car5"
    }
]

// async function Api(){
//     const apiCars = (".././ListCars.json");
//     const Retorn = await fetch(apiCars);
//     cars = await Retorn.json();
//     timeInterval();
// };


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

    let nameNow = cars[carNumber].nome
    outputNome.textContent = nameNow
};

function timeInterval(){
    autoTime = setInterval(function(){
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

// Api();
timeInterval()