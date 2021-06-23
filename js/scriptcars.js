const loadingGif = document.querySelector(".loading")
const btnMore = document.querySelector(".btn-more")
const carsContainer = document.querySelector(".cars-container")

//loading
function loading() {
    btnMore.hidden = true
    carsContainer.classList.add("cars-container-loading")
}
function loadComplete() {
    loadingGif.hidden = true
    btnMore.hidden = false
    carsContainer.classList.remove("cars-container-loading")
}

async function getApi(){
    loading()
    const url = ("https://api.jsonbin.io/b/60c80298b274176a77e812d1");
    const api = await fetch(url);
    const carsApi = await api.json();
    loadComplete()
    createElement(carsApi)
}

function createElement(carsApi){
    console.log(carsApi)
    
    for(let i = 0; i < carsApi.length; i++){
        const imgCar = carsApi[i].img;
        const title = `${carsApi[i].marca} ${carsApi[i].name}`
        const yearCar = carsApi[i].ano
        const carDetails = carsApi[i].details;
        const carComplement = carsApi[i].complement

        let space = " "
        
        if(title.length < 15){space = "</br>"};

        const car = 
        `<div class="car">
            <img src="${imgCar} " alt="" class = "car-img">
            <h2>${title}${space}${yearCar}</h2>
            <hr>
            <h3>Informações</h3>
            <div class = "main_info"></div>
            <div class = "btn-container">
                <button class="btn-info"><i class="material-icons">expand_more</i>Mais detalhes</button>
                <div class="cars-details closed"></div>
                <button class="btn-reserve">RESERVAR AGORA</button>
            </div>
        </div>`
        carsContainer.innerHTML += car;

        const listInfo = document.createElement("div");
        const divInfo = document.querySelectorAll(".main_info");
        const key = Object.keys(carDetails);

        for(let i in key){
            const keyName = key[i][0].toUpperCase() + key[i].slice(1);
            const keyInfo = carDetails[key[i]][0].toUpperCase() + carDetails[key[i]].slice(1);
            const nameInfo = `${keyName}: ${keyInfo}`;
            const span = document.createElement("span");
            span.innerHTML += nameInfo;
            listInfo.append(span);
        }

        divInfo[i].appendChild(listInfo)

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
        
        divDetails[i].appendChild(listDetails)

    }

    const btnCarsDetails = document.querySelectorAll(".btn-info");                // array dos buttons

    btnCarsDetails.forEach((car) =>{                                             // seleciona todos os buttons individualmente  
        car.addEventListener("click", () =>{                                     // adiciona um evento de click
            const infoCar = car.nextElementSibling.classList;                   //seleciona o primeiro elemento em relação ao button
            if(!infoCar.contains("closed")){                                    // se o elemento selecionado NÃO tiver a class "closed" ele adiciona a class "closed" e altera a arrow em 180 graus 
                infoCar.add("closed"); car.firstChild.style.transform = "rotate(0deg)"; 
                
            }else{                                                  // remove a class "closed" e reverte a alteração na arrow
                infoCar.remove("closed"); car.firstChild.style.transform = "rotate(180deg)";
            };
        })
    })

    const btnCar = document.querySelectorAll(".btn-reserve")

    btnCar.forEach((car, i) =>{
        car.addEventListener("click", ()=>{
            if(i === 1){
                window.location.href = "./item1.html"
                
            }
            console.log(carsApi[i].name, carsApi[i].img)
        });
    })
}

getApi()
