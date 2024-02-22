// Acordeón para los FAQs
const contenedores = document.querySelectorAll('.container');

contenedores.forEach(contenedor =>{
    contenedor.addEventListener('click', () =>{
        contenedor.classList.toggle('activa');
    });
});


// Cambio de lengua
let seleccion = document.querySelector('#lang');

seleccion.addEventListener('change', function(){
    let opcionSeleccionada = this.options[this.selectedIndex];

    if (opcionSeleccionada.value == 'English'){
        // console.log('Opción seleccionada English');
        window.location.assign('index.html')
    } else {
        // console.log('Opción seleccionada Espanol');
        window.location.assign('index_es.html')
    }
});

let seleccion1 = document.querySelector('#lang1');

seleccion1.addEventListener('change', function(){
    let opcionSeleccionada = this.options[this.selectedIndex];

    if (opcionSeleccionada.value == 'English'){
        window.location.assign('index.html')
    } else {
        window.location.assign('index_es.html')
    }
});

