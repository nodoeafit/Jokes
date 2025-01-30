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
export var type;
(function (type) {
    type["twopart"] = "twopart";
    type["single"] = "single";
})(type || (type = {}));
export var category;
(function (category) {
    category["Programming"] = "Programming";
    category["Misc"] = "Misc";
    category["Dark"] = "Dark";
    category["Pun"] = "Pun";
    category["Spooky"] = "Spooky";
    category["Christmas"] = "Christmas";
    category["Any"] = "Any";
})(category || (category = {}));
