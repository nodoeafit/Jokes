import { category, Joke, type } from './joke.interface.js';

export class JokeService {
    BASE_URL = "https://v2.jokeapi.dev/joke/"; // URL BASE PARA EL EJERCICIO :)
    // TIPO_CHISTE = type.single;

    //constructor
    // constructor(tipo: type) {
    //     this.TIPO_CHISTE = tipo;
    // }

    async getJokeByLangAndCat(lang: string, cat?: string): Promise<Joke> { //: Promise<Joke>
        //https://v2.jokeapi.dev/joke/Programming?lang=es
        let categoryEnum: category;
        let urlCat = (cat == undefined || cat == '' || cat == null) ? "Any" : cat;
        const url = `${this.BASE_URL}${urlCat}?lang=${lang}`
        const response = await fetch(url);
        const data = await response.json()
        categoryEnum = this.validateCategory(data.category);
        let typeJoke: type;
        typeJoke = (data.type == type.single) ? type.single : type.twopart;
        let joke: Joke = {
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
    }

    private validateCategory(dataCat: string): category {
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

    //Otra forma de validar el tipo de chiste. Similar a la validación de las categorías
    // private validateType(typeData: string): type {
    //     return typeData == type.single? type.single : type.twopart;
    // }
}

