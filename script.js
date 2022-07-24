//seleccionar elementos para manejo de menu responsivo
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

//dar clase css al seleccionar para el menu de navegacion responsivo
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

//seleccionar elementos para slider y texto
const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.img-slide');
const contents = document.querySelectorAll('.content');

//funcion para remover y agregar clases css para manejo de slider y contenido
let sliderNav = function (manual) {
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

//seleccionar formulario
let forms = document.getElementById('forms');
//Al enviar el formulario se ejectuta la funcion
forms.addEventListener('submit', (e) => {
    e.preventDefault();

    //guardo los campos del formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let edad = document.getElementById('edad').value;
    let formulario = document.getElementById('forms');

    //validar que el correo lleve un @
    const esCorreoElectronico = (correoElectronico) =>
        /\S+@\S+/.test(correoElectronico);

    //validación basica nombre
    if (nombre.length == 0) {
        alert('Tienes que escribir tu nombre');
        document.formsId.nombre.focus();
        return;
    }

    //validación basica apellido
    if (apellido.length == 0) {
        alert('Tienes que escribir tu apellido');
        document.formsId.apellido.focus();
        return;
    }

    //validación basica edad y ser mayor a 18 años
    if (edad == '') {
        alert('Tiene que introducir un número entero en su edad.');
        document.formsId.edad.focus();
        return 0;
    } else {
        if (edad < 18) {
            alert('Debe ser mayor de 18 años.');
            document.formsId.edad.focus();
            return 0;
        }
    }

    //validación basica correo y que lleve el @
    if (correo == '') {
        alert('Tiene que introducir un correo electronico.');
        document.formsId.correo.focus();
        return 0;
    } else if (!esCorreoElectronico(correo)) {
        alert('Su correo no tiene un formato valido.');
        document.formsId.correo.focus();
        return 0;
    }

    //validación basica telefono
    if (telefono.length == 0) {
        alert('Tienes que introducir un numero de telefono');
        document.formsId.telefono.focus();
        return;
    }

    //seleccionar elementos para manejar modal
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal-close');

    //agregar clase para mostrar el modal
    modal.classList.add('modal--show');

    //agregar clase para cerrar el modal
    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('modal--show');
    });

    //insertar datos dinamicos en el modal
    document.getElementById(
        'paragraph'
    ).innerHTML = `Gracias por cotizar con nosotros ${nombre} ${apellido}, uno de nuestros ejecutivos te llamara al ${telefono} y enviará un correo ${correo} `;

    //borrar datos del formulario
    formulario.reset();
});

//Consumir api para traer el valor del uf y la fecha e insertarlo
fetch('https://mindicador.cl/api')
    .then(function (response) {
        return response.json();
    })
    .then(function (dailyIndicators) {
        //formatear fecha en formato dd//mm/yyyy
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
            'El valor actual de la UF el día de hoy es $' +
            dailyIndicators.uf.valor;
    })
    .catch(function (error) {
        console.log('Error en la peticion', error);
    });
