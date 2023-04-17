

let contenedor = document.getElementById('container-img')
let error = document.getElementById('container-err')
let initialCount = 0
let condition = true
let intervalFetch;

reading();

function reading() {
    if(condition) {
        intervalFetch = setInterval(()=> {llamadoAlFetch()}, 1000);
        // llamadoAlFetch();
        console.log("se llama al fetch");
    }
    else
    {
        clearInterval(intervalFetch)
        console.log("finaliza fetch");
    
}
}


// llama a las img para renderizarlas en ()=>renderizar Img



function renderizarImg(img) {
    contenedor.innerHTML = "";
    img.forEach(item => {
    let div = document.createElement('div');
    div.className = "div-flex"
    let {img, description} = item;

    div.innerHTML = `<div class="card" style="width: 18rem; align-items: center">
                        <img src="${img}" class="card-img-top" alt="imágen de botella defectuosa">
                        <div class="card-body">
                            <p class="card-text">${description}</p>
                        </div>
                    </div>`

contenedor.appendChild(div)
})}



function renderizarError(error) {
    console.log("llamo a renderizar error");
    error.innerHTML = "";
    let div = document.createElement('div');
    div.className = "div-err"

    div.innerHTML = `<div class="err">
                        <h1 class="h1-err">error de conexión</h1>
                        <img src="./img/warning.jpg" class="img-err" alt="imágen de error"
                    </div>`

contenedor.appendChild(div)
}


function llamadoAlFetch () {
    fetch("myImages.json") //=> ubicacion de stock img en json
    .then(res=> res.json())
    .then(data=>{
        console.log(data, "promesa")
        renderizarImg(data)

    })
    .catch( error => {
        condition = false;
        reading();
        renderizarError(error);
        console.log("error en la promesa")
    });
}



// botón para detener el setInterval()

let stopButton = document.getElementById('stop-btn');

stopButton.addEventListener('click', ()=> {
    // Detener el intervalo usando el ID guardado en la variable
    condition = false
    console.log(condition, "condition stop");
    reading();
  });


// Botón para reanudar el setInterval()

let startButton = document.getElementById('cont-btn');

startButton.addEventListener('click', ()=> {
    // Continuar el intervalo usando el ID guardado en la variable
    // setInterval(()=> {llamadoAlFetch()}, 1000)
    condition = true
    console.log(condition, "start");
    reading();
})
