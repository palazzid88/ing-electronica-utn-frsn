

let contenedor = document.getElementById('container-img')
let initialCount = 0

let intervalFetch = setInterval(()=> {llamadoAlFetch()}, 1000);

// llamadoAlFetch();  llama a las img para renderizarlas en ()=>renderizar Img



function renderizarImg(img) {
    contenedor.innerHTML = "";
    img.forEach(item => {
    let div = document.createElement('div');
    div.className = "div-flex"
    let {img, description} = item;

    div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${description}</p>
                        </div>
                    </div>`

contenedor.appendChild(div)
}),


function count (initialCount) {
    initialCount +=
    console.log(initialCount);
}
}

function llamadoAlFetch () {
    fetch("myImages.json") //=> ubicacion de stock img en json
    .then(res=> res.json())
    .then(data=>{
        console.log(data, "promesa")
        renderizarImg(data)
        // setInterval(()=> {renderizarImg(data)}, 5000);
        // renderizarImg(data);
    })
    .catch(console.log("error en la promesa"));
}



// botón para detener el setInterval()

let stopButton = document.getElementById('stop-btn');

stopButton.addEventListener('click', ()=> {
    // Detener el intervalo usando el ID guardado en la variable
    clearInterval(intervalFetch);
  });


// Botón para reanudar el setInterval()

let startButton = document.getElementById('cont-btn');

startButton.addEventListener('click', ()=> {
    // Continuar el intervalo usando el ID guardado en la variable
    setInterval(()=> {llamadoAlFetch()}, 1000)})
