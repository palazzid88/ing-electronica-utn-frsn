console.log("prueba");

let contenedor = document.getElementById('container-img')
let initialCount = 0

llamadoAlFetch(); //=> llama a las img para renderizarlas en ()=>renderizar Img
// renderImg = 


function renderizarImg(img) {
    contenedor.innerHTML = "";
    img.forEach(item => {
    let div = document.createElement('div');
    div.className = "div-flex"
    let {img} = item;

    div.innerHTML = `<img class="img-line" src="${img}">`

contenedor.appendChild(div)
}),


function count (initialCount) {
    initialCount +=
    console.log(initialCount);
}
}

function llamadoAlFetch () {
    fetch('./data.json') //=> ubicacion de stock img en json
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        setInterval(()=> {renderizarImg(data)}, 1000);
        // renderizarImg(data);
    })}