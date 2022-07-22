fetch('https://mindicador.cl/api')
    .then(function (response) {
        return response.json();
    })
    .then(function (dailyIndicators) {
        console.log(dailyIndicators.uf.fecha);
        document.getElementById('UF').innerHTML =
            'El valor actual de la UF es $' + dailyIndicators.uf.valor;
    })
    .catch(function (error) {
        console.log('Requestfailed', error);
    });

document.querySelectorAll('.carusel').forEach((carusel) => {
    const items = carusel.querySelectorAll('.carusel__item');
    const buttonsHtml = Array.from(items, () => {
        return `<span class='carusel__button'></span>`;
    });

    carusel.insertAdjacentHtml('beef');
});

function datos() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let edad = document.getElementById('edad').value;
    alert(`${nombre} ${apellido}`);
}
