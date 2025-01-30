var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { category, type } from './joke.interface.js';
export class JokeService {
    constructor() {
        this.BASE_URL = "https://v2.jokeapi.dev/joke/"; // URL BASE PARA EL EJERCICIO :)
        //Otra forma de validar el tipo de chiste. Similar a la validación de las categorías
        // private validateType(typeData: string): type {
        //     return typeData == type.single? type.single : type.twopart;
        // }
    }
    // TIPO_CHISTE = type.single;
    //constructor
    // constructor(tipo: type) {
    //     this.TIPO_CHISTE = tipo;
    // }
    getJokeByLangAndCat(lang, cat) {
        return __awaiter(this, void 0, void 0, function* () {
            //https://v2.jokeapi.dev/joke/Programming?lang=es
            let categoryEnum;
            let urlCat = (cat == undefined || cat == '' || cat == null) ? "Any" : cat;
            const url = `${this.BASE_URL}${urlCat}?lang=${lang}`;
            const response = yield fetch(url);
            const data = yield response.json();
            categoryEnum = this.validateCategory(data.category);
            let typeJoke;
            typeJoke = (data.type == type.single) ? type.single : type.twopart;
            let joke = {
                error: data.error,
                category: categoryEnum,
                type: typeJoke,
                setup: (typeJoke == type.twopart) ? data.setup : '',
                delivery: (typeJoke == type.twopart) ? data.delivery : '',
                joke: (typeJoke == type.single) ? data.joke : '',
                flags: {
                    nsfw: data.flags.nsfw,
                    religious: data.flags.religious,
                    political: data.flags.political,
                    racist: data.flags.racist,
                    sexist: data.flags.sexist,
                    explicit: data.flags.explicit,
                },
                safe: data.safe,
                id: data.id,
                lang: data.lang,
            };
            return joke;
        });
    }
    validateCategory(dataCat) {
        switch (dataCat) {
            case 'Programming':
                return category.Programming;
                break;
            case 'Misc':
                return category.Misc;
                break;
            case 'Dark':
                return category.Dark;
                break;
            case 'Pun':
                return category.Pun;
                break;
            case 'Spooky':
                return category.Spooky;
                break;
            case 'Christmas':
                return category.Christmas;
                break;
            default:
                return category.Any;
                break;
        }
    }
}
