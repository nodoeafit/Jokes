/*
{
    "error: boolean;
    "category": "Programming",

    "type": "twopart",
    "setup": "¿Por qué C consigue todas las chicas y Java no tiene ninguna?",
    "delivery": "Porque C no las trata como objetos.",

    "type": "single",
    "joke": "No te despedirán del trabajo, si nunca comentas tu código y además eres el único que sabe cómo funciona",

    "flags": {
        "nsfw: boolean;
        "religious: boolean;
        "political: boolean;
        "racist: boolean;
        "sexist: boolean;
        "explicit: boolean;
    },
    "safe": true,
    "id": 6,
    "lang": "es"
}
 */

export interface Joke {
    error: boolean;
    category: category;
    type: type;
    setup: string;
    delivery: string;
    joke: string;
    flags: flags;
    safe: boolean;
    id: number;
    lang: string;
}

interface flags {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}

export enum type {
    twopart = 'twopart',
    single = 'single'
}

export enum category {
    Programming = "Programming",
    Misc = "Misc",
    Dark = "Dark",
    Pun = "Pun",
    Spooky = "Spooky",
    Christmas = "Christmas",
    Any = 'Any',
}