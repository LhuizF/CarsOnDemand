const carsInfo = document.querySelectorAll(".cars-info") // array de cars
const arrow = document.querySelectorAll(".icon-arrow"); // array de arrows
const conts = [];

while(conts.length < carsInfo.length){ // adiciona false no array conts ate ficar no tamanho da array cars 
    conts.push(false)
};

function expandir(car){
    const carNunber = car - 1; //número pasasdo como parâmetro - 1 para determinar em  qual container editar  
    if(conts[carNunber] == false){// se for false na lista consts
        carsInfo[carNunber].style.display = "block"; arrow[carNunber].style.transform = "rotate(180deg)"; 
        conts[carNunber] = true
    } else{
        carsInfo[carNunber].style.display = "none"; arrow[carNunber].style.transform = "rotate(0deg)";
        conts[carNunber] = false
    };
};
