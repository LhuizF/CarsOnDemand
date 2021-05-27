const btnCars = document.querySelectorAll(".btn-info"); // array dos buttons

btnCars.forEach(function (car){// seleciona todos os buttons individualmente  
    car.addEventListener("click", () =>{ // adiciona um evento de click
        const infoCar = car.nextElementSibling.classList; //seleciona o primeiro elemento em relação ao button
        if(!infoCar.contains("open")){// se o elemento selecionado NÃO tiver a class "open" ele adiciona a class "open" e altera a arrow em 180 graus 
            infoCar.add("open"); car.firstChild.style.transform = "rotate(180deg)"; 
            
        }else{// remove a class "open" e reverte a alteração na arrow
            infoCar.remove("open"); car.firstChild.style.transform = "rotate(0deg)";
        };
    })
})
