/*
Para resolver el ejercicio necesitamos:
1. Obtener el chiste.
2. Renderizar el chiste en el HTML dependiendo de si es un "Two Part" o "Single"
    - Si es single, sólo deberíamos ver el chiste.
    - Si es un "Two Part" deberíamos ver la primera línea del chiste, seguido de un botón de detalle que me permita revelar la segunda parte del chiste.
    - Sólo se debe de mostrar el detalle del chiste una vez.
    - Cada uno de los botones debe de tener una función definida.
3. Mejorar el diseño sin afectar la funcionalidad del aplicativo. Use su creatividad. Puede utilizar librerías externas.
    
Si existen dudas al respecto del ejercicio por favor diríjanlas a través del Discord.
Adjunto dos imágenes básicas de como se ve el ejercicio final. 

*/
const BASE_URL = "https://v2.jokeapi.dev/joke/Any?lang=es"; // URL BASE PARA EL EJERCICIO :)

const singleElement = document.querySelector(".single");
const setupElement = document.querySelector(".setup");
const deliveryElement = document.querySelector(".delivery");
const showButton = document.querySelector(".button-details");
const btnJakeButton = document.querySelector(".button-info");

const obtenerChiste = async () => {
    const response = (await fetch (BASE_URL));
    const data = response.json();
    return data;
}

const mostrarChiste = async () => {
    const chiste = await obtenerChiste ();
    if (chiste.type == "single") {
        singleElement.innerHTML = chiste.joke;
        //singleElement.style.display = "block";
    } else {
        setupElement.innerHTML = chiste.setup;
        //setupElement.style.display = "block";
        showButton.style.display = "block";

        deliveryElement.innerHTML = chiste.delivery;
    }    
}

showButton.addEventListener ("click", () => {
 deliveryElement.style.display = "block";
 showButton.style.display = "none";
});

btnJakeButton.addEventListener ("click", () => {
    mostrarChiste();
    btnJakeButton.disabled = "true";
});
