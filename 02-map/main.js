/* -------------------------------------------------------------------------- */
/*                                     ES6                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                     Map                                    */
/* -------------------------------------------------------------------------- */

//const nombres = [1, 2, "toto", 4, 5];

// const doubleNombres = [];

/* ------------------------ boucler avec jJavascript ------------------------ */

// for (let i = 0; i < nombres.length; i++) {
//     //console.log(nombres[i]);
//     doubleNombres.push(nombres[i] * 2)
// }

//console.log(doubleNombres);

/* -------------------------------------------------------------------------- */


// const doubleNombres = nombres.map(function (item, index) {
//     if (index == 2) {
//         return "je m'appelle " + item
//     } else {

//         return item * 2
//     }
// })

// console.log(doubleNombres);
//nombres.map(item => item*2)

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//créer un array avec toutes les couleurs des images suivantes;

// const image = [

//     { height: '34px', width: '67px', color: '#ff0032' },
//     { height: '54px', width: '167px', color: '#ee0032' },
//     { height: '74px', width: '267px', color: '#000032' },
//     { height: '4px', width: '367px', color: '#cc0032' },
//     { height: '94px', width: '667px', color: '#dd0032' }

// ];


/* -------------------------------- Solution -------------------------------- */

// const colorTableau = image.map(function (item) {
//     return item.color
// });

// console.log(colorTableau);

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// créer une fonction qui convertir une chaine de caractère en majuscule
//capitalize("Coucou tout le monde!")

/* -------------------------------------------------------------------------- */

/* -------------------------------- Solution -------------------------------- */

// function capitalize(s) {
//     return s.split('').map(function (item) { return item.toUpperCase() }).join("")
// }

// console.log(capitalize('Coucou tout le monde!'));

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//mettre en majuscule un mot sur deux 

/* -------------------------------------------------------------------------- */

/* -------------------------------- Solution -------------------------------- */

// function capitalize(s) {
//     return s.split(' ').map(function (mot, index) {

//         // if (index % 2 == 0) {
//         //     return item.toUpperCase()
//         // } else {
//         //     return item
//         // }

//         return !(index % 2) ? mot.toUpperCase() : mot.toLowerCase()

//     }).join(' ')
// }
// console.log(capitalize('Coucou tout le monde!'));

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//créer un fonction qui décale les lettre d'un mot d'une lettre

/* -------------------------------------------------------------------------- */

/* -------------------------------- Solution -------------------------------- */

var array = ["t", "o", "t", "o"];

/* ------------------------------ .charCodeAt() ----------------------------- */
/* ------------- retourne un entier compris entre 0 et 65535 qui ------------ */
/* ---------------- correspond au code UTF-16 d'un caractère ---------------- */
/* ---------------- de la chaîne situé à une position donnée. --------------- */

console.log(array[1].charCodeAt());


/* -------------------------- String.fromCharCode() ------------------------- */
/* ----------------- renvoie une chaîne de caractères créée ----------------- */
/* ------------------- à partir de points de code UTF-16. ------------------- */

console.log(String.fromCharCode(116));

/* -------------------------------------------------------------------------- */


function shiftLetter(s) {

    return s.split(" ").map(function (item) {

        return item.split("").map(function (lettre) {
            return String.fromCharCode(lettre.charCodeAt() + 1)
        }).join("");

    }).join(" ")
}

console.log(shiftLetter("australopithèque test soleil"));

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */



const image = [

    { height: '34px', width: '67px', color: '#ff0032' },
    { height: '54px', width: '167px', color: '#ee0032' },
    { height: '74px', width: '267px', color: '#000032' },
    { height: '4px', width: '367px', color: '#cc0032' },
    { height: '94px', width: '667px', color: '#dd0032' }

];

/* ---------------------------------- Enocé --------------------------------- */

// tri(image, "width", "array")

// tri(image, "width", "object")

// tri(image, ["width", "color"], "array")

// tri(image, ["width", "color"], "object")

/* -------------------------------------------------------------------------- */

/* -------------------------------- Solution -------------------------------- */

function tri(liste, properties, returnType) {

    if (!Array.isArray(properties)) {
        return liste.map(function (item) {
            return item[properties]
        })
    } else {
        if (returnType == "array") {
            return liste.map(function (item) {
                return properties.map(function (prop) {
                    return item[prop]

                })
            })
        } else {
            return liste.map(function (item) {
                var o = {};
                for (let i = 0; i < properties.length; i++) {

                    o[properties[i]] = item[properties[i]]

                }
                return o;

            })
        }
    }


}

console.log(tri(image, "width", "array"));

console.log(tri(image, ["width", "color"], "array"));

console.log(tri(image, ["width", "color"], "object"));

/* -------------------------------------------------------------------------- */

