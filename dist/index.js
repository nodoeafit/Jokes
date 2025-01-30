var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { JokeService } from "./joke.service.js";
import { type } from "./joke.interface.js";
const divJoke = document.querySelector(".joke");
const btnJoke = document.querySelector("#btnJoke");
const p = document.createElement('p');
function renderJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        let jkService = new JokeService();
        let jk = yield jkService.getJokeByLangAndCat('es');
        if (jk.type == type.single) {
            p.innerHTML = jk.joke;
            p.classList.add('joke');
            divJoke.append(p);
        }
    });
}
btnJoke.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    if (p.innerHTML == '')
        yield renderJoke();
}));
