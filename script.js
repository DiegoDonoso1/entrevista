//seleccionar elementos
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

//dar clase css al seleccionar para el menu de navegacion responsivo
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

//seleccionar elementos
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.img-slide');
const contents = document.querySelectorAll('.content');

//funcion para remover y agregar clases css para manejo de slide y contenido
var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove('active');
    });

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    contents.forEach((content) => {
        content.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
    contents[manual].classList.add('active');
};

//ejecucion de la funcion por cada elemento sleccionado
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    });
});

fetch('https://mindicador.cl/api')
    .then(function (response) {
        return response.json();
    })
    .then(function (dailyIndicators) {
        let date = new Date(dailyIndicators.uf.fecha);
        const formatDate = (date) => {
            let formatted_date =
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear();
            return formatted_date;
        };
        document.getElementById('date').innerHTML = `${formatDate(date)}`;

        document.getElementById('UF').innerHTML =
            'El valor actual de la UF es $' + dailyIndicators.uf.valor;
    })
    .catch(function (error) {
        console.log('Requestfailed', error);
    });

function data() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let edad = document.getElementById('edad').value;
    alert(`${nombre} ${apellido}`);
}
