
// Cambiar steps
const nextButtons = document.querySelectorAll('.next');
const STEPS = document.querySelectorAll('.step');

nextButtons.forEach((nextButton, index) => {
    nextButton.addEventListener('click', () =>{
        if (index > 0){
            document.querySelector('#signInLink').textContent = 'Sign Out';
        }
        let sectionSeleccionada = STEPS[index];
        let sectionSiguiente = STEPS[index +1];
        sectionSeleccionada.classList.toggle('hidden');
        sectionSiguiente.classList.toggle('hidden');
    });
});


// MOBILE TABS
// Declaración de variables
let botones = document.querySelectorAll('.tablinks');
let tabContent = document.querySelectorAll('.tabcontent');

// Ocultamos todas las pestañas excepto la primera al cargar la página
tabContent.forEach((element, index) => {
    if (index !== 0) {
        element.style.display = 'none';
    } else {
        // Muestra el contenido de la primera pestaña y aplica estilo al primer boton
        document.querySelector('.tabcontent').style.display = 'block';
        const primerBoton = document.querySelector('.tablinks:first-child');
        primerBoton.classList.add('active');
    }
});

// Función para cambiar pestaña
const openTab = (evt, tabName) => {
    // ocultamos todas las pestañas
    tabContent.forEach(element => element.style.display = 'none');

    // quitamos la clase 'active' de todos los botones
    botones.forEach(element => {
        element.classList.remove('active');
    });

    // Visualizamos la pestaña seleccionada
    document.getElementById(tabName).style.display = 'block';

    // agregamos la clase 'active' al botón actual
    evt.currentTarget.classList.add('active');
};

// Asociamos el evento de clic a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', (evento) => openTab(evento, boton.textContent));
});








    