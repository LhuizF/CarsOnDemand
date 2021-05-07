let cars = []

async function Api(){
    const apiCars = ("./ListCars.json");
    const Retorn = await fetch(apiCars);
    cars = await Retorn.json();
    display();
}

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
}


function display(){
    imgNow = cars[carNumber].img
    outputImg.src = imgNow

    nameNow = cars[carNumber].nome
    outputNome.textContent = nameNow
}

setInterval(function auto() {
    carNumber++
    if (carNumber == cars.length) {carNumber = 0}
    display()
}, 5000)

Api();


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa