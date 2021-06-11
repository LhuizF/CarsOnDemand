async function getApi(){
    const url = "https://jsonkeeper.com/b/Y1YL"
    const api = await fetch(".././ListCars.json");
    const carsApi = await api.json();
    createElement(carsApi)
}

function createElement(carsApi){
    
    for(let i = 0; i < carsApi.length; i++){
        const imgCar = carsApi[i].img;
        const nameCar = carsApi[i].name;
        const nameMarca = carsApi[i].marca
        const yearCar = carsApi[i].ano
        const carSelected = carsApi[i].details;
        const carComplement = carsApi[i].complement

        let space = " "
        const title = `${nameCar} ${nameMarca}`
        if(title.length < 15){space = "</br>"};

        const car = 
        `<div class="car">
            <img src="${imgCar} " alt="">
            <h2>${title}${space}${yearCar}</h2>
            <hr>
            <h3>Informações</h3>
            <div class = "main_info"></div>
            <div class = "btn-container">
                <button class="btn-info"><i class="material-icons">expand_more</i>Mais detalhes</button>
                <div class="cars-details"></div>
                <button class="btn-reserve">RESERVAR AGORA</button>
            </div>
        </div>`
        document.querySelector(".cars-container").innerHTML += car;

        const listInfo = document.createElement("div");
        const divInfo = document.querySelectorAll(".main_info");
        const key = Object.keys(carSelected);

        for(let i in key){
            const keyName = key[i][0].toUpperCase() + key[i].slice(1);
            const keyInfo = carSelected[key[i]][0].toUpperCase() + carSelected[key[i]].slice(1);
            const nameInfo = `${keyName}: ${keyInfo}`;
            const span = document.createElement("span");
            span.innerHTML += nameInfo;
            listInfo.append(span);
        }

        const listDetails = document.createElement("div")
        const keyComplement = Object.keys(carComplement)
        const divDetails = document.querySelectorAll(".cars-details");

        for(let i in keyComplement){
            const moreDetails = keyComplement[i];
            const divDetailsInfo = document.createElement("div");
            divDetailsInfo.classList.add("details-info")

            const span = document.createElement("span");
            const icon = document.createElement("img");

            divDetailsInfo.append(icon, span)
            const materialIcons = carComplement[keyComplement[i]]
        
            icon.src = materialIcons;
            span.innerText += moreDetails;
            listDetails.appendChild(divDetailsInfo)
        }
        
        divInfo[i].appendChild(listInfo)
        divDetails[i].appendChild(listDetails)

    }

    const btnCars = document.querySelectorAll(".btn-info");         // array dos buttons

    btnCars.forEach(function (car){                                 // seleciona todos os buttons individualmente  
        car.addEventListener("click", () =>{                        // adiciona um evento de click
            const infoCar = car.nextElementSibling.classList;       //seleciona o primeiro elemento em relação ao button
            if(!infoCar.contains("open")){                          // se o elemento selecionado NÃO tiver a class "open" ele adiciona a class "open" e altera a arrow em 180 graus 
                infoCar.add("open"); car.firstChild.style.transform = "rotate(180deg)"; 
                
            }else{                                                  // remove a class "open" e reverte a alteração na arrow
                infoCar.remove("open"); car.firstChild.style.transform = "rotate(0deg)";
            };
        })
    })
}

getApi()
