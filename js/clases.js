swal("Reservá tu turno y comenzá a disfrutar!");

//variables

const clases = [

    {
        id:1,
        name : "Pilates",
        img: 'img/todas1.jpg'
    },
    {
        id:2,
        name : "Yoga",
        img: 'img/todas2.jpg'
    },
    {
        id:3,
        name : "Masajes",
        img: 'img/todas3.jpg'
    },
    {
        id:4,
        name : "Reiki Usui",
        img: 'img/todods2.jpg'
    },



];

const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const contenedorClases = document.querySelector(".contenedor-clases");
const DomTurnos = document.querySelector('.turnos');

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarClases();
})

//funciones
function mostrarClases() {
    clases.forEach(clase => {
        //scripting
        const divClase = document.createElement('div');
        divClase.classList.add('card');

        const imgClase = document.createElement('img');
        imgClase.src = clase.img;
        imgClase.classList.add('imagen-clase');

        const tituloClase = document.createElement('h3')
        tituloClase.textContent = clase.name;

        const btnFavorito = document.createElement('button');
        btnFavorito.className = "btn-favorito"
        btnFavorito.textContent = "Sacar turno";
       btnFavorito.addEventListener('click', respuestaClick)

       function respuestaClick(){
           alert('se agrego ' + clase.name + ' al carrito')
       }

        divClase.appendChild(imgClase);
        divClase.appendChild(tituloClase);
        divClase.appendChild(btnFavorito);

        contenedorClases.appendChild(divClase);
    })
} 


