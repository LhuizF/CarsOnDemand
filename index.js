const prevBtn = document.getElementById("prev-btn");
const nextbtn = document.getElementById("next-btn");
const mainCar = document.getElementById("cars");

let autoTime;
let cars = []

async function Api(){
    const apiCars = ("./ListCars.json");
    const Retorn = await fetch(apiCars);
    cars = await Retorn.json();
    display();
};

let outputImg = document.querySelector(".section2 div img");
let outputNome = document.getElementById("name");
let carNumber = 0;

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
    imgNow = cars[carNumber].img
    outputImg.src = imgNow

    nameNow = cars[carNumber].nome
    outputNome.textContent = nameNow
};

function timeInterval(){
    autoTime = setInterval(function(){
        exibir("next")
    }, 2000)
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

Api();
timeInterval();