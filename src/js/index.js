
import placeslapaz from "../js/json/lapaz.js"
import placesbrochero from "../js/json/brochero.js"
import placesrabonas from "../js/json/lasrabonas.js"
import placeslomabola from "../js/json/lomabola.js"
import placesclavero from "../js/json/minaclavero.js"
import placesnono from "../js/json/nono.js"
import placespozos from "../js/json/pozos.js"
import placesrosas from "../js/json/rosas.js"
import placessjavier from "../js/json/sanjavier.js"


let main = document.getElementById('main')
let onplaces1 = document.getElementById('onplaces1')
let onplaces2 = document.getElementById('onplaces2')
let onplaces4 = document.getElementById('onplaces4')
let onplaces5 = document.getElementById('onplaces5')
let onplaces6 = document.getElementById('onplaces6')
let onplaces7 = document.getElementById('onplaces7')
let onplaces8 = document.getElementById('onplaces8')
let onplaces9 = document.getElementById('onplaces9')
let onplaces10 = document.getElementById('onplaces10')



onplaces1.addEventListener('click', () => verLugares(placeslapaz));
onplaces2.addEventListener('click', () => verLugares(placeslomabola));
onplaces4.addEventListener('click', () => verLugares(placessjavier));
onplaces5.addEventListener('click', () => verLugares(placesrosas));
onplaces6.addEventListener('click', () => verLugares(placespozos));
onplaces7.addEventListener('click', () => verLugares(placesnono));
onplaces8.addEventListener('click', () => verLugares(placesrabonas));
onplaces9.addEventListener('click', () => verLugares(placesclavero));
onplaces10.addEventListener('click', () => verLugares(placesbrochero));

function verLugares(place){
    console.log("Funcionando")
    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.flexWrap = 'wrap';
    divContainer.style.gap = '15px';

    const cardLinks = [];

    // Ejecucion de div y Cards
    
    const cards = place.map(item => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.style.height = '370px';
        divCard.style.width = '18rem';
        divCard.style.backgroundColor = '#FFFFFF';
        
        const img = document.createElement('img');
        img.setAttribute("loading", "lazy");
        img.className = 'card-img-top';
        img.borderRadius = '10px';
        img.src = item.img_1;
        divCard.appendChild(img);

        const divContent = document.createElement('div')
        divContent.className = 'card-body';
        divCard.appendChild(divContent)

        const cardTitle = document.createElement('h5')
        cardTitle.className = 'card-title';
        cardTitle.innerText = item.name;
        divContent.appendChild(cardTitle)

        const cardA = document.createElement('a')
        cardA.classList = 'btn btn-primary';
        cardA.style.border = 'none';
        cardA.href = "#";
        cardA.innerText = "Ver mas";
        divContent.appendChild(cardA)
        
        cardLinks.push(cardA);
            
        cardA.addEventListener('click', (e) => {
            e.preventDefault();
            informacionDetallada(place, item.id)

        });
        
        return divCard;
    })


    divContainer.append(...cards)
    main.appendChild(divContainer)
}


function informacionDetallada(namePlace, id){
    const encontrado = namePlace.find(obj => obj.id === id);

    main.innerHTML = " "
    const divContainer = document.createElement('div')
    divContainer.style.display = 'flex';
    divContainer.style.flexDirection = "column"
    divContainer.style.marginTop = '20px';
    divContainer.style.justifyContent = 'center';
    divContainer.style.alignItems = 'center';
    divContainer.style.flexWrap = 'wrap';
    divContainer.style.margin = '20px';
    divContainer.style.gap = '15px';

    const divContainerImgs = document.createElement('div')
    divContainerImgs.style.display = 'flex';
    divContainerImgs.style.justifyContent = 'center';
    divContainerImgs.style.gap = '10px';
    divContainerImgs.style.flexWrap = 'wrap';
    const img_1 = document.createElement('img')
    const img_2 = document.createElement('img')
    const img_3 = document.createElement('img')
    img_1.src = `${encontrado.img_1}`

    img_2.src = `${encontrado.img_2}`

    img_3.src = `${encontrado.img_3}`

    img_1.height = 191
    img_1.width = 230

    img_2.height = 191
    img_2.width = 230

    img_3.height = 191
    img_3.width = 230

    img_1.style.borderRadius = '20px';

    img_2.style.borderRadius = '20px';

    img_3.style.borderRadius = '20px';

    divContainerImgs.appendChild(img_1)
    divContainerImgs.appendChild(img_2)
    divContainerImgs.appendChild(img_3)
    divContainer.appendChild(divContainerImgs)

    const name = document.createElement('h2')
    name.innerText = `${encontrado.name}`
    divContainer.appendChild(name)

    const desp = document.createElement('p')
    const center_desp = document.createElement('center')
    desp.innerText = `${encontrado.desp}`
    desp.style.color = 'gray';
    center_desp.appendChild(desp);
    divContainer.appendChild(center_desp)

    const location = document.createElement('a')
    location.innerText = `Ver La Ubicacion`
    location.style.color = 'skyblue';
    location.style.textDecoration = 'underline';
    location.href = encontrado.location
    location.target = '_blank'
    divContainer.appendChild(location)

    main.appendChild(divContainer)
}
